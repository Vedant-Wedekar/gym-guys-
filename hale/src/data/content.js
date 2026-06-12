// ————————————————————————————————————————————
// HALE — single source of truth for all content.
// Swap any Unsplash URL here to rebrand imagery site-wide.
// ————————————————————————————————————————————

const u = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  heroYoga: u('photo-1506126613408-eca07ce68773', 1600), // meditation at sunrise
  heroNature: u('photo-1441974231531-c6227db76b6e', 1000), // forest light
  heroSmoothie: u('photo-1505252585461-04db1eb84625', 800), // smoothie bowls
  yogaStudio: u('photo-1544367567-0f2fcb009e0b', 1200), // yoga pose
  meditation: u('photo-1545389336-cf090694435e', 1200), // zen meditation
  healthyBowl: u('photo-1512621776951-a57141f2eefd', 1000), // salad bowl
  gym: u('photo-1534438327276-14e5300c3a48', 1200), // gym
  workout: u('photo-1571019613454-1cb2f99b2d8b', 1000),
  running: u('photo-1476480862126-209bfaa8edc8', 1200), // morning run
  cycling: u('photo-1541625602330-2277a4c46182', 1000),
  spa: u('photo-1544161515-4ab6ce6db874', 1200), // spa stones
  lake: u('photo-1506744038136-46273834b3fb', 1400), // calm lake
  retreatPool: u('photo-1571896349842-33c89424de2d', 1200),
  breathField: u('photo-1499209974431-9dddcece7f88', 1200), // breathing in field
  forest: u('photo-1448375240586-882707db888b', 1000),
  fruits: u('photo-1490474418585-ba9bad8fd0ea', 900),
  expert1: u('photo-1559839734-2b71ea197ec2', 700), // female doctor
  expert2: u('photo-1571731956672-f2b94d7dd0cb', 700), // coach
  expert3: u('photo-1594824476967-48c8b964273f', 700), // therapist
  expert4: u('photo-1573496359142-b8d87734a5a2', 700), // specialist
  blog1: u('photo-1490645935967-10de6ba17061', 1000), // healthy food flatlay
  blog2: u('photo-1518611012118-696072aa579a', 1000), // workout
  blog3: u('photo-1474418397713-7ede21d49118', 1000), // calm sleep
};

