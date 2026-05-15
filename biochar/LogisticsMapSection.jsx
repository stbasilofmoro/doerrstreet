import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { theme, motionDefaults } from "./theme"

const hubs = [
  { id: "a", cx: 118, cy: 198, label: "Rotterdam" },
  { id: "b", cx: 280, cy: 168, label: "Duisburg" },
  { id: "c", cx: 420, cy: 220, label: "Vienna" },
  { id: "d", cx: 540, cy: 120, label: "Gdansk" },
  { id: "e", cx: 680, cy: 260, label: "Constanța" },
]

export function LogisticsMapSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="logistics"
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
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.15fr)",
            gap: 40,
            alignItems: "center",
          }}
          className="biochar-esg-grid"
        >
          <div>
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
              Logistics
            </p>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                margin: "0 0 20px 0",
              }}
            >
              Intermodal network across core European industrial corridors.
            </h2>
            <p style={{ margin: 0, color: theme.textMuted, lineHeight: 1.65, fontSize: 15, maxWidth: 440 }}>
              River barge, rail, and coastal bulk routes connect pyrolysis sites to ports and inland terminals —
              minimizing road miles and enabling just-in-time silo replenishment for high-volume customers.
            </p>
            <ul
              style={{
                margin: "28px 0 0",
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {["Bulk pneumatic & tipping trucks", "ISO tank + container options", "24/7 dispatch telemetry"].map(
                (t) => (
                  <li
                    key={t}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize: 14,
                      color: theme.text,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: 2,
                        background: theme.accent,
                        flexShrink: 0,
                      }}
                    />
                    {t}
                  </li>
                ),
              )}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={motionDefaults.viewport}
            transition={{ ...motionDefaults.transition, duration: 0.75 }}
            style={{
              borderRadius: theme.radius,
              border: `1px solid ${theme.border}`,
              background: `linear-gradient(145deg, ${theme.surface} 0%, ${theme.bg} 100%)`,
              padding: "20px 20px 12px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                background: `radial-gradient(ellipse 70% 50% at 50% 100%, ${theme.accentSoft}, transparent 70%)`,
                pointerEvents: "none",
              }}
            />
            <svg
              viewBox="0 0 800 360"
              role="img"
              aria-label="Stylized map of European logistics hubs and shipping routes"
              style={{ width: "100%", height: "auto", display: "block", position: "relative" }}
            >
              <defs>
                <linearGradient id="biochar-route" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={theme.accent} stopOpacity="0" />
                  <stop offset="40%" stopColor={theme.accent} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={theme.ember} stopOpacity="0.4" />
                </linearGradient>
                <filter id="biochar-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <g opacity="0.35" stroke={theme.borderStrong} strokeWidth="0.6" fill="none">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <line key={i} x1={i * 110} y1="0" x2={i * 110 + 80} y2="360" />
                ))}
                {[0, 1, 2, 3, 4].map((i) => (
                  <line key={`h-${i}`} x1="0" y1={i * 90} x2="800" y2={i * 90 + 40} />
                ))}
              </g>

              <path
                d="M40 320 Q200 260 380 240 T720 200 L760 140"
                fill="none"
                stroke="url(#biochar-route)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="8 10"
                style={{
                  animation: reduce ? "none" : "biochar-line-drift 14s linear infinite",
                }}
              />
              <path
                d="M80 80 Q260 140 420 180 T680 260"
                fill="none"
                stroke={theme.borderStrong}
                strokeWidth="1.2"
                strokeDasharray="4 8"
                opacity="0.6"
                style={{
                  animation: reduce ? "none" : "biochar-line-drift 20s linear infinite reverse",
                }}
              />

              <path
                d="M60 300 C140 200 220 120 400 100 S620 80 740 120 L720 200 L600 260 L420 280 L240 300 Z"
                fill={theme.surfaceMuted}
                stroke={theme.border}
                strokeWidth="1"
                opacity="0.85"
              />

              {hubs.map((h, i) => (
                <g key={h.id} filter="url(#biochar-glow)">
                  <circle cx={h.cx} cy={h.cy} r="10" fill={theme.surface} stroke={theme.accent} strokeWidth="2" />
                  <circle cx={h.cx} cy={h.cy} r="4" fill={theme.accent}>
                    {!reduce && (
                      <animate
                        attributeName="opacity"
                        values="0.45;1;0.45"
                        dur={`${2.4 + i * 0.25}s`}
                        repeatCount="indefinite"
                      />
                    )}
                  </circle>
                </g>
              ))}
            </svg>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                padding: "8px 4px 8px",
                position: "relative",
              }}
            >
              {hubs.map((h) => (
                <span
                  key={h.id}
                  style={{
                    fontFamily: theme.mono,
                    fontSize: 11,
                    color: theme.textMuted,
                    padding: "4px 10px",
                    borderRadius: 6,
                    border: `1px solid ${theme.border}`,
                    background: theme.surfaceMuted,
                  }}
                >
                  {h.label}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
