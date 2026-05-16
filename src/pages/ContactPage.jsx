import { useState } from 'react'
import { Logo } from '../Logo'
import { PageHero } from '../components/PageHero'
import { HoundtoothStrip } from '../components/HoundtoothStrip'
import { Footer } from '../components/Footer'

/* ── Formspree endpoint ─────────────────────────────────────────
   To activate email delivery to basil@tiedisposal.com:
   1. Go to https://formspree.io and create a free account
   2. Click "New Form", set the notification email to basil@tiedisposal.com
   3. Copy your Form ID (looks like "xyzabcde") and paste it below
──────────────────────────────────────────────────────────────── */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xaqvrojz'

function ContactForm() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', state: '', message: ''
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const set = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          _subject: `Quote Request from ${form.name}${form.company ? ` — ${form.company}` : ''}`,
        }),
      })
      if (res.ok) {
        if (typeof window.gtag_report_conversion === 'function') {
          window.gtag_report_conversion()
        }
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-success-full">
        <Logo height={60} />
        <h3 className="contact-success-heading">Message Received</h3>
        <p className="contact-success-body">
          Thank you for reaching out. We'll review your request and follow up within one business day.
          If your situation is urgent, call us directly at{' '}
          <a href="tel:+17043210802">(704) 321-0802</a>.
        </p>
      </div>
    )
  }

  return (
    <form className="contact-full-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="cf-name">Full Name *</label>
          <input id="cf-name" type="text" name="name" value={form.name} onChange={set} required placeholder="Your name" autoComplete="name" />
        </div>
        <div className="form-group">
          <label htmlFor="cf-company">Company / Facility</label>
          <input id="cf-company" type="text" name="company" value={form.company} onChange={set} placeholder="Company or facility name" autoComplete="organization" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="cf-email">Email Address *</label>
          <input id="cf-email" type="email" name="email" value={form.email} onChange={set} required placeholder="your@email.com" autoComplete="email" />
        </div>
        <div className="form-group">
          <label htmlFor="cf-phone">Phone Number</label>
          <input id="cf-phone" type="tel" name="phone" value={form.phone} onChange={set} placeholder="(000) 000-0000" autoComplete="tel" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="cf-state">State / Location</label>
        <select id="cf-state" name="state" value={form.state} onChange={set}>
          <option value="">Select a state...</option>
          {['North Carolina','South Carolina','Georgia','Florida','Tennessee','Alabama','Mississippi','Virginia','Other'].map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="cf-message">Message / Project Description *</label>
        <textarea id="cf-message" name="message" value={form.message} onChange={set} required rows={6}
          placeholder="Describe your track, the type of inspection or work needed, and any deadlines or regulatory context..." />
      </div>

      {status === 'error' && (
        <p className="form-error">
          Something went wrong sending your message. Please call us directly at{' '}
          <a href="tel:+17043210802">(704) 321-0802</a>.
        </p>
      )}

      <button type="submit" className="btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}

function ContactInfoSection() {
  return (
    <div className="contact-info-panel">
      <div className="contact-info-block">
        <h3 className="contact-info-heading">Call Us</h3>
        <a href="tel:+17043210802" className="contact-info-phone">(704) 321-0802</a>
        <p className="contact-info-note">Available for urgent situations outside business hours.</p>
      </div>
      <div className="contact-info-block">
        <h3 className="contact-info-heading">Email Us</h3>
        <a href="mailto:info@trackinspections.com" className="contact-info-email">info@trackinspections.com</a>
      </div>
      <div className="contact-info-block">
        <h3 className="contact-info-heading">Corporate Headquarters</h3>
        <address className="contact-info-address">
          13700 Providence Road, Suite 200<br />
          Weddington, NC 28104
        </address>
      </div>
      <div className="contact-info-block">
        <h3 className="contact-info-heading">Service Area</h3>
        <p className="contact-info-note">
          Based in the Carolinas. Operating across the Southeastern United States — NC, SC, GA,
          FL, TN, AL, MS, VA, and beyond for the right project.
        </p>
      </div>
      <div className="contact-info-block">
        <h3 className="contact-info-heading">Response Time</h3>
        <p className="contact-info-note">
          We respond to all inquiries within one business day. For emergencies, call directly.
        </p>
      </div>
      <div className="contact-info-block">
        <h3 className="contact-info-heading">Who We Work With</h3>
        <ul className="contact-info-list">
          <li>Industrial facilities with plant track</li>
          <li>Short-line railroad operators</li>
          <li>Class I railroad contractors</li>
          <li>Port and intermodal terminal operators</li>
          <li>Construction firms bidding rail work</li>
        </ul>
      </div>
    </div>
  )
}

export function ContactPage({ onNavigate }) {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Request a quote, schedule an inspection, or ask a question."
      />
      <section className="contact-page-section">
        <div className="contact-page-inner">
          <div className="contact-form-col">
            <h2 className="section-heading">Request a Quote</h2>
            <p className="contact-intro">
              Fill out the form below and we'll follow up within one business day. The more detail
              you can give us about your track and situation, the better.
            </p>
            <ContactForm />
          </div>
          <ContactInfoSection />
        </div>
      </section>

      <section className="contact-phone-band">
        <HoundtoothStrip height={22} />
        <div className="contact-phone-band-inner">
          <div className="contact-phone-band-label">Or Simply Call</div>
          <a href="tel:+17043210802" className="contact-phone-band-number">(704) 321-0802</a>
          <div className="contact-phone-band-badge">
            <Logo height={54} />
            <p className="contact-phone-band-copy">&copy; Doerr Street Rail Co</p>
          </div>
        </div>
        <HoundtoothStrip height={22} />
      </section>

      <Footer onNavigate={onNavigate} />
    </>
  )
}
