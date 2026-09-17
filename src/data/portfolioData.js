export const personalInfo = {
  name: "ALOK PANDEY",
  title: "GRAPHIC DESIGNER",
  subtitle: "Visual Communication & Attention-Driven Graphic Designer",
  location: "Ghaziabad, Uttar Pradesh, India",
  phone: "+91-8172855008",
  email: "alokpandey2813@gmail.com",
  socials: {
    linkedin: "https://linkedin.com/in/alok023",
    youtube: "https://youtube.com/@thealokpandeyxperience",
    behance: "#",
    instagram: "#",
    github: "#"
  },
  resumePdfUrl: "/assets/Alok_Pandey_Resume.html",
  bio: "Creative and detail-oriented Graphic Designer with hands-on experience creating YouTube thumbnails, social media creatives, channel branding, and digital content through personal and content projects. Skilled in visual communication, typography, layout and composition, branding, color theory, and audience-focused design. Passionate about taking raw concepts and shaping them into high-performing, unforgettable visual assets.",
  education: {
    institution: "ABES Engineering College, Ghaziabad, Uttar Pradesh",
    degree: "Bachelor of Technology in Computer Science and Engineering (Data Science)",
    cgpa: "7.5 / 10.0",
    period: "Sep 2023 – Jul 2027"
  }
};

export const fallbackImage = "/assets/images/hero_composite.svg";

