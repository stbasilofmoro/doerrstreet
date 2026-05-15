import * as React from "react"
import { motion } from "framer-motion"
import { theme, motionDefaults } from "./theme"

const steps = [
  {
    n: "01",
    title: "Feedstock intake",
    body: "Certified biomass streams — forestry residues, agricultural co-products, and controlled waste wood — screened for contaminants and moisture-balanced for stable pyrolysis.",
  },
  {
    n: "02",
    title: "High-temperature pyrolysis",
    body: "Continuous kiln systems reach optimal residence time and temperature bands to maximize fixed carbon, surface area, and agronomic performance per batch.",
  },
  {
    n: "03",
    title: "Quality & certification",
    body: "In-line analytics plus third-party sampling for IBI / EBC-aligned properties — pH, ash, H:Corg, PAH — with digital batch passports tied to each tonne.",
  },
  {
    n: "04",
    title: "Deployment",
    body: "Bulk silo, intermodal, and pneumatic delivery options with chain-of-custody documentation for soil programs, materials blending, and carbon removal reporting.",
  },
]

export function ProcessSection() {
  return (
    <section
      id="process"
      style={{
        padding: "clamp(72px, 10vw, 120px) clamp(24px, 5vw, 80px)",
        borderBottom: `1px solid ${theme.border}`,
        background: theme.bgElevated,
      }}
    >
      <div style={{ maxWidth: theme.maxWidth, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={motionDefaults.viewport}
          transition={motionDefaults.transition}
          style={{ maxWidth: 560, marginBottom: 56 }}
        >
          <p
            style={{
              fontFamily: theme.mono,
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: theme.accent,
              marginBottom: 14,
            }}
          >
            Process
          </p>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            From biomass to bankable carbon — controlled at every step.
          </h2>
        </motion.div>

        <div
          className="biochar-process-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: 24,
          }}
        >
          {steps.map((s, i) => (
            <motion.article
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={motionDefaults.viewport}
              transition={{ ...motionDefaults.transition, delay: i * 0.06 }}
              style={{
                padding: "28px 28px 32px",
                borderRadius: theme.radius,
                border: `1px solid ${theme.border}`,
                background: theme.surface,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "45%",
                  height: "100%",
                  background: `linear-gradient(110deg, transparent, ${theme.accentSoft})`,
                  opacity: 0.35,
                  pointerEvents: "none",
                }}
              />
              <span
                style={{
                  fontFamily: theme.mono,
                  fontSize: 13,
                  color: theme.textDim,
                  letterSpacing: "0.08em",
                }}
              >
                {s.n}
              </span>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 600, margin: "12px 0 12px", position: "relative" }}>
                {s.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: theme.textMuted,
                  lineHeight: 1.65,
                  fontSize: 15,
                  position: "relative",
                }}
              >
                {s.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
