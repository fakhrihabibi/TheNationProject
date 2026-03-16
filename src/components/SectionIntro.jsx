const SectionIntro = ({ eyebrow, title, description, align = 'left', tone = 'dark' }) => {
  const alignmentClass = align === 'center' ? 'mx-auto text-center' : ''
  const titleClass = tone === 'light' ? 'text-nationred' : 'text-nationred'
  const descriptionClass = tone === 'light' ? 'text-nationred/80' : 'text-slate-600'

  return (
    <div className={`max-w-3xl ${alignmentClass}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-nationorange">{eyebrow}</p>
      <h2 className={`mt-4 font-display text-4xl font-bold md:text-5xl ${titleClass}`}>{title}</h2>
      <p className={`mt-5 text-lg leading-8 ${descriptionClass}`}>{description}</p>
    </div>
  )
}

export default SectionIntro
