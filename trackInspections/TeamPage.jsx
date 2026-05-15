import React from "react"
import { motion } from "framer-motion"
import PageShell from "./PageShell.jsx"

const easeOut = [0.22, 1, 0.36, 1]

const roles = [
  {
    title: "Lead field inspector",
    bio: "Class I operations background; specializes in industrial sidings and switch geometry documentation.",
    tags: ["Track geometry", "Switch inspections"],
  },
  {
    title: "Program manager",
    bio: "Coordinates multi-site programs, report delivery, and maintenance priority workshops with your team.",
    tags: ["Reporting", "Stakeholder alignment"],
  },
  {
    title: "Safety & compliance liaison",
    bio: "Translates field findings into EHS-ready summaries and photo-documented evidence packages.",
    tags: ["FRA-informed", "Documentation"],
  },
  {
    title: "Client success",
    bio: "Onboards new facilities, schedules visits, and ensures deliverables match your internal standards.",
    tags: ["Scheduling", "Support"],
  },
]

export default function TeamPage() {
  return (
    <PageShell
      currentPath="/team"
      eyebrow="Team"
      title="People who have lived rail operations"
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
        You work with inspectors and program staff who understand plant rail—not generic checklists.
        Replace photos in Framer with your real headshots when ready.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1rem",
          marginBottom: "2.5rem",
        }}
      >
        {roles.map((person, i) => (
          <motion.article
            key={person.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: i * 0.05, duration: 0.4, ease: easeOut }}
            style={{
              borderRadius: 14,
              border: "1px solid rgba(148, 163, 184, 0.16)",
              backgroundColor: "#111a2d",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                aspectRatio: "4 / 3",
                background: "linear-gradient(145deg, #151f36 0%, #0a0f18 100%)",
                borderBottom: "1px solid rgba(148, 163, 184, 0.16)",
                display: "grid",
                placeItems: "center",
                color: "#94a3b8",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Photo placeholder
            </div>
            <div style={{ padding: "1.15rem 1.25rem 1.35rem", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              <h2 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 700, color: "#f1f5fd" }}>{person.title}</h2>
              <p style={{ margin: 0, fontSize: "0.9rem", lineHeight: 1.55, color: "#94a3b8" }}>{person.bio}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginTop: "0.25rem" }}>
                {person.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      padding: "0.25rem 0.5rem",
                      borderRadius: 999,
                      color: "#cbd5e1",
                      border: "1px solid rgba(148, 163, 184, 0.16)",
                      backgroundColor: "rgba(255,255,255,0.03)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div
        style={{
          padding: "1.5rem",
          borderRadius: 14,
          border: "1px solid rgba(148, 163, 184, 0.16)",
          background: "linear-gradient(90deg, rgba(59,130,246,0.08), transparent)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <div>
          <p style={{ margin: "0 0 0.35rem", fontWeight: 700, color: "#f1f5fd" }}>Want a walkthrough of our methodology?</p>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "#94a3b8", maxWidth: 520 }}>
            Book a short call or a free on-site visit—whichever fits your procurement process.
          </p>
        </div>
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
            flexShrink: 0,
          }}
        >
          Schedule free site visit
        </motion.a>
      </div>
    </PageShell>
  )
}
