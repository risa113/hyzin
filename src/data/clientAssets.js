// Central Client Assets Registry
// Connects and organizes all authentic Kerala assets (72 Authentic Client Photos)

export const assetUrl = (filename) => `/kerala-assets/${encodeURIComponent(filename)}`;

// Key Brand Assets
export const BRAND_ASSETS = {
  logo3D: assetUrl("WhatsApp Image 2026-09-22 at 3.18.22 PM.jpeg"),
  logoBadge: assetUrl("WhatsApp Image 2026-09-22 at 3.18.25 PM.jpeg"),
  businessCard: assetUrl("WhatsApp Image 2026-09-22 at 3.18.27 PM.jpeg")
};

// All 72 Master Client Photos Index with Metadata
export const ALL_KERALA_PHOTOS = [
  { id: 1, title: "Master Suite Wall Drop & Loft Architecture", category: "Wall Drop", location: "Calicut, Kerala", filename: "WhatsApp Image 2026-09-22 at 3.14.03 PM.jpeg", tags: ["Wardrobe", "Wall Drop", "Loft", "Soft Mauve"] },
  { id: 2, title: "Artisanal Living & Dining Fluted Partition", category: "Paneling", location: "Thrissur, Kerala", filename: "WhatsApp Image 2026-09-22 at 3.15.08 PM.jpeg", tags: ["Paneling", "CNC Jali", "Fluted Wood", "Divider"] },
  { id: 3, title: "Backlit Onyx Media Wall & Gypsum Ceiling", category: "Ceiling", location: "Ernakulam, Kerala", filename: "WhatsApp Image 2026-09-22 at 3.15.13 PM.jpeg", tags: ["Ceiling", "Cove Lighting", "Onyx Marble", "TV Wall"] },
  { id: 4, title: "Designer Bathroom Vanity & Pill LED Mirror", category: "Accessories", location: "Bengaluru", filename: "WhatsApp Image 2026-09-22 at 3.15.19 PM.jpeg", tags: ["Bathroom", "Vanity", "Peacock Blue", "LED Mirror"] },
  { id: 5, title: "Bedroom Wall Drop with Gold Vertical Profiles", category: "Wall Drop", location: "Kochi, Kerala", filename: "WhatsApp Image 2026-09-22 at 3.15.23 PM.jpeg", tags: ["Wardrobe", "Gold Trims", "Display Niche", "Loft"] },
  { id: 6, title: "Rose Gold Acrylic Modular Kitchen Suite", category: "Kitchen Cabinet", location: "Kochi, Kerala", filename: "WhatsApp Image 2026-09-22 at 3.15.27 PM.jpeg", tags: ["Kitchen", "Rose Gold", "Acrylic", "Quartz"] },
  { id: 7, title: "Luxury Sanitary Fixtures & Brassware Suite", category: "Accessories", location: "Kochi, Kerala", filename: "WhatsApp Image 2026-09-22 at 3.15.33 PM.jpeg", tags: ["Sanitaryware", "Brassware", "Kohler", "Bathroom"] },
  { id: 8, title: "Sensor Dimmable Vanity Mirror & Counter", category: "Accessories", location: "Trivandrum", filename: "WhatsApp Image 2026-09-22 at 3.15.41 PM.jpeg", tags: ["Mirror", "Sensory Light", "Vanity", "Counter"] },
  { id: 9, title: "Master Bath Rain Shower & Concealed Diverter", category: "Accessories", location: "Kottayam", filename: "WhatsApp Image 2026-09-22 at 3.15.48 PM.jpeg", tags: ["Shower", "Concealed Valve", "Bathroom", "Brass"] },
  { id: 10, title: "Kitchen Acrylic Shutter Edge & Soft-Close Hinge", category: "Kitchen Cabinet", location: "Calicut", filename: "WhatsApp Image 2026-09-22 at 3.15.55 PM.jpeg", tags: ["Kitchen Detail", "Hinge", "Soft Close", "Acrylic"] },
  { id: 11, title: "Wardrobe Carcass Frame On-Site Build", category: "Wall Drop", location: "Kochi", filename: "WhatsApp Image 2026-09-22 at 3.16.01 PM.jpeg", tags: ["Before Transformation", "Carcass", "Waterproof Ply"] },
  { id: 12, title: "Vertical Fluted Timber Paneling Texture", category: "Paneling", location: "Thrissur", filename: "WhatsApp Image 2026-09-22 at 3.16.09 PM.jpeg", tags: ["Fluted Slats", "Timber Texture", "Acoustic Wall"] },
  { id: 13, title: "Master Wall Drop Assembly in Progress", category: "Wall Drop", location: "Kochi", filename: "WhatsApp Image 2026-09-22 at 3.16.55 PM.jpeg", tags: ["Site Work", "Wardrobe Installation", "Frame"] },
  { id: 14, title: "Stainless Steel Glass Clamp & Handrail Joinery", category: "Steel Fabrication", location: "Kottayam", filename: "WhatsApp Image 2026-09-22 at 3.17.48 PM.jpeg", tags: ["SS 304", "Glass Clamp", "Balustrade Detail"] },
  { id: 15, title: "Interior Woodcraft & Framing Site View", category: "Paneling", location: "Ernakulam", filename: "WhatsApp Image 2026-09-22 at 3.18.17 PM.jpeg", tags: ["Site Work", "Framing", "Precision Craft"] },
  { id: 16, title: "HYZIN 3D Architectural Brand Emblem", category: "Brand Asset", location: "Kerala Studio", filename: "WhatsApp Image 2026-09-22 at 3.18.22 PM.jpeg", tags: ["Logo 3D", "Brand Identity", "HYZIN"] },
  { id: 17, title: "Metallic Brass Seal & Authenticity Badge", category: "Brand Asset", location: "Kerala Studio", filename: "WhatsApp Image 2026-09-22 at 3.18.25 PM.jpeg", tags: ["Badge", "Official Seal", "Quality Proof"] },
  { id: 18, title: "Architectural Business Suite Identity Card", category: "Brand Asset", location: "Kerala Studio", filename: "WhatsApp Image 2026-09-22 at 3.18.27 PM.jpeg", tags: ["Business Card", "Contact Suite", "Consultation"] },
  { id: 19, title: "Living Hall Divider Base Frame Installation", category: "Paneling", location: "Thrissur", filename: "WhatsApp Image 2026-09-22 at 3.18.30 PM.jpeg", tags: ["Partition Work", "Structure", "On Site"] },
  { id: 20, title: "Aluminium Powder-Coated Interior Cabinet", category: "Aluminium Interior", location: "Palakkad", filename: "WhatsApp Image 2026-09-22 at 3.21.51 PM.jpeg", tags: ["Aluminium", "Termite Proof", "Cabinetry"] },
  { id: 21, title: "Custom Wardrobe Internal Pullouts & Drawers", category: "Wall Drop", location: "Calicut", filename: "WhatsApp Image 2026-09-22 at 3.21.55 PM (1).jpeg", tags: ["Internal Storage", "Tandem Box", "Drawers"] },
  { id: 22, title: "High-Capacity Bedroom Almirah Storage", category: "Wall Drop", location: "Kochi", filename: "WhatsApp Image 2026-09-22 at 3.21.55 PM (2).jpeg", tags: ["Storage Suite", "Shelving", "Full Height"] },
  { id: 23, title: "Living Room Feature Wall Louver Paneling", category: "Paneling", location: "Trivandrum", filename: "WhatsApp Image 2026-09-22 at 3.21.55 PM.jpeg", tags: ["Feature Wall", "Louvers", "Warm Wood"] },
  { id: 24, title: "Concealed 2700K Ceiling Cove Strip & Spotlights", category: "Ceiling", location: "Kochi", filename: "WhatsApp Image 2026-09-22 at 3.21.56 PM (1).jpeg", tags: ["Ceiling Cove", "LED Strip", "Spotlights"] },
  { id: 25, title: "Acoustic Charcoal Fluted Wall Slat Section", category: "Paneling", location: "Ernakulam", filename: "WhatsApp Image 2026-09-22 at 3.21.56 PM (2).jpeg", tags: ["Charcoal Slats", "Acoustic Panel", "TV Backdrop"] },
  { id: 26, title: "Backlit Fluted Media Wall Console", category: "Paneling", location: "Kochi", filename: "WhatsApp Image 2026-09-22 at 3.21.56 PM.jpeg", tags: ["TV Console", "Fluted Wall", "Brass Trims"] },
  { id: 27, title: "Heavy Duty Security Steel Door Frame Hinge", category: "Steel Doors", location: "Kochi", filename: "WhatsApp Image 2026-09-22 at 3.21.57 PM (1).jpeg", tags: ["Steel Door", "Heavy Duty Hinge", "Security"] },
  { id: 28, title: "MS Window Security Grill Laser Joinery", category: "MS Fabrication", location: "Coimbatore", filename: "WhatsApp Image 2026-09-22 at 3.21.57 PM.jpeg", tags: ["MS Grill", "Security", "Weld Joinery"] },
  { id: 29, title: "L-Shaped Kitchen Quartz Countertop & Sink", category: "Kitchen Cabinet", location: "Palakkad", filename: "WhatsApp Image 2026-09-22 at 3.21.59 PM (1).jpeg", tags: ["Kitchen Counter", "Quartz", "Undermount Sink"] },
  { id: 30, title: "Kitchen Soft-Close Tandem Runner Mechanism", category: "Kitchen Cabinet", location: "Kochi", filename: "WhatsApp Image 2026-09-22 at 3.21.59 PM.jpeg", tags: ["Hardware", "Tandem Runner", "Blum"] },
  { id: 31, title: "Under-Stair Stepped Aluminium Cabinetry", category: "Aluminium Interior", location: "Kottayam", filename: "WhatsApp Image 2026-09-22 at 3.22.01 PM (1).jpeg", tags: ["Under Stair", "Aluminium Storage", "Stepped"] },
  { id: 32, title: "Under-Stair Structural Aluminium Skeleton", category: "Aluminium Interior", location: "Kottayam", filename: "WhatsApp Image 2026-09-22 at 3.22.01 PM.jpeg", tags: ["Aluminium Frame", "Structural", "Custom Fit"] },
  { id: 33, title: "Peacock Blue Ceramic Vessel Basin & Tap", category: "Accessories", location: "Bengaluru", filename: "WhatsApp Image 2026-09-22 at 3.22.02 PM (1).jpeg", tags: ["Basin", "Peacock Blue", "Vessel Sink"] },
  { id: 34, title: "Rose Gold PVD Tall Pillar Basin Mixer Tap", category: "Accessories", location: "Bengaluru", filename: "WhatsApp Image 2026-09-22 at 3.22.02 PM (2).jpeg", tags: ["Rose Gold Tap", "PVD Coating", "Faucet"] },
  { id: 35, title: "Vanity Accent Lighting & Floating Mirror", category: "Accessories", location: "Bengaluru", filename: "WhatsApp Image 2026-09-22 at 3.22.02 PM.jpeg", tags: ["Vanity Light", "Ambient Light", "Bathroom"] },
  { id: 36, title: "Minimalist MS Window Security Bar Grid", category: "MS Fabrication", location: "Coimbatore", filename: "WhatsApp Image 2026-09-22 at 3.22.03 PM (1).jpeg", tags: ["MS Bar", "Window Grill", "White Powder Coat"] },
  { id: 37, title: "Security Bar Weld Corner Detail", category: "MS Fabrication", location: "Coimbatore", filename: "WhatsApp Image 2026-09-22 at 3.22.03 PM.jpeg", tags: ["Weld Corner", "Seamless Finish", "MS Bar"] },
  { id: 38, title: "Anodized Black Aluminium Shutter Profile", category: "Aluminium Interior", location: "Palakkad", filename: "WhatsApp Image 2026-09-22 at 3.22.12 PM (1).jpeg", tags: ["Aluminium Profile", "Black Anodized", "Frame"] },
  { id: 39, title: "Aluminium Loft Hydraulic Flap Stay Hinge", category: "Aluminium Interior", location: "Kottayam", filename: "WhatsApp Image 2026-09-22 at 3.22.12 PM (2).jpeg", tags: ["Hydraulic Stay", "Loft Lift", "Aluminium"] },
  { id: 40, title: "High-Gloss Acrylic Shutter Edge Profile", category: "Wall Drop", location: "Calicut", filename: "WhatsApp Image 2026-09-22 at 3.22.12 PM.jpeg", tags: ["Shutter Edge", "Acrylic Finish", "Wardrobe"] },
  { id: 41, title: "Wardrobe Overhead Loft Hydraulic Lift Stay", category: "Loft", location: "Malappuram", filename: "WhatsApp Image 2026-09-22 at 3.22.13 PM (1).jpeg", tags: ["Loft Lift", "Stay Hinge", "Overhead Storage"] },
  { id: 42, title: "Illuminated Open Display Box Niche", category: "Wall Drop", location: "Kochi", filename: "WhatsApp Image 2026-09-22 at 3.22.13 PM.jpeg", tags: ["Display Niche", "LED Shelf", "Warm Glow"] },
  { id: 43, title: "Gypsum False Ceiling Multi-Level Cove Detail", category: "Ceiling", location: "Ernakulam", filename: "WhatsApp Image 2026-09-22 at 3.22.14 PM (1).jpeg", tags: ["Multi Tier Ceiling", "Gypsum", "Cove LED"] },
  { id: 44, title: "Stainless Steel & Toughened Glass Balustrade", category: "Steel Fabrication", location: "Kottayam", filename: "WhatsApp Image 2026-09-22 at 3.22.14 PM.jpeg", tags: ["SS Railing", "Toughened Glass", "Staircase"] },
  { id: 45, title: "Glass Clamp Stainless Base Anchor Plate", category: "Steel Fabrication", location: "Kottayam", filename: "WhatsApp Image 2026-09-22 at 3.22.15 PM.jpeg", tags: ["Base Anchor", "SS Clamp", "Glass Balustrade"] },
  { id: 46, title: "Teak Wood Paneling with Brass Inlay Strip", category: "Paneling", location: "Thrissur", filename: "WhatsApp Image 2026-09-22 at 3.22.17 PM.jpeg", tags: ["Teak Wood", "Brass Inlay", "Luxury Paneling"] },
  { id: 47, title: "Automated MS Perimeter Boundary Security Gate", category: "MS Fabrication", location: "Calicut", filename: "WhatsApp Image 2026-09-22 at 3.22.18 PM (1).jpeg", tags: ["MS Gate", "Boundary Gate", "Automation Prep"] },
  { id: 48, title: "Anti-Rust Zinc Primer Coating on MS Frame", category: "MS Fabrication", location: "Thrissur", filename: "WhatsApp Image 2026-09-22 at 3.22.18 PM.jpeg", tags: ["Zinc Primer", "Anti Rust", "Coating"] },
  { id: 49, title: "Custom MS Gate Deadbolt & Lock Housing", category: "MS Fabrication", location: "Calicut", filename: "WhatsApp Image 2026-09-22 at 3.22.19 PM.jpeg", tags: ["Gate Lock", "Deadbolt", "MS Hardware"] },
  { id: 50, title: "Horizontal MS Security Window Bar Array", category: "MS Fabrication", location: "Coimbatore", filename: "WhatsApp Image 2026-09-22 at 3.22.20 PM (1).jpeg", tags: ["Window Bars", "MS Security", "Minimalist"] },
  { id: 51, title: "Balcony Mild Steel Safety Guard Railing", category: "MS Fabrication", location: "Kannur", filename: "WhatsApp Image 2026-09-22 at 3.22.20 PM.jpeg", tags: ["Balcony Guard", "MS Railing", "Safety"] },
  { id: 52, title: "Architectural MS Window Security Grill Full View", category: "MS Fabrication", location: "Coimbatore", filename: "WhatsApp Image 2026-09-22 at 3.22.28 PM.jpeg", tags: ["Full Grill View", "Architectural MS", "Epoxy Finish"] },
  { id: 53, title: "Wardrobe Glass Door & LED Sensor Shelf", category: "Wall Drop", location: "Kochi", filename: "WhatsApp Image 2026-09-22 at 3.22.29 PM.jpeg", tags: ["Glass Door", "Sensor LED", "Wardrobe"] },
  { id: 54, title: "Sage Mint Green Aluminium Modular Kitchen Suite", category: "Kitchen Cabinet", location: "Palakkad", filename: "WhatsApp Image 2026-09-22 at 3.22.32 PM (1).jpeg", tags: ["Mint Green", "Modular Kitchen", "Aluminium"] },
  { id: 55, title: "Mint Green Overhead High Storage Loft", category: "Loft", location: "Palakkad", filename: "WhatsApp Image 2026-09-22 at 3.22.32 PM.jpeg", tags: ["Mint Loft", "Overhead Storage", "Acrylic"] },
  { id: 56, title: "Kitchen Corner Unit Soft-Close Pullout", category: "Kitchen Cabinet", location: "Palakkad", filename: "WhatsApp Image 2026-09-22 at 3.22.33 PM (1).jpeg", tags: ["Corner Carousel", "Pullout Basket", "Kitchen"] },
  { id: 57, title: "Rose Gold Kitchen Cutlery Tandem Drawer", category: "Kitchen Cabinet", location: "Kochi", filename: "WhatsApp Image 2026-09-22 at 3.22.33 PM (2).jpeg", tags: ["Tandem Box", "Cutlery Drawer", "Rose Gold"] },
  { id: 58, title: "Smoked Glass Upper Kitchen Storage Shutter", category: "Kitchen Cabinet", location: "Palakkad", filename: "WhatsApp Image 2026-09-22 at 3.22.33 PM.jpeg", tags: ["Smoked Glass", "Upper Cabinets", "Kitchen"] },
  { id: 59, title: "Fluted Timber TV Paneling & Floating Console", category: "Paneling", location: "Ernakulam", filename: "WhatsApp Image 2026-09-22 at 3.22.34 PM (1).jpeg", tags: ["TV Paneling", "Floating Console", "Fluted Slats"] },
  { id: 60, title: "Chevron Pattern Wooden Coffered Ceiling Slats", category: "Ceiling", location: "Wayanad", filename: "WhatsApp Image 2026-09-22 at 3.22.34 PM.jpeg", tags: ["Chevron Ceiling", "Wood Battens", "False Ceiling"] },
  { id: 61, title: "Staircase Glass Balustrade & SS Handrail", category: "Steel Fabrication", location: "Kottayam", filename: "WhatsApp Image 2026-09-22 at 3.22.35 PM (1).jpeg", tags: ["SS Handrail", "Staircase Balustrade", "Glass"] },
  { id: 62, title: "Stainless Steel Handrail Wall Bracket Mount", category: "Steel Fabrication", location: "Kottayam", filename: "WhatsApp Image 2026-09-22 at 3.22.35 PM (2).jpeg", tags: ["SS Bracket", "Wall Mount", "Handrail"] },
  { id: 63, title: "Granite Step Tread Concealed LED Light Strip", category: "Steel Fabrication", location: "Kottayam", filename: "WhatsApp Image 2026-09-22 at 3.22.35 PM.jpeg", tags: ["Step Tread LED", "Night Light", "Granite Steps"] },
  { id: 64, title: "Coffered Teak Wood Living Ceiling Grid", category: "Ceiling", location: "Thiruvalla", filename: "WhatsApp Image 2026-09-22 at 3.22.36 PM (1).jpeg", tags: ["Coffered Ceiling", "Teak Grid", "Architectural"] },
  { id: 65, title: "Gypsum False Ceiling Concealed Perimeter Cove", category: "Ceiling", location: "Kochi", filename: "WhatsApp Image 2026-09-22 at 3.22.36 PM (2).jpeg", tags: ["Gypsum Cove", "Perimeter Lighting", "Bedroom"] },
  { id: 66, title: "Full-Height Wardrobe Shutter Alignment", category: "Wall Drop", location: "Calicut", filename: "WhatsApp Image 2026-09-22 at 3.22.36 PM.jpeg", tags: ["Wardrobe Shutter", "Full Height", "Precision"] },
  { id: 67, title: "Living Hall Multi-Tier Cove Lighting Ceiling", category: "Ceiling", location: "Ernakulam", filename: "WhatsApp Image 2026-09-22 at 3.22.37 PM (1).jpeg", tags: ["Multi Tier Cove", "Ambient Light", "Living Room"] },
  { id: 68, title: "Seamless Quartz Counter & Backsplash Joint", category: "Kitchen Cabinet", location: "Kochi", filename: "WhatsApp Image 2026-09-22 at 3.22.37 PM (2).jpeg", tags: ["Quartz Joint", "Backsplash", "Kitchen Counter"] },
  { id: 69, title: "Modular Kitchen Breakfast Island Counter", category: "Kitchen Cabinet", location: "Kochi", filename: "WhatsApp Image 2026-09-22 at 3.22.37 PM.jpeg", tags: ["Island Counter", "Breakfast Bar", "Kitchen"] },
  { id: 70, title: "Engineered Multi-Point Steel Security Entrance Door", category: "Steel Doors", location: "Vyttila, Kochi", filename: "WhatsApp Image 2026-09-22 at 3.22.38 PM (1).jpeg", tags: ["Steel Security Door", "Multi Point Lock", "Entrance"] },
  { id: 71, title: "Steel Door Stainless Steel Deadbolt Cylinder", category: "Steel Doors", location: "Kochi", filename: "WhatsApp Image 2026-09-22 at 3.22.38 PM.jpeg", tags: ["Deadbolt Lock", "Anti Pick", "Steel Door"] },
  { id: 72, title: "High-Capacity Wardrobe Perimeter Loft Storage", category: "Loft", location: "Tirur", filename: "WhatsApp Image 2026-09-22 at 3.22.39 PM.jpeg", tags: ["Perimeter Loft", "High Storage", "Wall Drop"] }
].map(item => ({
  ...item,
  url: assetUrl(item.filename)
}));

