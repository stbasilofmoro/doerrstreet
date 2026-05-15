import React from "react"
import { motion } from "framer-motion"
import PageShell from "./PageShell.jsx"

const easeOut = [0.22, 1, 0.36, 1]

export default function CustomerLoginPage() {
  return (
    <PageShell
      currentPath="/customer-login"
      eyebrow="Customer portal"
      title="Sign in to your inspection workspace"
    >
      <p
        style={{
          margin: "0 0 1.75rem",
          maxWidth: 560,
          fontSize: "1rem",
          lineHeight: 1.65,
          color: "#cbd5e1",
        }}
      >
        Access reports, photo packages, and maintenance priorities for your facilities. Wire this form to your auth
        provider in Framer or your backend.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: easeOut }}
        style={{
          maxWidth: 420,
          padding: "1.5rem",
          borderRadius: 14,
          border: "1px solid rgba(148, 163, 184, 0.16)",
          backgroundColor: "#111a2d",
          boxShadow: "0 24px 48px rgba(0,0,0,0.35)",
        }}
      >
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.4rem",
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "#cbd5e1",
            }}
          >
            Work email
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@company.com"
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "0.7rem 0.85rem",
                borderRadius: 8,
                border: "1px solid rgba(148, 163, 184, 0.28)",
                backgroundColor: "#151f36",
                color: "#f1f5fd",
                fontSize: "0.9375rem",
                outline: "none",
              }}
            />
          </label>
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.4rem",
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "#cbd5e1",
            }}
          >
            Password
            <input
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="••••••••"
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "0.7rem 0.85rem",
                borderRadius: 8,
                border: "1px solid rgba(148, 163, 184, 0.28)",
                backgroundColor: "#151f36",
                color: "#f1f5fd",
                fontSize: "0.9375rem",
                outline: "none",
              }}
            />
          </label>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            style={{
              marginTop: "0.25rem",
              padding: "0.85rem 1rem",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.12)",
              fontSize: "0.9375rem",
              fontWeight: 600,
              color: "#fff",
              cursor: "pointer",
              background: "linear-gradient(180deg, #3b82f6 0%, #2563eb 100%)",
              boxShadow: "0 4px 16px rgba(37, 99, 235, 0.35)",
            }}
          >
            Sign in
          </motion.button>
        </form>
        <p style={{ margin: "1rem 0 0", fontSize: "0.8125rem", color: "#94a3b8", lineHeight: 1.5 }}>
          <a href="/#free-site-visit" style={{ color: "#60a5fa", fontWeight: 600, textDecoration: "none" }}>
            Need access?
          </a>{" "}
          Request a portal invite after your first inspection kickoff.
        </p>
      </motion.div>
    </PageShell>
  )
}
