// 20 Reusable Agency Local SEO Prompts Library

export const promptLibrary = [
  {
    id: "prompt-1",
    title: "1. GBP Category Gap Analysis",
    purpose: "Identify missing primary and secondary GBP categories used by top ranking local competitors.",
    requiredData: "Business Name, Current GBP Categories, Competitor Names, Competitor GBP Categories.",
    prompt: `Act as a senior Google Business Profile specialist. 
Compare the GBP categories of [BUSINESS_NAME] (Primary: [PRIMARY_CAT], Secondary: [SECONDARY_CATS]) against top local competitors ([COMPETITOR_1_CATS], [COMPETITOR_2_CATS]).
Identify:
1. High-frequency competitor categories missing from our profile.
2. Irrelevant or conflicting categories currently selected.
3. Category alignment with website services.
Provide output in a markdown table with columns: Category | Role | Competitor Frequency | Relevance | Recommended Action.`,
    expectedOutput: "Markdown comparison table with recommended category additions.",
    recommendedFrequency: "Quarterly / Onboard",
    relatedTask: "Update GBP Secondary Categories in Google Business Manager"
  },
  {
    id: "prompt-2",
    title: "2. GBP Attribute Completeness Audit",
    purpose: "Find missing GBP attributes that increase search filter eligibility.",
    requiredData: "Business Type, Current Attributes, Service Model (Onsite/Showroom).",
    prompt: `Act as a Local SEO technical auditor. Audit the GBP attributes for [BUSINESS_NAME] operating in [LOCATION].
Classify available attributes into: Existing, Missing, Potentially Useful, and Not Applicable.
Focus on attributes for interior design, custom fabrication, estimates, accessibility, and payment methods.
Do NOT suggest attributes the business cannot genuinely provide.`,
    expectedOutput: "4-category attribute breakdown with immediate action items.",
    recommendedFrequency: "Bi-annually",
    relatedTask: "Toggle missing attributes in GBP profile dashboard"
  },
  {
    id: "prompt-3",
    title: "3. Competitor Review Teardown & Language Bank",
    purpose: "Extract customer buying triggers, sentiment, and exact language from competitor reviews.",
    requiredData: "Scraped competitor Google reviews (text format).",
    prompt: `Analyze the following competitor Google reviews for [COMPETITOR_NAMES].
Extract:
1. Frequently mentioned services & locations.
2. Recurring customer problems and complaints.
3. Customer language bank (phrases used for quality, trust, speed, pricing, and outcomes).
Do NOT fabricate quotes. Group customer phrases strictly by category.`,
    expectedOutput: "Structured Customer Language Bank grouped by intent and sentiment.",
    recommendedFrequency: "Monthly",
    relatedTask: "Incorporate customer language into homepage headlines & sales scripts"
  },
  {
    id: "prompt-4",
    title: "4. Natural Review Response Strategy",
    purpose: "Generate context-aware review response templates for 1-5 star reviews.",
    requiredData: "Business Name, Services, Customer Service Director Phone/Email.",
    prompt: `Create natural, high-converting review response templates for [BUSINESS_NAME].
Generate templates for:
- 5-Star review with service mention
- 4-Star review without text
- 1-Star complaint regarding installation delay or pricing
- Location-specific positive review
Ensure responses sound human, professional, avoid keyword stuffing, and include clear escalation contact info for complaints.`,
    expectedOutput: "5 reusable review response templates with place-holders.",
    recommendedFrequency: "One-time setup / Updated yearly",
    relatedTask: "Save templates to review management software"
  },
  {
    id: "prompt-5",
    title: "5. 8-Week GBP Post Calendar Generator",
    purpose: "Build an 8-week strategic GBP posting schedule to drive engagement and local relevance.",
    requiredData: "Services List, Target Cities, Key Offers, Seasonality.",
    prompt: `Generate an 8-week Google Business Profile posting calendar for [BUSINESS_NAME] in [PRIMARY_CITY].
For each week provide:
- Date & Week #
- Topic & Search Intent
- Target Service & Location Tag
- Suggested Post Copy (max 150 words)
- CTA Type (Call Now / Get Quote / Learn More)
- Image / Photo Concept`,
    expectedOutput: "8-week tabular calendar with copy and visual ideas.",
    recommendedFrequency: "Every 2 Months",
    relatedTask: "Schedule posts in GBP management portal"
  },
  {
    id: "prompt-6",
    title: "6. GBP Services Section Optimizer",
    purpose: "Rewrite GBP service descriptions for high conversion and search relevance.",
    requiredData: "List of Services, Target Locations, Key Benefits.",
    prompt: `Audit and optimize the GBP services section for [BUSINESS_NAME].
For each service:
1. Evaluate existing description.
2. Rewrite into a punchy, keyword-optimized 250-character description including target location [LOCATION].
3. Include clear service features (e.g. termite-proof, waterproof, custom 3D design).`,
    expectedOutput: "Optimized service titles and descriptions ready to copy-paste.",
    recommendedFrequency: "Quarterly",
    relatedTask: "Update GBP Services tab"
  },
  {
    id: "prompt-7",
    title: "7. GBP Description Optimization (3 Variants)",
    purpose: "Generate 3 distinct 750-character GBP business description options.",
    requiredData: "Business Name, Location, Core Services, Target Audience, USPs.",
    prompt: `Write three distinct 750-character Google Business Profile descriptions for [BUSINESS_NAME] in [CITY]:
Variant A: Local + Service Focused
Variant B: Conversion + Offer Focused
Variant C: Trust + Authority Focused
Ensure strict compliance with 750-character limit, no URLs, and authentic brand voice.`,
    expectedOutput: "3 ready-to-use description variants under 750 characters.",
    recommendedFrequency: "Yearly",
    relatedTask: "Update GBP Main Description"
  },
  {
    id: "prompt-8",
    title: "8. GBP Photo & Media Plan",
    purpose: "Build a structured photo upload schedule based on competitor photo counts.",
    requiredData: "Current Photo Count, Competitor Photo Counts, Service Categories.",
    prompt: `Analyze the GBP photo gap for [BUSINESS_NAME] (Current: [CURRENT_COUNT] photos, Competitors: [COMPETITOR_COUNT] photos).
Develop an 8-week photo upload plan specifying exact photo types to capture weekly (Exterior, Team at work, Material close-ups, Finished projects, Before/After).`,
    expectedOutput: "8-week step-by-step photography and upload checklist.",
    recommendedFrequency: "Quarterly",
    relatedTask: "Coordinate project photo shoot with site installers"
  },
  {
    id: "prompt-9",
    title: "9. Keyword Gap & Intent Auditor",
    purpose: "Identify keyword opportunities where competitors rank higher or business is missing coverage.",
    requiredData: "GSC Keyword Data, Competitor Target Keywords.",
    prompt: `Perform a keyword gap analysis comparing [BUSINESS_NAME] against [COMPETITORS].
Classify keywords into: Money Keywords, Local Service Keywords, Problem Keywords, Informational Keywords.
Highlight Page 2 'strike distance' keywords (Positions 11-20) with high impression volume.`,
    expectedOutput: "Categorized keyword gap matrix with priority action items.",
    recommendedFrequency: "Monthly",
    relatedTask: "Create new dedicated service landing pages"
  },
  {
    id: "prompt-10",
    title: "10. GSC 30-Day CTR & Rank Sprint",
    purpose: "Extract quick wins from Search Console data to boost CTR and push terms to Top 3.",
    requiredData: "GSC CSV Export (Query, Impressions, Clicks, Position, CTR).",
    prompt: `Analyze the provided GSC data for [DOMAIN].
Identify:
1. High Impression / Low CTR queries on Page 1 (Position 4-10).
2. Page 2 queries near Page 1 threshold (Position 11-15).
3. Query cannibalization across multiple URLs.
Propose specific title tag and meta description tweaks for top 5 opportunity URLs.`,
    expectedOutput: "30-Day Action Sprint table with exact URL and Meta tag recommendations.",
    recommendedFrequency: "Monthly",
    relatedTask: "Update meta title & description tags on target pages"
  },
  {
    id: "prompt-11",
    title: "11. Money Page Conversion & On-Page Audit",
    purpose: "Audit primary revenue pages for local intent signals, CTA placement, and schema.",
    requiredData: "Target Page URL, Target Keyword, Primary Conversion Action.",
    prompt: `Audit the money page [URL] targeting keyword [KEYWORD] for [LOCATION].
Evaluate:
1. Search intent match & H1/H2 hierarchy.
2. Local proof & trust signals (reviews, project photos, local address).
3. Call-To-Action clarity (phone, WhatsApp, quote form).
4. Schema microdata completeness (LocalBusiness & Product/Service).`,
    expectedOutput: "Detailed audit checklist with pass/fail and recommended fixes.",
    recommendedFrequency: "Quarterly",
    relatedTask: "Refactor landing page conversion elements"
  },
  {
    id: "prompt-12",
    title: "12. Hyper-Local Service + City Page Generator",
    purpose: "Create structured briefs for unique service-location landing pages.",
    requiredData: "Core Service Name, Target Suburb / City, Local Landmarks / Features.",
    prompt: `Generate a comprehensive content structure for a new Service + City page:
Service: [SERVICE_NAME]
City: [CITY_NAME]
Requirements:
- SEO Title & Meta Description
- H1, H2, H3 Outline
- Localized introduction mentioning regional challenges (e.g. Kerala coastal humidity)
- FAQs & Local business schema snippet
- Call-to-action placement strategy`,
    expectedOutput: "Complete page architecture outline and schema code.",
    recommendedFrequency: "Monthly",
    relatedTask: "Build and publish new location page on website"
  },
  {
    id: "prompt-13",
    title: "13. Review Sentiment & Messaging Optimizer",
    purpose: "Translate positive customer sentiment into high-converting website sales copy.",
    requiredData: "Verified customer review quotes.",
    prompt: `Analyze positive customer reviews for [BUSINESS_NAME]. Extract recurring praise themes (e.g. punctuality, termite-proof quality, clean installation).
Rewrite homepage hero subheadline, service page bullet points, and trust badge copy using exact customer sentiment phrases.`,
    expectedOutput: "Updated copy snippets for homepage and service pages.",
    recommendedFrequency: "Bi-annually",
    relatedTask: "Update homepage hero copy"
  },
  {
    id: "prompt-14",
    title: "14. Local Backlink & Outreach Opportunity Finder",
    purpose: "Find high-relevance local Kerala directories, blogs, and partner link opportunities.",
    requiredData: "Industry, City, Competitor Backlink Profiles.",
    prompt: `Analyze realistic local link building targets for an interior fabrication company in [CITY].
Classify targets into: High Relevance Local Directories, Niche Architecture Blogs, Local News, Sponsorships, Industry Associations.
Avoid spammy PBNs or link farms. Provide outreach pitch angle for top 3 targets.`,
    expectedOutput: "Prioritized local backlink target table with email outreach angles.",
    recommendedFrequency: "Monthly",
    relatedTask: "Send partnership outreach emails"
  },
  {
    id: "prompt-15",
    title: "15. Local Citation & NAP Audit",
    purpose: "Audit business NAP consistency across major online directories.",
    requiredData: "Official Business Name, Address, Phone, Website, Directory URLs.",
    prompt: `Audit directory listings for [BUSINESS_NAME] against standard NAP ([ADDRESS], [PHONE]).
Identify:
1. Missing major citations.
2. Inconsistent address formatting or phone numbers.
3. Duplicate listings.
Provide a Citation Fix List table with columns: Platform | Status | Current Data | Correct Data | Priority.`,
    expectedOutput: "Citation fix table prioritized by P1/P2/P3 impact.",
    recommendedFrequency: "Quarterly",
    relatedTask: "Submit NAP updates to citation portals"
  },
  {
    id: "prompt-16",
    title: "16. Local Search Intent Funnel Mapper",
    purpose: "Map target keywords across the 5 local buying stages.",
    requiredData: "Target Keywords, Product Line, Location.",
    prompt: `Map the provided list of keywords for [BUSINESS_NAME] into the 5 conversion funnel stages:
Stage 1: Awareness
Stage 2: Problem Research
Stage 3: Service Research
Stage 4: High Commercial Intent
Stage 5: Brand / Conversion
Recommend page type for each keyword cluster.`,
    expectedOutput: "5-stage intent map with assigned landing page types.",
    recommendedFrequency: "Quarterly",
    relatedTask: "Align content plan with intent funnel"
  },
  {
    id: "prompt-17",
    title: "17. Content Gap & Buying Guide Brief Generator",
    purpose: "Generate content briefs for educational buying guides comparing materials or costs.",
    requiredData: "Target Topic, Service Name, Local Price Range.",
    prompt: `Create an in-depth SEO content brief for an educational buying guide topic: [TOPIC, e.g. Aluminium vs Wooden Kitchen Cabinets in Kochi].
Include: Target Keyword, Suggested Title, H1, Detailed H2/H3 outline, key questions answered, internal linking targets, and CTA.`,
    expectedOutput: "Full blog content brief ready for copywriter.",
    recommendedFrequency: "Monthly",
    relatedTask: "Assign blog article to copywriter"
  },
  {
    id: "prompt-18",
    title: "18. Entity & LocalBusiness Schema Generator",
    purpose: "Generate error-free JSON-LD LocalBusiness & Organization schema.",
    requiredData: "Business Name, Address, Phone, GEO Coordinates, Social Profiles, Opening Hours.",
    prompt: `Generate a complete, valid JSON-LD LocalBusiness microdata snippet for [BUSINESS_NAME].
Include: @context, @type (LocalBusiness / HomeGoodsStore), name, image, address (street, city, region, postalCode, country), geo coordinates, url, telephone, openingHoursSpecification, priceRange, and sameAs links to Facebook, Instagram, Google Maps.`,
    expectedOutput: "Ready-to-inject JSON-LD code block.",
    recommendedFrequency: "One-time / Updated when details change",
    relatedTask: "Inject JSON-LD schema into website head tag"
  },
  {
    id: "prompt-19",
    title: "19. Competitor GBP Posting Pattern Auditor",
    purpose: "Audit competitor posting cadence, themes, and CTAs to outperform local map pack activity.",
    requiredData: "Competitor GBP post history summaries.",
    prompt: `Analyze GBP posting patterns for top competitors [COMPETITOR_1, COMPETITOR_2].
Identify:
1. Posting frequency & best performing days.
2. Most common CTA types.
3. Content formats (offers vs project showcases vs educational).
Formulate a counter-strategy to gain competitive edge in local pack freshness.`,
    expectedOutput: "Competitor post pattern breakdown & tactical counter-strategy.",
    recommendedFrequency: "Bi-annually",
    relatedTask: "Refine GBP posting calendar strategy"
  },
  {
    id: "prompt-20",
    title: "20. Executive Monthly SEO Report Synthesizer",
    purpose: "Synthesize GSC, GA4, GBP, and action task data into a 1-page client executive summary.",
    requiredData: "Monthly Clicks, Impressions, GBP Calls, Directions, Tasks Completed, Keyword Rankings.",
    prompt: `Act as a senior agency director. Synthesize monthly performance metrics for [BUSINESS_NAME] into a client-ready executive summary.
Sections required:
1. Executive Summary & Key Milestones
2. Organic Search & Keyword Movement
3. Local SEO & GBP Actions (Calls, Directions)
4. Work Completed vs Work Planned for Next Month
5. Business Revenue Impact & Next Sprint Focus
Avoid vanity metrics; highlight real calls, lead inquiries, and position gains.`,
    expectedOutput: "Clean executive summary markdown report.",
    recommendedFrequency: "Monthly",
    relatedTask: "Deliver monthly PDF report to client"
  }
];