export const portfolioCategories = [
  {
    id: "branding",
    number: "01",
    title: "BRANDING",
    description: "Complete visual identity design systems from logo concepts to packaging mockups.",
    badge: "SELF-INITIATED BRAND IDENTITY CASE STUDY",
    heroImage: "/assets/images/nexus_branding.svg",
    projects: [
      {
        id: "nexus-audio",
        title: "NEXUS AUDIO — Minimalist Acoustic Brand Identity",
        type: "CONCEPT PROJECT",
        tagline: "High-performance acoustic precision meets dark luxury minimalism.",
        overview: "A comprehensive brand identity concept created for NEXUS, a luxury audio equipment brand. The design system leverages sharp geometric logos, deep obsidian matte tones, and vivid crimson accent foil stamping.",
        brief: "Create an upscale audio brand identity that communicates technical precision, premium craft, and acoustic excellence for high-fidelity audiophiles.",
        idea: "Construct a minimalist dual-arrow 'N' monogram that symbolizes frequency waves and directional sound elevation.",
        approach: "Utilized modern Swiss typography (Syne & Plus Jakarta Sans) with ultra-high contrast dark surfaces to make packaging, stationery, and product mockups feel authoritative.",
        designSystem: {
          typography: "Syne Bold for display headers, JetBrains Mono for technical specs",
          colors: ["#0A0A0C", "#18181F", "#E63946", "#F8F9FA"],
          composition: "Rigid 12-column grid system with generous dark space",
          imagery: "Tactile surface photography, matte black finishes with foil highlights"
        },
        deliverables: ["Logo Monogram", "Packaging Box Mockups", "Luxury Metallic Foil Business Cards", "Letterhead & Brand Specs"],
        image: "/assets/images/nexus_branding.svg",
        reflection: "Demonstrates full-cycle brand architecture, packaging layout precision, and luxury print application mockups."
      }
    ]
  },
  {
    id: "social-media",
    number: "02",
    title: "SOCIAL MEDIA DESIGN",
    description: "Cohesive multi-slide Instagram carousels, campaign posts, and story systems built for high engagement.",
    badge: "CONCEPT CAMPAIGN SYSTEM",
    heroImage: "/assets/images/vortex_social.svg",
    projects: [
      {
        id: "vortex-labs",
        title: "VORTEX LABS — Techwear Streetwear Social Campaign",
        type: "SELF-INITIATED PROJECT",
        tagline: "High-contrast carousel visual system engineered for urban tactical apparel.",
        overview: "A 4-part Instagram carousel and story identity system designed to maintain strict visual hierarchy across small smartphone display screens.",
        brief: "Develop an attention-grabbing social media campaign that highlights product durability, urban armor aesthetics, and product drop call-to-actions.",
        idea: "Use dark tactical backgrounds paired with oversized, split kinetic typography to create a sense of movement as users swipe through the carousel.",
        approach: "Applied custom numerical badges (01, 02, 03), subtle tech overlays, and high contrast red accent callouts.",
        designSystem: {
          typography: "Impactful Heavy Sans + Monospaced data labels",
          colors: ["#0A0A0C", "#E63946", "#FFFFFF"],
          composition: "Center-weighted product focal points with framing borders",
          imagery: "Moody urban streetwear photography with subtle neon backdrop accents"
        },
        deliverables: ["4-Slide Carousel Layout", "Instagram Story Ad Templates", "Promotional Feed Banners"],
        image: "/assets/images/vortex_social.svg",
        reflection: "Proves mastery over small-screen visual hierarchy, swipe-through engagement retention, and mobile design layout."
      }
    ]
  },
  {
    id: "thumbnails",
    number: "03",
    title: "THUMBNAIL DESIGN",
    description: "High CTR, attention-driven YouTube thumbnails for business, technology, finance, and motivation.",
    badge: "YOUTUBE CONTENT & GRAPHIC DESIGN",
    heroImage: "/assets/images/youtube_grid.svg",
    thumbnails: [
      {
        id: "thumb-1",
        title: "AI REVOLUTION — 2024 Tech Impact",
        niche: "Technology & AI",
        ctrFocus: "Curiosity & High Contrast Red/Blue Split",
        concept: "Contrasting human expression against futuristic digital brain overlays.",
        text: "AI WILL CHANGE *EVERYTHING*",
        image: "/assets/images/thumb_ai.svg"
      },
      {
        id: "thumb-2",
        title: "GET WEALTHY FAST — Financial Strategy",
        niche: "Finance & Wealth",
        ctrFocus: "Expressive Emotion & Bold Gold/Red Accent",
        concept: "Ascending cash chart vectors with striking readable text.",
        text: "GET WEALTHY FAST",
        image: "/assets/images/thumb_wealth.svg"
      },
      {
        id: "thumb-3",
        title: "THE BUSINESS HACK — Scaled to $10M",
        niche: "Business & Startup",
        ctrFocus: "Authority & Clean Split Layout",
        concept: "Direct eye contact focal point with crisp corporate chart graphic.",
        text: "THE BUSINESS HACK",
        image: "/assets/images/thumb_business.svg"
      },
      {
        id: "thumb-4",
        title: "THE UNFILTERED TRUTH — Podcast Series",
        niche: "Podcast & Discussion",
        ctrFocus: "Mic Focal Point & Glowing Neon Mic Sign",
        concept: "Dramatic rim lighting with bold yellow typography.",
        text: "THE PODCAST TRUTH",
        image: "/assets/images/thumb_podcast.svg"
      }
    ]
  },
  {
    id: "marketing",
    number: "04",
    title: "MARKETING CREATIVES",
    description: "Commercial ad visuals, digital promotion banners, and outdoor campaign billboards built to convert.",
    badge: "COMMERCIAL CAMPAIGN CREATIVES",
    heroImage: "/assets/images/synergy_marketing.svg",
    projects: [
      {
        id: "synergy-digital",
        title: "SYNERGY DIGITAL — Growth Agency Campaign Suite",
        type: "CONCEPT PROJECT",
        tagline: "Commercial ad creatives structured with clear Message → Visual → CTA flow.",
        overview: "A multi-channel marketing campaign created for a modern B2B digital agency, spanning desktop web promo banners, Facebook ad units, and a massive 10x20ft city billboard.",
        brief: "Design promotional creatives that project trust, high-end strategy, and enterprise-level execution.",
        idea: "Use clean angular accent framing that draws the user's eye from the headline directly to the call-to-action button.",
        approach: "Maintained consistent color palette (Charcoal, Crimson Red, White) across disparate aspect ratios (16:9, 4:5, 1:2 vertical billboard).",
        designSystem: {
          typography: "Bold Condensed Grotesque Sans",
          colors: ["#121216", "#E63946", "#FFFFFF"],
          composition: "F-pattern visual scanning path",
          imagery: "Modern executive work environment with clean glass reflections"
        },
        deliverables: ["Web Promo Banner (1200x600)", "Facebook Ad (1080x1350)", "Outdoor Billboard Mockup"],
        image: "/assets/images/synergy_marketing.svg",
        reflection: "Demonstrates commercial strategy, visual hierarchy under ad constraints, and cross-platform adaptation."
      }
    ]
  },
  {
    id: "posters",
    number: "05",
    title: "POSTER DESIGN",
    description: "Swiss-inspired editorial posters with kinetic typography, architectural grids, and bold statements.",
    badge: "EDITORIAL GRAPHIC EXHIBITION",
    heroImage: "/assets/images/swiss_poster.svg",
    projects: [
      {
        id: "swiss-graphique",
        title: "SWISS GRAPHIQUE 2024 — Modernist Exhibition Posters",
        type: "SELF-INITIATED PROJECT",
        tagline: "Exploring kinetic typography and grid composition in gallery poster formats.",
        overview: "A series of editorial poster concepts exploring Swiss international typographic style combined with dynamic red geometry.",
        brief: "Demonstrate high-level typography layout skills through brutalist yet sophisticated poster compositions.",
        idea: "Deconstruct traditional grid lines and twist headline typography to create dynamic visual tension.",
        approach: "Presented both as raw high-res digital artwork files and as realistic outdoor street wheatpaste wall mockups.",
        designSystem: {
          typography: "Syne ExtraBold & Modernist Sans",
          colors: ["#0A0A0C", "#E63946", "#E2E2E8"],
          composition: "Deconstructed Swiss Grid System",
          imagery: "Abstract geometric vector forms and street mockups"
        },
        deliverables: ["A1 Exhibition Posters", "Street Wheatpaste Wall Mockups", "Gallery Frame Mockups"],
        image: "/assets/images/swiss_poster.svg",
        reflection: "Highlights strong artistic taste, typographic expertise, and editorial layout confidence."
      }
    ]
  },
  {
    id: "visual-communication",
    number: "06",
    title: "VISUAL COMMUNICATION",
    description: "Transforming complex technical concepts, data, and workflows into intuitive visual diagrams.",
    badge: "DATA & PROCESS VISUALIZATION",
    heroImage: "/assets/images/ai_workflow.svg",
    projects: [
      {
        id: "ai-workflow-guide",
        title: "UNVEILING COMPLEX AI WORKFLOWS — Simplified Visual Guide",
        type: "CONCEPT PROJECT",
        tagline: "Complex machine learning pipeline condensed into an intuitive 6-stage graphic architecture.",
        overview: "An educational visual graphic designed to break down AI data ingestion, model training, evaluation, deployment, and feedback loops for non-technical stakeholders.",
        brief: "Transform dense machine learning engineering concepts into an accessible visual infographic without losing technical accuracy.",
        idea: "Establish a clear left-to-right flow using glowing neon connection paths, icon badges, and color-coded stage cards.",
        approach: "Enforced strict visual hierarchy so readers instantly grasp the macro 6-step loop before diving into micro details like confusion matrices.",
        designSystem: {
          typography: "JetBrains Mono tech labels + Clean Sans headers",
          colors: ["#0A0A0C", "#00F0FF", "#E63946", "#7B2CBF"],
          composition: "Linear step-by-step vector path with node callouts",
          imagery: "Custom icon system and glowing vector flow lines"
        },
        deliverables: ["Full Infographic Poster", "Slide Deck Breakdown Graphics", "Social Media Explainer Cutouts"],
        image: "/assets/images/ai_workflow.svg",
        reflection: "Proves high-level design thinking, information architecture, and the ability to simplify dense ideas."
      }
    ]
  }
];

