import SectionIntro from './SectionIntro'

const clientPlaceholders = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  label: 'Client Logo',
}))

const PreviousClientsSection = () => {
  return (
    <section id="previous-clients" className="bg-[#FFF8F5] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Previous Clients"
          title="Brands & organizations we've proudly worked with."
          description="A growing list of partners who trusted The Nation to deliver."
          align="center"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {clientPlaceholders.map((client) => (
            <div
              key={client.id}
              className="flex min-h-40 items-center justify-center rounded-[2rem] border border-nationamber/60 bg-white p-7 text-center shadow-soft"
            >
              <span className="text-base font-semibold text-slate-500">{client.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PreviousClientsSection
