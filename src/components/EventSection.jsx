import EventCard from './EventCard'
import SectionIntro from './SectionIntro'

const EventSection = ({ events }) => {
  return (
    <section id="portfolio" className="bg-[#fff7f2] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Portfolio Event"
          title="Selected events that reflect The Nation's range and execution standards."
          description="Our portfolio spans launches, conferences, community programs, and curated private sessions designed to strengthen visibility and engagement."
        />

        <div className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventSection