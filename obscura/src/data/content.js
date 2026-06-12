// ————————————————————————————————————————————
// OBSCURA® — single source of truth for all content.
// Swap any URL here to rebrand imagery/video site-wide.
// ————————————————————————————————————————————

const u = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  heroPoster: u('photo-1492691527719-9d1e07e534b4', 1600), // filming scene
  camera: u('photo-1502920917128-1aa500764cbd', 1000),
  filmSet: u('photo-1500634245200-e5245c7574ef', 1200),
  editing: u('photo-1547394765-185e1e68f34e', 1200),
  macbook: u('photo-1498050108023-c5249f4df085', 1100),
  workspace: u('photo-1497366216548-37526070297c', 1200),
  team: u('photo-1522071820081-009f0129c71c', 1200),
  drone: u('photo-1473968512647-3e447244af8f', 1000),
  aerial: u('photo-1477959858617-67f85cf4f1df', 1400),
  product: u('photo-1523275335684-37898b6baf30', 1000),
  perfume: u('photo-1581235720704-06d3acfcb36f', 1000),
  coffeeMeet: u('photo-1521017432531-fbd92d768814', 1100),
  fashion: u('photo-1469334031218-e382a71b716b', 1100),
  studio: u('photo-1554048612-b6a482bc67e5', 1200),
  street: u('photo-1483985988355-763728e1935b', 1000),
};

// Pexels direct video files — poster image always renders as fallback.
export const HERO_VIDEO = {
  sources: [
    'https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4',
    'https://videos.pexels.com/video-files/2795749/2795749-uhd_2560_1440_25fps.mp4',
  ],
  poster: IMAGES.heroPoster,
};

export const NAV_LINKS = [
  { label: 'Studio', href: '#top', short: 'ST' },
  { label: 'Services', href: '#services', short: 'SE' },
  { label: 'Manifesto', href: '#manifesto', short: 'MA' },
  { label: 'Work', href: '#work', short: 'WO' },
  { label: 'Numbers', href: '#numbers', short: 'NU' },
  { label: 'Contact', href: '#contact', short: 'CO' },
];

export const HERO = {
  kicker: 'OBSCURA® — Social Media Growth Studio',
  line1: 'TRANSFORM',
  line2: 'ATTENTION',
  line3: 'INTO CUSTOMERS.',
  sub: 'We are a studio of filmmakers, designers and growth operators. We make brands impossible to scroll past — then turn the stop into a sale.',
  cta: 'Start a project',
  cta2: 'Watch the reel',
  stats: [
    { value: '312M+', label: 'Organic views produced' },
    { value: '4.7×', label: 'Average ROAS on ads' },
    { value: '120+', label: 'Brands transformed' },
  ],
};

export const SERVICES = [
  {
    num: '01',
    name: 'Content Creation',
    grad: 'grad-emerald',
    tint: 'text-emerald-hi',
    img: 'camera',
    items: ['Reels engineered to stop thumbs', 'Cinematic brand films', 'Editorial photography', 'Drone & aerial shoots', 'Product shoots'],
    line: 'Cameras are our native language.',
  },
  {
    num: '02',
    name: 'Branding',
    grad: 'grad-royal',
    tint: 'text-royal-hi',
    img: 'studio',
    items: ['Logo & identity systems', 'Packaging that sells on shelves', 'Creative direction', 'Brand voice & art direction'],
    line: 'A brand is a film that never ends.',
  },
  {
    num: '03',
    name: 'Social Management',
    grad: 'grad-crimson',
    tint: 'text-crimson-hi',
    img: 'team',
    items: ['Instagram growth systems', 'Content calendars', 'Community management', 'Story arcs & series'],
    line: 'Consistency is the most underrated special effect.',
  },
  {
    num: '04',
    name: 'Advertising',
    grad: 'grad-tangerine',
    tint: 'text-tangerine-hi',
    img: 'macbook',
    items: ['Meta Ads', 'Google Ads', 'Conversion campaigns', 'Lead generation engines'],
    line: 'Beautiful creative, ruthless targeting.',
  },
  {
    num: '05',
    name: 'WhatsApp Business',
    grad: 'grad-cyan',
    tint: 'text-cyan-hi',
    img: 'coffeeMeet',
    items: ['Follow-up systems', 'Automations & flows', 'Catalog setup', 'Retention sequences'],
    line: 'The sale happens in the reply.',
  },
  {
    num: '06',
    name: 'Web Development',
    grad: 'grad-lavender',
    tint: 'text-lavender-hi',
    img: 'editing',
    items: ['Landing pages that convert', 'Portfolio websites', 'E-commerce builds'],
    line: 'Your website is the final cut.',
  },
  {
    num: '07',
    name: 'Analytics',
    grad: 'grad-gold',
    tint: 'text-gold-hi',
    img: 'workspace',
    items: ['Monthly growth reports', 'Audience insights', 'Creative performance metrics'],
    line: 'We measure everything we make.',
  },
];

