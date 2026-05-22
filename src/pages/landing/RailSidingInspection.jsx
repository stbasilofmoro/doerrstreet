import { LandingPage } from './LandingPage'

const PAGE = {
  seo: {
    title: 'Rail Siding Inspection Services | Industrial Siding Compliance',
    description: 'Rail siding inspection for private and industrial sidings across the Southeastern U.S. FRA-certified inspectors ensure your siding meets Class I interchange requirements and FRA Part 213 standards.',
    canonical: 'https://doerrstreetrailco.com/rail-siding-inspection',
  },
  hero: {
    title: 'Rail Siding Inspection Services',
    subtitle: 'Interchange-ready. FRA compliant. Documented and defensible.',
  },
  sections: [
    {
      type: 'intro',
      body: [
        'Your rail siding is the interface between your facility and the national freight railroad network. When that siding is out of compliance — with FRA Part 213 standards or with the specific interchange requirements of your Class I partner — the consequences are direct: restricted car spotting, delayed deliveries, and potential loss of rail service.',
        'Our rail siding inspection services document the condition of your siding against both federal standards and Class I railroad track specifications. We find what the railroad will find, before they do — and we give you a clear, prioritized path to resolution.',
      ],
    },
    {
      type: 'trust',
      items: [
        { value: 'FRA', label: 'Part 213 Certified' },
        { value: 'Class I', label: 'Interchange Expertise' },
        { value: '30+', label: 'Years Experience' },
        { value: '48hr', label: 'Report Turnaround' },
      ],
    },
    {
      type: 'two-col',
      heading: 'Why Sidings Require Independent Inspection',
      body: [
        'Class I railroads conduct periodic inspections of private sidings over which they operate. When they find defects — and they will find defects on most industrial sidings — they issue a notice requiring remediation within a defined timeframe. Facilities that receive these notices are often unprepared, both operationally and financially.',
        'An independent rail siding inspection gives you the information you need before the railroad arrives. Our inspectors measure, document, and classify every defect using the same FRA standards and railroad-equivalent methods your Class I partner uses — so you control the timeline, not them.',
      ],
      listHeading: 'Siding Inspection Coverage',
      items: [
        'Full siding track walk with defect mapping',
        'Rail condition and wear measurement',
        'Tie count and condition per FRA standard',
        'Surface, line, and gage tolerances',
        'Ballast condition and drainage',
        'Derail and blue flag equipment review',
        'Switch stand and machine inspection',
        'Joint bar and fastener condition',
      ],
    },
    {
      type: 'features',
      heading: 'What We Deliver',
      subheading: 'Reports you can act on immediately',
      items: [
        {
          title: 'Written Inspection Report',
          body: 'A complete written report delivered within 48 hours, documenting every defect with FRA Part 213 classification and location references.',
        },
        {
          title: 'Photographic Documentation',
          body: 'Every significant defect is photographed and referenced in the written report, creating an unambiguous record of track condition.',
        },
        {
          title: 'Priority Defect Ranking',
          body: 'Immediate safety concerns are clearly separated from scheduled maintenance items, so your team and your contractor know exactly where to start.',
        },
        {
          title: 'Remediation Cost Estimates',
          body: 'We can provide general remediation scope guidance to help your facility budget for required repairs before the railroad sets the schedule.',
        },
        {
          title: 'Pre-Acceptance Inspection',
          body: 'For newly constructed or recently rehabilitated sidings, we conduct pre-acceptance inspections before you turn the track over to Class I operations.',
        },
        {
          title: 'Ongoing Inspection Programs',
          body: 'Scheduled quarterly or semi-annual inspections keep your siding in continuous compliance and document your good-faith maintenance effort.',
        },
      ],
    },
  ],
  cta: {
    heading: 'Schedule a Rail Siding Inspection',
    sub: 'Don\'t let your Class I railroad inspector be the first one to document your siding defects. Contact us today.',
  },
}

export function RailSidingInspectionPage({ onNavigate }) {
  return <LandingPage {...PAGE} onNavigate={onNavigate} />
}
