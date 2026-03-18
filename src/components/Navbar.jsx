import { useState } from 'react'
import nationLogo from '../assets/the-nation-logo.svg'
import { marketingContact } from '../utils/content'

const navigationItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Social', href: '#social' },
  { label: 'Previous Clients', href: '#previous-clients' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full overflow-visible border-b border-nationamber/60 bg-nationwhite/95 backdrop-blur-xl">
      <nav className="relative flex w-full items-center justify-between overflow-visible box-border px-5 py-4 sm:px-6 md:px-8 md:py-5">
        <a href="#home" className="flex items-center bg-transparent">
          <img
            src={nationLogo}
            alt="The Nation logo"
            className="h-10 w-auto max-w-none bg-transparent object-contain opacity-90 sm:h-12 lg:h-16"
          />
        </a>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex xl:gap-12">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[18px] font-semibold tracking-[0.5px] text-[#C0392B] transition-all duration-300 ease-in-out hover:text-[#E8470A]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-nationamber text-nationred transition hover:bg-nationorange hover:text-nationwhite lg:hidden"
            onClick={() => setIsMobileMenuOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              {isMobileMenuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>

          <a
            href={marketingContact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="hidden whitespace-nowrap rounded-full border border-nationamber bg-nationcrimson px-6 py-3 text-center text-base font-medium text-nationwhite transition hover:border-nationorangedeep hover:bg-nationorangedeep lg:inline-flex lg:items-center lg:justify-center"
          >
            Contact Us
          </a>
        </div>

        {isMobileMenuOpen ? (
          <div className="absolute inset-x-4 top-full mt-3 rounded-[1.5rem] border border-nationamber/60 bg-nationwhite p-4 shadow-soft lg:hidden">
            <div className="flex flex-col gap-2">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-base font-semibold text-nationred transition hover:bg-[#fff7f2] hover:text-nationorangedeep"
                  onClick={handleMobileNavClick}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={marketingContact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex justify-center whitespace-nowrap rounded-full border border-nationamber bg-nationcrimson px-6 py-3 text-base font-medium text-nationwhite transition hover:border-nationorangedeep hover:bg-nationorangedeep"
                onClick={handleMobileNavClick}
              >
                Contact Us
              </a>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  )
}

export default Navbar
