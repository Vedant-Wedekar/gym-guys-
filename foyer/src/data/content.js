// ————————————————————————————————————————————
// FOYER — single source of truth for all content.
// Swap any Unsplash URL here to rebrand imagery site-wide.
// ————————————————————————————————————————————

const u = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  heroHome: u('photo-1600585154340-be6161a56a0c', 1600), // beautiful modern home
  heroKitchen: u('photo-1556911220-bff31c812dba', 900), // clean kitchen
  heroLiving: u('photo-1586023492125-27b2c045efd7', 900), // styled living room
  livingRoom: u('photo-1556228453-efd6c1ff04f6', 1200),
  bedroom: u('photo-1505693416388-ac5ce068fe85', 1200),
  bathroom: u('photo-1620626011761-996317b8d101', 1100),
  laundry: u('photo-1582735689369-4fe89db7114c', 1000),
  cleaningScene: u('photo-1581578731548-c64695cc6952', 1200), // professional cleaning
  supplies: u('photo-1584820927498-cfe5211fd8bf', 1000),
  cooking: u('photo-1556910103-1c02745aae4d', 1200),
  cookingWarm: u('photo-1466637574441-749b8f19452f', 1000),
  carCare: u('photo-1607860108855-64acf2078ed9', 1100),
  gardening: u('photo-1416879595882-3373a0480b5b', 1100),
  pet: u('photo-1450778869180-41d0601e046e', 1000),
  cozy: u('photo-1513694203232-719a280e022f', 1200),
  kitchenModern: u('photo-1600566753190-17f0baa2a6c3', 1200),
  helper1: u('photo-1573497019940-1c28c88b4f3e', 700),
  helper2: u('photo-1580489944761-15a19d654956', 700),
  helper3: u('photo-1607746882042-944635dfe10e', 700),
  helper4: u('photo-1560250097-0b93528c311a', 700),
};

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Categories', href: '#categories' },
  { label: 'Helpers', href: '#helpers' },
  { label: 'How it works', href: '#process' },
  { label: 'Plans', href: '#plans' },
  { label: 'Stories', href: '#stories' },
];

export const HERO = {
  eyebrow: 'Home services, by the hour or by the task',
  titleTop: 'Come home',
  titleAccent: 'to done.',
  sub: 'Vetted housekeepers, cooks, organisers and carers — booked in ninety seconds, arriving with a smile. FOYER turns the chores you dread into hours you get back.',
  ctaPrimary: 'Book a helper',
  ctaSecondary: 'Browse services',
  cards: [
    { label: 'Average match time', value: 'Under 2 hrs' },
    { label: 'Helpers near you', value: '320+ vetted' },
  ],
};

export const STATS = [
  { value: 48000, suffix: '+', label: 'Homes cared for' },
  { value: 320, suffix: '+', label: 'Vetted professionals' },
  { value: 98, suffix: '%', label: 'Five-star visits' },
  { value: 92, suffix: '%', label: 'Rebook the same helper' },
];

export const FEATURED = [
  {
    name: 'Signature Home Cleaning',
    desc: 'Bedrooms, living spaces, bathrooms and kitchen — our full ritual, finished with fresh linen corners and a faint scent of cedar.',
    price: 'from ₹349/hr',
    img: 'cleaningScene',
    tone: 'sky',
    tag: 'Most booked',
  },
  {
    name: 'Daily Cooking',
    desc: 'Breakfast before the school run, lunch and dinner that taste like someone cared — because someone did.',
    price: 'from ₹399/hr',
    img: 'cooking',
    tone: 'sunset',
    tag: 'Family favourite',
  },
  {
    name: 'Laundry & Pressing',
    desc: 'Washed, line-dried, ironed and folded into hotel-crisp stacks. Your wardrobe, but on its best day.',
    price: 'from ₹299/hr',
    img: 'laundry',
    tone: 'sage',
    tag: 'Weekly ritual',
  },
];

export const WHY = {
  points: [
    {
      title: 'Vetted like family',
      desc: 'Identity checks, references, in-person interviews and a paid trial shift — fewer than 1 in 9 applicants wear the FOYER apron.',
      icon: 'HiShieldCheck',
    },
    {
      title: 'Your home, your way',
      desc: 'Every preference is remembered — the vase that never moves, the pan that never sees soap, the dog who needs a hello first.',
      icon: 'HiHeart',
    },
    {
      title: 'Hourly or by task',
      desc: 'Book three hours of help, or just "iron these twelve shirts." You pay for outcomes, not minimums.',
      icon: 'HiClock',
    },
    {
      title: 'Same face, every time',
      desc: 'Loved your helper? One tap makes them yours — same person, same day, same standard, week after week.',
      icon: 'HiRefresh',
    },
  ],
};

