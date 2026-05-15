import React from "react"
import { motion } from "framer-motion"

const fadeUpItem = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
}

const leftStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.04 },
  },
}

const columnsReveal = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.02 },
  },
}

export default function Hero() {
  return (
    <section
      style={{
        backgroundColor: "#0c1220",
        backgroundImage: `
    linear-gradient(rgba(59, 130, 246, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.035) 1px, transparent 1px),
    linear-gradient(180deg, transparent 0%, rgba(10, 15, 24, 0.92) 100%),
    radial-gradient(ellipse 85% 55% at 50% -15%, rgba(59, 130, 246, 0.1), transparent)
  `,
        backgroundSize: "44px 44px, 44px 44px, 100% 100%, 100% 100%",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
        minHeight: "min(88vh, 760px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(2.75rem, 7vw, 5.25rem) clamp(1.25rem, 4vw, 2.5rem) clamp(3rem, 8vw, 5rem)",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, transparent 40%, rgba(59, 130, 246, 0.03) 50%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        variants={columnsReveal}
        initial="hidden"
        animate="visible"
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 1180,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "clamp(2rem, 5vw, 3.5rem)",
        }}
      >
        <motion.div
          variants={leftStagger}
          style={{
            flex: "1 1 min(100%, 380px)",
            maxWidth: 560,
            minWidth: 0,
          }}
        >
          <motion.div
            variants={fadeUpItem}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem 1rem",
              alignItems: "center",
              marginBottom: "1.35rem",
              padding: "0.55rem 0.85rem",
              borderRadius: 10,
              border: "1px solid rgba(148, 163, 184, 0.16)",
              background: "linear-gradient(90deg, rgba(59,130,246,0.06), rgba(255,255,255,0.02))",
            }}
          >
            {[
              ["FRA-informed", "review"],
              ["15+", "years in the field"],
              ["800+", "projects documented"],
              ["Class I", "rail alumni"],
            ].map(([stat, label], idx, arr) => (
              <React.Fragment key={stat + label}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.875rem", fontWeight: 800, letterSpacing: "-0.02em", color: "#f1f5fd" }}>
                    {stat}
                  </span>
                  <span style={{ fontSize: "0.75rem", fontWeight: 500, color: "#94a3b8" }}>{label}</span>
                </div>
                {idx < arr.length - 1 && (
                  <span
                    aria-hidden
                    style={{
                      color: "rgba(148, 163, 184, 0.28)",
                      fontWeight: 300,
                      fontSize: "1rem",
                      lineHeight: 1,
                      userSelect: "none",
                    }}
                  >
                    |
                  </span>
                )}
              </React.Fragment>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUpItem}
            style={{
              margin: "0 0 0.65rem",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#94a3b8",
            }}
          >
            Track inspections · Safety · Compliance
          </motion.p>
          <motion.h1
            variants={fadeUpItem}
            style={{
              margin: "0 0 1.1rem",
              fontSize: "clamp(1.9rem, 4.5vw, 2.85rem)",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#f1f5fd",
            }}
          >
            Rail Track Inspections Built for Industrial Sites
          </motion.h1>
          <motion.p
            variants={fadeUpItem}
            style={{
              margin: "0 0 1.65rem",
              fontSize: "clamp(1.02rem, 1.5vw, 1.1875rem)",
              lineHeight: 1.62,
              color: "#cbd5e1,
              fontWeight: 500,
              maxWidth: 540,
            }}
          >
            Professional inspections, clear reports, and actionable maintenance
            priorities for facilities that depend on safe rail operations.
          </motion.p>

          <motion.div
            variants={fadeUpItem}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.45rem 0.55rem",
              marginBottom: "1.85rem",
            }}
          >
            {[
              "FRA-informed review",
              "Switches • Crossings • Sidings",
              "Photo-documented findings",
            ].map((label) => (
              <span
                key={label}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.38rem 0.72rem",
                  borderRadius: 999,
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                  color: "#cbd5e1,
                  backgroundColor: "#151f36",
                  border: "1px solid rgba(148, 163, 184, 0.16)",
                  boxShadow: "0 1px 0 rgba(255,255,255,0.04) inset",
                }}
              >
                {label}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUpItem}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              marginBottom: "0.25rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.65rem",
                alignItems: "center",
              }}
            >
              <motion.a
                id="free-site-visit"
                href="#free-site-visit"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.9rem 1.35rem",
                  borderRadius: 9,
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "#fff",
                  background: `linear-gradient(180deg, #3b82f6 0%, #2563eb 100%)`,
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 6px 20px rgba(37, 99, 235, 0.38)",
                  cursor: "pointer",
                }}
              >
                Schedule your free site visit
              </motion.a>
              <motion.a
                id="sample-report"
                href="#sample-report"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.9rem 1.35rem",
                  borderRadius: 9,
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "#f1f5fd",
                  backgroundColor: "rgba(255,255,255,0.04)",
                  textDecoration: "none",
                  border: "1px solid rgba(148, 163, 184, 0.28)",
                  cursor: "pointer",
                }}
              >
                View sample report
              </motion.a>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.65rem 1.1rem",
                alignItems: "center",
              }}
            >
              <motion.a
                id="schedule"
                href="#schedule"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.65rem 0",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#60a5fa",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(96, 165, 250, 0.45)",
                  cursor: "pointer",
                }}
              >
                Schedule a formal inspection
              </motion.a>
              <a
                href="tel:+17043210802"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#cbd5e1,
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                }}
              >
                Or call <span style={{ color: "#f1f5fd" }}>(704) 321-0802</span>
              </a>
            </div>
          </motion.div>

          <motion.p
            variants={fadeUpItem}
            style={{
              margin: "1.35rem 0 0",
              fontSize: "0.8125rem",
              color: "#94a3b8",
              lineHeight: 1.55,
              maxWidth: 500,
            }}
          >
            Reduce derailment exposure with documented findings, prioritized
            repairs, and inspection records your safety and compliance teams can
            rely on.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeUpItem}
          style={{
            flex: "1 1 min(100%, 320px)",
            maxWidth: 440,
            width: "100%",
            minWidth: 0,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={{
              borderRadius: 12,
              backgroundColor: "#111a2d",
              border: "1px solid rgba(148, 163, 184, 0.16)",
              boxShadow:
                "0 24px 48px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.03) inset",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.85rem 1rem",
                borderBottom: "1px solid rgba(148, 163, 184, 0.16)",
                background: "linear-gradient(180deg, rgba(255,255,255,0.04), transparent)",
              }}
            >
              <span
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#94a3b8",
                }}
              >
                Inspection summary
              </span>
              <span
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  padding: "0.2rem 0.5rem",
                  borderRadius: 4,
                  color: "#22c55e",
                  backgroundColor: "rgba(34, 197, 94, 0.12)",
                  border: "1px solid rgba(34, 197, 94, 0.25)",
                }}
              >
                Report ready
              </span>
            </div>

            <div style={{ padding: "1rem 1rem 1.1rem" }}>
              <div style={{ marginBottom: "1rem" }}>
                <div
                  style={{
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: "rgba(148, 163, 184, 0.2)",
                    width: "55%",
                    marginBottom: 8,
                  }}
                />
                <div
                  style={{
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: "rgba(148, 163, 184, 0.12)",
                    width: "88%",
                    marginBottom: 6,
                  }}
                />
                <div
                  style={{
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: "rgba(148, 163, 184, 0.12)",
                    width: "72%",
                  }}
                />
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.65rem",
                  marginBottom: "1rem",
                }}
              >
                {[
                  { label: "Critical", value: "0", tone: "#94a3b8" },
                  { label: "Priority", value: "2", tone: "#f59e0b" },
                  { label: "Monitor", value: "5", tone: "#3b82f6" },
                  { label: "Clear", value: "14", tone: "#22c55e" },
                ].map((cell) => (
                  <div
                    key={cell.label}
                    style={{
                      padding: "0.65rem 0.7rem",
                      borderRadius: 8,
                      backgroundColor: "#151f36",
                      border: "1px solid rgba(148, 163, 184, 0.16)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.625rem",
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        color: "#94a3b8",
                        marginBottom: 4,
                      }}
                    >
                      {cell.label}
                    </div>
                    <div
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: cell.tone,
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {cell.value}
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  color: "#94a3b8",
                  marginBottom: 8,
                  letterSpacing: "0.02em",
                }}
              >
                Maintenance priority (example)
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {[
                  { w: "100%", c: "rgba(245, 158, 11, 0.35)" },
                  { w: "78%", c: "rgba(59, 130, 246, 0.35)" },
                  { w: "62%", c: "rgba(148, 163, 184, 0.25)" },
                  { w: "45%", c: "rgba(148, 163, 184, 0.18)" },
                ].map((bar, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      delay: 0.45 + i * 0.08,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: bar.c,
                      width: bar.w,
                      transformOrigin: "left center",
                    }}
                  />
                ))}
              </div>

              <div
                style={{
                  marginTop: "1rem",
                  paddingTop: "0.85rem",
                  borderTop: "1px dashed rgba(148, 163, 184, 0.16)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 6,
                    backgroundColor: "rgba(59, 130, 246, 0.15)",
                    border: `1px solid rgba(59, 130, 246, 0.25)`,
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "#f1f5fd",
                      marginBottom: 2,
                    }}
                  >
                    Photo-documented finding
                  </div>
                  <div style={{ fontSize: "0.6875rem", color: "#94a3b8", lineHeight: 1.4 }}>
                    GPS-tagged imagery with measurements and recommended follow-up
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
