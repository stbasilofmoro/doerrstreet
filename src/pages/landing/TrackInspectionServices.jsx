import { LandingPage } from './LandingPage'

const PAGE = {
  seo: {
    title: 'Track Inspection Services | Complete Industrial Rail Inspection',
    description: 'Complete track inspection services for industrial facilities, short-line railroads, and private track owners. FRA-certified. Class I experience. Southeastern United States.',
    canonical: 'https://doerrstreetrailco.com/track-inspection-services',
  },
  hero: {
    title: 'Track Inspection Services',
    subtitle: 'Full-service railroad track inspection and safety programs across the Southeastern United States.',
  },
  sections: [
    {
      type: 'intro',
      body: [
        'Doerr Street Rail Co provides comprehensive track inspection services for industrial facilities, short-line operators, and private track owners who need more than a casual track walk. Our inspectors carry FRA Part 213 certification, Class I railroad experience, and the field tools to produce inspection reports that stand up to regulatory and legal scrutiny.',
        'We offer a full range of track inspection services — from single-event compliance inspections to ongoing monthly or quarterly programs. Every service is backed by written documentation, photographic records, and direct access to our inspection team.',
      ],
    },
    {
      type: 'features',
      heading: 'Our Track Inspection Services',
      subheading: 'Everything your railroad track program requires',
      items: [
        {
          title: 'FRA Compliance Inspection',
          body: 'Full track walk against 49 CFR Part 213 standards. Defect classification, measurement documentation, and written report within 48 hours.',
        },
        {
          title: 'Industrial Siding Inspection',
          body: 'Inspection of private sidings, plant spurs, and interchange tracks against Class I railroad and FRA standards.',
        },
        {
          title: 'Switch & Turnout Inspection',
          body: 'Detailed inspection of switch stands, switch points, switch machines, frogs, and guard rails with lubrication and adjustment recommendations.',
        },
        {
          title: 'Pre-Audit Inspection',
          body: 'Inspection conducted before a scheduled Class I railroad audit — identifying and documenting defects on your timeline, not theirs.',
        },
        {
          title: 'Post-Incident Inspection',
          body: 'Track condition assessment following a derailment, slow order, or damage event, with documentation suitable for insurance and regulatory purposes.',
        },
        {
          title: 'Monthly Inspection Programs',
          body: 'Recurring inspection programs that maintain continuous compliance documentation and identify degradation before it becomes a critical defect.',
        },
        {
          title: 'New Construction Inspection',
          body: 'Pre-acceptance inspection of new track construction or rehabilitation before Class I operations commence over the track.',
        },
        {
          title: 'Acquisition Due Diligence',
          body: 'Independent track condition assessment for rail-served facilities changing ownership — know your track liability before closing.',
        },
      ],
    },
    {
      type: 'trust',
      items: [
        { value: 'FRA', label: 'Part 213 Certified' },
        { value: '800+', label: 'Inspections Completed' },
        { value: '30+', label: 'Years Experience' },
        { value: '48hr', label: 'Report Turnaround' },
      ],
    },
    {
      type: 'two-col',
      heading: 'How Our Inspection Process Works',
      body: [
        'Every track inspection begins with a pre-inspection conversation to understand your track configuration, operational constraints, Class I interchange requirements, and any known problem areas. We coordinate right-of-entry, schedule around your production calendar, and arrive with the measurement tools and documentation systems to complete the inspection efficiently.',
        'After the field inspection, you receive a written report — organized by track segment, with defect descriptions, FRA classifications, location references, photographic documentation, and a priority ranking that tells your maintenance team what needs attention first.',
      ],
      listHeading: 'What You Receive',
      items: [
        'Pre-inspection site coordination',
        'FRA Part 213 compliant field inspection',
        'Written report within 48 hours',
        'Photographic documentation of all defects',
        'FRA defect classification by track segment',
        'Priority ranking: immediate vs. scheduled',
        'Remediation scope guidance',
        'Re-inspection scheduling support',
      ],
    },
  ],
  cta: {
    heading: 'Request Track Inspection Services',
    sub: 'Tell us about your track and we\'ll recommend the right inspection scope for your facility and your compliance requirements.',
  },
}

export function TrackInspectionServicesPage({ onNavigate }) {
  return <LandingPage {...PAGE} onNavigate={onNavigate} />
}
