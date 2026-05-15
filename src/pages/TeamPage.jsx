import { PageHero } from '../components/PageHero'
import { HoundtoothStrip } from '../components/HoundtoothStrip'
import { Footer } from '../components/Footer'

const TEAM = [
  {
    initials: 'BP',
    name: 'Basil Polivka II',
    title: 'President',
    bio: '',
    credentials: [],
  },
  {
    initials: 'MS',
    name: 'Michael Small',
    title: 'VP of Track Inspections and Maintenance',
    bio: 'Michael brings 20 years of experience spanning heavy manufacturing and Class I railroad operations — a combination that gives him an unusually complete picture of what industrial track owners are up against. He understands the production pressures that make downtime costly and the regulatory standards that make shortcuts dangerous. At Doerr Street Rail Co, he leads inspection programs and maintenance oversight with the same discipline he developed on the Class I side of the industry.',
    credentials: ['Class I Railroad Alumni', '20 Years Field Experience', 'Heavy Manufacturing Background'],
  },
  {
    initials: 'SM',
    name: 'Senior Inspection Team',
    title: 'FRA-Certified Field Inspectors',
    bio: 'Our field inspectors are former Class I track supervisors and roadmasters who retired from operations and came to inspection. They know what a railroad track department expects because they wrote those expectations. Each carries FRA Part 213 certification and a minimum of fifteen years of field experience.',
    credentials: ['FRA Part 213 Certified', '15+ Years Field Average', 'Class I Track Alumni'],
  },
  {
    initials: 'OC',
    name: 'Operations & Coordination',
    title: 'Scheduling, Reporting & Client Services',
    bio: 'From the first call to the final sign-off report, our operations team makes sure every project moves efficiently. They coordinate track windows with Class I dispatchers, manage site access logistics, and ensure that written reports are delivered promptly and in a format your team can act on.',
    credentials: ['Railroad Operations Background', 'Report Delivery within 48 Hours', 'Direct Client Communication'],
  },
]

const CREDENTIALS = [
  { label: 'FRA Part 213', desc: 'Track Safety Standards certification — Classes I through VI' },
  { label: 'Roadway Worker Protection', desc: 'RWP-compliant procedures on every site' },
  { label: 'OSHA 10 / 30', desc: 'Safety-first culture on all projects' },
  { label: 'Class I Alumni', desc: 'CSX, Norfolk Southern, BNSF, and more' },
  { label: '800+ Projects', desc: 'Completed across the Southeastern U.S.' },
  { label: '15+ Year Average', desc: 'Field experience per inspector' },
]

function TeamGrid() {
  return (
    <section className="team-page-section">
      <div className="team-page-content">
        <div className="section-header-center">
          <h2 className="section-heading">People Who Know the Rails</h2>
          <p className="section-subheading-dark">
            We came up through Class I railroads. We inspect to the same standard we operated under.
          </p>
        </div>
        <div className="team-page-grid">
          {TEAM.map((m, i) => (
            <div key={i} className="team-page-card">
              <div className="team-page-avatar">{m.initials}</div>
              <div className="team-page-info">
                <h3 className="team-page-name">{m.name}</h3>
                <div className="team-page-title">{m.title}</div>
                <p className="team-page-bio">{m.bio}</p>
                <ul className="team-page-credentials">
                  {m.credentials.map((c, j) => (
                    <li key={j}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CredentialsSection() {
  return (
    <section className="team-creds-section">
      <HoundtoothStrip />
      <div className="team-creds-content">
        <div className="section-header-center">
          <h2 className="section-heading-light">Collective Credentials</h2>
          <p className="section-subheading">What our team brings to every project</p>
        </div>
        <div className="creds-grid">
          {CREDENTIALS.map((c, i) => (
            <div key={i} className="cred-item">
              <div className="cred-label">{c.label}</div>
              <div className="cred-desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <HoundtoothStrip />
    </section>
  )
}

function PhilosophySection() {
  return (
    <section className="philosophy-section">
      <div className="philosophy-content">
        <div className="philosophy-quote-block">
          <p className="philosophy-quote">
            "When I started, the old-timers told me: never write something in a report you wouldn't
            say to the inspector's face. We carry that forward. Every defect gets documented.
            Every recommendation gets explained. That's how you build a record worth trusting."
          </p>
          <div className="philosophy-attribution">— Basil Polivka Jr., President</div>
        </div>
      </div>
    </section>
  )
}

function TeamCTA({ onNavigate }) {
  return (
    <section className="cta-band">
      <h2 className="cta-band-heading">Work with a team that's been on your track.</h2>
      <p className="cta-band-sub">
        Request a quote or call us to discuss your inspection needs. We're ready to mobilize.
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

export function TeamPage({ onNavigate }) {
  return (
    <>
      <PageHero
        title="Our Team"
        subtitle="Class I experience. FRA certification. Family values."
      />
      <TeamGrid />
      <PhilosophySection />
      <CredentialsSection />
      <TeamCTA onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </>
  )
}
