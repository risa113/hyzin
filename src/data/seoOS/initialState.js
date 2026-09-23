// Initial state for Local SEO Operating System (persistent business context, default competitors, tasks, and data connections)

export const initialBusinessContext = {
  businessInfo: {
    name: "Hyzin Wood & Steel Interior Solutions",
    website: "https://hyzin.in",
    gbpUrl: "https://maps.google.com/?cid=1234567890",
    phone: "+91 88480 23041",
    email: "contact@hyzin.in",
    address: "NH 66, Edappally",
    city: "Kochi",
    state: "Kerala",
    country: "India",
    zip: "682024",
    businessType: "Local Service Business & Showroom",
    industry: "Interior Design & Metal Fabrication",
    primaryCategory: "Interior Designer",
    secondaryCategories: [
      "Metal Fabricator",
      "Steel Door Supplier",
      "Cabinet Maker",
      "Interior Decorator",
      "Ceiling Contractor"
    ],
    openingHours: "Mon-Sat: 09:00 AM - 07:00 PM, Sun: Closed",
    serviceAreas: ["Kochi", "Ernakulam", "Thrissur", "Kottayam", "Alappuzha", "Calicut"],
    foundedYear: "2016"
  },
  services: [
    {
      id: "srv-1",
      name: "Aluminium Interior",
      description: "Custom modular aluminium kitchen frames, cupboards, and partition structures designed for humid coastal weather.",
      targetKeyword: "aluminium interior work in kochi",
      targetLocation: "Kochi, Ernakulam",
      priority: "P1",
      websiteUrl: "https://hyzin.in/#services",
      gbpService: true,
      conversionType: "Phone Call & Quote Request"
    },
    {
      id: "srv-2",
      name: "Wall Drop & Paneling",
      description: "Acoustic wall drops, fluted wood paneling, charcoal paneling, and luxury TV unit accent wall solutions.",
      targetKeyword: "wall paneling designers kochi",
      targetLocation: "Kochi, Ernakulam",
      priority: "P1",
      websiteUrl: "https://hyzin.in/#services",
      gbpService: true,
      conversionType: "Quote Request"
    },
    {
      id: "srv-3",
      name: "Kitchen Cabinet Fabrication",
      description: "Waterproof marine plywood & aluminium frame kitchen cabinets with soft-close Blum/Hettich hardware.",
      targetKeyword: "modular kitchen cabinets kochi",
      targetLocation: "Kochi",
      priority: "P1",
      websiteUrl: "https://hyzin.in/#services",
      gbpService: true,
      conversionType: "WhatsApp Inquiry"
    },
    {
      id: "srv-4",
      name: "Loft Storage Closets",
      description: "Maximize vertical storage spaces with custom sliding loft wardrobe extensions and concealed storage units.",
      targetKeyword: "loft cupboard works ernakulam",
      targetLocation: "Ernakulam",
      priority: "P2",
      websiteUrl: "https://hyzin.in/#services",
      gbpService: true,
      conversionType: "Quote Request"
    },
    {
      id: "srv-5",
      name: "Steel Doors & Security Gates",
      description: "Heavy-duty custom steel safety doors, wood-grain security steel doors, and modern metal main entrance gates.",
      targetKeyword: "custom steel doors supplier kochi",
      targetLocation: "Kochi, Kerala",
      priority: "P1",
      websiteUrl: "https://hyzin.in/#services",
      gbpService: true,
      conversionType: "Phone Call"
    },
    {
      id: "srv-6",
      name: "False Ceiling & Gypsum Design",
      description: "Cove lighting ceiling design, PVC ceiling panels, and moisture-resistant gypsum plasterboard false ceilings.",
      targetKeyword: "false ceiling contractors in kochi",
      targetLocation: "Kochi",
      priority: "P2",
      websiteUrl: "https://hyzin.in/#services",
      gbpService: false,
      conversionType: "Quote Request"
    },
    {
      id: "srv-7",
      name: "Steel & MS Structural Fabrication",
      description: "Structural steel roofing, MS staircase handrails, balcony glass-steel railings, and architectural pergola fabrication.",
      targetKeyword: "ms fabrication works near me",
      targetLocation: "Kochi, Kerala",
      priority: "P2",
      websiteUrl: "https://hyzin.in/#services",
      gbpService: true,
      conversionType: "Phone Call"
    }
  ],
  targetMarket: {
    primaryCity: "Kochi",
    secondaryCities: ["Ernakulam", "Thrissur", "Kottayam", "Alappuzha"],
    neighborhoods: ["Edappally", "Kakkanad", "Palarivattom", "Vyttila", "Aluva", "Fort Kochi"],
    serviceAreas: ["Ernakulam District", "Thrissur District", "Kottayam District"],
    targetCustomerType: "Homeowners, Villa Builders, Interior Designers, Commercial Office Contractors",
    b2bOrB2C: "Hybrid (70% B2C Residential, 30% B2B Architects & Contractors)",
    mainProblems: [
      "Termite damage in wooden cabinets due to high humidity",
      "Corrosion on standard iron fabrications near coastal salt air",
      "Delayed project delivery by unorganized local carpenters",
      "Lack of 3D visualization before starting fabrication work",
      "Inconsistent pricing and hidden costs during installation"
    ],
    buyingTriggers: [
      "New home construction finishing stage",
      "Renovation before festival/wedding season",
      "Structural weakness or rust in existing steel doors",
      "Desire for termite-proof aluminium modular kitchen solutions"
    ]
  },
  businessGoals: [
    "Phone calls",
    "WhatsApp leads",
    "Website leads",
    "Appointment bookings",
    "Quote requests"
  ]
};

