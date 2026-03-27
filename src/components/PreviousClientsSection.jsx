import { useState } from 'react'
import PropTypes from 'prop-types'
import SectionIntro from './SectionIntro'

const PreviousClientsSection = ({ clients }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = Array.isArray(clients) ? clients : []
  const totalSlides = slides.length
  const isFirstSlide = currentSlide === 0
  const isLastSlide = currentSlide === totalSlides - 1

  const goToPreviousSlide = () => {
    if (!isFirstSlide) {
      setCurrentSlide((prev) => prev - 1)
    }
  }

  const goToNextSlide = () => {
    if (!isLastSlide) {
      setCurrentSlide((prev) => prev + 1)
    }
  }

  if (slides.length === 0) return null

  return (
    <section id="previous-clients" className="bg-[#FFF8F5] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Previous Clients"
          title="Brands & organizations we've proudly worked with."
          description="A growing list of partners who trusted The Nation to deliver."
          align="center"
        />

        <div className="relative mt-12 flex flex-col items-center justify-center sm:mt-16">
          
          <div className="relative w-full max-w-6xl">
            {/* Navigation Arrows */}
            {totalSlides > 1 && (
              <>
                <button
                  type="button"
                  onClick={goToPreviousSlide}
                  disabled={isFirstSlide}
                  className={`absolute -left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/50 backdrop-blur-sm shadow-md transition-all hover:bg-white active:scale-95 sm:-left-16 ${
                    isFirstSlide ? 'pointer-events-none opacity-0' : 'opacity-100'
                  }`}
                >
                  <svg className="h-6 w-6 text-nationred" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={goToNextSlide}
                  disabled={isLastSlide}
                  className={`absolute -right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/50 backdrop-blur-sm shadow-md transition-all hover:bg-white active:scale-95 sm:-right-16 ${
                    isLastSlide ? 'pointer-events-none opacity-0' : 'opacity-100'
                  }`}
                >
                  <svg className="h-6 w-6 text-nationred" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Carousel Content */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, slideIndex) => (
                  <div key={`slide-${slideIndex}`} className="w-full flex-shrink-0 px-4">
                    <div className="flex items-center justify-center">
                      <img
                        src={slide.image}
                        alt={`Client Banner ${slideIndex + 1}`}
                        className="h-auto w-full max-w-full object-contain"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = "https://placehold.co/1200x400/FFF8F5/E2E8F0?text=Banner+Image+Missing"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dot Indicators */}
          {totalSlides > 1 && (
            <div className="mt-12 flex items-center justify-center gap-3">
              {slides.map((_, slideIndex) => (
                <button
                  key={`dot-${slideIndex}`}
                  type="button"
                  onClick={() => setCurrentSlide(slideIndex)}
                  className={`transition-all duration-300 ${
                    slideIndex === currentSlide 
                      ? 'h-2.5 w-12 rounded-full bg-nationred' 
                      : 'h-2.5 w-2.5 rounded-full bg-nationamber/20 hover:bg-nationamber/40'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

PreviousClientsSection.propTypes = {
  clients: PropTypes.arrayOf(
    PropTypes.shape({
      slide: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default PreviousClientsSection
