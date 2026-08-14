export function FAQSection({ heading = 'Frequently Asked Questions', items }) {
  return (
    <section className="lp-faq-section">
      <div className="lp-faq-content">
        <h2 className="section-heading">{heading}</h2>
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
