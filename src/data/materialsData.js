const assetUrl = (filename) => {
  const base = import.meta.env.BASE_URL || '/';
  const prefix = base.endsWith('/') ? base : `${base}/`;
  return `${prefix}kerala-assets/${encodeURIComponent(filename)}`;
};

export const materialsData = [
  {
    id: "aluminium-profiles",
    name: "Structural Aluminium 6063 T6",
    category: "Structural Core",
    origin: "Precision Extruded Profiles",
    description: "100% moisture-proof, termite-proof, and corrosion-resistant aluminium core framework engineered to withstand Kerala's heavy monsoons.",
    image: assetUrl("WhatsApp Image 2026-09-22 at 3.22.01 PM (1).jpeg")
  },
  {
    id: "luxury-acrylic-shutters",
    name: "High-Gloss Anti-Fingerprint Acrylic",
    category: "Cabinetry & Surfaces",
    origin: "European Acrylic Panels",
    description: "Ultra-smooth gloss and matte acrylic finishes in champagne gold, rose gold, sage mint, and deep teal, sealed with laser edge banding.",
    image: assetUrl("WhatsApp Image 2026-09-22 at 3.15.27 PM.jpeg")
  },
  {
    id: "backlit-onyx-marble",
    name: "Translucent Onyx & Italian Marble",
    category: "Natural & Engineered Stone",
    origin: "Honed Natural Stone",
    description: "Backlit translucent stone surfaces with diffuse internal illumination for media focal walls, partition counters, and luxury vanities.",
    image: assetUrl("WhatsApp Image 2026-09-22 at 3.15.13 PM.jpeg")
  },
  {
    id: "stainless-steel-glass",
    name: "Grade 304 Stainless Steel & Glass",
    category: "Metal & Balustrades",
    origin: "Satin Brushed & Mirror Polish",
    description: "High-tensile Grade 304/316 stainless steel combined with 12mm toughened frameless glass panels for internal stairs and exterior balconies.",
    image: assetUrl("WhatsApp Image 2026-09-22 at 3.22.14 PM.jpeg")
  }
];
