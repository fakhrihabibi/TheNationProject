import SectionIntro from './SectionIntro'
import SocialLinkCard from './SocialLinkCard'

const SocialSection = ({ socialLinks }) => {
  return (
    <section id="social" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="The Nation Social Media"
          title="Follow the channels where our community, event highlights, and latest updates live."
          description="Use these platforms to discover behind-the-scenes moments, campaign launches, featured collaborations, and upcoming announcements."
          align="center"
        />

        <div className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {socialLinks.map((socialLink) => (
            <SocialLinkCard key={socialLink.platform} socialLink={socialLink} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialSection