import { LandingPage } from './LandingPage'

const PAGE = {
  seo: {
    title: 'FRA Track Inspection | 49 CFR Part 213 Compliance',
    description: 'Expert FRA track inspection services ensuring compliance with 49 CFR Part 213. Industrial facilities and private track owners trust our Class I-trained inspectors to document and resolve track defects before a federal inspector does.',
    canonical: 'https://doerrstreetrailco.com/fra-track-inspection',
  },
  hero: {
    title: 'FRA Track Inspection Services',
    subtitle: '49 CFR Part 213 compliance. Defect documentation. Remediation support.',
  },
  sections: [
    {
      type: 'intro',
      body: [
        'The Federal Railroad Administration\'s Track Safety Standards under 49 CFR Part 213 apply to far more track than most industrial operators realize. If a Class I railroad or short-line carrier operates over your private track — even infrequently — that track is subject to FRA inspection standards.',
        'Operating non-compliant track exposes your facility to federal citations, restriction of railroad interchange, and civil liability. Our FRA track inspection services keep industrial track owners ahead of the standard, not scrambling to catch up after a violation notice.',
      ],
    },
    {
      type: 'trust',
      items: [
        { value: 'FRA', label: 'Part 213 Certified' },
        { value: 'Class I', label: 'Railroad Alumni' },
        { value: '6', label: 'Track Classes Covered' },
        { value: '48hr', label: 'Report Turnaround' },
      ],
    },
    {
      type: 'two-col',
      heading: 'Understanding FRA Track Safety Standards',
      body: [
        'FRA Part 213 establishes minimum safety requirements for railroad track. Track is classified into Classes 1 through 6, with speed limits and geometric tolerances assigned to each class. Most industrial sidings and plant spurs operate as Class 1 or Class 2 track, but the defect standards still apply — and violations can trigger restricted operations or forced remediation on a federal timeline.',
        'Our inspectors hold FRA Part 213 certification and carry the same measurement tools and reporting methodology used by federal track inspectors. When we find a defect, we classify it exactly as a federal inspector would — so you know your true exposure.',
      ],
      listHeading: 'FRA Part 213 Inspection Elements',
      items: [
        'Rail wear measurement against Class-specific limits',
        'Tie condition per 39-foot segment standard',
        'Gage measurement at required intervals',
        'Surface and alignment deviation tolerance checks',
        'Joint bar condition and bolt count inspection',
        'Ballast condition and drainage assessment',
        'Switch stand and switch machine inspection',
        'Defect classification per FRA Part 213 Appendix A',
      ],
    },
    {
      type: 'features',
      heading: 'The Case for Independent FRA Inspections',
      subheading: 'Know your compliance status before the federal inspector does',
      items: [
        {
          title: 'Pre-Audit Preparation',
          body: 'Class I railroads conduct periodic compliance audits of track they operate over. Our pre-audit inspection finds and documents the same defects your railroad will find — giving you time to remediate on your terms.',
        },
        {
          title: 'Violation Remediation Support',
          body: 'If you\'ve already received a federal citation or Class I notice, we help you prioritize remediation, document completed repairs, and prepare for re-inspection.',
        },
        {
          title: 'Documented Defense Record',
          body: 'A written FRA-standard inspection report creates a documented record of good-faith maintenance effort — valuable in any liability situation involving track condition.',
        },
        {
          title: 'Ongoing Compliance Programs',
          body: 'Monthly or quarterly inspection programs ensure your track never drifts into violation between railroad audits. We build programs around your operational schedule.',
        },
        {
          title: 'Class I Interchange Protection',
          body: 'Class I railroads can restrict or terminate interchange over non-compliant private track. Our inspections protect your ability to receive and ship by rail.',
        },
        {
          title: 'Objective Third-Party Reporting',
          body: 'An independent inspection report carries weight that internal maintenance records do not — with regulators, insurers, and in contract disputes.',
        },
      ],
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          q: 'What exactly is 49 CFR Part 213?',
          a: '49 CFR Part 213 is the Federal Railroad Administration\'s Track Safety Standards regulation. It establishes minimum safety requirements for railroad track, organized by track class. Each class has specific geometric tolerances, tie condition requirements, rail wear limits, and other standards. If a carrier operates over track — including private industrial track — Part 213 applies.',
        },
        {
          q: 'Which FRA track class applies to my industrial siding?',
          a: 'Most industrial sidings and plant spurs operate as Class 1 or Class 2 track. Class 1 allows speeds up to 10 mph for freight trains; Class 2 allows up to 25 mph. The applicable class depends on the operating speed of car movements on your track. Even Class 1 track has specific tie, rail, gage, and surface standards that must be met.',
        },
        {
          q: 'What are the consequences of an FRA citation on my track?',
          a: 'An FRA citation for a track safety defect triggers a remediation requirement with a defined deadline. Failure to remediate by the deadline can result in service restriction — meaning the carrier must reduce operating speed or suspend operations over the defective section. Repeat violations or willful non-compliance can result in civil penalties. An independent inspection program reduces the likelihood of citations by identifying and addressing defects before the federal inspector does.',
        },
        {
          q: 'How do I know if my track is currently in violation of FRA standards?',
          a: 'Without a professional inspection, you may not know. Many track defects are not obvious to non-specialists. Rail wear, tie condition degradation, gage deviation, and ballast fouling all develop gradually and can reach violation thresholds without triggering visible problems. The only reliable way to know your compliance status is a professional inspection conducted by an FRA Part 213 certified inspector.',
        },
        {
          q: 'How frequently does the FRA inspect private industrial track?',
          a: 'FRA inspectors walk territory on a rotating schedule. Private industrial track may be inspected directly by federal inspectors, or it may be reviewed through the Class I railroad\'s own compliance program. There is no fixed schedule that a private track owner can rely on — the practical answer is that inspection can happen at any time, which is why maintaining a current inspection program on your own schedule is the responsible approach.',
        },
      ],
    },
  ],
  cta: {
    heading: 'Request an FRA Track Inspection',
    sub: 'Don\'t wait for a federal inspector to find what we can find first. Contact us to schedule an FRA-standard track inspection for your facility.',
  },
}

export function FRATrackInspectionPage({ onNavigate }) {
  return <LandingPage {...PAGE} onNavigate={onNavigate} />
}
