import { useState } from 'react'
import { X, Menu } from 'lucide-react'
import { useScrollHeaderActive } from '../../../hooks/useScrollHeaderActive'


export function SiteHeader() {
  const [navOpen, setNavOpen] = useState(false)
  const headerActive = useScrollHeaderActive(32)

  const handleNavClick = (sectionId: string) => {
    setNavOpen(false)
    const target = document.getElementById(sectionId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header
      className={`header${headerActive ? ' active' : ''}`}
      data-header
    >
      {/* Overlay */}
      <div
        className={`overlay${navOpen ? ' active' : ''}`}
        data-overlay
        onClick={() => setNavOpen(false)}
      />

      <div className="header-bottom">
        <div className="container">
          {/* Logo */}
          <a
            href="#home"
            className="logo"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('home')
            }}
          >
            <img src="/images/logo.png" alt="Homeverse logo" />
          </a>

          {/* Navbar */}
          <nav
            className={`navbar${navOpen ? ' active' : ''}`}
            data-navbar
          >
            <div className="navbar-top">
              <a
                href="#home"
                className="logo"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('home')
                }}
              >
                <img src="/images/logo.png" alt="Homeverse logo" />
              </a>

              <button
                className="nav-close-btn nav-close-circle"
                data-nav-close-btn
                aria-label="Close Menu"
                onClick={() => setNavOpen(false)}
              >
                <X size={18} />
              </button>
            </div>

            <ul className="navbar-list">
              <li>
                <a
                  href="#home"
                  className="navbar-link"
                  data-nav-link
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('home')
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="navbar-link"
                  data-nav-link
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('about')
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#featured-luxury-properties"
                  className="navbar-link"
                  data-nav-link
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('featured-luxury-properties')
                  }}
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="#exclusive-experience"
                  className="navbar-link"
                  data-nav-link
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('exclusive-experience')
                  }}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#latest-insights"
                  className="navbar-link"
                  data-nav-link
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('latest-insights')
                  }}
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="navbar-link"
                  data-nav-link
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('contact')
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>

            <div className="navbar-bottom">
              <a
                href="#contact"
                className="navbar-cta-btn"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('contact')
                }}
              >
               
              </a>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="desktop-nav-cta">
            <a
              className="nav-cta"
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('contact')
              }}
            >
              Book Private Tour
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="nav-open-btn"
            data-nav-open-btn
            aria-label="Open Menu"
            onClick={() => setNavOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Bottom actions spacer (mobile) */}
      <div className="header-bottom-actions" aria-hidden="true" />
    </header>
  )
}

