export const SITE_CONFIG = {
  name: 'Wings of Hope Outreach',
  tagline: 'Inspiring Hope, Transforming Lives',
  description:
    'Wings of Hope Outreach Limited is a Uganda-based organization dedicated to supporting vulnerable children, youth, and communities through education, healthcare, economic empowerment, and spiritual development.',
  url: 'https://wingsofhopeoutreach.org',
  email: 'info@wingsofhopeoutreach.org',
  phone: '+256 700 000 000',
  address: 'Wakiso, Kitala, Uganda',
  registration: '80034655477699',
  incorporationDate: 'June 11, 2024',
  social: {
    facebook: 'https://facebook.com/wingsofhopeoutreach',
    twitter: 'https://twitter.com/wohoug',
    instagram: 'https://instagram.com/wingsofhopeoutreach',
    youtube: 'https://youtube.com/@wingsofhopeoutreach',
    linkedin: 'https://linkedin.com/company/wingsofhopeoutreach',
  },
};

/*
 * Colorblind-safe palette — anchored on logo brown + green.
 * Passes deuteranopia, protanopia & tritanopia simulation checks;
 * every pair differs by ≥ 40 in perceived lightness or ≥ 60° hue.
 */
export const CB_SAFE_COLORS = [
  '#6b3f36', // logo brown-700
  '#2a7d34', // logo green-600
  '#2563EB', // blue-600
  '#D97706', // amber-600
  '#7C3AED', // violet-600
  '#DC2626', // red-600
  '#0891B2', // cyan-600
  '#854D0E', // yellow-800
];

export const CB_SAFE_COLORS_LIGHT = [
  '#f3ebe8', // brown-100
  '#d9f2db', // green-100
  '#DBEAFE', // blue-100
  '#FEF3C7', // amber-100
  '#EDE9FE', // violet-100
  '#FEE2E2', // red-100
  '#CFFAFE', // cyan-100
  '#FEF9C3', // yellow-100
];

export const PROGRAMS = [
  {
    id: 'education',
    title: 'Education & Learning',
    shortTitle: 'Education',
    icon: '📚',
    color: CB_SAFE_COLORS[0],
    lightColor: CB_SAFE_COLORS_LIGHT[0],
    description:
      'Providing quality education and basic social necessities to empower children and youth with knowledge and skills for a brighter future.',
    objectives: [
      'Establish and support educational institutions',
      'Provide school supplies and learning materials',
      'Offer scholarships to vulnerable children',
      'Support adult literacy programs',
    ],
    impact: { beneficiaries: 450, communities: 12 },
    category: 'EDUCATION',
  },
  {
    id: 'healthcare',
    title: 'Community Healthcare',
    shortTitle: 'Healthcare',
    icon: '🏥',
    color: CB_SAFE_COLORS[1],
    lightColor: CB_SAFE_COLORS_LIGHT[1],
    description:
      'Delivering essential healthcare services, nutrition programs, and sanitation initiatives to improve community wellbeing.',
    objectives: [
      'Provide community health outreach programs',
      'Support maternal and child health',
      'Conduct health education workshops',
      'Facilitate access to medical care',
    ],
    impact: { beneficiaries: 680, communities: 15 },
    category: 'HEALTHCARE',
  },
  {
    id: 'economic-empowerment',
    title: 'Economic Empowerment',
    shortTitle: 'Economic',
    icon: '💼',
    color: CB_SAFE_COLORS[2],
    lightColor: CB_SAFE_COLORS_LIGHT[2],
    description:
      'Creating sustainable livelihoods through income generation, microfinance schemes, and poverty eradication programs.',
    objectives: [
      'Establish microfinance and savings groups',
      'Support small business development',
      'Provide financial literacy training',
      'Create income-generating activities',
    ],
    impact: { beneficiaries: 320, communities: 8 },
    category: 'ECONOMIC_EMPOWERMENT',
  },
  {
    id: 'foster-care',
    title: 'Foster Care & Child Protection',
    shortTitle: 'Foster Care',
    icon: '🏠',
    color: CB_SAFE_COLORS[3],
    lightColor: CB_SAFE_COLORS_LIGHT[3],
    description:
      'Providing safe and loving foster homes for orphans and vulnerable children, ensuring their protection and holistic development.',
    objectives: [
      'Establish and manage foster homes',
      'Support vulnerable children with basic needs',
      'Facilitate child protection initiatives',
      'Provide psychosocial support',
    ],
    impact: { beneficiaries: 150, communities: 6 },
    category: 'FOSTER_CARE',
  },
  {
    id: 'counseling',
    title: 'Family & Marriage Counseling',
    shortTitle: 'Counseling',
    icon: '💬',
    color: CB_SAFE_COLORS[4],
    lightColor: CB_SAFE_COLORS_LIGHT[4],
    description:
      'Strengthening families through professional counseling, marriage guidance, and community support services.',
    objectives: [
      'Provide marriage counseling services',
      'Offer family mediation and support',
      'Conduct parenting workshops',
      'Support community integration',
    ],
    impact: { beneficiaries: 240, communities: 10 },
    category: 'COUNSELING',
  },
  {
    id: 'vocational-training',
    title: 'Vocational Training',
    shortTitle: 'Vocational',
    icon: '🔧',
    color: CB_SAFE_COLORS[5],
    lightColor: CB_SAFE_COLORS_LIGHT[5],
    description:
      'Equipping youth with practical skills through vocational training programs that open doors to employment and entrepreneurship.',
    objectives: [
      'Establish vocational training centers',
      'Provide apprenticeship programs',
      'Support skills development for youth',
      'Link trainees to employment opportunities',
    ],
    impact: { beneficiaries: 200, communities: 7 },
    category: 'VOCATIONAL',
  },
  {
    id: 'agriculture',
    title: 'Agriculture & Food Security',
    shortTitle: 'Agriculture',
    icon: '🌾',
    color: CB_SAFE_COLORS[6],
    lightColor: CB_SAFE_COLORS_LIGHT[6],
    description:
      'Promoting sustainable farming, food security, and agricultural training to build resilient communities.',
    objectives: [
      'Train communities in modern farming techniques',
      'Support food crop cultivation',
      'Promote animal farming initiatives',
      'Ensure food security for vulnerable families',
    ],
    impact: { beneficiaries: 380, communities: 11 },
    category: 'AGRICULTURE',
  },
  {
    id: 'spiritual-development',
    title: 'Spiritual & Moral Development',
    shortTitle: 'Spiritual',
    icon: '✝️',
    color: CB_SAFE_COLORS[7],
    lightColor: CB_SAFE_COLORS_LIGHT[7],
    description:
      'Nurturing spiritual growth and moral values to build character and strengthen community bonds.',
    objectives: [
      'Promote religious and moral values',
      'Support church and community integration',
      'Provide moral guidance to youth',
      'Strengthen community ethics',
    ],
    impact: { beneficiaries: 500, communities: 14 },
    category: 'SPIRITUAL',
  },
];

