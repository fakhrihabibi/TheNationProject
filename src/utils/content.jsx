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
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M14 4c1 2 2.5 3.6 5 4v3a8 8 0 0 1-5-1.7V15a5 5 0 1 1-5-5" />
  </svg>
)

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M22 12s0-3-1-4.5c-1.1-1.6-2.6-1.6-3.2-1.7C15.2 5.5 12 5.5 12 5.5h0s-3.2 0-5.8.3c-.6.1-2.1.1-3.2 1.7C2 9 2 12 2 12s0 3 1 4.5c1.1 1.6 2.6 1.6 3.2 1.7 2.6.3 5.8.3 5.8.3s3.2 0 5.8-.3c.6-.1 2.1-.1 3.2-1.7 1-1.5 1-4.5 1-4.5Z" />
    <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
  </svg>
)

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4 4l16 16" />
    <path d="M20 4 4 20" />
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9a1 1 0 0 1 1-1Z" />
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
  },
  {
    title: 'Creative Futures Summit',
    description:
      'A future-focused summit that united creators, founders, and brand teams around collaboration, trends, and strategic partnerships.',
    date: 'May 24, 2025',
    format: 'Trend and innovation summit',
    scale: '500+ audience reach',
    outcome: 'Expanded brand visibility through creator, founder, and media participation.',
  },
  {
    title: 'Community Impact Night',
    description:
      'An evening experience celebrating local initiatives, social impact stories, and cross-sector collaboration opportunities.',
    date: 'February 8, 2025',
    format: 'Community showcase',
    scale: '20+ local partners',
    outcome: 'Strengthened community relationships and sponsor engagement.',
  },
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
