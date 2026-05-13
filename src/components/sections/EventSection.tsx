import { useEffect, useState, FC } from 'react'
import { Event } from '../../types'
import { EventCard } from '../cards'
import { SectionIntro } from '../common'

interface EventSectionProps {
  events: Event[]
}

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M6 6 18 18" />
    <path d="M18 6 6 18" />
  </svg>
)

const EventSection: FC<EventSectionProps> = ({ events }) => {
  const displayedEvents = events.slice(0, 8)
  const [activeEventIndex, setActiveEventIndex] = useState<number | null>(null)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const activeEvent = activeEventIndex !== null ? displayedEvents[activeEventIndex] : null

  const openModal = (index: number) => {
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

    const handleEscape = (event: KeyboardEvent) => {
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
          <div className="relative max-h-[95vh] w-full max-w-2xl overflow-y-auto rounded-[2.5rem] border border-nationamber bg-white p-6 shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-5 top-5 p-2 text-nationred transition hover:bg-[#fff7f2] rounded-full sm:right-8 sm:top-8"
              aria-label="Close modal"
            >
              <CloseIcon />
            </button>

            <div className="pr-8 sm:pr-10">
              {activeEvent.image && (
                <img src={activeEvent.image} alt={activeEvent.title} className="w-full rounded-2xl object-cover mb-6" />
              )}
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-nationorange">
                {activeEvent.date}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-nationred sm:text-4xl">
                {activeEvent.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{activeEvent.description}</p>

              <div className="mt-8 grid gap-4 rounded-2xl bg-[#fff7f2] p-5">
                <div>
                  <span className="font-semibold text-nationred">Category:</span> {activeEvent.category}
                </div>
                <div>
                  <span className="font-semibold text-nationred">Scale:</span> {activeEvent.scale}
                </div>
                <div>
                  <span className="font-semibold text-nationred">Outcome:</span> {activeEvent.outcome}
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