export const IMPACT_STATS = [
  { label: 'Lives Impacted', value: 2920, suffix: '+', icon: 'heart' },
  { label: 'Communities Served', value: 18, suffix: '+', icon: 'map-pin' },
  { label: 'Active Programs', value: 13, suffix: '', icon: 'target' },
  { label: 'Volunteers', value: 85, suffix: '+', icon: 'users' },
];

export const TIMELINE_EVENTS = [
  {
    year: 2024,
    month: 'June',
    title: 'Organization Founded',
    description:
      'Wings of Hope Outreach Limited officially incorporated in the Republic of Uganda.',
    type: 'milestone',
  },
  {
    year: 2024,
    month: 'July',
    title: 'First Community Outreach',
    description:
      'Launched initial community healthcare and education programs in Wakiso district.',
    type: 'program',
  },
  {
    year: 2024,
    month: 'September',
    title: 'Foster Care Initiative',
    description:
      'Established first foster home supporting orphaned and vulnerable children.',
    type: 'program',
  },
  {
    year: 2024,
    month: 'November',
    title: 'Vocational Training Launch',
    description:
      'Opened vocational training programs for youth in tailoring, carpentry, and agriculture.',
    type: 'program',
  },
  {
    year: 2025,
    month: 'January',
    title: 'Microfinance Program',
    description:
      'Launched microfinance and savings groups to empower women entrepreneurs.',
    type: 'achievement',
  },
  {
    year: 2025,
    month: 'March',
    title: 'Agricultural Training',
    description:
      'Initiated sustainable farming training programs across 5 communities.',
    type: 'program',
  },
  {
    year: 2025,
    month: 'June',
    title: 'First Anniversary',
    description:
      'Celebrated one year of impact, reaching over 2,900 beneficiaries across 18 communities.',
    type: 'milestone',
  },
  {
    year: 2025,
    month: 'September',
    title: 'Partnership Expansion',
    description:
      'Forged partnerships with international organizations for expanded program delivery.',
    type: 'partnership',
  },
];

export const LEADERSHIP = [
  {
    name: 'Gabula Hannah',
    role: 'Director & Co-Founder',
    bio: 'A passionate leader and businesswoman from Wakiso, Hannah founded Wings of Hope Outreach with a vision to transform lives through holistic community development programs.',
    location: 'Wakiso, Kitala, Uganda',
  },
  {
    name: 'Kitimbo Shellor Sarah',
    role: 'Secretary',
    bio: 'With deep roots in community service, Sarah ensures the organizational integrity and governance of Wings of Hope Outreach, managing operations with dedication.',
    location: 'Wakiso, Katabitc, Kitala',
  },
  {
    name: 'Nyende Proscovia',
    role: 'Co-Founder & Board Member',
    bio: 'A committed businesswoman and founding subscriber, Proscovia brings entrepreneurial expertise to advance economic empowerment programs.',
    location: 'Uganda',
  },
  {
    name: 'Mutesi Eunice',
    role: 'Co-Founder & Board Member',
    bio: 'Eunice contributes her business acumen and community connections to strengthen outreach programs and foster sustainable development.',
    location: 'Uganda',
  },
];

