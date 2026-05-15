import * as React from "react"
import { GlobalStyles } from "./GlobalStyles"
import { HeroSection } from "./HeroSection"
import { ProcessSection } from "./ProcessSection"
import { StatisticsSection } from "./StatisticsSection"
import { LogisticsMapSection } from "./LogisticsMapSection"
import { ESGSection } from "./ESGSection"
import { CTASection } from "./CTASection"
import { theme } from "./theme"

/**
 * Full premium landing page for an industrial biochar company.
 * Drop into Framer as a code component or compose sections individually.
 */
export default function BiocharLandingPage() {
  return (
    <div className="biochar-landing biochar-reduce-motion" style={{ minHeight: "100%", background: theme.bg }}>
      <GlobalStyles />
      <HeroSection />
      <ProcessSection />
      <StatisticsSection />
      <LogisticsMapSection />
      <ESGSection />
      <CTASection />
    </div>
  )
}