export const initialCompetitors = [
  {
    id: "comp-1",
    name: "Kerala Aluminium & Interior Hub",
    type: "direct", // direct | search
    gbpUrl: "https://maps.google.com/?cid=9988776655",
    website: "https://keralaaluminiumhub.com",
    address: "Palarivattom Bypass, Kochi",
    primaryCategory: "Interior Designer",
    secondaryCategories: ["Aluminium Supplier", "Cabinet Maker", "Kitchen Furniture Store"],
    rating: 4.8,
    reviewCount: 142,
    reviewVelocity: "4.2 / month",
    photoCount: 88,
    gbpPostFrequency: "2x per week",
    services: ["Aluminium Kitchen", "Wall Paneling", "Loft Wardrobe", "Steel Gates"],
    serviceAreas: ["Kochi", "Ernakulam", "Kakkanad"],
    topKeywords: ["aluminium kitchen kochi", "aluminium interior work near me", "wall paneling designers"],
    backlinksCount: 125,
    citationCount: 48,
    notes: "Top competitor for aluminium kitchen searches in Edappally/Palarivattom zone."
  },
  {
    id: "comp-2",
    name: "DecoCraft Steel & Interior Solutions",
    type: "search",
    gbpUrl: "https://maps.google.com/?cid=5544332211",
    website: "https://decocraftinteriors.in",
    address: "Kakkanad InfoPark Road, Kochi",
    primaryCategory: "Interior Decorator",
    secondaryCategories: ["Metal Fabricator", "Door Supplier", "Furniture Manufacturer"],
    rating: 4.6,
    reviewCount: 89,
    reviewVelocity: "2.1 / month",
    photoCount: 64,
    gbpPostFrequency: "1x per month",
    services: ["Steel Security Doors", "MS Fabrication", "False Ceiling", "Wall Drops"],
    serviceAreas: ["Kochi", "Kakkanad", "Aluva"],
    topKeywords: ["custom steel doors kochi", "ms fabrication works ernakulam", "false ceiling cost kochi"],
    backlinksCount: 78,
    citationCount: 32,
    notes: "Ranks strongly for commercial MS fabrication and office interior searches."
  },
  {
    id: "comp-3",
    name: "Malabar Modular Interiors & Fabrication",
    type: "direct",
    gbpUrl: "https://maps.google.com/?cid=1122334455",
    website: "https://malabarmodulars.com",
    address: "Vyttila Mobility Hub Junction, Kochi",
    primaryCategory: "Cabinet Maker",
    secondaryCategories: ["Interior Designer", "Ceiling Contractor", "Kitchen Supply Store"],
    rating: 4.9,
    reviewCount: 215,
    reviewVelocity: "6.5 / month",
    photoCount: 140,
    gbpPostFrequency: "3x per week",
    services: ["Modular Kitchen", "Loft Closet", "WPC Ceiling", "Charcoal Wall Panels"],
    serviceAreas: ["Kochi", "Ernakulam", "Kottayam", "Thrissur"],
    topKeywords: ["modular kitchen cabinets kochi", "loft cupboard price", "pvc ceiling contractor"],
    backlinksCount: 210,
    citationCount: 62,
    notes: "Aggressive review generation strategy and daily GBP posts with offers."
  }
];

