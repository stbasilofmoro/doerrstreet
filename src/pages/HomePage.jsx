import { LogoLockup } from '../Logo'
import { HoundtoothStrip } from '../components/HoundtoothStrip'
import { Footer } from '../components/Footer'
import { SEOHead } from '../components/SEOHead'

const HOME_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Doerr Street Rail Co — FRA-Certified Rail Inspection & Maintenance',
  description: 'FRA-certified railroad track inspection and maintenance for industrial facilities and rail operators across the Southeastern United States.',
  url: 'https://doerrstreetrailco.com/',
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://doerrstreetrailco.com/' }] },
}

/* ── Hero ── */
function HeroSection({ onNavigate }) {
  return (
    <section className="hero-section">
      <div className="hero-frame">
        <h1 className="hero-title">Railroad Track Inspection &amp; Maintenance</h1>
        <p className="hero-subtitle">FRA-Certified — Southeastern United States</p>
        <button className="hero-cta-btn" onClick={() => { onNavigate('contact'); window.scrollTo(0, 0) }}>
          Request a Quote
        </button>
      </div>
    </section>
  )
}

/* ── Stats / Credentials bar ── */
function StatsSection() {
  return (
    <section className="stats-section">
      <HoundtoothStrip />
      <div className="stats-content">
        <div className="stats-row">
          <div className="stat-item">
            <div className="stat-check-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="30" height="30">
                <circle cx="12" cy="12" r="10" />
                <polyline points="7 12 10.5 15.5 17 9" />
              </svg>
            </div>
            <div className="stat-label">FRA-certified</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">30+</div>
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
          FRA-certified railroad track inspection and industrial rail maintenance for plant spurs,
          private sidings, and interchange tracks across the Southeastern United States. Our inspectors
          average 30 years of field experience with Class I railroads — and a documented record across
          800+ completed inspection and maintenance projects.
        </p>

        <div className="stats-map-wrap">
          <img
            src="/map-section.png"
            alt="Service area map — Southeastern United States highlighted"
            className="stats-map-img"
          />
        </div>
      </div>
      <HoundtoothStrip />
    </section>
  )
}

/* ── About teaser ── */
function AboutTeaser({ onNavigate }) {
  return (
    <section className="about-section">
      <div className="about-inner">
        <div className="about-photo-col">
          <div className="about-photo-frame">
            <img src="/team-photo.png" alt="Doerr Street Rail Co team" className="team-photo" />
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
          <button className="text-link-btn" onClick={() => { onNavigate('about'); window.scrollTo(0, 0) }}>
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

/* ── Services teaser ── */
const SERVICE_TEASERS = [
  { title: 'Track Inspection', body: 'FRA Part 213-compliant inspection of industrial leads, sidings, and spur tracks with full written and photographic reports.' },
  { title: 'Switch Maintenance', body: 'Inspection, lubrication, and repair of switch stands, points, and machines to keep plant operations running.' },
  { title: 'Rail & Tie Replacement', body: 'Identification and replacement of defective rail, deteriorated ties, and compromised ballast sections.' },
  { title: 'Regulatory Compliance', body: 'Violation remediation and preparation for Class I railroad audits — we know what inspectors look for.' },
  { title: 'Emergency Response', body: 'Rapid mobilization for derailments, storm damage, and urgent track safety events across the southeast.' },
  { title: 'New Construction Review', body: 'Third-party inspection of new industrial track construction before railroad or FRA acceptance.' },
]

function ServicesTeaser({ onNavigate }) {
  return (
    <section className="services-section">
      <HoundtoothStrip />
      <div className="services-content">
        <div className="section-header-center">
          <h2 className="section-heading-light">Railroad Track Inspection &amp; Maintenance Services</h2>
          <p className="section-subheading">FRA Part 213 certified. Built on decades of Class I railroad experience.</p>
        </div>
        <div className="services-grid">
          {SERVICE_TEASERS.map((s, i) => (
            <div key={i} className="service-card">
              <div className="service-card-number">0{i + 1}</div>
              <h3 className="service-card-title">{s.title}</h3>
              <p className="service-card-body">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="section-cta-row">
          <button className="btn-outline" onClick={() => { onNavigate('services'); window.scrollTo(0, 0) }}>
            View All Services
          </button>
        </div>
      </div>
      <HoundtoothStrip />
    </section>
  )
}

/* ── Industries Served ── */
const INDUSTRIES = [
  'Paper Mills',
  'Aggregate Facilities',
  'Chemical Plants',
  'Transload Facilities',
  'Manufacturing',
  'Lumber',
  'Food Processing',
  'Short Line Railroads',
]

function IndustriesSection() {
  return (
    <section className="industries-section">
      <div className="industries-content">
        <div className="section-header-center">
          <h2 className="section-heading">Industries Served</h2>
          <p className="section-subheading-dark">
            Wherever industrial track meets a Class I railroad, we have the experience to keep it compliant and operational.
          </p>
        </div>
        <div className="industries-grid">
          {INDUSTRIES.map((name, i) => (
            <div key={i} className="industry-item">
              <div className="industry-rule" />
              <div className="industry-name">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── CTA band ── */
function ContactTeaser({ onNavigate }) {
  return (
    <section className="cta-band">
      <h2 className="cta-band-heading">Ready to schedule a railroad track inspection?</h2>
      <p className="cta-band-sub">
        We serve industrial facilities, short-line railroads, and Class I contractors across NC, SC, GA, FL, TN, AL, MS, and VA.
      </p>
      <div className="cta-band-actions">
        <button className="btn-primary" onClick={() => { onNavigate('contact'); window.scrollTo(0, 0) }}>
          Request a Quote
        </button>
        <a href="tel:+17043210802" className="cta-band-phone">(704) 321-0802</a>
      </div>
    </section>
  )
}

export function HomePage({ onNavigate }) {
  return (
    <>
      <SEOHead
        description="FRA-certified railroad track inspection and maintenance for industrial facilities and rail operators across the Southeastern United States. Class I experience. Written reports within 48 hours."
        canonical="https://doerrstreetrailco.com/"
        schema={HOME_SCHEMA}
      />
      <HeroSection onNavigate={onNavigate} />
      <StatsSection />
      <AboutTeaser onNavigate={onNavigate} />
      <ServicesTeaser onNavigate={onNavigate} />
      <IndustriesSection />
      <ContactTeaser onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </>
  )
}
