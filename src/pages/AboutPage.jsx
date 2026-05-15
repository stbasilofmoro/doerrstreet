import { PageHero } from '../components/PageHero'
import { HoundtoothStrip } from '../components/HoundtoothStrip'
import { Footer } from '../components/Footer'

const TIMELINE = [
  { year: '1940s', heading: 'Roots in Pittsburgh', body: 'The Polivka family emigrates from the Carpathian Rusyn region, settling in Pittsburgh and bringing old-world values of craftsmanship and hard work to American industry.' },
  { year: '1960s', heading: 'Ohio Contracting', body: 'Basil Sr. founds a railroad contracting business in Ohio, taking on track maintenance work for regional carriers and building a reputation for getting it done right.' },
  { year: '1980s', heading: 'Polivka International', body: 'His sons expand the business into Polivka International, growing the crew and the scope — eventually winning contracts with all seven Class I Railroads across the United States.' },
  { year: '2000s', heading: 'Southeast Specialization', body: 'The next generation focuses on inspection and maintenance for industrial facilities and short-line operators in the Southeastern U.S., where growth in manufacturing creates strong demand.' },
  { year: 'Today', heading: 'Doerr Street Rail Co', body: 'Operating under the Doerr Street Rail Co name, the team brings 60+ years of institutional knowledge to every track walk, switch inspection, and compliance audit they complete.' },
]

const VALUES = [
  {
    icon: '⬡',
    title: 'Safety First',
    body: 'Every inspection is conducted with the same rigor we applied when we were operating Class I trains. Safe track is non-negotiable.',
  },
  {
    icon: '⬡',
    title: 'Integrity',
    body: 'We report what we find. Our written reports call out every defect, because a missed defect on paper can become a derailment on track.',
  },
  {
    icon: '⬡',
    title: 'Experience',
    body: 'Our inspectors averaged 15+ years with Class I railroads before joining us. That field experience cannot be replicated in a classroom.',
  },
  {
    icon: '⬡',
    title: 'Commitment',
    body: "We stay with the project through remediation and re-inspection. We're not done when the report is filed — we're done when your track is right.",
  },
]

function StorySection() {
  return (
    <section className="about-section">
      <div className="about-inner">
        <div className="about-photo-col">
          <div className="about-photo-frame">
            <img src="/team-photo.png" alt="Doerr Street Rail Co team" className="team-photo" />
          </div>
        </div>
        <div className="about-text-col">
          <h2 className="section-heading">A Family Built on the Railroad</h2>
          <p className="about-body">
            The Polivka family came to America with little more than their hands and the Carpathian
            Rusyn ethic: work hard, keep your word, take pride in what you build. Basil Sr. put that
            ethic to work in the railroad industry, and it stuck.
          </p>
          <p className="about-body">
            Three generations later, that same ethic shows up in every track walk we complete. Our
            inspectors hold FRA Part 213 certifications and carry decades of Class I experience —
            which means we know how a railroad inspector thinks, because most of us were railroad
            inspectors.
          </p>
          <blockquote className="about-quote">
            "Hard work was instilled into the bones of the Polivka family. That same ethic drives
            every inspection we complete today."
          </blockquote>
        </div>
      </div>
    </section>
  )
}

function TimelineSection() {
  return (
    <section className="timeline-section">
      <HoundtoothStrip />
      <div className="timeline-content">
        <div className="section-header-center">
          <h2 className="section-heading-light">60 Years of Rail Excellence</h2>
          <p className="section-subheading">From Pittsburgh to the Southeastern United States</p>
        </div>
        <div className="timeline">
          {TIMELINE.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-connector">
                <div className="timeline-dot" />
                {i < TIMELINE.length - 1 && <div className="timeline-line" />}
              </div>
              <div className="timeline-body">
                <h3 className="timeline-heading">{item.heading}</h3>
                <p className="timeline-text">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <HoundtoothStrip />
    </section>
  )
}

function ValuesSection() {
  return (
    <section className="values-section">
      <div className="values-content">
        <div className="section-header-center">
          <h2 className="section-heading">What We Stand For</h2>
          <p className="section-subheading-dark">
            Every inspection carries the weight of three generations.
          </p>
        </div>
        <div className="values-grid">
          {VALUES.map((v, i) => (
            <div key={i} className="value-card">
              <div className="value-card-rule" />
              <h3 className="value-card-title">{v.title}</h3>
              <p className="value-card-body">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CertificationsSection() {
  return (
    <section className="certs-section">
      <HoundtoothStrip />
      <div className="certs-content">
        <div className="section-header-center">
          <h2 className="section-heading-light">Credentials &amp; Certifications</h2>
        </div>
        <div className="certs-grid">
          <div className="cert-item">
            <div className="cert-title">FRA Part 213</div>
            <div className="cert-body">Track Safety Standards — all inspectors are certified under 49 CFR Part 213 for Class I through VI track.</div>
          </div>
          <div className="cert-item">
            <div className="cert-title">Class I Alumni</div>
            <div className="cert-body">Former employees of CSX, Norfolk Southern, BNSF, and other Class I carriers — we know how the railroads audit.</div>
          </div>
          <div className="cert-item">
            <div className="cert-title">Industrial Track</div>
            <div className="cert-body">Extensive experience with industrial leads, plant switcher operations, and high-cycle switch environments.</div>
          </div>
          <div className="cert-item">
            <div className="cert-title">Safety Programs</div>
            <div className="cert-body">Full OSHA compliance and railroad roadway worker protection protocols followed on every project site.</div>
          </div>
        </div>
      </div>
      <HoundtoothStrip />
    </section>
  )
}

function AboutCTA({ onNavigate }) {
  return (
    <section className="cta-band">
      <h2 className="cta-band-heading">Ready to put 60 years of experience to work?</h2>
      <p className="cta-band-sub">Contact us to schedule an inspection or discuss your track safety program.</p>
      <div className="cta-band-actions">
        <button className="btn-primary" onClick={() => { onNavigate('contact'); window.scrollTo(0, 0) }}>
          Request a Quote
        </button>
        <a href="tel:+17043210802" className="cta-band-phone">(704) 321-0802</a>
      </div>
    </section>
  )
}

export function AboutPage({ onNavigate }) {
  return (
    <>
      <PageHero
        title="About Doerr Street Rail Co"
        subtitle="Three generations. Sixty years. One standard of excellence."
      />
      <StorySection />
      <TimelineSection />
      <ValuesSection />
      <CertificationsSection />
      <AboutCTA onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </>
  )
}
