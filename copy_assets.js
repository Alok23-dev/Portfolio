import fs from 'fs';
import path from 'path';

const brainDir = `C:\\Users\\pande\\.gemini\\antigravity-ide\\brain\\70cfc425-f947-4335-ad98-485188fe6796`;
const destDir = `c:\\Users\\pande\\OneDrive\\Desktop\\port\\public\\assets\\images`;

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// 1. Copy generated images if they exist
const filesInBrain = fs.readdirSync(brainDir);

const mappings = [
  { prefix: 'nexus_branding_mockup', target: 'nexus_branding.jpg' },
  { prefix: 'vortex_social_campaign', target: 'vortex_social.jpg' },
  { prefix: 'thumb_ai_revolution', target: 'thumb_ai.jpg' },
  { prefix: 'thumb_wealth_strategy', target: 'thumb_wealth.jpg' },
  { prefix: 'thumb_business_hack', target: 'thumb_business.jpg' },
  { prefix: 'thumb_podcast_truth', target: 'thumb_podcast.jpg' },
];

mappings.forEach(m => {
  const match = filesInBrain.find(f => f.startsWith(m.prefix) && (f.endsWith('.jpg') || f.endsWith('.png')));
  if (match) {
    fs.copyFileSync(path.join(brainDir, match), path.join(destDir, m.target));
    console.log(`Copied ${match} -> ${m.target}`);
  }
});

// 2. Generate crisp professional SVG assets for synergy_marketing, swiss_poster, ai_workflow

// A. Synergy Marketing Suite SVG
const synergySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" style="background:#0a0a0c;">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f0f14"/>
      <stop offset="100%" stop-color="#050507"/>
    </linearGradient>
    <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#e63946"/>
      <stop offset="100%" stop-color="#ff4d5a"/>
    </linearGradient>
  </defs>

  <rect width="1600" height="900" fill="url(#bgGrad)"/>
  
  <g stroke="#ffffff" stroke-opacity="0.04" stroke-width="1">
    <path d="M0,150 H1600 M0,300 H1600 M0,450 H1600 M0,600 H1600 M0,750 H1600"/>
    <path d="M200,0 V900 M400,0 V900 M600,0 V900 M800,0 V900 M1000,0 V900 M1200,0 V900 M1400,0 V900"/>
  </g>

  <g transform="translate(100, 100)">
    <rect x="50" y="50" width="900" height="500" rx="16" fill="#121218" stroke="#e63946" stroke-width="2" stroke-opacity="0.4" />
    <rect x="70" y="70" width="860" height="460" rx="10" fill="#0d0d12"/>
    <path d="M70,70 L600,70 L450,530 L70,530 Z" fill="url(#redGrad)" opacity="0.95"/>
    <circle cx="280" cy="300" r="140" fill="#000000" opacity="0.2"/>
    
    <text x="120" y="180" font-family="'Syne', 'Helvetica Neue', sans-serif" font-weight="900" font-size="52" fill="#ffffff" letter-spacing="-1">SCALE YOUR BRAND</text>
    <text x="120" y="240" font-family="'Syne', 'Helvetica Neue', sans-serif" font-weight="900" font-size="52" fill="#ffffff" letter-spacing="-1">WITH SYNERGY DIGITAL</text>
    <text x="120" y="300" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="20" fill="#ffffff" opacity="0.9">Data-Driven B2B Marketing &amp; Performance Advertising Campaigns</text>
    
    <g transform="translate(120, 350)">
      <rect width="220" height="60" rx="30" fill="#ffffff"/>
      <text x="110" y="38" font-family="'Syne', sans-serif" font-weight="800" font-size="18" fill="#e63946" text-anchor="middle" letter-spacing="1">LAUNCH CAMPAIGN</text>
    </g>

    <polygon points="500,20 400,70 600,70" fill="#ffffff" opacity="0.08"/>
    <polygon points="200,20 100,70 300,70" fill="#ffffff" opacity="0.08"/>
    <polygon points="800,20 700,70 900,70" fill="#ffffff" opacity="0.08"/>
    
    <rect x="70" y="550" width="280" height="40" rx="8" fill="#181822" stroke="#ffffff" stroke-opacity="0.1"/>
    <text x="210" y="575" font-family="monospace" font-size="14" fill="#e63946" text-anchor="middle" font-weight="bold">CITY BILLBOARD MOCKUP (20x10FT)</text>
  </g>

  <g transform="translate(1080, 150)">
    <rect x="0" y="0" width="420" height="240" rx="12" fill="#121218" stroke="#ffffff" stroke-opacity="0.15"/>
    <rect x="15" y="15" width="390" height="210" rx="8" fill="#1a1a24"/>
    <rect x="35" y="35" width="180" height="24" rx="4" fill="#e63946"/>
    <rect x="35" y="75" width="260" height="12" rx="3" fill="#ffffff" opacity="0.8"/>
    <rect x="35" y="95" width="200" height="12" rx="3" fill="#ffffff" opacity="0.5"/>
    <rect x="35" y="145" width="120" height="40" rx="20" fill="#e63946"/>
    <circle cx="320" cy="120" r="55" fill="#e63946" opacity="0.2"/>
    <text x="210" y="255" font-family="monospace" font-size="12" fill="#9e9ea7" text-anchor="middle">DESKTOP PROMO BANNER (1200x600)</text>
  </g>

  <g transform="translate(1080, 450)">
    <rect x="80" y="0" width="260" height="380" rx="24" fill="#121218" stroke="#ffffff" stroke-opacity="0.2" stroke-width="2"/>
    <rect x="95" y="20" width="230" height="340" rx="16" fill="#000000"/>
    <rect x="115" y="50" width="190" height="140" rx="8" fill="#e63946" opacity="0.8"/>
    <text x="210" y="130" font-family="'Syne', sans-serif" font-weight="800" font-size="20" fill="#ffffff" text-anchor="middle">5X ROI</text>
    <rect x="115" y="210" width="160" height="14" rx="4" fill="#ffffff"/>
    <rect x="115" y="235" width="130" height="10" rx="3" fill="#9e9ea7"/>
    <rect x="115" y="290" width="190" height="40" rx="20" fill="#e63946"/>
    <text x="210" y="315" font-family="'Syne', sans-serif" font-weight="700" font-size="13" fill="#ffffff" text-anchor="middle">INSTALL NOW</text>
    <text x="210" y="395" font-family="monospace" font-size="12" fill="#9e9ea7" text-anchor="middle">MOBILE AD CREATIVE (1080x1350)</text>
  </g>
