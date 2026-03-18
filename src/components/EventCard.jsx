const EventCard = ({ event }) => {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-nationamber/60 bg-white shadow-soft">
      <div className="relative flex h-56 items-end bg-[linear-gradient(135deg,#C0392B,#E74C3C,#F47421)] p-6">
        {event.image ? (
          <img src={event.image} alt={event.title} className="absolute inset-0 h-full w-full object-cover" />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
        <span className="relative rounded-full border border-nationamber bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-sm">
          {event.format}
        </span>
      </div>
      <div className="p-7">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-nationorange">{event.date}</p>
        <h3 className="mt-4 font-display text-2xl font-bold text-nationred">{event.title}</h3>
        <p className="mt-4 text-base leading-7 text-slate-600">{event.description}</p>
        <div className="mt-6 grid gap-3 rounded-[1.5rem] bg-[#fff7f2] p-4 text-sm text-slate-700">
          <div>
            <span className="font-semibold text-nationred">Scale:</span> {event.scale}
          </div>
          <div>
            <span className="font-semibold text-nationred">Outcome:</span> {event.outcome}
          </div>
        </div>
      </div>
    </article>
  )
}

export default EventCard
