import { Logo } from '../Logo'

export function Footer({ onNavigate }) {
  const go = (page) => { onNavigate(page); window.scrollTo(0, 0) }

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo height={48} />
          <div>
            <div className="footer-name">Doerr Street Rail Co</div>
            <div className="footer-tagline">FRA-Certified Rail Inspection &amp; Maintenance</div>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <ul role="list">
            <li><button onClick={() => go('about')}>About</button></li>
            <li><button onClick={() => go('services')}>Services</button></li>
            <li><button onClick={() => go('team')}>Team</button></li>
            <li><button onClick={() => go('contact')}>Contact</button></li>
            <li><button onClick={() => go('login')}>Customer Login</button></li>
          </ul>
        </nav>

        <div className="footer-contact-col">
          <a href="tel:+17043210802" className="footer-phone">(704) 321-0802</a>
          <a href="mailto:info@trackinspections.com" className="footer-email">info@trackinspections.com</a>
          <address className="footer-address">
            13700 Providence Road, Suite 200<br />
            Weddington, NC 28104
          </address>
          <span className="footer-region">Serving the Southeastern United States</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Doerr Street Rail Co. All rights reserved.</span>
        <button className="footer-privacy-link" onClick={() => go('privacy')}>Privacy Policy</button>
      </div>
    </footer>
  )
}
