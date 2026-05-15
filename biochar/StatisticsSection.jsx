import * as React from "react"
import {
  motion,
  useMotionValue,
  useTransform,
  useInView,
  animate,
  useMotionValueEvent,
} from "framer-motion"
import { theme, motionDefaults } from "./theme"

function StatCard({ label, value, suffix, decimals = 0, delay = 0 }) {
  const ref = React.useRef(null)
  const inView = useInView(ref, { once: true, margin: "-15%" })
  const count = useMotionValue(0)
  const formatted = useTransform(count, (latest) =>
    decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toLocaleString(),
  )
  const [display, setDisplay] = React.useState(decimals > 0 ? (0).toFixed(decimals) : "0")

  React.useEffect(() => {
    if (!inView) return
    count.set(0)
    const controls = animate(count, value, {
      duration: 2.1,
      ease: [0.22, 1, 0.36, 1],
      delay,
    })
    return () => controls.stop()
  }, [inView, value, count, delay])

  useMotionValueEvent(formatted, "change", (v) => setDisplay(v))

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={motionDefaults.viewport}
      transition={{ ...motionDefaults.transition, delay }}
      style={{
        padding: "28px 24px",
        borderRadius: theme.radius,
        border: `1px solid ${theme.border}`,
        background: `linear-gradient(165deg, ${theme.surface} 0%, ${theme.surfaceMuted} 100%)`,
      }}
    >
      <div
        style={{
          fontFamily: theme.mono,
          fontSize: 11,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: theme.textDim,
          marginBottom: 12,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: "clamp(2rem, 4vw, 2.65rem)",
          fontWeight: 650,
          letterSpacing: "-0.03em",
          background: `linear-gradient(120deg, ${theme.text}, ${theme.accent})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {display}
        {suffix}
      </div>
    </motion.div>
  )
}

export function StatisticsSection() {
  return (
    <section
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
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 24,
            marginBottom: 48,
          }}
        >
          <div style={{ maxWidth: 520 }}>
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
              Performance
            </p>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Tonnes delivered. Carbon locked. Data verified.
            </h2>
          </div>
          <p style={{ margin: 0, color: theme.textMuted, maxWidth: 320, lineHeight: 1.6, fontSize: 15 }}>
            Figures represent illustrative operational targets for a multi-site deployment model.
          </p>
        </motion.div>

        <div
          className="biochar-stats-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 18,
          }}
        >
          <StatCard label="Annual production capacity" value={180} suffix="\u202fkt" delay={0} />
          <StatCard label="CO₂e avoided / stored" value={420} suffix="\u202fkt" delay={0.05} />
          <StatCard label="Average fixed carbon" value={82} suffix="%" decimals={0} delay={0.1} />
          <StatCard label="Dispatch reliability" value={99.2} suffix="%" decimals={1} delay={0.15} />
        </div>
      </div>
    </section>
  )
}
