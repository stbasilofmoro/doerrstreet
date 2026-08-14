import { LandingPage } from './LandingPage'

const PAGE = {
  seo: {
    title: 'Monthly Track Inspections | Recurring Railroad Inspection Programs',
    description: 'Monthly railroad track inspection programs for industrial facilities and private track owners. Consistent documentation, trend analysis, and continuous compliance across the Southeastern United States.',
    canonical: 'https://doerrstreetrailco.com/monthly-track-inspections',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Railroad Track Inspection',
      name: 'Monthly Track Inspections',
      description: 'Recurring monthly railroad track inspection programs providing ongoing compliance documentation and trend analysis for private track owners and industrial facilities.',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Doerr Street Rail Co',
        url: 'https://doerrstreetrailco.com',
        telephone: '+1-704-321-0802',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Weddington',
          addressRegion: 'NC',
          postalCode: '28104',
          addressCountry: 'US',
        },
      },
      areaServed: 'Southeastern United States',
    },
  },
  hero: {
    title: 'Monthly Track Inspection Programs',
    subtitle: 'Consistent documentation. Continuous compliance. A program built around your operation.',
  },
  sections: [
    {
      type: 'intro',
      body: [
        'A single track inspection gives you a snapshot. A monthly inspection program gives you something considerably more valuable: a documented record of your track\'s condition over time. That record demonstrates a proactive maintenance posture to Class I railroads, federal inspectors, insurance carriers, and liability attorneys — all of whom may eventually have a reason to examine what you knew and when you knew it.',
        'Doerr Street Rail Co builds recurring track inspection programs for industrial facilities, private track owners, and short-line operators who recognize that compliance is an ongoing obligation, not a one-time event. Our monthly programs are structured, consistent, and designed to integrate with your maintenance scheduling rather than disrupt your operations. Every visit follows the same documented methodology. Every report is comparable to the one before it.',
      ],
    },
    {
      type: 'trust',
      items: [
        { value: 'Monthly', label: 'Inspection Cadence' },
        { value: 'Written', label: 'Report Each Visit' },
        { value: 'FRA', label: 'Certified Inspectors' },
        { value: 'Trend', label: 'Analysis Included' },
      ],
    },
    {
      type: 'two-col',
      heading: 'How a Monthly Inspection Program Works',
      body: [
        'Every monthly inspection follows the same documented methodology: a full FRA-standard track walk, measurement of key parameters at required intervals, defect identification and classification per 49 CFR Part 213, and a written report delivered within 48 hours of the field visit. Findings are compared against prior reports to track trends — whether conditions are improving, worsening, or holding steady.',
        'Programs are built to your schedule. If your facility is most accessible on specific days of the month, or if your operations have seasonal patterns that affect track use and maintenance access, we structure the inspection calendar around those realities. The goal is a program your team can actually operate and rely on, not an ideal schedule that creates operational friction every month.',
      ],
      listHeading: 'What Each Monthly Report Includes',
      items: [
        'Full FRA-standard track walk documentation',
        'Rail condition, surface, and wear measurements',
        'Tie count and condition by 39-foot segment',
        'Ballast condition, fouling level, and drainage status',
        'Switch and turnout condition with throw confirmation',
        'Defect classification per 49 CFR Part 213',
        'Month-over-month comparison and trend notes',
        'Recommended maintenance actions with priority ranking',
      ],
    },
    {
      type: 'features',
      heading: 'The Value of Monthly Inspection Programs',
      subheading: 'Compliance is not a moment. It is a practice.',
      items: [
        {
          title: 'Continuous Compliance History',
          body: 'A consistent monthly inspection record demonstrates that you take track maintenance seriously. That documented history carries weight in Class I audit conversations, federal inquiries, insurance reviews, and legal proceedings — far more than a single inspection ever could.',
        },
        {
          title: 'Early Trend Detection',
          body: 'Monthly comparison data reveals patterns that a single inspection cannot capture. Rail wear progression, recurring surface defects, ballast deterioration trends, and developing gage issues are only visible across multiple data points over time.',
        },
        {
          title: 'Maintenance Budget Predictability',
          body: 'When you know the condition of your track month by month, capital expenditures stop being surprises. Monthly inspection programs enable predictable maintenance scheduling and informed budget forecasting for the fiscal year ahead.',
        },
        {
          title: 'Class I Audit Readiness',
          body: 'When your Class I railroad schedules a compliance audit of your track, you want to present a binder of monthly inspection reports — not attempt to explain why you have never had a professional inspection conducted.',
        },
        {
          title: 'Defect Interruption',
          body: 'Finding defects at 30-day intervals means small problems get addressed before they become large ones. Deferred defects compound — ballast fouling accelerates tie deterioration, which accelerates gage deviation. Monthly inspection interrupts that cycle.',
        },
        {
          title: 'Reduced Liability Exposure',
          body: 'A documented inspection program is one of the most effective risk management tools available to private track owners. It establishes a continuous record of responsible stewardship that speaks for itself if an incident ever occurs on your track.',
        },
      ],
    },
    {
      type: 'text',
      heading: 'Why Inspection Programs Break Down — and What That Costs',
      body: [
        'Most facilities that lack a consistent inspection history didn\'t start out intending to skip inspections. They had one done, maybe two, then operations got busy, priorities shifted, and the next inspection kept getting deferred. Two years later the track has drifted from its last documented state, and there\'s no record of what happened in between. When a Class I conductor refuses a car spot or a federal inspector shows up following an unrelated complaint, the absence of a documented maintenance record is a significant problem.',
        'The cost of a monthly inspection program is small relative to the cost of a single compliance-forced remediation project, a derailment investigation, or a Class I restriction on interchange. Facilities that run consistent inspection programs spend less on emergency maintenance, not more — because they catch deterioration before it reaches the remediation threshold. The question is not whether your track needs inspection. The question is whether you want to find out what it needs on your schedule or someone else\'s.',
      ],
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          q: 'How often should private industrial track be inspected?',
          a: 'The appropriate frequency depends on the volume of car movements, the condition of the track, and the complexity of your operation. For active industrial sidings receiving regular car spots, monthly inspection is the most defensible cadence. Less active track may support quarterly inspection. We recommend starting with a baseline inspection and discussing program frequency based on what we find.',
        },
        {
          q: 'What is the difference between a monthly program and scheduling inspections as needed?',
          a: 'An as-needed approach means inspections happen when someone remembers to schedule them — which typically means after a problem has already been noticed. A monthly program means inspection happens on a defined calendar regardless of whether anything has been visually observed. The compliance documentation that results from a regular program is meaningfully different from a series of reactive one-off reports.',
        },
        {
          q: 'Do monthly report findings carry forward from month to month?',
          a: 'Yes. Each monthly report references prior findings, documents whether previously identified deficiencies have been remediated, and notes any changes in condition. The comparative structure of our reporting is one of its most useful features — it lets you see your track\'s trajectory, not just its current condition.',
        },
        {
          q: 'Can we start a monthly program after a compliance problem has already been identified?',
          a: 'Absolutely. Starting a documented inspection program after receiving a Class I deficiency notice or FRA citation is a positive step that demonstrates a good-faith commitment to compliance going forward. We will document the current condition, track remediation progress, and build the consistent inspection history that protects your operation from this point forward.',
        },
        {
          q: 'Are monthly programs available for short-line railroad operators?',
          a: 'Yes. We build monthly inspection programs for short-line carriers as well as industrial track owners. Short-line operators have FRA inspection obligations as carriers, and a documented inspection program administered by an independent certified inspector complements those obligations and provides an additional layer of compliance documentation.',
        },
      ],
    },
  ],
  cta: {
    heading: 'Set Up a Monthly Track Inspection Program',
    sub: 'Contact us to discuss your facility\'s track and what a structured monthly inspection program looks like for your operation, your schedule, and your compliance objectives.',
  },
}

export function MonthlyTrackInspectionsPage({ onNavigate }) {
  return <LandingPage {...PAGE} onNavigate={onNavigate} />
}
