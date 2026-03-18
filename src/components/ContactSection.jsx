import SectionIntro from './SectionIntro'

const ContactSection = ({ marketingContact }) => {
  const emailHref = `mailto:${marketingContact.email}`
  const gmailComposeHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(marketingContact.email)}`
  const phoneHref = `tel:${marketingContact.phone.replace(/[^\d+]/g, '')}`

  return (
    <section id="contact" className="bg-nationwhite px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 sm:gap-12 md:px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <SectionIntro
            eyebrow="Contact Person Marketing"
            title="Talk to our marketing team about partnerships, campaigns, and upcoming initiatives."
            description="For sponsorships, event marketing, or brand collaboration, contact us directly and we will route your inquiry to the right discussion quickly."
          />
          <div className="mt-8 rounded-[1.75rem] border border-nationamber/60 bg-[#fff7f2] p-5 text-sm leading-7 text-slate-700 sm:p-6">
            <p className="font-semibold uppercase tracking-[0.28em] text-nationorange">Best for</p>
            <p className="mt-3">
              Brand collaborations, campaign partnerships, event proposals, and community activation opportunities.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="rounded-[2rem] border border-nationamber bg-nationred p-6 text-nationwhite shadow-soft sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-nationamber">
              Marketing Contact
            </p>
            <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">{marketingContact.name}</h3>
            <p className="mt-3 text-sm text-white/75">{marketingContact.responseTime}</p>
            <div className="mt-6 space-y-4 text-base text-white/85">
              <p>
                Phone:{' '}
                <a className="font-semibold underline decoration-nationamber underline-offset-4" href={phoneHref}>
                  {marketingContact.phone}
                </a>
              </p>
              <p>
                Email:{' '}
                <a className="font-semibold underline decoration-nationamber underline-offset-4" href={emailHref}>
                  {marketingContact.email}
                </a>
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={marketingContact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full border border-nationamber bg-white px-5 py-3 text-center text-sm font-semibold text-nationred transition hover:bg-[#fff7f2] sm:w-auto"
              >
                Chat on WhatsApp
              </a>
              <a
                href={gmailComposeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full border border-white/30 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection