import * as React from "react"
import { theme } from "./theme"

export function GlobalStyles() {
  return (
    <style>{`
      @keyframes biochar-gradient-shift {
        0%, 100% { opacity: 0.45; transform: scale(1) translate(0, 0); }
        50% { opacity: 0.65; transform: scale(1.05) translate(-1%, 1%); }
      }
      @keyframes biochar-line-drift {
        0% { stroke-dashoffset: 0; }
        100% { stroke-dashoffset: -24; }
      }
      @keyframes biochar-pulse {
        0%, 100% { opacity: 0.35; }
        50% { opacity: 0.85; }
      }
      .biochar-landing {
        font-family: ${theme.font};
        color: ${theme.text};
        background: ${theme.bg};
        -webkit-font-smoothing: antialiased;
      }
      .biochar-landing *, .biochar-landing *::before, .biochar-landing *::after {
        box-sizing: border-box;
      }
      .biochar-landing a { color: inherit; text-decoration: none; }
      .biochar-grid-bg {
        background-image:
          linear-gradient(${theme.border} 1px, transparent 1px),
          linear-gradient(90deg, ${theme.border} 1px, transparent 1px);
        background-size: 48px 48px;
        mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 75%);
      }
      @media (max-width: 900px) {
        .biochar-process-grid { grid-template-columns: 1fr !important; }
        .biochar-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        .biochar-esg-grid { grid-template-columns: 1fr !important; }
        .biochar-hero-title { font-size: clamp(2rem, 8vw, 2.75rem) !important; }
      }
      @media (max-width: 520px) {
        .biochar-stats-grid { grid-template-columns: 1fr !important; }
        .biochar-hero-actions { flex-direction: column !important; width: 100%; }
        .biochar-hero-actions a, .biochar-hero-actions button { width: 100%; text-align: center; }
      }
      @media (prefers-reduced-motion: reduce) {
        .biochar-reduce-motion * {
          animation-duration: 0.001ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.001ms !important;
        }
      }
    `}</style>
  )
}
