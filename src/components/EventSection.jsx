import { useEffect, useState } from 'react'
import EventCard from './EventCard'
import SectionIntro from './SectionIntro'

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M6 6 18 18" />
    <path d="M18 6 6 18" />
  </svg>
)

const EventSection = ({ events }) => {
  const displayedEvents = events.slice(0, 8)
  const [activeEventIndex, setActiveEventIndex] = useState(null)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const activeEvent = activeEventIndex !== null ? displayedEvents[activeEventIndex] : null

  const openModal = (index) => {
    setActiveEventIndex(index)
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setIsModalVisible(true)
      })
    })
  }

  const closeModal = () => {
    setIsModalVisible(false)
  }

  useEffect(() => {
    if (activeEventIndex === null) {
      return undefined
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [activeEventIndex])

  useEffect(() => {
    if (activeEventIndex === null) {
      return undefined
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [activeEventIndex])

  useEffect(() => {
    if (isModalVisible || activeEventIndex === null) {
      return undefined
    }

    const timeoutId = window.setTimeout(() => {
      setActiveEventIndex(null)
    }, 220)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [activeEventIndex, isModalVisible])

  return (
    <section id="portfolio" className="bg-[#fff7f2] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Portfolio Event"
          title="Selected events that reflect The Nation's range and execution standards."
          description="Our portfolio spans launches, conferences, community programs, and curated private sessions designed to strengthen visibility and engagement."
        />

        <div className="mt-10 grid auto-rows-fr gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-4">
          {displayedEvents.map((event, index) => (
            <EventCard key={event.title} event={event} index={index} onOpen={() => openModal(index)} />
          ))}
        </div>
      </div>

      {activeEvent ? (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-[#2B1108]/55 px-4 py-6 transition-opacity duration-200 sm:px-6 ${
            isModalVisible ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeModal()
            }
          }}
        >
          <div
            className={`relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-[2rem] border border-nationamber/50 bg-[#fffaf6] shadow-[0_30px_80px_rgba(43,17,8,0.24)] transition-all duration-200 ${
              isModalVisible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-[0.98] opacity-0'
            }`}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white transition hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-white/70"
              aria-label="Close event details"
            >
              <CloseIcon />
            </button>

            <div className="max-h-[90vh] overflow-y-auto">
              <div className="relative h-56 bg-gradient-to-br from-[#8C1C13] via-[#C0392B] to-[#F47421] p-6 sm:h-64 sm:p-8">
                {activeEvent.image ? (
                  <img
                    src={activeEvent.image}
                    alt={activeEvent.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end">
                  <span className="mb-4 inline-flex w-fit rounded-full border border-white/30 bg-white/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-sm">
                    {activeEvent.category}
                  </span>
                  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white/80">{activeEvent.date}</p>
                  <h3 className="mt-3 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
                    {activeEvent.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-6 p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold uppercase tracking-[0.2em] text-nationorange">
                  <span>{activeEvent.date}</span>
                  <span>|</span>
                  <span>{activeEvent.category}</span>
                </div>

                <p className="text-base leading-8 text-slate-700 sm:text-lg">{activeEvent.description}</p>

                <div className="grid gap-4 rounded-[1.75rem] bg-white p-5 shadow-soft sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-nationorange">Scale</p>
                    <p className="mt-2 text-base leading-7 text-slate-700">{activeEvent.scale}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-nationorange">Outcome</p>
                    <p className="mt-2 text-base leading-7 text-slate-700">{activeEvent.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default EventSection
