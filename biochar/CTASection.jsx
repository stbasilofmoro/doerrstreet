import * as React from "react"
import { motion } from "framer-motion"
import { theme, motionDefaults } from "./theme"

export function CTASection() {
  return (
    <section
      id="cta"
      style={{
        padding: "clamp(80px, 12vw, 140px) clamp(24px, 5vw, 80px)",
        background: `radial-gradient(ellipse 80% 120% at 50% 120%, ${theme.accentSoft}, transparent 55%), ${theme.bgElevated}`,
      }}
    >
      <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={motionDefaults.viewport}
          transition={motionDefaults.transition}
        >
          <h2
            style={{
              fontSize: "clamp(1.85rem, 3.5vw, 2.5rem)",
              fontWeight: 650,
              letterSpacing: "-0.03em",
              margin: "0 0 18px 0",
            }}
          >
            Ready to spec your next biochar program?
          </h2>
          <p
            style={{
              margin: "0 auto 36px",
              maxWidth: 520,
              color: theme.textMuted,
              lineHeight: 1.65,
              fontSize: 16,
            }}
          >
            Share your volume curve, application, and certification needs — our technical team will return a
            tailored product brief and logistics window within five business days.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <a
              href="mailto:projects@example-biochar.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 32px",
                borderRadius: theme.radius,
                background: `linear-gradient(145deg, ${theme.accent}, #a8861f)`,
                color: theme.bg,
                fontWeight: 600,
                fontSize: 16,
                boxShadow: `0 16px 48px ${theme.accentGlow}`,
              }}
            >
              Email projects
            </a>
            <a
              href="#process"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 32px",
                borderRadius: theme.radius,
                border: `1px solid ${theme.borderStrong}`,
                color: theme.text,
                fontWeight: 500,
                fontSize: 16,
                background: "rgba(255,255,255,0.04)",
              }}
            >
              Review process again
            </a>
          </div>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={motionDefaults.viewport}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            marginTop: 72,
            paddingTop: 32,
            borderTop: `1px solid ${theme.border}`,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 20,
            fontFamily: theme.mono,
            fontSize: 12,
            color: theme.textDim,
            letterSpacing: "0.06em",
          }}
        >
          <span>© {new Date().getFullYear()} Industrial Biochar</span>
          <span style={{ opacity: 0.4 }}>|</span>
          <span>EU · UK · NA expansion</span>
          <span style={{ opacity: 0.4 }}>|</span>
          <span>ISO-aligned QMS</span>
        </motion.footer>
      </div>
    </section>
  )
}