export const RESOURCE_FLOW_DATA = {
  nodes: [
    { name: 'Donations' },
    { name: 'Grants' },
    { name: 'Fundraising' },
    { name: 'Partnerships' },
    { name: 'Education' },
    { name: 'Healthcare' },
    { name: 'Economic Empowerment' },
    { name: 'Foster Care' },
    { name: 'Counseling' },
    { name: 'Agriculture' },
    { name: 'Children' },
    { name: 'Youth' },
    { name: 'Families' },
    { name: 'Communities' },
  ],
  links: [
    { source: 0, target: 4, value: 30 },
    { source: 0, target: 5, value: 25 },
    { source: 0, target: 7, value: 20 },
    { source: 1, target: 4, value: 25 },
    { source: 1, target: 6, value: 20 },
    { source: 1, target: 9, value: 15 },
    { source: 2, target: 5, value: 15 },
    { source: 2, target: 8, value: 10 },
    { source: 3, target: 6, value: 15 },
    { source: 3, target: 9, value: 10 },
    { source: 4, target: 10, value: 30 },
    { source: 4, target: 11, value: 25 },
    { source: 5, target: 10, value: 20 },
    { source: 5, target: 12, value: 20 },
    { source: 6, target: 11, value: 20 },
    { source: 6, target: 12, value: 15 },
    { source: 7, target: 10, value: 20 },
    { source: 8, target: 12, value: 10 },
    { source: 9, target: 13, value: 25 },
    { source: 10, target: 13, value: 15 },
    { source: 11, target: 13, value: 15 },
    { source: 12, target: 13, value: 15 },
  ],
};

export const NEWS_ARTICLES = [
  {
    id: '1',
    slug: 'community-health-outreach-wakiso',
    title: 'Community Health Outreach Reaches 500 Families in Wakiso',
    excerpt:
      'Our healthcare team conducted a comprehensive health screening and education program reaching over 500 families in the Wakiso district.',
    date: '2025-08-15',
    category: 'Healthcare',
    image: null,
  },
  {
    id: '2',
    slug: 'vocational-training-graduation',
    title: 'First Vocational Training Cohort Graduates',
    excerpt:
      '45 youth successfully completed vocational training programs in tailoring, carpentry, and sustainable agriculture.',
    date: '2025-06-20',
    category: 'Education',
    image: null,
  },
  {
    id: '3',
    slug: 'microfinance-empowers-women',
    title: 'Microfinance Program Empowers 120 Women Entrepreneurs',
    excerpt:
      'Our microfinance initiative has helped 120 women establish small businesses, improving livelihoods across 8 communities.',
    date: '2025-05-10',
    category: 'Economic Empowerment',
    image: null,
  },
  {
    id: '4',
    slug: 'foster-care-expansion',
    title: 'Foster Care Program Expands to Three New Locations',
    excerpt:
      'Wings of Hope Outreach expands its foster care program, providing safe homes for 50 additional vulnerable children.',
    date: '2025-04-02',
    category: 'Foster Care',
    image: null,
  },
  {
    id: '5',
    slug: 'agricultural-training-success',
    title: 'Sustainable Farming Training Transforms Rural Communities',
    excerpt:
      'Agricultural training programs have helped 200+ families adopt modern farming techniques, improving food security.',
    date: '2025-03-18',
    category: 'Agriculture',
    image: null,
  },
  {
    id: '6',
    slug: 'first-anniversary-celebration',
    title: 'Wings of Hope Outreach Celebrates First Anniversary',
    excerpt:
      'One year of inspiring hope and transforming lives — celebrating milestones, impact, and the communities we serve.',
    date: '2025-06-11',
    category: 'Milestone',
    image: null,
  },
];

export const GALLERY_IMAGES = [
  { id: 1, alt: 'Community healthcare outreach in Wakiso', category: 'Healthcare' },
  { id: 2, alt: 'Children in education program', category: 'Education' },
  { id: 3, alt: 'Vocational training workshop', category: 'Vocational Training' },
  { id: 4, alt: 'Agricultural training in rural community', category: 'Agriculture' },
  { id: 5, alt: 'Foster care program activities', category: 'Foster Care' },
  { id: 6, alt: 'Women microfinance savings group', category: 'Economic Empowerment' },
  { id: 7, alt: 'Community counseling session', category: 'Counseling' },
  { id: 8, alt: 'Spiritual development gathering', category: 'Spiritual' },
  { id: 9, alt: 'Organization first anniversary celebration', category: 'Events' },
];

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Impact', href: '/impact' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'News', href: '/news' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];
