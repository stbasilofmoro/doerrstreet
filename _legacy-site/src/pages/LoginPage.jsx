import { useState } from 'react'
import { Logo } from '../Logo'
import { HoundtoothStrip } from '../components/HoundtoothStrip'

export function LoginPage({ onNavigate }) {
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState(false)

  const set = (e) => { setForm({ ...form, [e.target.name]: e.target.value }); setError(false) }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(true)
  }

  return (
    <div className="login-page">
      <HoundtoothStrip />

      <div className="login-content">
        <Logo height={72} />
        <h1 className="login-title">Customer Login</h1>
        <p className="login-subtitle">Access your inspection reports and project status</p>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="lp-email">Email Address</label>
            <input
              id="lp-email"
              type="email"
              name="email"
              value={form.email}
              onChange={set}
              placeholder="your@email.com"
              required
              autoComplete="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lp-password">Password</label>
            <input
              id="lp-password"
              type="password"
              name="password"
              value={form.password}
              onChange={set}
              placeholder="Password"
              required
              autoComplete="current-password"
            />
          </div>

          {error && (
            <div className="login-error">
              The customer portal is coming soon. To access your reports, please call{' '}
              <a href="tel:+17043210802">(704) 321-0802</a>.
            </div>
          )}

          <button type="submit" className="btn-primary">Sign In</button>
        </form>

        <p className="login-help">
          Don't have an account?{' '}
          <button
            className="inline-link"
            onClick={() => { onNavigate('contact'); window.scrollTo(0, 0) }}
          >
            Contact us
          </button>{' '}
          to set up access.
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
