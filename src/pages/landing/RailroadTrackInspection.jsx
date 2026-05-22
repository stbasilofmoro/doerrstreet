import { LandingPage } from './LandingPage'

const PAGE = {
  seo: {
    title: 'Railroad Track Inspection Services | FRA-Certified Inspectors',
    description: 'FRA-certified railroad track inspection for industrial facilities and rail operators across the Southeastern U.S. Class I experience, written reports within 48 hours, rapid mobilization.',
    canonical: 'https://doerrstreetrailco.com/railroad-track-inspection',
  },
  hero: {
    title: 'Railroad Track Inspection Services',
    subtitle: 'FRA Part 213 certified. Class I trained. Written reports within 48 hours.',
  },
  sections: [
    {
      type: 'intro',
      body: [
        'Industrial track owners cannot afford surprises. Whether you manage a plant spur, a bulk transfer siding, or miles of private track serving a manufacturing complex, the condition of your railroad track directly affects your operations, your compliance standing, and your relationship with the Class I railroad you interchange with.',
        'Our railroad track inspection services give you a documented, defensible record of your track\'s condition — written by inspectors who spent careers on the Class I side of the industry. We know what a railroad inspector looks for, because most of us were railroad inspectors.',
      ],
    },
    {
      type: 'trust',
      items: [
        { value: 'FRA', label: 'Part 213 Certified' },
        { value: '30+', label: 'Years Combined Experience' },
        { value: '800+', label: 'Inspections Completed' },
        { value: '48hr', label: 'Written Report Delivery' },
      ],
    },
    {
      type: 'two-col',
      heading: 'What Our Inspectors Examine',
      body: [
        'Every railroad track inspection we conduct follows the Federal Railroad Administration\'s Track Safety Standards under 49 CFR Part 213. Our inspectors walk the track, take measurements, document defects, and produce a written report that gives you a clear picture of where your track stands — and what needs attention first.',
        'We inspect industrial leads, private sidings, plant spurs, loop tracks, and interchange yard tracks. No track geometry or ownership structure is too complex for our team.',
      ],
      listHeading: 'Inspection Scope',
      items: [
        'Rail condition, wear, and surface defects',
        'Tie condition per FRA 39-foot segment standard',
        'Ballast depth, fouling, and drainage',
        'Track surface, line, and gage deviations',
        'Switch stands, points, and switch machines',
        'Joint bars, fasteners, and anchors',
        'Crossings and grade crossing conditions',
        'FRA defect classification and priority ranking',
      ],
    },
    {
      type: 'features',
      heading: 'Why Industrial Track Owners Choose Us',
      subheading: 'Class I experience on every track walk',
      items: [
        {
          title: 'Class I Railroad Alumni',
          body: 'Our inspectors came up through CSX, Norfolk Southern, BNSF, and other Class I carriers. They inspect to the same standard they operated under.',
        },
        {
          title: 'FRA Part 213 Certified',
          body: 'Every inspector holds current FRA Part 213 Track Safety Standards certification covering Classes I through VI.',
        },
        {
          title: 'Written Reports Within 48 Hours',
          body: 'You receive a complete written and photographic inspection report within two business days of the field inspection.',
        },
        {
          title: 'Defect Priority Ranking',
          body: 'Reports clearly separate immediate safety concerns from scheduled maintenance items — so your team knows exactly where to focus first.',
        },
        {
          title: 'Remediation Support',
          body: 'We don\'t walk away after the report. We support your maintenance team through remediation planning and re-inspection.',
        },
        {
          title: 'Rapid Mobilization',
          body: 'For urgent track events, derailment response, or Class I audit preparation, we mobilize quickly across the Southeastern United States.',
        },
      ],
    },
    {
      type: 'text',
      heading: 'Industries We Inspect Railroad Track For',
      body: 'We serve the full range of rail-served industrial operations — paper mills, aggregate facilities, chemical plants, transload terminals, manufacturing facilities, lumber operations, food processing plants, and short-line railroads. If product moves on rail and the track needs to be documented, we are equipped to inspect it.',
    },
  ],
  cta: {
    heading: 'Schedule a Railroad Track Inspection',
    sub: 'Contact us to discuss your track, your timeline, and what a professional inspection program looks like for your operation.',
  },
}

export function RailroadTrackInspectionPage({ onNavigate }) {
  return <LandingPage {...PAGE} onNavigate={onNavigate} />
}
