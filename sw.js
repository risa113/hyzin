/**
 * HYZIN Spatial Architecture — Service Worker (High Concurrency Edge Offloader)
 * Drastically reduces CDN & server load for 10,000 concurrent visitors.
 * 
 * Strategy:
 * - Cache-First for static hashed assets (/assets/*, fonts, images)
 * - Network-First with Cache-Fallback for navigation requests
 */

const CACHE_NAME = 'hyzin-studio-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/favicon.png',
  '/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Skip non-GET requests and browser extensions
  if (request.method !== 'GET' || !url.protocol.startsWith('http')) {
    return;
  }

  // 1. Static Hashed Chunks & Kerala Assets: Cache First
  if (
    url.pathname.startsWith('/assets/') ||
    url.pathname.startsWith('/kerala-assets/') ||
    url.pathname.endsWith('.woff2') ||
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.webp')
  ) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return networkResponse;
        }).catch(() => {
          return caches.match('/favicon.png');
        });
      })
    );
    return;
  }

  // 2. Navigation / HTML requests: Network First with Cache Fallback
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() => {
        return caches.match('/index.html');
      })
    );
    return;
  }

  // 3. All other requests: Network first with stale cache fallback
  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});
