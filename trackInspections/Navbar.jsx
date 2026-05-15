import React from "react"
import { motion, AnimatePresence } from "framer-motion"

const routes = [
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/our-process", label: "Our Process" },
  { href: "/customer-login", label: "Customer Login" },
]

const easeOut = [0.22, 1, 0.36, 1]

function useNarrowNav() {
  const [narrow, setNarrow] = React.useState(false)
  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 960px)")
    const update = () => setNarrow(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])
  return narrow
}

export default function Navbar({ currentPath = "" }) {
  const narrow = useNarrowNav()
  const [open, setOpen] = React.useState(false)
  React.useEffect(() => {
    if (!narrow) setOpen(false)
  }, [narrow])

  const isActive = (href) => currentPath === href || currentPath.startsWith(href + "/")

  const linkRow = (
    <>
      {routes.map(({ href, label }) => {
        const active = isActive(href)
        return (
          <a
            key={href}
            href={href}
            style={{
              fontSize: "0.8125rem",
              fontWeight: 600,
              letterSpacing: "0.01em",
              color: active ? "#f1f5fd" : "#94a3b8",
              textDecoration: "none",
              padding: "0.35rem 0.5rem",
              borderRadius: 6,
              backgroundColor: active ? "rgba(59, 130, 246, 0.14)" : "transparent",
              border: active ? "1px solid rgba(59, 130, 246, 0.35)" : "1px solid transparent",
              transition: "color 0.15s ease, background-color 0.15s ease",
            }}
            onMouseEnter={(e) => {
              if (!active) e.currentTarget.style.color = "#cbd5e1"
            }}
            onMouseLeave={(e) => {
              if (!active) e.currentTarget.style.color = "#94a3b8"
            }}
          >
            {label}
          </a>
        )
      })}
    </>
  )

  const ctaCluster = (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem" }}>
      <motion.a
        href="/#sample-report"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0.55rem 0.9rem",
          borderRadius: 8,
          fontSize: "0.8125rem",
          fontWeight: 600,
          color: "#f1f5fd",
          textDecoration: "none",
          border: "1px solid rgba(148, 163, 184, 0.28)",
          backgroundColor: "rgba(255,255,255,0.03)",
        }}
      >
        View sample report
      </motion.a>
      <motion.a
        href="/#free-site-visit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0.55rem 1rem",
          borderRadius: 8,
          fontSize: "0.8125rem",
          fontWeight: 600,
          color: "#fff",
          textDecoration: "none",
          background: "linear-gradient(180deg, #3b82f6 0%, #2563eb 100%)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 4px 16px rgba(37, 99, 235, 0.35)",
        }}
      >
        Schedule free site visit
      </motion.a>
    </div>
  )

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 200,
        height: 72,
        borderBottom: "1px solid rgba(148, 163, 184, 0.16)",
        backgroundColor: "rgba(10, 15, 24, 0.82)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          height: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 clamp(1rem, 3vw, 1.5rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            color: "#f1f5fd",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: "linear-gradient(135deg, rgba(59, 130, 246, 0.14), rgba(255,255,255,0.04))",
              border: "1px solid rgba(59, 130, 246, 0.35)",
              display: "grid",
              placeItems: "center",
              fontSize: "0.65rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#60a5fa",
            }}
          >
            TI
          </span>
          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
            <span style={{ fontSize: "0.875rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
              TrackInspections
            </span>
            <span style={{ fontSize: "0.65rem", fontWeight: 600, color: "#94a3b8", letterSpacing: "0.04em" }}>
              Industrial rail inspections
            </span>
          </span>
        </a>

        {!narrow && (
          <nav
            aria-label="Primary"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.15rem",
              flex: 1,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {linkRow}
          </nav>
        )}

        {!narrow && ctaCluster}

        {narrow && (
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
            style={{
              width: 44,
              height: 44,
              borderRadius: 8,
              border: "1px solid rgba(148, 163, 184, 0.16)",
              backgroundColor: "#151f36",
              color: "#f1f5fd",
              cursor: "pointer",
              display: "grid",
              placeItems: "center",
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: "1.25rem", lineHeight: 1 }}>{open ? "×" : "≡"}</span>
          </button>
        )}
      </div>

      <AnimatePresence>
        {narrow && open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: easeOut }}
            style={{
              overflow: "hidden",
              borderBottom: "1px solid rgba(148, 163, 184, 0.16)",
              backgroundColor: "rgba(10, 15, 24, 0.96)",
            }}
          >
            <div
              style={{
                padding: "0.75rem 1rem 1.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.35rem",
                maxWidth: 1200,
                margin: "0 auto",
              }}
            >
              {routes.map(({ href, label }) => {
                const active = isActive(href)
                return (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      letterSpacing: "0.01em",
                      color: active ? "#f1f5fd" : "#94a3b8",
                      textDecoration: "none",
                      padding: "0.65rem 0.75rem",
                      borderRadius: 6,
                      backgroundColor: active ? "rgba(59, 130, 246, 0.14)" : "transparent",
                      border: active ? "1px solid rgba(59, 130, 246, 0.35)" : "1px solid transparent",
                      transition: "color 0.15s ease, background-color 0.15s ease",
                    }}
                  >
                    {label}
                  </a>
                )
              })}
              <div style={{ marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {ctaCluster}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
