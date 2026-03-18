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
    title: 'Nation Leadership Forum',
    description:
      'A full-day forum featuring industry speakers, executive networking, and curated discussions on innovation and growth.',
    date: 'September 12, 2025',
    format: 'Executive forum',
    scale: '350 invited attendees',
    outcome: 'Connected senior decision-makers with curated partnership opportunities.',
    image: null,
  },
  {
    title: 'Creative Futures Summit',
    description:
      'A future-focused summit that united creators, founders, and brand teams around collaboration, trends, and strategic partnerships.',
    date: 'May 24, 2025',
    format: 'Trend and innovation summit',
    scale: '500+ audience reach',
    outcome: 'Expanded brand visibility through creator, founder, and media participation.',
    image: null,
  },
  {
    title: 'Community Impact Night',
    description:
      'An evening experience celebrating local initiatives, social impact stories, and cross-sector collaboration opportunities.',
    date: 'February 8, 2025',
    format: 'Community showcase',
    scale: '20+ local partners',
    outcome: 'Strengthened community relationships and sponsor engagement.',
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
