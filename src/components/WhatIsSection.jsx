import SectionIntro from './SectionIntro'

const values = [
  {
    title: 'Mission',
    description:
      'To build high-value experiences that connect communities, brands, and ideas through thoughtful strategy and flawless execution.',
  },
  {
    title: 'Vision',
    description:
      'To become a leading creative organization known for shaping culture, enabling collaboration, and setting a higher standard for event-led growth.',
  },
  {
    title: 'Purpose',
    description:
      'To help organizations show up with clarity, relevance, and ambition in moments that matter most to their audiences.',
  },
]

const WhatIsSection = () => {
  return (
    <section id="about" className="bg-nationwhite px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 sm:gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <SectionIntro
          eyebrow="What Is The Nation"
          title="A modern organization focused on people, momentum, and meaningful brand presence."
          description="The Nation is a strategic event and brand experience organization that helps companies, institutions, and communities create moments with substance. We bring together creative direction, audience insight, and operational excellence to produce initiatives that feel premium and purposeful."
        />

        <div className="grid gap-5">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-[2rem] border border-nationamber/60 bg-white p-6 shadow-soft sm:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-nationorange">
                {value.title}
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatIsSection