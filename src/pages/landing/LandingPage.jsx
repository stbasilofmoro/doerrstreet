import { SEOHead } from '../../components/SEOHead'
import { PageHero } from '../../components/PageHero'
import { HoundtoothStrip } from '../../components/HoundtoothStrip'
import { Footer } from '../../components/Footer'

/* ── Section: Lead intro ── */
function IntroSection({ heading, body }) {
  return (
    <section className="lp-intro-section">
      <div className="lp-intro-content">
        {heading && <h2 className="section-heading">{heading}</h2>}
        {Array.isArray(body)
          ? body.map((p, i) => <p key={i} className="lp-body">{p}</p>)
          : <p className="lp-body">{body}</p>}
      </div>
    </section>
  )
}

/* ── Section: Feature grid (gold-rule cards on cream) ── */
function FeaturesSection({ heading, subheading, items }) {
  return (
    <section className="lp-features-section">
      <HoundtoothStrip />
      <div className="lp-features-content">
        <div className="section-header-center">
          <h2 className="section-heading-light">{heading}</h2>
          {subheading && <p className="section-subheading">{subheading}</p>}
        </div>
        <div className="lp-features-grid">
          {items.map((item, i) => (
            <div key={i} className="lp-feature-card">
              <div className="lp-feature-rule" />
              <h3 className="lp-feature-title">{item.title}</h3>
              {item.body && <p className="lp-feature-body">{item.body}</p>}
            </div>
          ))}
        </div>
      </div>
      <HoundtoothStrip />
    </section>
  )
}

/* ── Section: Two-column text + checklist ── */
function TwoColSection({ heading, body, listHeading, items }) {
  return (
    <section className="lp-twocol-section">
      <div className="lp-twocol-inner">
        <div className="lp-twocol-text">
          <h2 className="section-heading">{heading}</h2>
          {Array.isArray(body)
            ? body.map((p, i) => <p key={i} className="lp-body">{p}</p>)
            : <p className="lp-body">{body}</p>}
        </div>
        <div className="lp-twocol-list">
          {listHeading && <h3 className="lp-list-heading">{listHeading}</h3>}
          <ul className="lp-checklist">
            {items.map((item, i) => (
              <li key={i}>
                <span className="lp-check" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ── Section: Credential strip (stats/trust signals) ── */
function TrustSection({ items }) {
  return (
    <section className="lp-trust-section">
      <div className="lp-trust-inner">
        {items.map((item, i) => (
          <div key={i} className="lp-trust-item">
            <div className="lp-trust-value">{item.value}</div>
            <div className="lp-trust-label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── Section: Simple rich text block ── */
function TextSection({ heading, body }) {
  return (
    <section className="lp-text-section">
      <div className="lp-text-content">
        {heading && <h2 className="section-heading">{heading}</h2>}
        {Array.isArray(body)
          ? body.map((p, i) => <p key={i} className="lp-body">{p}</p>)
          : <p className="lp-body">{body}</p>}
      </div>
    </section>
  )
}

/* ── Section: FAQ accordion-free Q&A list ── */
function FAQSection({ heading, items }) {
  return (
    <section className="lp-faq-section">
      <div className="lp-faq-content">
        <h2 className="section-heading">{heading || 'Frequently Asked Questions'}</h2>
        <dl className="lp-faq-list">
          {items.map((item, i) => (
            <div key={i} className="lp-faq-item">
              <dt className="lp-faq-q">{item.q}</dt>
              <dd className="lp-faq-a">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

const SECTION_MAP = {
  intro: IntroSection,
  features: FeaturesSection,
  'two-col': TwoColSection,
  trust: TrustSection,
  text: TextSection,
  faq: FAQSection,
}

/* ── CTA band ── */
function LandingCTA({ heading, sub, onNavigate }) {
  return (
    <section className="cta-band">
      <h2 className="cta-band-heading">{heading}</h2>
      <p className="cta-band-sub">{sub}</p>
      <div className="cta-band-actions">
        <button className="btn-primary" onClick={() => { onNavigate('contact'); window.scrollTo(0, 0) }}>
          Request an Inspection
        </button>
        <a href="tel:+17043210802" className="cta-band-phone">(704) 321-0802</a>
      </div>
    </section>
  )
}

/* ── Main export ── */
export function LandingPage({ seo, hero, sections, cta, onNavigate }) {
  return (
    <>
      <SEOHead {...seo} />
      <PageHero title={hero.title} subtitle={hero.subtitle} />
      {sections.map((s, i) => {
        const Component = SECTION_MAP[s.type]
        return Component ? <Component key={i} {...s} /> : null
      })}
      <LandingCTA {...cta} onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </>
  )
}
