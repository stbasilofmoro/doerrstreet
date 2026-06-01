import { LandingPage } from './LandingPage'

const PAGE = {
  seo: {
    title: 'Manufacturing Plant Track Inspections | Plant Rail Safety & FRA Compliance',
    description: 'FRA-certified railroad track inspections for manufacturing facilities. Plant spurs, internal leads, and industrial sidings inspected by Class I-trained professionals. Written reports within 48 hours.',
    canonical: 'https://doerrstreetrailco.com/manufacturing-plant-track-inspections',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Railroad Track Inspection',
      name: 'Manufacturing Plant Track Inspections',
      description: 'FRA-certified railroad track inspection services for manufacturing facilities including plant spurs, internal rail leads, loading tracks, and industrial sidings.',
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
    title: 'Manufacturing Plant Track Inspections',
    subtitle: 'Plant spurs, internal leads, and loading tracks — inspected to the standard your Class I carrier applies.',
  },
  sections: [
    {
      type: 'intro',
      body: [
        'A manufacturing plant\'s rail connection is a production asset. When the track that delivers raw materials or moves finished goods is out of service — whether due to a Class I restriction, a derailment, or a federal deficiency notice — the cost shows up immediately on the production floor. Plant engineers and operations managers who treat track maintenance as an afterthought discover that reality only once before changing their approach.',
        'Manufacturing plant track inspection is a specific discipline. Plant leads and internal spurs operate under loading conditions, maintenance access constraints, and environmental exposures that differ significantly from main-line or short-line track. Doerr Street Rail Co provides FRA-certified track inspections for manufacturing facilities across the Southeastern United States — conducted by inspectors who understand both the federal standard and the operational context of the facilities they serve.',
      ],
    },
    {
      type: 'trust',
      items: [
        { value: 'FRA', label: 'Part 213 Certified' },
        { value: 'Plant', label: 'Track Specialists' },
        { value: 'Class I', label: 'Standard Applied' },
        { value: '48hr', label: 'Written Report' },
      ],
    },
    {
      type: 'two-col',
      heading: 'Manufacturing Track Systems We Inspect',
      body: [
        'Manufacturing plant track systems range from a single short spur with one loading position to complex internal networks with multiple leads, loading docks, interchange tracks, and loop configurations. Regardless of complexity, every element of the track system is evaluated against the same federal standard that applies to the Class I railroad that serves your facility.',
        'We pay particular attention to the areas where manufacturing plant track fails most commonly: the interchange lead from the Class I connection, which carries every loaded inbound car and every outbound car; the loading dock tracks, where cars are repeatedly moved into precise positions; and the internal turnouts, which see every routing movement in the plant rail system.',
      ],
      listHeading: 'Manufacturing Track Elements Inspected',
      items: [
        'Class I interchange connection and approach lead',
        'Internal plant leads and distribution spurs',
        'Raw material receiving tracks and spot positions',
        'Finished goods loading and staging tracks',
        'Internal turnouts and switch machines',
        'Industrial crossings within plant property',
        'Derails, chock positions, and blue-flag protection points',
        'Environmental exposure zones (chemical, thermal, wash)',
      ],
    },
    {
      type: 'features',
      heading: 'Why Manufacturing Facilities Choose Doerr Street',
      subheading: 'Technical rigor. Production awareness. Reports plant managers can use.',
      items: [
        {
          title: 'Production-Impact Prioritization',
          body: 'Manufacturing operations cannot wait weeks for a deficiency report to be interpreted. Our reports lead with an operational summary — what needs immediate attention, what can wait for the next scheduled maintenance window, and what to watch. Plant managers and maintenance supervisors can act on our findings without a translation layer.',
        },
        {
          title: 'Heavy-Load Track Evaluation',
          body: 'Manufacturing plants often handle 286,000-pound loaded freight cars on track that was built for lighter service. We evaluate track under the load conditions your facility actually operates — not against a theoretical light-duty standard.',
        },
        {
          title: 'Automotive Industry Experience',
          body: 'We serve automotive assembly plants and supplier facilities across the Southeast. Automotive plant track has specific requirements — precision spotting, just-in-time delivery schedules, and Class I audit frequency that demands consistent compliance documentation.',
        },
        {
          title: 'Chemical and Process Plant Expertise',
          body: 'Chemical manufacturing track faces accelerated deterioration from spills, ballast contamination, and corrosive atmospheres. Our inspectors recognize these conditions and document their track impact accurately.',
        },
        {
          title: 'Maintenance Coordination Support',
          body: 'We work with plant maintenance departments to schedule inspections during planned maintenance windows, coordinate re-inspection after repairs, and provide the documentation your plant needs for internal maintenance tracking systems.',
        },
        {
          title: 'Pre-Audit Preparation',
          body: 'Class I railroads periodically audit the private track they serve. A professional inspection conducted before a Class I audit allows your facility to identify and address deficiencies on your schedule rather than the railroad\'s.',
        },
      ],
    },
    {
      type: 'text',
      heading: 'Industries We Serve in Manufacturing',
      body: [
        'Our manufacturing plant track inspection experience covers the full range of rail-served production sectors: automotive assembly and stamping plants, steel and aluminum mills and service centers, chemical and specialty materials manufacturers, paper and packaging plants, food and agricultural processing facilities, building materials producers, plastics and rubber manufacturers, and defense and aerospace industrial facilities. Each sector operates track differently, and our inspectors adapt their evaluation to the specific wear drivers and compliance context of each industry.',
        'We also support engineering and facilities teams at manufacturing companies that are expanding or reconfiguring their plant rail systems. When a manufacturing facility adds a new spur, relocates a loading dock, or modifies its internal track configuration, an independent inspection of the new work provides documented confirmation that the installation meets FRA standards before the Class I carrier is asked to begin service.',
      ],
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          q: 'Our plant receives only a few rail cars per week. Do we still need a professional track inspection?',
          a: 'Yes. The FRA standard applies based on carrier usage, not frequency. If a Class I railroad or short line delivers even occasional cars to your facility, the track they operate over is subject to 49 CFR Part 213. Infrequent service also means track can deteriorate between car movements without anyone noticing — which is precisely when a professional inspection is most valuable.',
        },
        {
          q: 'How much notice do you need to schedule a plant inspection?',
          a: 'For standard scheduled inspections, two to five business days is typically sufficient. For urgent situations — a Class I restriction, a derailment, or a pending audit — we can often mobilize within 24 to 48 hours for manufacturing facilities in the Southeast.',
        },
        {
          q: 'Can you work around our production schedule to minimize disruption?',
          a: 'Yes. We schedule manufacturing plant inspections to minimize interference with production operations. For plants with complex or continuous production schedules, we discuss access timing before scheduling the inspection and confirm coordination with your maintenance team.',
        },
        {
          q: 'We are planning a plant expansion that will add new track. Can you inspect new construction?',
          a: 'Yes. New track construction inspection confirms that installed track meets FRA Part 213 standards before it is placed in service. This is particularly important when you are asking a Class I carrier to begin service on new track — having independent documentation of the installation standard protects both parties.',
        },
        {
          q: 'Our Class I carrier has notified us of track deficiencies. What is the fastest path to restoring service?',
          a: 'Contact us immediately. We will schedule an inspection as quickly as possible, confirm and document the specific deficiencies the railroad identified, provide written remediation guidance, and prepare the documentation your Class I carrier needs to authorize a return to service. Our goal is to help you restore service on the fastest responsible timeline.',
        },
      ],
    },
  ],
  cta: {
    heading: 'Schedule a Manufacturing Plant Track Inspection',
    sub: 'Contact us to discuss your plant\'s rail system and what a professional inspection program looks like for your facility, your Class I connection, and your production operations.',
  },
}

export function ManufacturingPlantTrackInspectionsPage({ onNavigate }) {
  return <LandingPage {...PAGE} onNavigate={onNavigate} />
}
