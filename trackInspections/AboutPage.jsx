import React from "react"
import { motion, useReducedMotion } from "framer-motion"

const serifDisplay =
  '"Cormorant Garamond", "Libre Baskerville", Georgia, "Times New Roman", serif'
const serifBody = '"Newsreader", "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif'
const sansNote = '"Source Sans 3", "Franklin Gothic Medium", "Arial Narrow", system-ui, sans-serif'

const oliveDeep = "#1e2214"
const olive = "#2f341f"
const oliveMid = "#3d4428"
const brass = "#b8943f"
const brassLight = "#d4b56a"
const cream = "#f2ead8"
const creamMuted = "#d9cdb0"
const ink = "#14120d"
const paper = "#ebe3d2"

const slowEase = [0.33, 1, 0.32, 1]
const slowerEase = [0.22, 1, 0.45, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.15, ease: slowEase },
  },
}

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.12 },
  },
}

const timelineEntries = [
  {
    year: "1940s",
    title: "Foundations",
    text: "Basil Sr. carried Carpathian Rusyn values into American rail work—discipline, precision, and respect for the line as livelihood. Nights on extra gangs taught him that a mile of good track is built one tie plate at a time, and that pride shows up in the details no passenger ever sees.",
  },
  {
    year: "1960s–80s",
    title: "Polivka International",
    text: "The family name became synonymous with tireless field service across Class I systems—bridges, yards, and the unglamorous miles between. From curve elevation notes to timber bridge stringers, the work was often uncelebrated and always consequential: keep freight moving, keep crews safe, keep the railroad’s word to its customers.",
  },
  {
    year: "1990s–2000s",
    title: "Industrial rail",
    text: "Attention shifted toward rail-served plants: sidings, switches, and the private track where FRA context still matters—and documentation is everything. Plant managers needed someone who could translate gauge face wear and joint bar fatigue into maintenance windows that respected production schedules, not just rulebook citations.",
  },
  {
    year: "Today",
    title: "Doerr St. Rail Co. · TrackInspections",
    text: "The same multigenerational ethic, focused on industrial facilities: inspections that read like engineering truth, not marketing copy. Whether you move chemicals, forest products, steel, or inbound raw materials, we treat your spur like the lifeline it is—photographed, measured, and prioritized for the people who will fix it.",
  },
]

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/our-process", label: "Our Process" },
  { href: "/customer-login", label: "Customer Login" },
]

function HeritageDivider({ style: outerStyle = {} }) {
  return (
    <div style={{ width: "100%", maxWidth: 420, ...outerStyle }} aria-hidden>
      <svg width="100%" height="22" viewBox="0 0 360 22" style={{ display: "block" }}>
        <line x1="0" y1="11" x2="150" y2="11" stroke={brass} strokeWidth="1" strokeOpacity="0.55" />
        <path
          d="M 168 4 L 180 11 L 168 18 L 156 11 Z M 180 4 L 192 11 L 180 18"
          fill="none"
          stroke={oliveMid}
          strokeWidth="0.9"
          strokeOpacity="0.7"
        />
        <line x1="210" y1="11" x2="360" y2="11" stroke={brass} strokeWidth="1" strokeOpacity="0.55" />
      </svg>
    </div>
  )
}

function HeroWatermark() {
  return (
    <svg viewBox="0 0 200 200" width="100%" height="100%" style={{ display: "block" }} aria-hidden>
      <circle cx="100" cy="100" r="88" fill="none" stroke={olive} strokeWidth="0.6" strokeOpacity="0.35" />
      <circle cx="100" cy="100" r="72" fill="none" stroke={brass} strokeWidth="0.5" strokeOpacity="0.4" />
      <path
        d="M 100 32 L 100 168 M 32 100 L 168 100 M 52 52 L 148 148 M 148 52 L 52 148"
        stroke={oliveMid}
        strokeWidth="0.45"
        strokeOpacity="0.3"
      />
      <path
        d="M 100 58 L 118 92 L 154 96 L 128 122 L 134 158 L 100 140 L 66 158 L 72 122 L 46 96 L 82 92 Z"
        fill="none"
        stroke={brass}
        strokeWidth="0.7"
        strokeOpacity="0.35"
      />
      <text
        x="100"
        y="108"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="22"
        fill={olive}
        fillOpacity="0.2"
        fontWeight="600"
      >
        DS
      </text>
    </svg>
  )
}