// Hero Slider Curated Showcase
export const HERO_SLIDES = [
  {
    id: "hero-1",
    service: "Kitchen Cabinet",
    title: "Culinary Suites.",
    emphasis: "Bespoke",
    titleEnd: "Mastery.",
    tagline: "Ultra-luxury rose gold acrylic cabinetry with integrated ambient cove lighting & quartz worktops.",
    locationTag: "MODULAR KITCHEN SUITE • KOCHI, KERALA",
    image: assetUrl("WhatsApp Image 2026-09-22 at 3.15.27 PM.jpeg"),
    badge: "Kitchen Cabinet • Acrylic • Soft-Close"
  },
  {
    id: "hero-2",
    service: "Wall Drop",
    title: "Sculpted Storage.",
    emphasis: "Flawless",
    titleEnd: "Joinery.",
    tagline: "Floor-to-ceiling modular wardrobe architectures with custom display niches and warm LED illumination.",
    locationTag: "MODULAR WARDROBE • CALICUT, KERALA",
    image: assetUrl("WhatsApp Image 2026-09-22 at 3.14.03 PM.jpeg"),
    badge: "Wall Drop • Custom Design • Smart Storage"
  },
  {
    id: "hero-3",
    service: "Paneling",
    title: "Spatial Elegance.",
    emphasis: "Artisanal",
    titleEnd: "Paneling.",
    tagline: "Precision fluted timber paneling paired with CNC floral jali cutwork partitions and illuminated shelves.",
    locationTag: "LIVING & DINING PARTITION • THRISSUR, KERALA",
    image: assetUrl("WhatsApp Image 2026-09-22 at 3.15.08 PM.jpeg"),
    badge: "Paneling • CNC Cutwork • Fluted Timber"
  },
  {
    id: "hero-4",
    service: "Ceiling",
    title: "Atmospheric Caliber.",
    emphasis: "Illuminated",
    titleEnd: "Ceilings.",
    tagline: "Architectural false ceiling designs with concealed 2700K warm cove lighting and back-lit marble media units.",
    locationTag: "MEDIA LOUNGE • ERNAKULAM, KERALA",
    image: assetUrl("WhatsApp Image 2026-09-22 at 3.15.13 PM.jpeg"),
    badge: "Ceiling • Back-Lit Onyx • Cove Lighting"
  },
  {
    id: "hero-5",
    service: "Aluminium Interior",
    title: "Engineered Purity.",
    emphasis: "Modern",
    titleEnd: "Precision.",
    tagline: "L-shaped mint green modular kitchen suite engineered with black anodized aluminium framing and glass lofts.",
    locationTag: "ALUMINIUM MODULAR SUITE • PALAKKAD, KERALA",
    image: assetUrl("WhatsApp Image 2026-09-22 at 3.22.32 PM (1).jpeg"),
    badge: "Aluminium Interior • Kitchen Cabinet • Loft"
  }
];

