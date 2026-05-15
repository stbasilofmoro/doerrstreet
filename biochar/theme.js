/** Design tokens — dark industrial / premium biochar */
export const theme = {
  bg: "#050506",
  bgElevated: "#0b0c0f",
  surface: "#111318",
  surfaceMuted: "#161a22",
  border: "rgba(201, 162, 39, 0.14)",
  borderStrong: "rgba(201, 162, 39, 0.28)",
  text: "#f0eeeb",
  textMuted: "rgba(240, 238, 235, 0.62)",
  textDim: "rgba(240, 238, 235, 0.38)",
  accent: "#c9a227",
  accentSoft: "rgba(201, 162, 39, 0.15)",
  accentGlow: "rgba(201, 162, 39, 0.35)",
  ember: "#8b5a2b",
  steel: "#6b7280",
  success: "#5c8f6e",
  font:
    '"Inter", "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  mono: '"JetBrains Mono", "SF Mono", Consolas, monospace',
  radius: 14,
  maxWidth: 1180,
}

export const motionDefaults = {
  viewport: { once: true, margin: "-12% 0px" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
}
