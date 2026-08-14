/* Doerr Street Rail Co — approved logo asset served from /public/logo.png.
   Only CSS sizing is applied; original proportions are always preserved via height: auto / width: auto. */

export function Logo({ height = 60, className = '' }) {
  return (
    <img
      src="/logo.png"
      alt="Doerr Street Rail Co"
      height={height}
      style={{ height, width: 'auto', display: 'block' }}
      className={className}
    />
  )
}

/* Horizontal lockup: DOERR ST. [logo] RAIL CO.
   Text color is supplied by the caller to match the background context. */
export function LogoLockup({ logoHeight = 72, textColor = 'var(--cream)' }) {
  return (
    <div className="logo-lockup">
      <span className="logo-lockup-word" style={{ color: textColor }}>DOERR ST.</span>
      <Logo height={logoHeight} />
      <span className="logo-lockup-word" style={{ color: textColor }}>RAIL CO.</span>
    </div>
  )
}
