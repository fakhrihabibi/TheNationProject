const EventCard = ({ event }) => {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-nationamber/60 bg-white shadow-soft">
      <div className="flex h-56 items-end bg-[linear-gradient(135deg,#C0392B,#E74C3C,#F47421)] p-6">
        <span className="rounded-full border border-nationamber bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">
          Image Placeholder
        </span>
      </div>
      <div className="p-7">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-nationorange">{event.date}</p>
        <h3 className="mt-4 font-display text-2xl font-bold text-nationred">{event.title}</h3>
        <p className="mt-4 text-base leading-7 text-slate-600">{event.description}</p>
      </div>
    </article>
  )
}

export default EventCard
