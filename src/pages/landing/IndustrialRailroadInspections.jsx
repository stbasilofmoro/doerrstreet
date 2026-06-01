import { LandingPage } from './LandingPage'

const PAGE = {
  seo: {
    title: 'Industrial Railroad Inspections | Plant Rail Safety & Compliance',
    description: 'Industrial railroad inspections for manufacturing facilities, chemical plants, mills, and rail-served industrial operations. FRA-certified inspectors with Class I experience serving the Southeastern United States.',
    canonical: 'https://doerrstreetrailco.com/industrial-railroad-inspections',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Railroad Track Inspection',
      name: 'Industrial Railroad Inspections',
      description: 'FRA-certified railroad track inspection services for heavy industrial facilities including manufacturing plants, chemical facilities, mills, and rail-served industrial operations.',
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
    title: 'Industrial Railroad Inspections',
    subtitle: 'FRA-certified inspections for heavy industry. Class I methods applied to the track your production depends on.',
  },
  sections: [
    {
      type: 'intro',
      body: [
        'Heavy industrial facilities operate track under conditions that residential or commercial properties never encounter. Manufacturing plant spurs see loaded gondolas and hoppers. Chemical facilities handle unit trains of hazardous commodities on aging infrastructure. Paper mills run car movements through weather extremes on track that may not have been professionally inspected in years. The relationship between track condition and production continuity in these environments is direct and unforgiving.',
        'Industrial railroad inspections require an inspector who understands not just track geometry standards, but the operational context of the facility — loading patterns, car weight profiles, environmental exposure, and the specific interchange requirements of the Class I railroad or short line that serves the plant. Doerr Street Rail Co brings that combination of technical qualification and industrial experience to every inspection we conduct.',
      ],
    },
    {
      type: 'trust',
      items: [
        { value: 'FRA', label: 'Part 213 Certified' },
        { value: 'Class I', label: 'Railroad Alumni' },
        { value: 'Heavy', label: 'Industry Experience' },
        { value: '48hr', label: 'Written Report Delivery' },
      ],
    },
    {
      type: 'two-col',
      heading: 'What Industrial Railroad Inspection Evaluates',
      body: [
        'Industrial track deteriorates differently than main-line railroad track. High-tonnage concentrated loading, repeated braking and acceleration in short distances, fuel and chemical spills, and limited ballast maintenance cycles create defect patterns that general-purpose track inspection misses. Our inspectors know what to look for because they have managed and inspected track in exactly these environments.',
        'We inspect the full industrial track system — approach leads and interchange tracks, internal plant spurs, loading and unloading tracks, loop tracks, and any industrial crossing within the facility footprint. Our reports are segmented by location so your maintenance team knows exactly where deficiencies exist and how they map to your plant operations.',
      ],
      listHeading: 'Industrial Track Systems We Inspect',
      items: [
        'Interchange and approach leads from Class I connection',
        'Internal plant spurs and loop tracks',
        'Loading and unloading spot tracks',
        'Runaround and escape tracks',
        'Industrial crossings and crossing protection',
        'Derail and clearance point positions',
        'Switch stands and power switch machines',
        'Environmental impact zones (spills, drainage, vegetation)',
      ],
    },
    {
      type: 'features',
      heading: 'Why Industrial Operations Choose Doerr Street',
      subheading: 'Class I expertise. Industrial context. Production-aware reporting.',
      items: [
        {
          title: 'Production Continuity Focus',
          body: 'We understand that every hour a track is out of service is a production cost. Our reports prioritize findings by operational impact — identifying what affects your ability to receive and spot cars today versus what can be addressed in the next maintenance window.',
        },
        {
          title: 'Class I Interface Knowledge',
          body: 'Deficient industrial track affects your Class I interchange agreement. Our inspectors know the standards your Class I carrier applies to private track, and we document your track against that specific standard — not a generalized framework.',
        },
        {
          title: 'Heavy-Load Track Assessment',
          body: 'Industrial track carrying 286,000-pound cars and unit train movements deteriorates faster than lightly used sidings. We apply appropriate load-context analysis to every finding, identifying deficiencies that high-tonnage loading will accelerate.',
        },
        {
          title: 'Chemical and Hazmat Environment Experience',
          body: 'Chemical facility track presents unique inspection challenges — spill contamination, ballast fouling, atmospheric corrosion, and specialized clearance requirements. Our inspectors are familiar with hazmat loading environments and the track conditions they produce.',
        },
        {
          title: 'Rapid Mobilization for Industrial Events',
          body: 'Derailments, track incidents, and Class I suspension notices require fast response. We mobilize for industrial facility inspections throughout the Southeast on short notice when operations are at stake.',
        },
        {
          title: 'Remediation Coordination',
          body: 'We support industrial clients through the remediation process — helping scope corrective work, evaluate contractor proposals, and conduct re-inspection after repairs to confirm the track meets the standard before normal operations resume.',
        },
      ],
    },
    {
      type: 'text',
      heading: 'Industries We Serve',
      body: [
        'Our industrial railroad inspection work spans the full range of heavy manufacturing and processing operations. We work with steel mills, paper and pulp mills, chemical manufacturers, aggregate and building materials producers, automotive manufacturing facilities and supplier plants, food and agricultural processing operations, lumber and wood products facilities, and energy sector industrial sites. Each industry has distinct track use patterns and maintenance challenges, and our inspectors adapt their evaluation accordingly.',
        'We also work with the real estate and investment teams that own rail-served industrial properties, conducting track condition assessments as part of acquisition due diligence or ongoing asset management programs. Industrial track is a capital asset, and understanding its condition and capital obligations is part of responsible asset management.',
      ],
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          q: 'How does industrial track inspection differ from standard railroad track inspection?',
          a: 'The underlying federal standard — 49 CFR Part 213 — is the same. What differs is the inspector\'s knowledge of how industrial operations affect track condition. Loading patterns, car weight profiles, braking behavior, environmental exposure, and maintenance access constraints in industrial environments create defect patterns that a generalist inspector may not recognize or properly evaluate. Our inspectors have walked both Class I main lines and heavy industrial facilities.',
        },
        {
          q: 'Does the FRA standard apply to track entirely within a private industrial facility?',
          a: 'Yes, if a carrier operates over that track. The applicability of 49 CFR Part 213 is based on use by a carrier, not on whether the track crosses a property boundary or is physically connected to the Class I network. Most industrial facilities that receive regular car spots from a Class I carrier or short line have track covered by federal standards.',
        },
        {
          q: 'Can you inspect track that handles hazardous materials?',
          a: 'Yes. We have experience inspecting track in chemical facilities, petroleum storage terminals, and other hazmat-handling environments. We coordinate with facility safety personnel on access protocols and PPE requirements, and we are familiar with the additional clearance and drainage considerations that hazmat loading environments require.',
        },
        {
          q: 'What if our facility has a track problem that needs attention before the Class I will spot cars?',
          a: 'Contact us immediately. We can typically mobilize within 24 to 48 hours for urgent industrial facility inspections throughout the Southeast. We will document the specific deficiency, assess the full track condition, and provide the written documentation your Class I carrier needs to resume service after remediation is complete.',
        },
        {
          q: 'How do you handle confidential industrial facility information in your reports?',
          a: 'Our inspection reports describe track conditions and locations within your facility. We do not disclose client facility information, operational details, or report contents to third parties without client authorization. All reports are delivered directly to the designated facility contact.',
        },
      ],
    },
  ],
  cta: {
    heading: 'Request an Industrial Railroad Inspection',
    sub: 'Contact us to discuss your facility\'s track, your production requirements, and what a professional inspection program looks like for your industrial operation.',
  },
}

export function IndustrialRailroadInspectionsPage({ onNavigate }) {
  return <LandingPage {...PAGE} onNavigate={onNavigate} />
}
