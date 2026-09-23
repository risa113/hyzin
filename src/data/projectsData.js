const assetUrl = (filename) => {
  const base = import.meta.env.BASE_URL || '/';
  const prefix = base.endsWith('/') ? base : `${base}/`;
  return `${prefix}kerala-assets/${encodeURIComponent(filename)}`;
};

export const projectsData = [
  {
    id: "royal-palms-modular-kitchen",
    title: "The Rose Gold Culinary Suite",
    tagline: "High-gloss acrylic cabinetry with warm ambient lighting & quartz countertops.",
    location: "Kochi, Kerala",
    state: "Kerala",
    type: "Kitchen Cabinet",
    category: "Kitchen Cabinet",
    year: "2025",
    area: "320 sq.ft",
    heroImage: assetUrl("WhatsApp Image 2026-09-22 at 3.15.27 PM.jpeg"),
    gallery: [
      assetUrl("WhatsApp Image 2026-09-22 at 3.15.27 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.37 PM (2).jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.38 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.33 PM (2).jpeg")
    ],
    concept: "Designed for a luxury Kochi residence, this culinary suite features custom rose gold / champagne metallic acrylic shutters with anti-fingerprint coating, seamless under-cabinet LED strip illumination, and heavy-duty soft-close drawer runners.",
    spaceHighlights: [
      "Custom rose gold acrylic modular kitchen cabinetry with black accent profiles",
      "Concealed LED cove and task lighting beneath upper wall cabinets",
      "Heat & scratch resistant black marble-pattern quartz countertop",
      "Overhead high-capacity storage lofts framing the kitchen boundary"
    ],
    materials: [
      { name: "High-Gloss Acrylic", role: "Rose gold shutter panels with seamless edge banding" },
      { name: "Anodized Aluminium", role: "Concealed Gola profile handles and door framing" },
      { name: "Engineered Quartz", role: "Continuous counter surfaces & heat-resistant backsplash" },
      { name: "German Blum Hardware", role: "Soft-close tandem drawers and hydraulic lift-up stays" }
    ],
    clientReview: "“HYZIN built a kitchen that looks like a 5-star hotel suite while handling daily traditional cooking with zero maintenance issues.”",
    patron: "Mr. Shaji Varghese & Family"
  },
  {
    id: "manor-master-wall-drop",
    title: "Master Suite Wall Drop & Loft",
    tagline: "Floor-to-ceiling modular wardrobe with integrated display niche and warm LED illumination.",
    location: "Calicut, Kerala",
    state: "Kerala",
    type: "Wall Drop",
    category: "Wall Drop",
    year: "2025",
    area: "480 sq.ft",
    heroImage: assetUrl("WhatsApp Image 2026-09-22 at 3.14.03 PM.jpeg"),
    gallery: [
      assetUrl("WhatsApp Image 2026-09-22 at 3.14.03 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.15.23 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.12 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.36 PM.jpeg")
    ],
    concept: "An expansive master bedroom wall drop wardrobe architecture combining soft mauve-lavender acrylic shutters with brushed gold profile trims, centered around a back-lit display niche and full-height loft cabinets.",
    spaceHighlights: [
      "Full wall drop configuration with zero dead space from floor to ceiling",
      "Center display console with warm 2700K ambient shelf downlighting",
      "Concealed gold vertical edge handles and hydraulic soft-closing hinges",
      "Full-depth overhead loft modules for seasonal luggage storage"
    ],
    materials: [
      { name: "Premium Acrylic Shutters", role: "Scratch-resistant soft matte finish" },
      { name: "Brushed Champagne Trims", role: "Architectural vertical handle profiles" },
      { name: "Marine-Grade Core", role: "100% boiling waterproof internal carcass" },
      { name: "Integrated LED Micro-Strips", role: "Automated sensor-activated wardrobe lighting" }
    ],
    clientReview: "“The craftsmanship and finishing of the wardrobe is exceptional. The lighting inside the display niche gives our bedroom an unbelievable warmth.”",
    patron: "Dr. K. Rahim & Dr. Zeenath"
  },
  {
    id: "heritage-living-dining-partition",
    title: "Artisanal Living & Dining Partition",
    tagline: "Fluted timber paneling paired with CNC floral jali cutwork and illuminated alcoves.",
    location: "Thrissur, Kerala",
    state: "Kerala",
    type: "Paneling",
    category: "Paneling",
    year: "2025",
    area: "260 sq.ft",
    heroImage: assetUrl("WhatsApp Image 2026-09-22 at 3.15.08 PM.jpeg"),
    gallery: [
      assetUrl("WhatsApp Image 2026-09-22 at 3.15.08 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.18.30 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.21.56 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.17 PM.jpeg")
    ],
    concept: "A dramatic spatial divider separating living and culinary areas without obstructing natural light. Features fluted natural wood battens, brass strip inlays, backlit display niches, and an overhead laser-cut botanical frieze.",
    spaceHighlights: [
      "Botanical laser-cut CNC illuminated ceiling beam with soft backlighting",
      "Fluted timber base cabinet counter with fluted wood textures",
      "Open see-through display cubes framing the modular kitchen behind",
      "High-durability natural wood polish resistant to temperature shifts"
    ],
    materials: [
      { name: "Seasoned Teak Timber", role: "Structural partition pillars and fluted front panels" },
      { name: "CNC Cut Acoustic Acrylic", role: "Backlit floral lintel frieze" },
      { name: "Brushed Brass Inlays", role: "Vertical accent fluting details" },
      { name: "Black Granite Cap", role: "Durable breakfast partition threshold" }
    ],
    clientReview: "“Everyone who steps into our house stops at this partition. It perfectly connects the living room and kitchen while keeping privacy intact.”",
    patron: "Mr. Paulson V. J."
  },
  {
    id: "onyx-media-cove-ceiling",
    title: "Onyx Media Wall & Ambient Ceiling",
    tagline: "Backlit onyx marble paneling, floating console, and architectural cove false ceiling.",
    location: "Ernakulam, Kerala",
    state: "Kerala",
    type: "Ceiling",
    category: "Ceiling",
    year: "2025",
    area: "380 sq.ft",
    heroImage: assetUrl("WhatsApp Image 2026-09-22 at 3.15.13 PM.jpeg"),
    gallery: [
      assetUrl("WhatsApp Image 2026-09-22 at 3.15.13 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.36 PM (1).jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.14 PM (1).jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.34 PM.jpeg")
    ],
    concept: "A luxurious home entertainment sanctuary engineered with indirect cove ceiling lighting, rich wooden louvered wall paneling, and an illuminated translucent marble TV backdrop.",
    spaceHighlights: [
      "Custom false ceiling with perimeter cove lighting eliminating direct glare",
      "Translucent backlit onyx panel with warm internal diffuser",
      "Floating TV media console with fluted wood doors and glass display tower",
      "Acoustic treatment integrated behind vertical wall slats"
    ],
    materials: [
      { name: "Translucent Onyx Sheet", role: "Backlit television focal wall" },
      { name: "Fluted Wood Veneer", role: "Vertical acoustic wall slats" },
      { name: "High-Grade Gypsum", role: "Zero-crack seamless cove false ceiling" },
      { name: "CRI 95+ 2700K LED", role: "Circadian evening cove lighting" }
    ],
    clientReview: "“Movie nights feel like a private cinema. The backlit marble wall and gentle ceiling glow are pure perfection.”",
    patron: "Adv. Thomas Kuruvilla"
  },
  {
    id: "mint-culinary-aluminium-suite",
    title: "Mint Green Aluminium Modular Kitchen",
    tagline: "L-shaped modular kitchen with black aluminium profiles and high-capacity overhead lofts.",
    location: "Palakkad, Kerala",
    state: "Kerala",
    type: "Aluminium Interior",
    category: "Aluminium Interior",
    year: "2025",
    area: "280 sq.ft",
    heroImage: assetUrl("WhatsApp Image 2026-09-22 at 3.22.32 PM (1).jpeg"),
    gallery: [
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.32 PM (1).jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.15.55 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.21.51 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.33 PM (2).jpeg")
    ],
    concept: "Engineered entirely with precision aluminium framework and sage mint acrylic panels. Resistant to heavy moisture, steam, and everyday cooking spices.",
    spaceHighlights: [
      "Continuous L-shape configuration with floor skirting LED strips",
      "Integrated smoke glass display cabinets with warm interior spotlights",
      "Floor-to-ceiling loft cabinets maximizing storage efficiency",
      "Solid black quartz counter with undermount sink"
    ],
    materials: [
      { name: "Extruded Aluminium 6063", role: "Modular carcass framing & shutter border profiles" },
      { name: "Sage Mint Acrylic", role: "High-gloss, stain-resistant shutter surfaces" },
      { name: "Smoked Fluted Glass", role: "Upper display cabinet door inserts" },
      { name: "Stainless Steel 304", role: "Pull-out wire spice and plate baskets" }
    ],
    clientReview: "“Zero worries about termites or water damage. The aluminium build is rock solid and looks stunning.”",
    patron: "Mrs. Revathi Menon"
  },
  {
    id: "stair-balustrade-understair-suite",
    title: "Stainless Steel Railing & Under-Stair Storage",
    tagline: "Grade 304 stainless steel glass balustrade paired with custom under-stair aluminium storage.",
    location: "Kottayam, Kerala",
    state: "Kerala",
    type: "Steel Fabrication",
    category: "Steel Fabrication",
    year: "2025",
    area: "190 sq.ft",
    heroImage: assetUrl("WhatsApp Image 2026-09-22 at 3.22.14 PM.jpeg"),
    gallery: [
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.14 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.01 PM (1).jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.35 PM (1).jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.17.48 PM.jpeg")
    ],
    concept: "Architectural transformation of a dead stairwell space. Featuring high-tensile stainless steel balustrade with 12mm toughened glass, integrated step tread lighting, and custom stepped under-stair storage cupboards.",
    spaceHighlights: [
      "Stainless steel Grade 304 precision glass clamp balustrade",
      "Integrated under-tread LED lights illuminating granite steps",
      "Stepped triangular aluminium modular cupboards maximizing storage",
      "Concealed ventilation louvers preventing under-stair dampness"
    ],
    materials: [
      { name: "SS 304 Stainless Steel", role: "Handrails, base brackets, and glass clamps" },
      { name: "12mm Toughened Glass", role: "Seamless frameless safety panels" },
      { name: "Aluminium Composite Panel", role: "Under-stair flush cupboard doors" },
      { name: "Warm LED Step Luminaires", role: "Nighttime safety step illumination" }
    ],
    clientReview: "“The staircase was dark and the space underneath was wasted. HYZIN turned it into one of the most stylish features of our foyer.”",
    patron: "Mr. Biju George"
  },
  {
    id: "architectural-ms-window-security",
    title: "Architectural MS Window Grills & Safety Systems",
    tagline: "Precision Mild Steel geometric window safety grills with corrosion-proof epoxy finish.",
    location: "Coimbatore, Tamil Nadu",
    state: "Tamil Nadu",
    type: "MS Fabrication",
    category: "MS Fabrication",
    year: "2025",
    area: "Whole Residence",
    heroImage: assetUrl("WhatsApp Image 2026-09-22 at 3.22.28 PM.jpeg"),
    gallery: [
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.28 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.20 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.18 PM (1).jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.29 PM.jpeg")
    ],
    concept: "Custom-designed Mild Steel (MS) window security grills engineered with minimalist horizontal spacing. Provides maximum security without creating a prison-like feel, allowing uninterrupted garden views and breeze.",
    spaceHighlights: [
      "Custom laser-cut and square tube geometric MS security fabrication",
      "Double anti-corrosive primer coating with baked enamel white finish",
      "Flush installation aligned perfectly with wooden window reveals",
      "Engineered weld joints hand-finished for seamless smoothness"
    ],
    materials: [
      { name: "Solid Mild Steel Square Bar", role: "Structural security gridwork" },
      { name: "Zinc-Chromate Anti-Rust Primer", role: "Deep anti-corrosive protection" },
      { name: "Polyurethane Powder Coating", role: "UV-resistant white glossy finish" },
      { name: "Concealed Wall Anchors", role: "Tamper-proof masonry anchoring" }
    ],
    clientReview: "“Clean, modern lines that look like part of the architectural design rather than bulky grills.”",
    patron: "Mr. K. Ranganathan"
  },
  {
    id: "designer-vanity-bathroom-suite",
    title: "Luxury Sanitary Accessories & Vanity Suite",
    tagline: "Designer wash basin vanity, smart LED pill mirror, and matte black Kohler accessories.",
    location: "Bengaluru, Karnataka",
    state: "Karnataka",
    type: "Accessories",
    category: "Accessories",
    year: "2025",
    area: "140 sq.ft",
    heroImage: assetUrl("WhatsApp Image 2026-09-22 at 3.15.41 PM.jpeg"),
    gallery: [
      assetUrl("WhatsApp Image 2026-09-22 at 3.15.41 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.15.33 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.15.48 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.02 PM (1).jpeg")
    ],
    concept: "A high-end bathroom vanity installation combining fluted wall panelling, Peacock & Rose Gold sanitary accessories, an illuminated pill mirror, and custom black metal floating vanity counter.",
    spaceHighlights: [
      "Matte peacock blue counter-top ceramic basin with rose gold faucet",
      "Sensor-dimmable pill LED mirror with backlighting",
      "Fluted waterproof wall paneling behind vanity with concealed plumbing",
      "Floating storage drawers with soft-close Blum runners"
    ],
    materials: [
      { name: "Kohler / Kubix Prime Sanitaryware", role: "Vitreous china wash basins & wall-hung WCs" },
      { name: "Rose Gold PVD Brassware", role: "Faucets, hand showers, and flush plates" },
      { name: "Waterproof Fluted PVC Panel", role: "Feature wall cladding" },
      { name: "Sensor LED Mirror", role: "Ambient and vanity task lighting" }
    ],
    clientReview: "“The accessories and vanity detail made our master bathroom look straight out of an architectural magazine.”",
    patron: "Siddharth & Deepa Nambiar"
  },
  {
    id: "engineered-steel-entrance-portal",
    title: "Engineered Steel Security Door & Glass Portal",
    tagline: "Heavy-duty steel door system with steel frame and long architectural pull handles.",
    location: "Kochi, Kerala",
    state: "Kerala",
    type: "Steel Doors",
    category: "Steel Doors",
    year: "2025",
    area: "Entrance Portal",
    heroImage: assetUrl("WhatsApp Image 2026-09-22 at 3.22.38 PM (1).jpeg"),
    gallery: [
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.38 PM (1).jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.22.14 PM (1).jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.15.23 PM.jpeg"),
      assetUrl("WhatsApp Image 2026-09-22 at 3.21.56 PM.jpeg")
    ],
    concept: "Combining impenetrable steel security engineering with sleek modern aesthetics. Features steel box frames, multi-point deadbolt locks, and long brushed stainless steel hardware.",
    spaceHighlights: [
      "Engineered steel frame resistant to warping, swelling, and forced entry",
      "Architectural 48-inch brushed stainless steel pull handle",
      "Integrated double-seal acoustic and weather insulation gaskets",
      "Seamless aesthetic transition connecting interior halls"
    ],
    materials: [
      { name: "Cold-Rolled Galvanized Steel", role: "Core door leaf and reinforced frame" },
      { name: "Multi-Point Security Lock", role: "High-security anti-pick locking cylinder" },
      { name: "Brushed SS 304 Hardware", role: "Architectural long pull handles & hinges" },
      { name: "Thermo-Acoustic Insulation", role: "High-density internal rockwool core" }
    ],
    clientReview: "“Sturdy as a bank vault, yet operates effortlessly with feather-light smoothness. Total peace of mind.”",
    patron: "Mr. Abraham Koshy"
  }
];

