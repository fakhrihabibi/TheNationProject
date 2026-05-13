// Data types from content.ts
export interface Stat {
  label: string
  value: string
  description: string
}

export interface Service {
  icon: React.ReactNode
  title: string
  description: string
}

export interface Event {
  id: string
  title: string
  description: string
  date: string
  category: string
  scale: string
  outcome: string
  image: string
}

export interface Client {
  id: string
  slide: number
  image: string
}

export interface SocialLink {
  platform: string
  handle: string
  href: string
  icon: React.ReactNode
}

export interface MarketingContact {
  name: string
  phone: string
  email: string
  whatsappUrl: string
  responseTime: string
}
