import bnm2025Image from '../assets/BNM 2025.webp'
import knation2025Image from '../assets/K-NATION 2025.webp'

const AudienceIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
    <circle cx="9.5" cy="7" r="4" />
    <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const SparkIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z" />
    <path d="M5 3v4" />
    <path d="M3 5h4" />
    <path d="M19 17v4" />
    <path d="M17 19h4" />
  </svg>
)

const StrategyIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 20V10" />
    <path d="M18 20V4" />
    <path d="M6 20v-6" />
  </svg>
)

const MegaphoneIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M3 11v2a2 2 0 0 0 2 2h2l4 4V5L7 9H5a2 2 0 0 0-2 2Z" />
    <path d="M16 8.5a5 5 0 0 1 0 7" />
    <path d="M19 6a8.5 8.5 0 0 1 0 12" />
  </svg>
)

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-7 w-7"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="3.75" />
    <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
  </svg>
)

const TikTokIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-7 w-7"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 4v8.5a4 4 0 1 1-4-4" />
    <path d="M14 4c.9 2 2.5 3.6 5 4.2v2.7A8.6 8.6 0 0 1 14 9.1" />
  </svg>
)

const YoutubeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-7 w-7"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12c0 2.8-.3 4.4-.8 5.2-.6.9-1.5 1.2-3.1 1.4-1.4.2-3.1.2-5.1.2s-3.7 0-5.1-.2c-1.6-.2-2.5-.5-3.1-1.4C3.3 16.4 3 14.8 3 12s.3-4.4.8-5.2c.6-.9 1.5-1.2 3.1-1.4 1.4-.2 3.1-.2 5.1-.2s3.7 0 5.1.2c1.6.2 2.5.5 3.1 1.4.5.8.8 2.4.8 5.2Z" />
    <path d="m10 9 5 3-5 3Z" fill="currentColor" stroke="none" />
  </svg>
)

const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-7 w-7"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 4h3.2l10.8 16H15.8Z" />
    <path d="M19 4 5 20" />
  </svg>
)

const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-7 w-7"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M13.5 21v-7h3l.8-3h-3.8V8.9c0-1 .4-1.9 2-1.9H17V4.2c-.5-.1-1.4-.2-2.4-.2-2.5 0-4.1 1.5-4.1 4.4V11H8v3h2.5v7" />
  </svg>
)

export const stats = [
  { value: '40+', label: 'Events delivered' },
  { value: '25', label: 'Strategic partners' },
  { value: '120K', label: 'Audience reach' },
]

export const services = [
  {
    title: 'Event Strategy',
    description:
      'Concept development, audience mapping, and execution planning that align every event with clear business and brand goals.',
    icon: <StrategyIcon />,
  },
  {
    title: 'Brand Activation',
    description:
      'Immersive campaign experiences designed to increase visibility, spark engagement, and create memorable touchpoints.',
    icon: <SparkIcon />,
  },
  {
    title: 'Community Programs',
    description:
      'Programs and gatherings that help organizations grow loyalty, strengthen relationships, and build meaningful networks.',
    icon: <AudienceIcon />,
  },
  {
    title: 'Marketing Support',
    description:
      'Promotion planning, media coordination, and communication assets that keep campaigns consistent and high impact.',
    icon: <MegaphoneIcon />,
  },
]

