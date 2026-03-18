const SectionIntro = ({ eyebrow, title, description, align = 'left', tone = 'dark' }) => {
  const alignmentClass = align === 'center' ? 'mx-auto text-center' : ''
  const titleClass = tone === 'light' ? 'text-nationred' : 'text-nationred'
  const descriptionClass = tone === 'light' ? 'text-nationred/80' : 'text-slate-600'

  return (
    <div className={`max-w-3xl ${alignmentClass}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-nationorange sm:text-sm sm:tracking-[0.35em]">
        {eyebrow}
      </p>
      <h2 className={`mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl ${titleClass}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base leading-7 sm:mt-5 sm:text-lg sm:leading-8 ${descriptionClass}`}>
        {description}
      </p>
    </div>
  )
}

export default SectionIntro