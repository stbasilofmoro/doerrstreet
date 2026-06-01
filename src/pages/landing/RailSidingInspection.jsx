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
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          q: 'How often should a private rail siding be inspected?',
          a: 'For active sidings that receive regular Class I car movements, annual inspection is a minimum; quarterly or monthly programs provide stronger compliance documentation and catch deterioration earlier. For less active sidings, semi-annual inspection is generally appropriate. We recommend discussing your specific siding usage and Class I relationship before settling on a program frequency.',
        },
        {
          q: 'Who is responsible for maintaining a private rail siding?',
          a: 'The track owner is responsible for the maintenance and compliance of private track. This is true regardless of who uses the siding or how frequently. In some cases, a Class I railroad\'s interchange agreement may define specific maintenance responsibilities, but the underlying ownership obligation remains with the track owner. If your siding is on leased property, your lease terms may define maintenance responsibility between tenant and landlord.',
        },
        {
          q: 'How do Class I interchange requirements differ from FRA standards?',
          a: 'FRA Part 213 is the federal minimum standard. Class I railroads often impose additional requirements on private track they operate over — stricter tie condition standards, specific switch inspection protocols, or enhanced geometry tolerances beyond the federal minimum. Facilities on certain Class I corridors with high-priority freight may face more demanding interchange requirements than the FRA standard alone would impose. Our inspections evaluate against both frameworks.',
        },
        {
          q: 'Can a siding still be used while deficiencies are being remediated?',
          a: 'It depends on the severity and classification of the deficiencies. Some defects allow continued operations at restricted speeds; others require suspension of car movements until remediation is complete. Our reports classify every defect against the FRA standard, which determines the appropriate operational response. We provide clear guidance on which findings require immediate operational changes and which can be addressed on a maintenance schedule.',
        },
        {
          q: 'What happens when a pre-acceptance inspection reveals problems with newly constructed track?',
          a: 'A pre-acceptance inspection finding gives you the opportunity to require the contractor to correct deficiencies before you formally accept the track and before Class I operations commence. This is far preferable to discovering problems after acceptance, when remediation responsibility may be disputed. We document all findings in writing so your project team has a clear, actionable punch list to present to the construction contractor.',
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
