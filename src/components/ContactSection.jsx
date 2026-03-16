import SectionIntro from './SectionIntro'

const ContactSection = ({ marketingContact }) => {
  return (
    <section id="contact" className="bg-nationwhite px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <SectionIntro
            eyebrow="Contact Person Marketing"
            title="Talk to our marketing team about partnerships, campaigns, and upcoming initiatives."
            description="For inquiries related to sponsorships, event marketing, or brand collaboration, use the details below or send a message directly."
          />
        </div>

        <div className="w-full">
          <div className="rounded-[2rem] border border-nationamber bg-nationred p-8 text-nationwhite shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-nationamber">
              Marketing Contact
            </p>
            <h3 className="mt-4 font-display text-3xl font-bold">{marketingContact.name}</h3>
            <div className="mt-6 space-y-4 text-base text-white/80">
              <p>Phone: {marketingContact.phone}</p>
              <p>Email: {marketingContact.email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
