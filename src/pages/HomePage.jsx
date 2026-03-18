import ContactSection from '../components/ContactSection'
import EventSection from '../components/EventSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import PreviousClientsSection from '../components/PreviousClientsSection'
import ServicesSection from '../components/ServicesSection'
import SocialSection from '../components/SocialSection'
import WhatIsSection from '../components/WhatIsSection'
import { clients, events, marketingContact, services, socialLinks, stats } from '../utils/content'

const HomePage = () => {
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
