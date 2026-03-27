import PropTypes from 'prop-types'

const EventCard = ({ event, index, onOpen }) => {
  const previewGradients = [
    'from-[#8C1C13] via-[#C0392B] to-[#F47421]',
    'from-[#A61B1B] via-[#D9482A] to-[#F5A623]',
    'from-[#7F1D1D] via-[#B91C1C] to-[#EA580C]',
    'from-[#9A3412] via-[#C2410C] to-[#FB923C]',
  ]

  const previewGradient = previewGradients[index % previewGradients.length]

  return (
    <article className="flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-nationamber/60 bg-white shadow-soft">
      <div className={`relative flex h-56 items-end overflow-hidden bg-gradient-to-br ${previewGradient} p-6`}>
        {event.image ? (
          <img 
            src={event.image} 
            alt={event.title} 
            className="absolute inset-0 h-full w-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white/40">
              <svg className="mx-auto h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
        <div className="absolute left-5 top-5">
          <span className="rounded-full border border-white/30 bg-white/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-sm">
            {event.category}
          </span>
        </div>
        <div className="relative z-10 max-w-[12rem] text-sm font-medium text-white/90">
          Portfolio Event
        </div>
      </div>

      <div className="flex h-full flex-1 flex-col justify-between p-7">
        <div className="flex flex-1 flex-col">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-nationorange">{event.date}</p>
          <h3 className="mt-4 font-display text-2xl font-bold text-nationred">{event.title}</h3>
          <p className="mt-4 overflow-hidden text-base leading-7 text-slate-600 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
            {event.description}
          </p>

          <div className="mt-6 grid gap-3 rounded-[1.5rem] bg-[#fff7f2] p-4 text-sm text-slate-700">
            <div>
              <span className="font-semibold text-nationred">Scale:</span> {event.scale}
            </div>
            <div>
              <span className="font-semibold text-nationred">Outcome:</span> {event.outcome}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onOpen}
          className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-nationred via-nationcrimson to-nationorange px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-[1.01] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-nationorange/50 focus:ring-offset-2"
        >
          Read More
        </button>
      </div>
    </article>
  )
}

EventCard.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    scale: PropTypes.string.isRequired,
    outcome: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onOpen: PropTypes.func.isRequired,
}

export default EventCard