export const initialDataSources = {
  gsc: {
    status: "connected", // connected 🟢 | incomplete 🟡 | disconnected 🔴
    lastUpdated: "2026-09-23 10:15 AM",
    account: "analytics@hyzin.in",
    verifiedDataAvailable: true
  },
  ga4: {
    status: "connected",
    lastUpdated: "2026-09-23 10:15 AM",
    account: "G-HYZIN99281",
    verifiedDataAvailable: true
  },
  gbp: {
    status: "connected",
    lastUpdated: "2026-09-23 11:00 AM",
    account: "hyzin.interiors@gmail.com",
    verifiedDataAvailable: true
  },
  ahrefs: {
    status: "disconnected",
    lastUpdated: "Never",
    account: "Not Connected",
    verifiedDataAvailable: false
  },
  semrush: {
    status: "incomplete",
    lastUpdated: "2026-09-15 (CSV Import)",
    account: "Manual CSV Upload",
    verifiedDataAvailable: true
  }
};

export const initialGscData = [
  { query: "aluminium interior work in kochi", position: 3.2, impressions: 1450, clicks: 182, ctr: "12.55%", landingPage: "https://hyzin.in/#services", status: "Page 1 - Top 3" },
  { query: "custom steel doors kochi", position: 5.8, impressions: 980, clicks: 64, ctr: "6.53%", landingPage: "https://hyzin.in/#services", status: "Page 1 - High CTR Opportunity" },
  { query: "modular kitchen cabinets kochi", position: 11.4, impressions: 2300, clicks: 45, ctr: "1.95%", landingPage: "https://hyzin.in/#services", status: "Page 2 Opportunity (Strike Distance)" },
  { query: "wall paneling designers kochi", position: 14.1, impressions: 1800, clicks: 28, ctr: "1.55%", landingPage: "https://hyzin.in/", status: "Page 2 Opportunity (High Impressions)" },
  { query: "ms fabrication works near me", position: 8.9, impressions: 1200, clicks: 52, ctr: "4.33%", landingPage: "https://hyzin.in/#services", status: "Page 1 - Low CTR Fix Needed" },
  { query: "false ceiling cost per sq ft in kochi", position: 18.3, impressions: 850, clicks: 12, ctr: "1.41%", landingPage: "https://hyzin.in/", status: "Page 2 Opportunity - Needs Dedicated Landing Page" },
  { query: "loft cupboard work ernakulam", position: 4.1, impressions: 620, clicks: 58, ctr: "9.35%", landingPage: "https://hyzin.in/#services", status: "Page 1 Winner" }
];

export const initialCitations = [
  { platform: "Google Business Profile", status: "Correct", napMatch: "100%", url: "https://maps.google.com/?cid=1234567890", priority: "P1" },
  { platform: "Justdial Kochi", status: "Incorrect Address", napMatch: "75%", url: "https://justdial.com/kochi/hyzin", priority: "P1", fixNotes: "ZIP code shows 682025 instead of 682024" },
  { platform: "Sulekha Ernakulam", status: "Missing", napMatch: "0%", url: "N/A", priority: "P2", fixNotes: "Listing needs creation for interior fabrication category" },
  { platform: "IndiaMART", status: "Correct", napMatch: "100%", url: "https://indiamart.com/hyzin-fabrications", priority: "P2" },
  { platform: "TradeIndia", status: "Duplicate Listing", napMatch: "60%", url: "https://tradeindia.com/hyzin-old", priority: "P1", fixNotes: "Old phone number listed on secondary profile" },
  { platform: "Facebook Business Page", status: "Correct", napMatch: "100%", url: "https://facebook.com/hyzininteriors", priority: "P3" },
  { platform: "YellowPages India", status: "Missing", napMatch: "0%", url: "N/A", priority: "P3", fixNotes: "Submit NAP + website link" }
];

