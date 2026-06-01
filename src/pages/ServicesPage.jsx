import { SEOHead } from '../components/SEOHead'
import { PageHero } from '../components/PageHero'
import { HoundtoothStrip } from '../components/HoundtoothStrip'
import { Footer } from '../components/Footer'
import { FAQSection } from '../components/FAQSection'

const SERVICES_FAQS = [
  {
    q: 'How do I know which service is right for my situation?',
    a: 'The right service depends on what you need to accomplish. If you have never had a professional inspection, start with an FRA compliance inspection — it establishes your baseline. If your Class I railroad is scheduling an audit, a pre-audit inspection is the appropriate choice. If you have a derailment or track incident, a post-incident inspection provides the documentation you need. Call us and describe your situation — we will recommend the right scope.',
  },
  {
    q: 'What is included in a written inspection report?',
    a: 'Every inspection report documents track conditions by segment, with each deficiency described in plain language and classified against the FRA Part 213 standard. Reports include photographic documentation of all significant findings, precise location references, FRA defect classification, and a priority ranking that separates immediate safety concerns from scheduled maintenance items. Reports are delivered within 48 hours of the field inspection.',
  },
  {
    q: 'Can you handle an emergency inspection on short notice?',
    a: 'Yes. We maintain emergency response capability for derailments, Class I service restrictions, storm damage, and other urgent track situations throughout the Southeast. For emergencies, call us directly at (704) 321-0802. We can often mobilize same-day or next-day for urgent situations in our core service territory.',
  },
  {
    q: 'Do you perform the maintenance work identified in your inspections?',
    a: 'Yes. We offer both inspection and maintenance services. When our inspection identifies deficiencies, we can provide a maintenance scope and fixed price directly from the findings — with no re-mobilization gap and no need to manage a second vendor. As a major tie contractor with direct OTM supply, we bring material cost advantages to maintenance work that most inspection-only firms cannot offer.',
  },
  {
    q: 'How are defects prioritized in your reports?',
    a: 'Every defect is classified per 49 CFR Part 213, which defines the operational response for each defect type — some require immediate suspension of car movements; others allow continued operation at restricted speed; others can be addressed on a scheduled maintenance timeline. Our reports clearly communicate which category each finding falls into, so your team knows what requires immediate action versus what can go into the next maintenance window.',
  },
]

const SERVICES = [
  {
    number: '01',
    title: 'Track Inspection',
    summary: 'FRA Part 213-compliant inspection of industrial leads, sidings, and spur tracks.',
    details: [
      'Comprehensive visual and physical inspection of all track components',
      'Measurement of gauge, cross-level, surface, alignment, and twist',
      'Rail head wear profiling and documentation',
      'Tie condition classification per FRA standards',
      'Ballast assessment and drainage evaluation',
      'Detailed written report with photographic documentation',
      'Defect maps and priority remediation recommendations',
    ],
  },
  {
    number: '02',
    title: 'Switch Maintenance',
    summary: 'Inspection, adjustment, and repair of all switch components for safe, reliable plant operations.',
    details: [
      'Switch point, stock rail, and closure rail inspection',
      'Switch stand condition and throw-force measurement',
      'Switch machine inspection and electrical testing coordination',
      'Point-to-stock rail fit adjustment',
      'Frog and guard rail wear measurement',
      'Lubrication of all moving components',
      'Switch heater inspection (where applicable)',
    ],
  },
  {
    number: '03',
    title: 'Rail & Tie Replacement',
    summary: 'Identification and coordinated replacement of failed rail, ties, and ballast sections.',
    details: [
      'Defective rail identification — worn, cracked, or broken',
      'Tie plate and spike assessment',
      'Tie classification and removal prioritization',
      'Ballast fouling assessment and remediation planning',
      'Coordination with Class I track windows for mainline sidings',
      'Post-replacement re-inspection and sign-off',
    ],
  },
  {
    number: '04',
    title: 'Regulatory Compliance',
    summary: 'Guidance through FRA audits, violation remediation, and ongoing compliance programs.',
    details: [
      'Pre-audit track condition assessment',
      'FRA violation citation review and remediation planning',
      'Written compliance programs and inspection schedules',
      'Liaison with Class I railroad track departments',
      'Documentation support for FRA waiver requests',
      'Ongoing compliance monitoring programs',
    ],
  },
  {
    number: '05',
    title: 'Emergency Response',
    summary: 'Rapid mobilization for derailments, storm damage, and urgent safety situations.',
    details: [
      '24/7 emergency contact availability',
      'Rapid mobilization across the Southeastern U.S.',
      'Derailment site assessment and track restoration coordination',
      'Storm damage inspection (tornado, flooding, tree fall)',
      'Emergency FRA notification support',
      'Track re-qualification and return-to-service inspection',
    ],
  },
  {
    number: '06',
    title: 'New Construction Review',
    summary: 'Independent third-party inspection of new industrial track before railroad acceptance.',
    details: [
      'Construction quality inspection at key milestones',
      'Specification compliance verification',
      'Gauge, surface, and alignment checks per design tolerances',
      'Switch installation inspection and operational testing',
      'Final pre-acceptance walkover and punch list',
      'Documentation for Class I or FRA turnover acceptance',
    ],
  },
]

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Initial Assessment',
    body: 'We start with a conversation about your facility, your track infrastructure, and any known issues or upcoming audits. No site is too simple or too complex.',
  },
  {
    step: '02',
    title: 'Site Inspection',
    body: 'Our FRA-certified inspectors walk every foot of track, documenting conditions with photos, measurements, and field notes against Part 213 standards.',
  },
  {
    step: '03',
    title: 'Written Report',
    body: 'You receive a clear, prioritized report: what we found, what class it falls under, what needs to be fixed, and in what order. No jargon without explanation.',
  },
  {
    step: '04',
    title: 'Remediation &amp; Follow-up',
    body: 'We stay with the project. Once repairs are made, we return for re-inspection and provide written sign-off that the defects are resolved.',
  },
]