export const CATEGORIES = [
  { name: 'Home Cleaning', desc: 'Deep, daily & moving-day', icon: 'MdCleaningServices', tone: 'sky', size: 'wide', img: 'livingRoom' },
  { name: 'Cooking', desc: 'Daily meals to party menus', icon: 'MdOutdoorGrill', tone: 'sunset' },
  { name: 'Laundry', desc: 'Wash · iron · fold', icon: 'MdLocalLaundryService', tone: 'sage' },
  { name: 'Kitchen Care', desc: 'Dishes & organisation', icon: 'MdCountertops', tone: 'emerald' },
  { name: 'Home Care', desc: 'Dusting, floors, furniture', icon: 'MdChair', tone: 'cream' },
  { name: 'Car Care', desc: 'Wash & interior detail', icon: 'MdDirectionsCar', tone: 'royal', size: 'tall', img: 'carCare' },
  { name: 'Pet Care', desc: 'Walks, feeding, cuddles', icon: 'MdPets', tone: 'terracotta' },
  { name: 'Elderly Assistance', desc: 'Gentle, patient company', icon: 'MdVolunteerActivism', tone: 'coral' },
  { name: 'Gardening', desc: 'Balconies to backyards', icon: 'MdYard', tone: 'emerald' },
  { name: 'Organisation', desc: 'Closets, kitchens, chaos', icon: 'MdInventory2', tone: 'sand', size: 'wide', img: 'bedroom' },
  { name: 'Personalised Tasks', desc: 'If it helps, we do it', icon: 'MdAutoAwesome', tone: 'champagne' },
];

export const HELPERS = [
  {
    name: 'Sunita Pawar',
    role: 'Head Housekeeper',
    exp: '11 yrs',
    rating: '4.98',
    note: 'A clean room should feel like an exhale.',
    img: IMAGES.helper1,
    tone: 'sky',
  },
  {
    name: 'Meera Joshi',
    role: 'Family Cook',
    exp: '8 yrs',
    rating: '4.97',
    note: 'I cook the food your grandmother would approve of.',
    img: IMAGES.helper3,
    tone: 'sunset',
  },
  {
    name: 'Anita Deshmukh',
    role: 'Organisation Specialist',
    exp: '6 yrs',
    rating: '4.95',
    note: 'Every object wants a home. I introduce them.',
    img: IMAGES.helper2,
    tone: 'sage',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Car & Home Care',
    exp: '9 yrs',
    rating: '4.96',
    note: 'Details are not small things. They are the thing.',
    img: IMAGES.helper4,
    tone: 'royal',
  },
];

export const PROCESS = [
  {
    step: '01',
    title: 'Tell us what needs doing',
    desc: 'Pick a service and a time — by the hour or by the task. Add the little details that make your home yours.',
  },
  {
    step: '02',
    title: 'Meet your match',
    desc: 'We pair you with a vetted helper rated 4.9+ for exactly this work, usually within two hours.',
  },
  {
    step: '03',
    title: 'Come home to done',
    desc: 'Track progress, pay in the app, and tip with one hand while holding your coffee with the other.',
  },
];

// Interactive estimator — front-end only demo pricing
export const ESTIMATOR = {
  services: [
    { name: 'Home Cleaning', rate: 349, tone: 'sky' },
    { name: 'Cooking', rate: 399, tone: 'sunset' },
    { name: 'Laundry & Ironing', rate: 299, tone: 'sage' },
    { name: 'Deep Cleaning', rate: 449, tone: 'emerald' },
    { name: 'Organisation', rate: 379, tone: 'sand' },
  ],
  minHours: 1,
  maxHours: 8,
};

export const BEFORE_AFTER = {
  before: u('photo-1584820927498-cfe5211fd8bf', 1400),
  after: u('photo-1556228453-efd6c1ff04f6', 1400),
  caption: 'Drag the handle — a Tuesday, before and after FOYER.',
};

