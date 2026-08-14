import { HoundtoothStrip } from './HoundtoothStrip'

/* Reusable inner-page banner — olive background, centered title + optional subtitle */
export function PageHero({ title, subtitle }) {
  return (
    <div className="page-hero">
      <HoundtoothStrip height={22} />
      <div className="page-hero-content">
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      </div>
      <HoundtoothStrip height={22} />
    </div>
  )
}
