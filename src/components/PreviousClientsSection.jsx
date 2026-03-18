import SectionIntro from './SectionIntro'

const PreviousClientsSection = ({ clients }) => {
  return (
    <section id="previous-clients" className="bg-[#FFF8F5] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Previous Clients"
          title="Brands & organizations we've proudly worked with."
          description="A growing list of partners who trusted The Nation to deliver."
          align="center"
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-14 lg:grid-cols-4 xl:grid-cols-5">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex min-h-32 items-center justify-center rounded-[2rem] border border-nationamber/60 bg-white p-5 text-center shadow-soft sm:min-h-40 sm:p-7"
            >
              {client.logo ? (
                <img src={client.logo} alt={`${client.name} logo`} className="max-h-16 w-auto object-contain" />
              ) : (
                <div>
                  <p className="text-sm font-semibold text-slate-600 sm:text-base">{client.name}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400 sm:text-sm sm:tracking-normal">Logo placeholder</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PreviousClientsSection