export const GALLERY = [
  { img: IMAGES.kitchenModern, alt: 'Kitchen, reset to zero', h: 'h-64 md:h-80' },
  { img: IMAGES.bedroom, alt: 'Bedroom with hospital corners', h: 'h-72 md:h-96' },
  { img: IMAGES.bathroom, alt: 'Bathroom, hotel standard', h: 'h-56 md:h-72' },
  { img: IMAGES.cookingWarm, alt: 'Dinner, handled', h: 'h-64 md:h-72' },
  { img: IMAGES.cozy, alt: 'Living room, evening-ready', h: 'h-72 md:h-80' },
  { img: IMAGES.gardening, alt: 'Balcony garden, thriving', h: 'h-56 md:h-64' },
];

export const STORIES = [
  {
    text: 'Sunita has kept our flat for two years. My toddler calls her "the magic auntie" because toys reappear on shelves. Honestly? Same.',
    name: 'Priya & Aarav',
    detail: 'Weekly cleaning · 26 months',
    tone: 'sky',
  },
  {
    text: 'I booked "iron twelve shirts" as a joke about the app\'s flexibility. Forty minutes later they were hanging in my closet by colour.',
    name: 'Kabir S.',
    detail: 'Task booking',
    tone: 'sage',
  },
  {
    text: 'Meera cooks for my parents three days a week. Dad has started rating restaurants against her dal. The restaurants are losing.',
    name: 'Ananya R.',
    detail: 'Cooking + elderly care',
    tone: 'sunset',
  },
  {
    text: 'Moving day deep clean: two helpers, four hours, and a landlord who returned the full deposit with a compliment. Unheard of.',
    name: 'Dev & Ishaan',
    detail: 'Deep cleaning',
    tone: 'coral',
  },
];

export const PLANS = [
  {
    name: 'À la carte',
    price: 'Pay per visit',
    tagline: 'For the occasional rescue',
    features: ['Book by hour or task', 'Vetted 4.9+ helpers', 'Same-day availability', 'In-app payment & tips'],
    cta: 'Book once',
    featured: false,
  },
  {
    name: 'The Household',
    price: '₹1,499/mo',
    tagline: 'Our signature membership',
    features: [
      'Priority matching, same helper',
      '12% off every booking',
      'Free monthly deep-clean upgrade',
      'Dedicated home manager',
      'Flexible rescheduling, no fees',
    ],
    cta: 'Join The Household',
    featured: true,
  },
  {
    name: 'The Estate',
    price: '₹4,999/mo',
    tagline: 'For homes with staff-level needs',
    features: [
      'Daily help, fully managed',
      'Backup helper guarantee',
      'Quarterly home audits',
      'Concierge for personalised tasks',
    ],
    cta: 'Talk to us',
    featured: false,
  },
];

export const FAQ = [
  {
    q: 'How are helpers vetted?',
    a: 'Government ID verification, two reference checks, an in-person interview, skills assessment and a paid supervised trial shift. Fewer than 1 in 9 applicants are accepted, and every helper is re-reviewed quarterly.',
  },
  {
    q: 'Can I get the same helper every time?',
    a: 'Yes — that\'s the heart of FOYER. After any booking, tap "Make them my helper" and they\'re reserved for your slots. 92% of members rebook the same person.',
  },
  {
    q: 'What if I\'m not happy with a visit?',
    a: 'Tell us within 24 hours and we\'ll redo the visit free or refund it fully — your choice, no forms, no interrogation.',
  },
  {
    q: 'Are helpers insured?',
    a: 'Every booking includes coverage for accidental damage and a verified-arrival protocol, so both your home and your helper are protected.',
  },
  {
    q: 'Do you really do "personalised tasks"?',
    a: 'If it\'s legal, safe and helps your home run — yes. Members have booked plant-sitting, party prep, wardrobe seasonal swaps and assembling that one shelf from 2023.',
  },
];

export const NEWSLETTER = {
  title: 'The Well-Kept Home',
  sub: 'A short monthly letter — one organisation idea, one recipe from our cooks, one cleaning secret the hotels use. Useful, never noisy.',
  placeholder: 'your@email.com',
  button: 'Subscribe',
};

export const FOOTER = {
  address: ['FOYER HQ', 'Nagpur · Pune · Mumbai'],
  hours: ['Helpers available 7:00 — 21:00', 'Support: every day, 24/7'],
  contact: ['hello@foyer.homes', '+91 98000 12345'],
};

export const MARQUEE_WORDS = [
  'CLEANED',
  'COOKED',
  'FOLDED',
  'POLISHED',
  'ORGANISED',
  'WATERED',
  'WALKED',
  'HANDLED',
];
