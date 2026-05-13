import { FC } from 'react'
import {
  HeroSection,
  WhatIsSection,
  ServicesSection,
  EventSection,
  SocialSection,
  PreviousClientsSection,
  ContactSection,
} from '../components/sections'
import { Navbar, Footer } from '../components/layout'
import {
  clients,
  events,
  marketingContact,
  services,
  socialLinks,
  stats,
} from '../utils/content'

const HomePage: FC = () => {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main>
        <HeroSection stats={stats} />
        <WhatIsSection />
        <ServicesSection services={services} />
        <EventSection events={events} />
        <SocialSection socialLinks={socialLinks} />
        <PreviousClientsSection clients={clients} />
        <ContactSection marketingContact={marketingContact} />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
