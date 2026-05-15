import * as React from "react"
import { motion } from "framer-motion"
import { theme, motionDefaults } from "./theme"

const pillars = [
  {
    title: "Climate integrity",
    body: "MRV-aligned sampling plans, third-party verification pathways, and conservative baselines for crediting where applicable.",
  },
  {
    title: "Community & safety",
    body: "Local air-quality monitoring, noise enclosures, and transparent stakeholder engagement around each production envelope.",
  },
  {
    title: "Circular inputs",
    body: "Preference for residues and co-products that do not compete with food systems — documented chain-of-custody from source.",
  },
]

const metrics = [
  { k: "Renewable process heat", v: "On-site recovery" },
  { k: "Water intensity", v: "Closed-loop cooling" },
  { k: "Dust & emissions", v: "Baghouse + CEMS" },
  { k: "Worker training", v: "Annual HAZOP drills" },
]

export function ESGSection() {
  return (
    <section
      id="esg"
      style={{
        padding: "clamp(72px, 10vw, 120px) clamp(24px, 5vw, 80px)",
        borderBottom: `1px solid ${theme.border}`,
        background: theme.bg,
      }}
    >
      <div style={{ maxWidth: theme.maxWidth, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={motionDefaults.viewport}
          transition={motionDefaults.transition}
          style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 56px" }}
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
            ESG & responsibility
          </p>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              margin: "0 0 16px 0",
            }}
          >
            Industrial scale without industrial compromise.
          </h2>
          <p style={{ margin: 0, color: theme.textMuted, lineHeight: 1.65, fontSize: 15 }}>
            Biochar is only as credible as the operation behind it. Our governance stack aligns engineering,
            environment, and reporting under one accountable program office.
          </p>
        </motion.div>

        <div
          className="biochar-esg-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 28,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {pillars.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={motionDefaults.viewport}
                transition={{ ...motionDefaults.transition, delay: i * 0.07 }}
                style={{
                  padding: "24px 26px",
                  borderRadius: theme.radius,
                  border: `1px solid ${theme.border}`,
                  background: theme.surface,
                }}
              >
                <h3 style={{ margin: "0 0 10px", fontSize: "1.05rem", fontWeight: 600 }}>{p.title}</h3>
                <p style={{ margin: 0, color: theme.textMuted, lineHeight: 1.65, fontSize: 15 }}>{p.body}</p>
              </motion.article>
            ))}
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={motionDefaults.viewport}
            transition={{ ...motionDefaults.transition, delay: 0.12 }}
            style={{
              borderRadius: theme.radius,
              border: `1px solid ${theme.borderStrong}`,
              background: `linear-gradient(160deg, ${theme.surfaceMuted} 0%, ${theme.bgElevated} 55%, ${theme.surface} 100%)`,
              padding: "28px 26px",
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            <div
              style={{
                fontFamily: theme.mono,
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: theme.accent,
                marginBottom: 20,
              }}
            >
              Facility standards snapshot
            </div>
            {metrics.map((m, idx) => (
              <div
                key={m.k}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 16,
                  padding: "14px 0",
                  borderTop: idx === 0 ? "none" : `1px solid ${theme.border}`,
                  fontSize: 14,
                }}
              >
                <span style={{ color: theme.textMuted }}>{m.k}</span>
                <span style={{ color: theme.text, fontWeight: 500, textAlign: "right" }}>{m.v}</span>
              </div>
            ))}
            <div
              style={{
                marginTop: 22,
                padding: "14px 16px",
                borderRadius: 10,
                background: theme.accentSoft,
                border: `1px solid ${theme.border}`,
                fontSize: 13,
                color: theme.textMuted,
                lineHeight: 1.55,
              }}
            >
              <span style={{ color: theme.success, fontWeight: 600 }}>Disclosure:</span> Full ESG data pack
              available under NDA for offtake and project finance diligence.
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
