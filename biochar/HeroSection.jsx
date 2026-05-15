import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { theme, motionDefaults } from "./theme"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: motionDefaults.viewport,
  transition: { ...motionDefaults.transition, delay },
})

export function HeroSection() {
  const reduce = useReducedMotion()

  return (
    <header
      className="biochar-reduce-motion"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "clamp(24px, 5vw, 80px)",
        overflow: "hidden",
        borderBottom: `1px solid ${theme.border}`,
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 120% 80% at 20% -10%, ${theme.accentSoft}, transparent 55%),
            radial-gradient(ellipse 90% 60% at 100% 20%, rgba(139, 90, 43, 0.12), transparent 50%),
            ${theme.bg}`,
        }}
      />
      <div
        className="biochar-grid-bg"
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.5,
          animation: reduce ? "none" : "biochar-gradient-shift 18s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: "auto 0 0 0",
          height: "40%",
          background: `linear-gradient(to top, ${theme.bg} 0%, transparent)`,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: theme.maxWidth, margin: "0 auto", width: "100%" }}>
        <motion.div
          {...fadeUp(0)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 14px",
            borderRadius: 999,
            border: `1px solid ${theme.border}`,
            background: theme.surfaceMuted,
            fontSize: 12,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: theme.accent,
            fontFamily: theme.mono,
            marginBottom: 28,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: theme.accent,
              boxShadow: `0 0 12px ${theme.accentGlow}`,
              animation: reduce ? "none" : "biochar-pulse 2.4s ease-in-out infinite",
            }}
          />
          Industrial biochar
        </motion.div>

        <motion.h1
          className="biochar-hero-title"
          {...fadeUp(0.08)}
          style={{
            fontSize: "clamp(2.5rem, 5.5vw, 3.75rem)",
            fontWeight: 650,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: 920,
            margin: "0 0 24px 0",
            background: `linear-gradient(135deg, ${theme.text} 0%, ${theme.textMuted} 45%, ${theme.accent} 120%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Carbon removal at industrial scale — engineered for permanence.
        </motion.h1>

        <motion.p
          {...fadeUp(0.14)}
          style={{
            fontSize: "clamp(1rem, 1.35vw, 1.2rem)",
            lineHeight: 1.65,
            color: theme.textMuted,
            maxWidth: 620,
            marginBottom: 40,
          }}
        >
          We design, produce, and distribute certified biochar for soil enhancement, industrial
          feedstock, and durable carbon storage — with traceable logistics from kiln to customer.
        </motion.p>

        <motion.div
          className="biochar-hero-actions"
          {...fadeUp(0.2)}
          style={{ display: "flex", flexWrap: "wrap", gap: 14 }}
        >
          <a
            href="#cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px 26px",
              borderRadius: theme.radius,
              background: `linear-gradient(145deg, ${theme.accent}, #a8861f)`,
              color: theme.bg,
              fontWeight: 600,
              fontSize: 15,
              boxShadow: `0 12px 40px ${theme.accentGlow}`,
            }}
          >
            Request specification
          </a>
          <a
            href="#process"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px 26px",
              borderRadius: theme.radius,
              border: `1px solid ${theme.borderStrong}`,
              color: theme.text,
              fontWeight: 500,
              fontSize: 15,
              background: "rgba(255,255,255,0.03)",
            }}
          >
            View process
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={motionDefaults.viewport}
        transition={{ delay: 0.35, duration: 0.9 }}
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          color: theme.textDim,
          fontSize: 11,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          fontFamily: theme.mono,
        }}
      >
        Scroll
        <span
          style={{
            width: 1,
            height: 36,
            background: `linear-gradient(to bottom, ${theme.accent}, transparent)`,
          }}
        />
      </motion.div>
    </header>
  )
}