function TimelineGlyph({ index }) {
  const vb = "0 0 40 40"
  const stroke = brass
  const o = oliveMid
  if (index === 0) {
    return (
      <svg width="40" height="40" viewBox={vb} aria-hidden style={{ flexShrink: 0, opacity: 0.9 }}>
        <circle cx="20" cy="20" r="18" fill="rgba(242,234,216,0.5)" stroke={stroke} strokeWidth="0.8" />
        <path d="M 12 26 L 20 12 L 28 26 M 14 22 L 26 22" fill="none" stroke={o} strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    )
  }
  if (index === 1) {
    return (
      <svg width="40" height="40" viewBox={vb} aria-hidden style={{ flexShrink: 0, opacity: 0.9 }}>
        <rect x="4" y="4" width="32" height="32" rx="2" fill="none" stroke={stroke} strokeWidth="0.7" />
        <path d="M 8 28 Q 20 8 32 28" fill="none" stroke={o} strokeWidth="1.1" strokeLinecap="round" />
        <line x1="10" y1="30" x2="30" y2="30" stroke={o} strokeWidth="0.8" />
      </svg>
    )
  }
  if (index === 2) {
    return (
      <svg width="40" height="40" viewBox={vb} aria-hidden style={{ flexShrink: 0, opacity: 0.9 }}>
        <path d="M 8 28 L 14 14 L 26 14 L 32 28 Z" fill="none" stroke={o} strokeWidth="1" strokeLinejoin="round" />
        <line x1="12" y1="22" x2="28" y2="22" stroke={stroke} strokeWidth="0.7" />
        <rect x="17" y="22" width="6" height="8" fill="none" stroke={o} strokeWidth="0.6" />
      </svg>
    )
  }
  return (
    <svg width="40" height="40" viewBox={vb} aria-hidden style={{ flexShrink: 0, opacity: 0.9 }}>
      <circle cx="20" cy="20" r="17" fill="none" stroke={stroke} strokeWidth="0.8" />
      <path d="M 12 20 L 18 26 L 30 14" fill="none" stroke={o} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArchivalPlate({ graphicIndex }) {
  const vb = "0 0 100 125"
  const rail = olive
  const tie = oliveMid
  const hi = brass
  let inner = null
  if (graphicIndex === 1) {
    inner = (
      <g>
        <line x1="12" y1="95" x2="88" y2="95" stroke={rail} strokeWidth="2.2" strokeLinecap="round" />
        <line x1="12" y1="102" x2="88" y2="102" stroke={rail} strokeWidth="2.2" strokeLinecap="round" />
        <path d="M 50 95 L 38 55 L 50 48 L 62 55 Z" fill="none" stroke={hi} strokeWidth="1" strokeOpacity="0.75" />
        <line x1="50" y1="48" x2="50" y2="30" stroke={tie} strokeWidth="1" />
        <line x1="22" y1="78" x2="78" y2="72" stroke={tie} strokeWidth="0.6" strokeOpacity="0.5" />
        <line x1="22" y1="85" x2="78" y2="79" stroke={tie} strokeWidth="0.6" strokeOpacity="0.5" />
      </g>
    )
  } else if (graphicIndex === 2) {
    inner = (
      <g>
        <line x1="15" y1="88" x2="85" y2="88" stroke={rail} strokeWidth="2" />
        <line x1="15" y1="95" x2="85" y2="95" stroke={rail} strokeWidth="2" />
        <line x1="50" y1="35" x2="50" y2="108" stroke={tie} strokeWidth="1.8" strokeOpacity="0.55" />
        <rect x="28" y="62" width="44" height="20" fill="none" stroke={hi} strokeWidth="0.8" strokeOpacity="0.6" rx="1" />
        <path d="M 22 82 H 78" stroke={tie} strokeWidth="0.5" strokeDasharray="3 3" strokeOpacity="0.45" />
      </g>
    )
  } else {
    inner = (
      <g>
        <line x1="10" y1="88" x2="90" y2="88" stroke={rail} strokeWidth="2" />
        <line x1="10" y1="96" x2="90" y2="96" stroke={rail} strokeWidth="2" />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <line key={i} x1={14 + i * 10} y1="84" x2={14 + i * 10} y2="100" stroke={tie} strokeWidth="2.5" strokeOpacity="0.35" />
        ))}
        <rect x="38" y="52" width="24" height="8" fill="none" stroke={hi} strokeWidth="0.7" strokeOpacity="0.55" transform="rotate(-8 50 56)" />
      </g>
    )
  }
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        aspectRatio: "4 / 5",
        minHeight: 120,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(160deg, rgba(61,68,40,0.06) 0%, transparent 45%, rgba(184,148,63,0.08) 100%)`,
      }}
    >
      <svg viewBox={vb} width="88%" height="88%" style={{ maxHeight: 200 }} aria-hidden>
        <rect x="4" y="4" width="92" height="117" fill="rgba(255,255,255,0.12)" stroke={tie} strokeWidth="0.5" strokeOpacity="0.35" rx="1" />
        {inner}
      </svg>
    </div>
  )
}

function InspectionSeal() {
  return (
    <div style={{ margin: "2.5rem auto 0", maxWidth: 200, opacity: 0.88 }} aria-hidden>
      <svg viewBox="0 0 160 160" width="100%" style={{ display: "block" }}>
        <circle cx="80" cy="80" r="76" fill="none" stroke={brass} strokeWidth="1.2" strokeOpacity="0.5" />
        <circle cx="80" cy="80" r="64" fill="none" stroke={oliveMid} strokeWidth="0.6" strokeOpacity="0.45" />
        <path
          d="M 80 28 L 88 52 L 114 52 L 94 68 L 102 94 L 80 80 L 58 94 L 66 68 L 46 52 L 72 52 Z"
          fill="none"
          stroke={olive}
          strokeWidth="0.9"
          strokeOpacity="0.35"
        />
        <text x="80" y="118" textAnchor="middle" fontFamily="Georgia, serif" fontSize="9" letterSpacing="0.25em" fill={olive} fillOpacity="0.45">
          FIELD VERIFIED
        </text>
      </svg>
    </div>
  )
}

export default function AboutPage() {
  /* Framer canvas: scroll-based whileInView can leave variant "hidden" stuck (opacity 0).
     Section content uses initial="visible" + animate="visible" and mount-based path animations instead. */
  const reduceMotion = useReducedMotion()

  return (
    <div
      style={{
        width: "100%",
        minWidth: "100%",
        maxWidth: "100%",
        minHeight: "100vh",
        position: "relative",
        backgroundColor: oliveDeep,
        color: ink,
        overflowX: "hidden",
        fontFamily: serifBody,
        boxSizing: "border-box",
        alignSelf: "stretch",
        flex: "1 1 auto",
        display: "block",
      }}
    >
      {/* Paper base wash */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          background: `
            linear-gradient(165deg, ${cream} 0%, ${paper} 38%, ${creamMuted} 72%, #c4b89a 100%),
            radial-gradient(ellipse 90% 60% at 50% -10%, rgba(255,255,255,0.35), transparent 55%)
          `,
          opacity: 0.94,
        }}
      />

      {/* Linen / halftone texture */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          opacity: 0.085,
          mixBlendMode: "multiply",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />

      {/* Animated grain */}
      {!reduceMotion && (
        <motion.div
          aria-hidden
          initial={{ opacity: 0.035 }}
          animate={{ opacity: [0.028, 0.072, 0.038, 0.055, 0.032] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 2,
            mixBlendMode: "multiply",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23g)' opacity='0.65'/%3E%3C/svg%3E")`,
            backgroundSize: "220px 220px",
          }}
        />
      )}

      {/* Top vignette */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 3,
          background: "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(30,34,20,0.18), transparent 60%)",
        }}
      />

      <div style={{ position: "relative", zIndex: 4, width: "100%", minWidth: 0, boxSizing: "border-box" }}>
        {/* Heritage nav */}
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 40,
            width: "100%",
            boxSizing: "border-box",
            borderBottom: "1px solid rgba(74, 82, 48, 0.35)",
            backgroundColor: "rgba(235, 227, 210, 0.82)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <div
            style={{
              maxWidth: 1120,
              margin: "0 auto",
              width: "100%",
              boxSizing: "border-box",
              padding: "0.65rem clamp(1rem, 4vw, 2rem)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "0.75rem 1.25rem",
            }}
          >
            <a href="/" style={{ textDecoration: "none", color: ink }}>
              <span
                style={{
                  fontFamily: serifDisplay,
                  fontSize: "clamp(1.05rem, 2.5vw, 1.35rem)",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: olive,
                }}
              >
                Doerr St. Rail Co.
              </span>
              <span
                style={{
                  display: "block",
                  fontFamily: sansNote,
                  fontSize: "0.65rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: brass,
                  marginTop: 2,
                }}
              >
                TrackInspections
              </span>
            </a>
            <nav
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.35rem 1rem",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  style={{
                    fontFamily: sansNote,
                    fontSize: "0.72rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: l.href === "/about" ? olive : "#4a5230",
                    textDecoration: "none",
                    borderBottom: l.href === "/about" ? `1px solid ${brass}` : "1px solid transparent",
                    paddingBottom: 2,
                  }}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        {/* —— Hero —— */}
        <section
          style={{
            position: "relative",
            width: "100%",
            boxSizing: "border-box",
            minHeight: "min(78vh, 720px)",
            display: "flex",
            alignItems: "flex-end",
            padding: "clamp(3rem, 10vw, 7rem) clamp(1.25rem, 5vw, 3rem) clamp(4rem, 12vw, 8rem)",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              right: "clamp(0.5rem, 3vw, 2rem)",
              top: "clamp(2.5rem, 10vw, 6rem)",
              width: "min(38vw, 260px)",
              height: "min(38vw, 260px)",
              opacity: 0.1,
              pointerEvents: "none",
            }}
          >
            <HeroWatermark />
          </div>
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, ease: slowerEase }}
            style={{
              position: "absolute",
              inset: "clamp(1rem, 4vw, 2rem)",
              border: `1px solid rgba(184, 148, 63, 0.35)`,
              borderRadius: 2,
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative", maxWidth: 720 }}>
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.28em" }}
              transition={{ duration: 1.8, ease: slowEase }}
              style={{
                fontFamily: sansNote,
                fontSize: "0.68rem",
                textTransform: "uppercase",
                color: brass,
                margin: "0 0 1.5rem",
              }}
            >
              Heritage · Field · Family
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.35, delay: 0.2, ease: slowEase }}
              style={{
                fontFamily: serifDisplay,
                fontWeight: 500,
                fontSize: "clamp(2.75rem, 8vw, 4.75rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: olive,
                margin: "0 0 1.25rem",
              }}
            >
              Quiet hands on
              <br />
              hard rail.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.25, delay: 0.55, ease: slowEase }}
              style={{
                fontSize: "clamp(1.05rem, 2.2vw, 1.25rem)",
                lineHeight: 1.65,
                color: "#3a352c",
                maxWidth: 560,
                margin: "0 0 1.35rem",
              }}
            >
              Multigenerational railroad people serving rail-served industry across the Southeast—FRA-informed
              inspections, maintenance judgment, and the kind of documentation that holds up when it matters.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.85, ease: slowEase }}
              style={{
                fontSize: "clamp(0.98rem, 1.8vw, 1.08rem)",
                lineHeight: 1.72,
                color: "#4a453c",
                maxWidth: 580,
                margin: 0,
              }}
            >
              Doerr St. Rail Co. carries that lineage under the TrackInspections banner: walkouts at ladder tracks and team
              tracks, thermite welds at plant crossings, guardrail and derail placement where switching is tight, and
              drainage that quietly undermines ballast if nobody looks twice. We are not here to sell software—we are here
              to read the iron honestly.
            </motion.p>
          </div>
        </section>

        {/* Decorative rail lines (hero floor) */}
        <div style={{ width: "100%", maxWidth: 1120, margin: "0 auto", padding: "0 clamp(1.25rem, 5vw, 3rem) 3rem", boxSizing: "border-box" }}>
          <svg
            width="100%"
            height="120"
            viewBox="0 0 1000 120"
            preserveAspectRatio="none"
            style={{ display: "block", opacity: 0.85 }}
            aria-hidden
          >
            <motion.path
              d="M 0 60 Q 250 40 500 60 T 1000 58"
              fill="none"
              stroke={brass}
              strokeWidth="1.2"
              strokeOpacity="0.45"
              initial={reduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ pathLength: { duration: 2.8, ease: slowEase }, opacity: { duration: 1.2 } }}
            />
            <motion.path
              d="M 0 72 L 1000 70"
              fill="none"
              stroke={oliveMid}
              strokeWidth="0.8"
              strokeOpacity="0.35"
              initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ pathLength: { duration: 2.2, delay: 0.35, ease: slowEase } }}
            />
          </svg>
        </div>

        {/* —— Timeline —— */}
        <section
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "clamp(4rem, 12vw, 8rem) clamp(1.25rem, 5vw, 3rem)",
            backgroundColor: "rgba(46, 52, 31, 0.06)",
            borderTop: "1px solid rgba(74, 82, 48, 0.2)",
            borderBottom: "1px solid rgba(74, 82, 48, 0.2)",
          }}
        >
          <div style={{ maxWidth: 720, margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
            <motion.h2
              initial="visible"
              animate="visible"
              variants={fadeUp}
              style={{
                fontFamily: serifDisplay,
                fontSize: "clamp(1.85rem, 4vw, 2.65rem)",
                fontWeight: 500,
                color: olive,
                margin: "0 0 0.5rem",
                letterSpacing: "-0.01em",
              }}
            >
              Family railroad legacy
            </motion.h2>
            <motion.p
              initial="visible"
              animate="visible"
              variants={fadeUp}
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "#3d3a33",
                margin: "0 0 3.5rem",
                maxWidth: 520,
              }}
            >
              From Class I mainlines to industrial spurs—the through-line is workmanship passed down, not downloaded
              from a slide deck. Ours is a family story told in spike mauls, switch lists, and the stubborn belief that a
              customer’s private track deserves the same care as a subdivision on a Class I timetable—because the
              consequences of a missed defect weigh just as heavy at a plant gate.
            </motion.p>

            <HeritageDivider style={{ margin: "0 0 2.75rem" }} />

            <motion.div
              initial="visible"
              animate="visible"
              variants={stagger}
              style={{ position: "relative", paddingLeft: "clamp(2rem, 5vw, 3.35rem)" }}
            >
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  left: "0.35rem",
                  top: 6,
                  bottom: 6,
                  width: 1,
                  background: `linear-gradient(180deg, ${brass} 0%, rgba(184,148,63,0.25) 100%)`,
                }}
              />
              {timelineEntries.map((entry, i) => (
                <motion.article
                  key={entry.year}
                  variants={fadeUp}
                  style={{
                    marginBottom: i === timelineEntries.length - 1 ? 0 : "2.75rem",
                    paddingLeft: "0.5rem",
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <TimelineGlyph index={i} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                  <span
                    style={{
                      fontFamily: sansNote,
                      fontSize: "0.7rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: brass,
                    }}
                  >
                    {entry.year}
                  </span>
                  <h3
                    style={{
                      fontFamily: serifDisplay,
                      fontSize: "1.45rem",
                      fontWeight: 600,
                      color: olive,
                      margin: "0.35rem 0 0.65rem",
                    }}
                  >
                    {entry.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: "1rem", lineHeight: 1.75, color: "#3a362e", maxWidth: 540 }}>
                    {entry.text}
                  </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* —— Why we inspect differently + archival —— */}
        <section style={{ width: "100%", boxSizing: "border-box", padding: "clamp(4rem, 12vw, 9rem) clamp(1.25rem, 5vw, 3rem)", margin: 0 }}>
          <HeritageDivider style={{ margin: "0 auto 2.5rem", display: "flex", justifyContent: "center" }} />
          <motion.div
            initial="visible"
            animate="visible"
            variants={stagger}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: "clamp(2rem, 6vw, 4rem)",
              alignItems: "start",
            }}
          >
            <motion.div variants={fadeUp}>
              <h2
                style={{
                  fontFamily: serifDisplay,
                  fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)",
                  fontWeight: 500,
                  color: olive,
                  margin: "0 0 1.25rem",
                  lineHeight: 1.15,
                }}
              >
                Why we inspect differently
              </h2>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#3a362e", margin: "0 0 1.25rem" }}>
                Industrial sidings do not forgive shortcuts. Gauge, tie condition, switch points, and drainage at
                crossings—these details decide whether a plant stays online or explains a derailment to insurers and
                regulators. A hot box on a mainline makes headlines; a split switch in a chemical lead makes nightmares.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#3a362e", margin: "0 0 1.25rem" }}>
                We write for the people who live with the track: maintenance managers, EHS leads, and the crews who will
                actually swing the tools. FRA-informed framing, yes—but always translated into priorities you can
                sequence with a calendar and a budget. When we flag a gage restraint concern at a No. 8 turnout, we pair
                it with context: traffic density, last surfacing cycle, and whether you are running six-axle units on a
                curve that was never designed for them.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#3a362e", margin: 0 }}>
                Rail-served facilities ask for practical language: where to spot-face a frog, when to replace shoulder
                ballast, how to phase tie gangs around receiving hours. We deliver reports that read like field notes from
                people who have stood in the same mud you stand in—because we have.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {[
                { cap: "Fig. 1", sub: "Switch heel, industrial lead — gauge line and closure rail wear" },
                { cap: "Fig. 2", sub: "Crossing approach, plant gate — flangeway depth and asphalt edge" },
                { cap: "Fig. 3", sub: "Run-around siding — tie plate cant and spike back-out pattern" },
              ].map((fig, idx) => (
                <motion.figure
                  key={fig.cap}
                  initial={{ opacity: 0.2, rotate: idx === 0 ? -1.2 : 1.2 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 1.4, delay: idx * 0.15, ease: slowEase }}
                  style={{
                    margin: 0,
                    padding: "0.65rem 0.65rem 0.85rem",
                    backgroundColor: cream,
                    border: "1px solid rgba(74, 82, 48, 0.25)",
                    boxShadow: "4px 6px 0 rgba(30, 34, 20, 0.08), inset 0 0 0 1px rgba(255,255,255,0.25)",
                  }}
                >
                  <ArchivalPlate graphicIndex={idx + 1} />
                  <figcaption
                    style={{
                      fontFamily: sansNote,
                      fontSize: "0.65rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: brass,
                      marginTop: "0.65rem",
                    }}
                  >
                    {fig.cap}
                  </figcaption>
                  <p style={{ margin: "0.35rem 0 0", fontSize: "0.82rem", lineHeight: 1.45, color: "#4a453c" }}>
                    {fig.sub}
                  </p>
                </motion.figure>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* —— Geographic coverage —— */}
        <section
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "clamp(4rem, 11vw, 8rem) clamp(1.25rem, 5vw, 3rem)",
            backgroundColor: "rgba(30, 34, 20, 0.04)",
            borderTop: "1px solid rgba(74, 82, 48, 0.18)",
          }}
        >
          <div style={{ maxWidth: 960, margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
            <motion.h2
              initial="visible"
              animate="visible"
              variants={fadeUp}
              style={{
                fontFamily: serifDisplay,
                fontSize: "clamp(1.75rem, 3.5vw, 2.35rem)",
                fontWeight: 500,
                color: olive,
                margin: "0 0 0.75rem",
              }}
            >
              Geographic coverage
            </motion.h2>
            <HeritageDivider style={{ margin: "0 0 1.5rem" }} />
            <motion.p
              initial="visible"
              animate="visible"
              variants={fadeUp}
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: "#3a362e",
                margin: "0 0 1rem",
                maxWidth: 560,
              }}
            >
              Industrial sidings from the Piedmont to the coastal plain—where rail-served facilities need inspectors who
              understand both FRA context and the rhythms of plant operations. We routinely work around receiving windows,
              unit-train cycles, and the quiet reality that many industrial lines carry more tonnage per foot than their
              original charts assumed.
            </motion.p>
            <motion.p
              initial="visible"
              animate="visible"
              variants={fadeUp}
              style={{
                fontSize: "1.02rem",
                lineHeight: 1.78,
                color: "#3a362e",
                margin: "0 0 1.25rem",
                maxWidth: 620,
              }}
            >
              Typical engagements include paper mills and packaging plants, bulk transload pads, metals and scrap
              processors, chemical and plastics producers, and inbound aggregate for ready-mix. If your facility has a
              ladder track, a house track, or a captive switcher, we speak that vocabulary fluently.
            </motion.p>
            <motion.p
              initial="visible"
              animate="visible"
              variants={fadeUp}
              style={{
                fontSize: "1.02rem",
                lineHeight: 1.78,
                color: "#4a453c",
                margin: "0 0 2.5rem",
                maxWidth: 600,
                fontStyle: "italic",
              }}
            >
              Travel radius is discussed on a project basis—what matters most is that we arrive prepared: calibrated tools,
              clear PPE expectations, and a shared understanding of who owns each foot of track before we step on it.
            </motion.p>
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: slowEase }}
              style={{
                position: "relative",
                border: "1px solid rgba(184, 148, 63, 0.3)",
                backgroundColor: "rgba(242, 234, 216, 0.5)",
                padding: "clamp(1rem, 3vw, 1.75rem)",
                borderRadius: 2,
              }}
            >
              <svg
                viewBox="0 0 900 420"
                width="100%"
                height="auto"
                style={{ display: "block", maxHeight: 440 }}
                role="img"
                aria-label="Stylized map of the Southeastern United States with service corridors"
              >
                <rect width="900" height="420" fill="rgba(235, 227, 210, 0.6)" />
                {/* Simplified coast / region outlines */}
                <motion.path
                  d="M 120 80 L 180 70 L 260 95 L 320 140 L 340 220 L 300 300 L 220 360 L 140 340 L 80 260 Z"
                  fill="none"
                  stroke={oliveMid}
                  strokeWidth="1"
                  strokeOpacity="0.35"
                  initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3.2, ease: slowEase }}
                />
                <motion.path
                  d="M 400 100 L 520 85 L 640 120 L 720 200 L 780 280 L 740 360 L 620 380 L 480 340 L 420 220 Z"
                  fill="rgba(184, 148, 63, 0.12)"
                  stroke={brass}
                  strokeWidth="1.2"
                  strokeOpacity="0.55"
                  initial={reduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2.6, delay: 0.2, ease: slowEase }}
                />
                {/* Corridor lines */}
                <motion.path
                  d="M 100 200 Q 280 160 450 210 T 820 240"
                  fill="none"
                  stroke={brass}
                  strokeWidth="1.5"
                  strokeDasharray="6 10"
                  strokeOpacity="0.5"
                  initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3.4, delay: 0.45, ease: slowerEase }}
                />
                <motion.path
                  d="M 140 320 Q 400 280 680 300"
                  fill="none"
                  stroke={olive}
                  strokeWidth="1"
                  strokeOpacity="0.28"
                  initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.9, delay: 0.65, ease: slowEase }}
                />
                <g fill={brass} fillOpacity="0.55" stroke="none">
                  <circle cx="280" cy="175" r="4" />
                  <circle cx="520" cy="195" r="3.5" />
                  <circle cx="680" cy="288" r="4" />
                  <circle cx="180" cy="310" r="3" />
                </g>
                <g fill="none" stroke={oliveMid} strokeWidth="0.6" strokeOpacity="0.4">
                  <path d="M 60 120 L 60 135 M 53 127 L 67 127" />
                  <path d="M 780 140 L 780 155 M 773 147 L 787 147" />
                </g>
              </svg>
              <p
                style={{
                  fontFamily: sansNote,
                  fontSize: "0.68rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: brass,
                  margin: "1rem 0 0",
                  textAlign: "center",
                }}
              >
                Illustrative map · Replace with your production artwork in Framer
              </p>
            </motion.div>
          </div>
        </section>

        {/* —— Philosophy / safety —— */}
        <section style={{ width: "100%", boxSizing: "border-box", padding: "clamp(4rem, 12vw, 9rem) clamp(1.25rem, 5vw, 3rem)", margin: 0 }}>
          <div style={{ maxWidth: 800, margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
          <motion.p
            initial="visible"
            animate="visible"
            variants={fadeUp}
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.78,
              color: "#3a362e",
              margin: "0 0 2.25rem",
              maxWidth: 640,
            }}
          >
            Safety standards are not an abstract poster on a wall—they are the sum of small decisions made under pressure:
            whether to defer a joint bar, whether to re-gauge after heavy switching, whether to believe a drainage ditch
            that “usually” handles a spring storm. Our philosophy is conservative where risk concentrates and pragmatic
            where budgets and uptime must coexist.
          </motion.p>

          <HeritageDivider style={{ margin: "0 0 2rem" }} />

          <motion.blockquote
            initial="visible"
            animate="visible"
            variants={fadeUp}
            style={{
              margin: "0 0 3rem",
              padding: "0 0 0 clamp(0rem, 3vw, 1.5rem)",
              borderLeft: `3px solid ${brass}`,
              fontFamily: serifDisplay,
              fontSize: "clamp(1.35rem, 3vw, 1.85rem)",
              lineHeight: 1.45,
              fontStyle: "italic",
              color: olive,
            }}
          >
            &ldquo;Hard work was instilled into the bones of our family. That same ethic drives every inspection we
            complete today.&rdquo;
          </motion.blockquote>

          <InspectionSeal />

          <motion.h2
            initial="visible"
            animate="visible"
            variants={fadeUp}
            style={{
              fontFamily: serifDisplay,
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 500,
              color: olive,
              margin: "0 0 1.5rem",
            }}
          >
            Philosophy & safety standards
          </motion.h2>
          <motion.ul
            initial="visible"
            animate="visible"
            variants={stagger}
            style={{
              margin: 0,
              padding: 0,
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "1.35rem",
            }}
          >
            {[
              "Photo-documented findings at switches, crossings, and sidings—so maintenance and compliance share one truth.",
              "FRA-informed review: we speak the language of defect prioritization without turning your report into fear-mongering.",
              "Rail-served facilities first: we respect gate rules, outage windows, and the fact that your track is not a photo set.",
              "Clear sequencing for tie programs, ballast sections, and geometry holds—written for crews who will execute the work.",
              "Derailment risk reduction through plain language: we separate what must stop traffic from what can ride until the next planned outage.",
              "MOW coordination notes—clip spacing, anchor patterns, and resurfacing history—so your contractor bids against reality, not assumptions.",
              "Crossing surface and highway interface context for public crossings adjacent to plant property, including joint maintenance expectations with local road authorities when applicable.",
            ].map((item, idx) => (
              <motion.li
                key={idx}
                variants={fadeUp}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "1rem",
                  alignItems: "start",
                }}
              >
                <span
                  aria-hidden
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: brass,
                    marginTop: "0.45rem",
                    opacity: 0.85,
                  }}
                />
                <span style={{ fontSize: "1.02rem", lineHeight: 1.75, color: "#3a362e" }}>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
          </div>
        </section>

        {/* —— CTA —— */}
        <section
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "clamp(3.5rem, 10vw, 6rem) clamp(1.25rem, 5vw, 3rem)",
            background: `linear-gradient(180deg, ${olive} 0%, ${oliveDeep} 100%)`,
            color: cream,
            borderTop: `1px solid rgba(212, 181, 106, 0.25)`,
          }}
        >
          <motion.div
            initial="visible"
            animate="visible"
            variants={stagger}
            style={{
              maxWidth: 720,
              margin: "0 auto",
              width: "100%",
              boxSizing: "border-box",
              textAlign: "center",
            }}
          >
            <HeritageDivider style={{ margin: "0 auto 1.75rem", maxWidth: 320, display: "flex", justifyContent: "center" }} />
            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: serifDisplay,
                fontWeight: 500,
                fontSize: "clamp(1.65rem, 3.5vw, 2.35rem)",
                margin: "0 0 1rem",
                color: cream,
                letterSpacing: "-0.01em",
              }}
            >
              Invite us to walk your line
            </motion.h2>
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "rgba(242, 234, 216, 0.82)",
                margin: "0 0 1rem",
              }}
            >
              Schedule a free site visit or request a sample inspection report—no theatrics, just an honest conversation
              about what your rail needs next. Bring your last MOW spreadsheet, your switch diagrams, or simply a notepad:
              we will meet you where you are.
            </motion.p>
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.65,
                color: "rgba(242, 234, 216, 0.65)",
                margin: "0 0 2.25rem",
              }}
            >
              Prefer the phone? Call{" "}
              <a href="tel:+17043210802" style={{ color: brassLight, textDecoration: "none", borderBottom: "1px solid rgba(212,181,106,0.45)" }}>
                (704) 321-0802
              </a>{" "}
              and ask for field scheduling. Typical response within one business day for new facility inquiries across the
              Southeast.
            </motion.p>
            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <motion.a
                href="/#free-site-visit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.95rem 1.75rem",
                  fontFamily: sansNote,
                  fontSize: "0.72rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: oliveDeep,
                  background: `linear-gradient(180deg, ${brassLight} 0%, ${brass} 100%)`,
                  border: "1px solid rgba(255,255,255,0.15)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
                }}
              >
                Schedule free site visit
              </motion.a>
              <motion.a
                href="/#sample-report"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.95rem 1.5rem",
                  fontFamily: sansNote,
                  fontSize: "0.72rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: cream,
                  border: "1px solid rgba(242, 234, 216, 0.35)",
                  backgroundColor: "rgba(255,255,255,0.04)",
                }}
              >
                View sample report
              </motion.a>
            </motion.div>
            <motion.p
              variants={fadeUp}
              style={{
                margin: "2rem 0 0",
                fontFamily: sansNote,
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(242, 234, 216, 0.55)",
              }}
            >
              Doerr St. Rail Co. · TrackInspections · Southeastern United States
            </motion.p>
          </motion.div>
        </section>

      </div>
    </div>
  )
}