export const completedWorksArchive50 = [
  { id: 1, name: "Skyline Waterfront Kitchen Suite", location: "Marine Drive, Kochi", type: "Kitchen Cabinet", area: "340 sq.ft", year: "2025" },
  { id: 2, name: "Windsor Grand Master Wall Drop", location: "Kakkanad, Kochi", type: "Wall Drop", area: "520 sq.ft", year: "2025" },
  { id: 3, name: "Emerald Heights Modular Kitchen", location: "Kaloor, Kochi", type: "Kitchen Cabinet", area: "290 sq.ft", year: "2025" },
  { id: 4, name: "Royal Teak Living Paneling", location: "Aluva, Ernakulam", type: "Paneling", area: "410 sq.ft", year: "2025" },
  { id: 5, name: "Palm Grove Fluted Jali Partition", location: "Thrissur Town", type: "Paneling", area: "180 sq.ft", year: "2025" },
  { id: 6, name: "Highland Villa False Ceiling Suite", location: "Wayanad", type: "Ceiling", area: "650 sq.ft", year: "2025" },
  { id: 7, name: "Onyx Backlit Media Unit", location: "Panampilly Nagar, Kochi", type: "Ceiling", area: "310 sq.ft", year: "2025" },
  { id: 8, name: "Staircase Glass & Steel Balustrade", location: "Kottayam", type: "Steel Fabrication", area: "240 sq.ft", year: "2025" },
  { id: 9, name: "Under-Stair Modular Aluminium Storage", location: "Changanassery", type: "Aluminium Interior", area: "160 sq.ft", year: "2025" },
  { id: 10, name: "Architectural MS Window Grills", location: "Calicut Beach Road", type: "MS Fabrication", area: "Whole Residence", year: "2025" },
  { id: 11, name: "Sage Mint Acrylic Kitchen Suite", location: "Palakkad", type: "Kitchen Cabinet", area: "280 sq.ft", year: "2025" },
  { id: 12, name: "Lavender 6-Door Bedroom Wall Drop", location: "Edappally, Kochi", type: "Wall Drop", area: "460 sq.ft", year: "2025" },
  { id: 13, name: "Perimeter High Loft Storage Suite", location: "Tirur, Malappuram", type: "Loft", area: "380 sq.ft", year: "2024" },
  { id: 14, name: "Kubix Prime Luxury Sanitary Suite", location: "Indiranagar, Bengaluru", type: "Accessories", area: "150 sq.ft", year: "2024" },
  { id: 15, name: "Engineered Multi-Point Steel Door", location: "Vyttila, Kochi", type: "Steel Doors", area: "Entrance Portal", year: "2024" },
  { id: 16, name: "Balcony Stainless Steel Railings", location: "Kannur Town", type: "Steel Fabrication", area: "220 sq.ft", year: "2024" },
  { id: 17, name: "U-Shaped Quartz Modular Kitchen", location: "Perinthalmanna", type: "Kitchen Cabinet", area: "310 sq.ft", year: "2024" },
  { id: 18, name: "Teal Gloss Master Bedroom Wall Drop", location: "Thalassery", type: "Wall Drop", area: "440 sq.ft", year: "2024" },
  { id: 19, name: "Double-Height Wooden Coffered Ceiling", location: "Muvattupuzha", type: "Ceiling", area: "580 sq.ft", year: "2024" },
  { id: 20, name: "Breakfast Counter Fluted Marble Bar", location: "Angamaly", type: "Paneling", area: "190 sq.ft", year: "2024" },
  { id: 21, name: "Heavy Duty MS Security Grills", location: "RS Puram, Coimbatore", type: "MS Fabrication", area: "Whole Villa", year: "2024" },
  { id: 22, name: "Aluminium Modular Kitchen Framework", location: "Ottapalam", type: "Aluminium Interior", area: "270 sq.ft", year: "2024" },
  { id: 23, name: "Full-Height Window-Surround Loft", location: "Kanhangad", type: "Loft", area: "360 sq.ft", year: "2024" },
  { id: 24, name: "Designer Sensor Pill Mirror & Vanity", location: "Anna Nagar, Chennai", type: "Accessories", area: "130 sq.ft", year: "2024" },
  { id: 25, name: "Main Entrance Steel Security Door", location: "Kollam Town", type: "Steel Doors", area: "Entrance", year: "2024" },
  { id: 26, name: "Champagne Gold Kitchen Cabinets", location: "Palarivattom, Kochi", type: "Kitchen Cabinet", area: "305 sq.ft", year: "2024" },
  { id: 27, name: "Rose Gold Wall Drop & Vanity", location: "Manjeri", type: "Wall Drop", area: "490 sq.ft", year: "2024" },
  { id: 28, name: "Chevron Timber False Ceiling", location: "Thiruvalla", type: "Ceiling", area: "420 sq.ft", year: "2024" },
  { id: 29, name: "Charcoal Vertical Fluted TV Panel", location: "Kaloor", type: "Paneling", area: "230 sq.ft", year: "2024" },
  { id: 30, name: "Toughened Glass Terrace Railing", location: "Fort Kochi", type: "Steel Fabrication", area: "310 sq.ft", year: "2024" },
  { id: 31, name: "Custom Under-Stair Golden Cabinets", location: "Guruvayur", type: "Aluminium Interior", area: "140 sq.ft", year: "2024" },
  { id: 32, name: "Minimalist MS Balcony Security Grill", location: "Race Course, Coimbatore", type: "MS Fabrication", area: "Whole Floor", year: "2024" },
  { id: 33, name: "Bedroom Window Perimeter Loft Storage", location: "Attingal, Trivandrum", type: "Loft", area: "320 sq.ft", year: "2024" },
  { id: 34, name: "Pooja Niche Cabinet with Brass Bells", location: "Tripunithura", type: "Accessories", area: "110 sq.ft", year: "2024" },
  { id: 35, name: "Steel Security Utility Door", location: "Cherthala", type: "Steel Doors", area: "Rear Entrance", year: "2024" },
  { id: 36, name: "Parallel Chef Modular Kitchen", location: "Kowdiar, Trivandrum", type: "Kitchen Cabinet", area: "330 sq.ft", year: "2023" },
  { id: 37, name: "Dark Walnut Wall Drop & Dresser", location: "Vazhakkala, Kochi", type: "Wall Drop", area: "510 sq.ft", year: "2023" },
  { id: 38, name: "Gypsum Multi-Tier Living Ceiling", location: "Perumbavoor", type: "Ceiling", area: "490 sq.ft", year: "2023" },
  { id: 39, name: "Italian Marble Gold-T Wall Paneling", location: "Maradu, Kochi", type: "Paneling", area: "280 sq.ft", year: "2023" },
  { id: 40, name: "Internal Staircase Stainless Handrail", location: "Changanassery", type: "Steel Fabrication", area: "210 sq.ft", year: "2023" },
  { id: 41, name: "Waterproof Aluminium Pantry Unit", location: "Thodupuzha", type: "Aluminium Interior", area: "175 sq.ft", year: "2023" },
  { id: 42, name: "MS Structural Carport & Gate", location: "Palayam, Calicut", type: "MS Fabrication", area: "Driveway", year: "2023" },
  { id: 43, name: "High-Capacity Wardrobe Overhead Loft", location: "Vadakara", type: "Loft", area: "350 sq.ft", year: "2023" },
  { id: 44, name: "Kohler Rain Shower Diverter Suite", location: "Sadashivnagar, Bengaluru", type: "Accessories", area: "165 sq.ft", year: "2023" },
  { id: 45, name: "Double Leaf Steel Safety Entrance", location: "Gandhinagar, Kottayam", type: "Steel Doors", area: "Foyer", year: "2023" },
  { id: 46, name: "Peacock Teal Acrylic Kitchen Suite", location: "Kunnamkulam", type: "Kitchen Cabinet", area: "295 sq.ft", year: "2023" },
  { id: 47, name: "3-Door Modern Wall Drop Wardrobe", location: "Irinjalakuda", type: "Wall Drop", area: "390 sq.ft", year: "2023" },
  { id: 48, name: "Cove Illumination Bedroom Ceiling", location: "Chalakudy", type: "Ceiling", area: "340 sq.ft", year: "2023" },
  { id: 49, name: "CNC Botanical Living Partition", location: "Kothamangalam", type: "Paneling", area: "195 sq.ft", year: "2023" },
  { id: 50, name: "Exterior Balcony Stainless Glass Guard", location: "Pattambi", type: "Steel Fabrication", area: "250 sq.ft", year: "2023" }
];
