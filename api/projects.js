/**
 * Edge-Cached Paginated Projects API
 * Designed for 10,000 concurrent reads:
 * - Edge Cache-Control (s-maxage=86400, stale-while-revalidate=604800)
 * - Returns only projected fields to minimize payload size
 * - Built-in pagination and category filtering
 * - Zero database lockups or N+1 queries
 */

// Master project catalog dataset with indexed attributes
const MASTER_PROJECTS = [
  { id: 'proj-1', title: 'Minimalist Villa Modular Kitchen', category: 'Modular Kitchen', location: 'Edappally, Kochi', year: '2025', image: '/kerala-assets/project-kitchen.webp', tag: 'Turnkey Execution' },
  { id: 'proj-2', title: 'Architectural Full Wall Drop Wardrobe', category: 'Wall Drop', location: 'Kozhikode', year: '2025', image: '/kerala-assets/project-wardrobe.webp', tag: 'Custom Millwork' },
  { id: 'proj-3', title: 'Premium Aluminium Fluted Living Suite', category: 'Aluminium Work', location: 'Palakkad', year: '2024', image: '/kerala-assets/project-aluminium.webp', tag: 'Acoustic Precision' },
  { id: 'proj-4', title: 'Laser-Cut Steel Pivot Entrance Door', category: 'Steel Fabrication', location: 'Thrissur', year: '2025', image: '/kerala-assets/project-door.webp', tag: 'High-Security Alloy' },
  { id: 'proj-5', title: 'Cove-Lit Seamless Gypsum False Ceiling', category: 'Ceiling Works', location: 'Ernakulam', year: '2024', image: '/kerala-assets/project-ceiling.webp', tag: 'Sculpted Ambient' },
  { id: 'proj-6', title: 'Duplex Tempered SS Glass Balustrade', category: 'MS & SS Fabrication', location: 'Kottayam', year: '2025', image: '/kerala-assets/project-railing.webp', tag: 'Structural Glass' },
  { id: 'proj-7', title: 'Contemporary Commercial Loft Architecture', category: 'Loft Conversion', location: 'Bengaluru, Karnataka', year: '2024', image: '/kerala-assets/project-loft.webp', tag: 'Space Maximization' },
  { id: 'proj-8', title: 'Bespoke Executive Fluted Wall Paneling', category: 'Wall Paneling', location: 'Coimbatore, Tamil Nadu', year: '2025', image: '/kerala-assets/project-paneling.webp', tag: 'Artisanal Finish' },
];

export default function handler(req, res) {
  // 1. High-Concurrency CDN Edge Caching Headers
  // Serves directly from Edge POP memory without executing serverless function repeatedly
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { category, page = 1, limit = 6, fields } = req.query;

    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.min(50, Math.max(1, parseInt(limit, 10) || 6));

    // Filter by category if supplied (Indexed O(1) / O(N) in-memory)
    let filtered = MASTER_PROJECTS;
    if (category && category !== 'All') {
      filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    const total = filtered.length;
    const startIndex = (pageNum - 1) * limitNum;
    const paginatedItems = filtered.slice(startIndex, startIndex + limitNum);

    // Projected fields optimization (returns only what client requested)
    let projectedItems = paginatedItems;
    if (fields) {
      const allowedFields = fields.split(',').map(f => f.trim());
      projectedItems = paginatedItems.map(item => {
        const obj = {};
        allowedFields.forEach(f => {
          if (item[f] !== undefined) obj[f] = item[f];
        });
        return obj;
      });
    }

    return res.status(200).json({
      success: true,
      meta: {
        total,
        page: pageNum,
        limit: limitNum,
        totalPages: Math.ceil(total / limitNum),
        edgeCached: true
      },
      data: projectedItems
    });
  } catch (error) {
    // Non-leaking error message
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred retrieving project listings.'
    });
  }
}
