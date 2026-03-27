import PropTypes from 'prop-types'

const SocialLinkCard = ({ socialLink }) => {
  return (
    <a
      href={socialLink.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-[2rem] border border-nationamber/60 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:border-nationorange"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-nationred text-nationamber">
        {socialLink.icon}
      </div>
      <h3 className="mt-6 font-display text-2xl font-bold text-nationred">{socialLink.platform}</h3>
      <p className="mt-3 text-base leading-7 text-slate-600">{socialLink.handle}</p>
      <span className="mt-6 inline-flex text-sm font-semibold text-nationorange">Visit channel</span>
    </a>
  )
}

SocialLinkCard.propTypes = {
  socialLink: PropTypes.shape({
    platform: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
  }).isRequired,
}

export default SocialLinkCard
