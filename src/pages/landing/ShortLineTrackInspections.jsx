import { LandingPage } from './LandingPage'

const PAGE = {
  seo: {
    title: 'Short-Line Railroad Inspections | FRA-Certified Track Inspection for Short Lines',
    description: 'FRA-certified track inspection services for short-line railroads. Independent inspection programs supporting carrier compliance obligations, capital planning, and Class I interchange requirements across the Southeast.',
    canonical: 'https://doerrstreetrailco.com/short-line-track-inspections',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Railroad Track Inspection',
      name: 'Short-Line Railroad Track Inspections',
      description: 'Independent FRA-certified track inspection services for short-line and regional railroad operators, supporting carrier compliance programs and capital maintenance planning.',
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
    title: 'Short-Line Railroad Track Inspections',
    subtitle: 'Independent FRA-certified inspections for short-line carriers. Supporting compliance, capital planning, and Class I interchange.',
  },
  sections: [
    {
      type: 'intro',
      body: [
        'Short-line and regional railroads occupy a unique position in the FRA compliance landscape. As common carriers, they carry inspection obligations that go well beyond what industrial track owners face — but they typically operate with far fewer engineering resources than the Class I carriers whose inspection standards they must meet. The combination of broad compliance obligations and limited internal capacity creates a real need for independent inspection support from qualified professionals who understand the short-line operating environment.',
        'Doerr Street Rail Co provides independent track inspection services for short-line railroad operators throughout the Southeastern United States. Our inspectors are Class I railroad alumni who have worked in both main-line and branch-line track environments. We understand the specific compliance challenges short-line carriers face, the Class I interchange requirements that govern their access to connecting markets, and the capital constraints that define their maintenance reality.',
      ],
    },
    {
      type: 'trust',
      items: [
        { value: 'FRA', label: 'Part 213 Certified' },
        { value: 'Class I', label: 'Railroad Alumni' },
        { value: 'All', label: 'Track Classes Covered' },
        { value: 'Short', label: 'Line Experience' },
      ],
    },
    {
      type: 'two-col',
      heading: 'Short-Line Track Inspection Services',
      body: [
        'Our short-line inspection work covers the full range of track types and classifications found on regional railroad systems — main line and branch line track operating at multiple FRA classes, yard and interchange leads, industrial spur connections, and crossing surfaces. We bring the same measurement tools and documentation methodology used in Class I inspection programs to short-line systems of any size.',
        'Beyond periodic inspection, we work with short-line operators on independent third-party review of their existing inspection programs — evaluating inspector qualifications, documentation methodology, and program coverage against FRA requirements. This review function is particularly valuable for short lines that have grown through acquisition or changed operating personnel, where institutional knowledge gaps may create compliance exposure.',
      ],
      listHeading: 'Short-Line Track Elements We Inspect',
      items: [
        'Main line track at all applicable FRA speed classes',
        'Branch line and lightly-used secondary track',
        'Yard leads, runaround tracks, and classification tracks',
        'Class I interchange connections and approach tracks',
        'Industrial spur connections to served customers',
        'Grade crossings and crossing surface conditions',
        'Bridge approaches and structure interaction zones',
        'Speed restriction locations and defect documentation',
      ],
    },
    {
      type: 'features',
      heading: 'How We Support Short-Line Operators',
      subheading: 'Class I-level inspection competence available to short-line programs',
      items: [
        {
          title: 'Supplemental Inspection Coverage',
          body: 'Short-line operators with inspection obligations that exceed their internal staff capacity use our services to supplement their program — ensuring full territorial coverage without hiring additional certified inspectors on a permanent basis.',
        },
        {
          title: 'Independent Program Review',
          body: 'An independent third-party review of your existing inspection program evaluates methodology, documentation quality, and coverage completeness against FRA requirements. It identifies gaps before a federal inspector does.',
        },
        {
          title: 'Class I Interchange Track Focus',
          body: 'Short-line interchange tracks receive particularly close scrutiny from Class I carriers. We inspect these connections specifically to the standards your Class I partner applies, providing documentation that supports your interchange relationship.',
        },
        {
          title: 'Capital Program Support',
          body: 'Short-line capital is limited and must be prioritized carefully. Our inspections provide the documented deficiency data needed to support CRISI grant applications, state rail assistance programs, and annual capital budget requests.',
        },
        {
          title: 'Track Class Optimization Consulting',
          body: 'Speed restrictions and track class downgrades have direct revenue implications for short-line carriers. We evaluate track condition against the requirements for desired operating speed classes and identify what investment is needed to restore or maintain specific FRA classifications.',
        },
        {
          title: 'Emergency and Incident Response',
          body: 'Derailments and track incidents on short-line systems require fast professional response. We mobilize for emergency inspection and documentation throughout the Southeast, providing the independent record that supports insurance claims and FRA incident reporting.',
        },
      ],
    },
    {
      type: 'text',
      heading: 'The Short-Line Compliance Challenge',
      body: [
        'Short-line railroads operate as FRA-regulated carriers, which means their track inspection obligations are those of a railroad — not merely those of a private track owner. The carrier\'s qualified inspector must walk the track at the frequency required for the FRA speed class in effect. Documentation must be maintained, defects must be classified and reported, and remediation must occur within the prescribed timeframes. For a short-line carrier with 50 to 200 route miles and a lean maintenance team, meeting those obligations consistently across the full territory is genuinely challenging.',
        'The consequences of program gaps are serious. FRA field inspectors walk short-line territory on a regular schedule. Class I carriers conduct periodic compliance audits of interchange track. And when an incident occurs, the completeness and quality of the inspection documentation becomes the first thing under scrutiny. Short-line operators who use independent inspection support are not admitting a weakness — they are closing a known gap before it becomes a problem, which is exactly what a well-managed railroad does.',
      ],
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          q: 'Can an outside firm like Doerr Street fulfill our FRA inspection obligations?',
          a: 'Independent inspectors can conduct inspections that supplement and document a carrier\'s compliance program, and those reports contribute meaningfully to your compliance record. The carrier\'s qualified inspector retains the regulatory responsibility for the program. We recommend discussing the specific role of independent inspection in your compliance documentation with your regulatory counsel — we are happy to work within whatever framework your program requires.',
        },
        {
          q: 'We acquired a short line two years ago and are not confident about the inspection history. Where do we start?',
          a: 'Start with a baseline inspection of the complete system. This gives you an independent documented assessment of current conditions that is not reliant on prior ownership\'s records. From that baseline you can build a forward-looking inspection program, prioritize capital needs, and establish a compliance documentation record that reflects your management.',
        },
        {
          q: 'We are applying for CRISI or state rail assistance funding. Can your inspections support our application?',
          a: 'Yes. A professional inspection report that documents deficiencies, classifies them against the federal standard, and provides capital cost context is exactly the kind of third-party documentation that strengthens capital grant applications. We can structure our inspection scope and reporting to align with the documentation requirements of specific funding programs.',
        },
        {
          q: 'How do you handle inspection of track classes above Class 3?',
          a: 'Our inspectors hold FRA Part 213 certification covering Classes 1 through 6. We inspect track at all classes found on short-line and regional railroad systems, applying the appropriate geometric tolerances, measurement requirements, and defect standards for each class.',
        },
        {
          q: 'What does a short-line inspection program typically cost?',
          a: 'Program cost depends on system length, track configuration, desired inspection frequency, and travel requirements. We provide fixed pricing for all inspection engagements — no open-ended day rates or scope ambiguity. Contact us to discuss your system and receive a specific program proposal.',
        },
      ],
    },
  ],
  cta: {
    heading: 'Request Short-Line Track Inspection Services',
    sub: 'Contact us to discuss your railroad\'s inspection program, your compliance documentation needs, and what independent inspection support looks like for your operation.',
  },
}

export function ShortLineTrackInspectionsPage({ onNavigate }) {
  return <LandingPage {...PAGE} onNavigate={onNavigate} />
}
