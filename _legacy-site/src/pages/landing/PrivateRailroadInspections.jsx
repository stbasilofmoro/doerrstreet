import { LandingPage } from './LandingPage'

const PAGE = {
  seo: {
    title: 'Private Railroad Inspections | FRA-Certified Private Track Inspection',
    description: 'FRA-certified private railroad inspections for industrial facility owners across the Southeastern U.S. Written reports within 48 hours. Protect your compliance standing, your Class I interchange, and your liability position.',
    canonical: 'https://doerrstreetrailco.com/private-railroad-inspections',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Railroad Track Inspection',
      name: 'Private Railroad Inspections',
      description: 'FRA-certified private railroad track inspection services for industrial facility owners and private track operators.',
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
    title: 'Private Railroad Inspections',
    subtitle: 'FRA-certified inspection services for private track owners and industrial facility operators.',
  },
  sections: [
    {
      type: 'intro',
      body: [
        'Private railroad track exists in more places than most people realize. Any industrial facility that receives rail cars — a manufacturing plant, a chemical facility, a lumber operation, an agricultural terminal — almost certainly operates private track. That track belongs to the facility, not the Class I railroad. Which means the facility bears responsibility for its condition, its compliance, and the consequences of anything that happens on it.',
        'Private track inspections are the foundational step in responsible track ownership. A documented inspection record establishes the condition of the track, identifies deficiencies that need attention, and creates a baseline from which any compliance or maintenance program can operate. Doerr Street Rail Co conducts FRA-certified private railroad inspections that give facility owners a clear, credible account of where their track stands.',
      ],
    },
    {
      type: 'trust',
      items: [
        { value: 'FRA', label: 'Part 213 Certified' },
        { value: '30+', label: 'Years Combined Experience' },
        { value: '48hr', label: 'Written Report Delivery' },
        { value: 'Class I', label: 'Trained Inspectors' },
      ],
    },
    {
      type: 'two-col',
      heading: 'What Private Track Inspection Covers',
      body: [
        'Private track carries the same federal exposure as any other railroad track — often more, because facility owners are less familiar with the regulatory landscape than the railroad employees who walk Class I main lines every day. Our inspections cover the same elements a federal inspector or Class I track supervisor would evaluate, documented in the same format.',
        'We measure, classify, and document. Every finding is recorded with its FRA Part 213 classification, location, and severity. You receive a written report that gives you a complete picture of your track\'s condition — useful for maintenance planning, insurance documentation, interchange negotiations, and regulatory compliance. Nothing in our reporting is softened or omitted to make the findings more comfortable.',
      ],
      listHeading: 'Private Track Inspection Elements',
      items: [
        'Rail condition, wear, and surface defects',
        'Tie condition per FRA 39-foot segment standard',
        'Ballast condition and drainage assessment',
        'Track geometry, surface, and gage deviations',
        'Switch condition, clearances, and throw mechanisms',
        'Joint bars, fasteners, and anchor systems',
        'Grade crossing conditions where applicable',
        'FRA defect classification and remediation priority',
      ],
    },
    {
      type: 'features',
      heading: 'Why Private Track Owners Choose Doerr Street',
      subheading: 'Documentation that protects your facility, your operations, and your investment',
      items: [
        {
          title: 'Liability Protection',
          body: 'An inspection report documents the condition of your track at a specific point in time. In any incident investigation, that documentation defines your exposure and demonstrates the good-faith maintenance effort of a responsible track owner.',
        },
        {
          title: 'Class I Interchange Continuity',
          body: 'Class I railroads periodically audit private track they operate over. An independent inspection that identifies and addresses deficiencies before that audit protects your facility\'s ability to receive and ship by rail without interruption.',
        },
        {
          title: 'FRA-Standard Documentation',
          body: 'Our reports use the same classification system and measurement methodology used by federal track inspectors. If your track is ever subject to regulatory scrutiny, our documentation speaks the language of the people reviewing it.',
        },
        {
          title: 'Insurance and Risk Management Support',
          body: 'Property and liability coverage for rail-served facilities often depends on documented evidence of track maintenance activity. A professional inspection program creates the paper trail your risk management team needs.',
        },
        {
          title: 'Maintenance Prioritization',
          body: 'Not every deficiency requires the same urgency. Our reports clearly separate immediate safety concerns from scheduled maintenance items, so your team can allocate resources to what needs attention first.',
        },
        {
          title: 'Ongoing Program Options',
          body: 'One inspection gives you a snapshot. A recurring inspection program gives you a compliance history. We build monthly, quarterly, and semi-annual programs around your operational schedule and maintenance budget.',
        },
      ],
    },
    {
      type: 'text',
      heading: 'Common Challenges Private Track Owners Face',
      body: [
        'The most common challenge we encounter is deferred awareness. Facilities go years without a professional track inspection because nothing has gone obviously wrong — no derailments, no Class I complaints, no federal notices. Then a Class I conductor refuses to spot a car, a federal inspector walks the track during an unrelated visit, or an incident occurs and the absence of any inspection history becomes a significant liability problem.',
        'The second most common challenge is scope confusion. Private track owners often don\'t know exactly what the FRA standard requires, which elements of their track are covered, or how to interpret a defect when they do find one. Our inspections resolve that uncertainty with a written report that classifies every finding against the published federal standard — so there\'s no ambiguity about what you have and what it means.',
      ],
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          q: 'Is my private track subject to FRA inspection standards?',
          a: 'If a carrier operates over your track — even for occasional car spots — that track is subject to FRA Track Safety Standards under 49 CFR Part 213. The standard applies based on use, not ownership. Most industrial sidings and plant spurs that receive Class I car movements are covered.',
        },
        {
          q: 'What triggers a Class I inspection of my private track?',
          a: 'Class I railroads conduct routine compliance audits of private track they access as part of their operating requirements. Inspections are typically triggered by scheduled audit cycles, incident investigations, or conductor-observed defects. Frequency depends on your Class I connection and the volume of car movements.',
        },
        {
          q: 'What happens if defects are found during our inspection?',
          a: 'Every defect found during our inspection is documented, classified, and prioritized in your written report. Some defects require immediate remediation before car movements can safely continue; others can be addressed on a scheduled maintenance timeline. We remain available to support remediation planning and re-inspection after repairs are made.',
        },
        {
          q: 'Can an inspection report be used in an insurance claim or legal proceeding?',
          a: 'Yes. A professionally documented inspection report is a meaningful evidentiary record in insurance claims, contract disputes, and regulatory proceedings. It establishes the documented condition of the track at a specific point in time — evidence of either good-faith maintenance or the known condition prior to an incident.',
        },
        {
          q: 'How do we start if we have never had a professional inspection?',
          a: 'Contact us to discuss your track. We will gather basic information about your facility, your Class I connection, and the approximate length and configuration of your track. From there we schedule a field inspection, conduct the track walk, and deliver a written report within 48 hours of the field visit. The initial inspection gives you a documented baseline from which any ongoing program can operate.',
        },
      ],
    },
  ],
  cta: {
    heading: 'Schedule a Private Railroad Inspection',
    sub: 'Contact us to discuss your facility\'s private track and what a documented inspection record means for your compliance standing, your Class I interchange, and your liability exposure.',
  },
}

export function PrivateRailroadInspectionsPage({ onNavigate }) {
  return <LandingPage {...PAGE} onNavigate={onNavigate} />
}