export const events = [
  {
    title: 'Bogor Nation Matsuri 2025',
    description:
      'A full-day Japanese cultural festival celebrating the local fan community through idol performances, cosplay walk, cover singing, and cover dance competitions. Bringing together Bogor finest creative youth talents on one stage.',
    date: 'May 3-4, 2025',
    category: 'Cultural Festival',
    scale: '2000+ visitors',
    outcome: 'United Bogor Japanese culture enthusiast community, showcased local creative talents, and strengthened the youth creative ecosystem in the city.s.',
    image: bnm2025Image,
  },
  {
    title: 'K-NATION: HYBE SERIES 2025',
    description:
      'A future-focused summit that united creators, founders, and brand teams around collaboration, trends, and strategic partnerships. The program highlighted emerging audience behavior, content innovation, and creator-brand collaboration models.',
    date: 'October 19, 2025',
    category: 'Cultural Festival',
    scale: '300+ audience reach',
    outcome: 'Expanded brand visibility through creator, founder, and media participation.',
    image: knation2025Image,
  },
  {
    title: 'Community Impact Night',
    description:
      'An evening experience celebrating local initiatives, social impact stories, and cross-sector collaboration opportunities. The event combined storytelling, appreciation moments, and sponsor networking to deepen regional partnerships.',
    date: 'February 8, 2025',
    category: 'Community Showcase',
    scale: '20+ local partners',
    outcome: 'Strengthened community relationships and sponsor engagement.',
    image: null,
  },
  {
    title: 'Brand Launch Experience',
    description:
      'A high-energy launch event designed to introduce a new product line through immersive staging, interactive touchpoints, and coordinated media coverage. Guest flow, reveal timing, and brand storytelling were built to maximize memorability and shareability.',
    date: 'November 3, 2025',
    category: 'Product Launch',
    scale: '700 guests across one evening',
    outcome: 'Generated strong launch momentum with immediate press pickup and high attendee engagement.',
    image: null,
  },
  {
    title: 'Private Investor Roundtable',
    description:
      'An intimate roundtable session for selected investors and founders featuring moderated discussion, portfolio updates, and structured relationship-building. The setting was tailored to encourage focused dialogue and high-value introductions.',
    date: 'August 19, 2025',
    category: 'Private Session',
    scale: '45 curated participants',
    outcome: 'Created direct follow-up opportunities between investors, founders, and strategic advisors.',
    image: null,
  },
  {
    title: 'Youth Creator Camp',
    description:
      'A multi-session creator development program for young talents covering content planning, storytelling, performance coaching, and collaboration frameworks. Sessions were structured to build both skills and community momentum.',
    date: 'July 6, 2025',
    category: 'Workshop Series',
    scale: '120 program participants',
    outcome: 'Improved creator readiness while building a stronger pipeline for community-led campaigns.',
    image: null,
  },
  {
    title: 'Corporate Appreciation Gala',
    description:
      'A formal appreciation evening recognizing partners, clients, and internal teams through curated dining, awards, and brand-led stage programming. The experience balanced hospitality, prestige, and strategic relationship nurturing.',
    date: 'December 14, 2025',
    category: 'Corporate Gala',
    scale: '280 VIP attendees',
    outcome: 'Reinforced partner loyalty and elevated the company�s executive-facing brand presence.',
    image: null,
  },
  {
    title: 'Regional Business Connect',
    description:
      'A regional networking and showcase platform that brought together entrepreneurs, local institutions, and support ecosystems. The event included showcase booths, matching sessions, and short-form talks from business leaders.',
    date: 'April 17, 2025',
    category: 'Business Networking',
    scale: '60 exhibitors and partners',
    outcome: 'Accelerated local business introductions and opened new cross-sector collaboration channels.',
    image: null,
  },
]

export const clients = [
  { name: 'Client Name 01', logo: null },
  { name: 'Client Name 02', logo: null },
  { name: 'Client Name 03', logo: null },
  { name: 'Client Name 04', logo: null },
  { name: 'Client Name 05', logo: null },
  { name: 'Client Name 06', logo: null },
  { name: 'Client Name 07', logo: null },
  { name: 'Client Name 08', logo: null },
  { name: 'Client Name 09', logo: null },
  { name: 'Client Name 10', logo: null },
]

export const socialLinks = [
  {
    platform: 'Instagram',
    handle: '@thenation.event',
    href: 'https://www.instagram.com/thenation.event/',
    icon: <InstagramIcon />,
  },
  {
    platform: 'TikTok',
    handle: '@thenation_event',
    href: 'https://www.tiktok.com/@thenation_event',
    icon: <TikTokIcon />,
  },
  {
    platform: 'YouTube',
    handle: '@thenation_event',
    href: 'https://www.youtube.com/@thenation_event',
    icon: <YoutubeIcon />,
  },
  {
    platform: 'X (Twitter)',
    handle: '@thenation_event',
    href: 'https://x.com/thenation_event',
    icon: <XIcon />,
  },
  {
    platform: 'Facebook',
    handle: 'The Nation',
    href: 'https://www.facebook.com/thenation.id',
    icon: <FacebookIcon />,
  },
]

export const marketingContact = {
  name: 'Fathan',
  phone: '+62 812-3456-7890',
  email: 'thenationid@gmail.com',
  responseTime: 'Usually replies within 1 business day',
  whatsapp: 'https://wa.me/6281234567890',
}