</svg>`;

fs.writeFileSync(path.join(destDir, 'synergy_marketing.svg'), synergySvg);

// B. Swiss Poster Exhibition SVG
const posterSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1600" width="100%" height="100%" style="background:#0a0a0c;">
  <defs>
    <linearGradient id="posterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e63946"/>
      <stop offset="100%" stop-color="#800f2f"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="1600" fill="#0d0d12"/>
  <rect x="80" y="80" width="1040" height="1440" fill="#121218" stroke="#ffffff" stroke-opacity="0.1" stroke-width="2"/>

  <g stroke="#e63946" stroke-opacity="0.15" stroke-width="2" stroke-dasharray="4,4">
    <line x1="140" y1="140" x2="1060" y2="140"/>
    <line x1="140" y1="400" x2="1060" y2="400"/>
    <line x1="140" y1="800" x2="1060" y2="800"/>
    <line x1="140" y1="1200" x2="1060" y2="1200"/>
    <line x1="140" y1="1460" x2="1060" y2="1460"/>
    <line x1="140" y1="140" x2="140" y2="1460"/>
    <line x1="600" y1="140" x2="600" y2="1460"/>
    <line x1="1060" y1="140" x2="1060" y2="1460"/>
  </g>

  <text x="140" y="260" font-family="'Syne', 'Helvetica Neue', sans-serif" font-weight="900" font-size="110" fill="#ffffff" letter-spacing="-4">SWISS</text>
  <text x="140" y="370" font-family="'Syne', 'Helvetica Neue', sans-serif" font-weight="900" font-size="110" fill="#e63946" letter-spacing="-4">GRAPHIQUE</text>
  
  <text x="1060" y="260" font-family="'Syne', sans-serif" font-weight="900" font-size="120" fill="#ffffff" opacity="0.1" text-anchor="end">2024</text>

  <g transform="translate(140, 440)">
    <rect x="0" y="0" width="440" height="680" fill="url(#posterGrad)"/>
    <circle cx="440" cy="340" r="280" fill="#0a0a0c"/>
    <polygon points="0,680 440,0 440,680" fill="#ffffff" opacity="0.1"/>
    
    <text x="40" y="100" font-family="monospace" font-weight="bold" font-size="22" fill="#ffffff" letter-spacing="4">INTERNATIONAL TYPOGRAPHY</text>
    <text x="40" y="140" font-family="monospace" font-size="16" fill="#ffffff" opacity="0.8">EXHIBITION / ZURICH HALL 04</text>
  </g>

  <g transform="translate(620, 440)">
    <rect x="0" y="0" width="440" height="320" fill="#1a1a24" stroke="#ffffff" stroke-opacity="0.1"/>
    <text x="30" y="60" font-family="'Syne', sans-serif" font-weight="800" font-size="32" fill="#ffffff">ORDER &amp; CHAOS</text>
    <text x="30" y="100" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#9e9ea7">Exploring brutalist grid structures, dynamic contrast, and asymmetric typographic tension.</text>
    
    <rect x="0" y="360" width="440" height="320" fill="#e63946"/>
    <text x="30" y="420" font-family="'Syne', sans-serif" font-weight="900" font-size="70" fill="#ffffff">DESIGN</text>
    <text x="30" y="490" font-family="'Syne', sans-serif" font-weight="900" font-size="70" fill="#000000">SYSTEMS</text>
  </g>

  <g transform="translate(140, 1240)">
    <text x="0" y="40" font-family="monospace" font-size="18" fill="#e63946" font-weight="bold">CURATED BY ALOK PANDEY</text>
    <text x="0" y="70" font-family="monospace" font-size="14" fill="#9e9ea7">EDITORIAL GRAPHIC DESIGN DISCIPLINES</text>
    
    <text x="460" y="40" font-family="monospace" font-size="18" fill="#ffffff" font-weight="bold">FORMAT: A1 PRINTS &amp; WHEATPASTE</text>
    <text x="460" y="70" font-family="monospace" font-size="14" fill="#9e9ea7">GRID SPEC: 12-COLUMN DECONSTRUCTED</text>
  </g>
</svg>`;

