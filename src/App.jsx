import { useState } from 'react'
import './App.css'

/* ─────────────────────────────────────────────────────────────
   LOGO BADGE — circular badge with crossed spike mauls,
   modeled after the Track Inspections sister-site badge
───────────────────────────────────────────────────────────── */
function LogoBadge({ size = 60, color = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="40" cy="40" r="36" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="40" cy="40" r="30" stroke={color} strokeWidth="0.75" fill="none" />
      {/* Crossed rail tools */}
      <line x1="26" y1="26" x2="54" y2="54" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="54" y1="26" x2="26" y2="54" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <circle cx="40" cy="40" r="3.5" fill={color} />
      <circle cx="26" cy="26" r="3" fill={color} />
      <circle cx="54" cy="54" r="3" fill={color} />
      <circle cx="54" cy="26" r="3" fill={color} />
      <circle cx="26" cy="54" r="3" fill={color} />
      <text
        x="40" y="13.5"
        textAnchor="middle"
        fontSize="5.2"
        fill={color}
        letterSpacing="2.5"
        fontFamily="Montserrat, sans-serif"
        fontWeight="700"
      >
        DOERR ST.
      </text>
      <text
        x="40" y="70.5"
        textAnchor="middle"
        fontSize="5.2"
        fill={color}
        letterSpacing="2"
        fontFamily="Montserrat, sans-serif"
        fontWeight="700"
      >
        RAIL CO.
      </text>
    </svg>
  )
}

/* ─────────────────────────────────────────────────────────────
   HOUNDSTOOTH STRIP — decorative border used between sections
   and at page edges, matching the Track Inspections site
───────────────────────────────────────────────────────────── */
function HoundtoothStrip({ height = 28 }) {
  return <div className="houndstooth-strip" style={{ height }} aria-hidden="true" />
}

