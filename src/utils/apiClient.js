/**
 * High-Concurrency Production API Client
 * Designed to handle 10,000 concurrent client sessions gracefully.
 *
 * Capabilities:
 * - Dual-layer Cache (In-Memory Map + LocalStorage fallback)
 * - Stale-While-Revalidate (SWR) cache strategy
 * - In-flight Request Deduplication (prevents thundering herd problem)
 * - Exponential backoff retry with random jitter
 * - Per-request AbortController timeout (prevents socket exhaustion)
 * - Graceful degradation & offline fallbacks
 */

class ApiClient {
  constructor() {
    this.memoryCache = new Map();
    this.inFlightRequests = new Map();
    this.defaultTTL = 5 * 60 * 1000; // 5 minutes cache TTL
    this.defaultTimeout = 8000; // 8 seconds
  }

  /**
   * Generates a stable cache key
   */
  _getCacheKey(url, options = {}) {
    const method = options.method || 'GET';
    const body = options.body ? (typeof options.body === 'string' ? options.body : JSON.stringify(options.body)) : '';
    return `${method}:${url}:${body}`;
  }

  /**
   * Read from Memory or LocalStorage Cache
   */
  getFromCache(key) {
    // 1. Check fast in-memory map
    const memItem = this.memoryCache.get(key);
    if (memItem) {
      const isExpired = Date.now() > memItem.expiresAt;
      return { data: memItem.data, isStale: isExpired };
    }

    // 2. Check localStorage for persistent cache
    try {
      const stored = localStorage.getItem(`hyzin_cache_${key}`);
      if (stored) {
        const parsed = JSON.parse(stored);
        const isExpired = Date.now() > parsed.expiresAt;
        // Promote to memory cache
        this.memoryCache.set(key, parsed);
        return { data: parsed.data, isStale: isExpired };
      }
    } catch {
      // LocalStorage might be disabled in private mode
    }

    return null;
  }

  /**
   * Save to Memory & LocalStorage Cache
   */
  saveToCache(key, data, ttlMs = this.defaultTTL) {
    const cacheEntry = {
      data,
      expiresAt: Date.now() + ttlMs,
      savedAt: Date.now()
    };

    // Keep memory cache under 150 items (LRU prune)
    if (this.memoryCache.size > 150) {
      const firstKey = this.memoryCache.keys().next().value;
      if (firstKey) this.memoryCache.delete(firstKey);
    }
    this.memoryCache.set(key, cacheEntry);

    try {
      localStorage.setItem(`hyzin_cache_${key}`, JSON.stringify(cacheEntry));
    } catch {
      // Ignore quota exceeded errors
    }
  }

  /**
   * Sleep helper with jitter
   */
  _wait(ms) {
    const jitter = Math.random() * 200;
    return new Promise((resolve) => setTimeout(resolve, ms + jitter));
  }

  /**
   * Resilient Fetch with Retry, Timeout & Deduplication
   */
  async fetchWithRetry(url, options = {}, retries = 2, delayMs = 1000) {
    const key = this._getCacheKey(url, options);
    const isGet = !options.method || options.method === 'GET';

    // 1. In-flight Deduplication: If this exact request is already flying, return its promise!
    if (isGet && this.inFlightRequests.has(key)) {
      return this.inFlightRequests.get(key);
    }

    const requestPromise = (async () => {
      for (let attempt = 0; attempt <= retries; attempt++) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), options.timeout || this.defaultTimeout);

        try {
          const fetchOptions = {
            ...options,
            signal: controller.signal,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              ...(options.headers || {})
            }
          };

          const response = await fetch(url, fetchOptions);
          clearTimeout(timeoutId);

          if (!response.ok) {
            // If server returned 429 (Rate Limited) or 503 (Overloaded)
            if ((response.status === 429 || response.status >= 500) && attempt < retries) {
              await this._wait(delayMs * Math.pow(2, attempt));
              continue;
            }
            throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
          }

          const data = await response.json();
          if (isGet) {
            this.saveToCache(key, data, options.ttl);
          }
          return data;
        } catch (error) {
          clearTimeout(timeoutId);
          const isAbort = error.name === 'AbortError';

          if (attempt < retries) {
            await this._wait(delayMs * Math.pow(2, attempt));
          } else {
            // Final failure: check if we have stale cache to degrade gracefully!
            if (isGet) {
              const cached = this.getFromCache(key);
              if (cached?.data) {
                console.warn(`[HYZIN API Resilience]: Serving stale cache for ${url} after network exhaustion.`);
                return cached.data;
              }
            }
            throw error;
          }
        }
      }
    })();

    if (isGet) {
      this.inFlightRequests.set(key, requestPromise);
      requestPromise.finally(() => {
        this.inFlightRequests.delete(key);
      });
    }

    return requestPromise;
  }

  /**
   * SWR (Stale While Revalidate) Query
   * Returns immediately if cached, while fetching latest in background.
   */
  async swr(url, options = {}, onUpdated = null) {
    const key = this._getCacheKey(url, options);
    const cached = this.getFromCache(key);

    if (cached) {
      // Revalidate in background if stale
      if (cached.isStale) {
        this.fetchWithRetry(url, options)
          .then((freshData) => {
            if (onUpdated) onUpdated(freshData);
          })
          .catch((err) => {
            console.debug('[HYZIN SWR Revalidation skipped]:', err.message);
          });
      }
      return cached.data;
    }

    // No cache: perform full request
    return this.fetchWithRetry(url, options);
  }

  /**
   * POST Consultation Brief with rate limit safety & dual dispatch
   */
  async submitConsultation(payload) {
    const endpoint = '/api/consultation';
    try {
      return await this.fetchWithRetry(endpoint, {
        method: 'POST',
        body: JSON.stringify(payload)
      }, 1, 1000);
    } catch {
      // Direct FormSubmit fallback if serverless endpoint is unreachable
      return await this.fetchWithRetry('https://formsubmit.co/ajax/Muhammedashad395@gmail.com', {
        method: 'POST',
        body: JSON.stringify({
          _subject: `HYZIN Interior Consultation: ${payload.name || 'Patron'}`,
          ...payload
        })
      }, 1, 1000);
    }
  }
}

export const apiClient = new ApiClient();
export default apiClient;