export const NAV_LINKS = [
  { label: 'Programs', href: '#programs' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Experts', href: '#experts' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
];

export const HERO = {
  eyebrow: 'Health & Wellness Hub · Est. 2018',
  titleTop: 'Feel whole',
  titleAccent: 'again',
  titleBottom: '— body & mind.',
  sub: 'HALE is a sanctuary for modern wellness. Movement, mindfulness, nutrition and rest — woven into one calm practice, guided by people who care.',
  ctaPrimary: 'Begin your journey',
  ctaSecondary: 'Explore programs',
  cards: [
    { label: 'Members thriving', value: '4,200+' },
    { label: 'Open today', value: '6:00 — 21:00' },
  ],
};

export const STATS = [
  { value: 4200, suffix: '+', label: 'Members on their journey' },
  { value: 38, suffix: '', label: 'Certified experts' },
  { value: 120, suffix: '+', label: 'Weekly classes' },
  { value: 97, suffix: '%', label: 'Feel calmer in 30 days' },
];

export const PROGRAMS = [
  { name: 'Fitness & Strength', desc: 'Progressive training that meets your body where it is.', icon: 'GiWeightLiftingUp', tone: 'emerald', size: 'wide', img: 'gym' },
  { name: 'Yoga', desc: 'Vinyasa to Yin — six styles, all levels.', icon: 'GiMeditation', tone: 'sage' },
  { name: 'Meditation', desc: 'Guided stillness, ten minutes at a time.', icon: 'GiLotus', tone: 'lavender' },
  { name: 'Breathwork', desc: 'Down-regulate your nervous system on demand.', icon: 'GiWindsock', tone: 'sky' },
  { name: 'Nutrition Plans', desc: 'Food as a kindness, not a punishment.', icon: 'GiFruitBowl', tone: 'sunset' },
  { name: 'Therapy', desc: 'Licensed therapists, in-person or online.', icon: 'GiHeartInside', tone: 'coral', size: 'tall', img: 'meditation' },
  { name: 'Sleep Improvement', desc: 'Rebuild your nights in six weeks.', icon: 'GiNightSleep', tone: 'ocean' },
  { name: 'Stress Management', desc: 'Practical tools for unreasonable weeks.', icon: 'GiStonePile', tone: 'mint' },
  { name: 'Personal Coaching', desc: 'One guide, one plan, one you.', icon: 'GiPathDistance', tone: 'emerald' },
  { name: 'Community', desc: 'Sunrise runs, supper clubs, silent hikes.', icon: 'GiThreeFriends', tone: 'sage', size: 'wide', img: 'running' },
];

export const SERVICES = [
  { name: 'Gym & Open Floor', desc: 'Light-filled training floor with recovery zone, open from six.', tone: 'emerald' },
  { name: 'Personal Training', desc: 'One-to-one programming, reviewed every two weeks.', tone: 'emerald' },
  { name: 'Mindfulness Classes', desc: 'Daily guided sits, body scans and walking meditation.', tone: 'lavender' },
  { name: 'Therapy Sessions', desc: 'CBT, ACT and couples therapy with licensed clinicians.', tone: 'coral' },
  { name: 'Diet & Nutrition', desc: 'Consultations, meal architecture, gentle accountability.', tone: 'sunset' },
  { name: 'Weight Management', desc: 'Evidence-based, shame-free, built around your life.', tone: 'sky' },
  { name: 'Health Tracking', desc: 'Quarterly assessments — strength, mobility, sleep, mood.', tone: 'ocean' },
  { name: 'Physiotherapy', desc: 'Assessment and rehab for the body you actually have.', tone: 'mint' },
  { name: 'Wellness Retreats', desc: 'Three-day resets in the hills, four times a year.', tone: 'sage' },
  { name: 'Lifestyle Coaching', desc: 'Habits, boundaries, energy — the operating system of you.', tone: 'champagne' },
];

export const BREATHING = {
  eyebrow: 'A small practice, right now',
  title: 'Breathe with this page.',
  sub: 'Follow the circle. Four counts in, four held, six out. Three rounds is enough to tell your body it is safe.',
  phases: [
    { label: 'Breathe in', secs: 4 },
    { label: 'Hold', secs: 4 },
    { label: 'Breathe out', secs: 6 },
  ],
};

export const GALLERY = [
  { img: IMAGES.yogaStudio, alt: 'Morning yoga session', h: 'h-72 md:h-96' },
  { img: IMAGES.healthyBowl, alt: 'Nourishing breakfast bowl', h: 'h-56 md:h-64' },
  { img: IMAGES.lake, alt: 'Still lake at dawn', h: 'h-64 md:h-80' },
  { img: IMAGES.workout, alt: 'Strength training', h: 'h-60 md:h-72' },
  { img: IMAGES.spa, alt: 'Spa stillness', h: 'h-72 md:h-80' },
  { img: IMAGES.running, alt: 'Sunrise run', h: 'h-56 md:h-72' },
  { img: IMAGES.heroSmoothie, alt: 'Smoothie bowls', h: 'h-64 md:h-72' },
  { img: IMAGES.breathField, alt: 'Breathing in open air', h: 'h-72 md:h-96' },
  { img: IMAGES.cycling, alt: 'Cycling through hills', h: 'h-56 md:h-64' },
];

export const EXPERTS = [
  {
    name: 'Dr. Maya Iyer',
    role: 'Clinical Psychologist',
    note: 'Therapy that feels like clarity, not homework.',
    img: IMAGES.expert1,
    tone: 'lavender',
  },
  {
    name: 'Jonas Lindqvist',
    role: 'Head Fitness Coach',
    note: 'Strength is a practice of patience.',
    img: IMAGES.expert2,
    tone: 'emerald',
  },
  {
    name: 'Dr. Sofia Almeida',
    role: 'Nutritionist',
    note: 'No forbidden foods. Only better questions.',
    img: IMAGES.expert3,
    tone: 'sunset',
  },
  {
    name: 'Ane Kristensen',
    role: 'Yoga & Breathwork Lead',
    note: 'The breath is the fastest way home.',
    img: IMAGES.expert4,
    tone: 'sky',
  },
];

export const STORIES = [
  {
    text: 'I came for the gym and stayed for the breathwork. My resting heart rate dropped twelve points — but mostly, I just like who I am here.',
    name: 'Rohan M.',
    detail: 'Member, 14 months',
    tone: 'emerald',
  },
  {
    text: 'Therapy plus sleep coaching untangled five years of bad nights in one season. I forgot mornings could feel like this.',
    name: 'Claire D.',
    detail: 'Sleep program graduate',
    tone: 'lavender',
  },
  {
    text: 'The nutrition team never once made me feel judged. Eighteen kilos later, the bigger change is how quiet my head is around food.',
    name: 'Tomás V.',
    detail: 'Weight management',
    tone: 'sunset',
  },
  {
    text: 'The silent hike broke me open in the best way. I signed up for the retreat the same evening.',
    name: 'Aisha K.',
    detail: 'Community member',
    tone: 'sky',
  },
];

export const BLOG = {
  featured: {
    tag: 'Nutrition · 6 min read',
    title: 'Eating for energy: a gentle guide to stable days',
    excerpt: 'Forget willpower. Stable energy is architecture — protein anchors, colour on the plate, and one honest snack. Here is the whole system.',
    img: IMAGES.blog1,
  },
  posts: [
    {
      tag: 'Movement · 4 min',
      title: 'The 20-minute workout that actually counts',
      img: IMAGES.blog2,
    },
    {
      tag: 'Rest · 5 min',
      title: 'A wind-down ritual for racing minds',
      img: IMAGES.blog3,
    },
    {
      tag: 'Mindfulness · 3 min',
      title: 'Walking meditation for people who can’t sit still',
      img: IMAGES.breathField,
    },
  ],
};

export const FAQ = [
  {
    q: 'I’m a complete beginner. Is HALE for me?',
    a: 'Especially for you. Every program has a foundations track, and your first two weeks include a guided orientation — movement assessment, a mindfulness intro, and a plan that starts where you are, not where Instagram is.',
  },
  {
    q: 'Can I combine programs?',
    a: 'Most members do. Fitness pairs naturally with nutrition; therapy pairs beautifully with breathwork. Your coach helps you sequence things so nothing competes for the same energy.',
  },
  {
    q: 'Are therapy sessions confidential?',
    a: 'Completely. Our clinicians are licensed and bound by professional confidentiality. Therapy records are never shared with coaches or trainers unless you ask us to coordinate.',
  },
  {
    q: 'Do you offer online options?',
    a: 'Yes — coaching, therapy, nutrition and most mindfulness classes are available live online, and members get the full session library on demand.',
  },
  {
    q: 'What does membership cost?',
    a: 'Memberships start with a flexible monthly plan, and every program can also be booked standalone. Come for a visit — the first class and a wellness consultation are on us.',
  },
];

export const NEWSLETTER = {
  title: 'The Sunday Reset',
  sub: 'One calm email a week — a movement idea, a recipe, a breathing practice and one good thought. Read in three minutes, feel it all week.',
  placeholder: 'your@email.com',
  button: 'Join free',
};

export const FOOTER = {
  address: ['HALE Wellness Hub', '12 Stillwater Lane'],
  hours: ['Mon – Sun · 6:00 — 21:00', 'Retreats year-round'],
  contact: ['hello@hale.health', '+1 (555) 014-2030'],
};

export const MARQUEE_WORDS = [
  'BREATHE',
  'MOVE',
  'NOURISH',
  'REST',
  'HEAL',
  'GROW',
  'BALANCE',
  'STILLNESS',
];
