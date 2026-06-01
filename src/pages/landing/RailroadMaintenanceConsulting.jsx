import { LandingPage } from './LandingPage'

const PAGE = {
  seo: {
    title: 'Railroad Maintenance Consulting | Track Infrastructure Planning & Advisory',
    description: 'Strategic railroad maintenance consulting for industrial facilities, private track owners, and short-line operators. Capital planning, maintenance scheduling, and track infrastructure advisory from Class I-trained professionals.',
    canonical: 'https://doerrstreetrailco.com/railroad-maintenance-consulting',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Railroad Maintenance Consulting',
      name: 'Railroad Maintenance Consulting',
      description: 'Strategic railroad track maintenance consulting services including capital planning, maintenance program development, and infrastructure advisory for industrial facilities and private track owners.',
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
    title: 'Railroad Maintenance Consulting',
    subtitle: 'Strategic guidance for track infrastructure capital planning, maintenance program development, and long-term compliance management.',
  },
  sections: [
    {
      type: 'intro',
      body: [
        'Track inspection tells you what your track needs. Railroad maintenance consulting helps you decide what to do about it — in what order, on what timeline, and with what budget. For industrial facility managers and private track owners who make capital decisions about rail infrastructure, that distinction matters enormously. A deficiency list without strategic guidance is just a list.',
        'Doerr Street Rail Co provides railroad maintenance consulting services that bridge the gap between inspection findings and capital investment decisions. Our consultants are Class I railroad alumni who have managed track programs on multi-hundred-mile systems. We bring that institutional knowledge to bear on the maintenance planning challenges faced by industrial facilities, private track owners, and short-line operators across the Southeastern United States.',
      ],
    },
    {
      type: 'trust',
      items: [
        { value: 'Class I', label: 'Program Experience' },
        { value: 'Capital', label: 'Planning Expertise' },
        { value: 'Written', label: 'Consulting Reports' },
        { value: '30+', label: 'Years Combined Experience' },
      ],
    },
    {
      type: 'two-col',
      heading: 'What Railroad Maintenance Consulting Delivers',
      body: [
        'Our consulting engagements begin with a thorough assessment of your track infrastructure and maintenance history. We review existing inspection reports, interview maintenance personnel, and conduct our own field evaluation. From that assessment we develop a structured consulting report that addresses your specific planning questions — capital prioritization, program design, vendor evaluation, or compliance strategy.',
        'Unlike an inspection report, which documents current conditions, a consulting report answers forward-looking questions. What do you need to spend over the next three years to maintain your track in compliance? Which deficiencies, if left unaddressed, will compound into larger capital problems? Where can deferred maintenance be safely tolerated, and where is delay creating compounding risk? These are the questions our consulting work is designed to answer.',
      ],
      listHeading: 'Consulting Services We Provide',
      items: [
        'Multi-year track capital expenditure planning',
        'Maintenance program design and scheduling',
        'Deficiency prioritization and remediation sequencing',
        'Contractor scope development and bid evaluation',
        'FRA compliance strategy and documentation planning',
        'Class I interchange requirement assessment',
        'Track asset condition assessments for property transactions',
        'Short-line track program advisory and review',
      ],
    },
    {
      type: 'features',
      heading: 'The Doerr Street Consulting Advantage',
      subheading: 'Experience managing track programs — not just inspecting them',
      items: [
        {
          title: 'Class I Management Background',
          body: 'Our consultants managed track programs at Class I railroads before working with industrial clients. They understand how deferred maintenance compounds, how capital programs are structured, and how Class I standards translate to industrial track environments.',
        },
        {
          title: 'Independent Perspective',
          body: 'We are not selling materials or construction services, so our consulting recommendations are not influenced by what we stand to sell. Our advice reflects what is actually best for your track and your maintenance budget.',
        },
        {
          title: 'Inspection-to-Consulting Continuity',
          body: 'When our inspection team has already documented your track condition, consulting work can build directly on that foundation without starting from scratch. The transition from inspection findings to consulting recommendations is seamless.',
        },
        {
          title: 'FRA Regulatory Fluency',
          body: 'Our consultants understand how federal track standards apply to your specific track classification and operational context. Compliance strategy recommendations are grounded in the actual regulatory framework, not general industry generalities.',
        },
        {
          title: 'Contractor Evaluation Support',
          body: 'We help clients develop maintenance scopes, review contractor bids, and evaluate whether proposed work addresses the underlying condition drivers — not just the visible symptoms. Informed bid evaluation prevents scope creep and budget overruns.',
        },
        {
          title: 'Property Transaction Support',
          body: 'Buyers and sellers of rail-served industrial properties need objective track condition assessments and capital obligation estimates. Our consulting reports provide the third-party documentation that supports informed transactional decisions.',
        },
      ],
    },
    {
      type: 'text',
      heading: 'When Consulting is the Right Next Step',
      body: [
        'Most clients come to us for consulting after receiving an inspection report that surfaces more questions than it answers. An inspection documents what exists. It does not tell you which deficiencies are precursors to larger failures, which can be safely deferred for two years, or how to structure a five-year capital plan that keeps your track in compliance without exceeding your maintenance budget. That analytical work is where consulting adds value.',
        'Consulting engagements are also valuable at inflection points: when a facility is expanding its rail operations, when a new Class I interchange agreement is being negotiated, when a property is being acquired or sold, or when a track program has been operating without structure and the facility needs to establish a coherent maintenance strategy. If you have track-related decisions to make and want informed guidance from people who have managed large track programs professionally, that is what our consulting practice is built to provide.',
      ],
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          q: 'What is the difference between an inspection report and a consulting engagement?',
          a: 'An inspection report documents the current condition of your track against the federal standard. A consulting engagement analyzes that condition in the context of your operational requirements, compliance obligations, and capital constraints — and produces recommendations for what to do, in what order, and on what budget. Inspection is diagnostic; consulting is strategic.',
        },
        {
          q: 'Do we need an inspection before engaging consulting services?',
          a: 'Not necessarily. If you already have recent inspection documentation, consulting can build on that existing record. If you do not have current inspection documentation, we will typically recommend a baseline inspection as the first phase of a consulting engagement — it provides the factual foundation that makes consulting recommendations meaningful.',
        },
        {
          q: 'How long does a consulting engagement typically take?',
          a: 'Duration depends on the scope of the engagement. A capital planning review for a single industrial siding may take two to three weeks from field assessment to written report. A program development engagement for a short-line railroad with multiple track segments may take four to six weeks. We discuss timeline expectations at the outset of every engagement.',
        },
        {
          q: 'Can you help evaluate contractor bids for track maintenance work?',
          a: 'Yes. We help clients develop maintenance scopes, review submitted bids for completeness and technical soundness, identify scope gaps, and evaluate whether proposed work addresses the documented condition drivers. Informed bid evaluation is one of the most cost-effective consulting services we provide — it routinely saves clients more than the cost of the consulting work itself.',
        },
        {
          q: 'Do you provide consulting for short-line railroad capital programs?',
          a: 'Yes. We work with short-line operators on track capital planning, FRA compliance program development, maintenance scheduling, and contractor management. Short-line track programs have unique challenges — limited capital, broad compliance obligations, and aging infrastructure — and benefit significantly from consulting support grounded in Class I program management experience.',
        },
      ],
    },
  ],
  cta: {
    heading: 'Start a Railroad Maintenance Consulting Engagement',
    sub: 'Contact us to discuss your track infrastructure questions, your capital planning challenges, and what a structured consulting engagement can deliver for your operation.',
  },
}

export function RailroadMaintenanceConsultingPage({ onNavigate }) {
  return <LandingPage {...PAGE} onNavigate={onNavigate} />
}