fs.writeFileSync(path.join(destDir, 'swiss_poster.svg'), posterSvg);

// C. AI Workflow Infographic SVG
const aiWorkflowSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" style="background:#0a0a0c;">
  <defs>
    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00f0ff"/>
      <stop offset="100%" stop-color="#7b2cbf"/>
    </linearGradient>
  </defs>

  <rect width="1600" height="900" fill="#0a0a0d"/>
  
  <text x="80" y="100" font-family="'Syne', sans-serif" font-weight="900" font-size="44" fill="#ffffff" letter-spacing="-1">AI &amp; MACHINE LEARNING PIPELINE</text>
  <text x="80" y="140" font-family="monospace" font-size="16" fill="#00f0ff" letter-spacing="2">// 6-STAGE VISUAL DATA &amp; DEPLOYMENT INFOGRAPHIC ARCHITECTURE</text>

  <path d="M150,450 C350,250 550,650 750,450 C950,250 1150,650 1450,450" fill="none" stroke="url(#cyanGrad)" stroke-width="6" opacity="0.8"/>
  <path d="M150,450 C350,250 550,650 750,450 C950,250 1150,650 1450,450" fill="none" stroke="#00f0ff" stroke-width="2" stroke-dasharray="10,10"/>

  <g transform="translate(100, 370)">
    <rect width="200" height="160" rx="16" fill="#12121a" stroke="#00f0ff" stroke-width="2"/>
    <circle cx="100" cy="-20" r="24" fill="#00f0ff"/>
    <text x="100" y="-12" font-family="monospace" font-weight="bold" font-size="16" fill="#000000" text-anchor="middle">01</text>
    <text x="100" y="45" font-family="'Syne', sans-serif" font-weight="800" font-size="18" fill="#ffffff" text-anchor="middle">DATA INGESTION</text>
    <text x="100" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#9e9ea7" text-anchor="middle">Raw Data Cleansing &amp;</text>
    <text x="100" y="100" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#9e9ea7" text-anchor="middle">Feature Extraction</text>
  </g>

  <g transform="translate(340, 210)">
    <rect width="200" height="160" rx="16" fill="#12121a" stroke="#7b2cbf" stroke-width="2"/>
    <circle cx="100" cy="-20" r="24" fill="#7b2cbf"/>
    <text x="100" y="-12" font-family="monospace" font-weight="bold" font-size="16" fill="#ffffff" text-anchor="middle">02</text>
    <text x="100" y="45" font-family="'Syne', sans-serif" font-weight="800" font-size="18" fill="#ffffff" text-anchor="middle">PREPROCESSING</text>
    <text x="100" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#9e9ea7" text-anchor="middle">Tokenization &amp;</text>
    <text x="100" y="100" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#9e9ea7" text-anchor="middle">Normalization</text>
  </g>

  <g transform="translate(580, 530)">
    <rect width="200" height="160" rx="16" fill="#12121a" stroke="#e63946" stroke-width="2"/>
    <circle cx="100" cy="-20" r="24" fill="#e63946"/>
    <text x="100" y="-12" font-family="monospace" font-weight="bold" font-size="16" fill="#ffffff" text-anchor="middle">03</text>
    <text x="100" y="45" font-family="'Syne', sans-serif" font-weight="800" font-size="18" fill="#ffffff" text-anchor="middle">MODEL TRAINING</text>
    <text x="100" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#9e9ea7" text-anchor="middle">Transformer Weights &amp;</text>
    <text x="100" y="100" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#9e9ea7" text-anchor="middle">Epoch Optimization</text>
  </g>

  <g transform="translate(820, 210)">
    <rect width="200" height="160" rx="16" fill="#12121a" stroke="#00f0ff" stroke-width="2"/>
    <circle cx="100" cy="-20" r="24" fill="#00f0ff"/>
    <text x="100" y="-12" font-family="monospace" font-weight="bold" font-size="16" fill="#000000" text-anchor="middle">04</text>
    <text x="100" y="45" font-family="'Syne', sans-serif" font-weight="800" font-size="18" fill="#ffffff" text-anchor="middle">EVALUATION</text>
    <text x="100" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#9e9ea7" text-anchor="middle">Loss Benchmark &amp;</text>
    <text x="100" y="100" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#9e9ea7" text-anchor="middle">Confusion Matrix</text>
  </g>

  <g transform="translate(1060, 530)">
    <rect width="200" height="160" rx="16" fill="#12121a" stroke="#7b2cbf" stroke-width="2"/>
    <circle cx="100" cy="-20" r="24" fill="#7b2cbf"/>
    <text x="100" y="-12" font-family="monospace" font-weight="bold" font-size="16" fill="#ffffff" text-anchor="middle">05</text>
    <text x="100" y="45" font-family="'Syne', sans-serif" font-weight="800" font-size="18" fill="#ffffff" text-anchor="middle">API DEPLOYMENT</text>
    <text x="100" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#9e9ea7" text-anchor="middle">Microservice Endpoint &amp;</text>
    <text x="100" y="100" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#9e9ea7" text-anchor="middle">Cloud Scaling</text>
  </g>

  <g transform="translate(1300, 370)">
    <rect width="200" height="160" rx="16" fill="#12121a" stroke="#e63946" stroke-width="2"/>
    <circle cx="100" cy="-20" r="24" fill="#e63946"/>
    <text x="100" y="-12" font-family="monospace" font-weight="bold" font-size="16" fill="#ffffff" text-anchor="middle">06</text>
    <text x="100" y="45" font-family="'Syne', sans-serif" font-weight="800" font-size="18" fill="#ffffff" text-anchor="middle">FEEDBACK LOOP</text>
    <text x="100" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#9e9ea7" text-anchor="middle">RLHF Fine-Tuning &amp;</text>
    <text x="100" y="100" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#9e9ea7" text-anchor="middle">Real-time Telemetry</text>
  </g>

  <rect x="80" y="810" width="1440" height="50" rx="12" fill="#121218" stroke="#ffffff" stroke-opacity="0.05"/>
  <text x="800" y="840" font-family="monospace" font-size="14" fill="#9e9ea7" text-anchor="middle">VISUAL INFOGRAPHIC DESIGN &amp; TECHNICAL ARCHITECTURE BY ALOK PANDEY</text>
</svg>`;

fs.writeFileSync(path.join(destDir, 'ai_workflow.svg'), aiWorkflowSvg);

console.log("Vector asset SVG files created successfully!");
