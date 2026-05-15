import { useState } from 'react'
import { Logo } from '../Logo'

export function Navbar({ onNavigate, currentPage }) {
  const [open, setOpen] = useState(false)

  const go = (page) => {
    setOpen(false)
    onNavigate(page)
    window.scrollTo({ top: 0 })
  }

  const active = (page) => currentPage === page ? ' nav-active' : ''

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <button className="nav-logo-btn" onClick={() => go('home')} aria-label="Home">
          <Logo height={40} />
          <span className="nav-brand">
            <span className="nav-brand-line">DOERR ST.</span>
            <span className="nav-brand-line">RAIL CO.</span>
          </span>
        </button>

        <button
          className={`nav-hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>

        <ul className={`nav-links${open ? ' open' : ''}`} role="list">
          <li><button className={active('about')}    onClick={() => go('about')}>About</button></li>
          <li><button className={active('services')} onClick={() => go('services')}>Services</button></li>
          <li><button className={active('team')}     onClick={() => go('team')}>Team</button></li>
          <li><button className={active('contact')}  onClick={() => go('contact')}>Contact</button></li>
          <li>
            <button className={`nav-link-outline${active('login')}`} onClick={() => go('login')}>
              Customer Login
            </button>
          </li>
          <li>
            <button className="nav-cta" onClick={() => go('contact')}>
              Request a Quote
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