export const beforeAfterExamples = [
  {
    id: "hierarchy",
    title: "Visual Hierarchy & Contrast",
    category: "THUMBNAIL & COVER DESIGN",
    description: "Transforming a cluttered, flat design into a high-contrast attention magnet with clear focal priority.",
    before: {
      tag: "WEAK HIERARCHY",
      issues: ["Equal font weights cause zero focal point", "Low contrast against background", "No emotional anchor face", "Cluttered layout confuses viewers"],
      style: "bg-[#1E1E24] border-red-900/40"
    },
    after: {
      tag: "IMPROVED HIERARCHY",
      improvements: ["Single strong focal point text in bold crimson", "High contrast rim lighting & background separation", "Strategic facial expression anchor", "Clean space guides eye instantly"],
      style: "bg-[#121216] border-[#E63946]/50 shadow-[0_0_30px_rgba(230,57,70,0.15)]"
    }
  },
  {
    id: "layout",
    title: "Cluttered vs Editorial Layout",
    category: "BRANDING & SOCIAL MEDIA",
    description: "Converting overcrowded text noise into an elegant dark editorial layout with generous breathing room.",
    before: {
      tag: "CLUTTERED DESIGN",
      issues: ["Text squeezed to edges", "Too many conflicting accent colors", "Generic stock icon visuals", "Hard to read on mobile"],
      style: "bg-[#1E1E24] border-red-900/40"
    },
    after: {
      tag: "CLEAR EDITORIAL DESIGN",
      improvements: ["Generous whitespace & clear margins", "Strict 2-color palette system", "Custom branded imagery", "Optimized typography scale for mobile"],
      style: "bg-[#121216] border-[#E63946]/50 shadow-[0_0_30px_rgba(230,57,70,0.15)]"
    }
  }
];