export const initialActionTasks = [
  {
    id: "task-101",
    title: "Add missing GBP Secondary Category: Cabinet Maker & Door Supplier",
    description: "Competitor teardown shows 3/3 top ranking competitors feature Cabinet Maker as a secondary category on GBP.",
    source: "GBP Category Audit",
    category: "GBP",
    url: "https://business.google.com/",
    keyword: "modular kitchen cabinets kochi",
    competitor: "Malabar Modulars",
    priority: "P1",
    impact: "High",
    effort: "Low",
    confidence: "High",
    intent: "High",
    owner: "SEO Specialist",
    dueDate: "2026-09-30",
    status: "In Progress", // Backlog | Ready | In Progress | Review | Completed
    weekNumber: 1
  },
  {
    id: "task-102",
    title: "Update GBP Services with term 'Aluminium Modular Kitchen Frames'",
    description: "Expand existing GBP services with detailed pricing ranges and location tags for Kochi & Ernakulam.",
    source: "GBP Services Audit",
    category: "GBP",
    url: "https://business.google.com/",
    keyword: "aluminium interior work in kochi",
    competitor: "Kerala Aluminium Hub",
    priority: "P1",
    impact: "High",
    effort: "Low",
    confidence: "High",
    intent: "High",
    owner: "Content Strategist",
    dueDate: "2026-10-02",
    status: "Ready",
    weekNumber: 3
  },
  {
    id: "task-103",
    title: "Build Dedicated Service Page: Modular Kitchen Cabinets Kochi",
    description: "Currently query ranks on Page 2 (pos 11.4) linking to generic services anchor. Build dedicated landing page with schema.",
    source: "GSC Analysis & Money Page Audit",
    category: "Website",
    url: "https://hyzin.in/#services",
    keyword: "modular kitchen cabinets kochi",
    competitor: "Malabar Modulars",
    priority: "P1",
    impact: "High",
    effort: "Medium",
    confidence: "High",
    intent: "High",
    owner: "Technical Web Developer",
    dueDate: "2026-10-08",
    status: "Backlog",
    weekNumber: 5
  },
  {
    id: "task-104",
    title: "Fix Incorrect ZIP Code on Justdial Kochi & Remove Duplicate TradeIndia Profile",
    description: "NAP inconsistency detected. Justdial shows 682025 (should be 682024). Duplicate on TradeIndia lists retired phone number.",
    source: "Local Citation Audit",
    category: "Citations",
    url: "https://justdial.com",
    keyword: "N/A",
    competitor: "N/A",
    priority: "P1",
    impact: "High",
    effort: "Low",
    confidence: "High",
    intent: "Medium",
    owner: "Citation Specialist",
    dueDate: "2026-10-15",
    status: "Backlog",
    weekNumber: 7
  },
  {
    id: "task-105",
    title: "Publish 8-Week Photo Plan (Exterior Showroom, Fabrication Workshop & Team)",
    description: "GBP photo count (24) lags behind competitors (88-140). Execute weekly photo batch upload.",
    source: "GBP Photo Audit",
    category: "GBP",
    url: "https://business.google.com/",
    keyword: "interior designers in edappally",
    competitor: "Kerala Aluminium Hub",
    priority: "P2",
    impact: "Medium",
    effort: "Low",
    confidence: "High",
    intent: "Medium",
    owner: "Social Media Manager",
    dueDate: "2026-10-05",
    status: "In Progress",
    weekNumber: 3
  }
];
