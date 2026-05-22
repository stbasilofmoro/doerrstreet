import { LandingPage } from '../LandingPage'

const PAGE = {
  seo: {
    title: 'Railroad Track Inspection in Ohio | FRA-Certified',
    description: 'FRA-certified railroad track inspection across Ohio. Serving steel, automotive, chemical, and manufacturing facilities in Cleveland, Columbus, Cincinnati, Toledo, and statewide. CSX and Norfolk Southern expertise.',
    canonical: 'https://doerrstreetrailco.com/track-inspection-ohio',
  },
  hero: {
    title: 'Railroad Track Inspection in Ohio',
    subtitle: 'Serving steel mills, automotive manufacturers, chemical plants, and industrial facilities across the Buckeye State.',
  },
  sections: [
    {
      type: 'intro',
      body: [
        'Ohio has one of the most intensive industrial rail networks in North America. The Cleveland-Youngstown steel corridor, the Columbus manufacturing belt, the Cincinnati automotive cluster, and the Toledo port and grain operations all depend on private track infrastructure that has been in place — in many cases — for generations.',
        'That legacy rail infrastructure carries enormous economic value and significant compliance risk. FRA standards apply to every mile of track that a Class I carrier operates over, and Ohio\'s industrial facilities are served by CSX and Norfolk Southern corridor routes that are among the most heavily inspected in the country. Our FRA-certified inspection services help Ohio industrial facilities understand and manage that compliance obligation.',
      ],
    },
    {
      type: 'trust',
      items: [
        { value: 'OH', label: 'Statewide Coverage' },
        { value: 'FRA', label: 'Part 213 Certified' },
        { value: 'CSX/NS', label: 'Corridor Expertise' },
        { value: '48hr', label: 'Report Turnaround' },
      ],
    },
    {
      type: 'two-col',
      heading: 'Ohio Rail Operations We Inspect',
      body: [
        'Ohio\'s industrial rail base reflects the state\'s heavy manufacturing heritage. Steel mills and metals processors in the northeast, automotive assembly and supplier facilities in the northwest, chemical manufacturers throughout the state, and agricultural processing operations in the west and central regions all operate private track with documented inspection needs.',
        'CSX and Norfolk Southern both operate extensive Ohio networks, with major classification yards in Toledo, Columbus, Cleveland, and Cincinnati that serve as interchange points for hundreds of industrial sidings. Our inspectors know these corridors and the Class I standards applied to them.',
      ],
      listHeading: 'Ohio Industries & Facilities We Serve',
      items: [
        'Steel mill and metals processing track',
        'Automotive OEM and tier supplier facilities',
        'Chemical and plastics manufacturers',
        'Toledo port and grain elevator operations',
        'Columbus industrial and distribution facilities',
        'Cincinnati-area manufacturing corridor',
        'Agricultural processing facilities',
        'Short-line railroad operators statewide',
      ],
    },
    {
      type: 'features',
      heading: 'Why Ohio Facilities Choose Us',
      subheading: 'Heavy industry experience. Class I standards. FRA documentation.',
      items: [
        {
          title: 'Heavy Industry Track Experience',
          body: 'Ohio\'s steel mills and heavy manufacturers operate track under extraordinary load conditions. We understand the wear patterns, maintenance cycles, and defect profiles unique to heavy industrial track.',
        },
        {
          title: 'CSX & NS Interchange Expertise',
          body: 'Both Class I carriers that dominate Ohio\'s industrial rail network are represented in our inspectors\' career histories. We know their interchange requirements from the inside.',
        },
        {
          title: 'Legacy Infrastructure Assessment',
          body: 'Much of Ohio\'s industrial track infrastructure dates from mid-20th century construction. We are experienced in assessing aging track systems and building realistic remediation programs.',
        },
        {
          title: 'FRA Part 213 Certified',
          body: 'Every inspection is conducted against federal standards. Our written reports meet the documentation requirement for FRA and Class I compliance purposes.',
        },
        {
          title: 'Statewide Mobilization',
          body: 'We serve all of Ohio — from the Lake Erie industrial corridor to the southern Ohio River valley and everywhere in between.',
        },
        {
          title: 'Compliance Program Development',
          body: 'Ohio\'s largest industrial facilities benefit from structured, ongoing inspection programs. We build programs scaled to facility size, track complexity, and compliance exposure.',
        },
      ],
    },
  ],
  cta: {
    heading: 'Schedule a Track Inspection in Ohio',
    sub: 'Contact us to discuss your Ohio facility\'s track, your Class I interchange requirements, and what a documented inspection program looks like.',
  },
}

export function OhioPage({ onNavigate }) {
  return <LandingPage {...PAGE} onNavigate={onNavigate} />
}