export const designProcess = [
  { step: "01", name: "DISCOVER", desc: "Understanding audience intent, project objectives, and key visual requirements." },
  { step: "02", name: "RESEARCH", desc: "Analyzing category trends, competitor visual noise, and visual positioning opportunities." },
  { step: "03", name: "CONCEPT", desc: "Exploring thumbnail hooks, typographic pairs, color systems, and layout sketches." },
  { step: "04", name: "DESIGN", desc: "Executing high-precision pixel visuals, applying grid structures, contrast, and focal balance." },
  { step: "05", name: "REFINE", desc: "Iterating based on mobile readability checks, contrast audits, and visual impact tests." },
  { step: "06", name: "DELIVER", desc: "Exporting crisp, optimized assets across all digital formats and aspect ratios." }
];

export const skillsData = {
  design: [
    "Graphic Design",
    "Thumbnail Design (High CTR)",
    "Social Media Design",
    "Branding & Visual Identity",
    "Typography & Layout",
    "Color Theory & Composition",
    "Photo Manipulation",
    "Visual Storytelling & Digital Design"
  ],
  content: [
    "Content Creation",
    "Content Strategy",
    "Creative Concept Development",
    "Audience Understanding",
    "Trend Research"
  ],
  tools: [
    { name: "Adobe Photoshop", level: "Expert", category: "Raster & Manipulation" },
    { name: "Adobe Illustrator", level: "Advanced", category: "Vector & Branding" },
    { name: "Canva", level: "Advanced", category: "Rapid Layouts" },
    { name: "Figma (Basic)", level: "Intermediate", category: "UI/UX & Components" },
    { name: "Adobe Premiere Pro", level: "Intermediate", category: "Video Editing" },
    { name: "Adobe After Effects (Basic)", level: "Basic", category: "Motion Graphics" },
    { name: "CapCut", level: "Advanced", category: "Short-form Content" },
    { name: "DaVinci Resolve (Basic)", level: "Basic", category: "Color Grading" }
  ]
};
