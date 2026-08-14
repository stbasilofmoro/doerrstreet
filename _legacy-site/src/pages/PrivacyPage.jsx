import { PageHero } from '../components/PageHero'
import { Footer } from '../components/Footer'

export function PrivacyPage({ onNavigate }) {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information."
      />
      <section className="privacy-section">
        <div className="privacy-content">

          <p className="privacy-effective">Effective Date: May 15, 2025</p>

          <p className="privacy-intro">
            Doerr Street Rail Co ("we," "our," or "us") operates the website at doerrstreetrailco.com
            (the "Site"). This Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our Site or submit a contact or quote request. Please read
            this policy carefully. If you do not agree with its terms, please discontinue use of the Site.
          </p>

          <h2>1. Information We Collect</h2>
          <h3>Information You Provide Directly</h3>
          <p>
            When you fill out the contact or quote request form on our Site, we collect the information
            you voluntarily submit, which may include:
          </p>
          <ul>
            <li>Full name</li>
            <li>Company or facility name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>State or location</li>
            <li>Project description or message</li>
          </ul>
          <p>We do not collect payment information through our Site.</p>

          <h3>Information Collected Automatically</h3>
          <p>
            When you visit our Site, certain information may be collected automatically through
            cookies and analytics tools, including:
          </p>
          <ul>
            <li>IP address and general geographic location</li>
            <li>Browser type and operating system</li>
            <li>Pages visited and time spent on those pages</li>
            <li>Referring website or search terms</li>
            <li>Device type</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your quote requests and inquiries</li>
            <li>Communicate with you about our services</li>
            <li>Improve our website and user experience</li>
            <li>Measure and analyze website traffic and advertising performance</li>
            <li>Comply with applicable legal obligations</li>
          </ul>
          <p>
            We do not sell, rent, or trade your personal information to third parties for their
            marketing purposes.
          </p>

          <h2>3. Third-Party Services</h2>
          <h3>Google Analytics &amp; Google Ads</h3>
          <p>
            We use Google Analytics and Google Ads (via Google Tag Manager) to understand how
            visitors interact with our Site and to measure the effectiveness of our advertising.
            These services may collect information about your use of the Site and use cookies to
            track conversions. You can opt out of Google Analytics tracking by installing the{' '}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
              Google Analytics Opt-out Browser Add-on
            </a>.
          </p>

          <h3>Formspree</h3>
          <p>
            Our contact form is processed by Formspree, a third-party form submission service.
            Information you submit through our form is transmitted to Formspree's servers and
            forwarded to us by email. Formspree's privacy policy is available at{' '}
            <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              formspree.io/legal/privacy-policy
            </a>.
          </p>

          <h2>4. Cookies</h2>
          <p>
            Our Site uses cookies — small text files stored on your device — to support analytics
            and advertising measurement. You can control cookie settings through your browser.
            Disabling cookies may affect some functionality of the Site. We do not use cookies
            to store personal information you provide through forms.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain contact and quote request submissions for as long as necessary to respond
            to your inquiry and maintain business records, or as required by law. Analytics data
            is retained according to the policies of the respective third-party services.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We take reasonable administrative and technical measures to protect your information
            from unauthorized access, disclosure, or loss. However, no method of transmission
            over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>7. Children's Privacy</h2>
          <p>
            Our Site is not directed to individuals under the age of 13. We do not knowingly
            collect personal information from children. If you believe we have inadvertently
            collected such information, please contact us and we will promptly delete it.
          </p>

          <h2>8. Links to Other Websites</h2>
          <p>
            Our Site may contain links to third-party websites. We are not responsible for the
            privacy practices or content of those sites and encourage you to review their
            respective privacy policies.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will revise the
            effective date at the top of this page. Your continued use of the Site after any
            changes constitutes your acceptance of the updated policy.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, please contact us:
          </p>
          <address className="privacy-address">
            Doerr Street Rail Co<br />
            Phone: <a href="tel:+17043210802">(704) 321-0802</a><br />
            Email: <a href="mailto:basil@tiedisposal.com">basil@tiedisposal.com</a>
          </address>

        </div>
      </section>
      <Footer onNavigate={onNavigate} />
    </>
  )
}