export const MANIFESTO = {
  pinned: ['WE', 'DON\'T', 'POST.', 'WE', 'PREMIERE.'],
  statements: [
    'Every reel is treated like a 15-second film — scripted, lit, graded, scored.',
    'We don\'t chase the algorithm. We make the thing the algorithm chases.',
    'Attention is rented. Brand is owned. We build both at once.',
    'A view that doesn\'t move someone is just a number. We move people.',
    'Pretty isn\'t the goal. Unforgettable that converts — that\'s the goal.',
  ],
};

export const WORK = {
  strip: [
    { img: 'fashion', name: 'NOVA Apparel', tag: 'Brand film + launch' },
    { img: 'product', name: 'Meridian Watches', tag: 'Product cinema' },
    { img: 'aerial', name: 'Skyline Realty', tag: 'Drone campaign' },
    { img: 'perfume', name: 'Ètre Parfums', tag: 'Packaging + reels' },
    { img: 'street', name: 'KAVA Streetwear', tag: 'UGC engine' },
    { img: 'filmSet', name: 'Studio One', tag: 'Documentary series' },
  ],
  cases: [
    {
      file: 'FILE 01',
      name: 'NOVA Apparel',
      result: '0 → 240K followers in 11 months',
      desc: 'A weekly cinematic drop-series turned a local label into a national obsession. 38 reels crossed a million views.',
      img: 'fashion',
      accent: 'crimson',
      wide: true,
    },
    {
      file: 'FILE 02',
      name: 'Meridian Watches',
      result: '4.9× ROAS on launch ads',
      desc: 'Macro product cinema + Meta full-funnel. Sold out two production runs in six weeks.',
      img: 'product',
      accent: 'royal',
    },
    {
      file: 'FILE 03',
      name: 'Ètre Parfums',
      result: '+312% online revenue',
      desc: 'Rebrand, packaging, and a scent-described-as-film content system.',
      img: 'perfume',
      accent: 'emerald',
    },
    {
      file: 'FILE 04',
      name: 'Skyline Realty',
      result: '1,400 qualified leads / quarter',
      desc: 'Drone-first listings + WhatsApp follow-up automation. Agents stopped cold calling.',
      img: 'aerial',
      accent: 'tangerine',
      wide: true,
    },
  ],
  grade: {
    before: u('photo-1492691527719-9d1e07e534b4', 1400),
    after: u('photo-1485846234645-a62644f84728', 1400),
    caption: 'Drag — raw footage vs. the OBSCURA grade.',
  },
};

export const NUMBERS = {
  counters: [
    { value: 312, suffix: 'M+', label: 'Organic views' },
    { value: 120, suffix: '+', label: 'Brands grown' },
    { value: 47, suffix: '', label: 'ROAS ×10 avg', display: '4.7×' },
    { value: 9, suffix: '', label: 'Awards & features' },
  ],
  bars: [
    { label: 'Avg. engagement lift', pct: 86, tone: 'grad-emerald' },
    { label: 'Follower growth (90 days)', pct: 72, tone: 'grad-royal' },
    { label: 'Ad CTR vs. industry', pct: 91, tone: 'grad-crimson' },
    { label: 'Client retention', pct: 95, tone: 'grad-gold' },
  ],
};

export const QUOTE = {
  text: 'OBSCURA didn\'t give us content. They gave us a cinematic universe — and our customers bought tickets.',
  name: 'Aanya Mehta',
  role: 'Founder, Ètre Parfums',
  img: 'studio',
};

export const PROCESS = [
  { step: 'ACT I', name: 'Obsess', desc: 'Two weeks inside your brand — audience, competitors, the feeling we need to own.' },
  { step: 'ACT II', name: 'Produce', desc: 'Scripts, shoots, edits, systems. A month of content built like a film slate.' },
  { step: 'ACT III', name: 'Amplify', desc: 'Distribution, ads, retention loops. Attention becomes pipeline.' },
  { step: 'ENCORE', name: 'Compound', desc: 'Monthly data reviews. What worked gets a sequel; what didn\'t gets cut.' },
];

export const FOOTER = {
  email: 'hello@obscura.studio',
  phone: '+91 98220 00000',
  city: 'Nagpur → everywhere',
  socials: ['Instagram', 'YouTube', 'Behance', 'LinkedIn'],
};

export const MARQUEE_WORDS = ['CONTENT', 'CINEMA', 'BRANDING', 'GROWTH', 'ADS', 'STORY', 'SCALE'];