// Authentic Before & After Transformations
export const BEFORE_AFTER_PAIRS = [
  {
    id: "ba-1",
    title: "Luxury Wardrobe & Paneling Transition",
    category: "Wall Drop & Paneling",
    location: "Kochi, Kerala",
    beforeImage: assetUrl("WhatsApp Image 2026-09-22 at 3.16.55 PM.jpeg"),
    afterImage: assetUrl("WhatsApp Image 2026-09-22 at 3.15.23 PM.jpeg"),
    description: "Transformation of a bare room into a master suite wall drop with overhead loft, vertical fluted paneling, and warm illuminated glass niches."
  },
  {
    id: "ba-2",
    title: "Living & Dining Architectural Partition",
    category: "Paneling & Partition",
    location: "Thrissur, Kerala",
    beforeImage: assetUrl("WhatsApp Image 2026-09-22 at 3.18.30 PM.jpeg"),
    afterImage: assetUrl("WhatsApp Image 2026-09-22 at 3.15.08 PM.jpeg"),
    description: "Raw on-site woodwork transformed with brass inlays, CNC illuminated ceiling beam, fluted fluting, and warm display alcoves."
  },
  {
    id: "ba-3",
    title: "Bedroom Wall Drop & Loft Architecture",
    category: "Wall Drop & Loft",
    location: "Calicut, Kerala",
    beforeImage: assetUrl("WhatsApp Image 2026-09-22 at 3.16.01 PM.jpeg"),
    afterImage: assetUrl("WhatsApp Image 2026-09-22 at 3.14.03 PM.jpeg"),
    description: "On-site installation elevated into a completed modular wardrobe with mirrored panels, gold handle trims, and cove LED lighting."
  }
];

