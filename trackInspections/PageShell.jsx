import React from "react"
import { motion } from "framer-motion"
import Navbar from "./Navbar.jsx"

const easeOut = [0.22, 1, 0.36, 1]

export default function PageShell({ title, eyebrow, currentPath, children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        backgroundColor: "#0a0f18",
        color: "#f1f5fd",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "#0c1220",
          backgroundImage: `
    linear-gradient(rgba(59, 130, 246, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.035) 1px, transparent 1px),
    linear-gradient(180deg, transparent 0%, rgba(10, 15, 24, 0.92) 100%),
    radial-gradient(ellipse 85% 55% at 50% -15%, rgba(59, 130, 246, 0.1), transparent)
  `,
          backgroundSize: "44px 44px, 44px 44px, 100% 100%, 100% 100%",
          backgroundPosition: "center",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar currentPath={currentPath} />
        <main
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: `clamp(2rem, 5vw, 3.5rem) clamp(1.25rem, 4vw, 2rem) clamp(4rem, 8vw, 6rem)`,
          }}
        >
          <motion.header
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: easeOut }}
            style={{ marginBottom: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            {eyebrow && (
              <p
                style={{
                  margin: "0 0 0.5rem",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#94a3b8",
                }}
              >
                {eyebrow}
              </p>
            )}
            <h1
              style={{
                margin: 0,
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.12,
                color: "#f1f5fd",
              }}
            >
              {title}
            </h1>
          </motion.header>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.06, ease: easeOut }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  )
}
