import { LandingPage } from './LandingPage'

const PAGE = {
  seo: {
    title: 'Rail-Served Facility Inspections | Industrial Rail Safety Documentation',
    description: 'FRA-certified track inspections for rail-served industrial facilities. Protect your supply chain, your Class I interchange, and your compliance standing with professional inspection and written documentation.',
    canonical: 'https://doerrstreetrailco.com/rail-served-facility-inspections',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Railroad Track Inspection',
      name: 'Rail-Served Facility Inspections',
      description: 'FRA-certified railroad track inspection services for rail-served industrial facilities, warehouses, distribution centers, and logistics operations dependent on rail access.',
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
    title: 'Rail-Served Facility Inspections',
    subtitle: 'Your rail connection is a supply chain asset. Protecting it starts with knowing exactly what condition it is in.',
  },
  sections: [
    {
      type: 'intro',
      body: [
        'For any facility where rail is part of the supply chain — a distribution center receiving bulk shipments, a manufacturer accepting raw materials, a warehouse loading outbound product — the track connecting that facility to the national rail network is a critical operational asset. When that track is in poor condition, restricted by the Class I carrier, or cited by a federal inspector, the supply chain impact is immediate and measurable.',
        'Rail-served facility operators often approach track with a reactive mindset: fix it when something breaks or when the railroad complains. Doerr Street Rail Co works with supply chain-aware facility managers who understand that their rail connection deserves the same proactive management as any other piece of critical infrastructure. A professional inspection program keeps your track documented, your compliance current, and your supply chain protected.',
      ],
    },
    {
      type: 'trust',
      items: [
        { value: 'FRA', label: 'Part 213 Certified' },
        { value: 'Supply', label: 'Chain Awareness' },
        { value: 'Class I', label: 'Trained Inspectors' },
        { value: '48hr', label: 'Written Report' },
      ],
    },
    {
      type: 'two-col',
      heading: 'What Rail-Served Facility Inspection Covers',
      body: [
        'A rail-served facility inspection evaluates the complete track system from the Class I or short-line connection through every loading, unloading, and staging position on your property. We assess the track against the FRA Part 213 standard that governs the track your carrier operates over — which applies to your private track any time a carrier uses it to spot cars at your facility.',
        'We structure our reports to give facility managers, supply chain directors, and plant engineers the information they need to make maintenance decisions — not just a technical deficiency list. Every finding is located precisely, classified against the federal standard, and prioritized by operational significance. The report you receive is a document you can act on.',
      ],
      listHeading: 'Facility Track Elements Inspected',
      items: [
        'Class I or short-line connection point and approach',
        'Main facility siding or lead track',
        'Individual car spotting and staging positions',
        'Loading dock and warehouse door spot tracks',
        'Runaround and escape track elements',
        'Industrial turnouts and switch mechanisms',
        'Grade crossings within facility boundaries',
        'Track geometry, drainage, and environmental conditions',
      ],
    },
    {
      type: 'features',
      heading: 'Protecting Your Rail Supply Chain',
      subheading: 'Documented track condition is supply chain risk management',
      items: [
        {
          title: 'Interchange Protection',
          body: 'Class I railroads can restrict or suspend car delivery to a facility whose track does not meet their operating standards. A proactive inspection program identifies problems before the railroad finds them — keeping your supply chain intact.',
        },
        {
          title: 'Supply Chain Continuity Documentation',
          body: 'When rail service is disrupted, facility managers need clear answers about cause and timeline for resolution. A professional inspection gives you an independent assessment you can share with logistics teams and customers while remediation proceeds.',
        },
        {
          title: 'Insurance and Risk Coverage',
          body: 'Documented track condition and a regular inspection program are increasingly relevant to property and liability insurance for rail-served facilities. We provide the professional documentation your risk team needs.',
        },
        {
          title: 'Lease and Ownership Clarity',
          body: 'Many rail-served facilities operate on track where ownership and maintenance responsibility is divided between the facility, a prior owner, or the Class I carrier. We document what exists and what condition it is in, which is valuable regardless of who is responsible for it.',
        },
        {
          title: 'New Facility Rail Assessment',
          body: 'Before committing to a rail-served facility through lease or purchase, a professional track inspection establishes the current condition and capital maintenance obligations of the rail infrastructure — information that belongs in any acquisition or lease analysis.',
        },
        {
          title: 'Rapid Response Capability',
          body: 'When a Class I carrier restricts service or a track event disrupts your facility\'s supply chain, we mobilize quickly throughout the Southeast — providing the independent documentation needed to resolve the situation as fast as possible.',
        },
      ],
    },
    {
      type: 'text',
      heading: 'The Facilities We Serve',
      body: [
        'We provide rail-served facility inspections for a broad range of operations where rail access is a meaningful part of the supply chain. Distribution centers and warehouses receiving bulk commodity shipments, building materials and home improvement retailers with rail-served lumber and panel unloading, food and agricultural storage facilities, fertilizer and chemical distribution facilities, energy sector fuel and materials receiving operations, and logistics companies operating rail-served transload points all represent the kind of facility where professional track inspection provides direct operational and financial value.',
        'We also work with real estate developers, industrial park operators, and property investors who own or are evaluating rail-served properties. The condition of a rail-served facility\'s track affects its value, its leasability to rail-dependent tenants, and its ongoing maintenance obligations. An independent professional assessment provides the information needed to make informed decisions about those properties.',
      ],
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          q: 'Our facility has a track that the railroad uses maybe 10 times per year. Does it still need professional inspection?',
          a: 'Yes. The FRA standard applies based on use by a carrier, not frequency of use. Infrequent use also means the track receives less routine attention, which often means deterioration accumulates between car movements without anyone noticing. Low-frequency spurs can be among the most neglected — and therefore most problematic — track in any facility inventory.',
        },
        {
          q: 'The Class I carrier maintains the track up to a certain point. Does that mean we don\'t need our own inspection?',
          a: 'Class I carriers typically maintain track up to the clearance point of your facility, which is often a derail or an imaginary line at the switch point. Everything on your side of that boundary is your responsibility. A professional inspection of your track — independent of what the railroad maintains — documents your portion of the system.',
        },
        {
          q: 'We are considering leasing a rail-served facility. Can you inspect the track before we sign?',
          a: 'Yes. Pre-lease and pre-purchase track inspections are a smart component of any rail-served facility due diligence. We will document current conditions, identify deficiencies, and provide a capital obligation estimate for bringing the track into compliance — information that belongs in your lease or acquisition analysis.',
        },
        {
          q: 'Our facility\'s track was recently used as a reason the Class I refused to spot cars. What should we do?',
          a: 'Contact us immediately. We will inspect your track, document its current condition against the FRA standard and the Class I\'s operating requirements, and provide written guidance on remediation. We can also assist with the documentation package needed to request restoration of car delivery service from your Class I carrier.',
        },
        {
          q: 'How far from your base of operations can you travel for facility inspections?',
          a: 'We serve facility operators throughout the Southeastern United States — from Virginia to Florida and as far west as Mississippi and Tennessee. Travel costs for inspections outside our immediate service area are factored into our project pricing, which is provided upfront before any work begins.',
        },
      ],
    },
  ],
  cta: {
    heading: 'Schedule a Rail-Served Facility Inspection',
    sub: 'Contact us to discuss your facility\'s track and what professional inspection documentation means for your supply chain continuity, your compliance standing, and your Class I relationship.',
  },
}

export function RailServedFacilityInspectionsPage({ onNavigate }) {
  return <LandingPage {...PAGE} onNavigate={onNavigate} />
}