function ServicesList() {
  return (
    <section className="services-detail-section">
      <div className="services-detail-content">
        {SERVICES.map((s, i) => (
          <div key={i} className="service-detail-card">
            <div className="service-detail-left">
              <div className="service-detail-number">{s.number}</div>
              <h2 className="service-detail-title">{s.title}</h2>
              <p className="service-detail-summary">{s.summary}</p>
            </div>
            <div className="service-detail-right">
              <ul className="service-detail-list">
                {s.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="process-section">
      <HoundtoothStrip />
      <div className="process-content">
        <div className="section-header-center">
          <h2 className="section-heading-light">How We Work</h2>
          <p className="section-subheading">Simple, thorough, accountable</p>
        </div>
        <div className="process-steps">
          {PROCESS_STEPS.map((s, i) => (
            <div key={i} className="process-step">
              <div className="process-step-number">{s.step}</div>
              <h3 className="process-step-title" dangerouslySetInnerHTML={{ __html: s.title }} />
              <p className="process-step-body">{s.body}</p>
              {i < PROCESS_STEPS.length - 1 && (
                <div className="process-step-arrow" aria-hidden="true">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <HoundtoothStrip />
    </section>
  )
}

function CoverageSection() {
  return (
    <section className="coverage-section">
      <div className="coverage-content">
        <div className="coverage-text">
          <h2 className="section-heading">Service Area</h2>
          <p className="coverage-body">
            We are based in the Carolinas and operate across the Southeastern United States.
            Our team regularly works in North Carolina, South Carolina, Georgia, Florida,
            Tennessee, Alabama, and Mississippi — and we will travel for the right project.
          </p>
          <p className="coverage-body">
            If your facility has industrial track, sidings, or plant switcher operations and
            you need FRA-compliant inspection, call us. We know these railroads — many of us
            worked for them.
          </p>
          <a href="tel:+17043210802" className="coverage-phone">(704) 321-0802</a>
        </div>
        <div className="coverage-states">
          {['North Carolina', 'South Carolina', 'Georgia', 'Florida', 'Tennessee', 'Alabama', 'Mississippi', 'Virginia'].map(s => (
            <div key={s} className="coverage-state-tag">{s}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesCTA({ onNavigate }) {
  return (
    <section className="cta-band">
      <h2 className="cta-band-heading">Let's talk about your track.</h2>
      <p className="cta-band-sub">
        Request a quote or call us directly. We'll schedule an inspection and get you a clear picture of where your track stands.
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

export function ServicesPage({ onNavigate }) {
  return (
    <>
      <SEOHead
        title="Rail Inspection & Maintenance Services | FRA-Certified"
        description="Full-service railroad track inspection and maintenance — FRA compliance inspections, switch maintenance, rail and tie replacement, regulatory audit prep, and emergency response across the Southeastern U.S."
        canonical="https://doerrstreetrailco.com/services"
      />
      <PageHero
        title="Rail Inspection &amp; Maintenance Services"
        subtitle="FRA-certified. Class I experience. Built for industrial track."
      />
      <ServicesList />
      <ProcessSection />
      <CoverageSection />
      <FAQSection items={SERVICES_FAQS} />
      <ServicesCTA onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </>
  )
}
