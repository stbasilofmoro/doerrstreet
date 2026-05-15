import React from "react"
import { motion } from "framer-motion"
import PageShell from "./PageShell.jsx"

const easeOut = [0.22, 1, 0.36, 1]

const steps = [
  {
    n: "01",
    title: "Scope & access planning",
    body: "We align on track limits, safety rules, outage windows, and documentation expectations before boots hit ballast.",
  },
  {
    n: "02",
    title: "Field inspection",
    body: "Switches, crossings, sidings, and drainage context—photo-documented with measurements where it materially reduces risk.",
  },
  {
    n: "03",
    title: "Prioritized report",
    body: "Findings grouped by severity with recommended maintenance sequencing so your MOW budget lands in the right places.",
  },
  {
    n: "04",
    title: "Follow-through options",
    body: "Optional re-inspections, trending over time, and stakeholder readouts for operations and compliance leadership.",
  },
]

export default function OurProcessPage() {
  return (
    <PageShell
      currentPath="/our-process"
      eyebrow="Our process"
      title="A repeatable inspection workflow—built for industrial sites"
    >
      <p
        style={{
          margin: "0 0 2rem",
          maxWidth: 720,
          fontSize: "clamp(1.05rem, 2vw, 1.15rem)",
          lineHeight: 1.65,
          color: "#cbd5e1",
          fontWeight: 500,
        }}
      >
        The goal is simple: fewer surprises, clearer documentation, and a defensible record of what you knew—and when
        you acted.
      </p>

      <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
        {steps.map((step, i) => (
          <motion.li
            key={step.n}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ delay: i * 0.07, duration: 0.42, ease: easeOut }}
            style={{
              display: "grid",
              gridTemplateColumns: "auto minmax(0, 1fr)",
              gap: "clamp(1rem, 3vw, 1.5rem)",
              padding: "1.25rem 1.35rem",
              borderRadius: 14,
              border: "1px solid rgba(148, 163, 184, 0.16)",
              backgroundColor: "#111a2d",
            }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 800,
                letterSpacing: "0.08em",
                color: "#60a5fa",
                paddingTop: "0.15rem",
              }}
            >
              {step.n}
            </span>
            <div>
              <h2 style={{ margin: "0 0 0.5rem", fontSize: "1.1rem", fontWeight: 700, color: "#f1f5fd" }}>{step.title}</h2>
              <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.6, color: "#94a3b8" }}>{step.body}</p>
            </div>
          </motion.li>
        ))}
      </ol>

      <div style={{ marginTop: "2.5rem", display: "flex", flexWrap: "wrap", gap: "0.65rem", alignItems: "center" }}>
        <motion.a
          href="/#sample-report"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.75rem 1.2rem",
            borderRadius: 8,
            fontSize: "0.9375rem",
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
            padding: "0.75rem 1.2rem",
            borderRadius: 8,
            fontSize: "0.9375rem",
            fontWeight: 600,
            color: "#fff",
            textDecoration: "none",
            background: "linear-gradient(180deg, #3b82f6 0%, #2563eb 100%)",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 4px 16px rgba(37, 99, 235, 0.35)",
          }}
        >
          Schedule your free site visit
        </motion.a>
      </div>
    </PageShell>
  )
}
