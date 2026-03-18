import { marketingContact } from '../utils/content'

const HeroSection = ({ stats }) => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-mesh px-4 pb-16 pt-14 text-nationred sm:px-6 sm:pb-20 sm:pt-16 md:pb-24 md:pt-20 lg:px-8"
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.5),transparent_28%,transparent_70%,rgba(245,166,35,0.08))]" />
      <div className="relative mx-auto grid max-w-7xl gap-8 sm:gap-10 md:gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-nationamber bg-nationorange px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-nationwhite sm:px-4 sm:text-xs sm:tracking-[0.35em]">
            Strategic Events and Brand Activations
          </span>
          <h1 className="mt-5 font-display text-[2.15rem] font-bold leading-[1.05] sm:mt-6 sm:text-4xl sm:leading-tight md:mt-8 md:text-5xl lg:text-6xl">
            The Nation helps brands turn events into visibility, relationships, and measurable momentum.
          </h1>
          <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-nationred/80 sm:mt-5 sm:text-lg sm:leading-8 md:mt-6">
            We partner with companies, institutions, and communities to shape launches, forums, activations, and audience experiences that feel premium and deliver a clear business outcome.
          </p>
          <div className="mt-6 rounded-[1.75rem] border border-nationamber/60 bg-white/80 p-4 shadow-soft backdrop-blur-sm sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-nationorange sm:text-sm sm:tracking-[0.28em]">
              Built for teams that need more than a nice-looking event
            </p>
            <p className="mt-3 text-sm leading-7 text-nationred/75 sm:text-base">
              From concept and audience planning to partner coordination and on-site execution, we keep strategy and delivery aligned from start to finish.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href={marketingContact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-full border border-nationamber bg-nationcrimson px-5 py-3 text-center text-sm font-semibold text-nationwhite transition hover:bg-nationorangedeep sm:w-auto sm:px-6"
            >
              Contact Us
            </a>
            <a
              href="#portfolio"
              className="w-full rounded-full border border-nationamber px-5 py-3 text-center text-sm font-semibold text-nationred transition hover:bg-nationorange hover:text-nationwhite sm:w-auto sm:px-6"
            >
              View Selected Work
            </a>
          </div>
        </div>

        <div className="grid w-full gap-5">
          <div className="w-full rounded-[2rem] border border-nationamber bg-nationwhite/90 p-4 shadow-soft backdrop-blur-md sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-nationorange">Why The Nation</p>
                <p className="mt-2 max-w-md text-sm leading-6 text-nationred/75">
                  A practical partner for brand teams that need strong creative direction and reliable execution under one roof.
                </p>
              </div>
              <span className="w-fit rounded-full border border-nationamber/70 bg-[#fff7f2] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-nationred sm:tracking-[0.25em]">
                End-to-end support
              </span>
            </div>
            <div className="mt-6 grid gap-4 min-[480px]:grid-cols-2 sm:mt-8 sm:gap-5 lg:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-nationamber/50 bg-white p-4 text-center sm:p-5"
                >
                  <p className="font-display text-3xl font-bold text-nationred sm:text-4xl">{stat.value}</p>
                  <p className="mt-2 text-sm text-nationred/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-nationamber bg-nationwhite/90 p-4 shadow-soft backdrop-blur-md sm:p-6">
            <div className="flex flex-col gap-4 sm:gap-5 md:flex-row">
              <div className="flex-1 rounded-3xl border border-nationamber/50 bg-white p-5">
                <p className="text-sm uppercase tracking-[0.32em] text-nationorange">Capabilities</p>
                <ul className="mt-5 space-y-3 text-sm text-nationred/80">
                  <li>Integrated event production</li>
                  <li>Brand activation strategy</li>
                  <li>Audience growth and partnerships</li>
                </ul>
              </div>
              <div className="flex-1 rounded-3xl border border-nationamber/50 bg-white p-5">
                <p className="text-sm uppercase tracking-[0.32em] text-nationorange">Approach</p>
                <p className="mt-5 text-sm leading-7 text-nationred/80">
                  Data-informed planning, premium execution, and creative direction designed to produce a result stakeholders can clearly see and measure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
