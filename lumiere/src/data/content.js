// ————————————————————————————————————————————
// LUMIÈRE — single source of truth for all content.
// Swap any Unsplash URL here to rebrand imagery site-wide.
// ————————————————————————————————————————————

const u = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  heroParis: u('photo-1502602898657-3e91760cbb34', 1800), // Eiffel tower street at dusk
  heroCroissant: u('photo-1555507036-ab1f4038808a', 900), // croissants
  heroLatte: u('photo-1509042239860-f550ce710b93', 900), // latte art pour
  cafeTerrace: u('photo-1520174691701-bc555a3404ca', 1400), // paris café terrace
  cafeInterior: u('photo-1554118811-1e0d58224f24', 1400), // café interior
  espresso: u('photo-1510591509098-f4fdc6d0ff04', 900),
  cappuccino: u('photo-1572442388796-11668a67e53d', 900),
  latteArt: u('photo-1541167760496-1628856ab772', 900),
  filterCoffee: u('photo-1495474472287-4d71bcdd2085', 900),
  macarons: u('photo-1569864358642-9d1684040f43', 1000),
  macaronsStack: u('photo-1558326567-98ae2405596b', 1000),
  tiramisu: u('photo-1571877227200-a0d98ea607e9', 900),
  chocolateCake: u('photo-1578985545062-69928b1d9587', 1000),
  berryTart: u('photo-1565958011703-44f9829ba187', 1000),
  pastryCase: u('photo-1509440159596-0249088772ff', 1200),
  bread: u('photo-1517433670267-08bbd4be890f', 1000),
  frenchBreakfast: u('photo-1484723091739-30a097e8f929', 1100),
  parisStreet: u('photo-1499856871958-5b9627545d1a', 1400), // Louvre blue hour
  parisRooftops: u('photo-1431274172761-fca41d930114', 1400), // Eiffel view
  croissantClose: u('photo-1549903072-7e6e0bedb7fb', 900),
  coffeeBeans: u('photo-1447933601403-0c6688de566e', 900),
  pourOver: u('photo-1512568400610-62da28bc8a13', 900),
  dessertPlate: u('photo-1551024506-0bccd828d307', 900),
};

export const NAV_LINKS = [
  { label: 'Coffee', href: '#coffee' },
  { label: 'Pâtisserie', href: '#patisserie' },
  { label: 'Seasonal', href: '#seasonal' },
  { label: 'Our Story', href: '#story' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit', href: '#visit' },
];

export const HERO = {
  eyebrow: 'Café & Pâtisserie · Paris 7ème · Depuis 1987',
  titleTop: 'La vie est',
  titleAccent: 'belle',
  titleBottom: 'au café.',
  sub: 'Single-origin espresso, hand-laminated croissants and fine pâtisserie — three minutes from the Eiffel Tower, a world away from the rush.',
  ctaPrimary: 'Reserve a table',
  ctaSecondary: 'See the menu',
  cards: [
    { label: 'Open today', value: '7:30 — 19:00' },
    { label: 'Rue Cler, 7ème', value: 'Left Bank' },
  ],
};

export const STATS = [
  { value: 39, suffix: '', label: 'Years on Rue Cler' },
  { value: 14, suffix: '', label: 'House pâtisseries' },
  { value: 3, suffix: '', label: 'Single-origin roasts' },
  { value: 240, suffix: '+', label: 'Croissants each morning' },
];

export const COFFEE = [
  {
    name: 'Espresso Lumière',
    desc: 'Our signature blend — Yirgacheffe and Huila, roasted on Tuesdays, pulled at 9 bars. Apricot, dark honey, a long cocoa finish.',
    price: '€3.5',
    img: IMAGES.espresso,
    tag: 'Signature',
  },
  {
    name: 'Café Crème',
    desc: 'The Parisian classic. Double espresso under silk-steamed Normandy milk, served in porcelain warmed by hand.',
    price: '€5',
    img: IMAGES.cappuccino,
    tag: 'Classic',
  },
  {
    name: 'Latte Botanique',
    desc: 'Latte art poured to order, perfumed with a whisper of orange blossom from Grasse. Photograph first, then drink.',
    price: '€6',
    img: IMAGES.latteArt,
    tag: 'House favourite',
  },
  {
    name: 'Filtre Lent',
    desc: 'Slow-brewed single origin, changing with the seasons. Currently a washed Kenyan — blackcurrant, bright and clean.',
    price: '€5.5',
    img: IMAGES.pourOver,
    tag: 'Slow bar',
  },
];

export const PASTRIES = [
  {
    name: 'Croissant au Beurre',
    desc: '27 layers of Charentes-Poitou butter. Laminated at dawn, gone by ten.',
    price: '€2.8',
    img: IMAGES.croissantClose,
    size: 'tall',
  },
  {
    name: 'Macarons de la Maison',
    desc: 'Pistachio, rose, salted caramel, cassis — ground almond shells rested overnight.',
    price: '€2.4 each',
    img: IMAGES.macarons,
    size: 'wide',
  },
  {
    name: 'Tiramisu à la Française',
    desc: 'Our quiet scandal: mascarpone, espresso Lumière, a breath of Grand Marnier.',
    price: '€8',
    img: IMAGES.tiramisu,
    size: 'std',
  },
  {
    name: 'Tarte aux Fruits Rouges',
    desc: 'Crème pâtissière under raspberries and groseilles, glazed to a mirror.',
    price: '€7.5',
    img: IMAGES.berryTart,
    size: 'std',
  },
  {
    name: 'Gâteau Grand Cru',
    desc: '70% Valrhona, three textures of chocolate, one thin sheet of gold.',
    price: '€9',
    img: IMAGES.chocolateCake,
    size: 'tall',
  },
  {
    name: 'La Vitrine du Jour',
    desc: 'The morning case — what the chef felt like making before sunrise.',
    price: 'from €3',
    img: IMAGES.pastryCase,
    size: 'wide',
  },
];

export const SEASONAL = {
  season: 'Été 2026',
  title: 'The Summer Card',
  items: [
    {
      name: 'Pêche Melba Glacée',
      desc: 'Roasted white peach, vanilla glace, raspberry coulis — Escoffier, lightened for July.',
      price: '€9',
    },
    {
      name: 'Café Frappé à la Fleur',
      desc: 'Shaken espresso over ice with elderflower and a twist of lemon peel.',
      price: '€6.5',
    },
    {
      name: 'Tartine Abricot-Lavande',
      desc: 'Sourdough, whipped ricotta, Provence apricots, lavender honey.',
      price: '€8.5',
    },
    {
      name: 'Citron Givré',
      desc: 'A frozen Menton lemon filled with its own sorbet. Served with a tiny spoon and no apology.',
      price: '€7',
    },
  ],
};

export const STORY = {
  year: '1987',
  paragraphs: [
    'LUMIÈRE began as four tables and one espresso machine on Rue Cler, opened by Henri and Colette Moreau the summer the light over the Seine seemed to last forever.',
    'Henri pulled the shots. Colette laminated the croissants. The neighbourhood decided, quietly and permanently, that this was where mornings happened.',
    'Their daughter Élise runs the maison today — same marble counter, same dawn lamination, a slow bar Henri would have called unnecessary and then used every day.',
  ],
  pull: 'A café is not a place you visit. It is a place you return to.',
  pullAuthor: '— Colette Moreau, 1987',
};

export const CHEF = {
  name: 'Élise Moreau',
  role: 'Cheffe Pâtissière & Owner',
  quote: 'I don’t chase trends. I chase the exact moment butter, sugar and patience agree with each other.',
  picks: [
    {
      name: 'The 8 a.m. Ritual',
      desc: 'Croissant au beurre, café crème, a seat on the terrace facing the market.',
      img: IMAGES.frenchBreakfast,
      color: 'terracotta',
    },
    {
      name: 'The Golden Hour Pair',
      desc: 'Gâteau Grand Cru with a slow-bar Kenyan, taken at the marble counter around six.',
      img: IMAGES.chocolateCake,
      color: 'gold',
    },
    {
      name: 'The Sunday Box',
      desc: 'Eight macarons, chosen by whoever is behind the vitrine. Trust them.',
      img: IMAGES.macaronsStack,
      color: 'sage',
    },
  ],
};

export const GALLERY = [
  { img: IMAGES.parisRooftops, alt: 'Eiffel Tower over Paris rooftops', h: 'h-72 md:h-96' },
  { img: IMAGES.latteArt, alt: 'Latte art in porcelain', h: 'h-56 md:h-64' },
  { img: IMAGES.macaronsStack, alt: 'Macarons in pastel rows', h: 'h-64 md:h-80' },
  { img: IMAGES.cafeTerrace, alt: 'Café terrace chairs', h: 'h-60 md:h-72' },
  { img: IMAGES.croissantClose, alt: 'Croissant lamination close-up', h: 'h-72 md:h-80' },
  { img: IMAGES.parisStreet, alt: 'The Louvre at blue hour', h: 'h-56 md:h-72' },
  { img: IMAGES.dessertPlate, alt: 'Plated dessert', h: 'h-64 md:h-72' },
  { img: IMAGES.cafeInterior, alt: 'Inside the café', h: 'h-72 md:h-96' },
  { img: IMAGES.coffeeBeans, alt: 'Fresh roasted beans', h: 'h-56 md:h-64' },
];

export const TESTIMONIALS = [
  {
    text: 'The croissant cracked like it was supposed to be a sound effect. I moved my flight to come back the next morning.',
    name: 'Amara O.',
    place: 'London',
  },
  {
    text: 'Apple-store calm, grandmother’s-kitchen smell. The café crème is the best I’ve had in eleven years of living in Paris.',
    name: 'Jean-Baptiste R.',
    place: 'Paris 6ème',
  },
  {
    text: 'I came for the Eiffel Tower. I stayed three hours for the tiramisu and the light coming through the windows.',
    name: 'Sofia M.',
    place: 'Milan',
  },
  {
    text: 'The slow bar talked me through a Kenyan pour-over like a sommelier. Zero pretension, all care.',
    name: 'Daniel K.',
    place: 'New York',
  },
  {
    text: 'My daughter rated the macarons “better than her birthday”. There is no higher review in our family.',
    name: 'Priya S.',
    place: 'Mumbai',
  },
];

export const FAQ = [
  {
    q: 'Do you take reservations?',
    a: 'Yes — for tables of two or more, mornings and golden hour fill quickly. Walk-ins are always welcome at the marble counter.',
  },
  {
    q: 'When do the croissants come out?',
    a: 'The first bake lands at 7:30, a second at 9:00. Saturdays sell through both by 10:30 — we suggest coming early or reserving a Sunday Box.',
  },
  {
    q: 'Do you have vegetarian and gluten-free options?',
    a: 'Most of the card is vegetarian. We bake a small gluten-free line daily — almond financiers, flourless Grand Cru, and meringues — prepared in a separate corner of the kitchen.',
  },
  {
    q: 'Can I buy your coffee beans?',
    a: 'All three single origins are sold in 250g bags, roasted on Tuesdays. Ask at the counter and we’ll grind to your method.',
  },
  {
    q: 'Do you host private events?',
    a: 'The salon at the back seats eighteen. We host tastings, small celebrations and the occasional proposal — write to bonjour@lumiere.paris.',
  },
];

export const NEWSLETTER = {
  title: 'Lettres de Lumière',
  sub: 'One letter a month — new seasonal cards, roast notes from the slow bar, and first invitations to tastings. No noise, ever.',
  placeholder: 'your@email.com',
  button: 'Subscribe',
};

export const FOOTER = {
  address: ['38 Rue Cler', '75007 Paris, France'],
  hours: ['Tue – Sun · 7:30 — 19:00', 'Closed Mondays'],
  contact: ['bonjour@lumiere.paris', '+33 1 45 00 00 00'],
};

export const MARQUEE_WORDS = [
  'CROISSANT',
  'CAFÉ CRÈME',
  'MACARON',
  'BAGUETTE',
  'TIRAMISU',
  'BONJOUR',
  'ÉCLAIR',
  'GOLDEN HOUR',
];
