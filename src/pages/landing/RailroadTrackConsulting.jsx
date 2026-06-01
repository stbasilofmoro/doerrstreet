import { LandingPage } from './LandingPage'

const PAGE = {
  seo: {
    title: 'Railroad Track Consulting | Industrial Rail Safety Programs',
    description: 'Railroad track consulting and rail safety program development for industrial facilities and private track owners. Class I alumni with 30+ years of field experience helping facilities build compliant, defensible track programs.',
    canonical: 'https://doerrstreetrailco.com/railroad-track-consulting',
  },
  hero: {
    title: 'Railroad Track Consulting',
    subtitle: 'Safety programs. Audit preparation. Infrastructure planning. Built on Class I experience.',
  },
  sections: [
    {
      type: 'intro',
      body: [
        'Most industrial facilities treat their railroad track reactively — responding to complaints from the Class I railroad, scrambling before an audit, or repairing track after an incident. A proactive track consulting relationship changes that dynamic entirely.',
        'Our railroad track consulting services help industrial facilities and private track owners build structured, documented track safety programs that satisfy federal standards, protect Class I interchange rights, and give facility management a clear view of their rail infrastructure — not just when something breaks, but all the time.',
      ],
    },
    {
      type: 'trust',
      items: [
        { value: '30+', label: 'Years Railroad Experience' },
        { value: 'Class I', label: 'Railroad Alumni' },
        { value: 'FRA', label: 'Part 213 Certified' },
        { value: 'SE', label: 'U.S. Coverage' },
      ],
    },
    {
      type: 'two-col',
      heading: 'What Railroad Track Consulting Includes',
      body: [
        'Effective track consulting begins with a thorough understanding of your current infrastructure — its condition, its history, and the regulatory and interchange requirements it must meet. From there, we build a practical program that your maintenance team can execute and your railroad partner can respect.',
        'We work with facility engineers, plant managers, and railroad right-of-entry personnel to develop inspection schedules, remediation priorities, maintenance documentation systems, and long-range capital planning frameworks for your rail infrastructure.',
      ],
      listHeading: 'Consulting Services',
      items: [
        'Track condition baseline assessment',
        'FRA compliance gap analysis',
        'Track safety program development',
        'Inspection schedule and frequency planning',
        'Maintenance documentation systems',
        'Class I interchange audit preparation',
        'Capital planning and remediation prioritization',
        'Incident investigation support',
      ],
    },
    {
      type: 'features',
      heading: 'Where Our Consulting Adds the Most Value',
      subheading: 'Turning reactive track management into a structured program',
      items: [
        {
          title: 'Facilities Facing Class I Audits',
          body: 'When your railroad schedules a track audit, we prepare your facility — reviewing defect history, prioritizing visible remediation, and coaching your team on what to expect.',
        },
        {
          title: 'Post-Incident Recovery',
          body: 'After a derailment, slow order, or federal citation, we help facilities rebuild their track program and demonstrate good-faith remediation to regulators and insurers.',
        },
        {
          title: 'Capital Budget Planning',
          body: 'Facilities planning multi-year track rehabilitation programs need an objective assessment of what needs replacement now versus what can be maintained. We provide that analysis.',
        },
        {
          title: 'New Rail Service Development',
          body: 'Facilities adding or expanding rail service need track consulting from day one — from specification review through pre-acceptance inspection before Class I operations begin.',
        },
        {
          title: 'Ongoing Safety Program Management',
          body: 'For facilities without in-house railroad expertise, we serve as the external track safety resource — conducting periodic inspections, producing documentation, and advising on maintenance decisions.',
        },
        {
          title: 'Acquisition Due Diligence',
          body: 'Facilities acquiring rail-served industrial properties benefit from an independent track inspection and condition report before closing — knowing the true state of the rail infrastructure before it becomes your liability.',
        },
      ],
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          q: 'When is consulting the right choice versus simply scheduling an inspection?',
          a: 'An inspection answers the question: what is the current condition of my track? Consulting answers broader questions: what should I do about it, in what order, over what timeline, and with what budget? If you have specific decisions to make — a capital investment, a Class I negotiation, a maintenance program to build from scratch — consulting adds a strategic layer that a standard inspection report does not provide.',
        },
        {
          q: 'How long does a consulting engagement take from start to written report?',
          a: 'Duration depends on scope. A focused engagement — such as capital prioritization for a single siding — may take one to two weeks. A broader program development engagement covering a multi-track facility or short-line operation may take three to five weeks. We establish timeline expectations before beginning every engagement, so you know when to expect deliverables.',
        },
        {
          q: 'Can you help us respond to a Class I deficiency notice?',
          a: 'Yes. When a Class I railroad issues a deficiency notice, your response needs to be specific, timely, and documented. We review the notice, inspect the referenced track, confirm the accuracy and classification of cited deficiencies, prioritize remediation, and help prepare the written response your railroad requires. Moving quickly and decisively in response to a Class I notice protects your service relationship.',
        },
        {
          q: 'Do you work with insurance companies or legal counsel on track-related matters?',
          a: 'Our inspection documentation is used by insurance companies, risk managers, and legal counsel in various contexts — claims, liability assessments, and dispute resolution. We produce reports with the documentation quality those audiences require. We also consult directly with legal teams and insurers when our inspection findings are relevant to a matter. We recommend discussing specific legal or insurance applications with us before an engagement begins.',
        },
        {
          q: 'What does a track safety program look like for a mid-size industrial facility?',
          a: 'A practical track safety program for a mid-size facility typically includes: a documented inspection schedule (quarterly or semi-annual), a written report for each inspection visit, a deficiency tracking system that records open items and completed remediation, a Class I audit preparation protocol, and an annual capital review that uses cumulative inspection data to plan maintenance expenditures. We design and implement programs like this as part of our ongoing consulting relationships.',
        },
      ],
    },
  ],
  cta: {
    heading: 'Talk to a Railroad Track Consultant',
    sub: 'Whether you need a one-time assessment or an ongoing consulting relationship, we can build a program that fits your facility and your budget.',
  },
}

export function RailroadTrackConsultingPage({ onNavigate }) {
  return <LandingPage {...PAGE} onNavigate={onNavigate} />
}