// The 10 Official Services with Verified Client Work Assets
export const CLIENT_SERVICES_CONFIG = [
  {
    id: "aluminium-interior",
    number: "01",
    title: "Aluminium Interior",
    tagline: "Sleek, termite-proof, moisture-resilient structural interior engineering.",
    description: "High-grade anodized and powder-coated aluminium interior frameworks designed specifically for Kerala's humid climate. We craft custom modular under-stair storage units, lightweight architectural cabinets, and durable interior framing that lasts decades without corrosion or warping.",
    deliverables: [
      "Heavy-duty powder-coated aluminium profiles",
      "Under-stair space-saving modular cabinets",
      "100% waterproof and termite-proof cabinetry",
      "Concealed soft-close German hardware integration"
    ],
    primaryImage: assetUrl("WhatsApp Image 2026-09-22 at 3.22.01 PM (1).jpeg"),
    gallery: [
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.01 PM (1).jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.14 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.21.51 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.12 PM (2).jpeg")
    ]
  },
  {
    id: "wall-drop",
    number: "02",
    title: "Wall Drop",
    tagline: "Floor-to-ceiling modular wardrobe systems crafted with surgical precision.",
    description: "Bespoke full-height wall drop wardrobes and almirahs tailored around your bedroom geometry. Featuring premium acrylic shutters, tinted reflective glass doors, integrated dressing vanity mirrors, fluted accents, and illuminated internal shelving.",
    deliverables: [
      "Custom multi-door wardrobe architecture",
      "Integrated dresser vanity and full-length mirrors",
      "Illuminated open display niches with 2700K warm LED",
      "Premium champagne gold & black profile trims"
    ],
    primaryImage: assetUrl("WhatsApp Image 2026-09-22 at 3.14.03 PM.jpeg"),
    gallery: [
      assetUrl("WhatsApp Image 2026-09-22 at 3.14.03 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.15.23 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.12 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.29 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.36 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.39 PM.jpeg")
    ]
  },
  {
    id: "kitchen-cabinet",
    number: "03",
    title: "Kitchen Cabinet",
    tagline: "Culinary suites combining ergonomics, luxury finishes, and effortless workflow.",
    description: "Custom modular kitchen cabinetry built for intense cooking performance and stunning aesthetics. Incorporating high-gloss acrylic finishes, Dekton & quartz countertops, black granite sinks, under-cabinet task lighting, and smart pull-out organizers.",
    deliverables: [
      "U-shaped, L-shaped, and parallel modular kitchen layouts",
      "Rose gold, champagne, mint green, and gloss acrylic palettes",
      "Tandem box pullouts, bottle pullouts, and corner carousels",
      "Heat-resistant and oil-resistant seamless backsplashes"
    ],
    primaryImage: assetUrl("WhatsApp Image 2026-09-22 at 3.15.27 PM.jpeg"),
    gallery: [
      assetUrl("WhatsApp Image 2026-09-22 at 3.15.27 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.32 PM (1).jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.37 PM (2).jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.38 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.33 PM (2).jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.15.55 PM.jpeg")
    ]
  },
  {
    id: "loft",
    number: "04",
    title: "Loft",
    tagline: "Maximized overhead cubic storage seamlessly integrated with your interiors.",
    description: "High-capacity overhead loft storage systems designed flush with room ceilings and window lintels. Eliminates dead vertical space while maintaining continuous, streamlined sightlines that enhance the height and volume of bedrooms and kitchens.",
    deliverables: [
      "Continuous perimeter loft cabinet integration",
      "Hydraulic stay lifts and push-to-open mechanisms",
      "Color-matched finishes to base wardrobes and walls",
      "Reinforced heavy-load structural framework"
    ],
    primaryImage: assetUrl("WhatsApp Image 2026-09-22 at 3.15.23 PM.jpeg"),
    gallery: [
      assetUrl("WhatsApp Image 2026-09-22 at 3.15.23 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.18 PM (1).jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.20 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.13 PM (1).jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.21.51 PM.jpeg")
    ]
  },
  {
    id: "accessories",
    number: "05",
    title: "Accessories",
    tagline: "High-end fittings, sanitary suites, pooja details, and specialized hardware.",
    description: "Curated interior fixtures and fittings that provide the defining finishing touches. From luxury Kohler and Kubix Prime bathroom suites, matte black faucets, and sensor pill mirrors to custom brass pooja bells, glass display units, and stainless steel organizers.",
    deliverables: [
      "Designer bathroom sanitary accessories & vanity counters",
      "Concealed rain shower fittings and thermostatic diverters",
      "Bespoke pooja unit storage with brass bell details",
      "LED smart vanity mirrors with defogger capability"
    ],
    primaryImage: assetUrl("WhatsApp Image 2026-09-22 at 3.15.19 PM.jpeg"),
    gallery: [
      assetUrl("WhatsApp Image 2026-09-22 at 3.15.19 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.15.33 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.15.41 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.15.48 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.02 PM (1).jpeg")
    ]
  },
  {
    id: "ceiling",
    number: "06",
    title: "Ceiling",
    tagline: "Sculptural false ceilings, wooden coffered panels, and cove lighting choreography.",
    description: "Architectural ceiling craftsmanship that transforms room ambience. We fabricate multi-tier gypsum ceilings, rich wooden coffered ceilings, chevron timber patterns, and perimeter indirect LED coves for living halls, bedrooms, and dining areas.",
    deliverables: [
      "Geometric chevron & coffered wooden ceiling paneling",
      "Multi-layered gypsum false ceiling designs",
      "Concealed perimeter cove LED strip lighting (2700K - 4000K)",
      "Recessed architectural anti-glare downlights"
    ],
    primaryImage: assetUrl("WhatsApp Image 2026-09-22 at 3.22.36 PM (1).jpeg"),
    gallery: [
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.36 PM (1).jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.15.13 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.14 PM (1).jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.34 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.37 PM (1).jpeg")
    ]
  },
  {
    id: "paneling",
    number: "07",
    title: "Paneling",
    tagline: "Fluted wooden accents, backlit marble, CNC jali dividers, and TV media walls.",
    description: "Tactile wall paneling and spatial partition architectures that infuse warmth and character. Specializing in vertical fluted timber wall panels, backlit onyx and Italian marble media backdrops, acoustic louvers, and CNC laser-cut decorative dividers.",
    deliverables: [
      "Vertical fluted timber & charcoal louvers",
      "Back-lit translucent onyx & marble TV wall backdrops",
      "CNC cut jali architectural room partitions",
      "Floating TV media consoles with brass profile trims"
    ],
    primaryImage: assetUrl("WhatsApp Image 2026-09-22 at 3.15.08 PM.jpeg"),
    gallery: [
      assetUrl("WhatsApp Image 2026-09-22 at 3.15.08 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.15.13 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.21.56 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.17 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.34 PM (1).jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.16.09 PM.jpeg")
    ]
  },
  {
    id: "steel-doors",
    number: "08",
    title: "Steel Doors",
    tagline: "Heavy-duty engineered steel security doors with high-security locks & sleek aesthetics.",
    description: "Robust steel door systems that balance impenetrable residential security with contemporary elegance. Fabricated with multi-point locking systems, weather-resistant powder coatings, wood-grain heat transfers, and stainless steel hardware for main entrances and utility access.",
    deliverables: [
      "Engineered multi-point locking security doors",
      "Weather-sealed frames resistant to rain and humid air",
      "Modern stainless steel long pull handles & digital lock compatibility",
      "Custom architectural jambs and heavy-gauge hinges"
    ],
    primaryImage: assetUrl("WhatsApp Image 2026-09-22 at 3.22.38 PM (1).jpeg"),
    gallery: [
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.38 PM (1).jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.14 PM (1).jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.15.23 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.21.56 PM.jpeg")
    ]
  },
  {
    id: "steel-fabrication",
    number: "09",
    title: "Steel Fabrication",
    tagline: "Architectural stainless steel railings, balustrades, and structural elements.",
    description: "Premium stainless steel fabrication for luxury homes, staircases, and balconies. Utilizing Grade 304 and 316 stainless steel with toughened glass infill panels, concealed fasteners, and integrated step tread LED lighting for safety and modern visual lightness.",
    deliverables: [
      "Stainless steel & toughened glass staircase balustrades",
      "Exterior balcony safety railings and parapet guards",
      "Integrated LED step tread illumination brackets",
      "Mirror-finish or brushed satin architectural detailing"
    ],
    primaryImage: assetUrl("WhatsApp Image 2026-09-22 at 3.22.14 PM.jpeg"),
    gallery: [
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.14 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.35 PM (1).jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.17.48 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.37 PM (1).jpeg")
    ]
  },
  {
    id: "ms-fabrication",
    number: "10",
    title: "MS Fabrication",
    tagline: "Heavy Mild Steel architectural security window grills, gates, and structural skeletons.",
    description: "Precision Mild Steel (MS) fabrication crafted in our specialized workshop. From minimalist geometric window safety grills and designer perimeter boundary gates to heavy structural supports, pre-treated with anti-rust primers and baked powder coatings.",
    deliverables: [
      "Laser-cut and tube geometric window security grills",
      "Custom MS boundary gates with motorized automation prep",
      "Heavy-duty rust-inhibiting zinc primer and epoxy coating",
      "Structural steel canopy and terrace roofing frameworks"
    ],
    primaryImage: assetUrl("WhatsApp Image 2026-09-22 at 3.22.28 PM.jpeg"),
    gallery: [
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.28 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.20 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.18 PM (1).jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.29 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.03 PM.jpeg")
    ]
  }
];