/* ─────────────────────────────────────────────────────────────
   NAVBAR — sticky, scrolls with page, quote CTA on right
───────────────────────────────────────────────────────────── */
function Navbar({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    setMenuOpen(false)
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const goTo = (page) => {
    setMenuOpen(false)
    onNavigate(page)
    window.scrollTo({ top: 0 })
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <button className="nav-logo-btn" onClick={() => goTo('home')} aria-label="Go home">
          <LogoBadge size={40} color="var(--gold)" />
          <span className="nav-brand">
            <span className="nav-brand-line">DOERR ST.</span>
            <span className="nav-brand-line">RAIL CO.</span>
          </span>
        </button>

        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`} role="list">
          <li><button onClick={() => scrollTo('#about')}>About</button></li>
          <li><button onClick={() => scrollTo('#services')}>Services</button></li>
          <li><button onClick={() => scrollTo('#team')}>Team</button></li>
          <li><button onClick={() => scrollTo('#contact')}>Contact</button></li>
          <li>
            <button className="nav-link-outline" onClick={() => goTo('login')}>
              Customer Login
            </button>
          </li>
          <li>
            <button className="nav-cta" onClick={() => scrollTo('#contact')}>
              Request a Quote
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

/* ─────────────────────────────────────────────────────────────
   HERO SECTION — full-viewport, framed layout, dark overlay
   Replace .hero-bg with an actual train photo via CSS background-image
───────────────────────────────────────────────────────────── */
function HeroSection() {
  const scrollToContact = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero-section">
      {/* Photo placeholder — set background-image here with a real photo */}
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="hero-frame">
        <div className="hero-top-brand">
          <span className="hero-brand-word">DOERR ST.</span>
          <LogoBadge size={64} color="var(--gold)" />
          <span className="hero-brand-word">RAIL CO.</span>
        </div>
        <h1 className="hero-title">Rail Inspection &amp; Maintenance</h1>
        <p className="hero-subtitle">in Southeastern United States</p>
        <button className="hero-cta-btn" onClick={scrollToContact}>
          Request a Quote
        </button>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────
   STATS BAR — dark olive section with credentials + US map
───────────────────────────────────────────────────────────── */
function StatsBar() {
  return (
    <section className="stats-section">
      <HoundtoothStrip />
      <div className="stats-content">
        <div className="stats-row">
          <div className="stat-item">
            {/* Checkmark circle icon — matched from screenshot */}
            <div className="stat-check-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
                <circle cx="12" cy="12" r="10" />
                <polyline points="7 12 10.5 15.5 17 9" />
              </svg>
            </div>
            <div className="stat-label">FRA-certified</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">15+</div>
            <div className="stat-label">years experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">800+</div>
            <div className="stat-label">Completed projects</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">Class I</div>
            <div className="stat-label">Railroad Alumni</div>
          </div>
        </div>

        <p className="stats-body">
          FRA-certified rail inspection and maintenance for industrial leads, sidings, and switches
          across the Southeastern United States. Our inspectors average 15 years of field experience,
          with prior careers at Class I railroads and a proven record across 800+ completed projects.
        </p>

        <div className="stats-map-wrap">
          <USMapSVG />
        </div>
      </div>
      <HoundtoothStrip />
    </section>
  )
}

/* Simplified continental US outline with southeast highlight */
function USMapSVG() {
  return (
    <svg viewBox="0 0 520 330" className="us-map" xmlns="http://www.w3.org/2000/svg">
      {/* Mainland US rough outline */}
      <path
        d="M 80,55 L 95,48 L 130,42 L 175,36 L 230,31 L 290,28 L 350,27 L 400,28 L 440,32 L 468,40 L 488,52
           L 500,68 L 506,86 L 504,108 L 497,128 L 490,148 L 488,168 L 492,186 L 498,204 L 496,220
           L 482,234 L 462,245 L 440,254 L 416,260 L 415,275 L 408,292 L 396,310 L 382,318
           L 370,314 L 360,298 L 354,278 L 348,270 L 332,268 L 318,274 L 302,268 L 288,256
           L 268,248 L 246,248 L 224,256 L 200,262 L 176,264 L 152,258 L 130,248 L 108,236
           L 90,220 L 76,200 L 66,178 L 62,154 L 62,130 L 66,106 L 72,84 Z"
        fill="none"
        stroke="var(--cream)"
        strokeWidth="1.5"
        strokeOpacity="0.45"
      />
      {/* Southeast states highlight — GA, SC, NC, FL, AL, MS, TN region */}
      <path
        d="M 348,170 L 390,162 L 428,166 L 458,178 L 476,196 L 480,218
           L 468,238 L 448,250 L 416,258 L 415,272 L 408,290 L 396,308
           L 382,316 L 370,312 L 360,296 L 354,276 L 346,266 L 332,266
           L 316,272 L 302,264 L 292,252 L 308,240 L 320,226 L 326,208
           L 328,188 Z"
        fill="var(--gold)"
        fillOpacity="0.32"
        stroke="var(--gold)"
        strokeWidth="1"
        strokeOpacity="0.55"
      />
    </svg>
  )
}

/* ─────────────────────────────────────────────────────────────
   ABOUT SECTION — cream background, photo + text layout
   matching the "60 Years of Rail Excellence" section
───────────────────────────────────────────────────────────── */
function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <div className="about-photo-col">
          <div className="about-photo-frame">
            {/* Photo placeholder — replace with actual team/family photo */}
            <div className="about-photo-placeholder">
              <span>Team Photo</span>
            </div>
          </div>
        </div>

        <div className="about-text-col">
          <h2 className="section-heading">60 Years of Rail Excellence</h2>
          <p className="about-body">
            With roots tracing to the 1940s, the family brought Carpathian Rusyn values of hard
            work and integrity from Pittsburgh to the rail industry. Basil Sr. founded a
            contracting business in Ohio. His sons grew it into Polivka International — now
            serving all seven Class I Railroads.
          </p>
          <blockquote className="about-quote">
            "Hard work was instilled into the bones of the Polivka family. That same ethic drives
            every inspection we complete today."
          </blockquote>
          <button className="text-link-btn" onClick={() => {
            const el = document.querySelector('#team')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }}>
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────
   SERVICES SECTION — dark olive, numbered grid cards
───────────────────────────────────────────────────────────── */
const SERVICES = [
  {
    title: 'Track Inspection',
    body: 'Comprehensive FRA Part 213-compliant inspection of industrial leads, main line sidings, and spur tracks with detailed written reports and photographic documentation.',
  },
  {
    title: 'Switch Maintenance',
    body: 'Inspection, lubrication, and repair of switch stands, switch points, and switch machines — keeping your plant operations running safely.',
  },
  {
    title: 'Rail & Tie Replacement',
    body: 'Identification and replacement of defective rail, deteriorated ties, and compromised ballast sections across your property.',
  },
  {
    title: 'Regulatory Compliance',
    body: 'Guidance through FRA violation remediation and preparation for Class I railroad audits — we know exactly what inspectors look for.',
  },
  {
    title: 'Emergency Response',
    body: 'Rapid mobilization for derailments, storm damage, and urgent track safety situations across the Southeastern United States.',
  },
  {
    title: 'New Construction Review',
    body: 'Third-party inspection of new industrial track construction to ensure quality meets railroad and FRA standards before acceptance.',
  },
]

function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <HoundtoothStrip />
      <div className="services-content">
        <div className="section-header-center">
          <h2 className="section-heading-light">Our Services</h2>
          <p className="section-subheading">Built on decades of Class I railroad experience</p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div key={i} className="service-card">
              <div className="service-card-number">0{i + 1}</div>
              <h3 className="service-card-title">{s.title}</h3>
              <p className="service-card-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
      <HoundtoothStrip />
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────
   TEAM SECTION — cream background, three-column cards
───────────────────────────────────────────────────────────── */
const TEAM = [
  {
    initials: 'BP',
    name: 'Basil Polivka Jr.',
    role: 'President & FRA Inspector',
    bio: '20+ years in Class I railroad operations and inspection. Led track programs across CSX, NS, and BNSF territories before founding Doerr Street Rail Co.',
  },
  {
    initials: 'FC',
    name: 'Field Crew',
    role: 'Senior Track Inspectors',
    bio: 'Each inspector holds FRA Part 213 certifications with an average of 15 years of hands-on field experience at Class I railroads.',
  },
  {
    initials: 'OT',
    name: 'Operations Team',
    role: 'Project Coordination',
    bio: 'Rapid scheduling, detailed reporting, and seamless coordination with railroad and industrial customer teams from first call to final report.',
  },
]

function TeamSection() {
  return (
    <section className="team-section" id="team">
      <div className="team-content">
        <div className="section-header-center">
          <h2 className="section-heading">People Who Know the Rails</h2>
          <p className="section-subheading-dark">
            Our team came up through Class I railroads — we inspect to the same standards we operated under.
          </p>
        </div>
        <div className="team-grid">
          {TEAM.map((m, i) => (
            <div key={i} className="team-card">
              <div className="team-avatar">{m.initials}</div>
              <h3 className="team-name">{m.name}</h3>
              <div className="team-role">{m.role}</div>
              <p className="team-bio">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────
   CONTACT SECTION — dark olive, form + phone number
   Matches "Request a Quote" section at bottom of screenshots
───────────────────────────────────────────────────────────── */
function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="contact-section" id="contact">
      <HoundtoothStrip />
      <div className="contact-content">
        <h2 className="section-heading-light">Request a Quote</h2>
        <p className="contact-subheading">
          Get your infrastructure inspected by people who've been on the rails
        </p>

        {submitted ? (
          <div className="contact-success">
            <p>Thank you — we'll be in touch shortly.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn-primary">Submit</button>
          </form>
        )}

        <div className="contact-phone-block">
          <p className="contact-phone-label">Or Simply Call</p>
          <a href="tel:+17043210802" className="contact-phone-number">
            (704) 321-0802
          </a>
        </div>

        <div className="contact-footer-badge">
          <LogoBadge size={58} color="var(--gold)" />
          <p className="contact-copyright">&copy; Doerr Street Rail Co</p>
        </div>
      </div>
      <HoundtoothStrip />
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────────────────────── */
function Footer({ onNavigate }) {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <LogoBadge size={48} color="var(--gold)" />
          <div>
            <div className="footer-name">Doerr Street Rail Co</div>
            <div className="footer-tagline">FRA-Certified Rail Inspection &amp; Maintenance</div>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <ul role="list">
            <li><button onClick={() => scrollTo('#about')}>About</button></li>
            <li><button onClick={() => scrollTo('#services')}>Services</button></li>
            <li><button onClick={() => scrollTo('#team')}>Team</button></li>
            <li><button onClick={() => scrollTo('#contact')}>Contact</button></li>
            <li><button onClick={() => { onNavigate('login'); window.scrollTo(0, 0) }}>Customer Login</button></li>
          </ul>
        </nav>

        <div className="footer-contact-col">
          <a href="tel:+17043210802" className="footer-phone">(704) 321-0802</a>
          <span className="footer-region">Serving the Southeastern United States</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Doerr Street Rail Co. All rights reserved.</span>
      </div>
    </footer>
  )
}

/* ─────────────────────────────────────────────────────────────
   HOME PAGE
───────────────────────────────────────────────────────────── */
function HomePage({ onNavigate }) {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
      <Footer onNavigate={onNavigate} />
    </>
  )
}

/* ─────────────────────────────────────────────────────────────
   CUSTOMER LOGIN PAGE
───────────────────────────────────────────────────────────── */
function CustomerLoginPage({ onNavigate }) {
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Login functionality coming soon. Please call (704) 321-0802 for access.')
  }

  return (
    <div className="login-page">
      <HoundtoothStrip />
      <div className="login-content">
        <LogoBadge size={68} color="var(--gold)" />
        <h1 className="login-title">Customer Login</h1>
        <p className="login-subtitle">Access your inspection reports and project status</p>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            autoComplete="current-password"
          />
          <button type="submit" className="btn-primary">Sign In</button>
        </form>

        <p className="login-help">
          Need access?{' '}
          <button
            className="inline-link"
            onClick={() => { onNavigate('home'); setTimeout(() => { document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }, 100) }}
          >
            Contact us
          </button>{' '}
          to set up your account.
        </p>

        <button
          className="login-back-btn"
          onClick={() => { onNavigate('home'); window.scrollTo(0, 0) }}
        >
          &larr; Back to Main Site
        </button>
      </div>
      <HoundtoothStrip />

      <footer className="site-footer">
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Doerr Street Rail Co. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   ROOT APP
───────────────────────────────────────────────────────────── */
export default function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="site-root">
      <Navbar onNavigate={setPage} currentPage={page} />
      {page === 'home' && <HomePage onNavigate={setPage} />}
      {page === 'login' && <CustomerLoginPage onNavigate={setPage} />}
    </div>
  )
}
