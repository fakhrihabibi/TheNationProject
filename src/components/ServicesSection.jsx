import PropTypes from 'prop-types'
import SectionIntro from './SectionIntro'
import ServiceCard from './ServiceCard'

const ServicesSection = ({ services }) => {
  return (
    <section id="services" className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Our Services"
          title="End-to-end support for organizations that need strong ideas and reliable execution."
          description="From strategy to delivery, our services are built to help brands launch, engage, and grow through carefully produced experiences."
        />

        <div className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

ServicesSection.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default ServicesSection