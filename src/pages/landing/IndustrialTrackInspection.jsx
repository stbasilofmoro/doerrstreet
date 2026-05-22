import { LandingPage } from './LandingPage'

const PAGE = {
  seo: {
    title: 'Industrial Track Inspection | Plant Rail & Siding Inspection Services',
    description: 'Industrial track inspection for plant spurs, sidings, and private rail infrastructure. FRA-certified inspectors serving manufacturing, chemical, aggregate, paper, and food processing facilities across the Southeast.',
    canonical: 'https://doerrstreetrailco.com/industrial-track-inspection',
  },
  hero: {
    title: 'Industrial Track Inspection Services',
    subtitle: 'Plant spurs. Private sidings. Industrial leads. Interchange tracks. We inspect them all.',
  },
  sections: [
    {
      type: 'intro',
      body: [
        'Industrial track operates in a different environment than mainline railroad track — higher switch cycle counts, heavier spotting loads, tighter curves, inadequate ballast sections, and years of deferred maintenance compressed into facilities that were never designed for railroad-standard geometry. Most industrial track owners know their track has problems. Very few know the full extent until they get a written inspection report.',
        'Our industrial track inspection services provide exactly that. We walk your plant track, document what we find against FRA Part 213 standards, classify every defect, and deliver a written report that tells your maintenance team — and your Class I partner — where your track actually stands.',
      ],
    },
    {
      type: 'trust',
      items: [
        { value: 'FRA', label: 'Part 213 Certified' },
        { value: '30+', label: 'Years Field Experience' },
        { value: '800+', label: 'Projects Completed' },
        { value: 'SE', label: 'U.S. Coverage' },
      ],
    },
    {
      type: 'two-col',
      heading: 'The Industrial Track Challenge',
      body: [
        'Industrial track is uniquely difficult to maintain. Facilities prioritize production over track maintenance, equipment loads often exceed design parameters, and track geometry issues compound over time. When a Class I railroad finally sends a track inspector, the defect list can be long — and the remediation timeline short.',
        'Our inspectors understand industrial operations. We work around production schedules, coordinate with plant engineering, and produce reports that facility managers and railroad representatives can both act on. We speak the language of both the plant floor and the railroad roadmaster\'s office.',
      ],
      listHeading: 'Industrial Track Types We Inspect',
      items: [
        'Plant lead and spur tracks',
        'Loading and unloading sidings',
        'Car storage and staging tracks',
        'Loop tracks and runaround leads',
        'Interchange and delivery tracks',
        'Switch yards within industrial complexes',
        'Transload and transfer facility track',
        'New construction pre-acceptance inspection',
      ],
    },
    {
      type: 'features',
      heading: 'Industries We Serve',
      subheading: 'Deep experience across rail-served industrial sectors',
      items: [
        {
          title: 'Paper & Pulp Mills',
          body: 'High cycle, heavy load environments with complex switch configurations and tight maintenance windows between production runs.',
        },
        {
          title: 'Aggregate & Mining',
          body: 'Loaded car weights frequently at or above FRA Class limits. Ballast contamination and drainage issues are common and well-documented in our reports.',
        },
        {
          title: 'Chemical Plants',
          body: 'Regulatory scrutiny is elevated and interchange documentation requirements are strict. We inspect to the standard your railroad and your insurance carrier expect.',
        },
        {
          title: 'Manufacturing Facilities',
          body: 'Automotive, steel, and heavy manufacturing facilities often have aging track infrastructure that has never received a formal FRA-standard inspection.',
        },
        {
          title: 'Food Processing & Lumber',
          body: 'Rail-served food and timber facilities need documented track programs that satisfy both railroad interchange requirements and internal safety standards.',
        },
        {
          title: 'Transload & Intermodal',
          body: 'High-frequency car movement creates accelerated wear patterns. Our inspection programs identify degradation early, before it becomes an unscheduled shutdown.',
        },
      ],
    },
  ],
  cta: {
    heading: 'Get Your Industrial Track Inspected',
    sub: 'Contact us to discuss your facility\'s track, your interchange requirements, and what a documented inspection program looks like for your operation.',
  },
}

export function IndustrialTrackInspectionPage({ onNavigate }) {
  return <LandingPage {...PAGE} onNavigate={onNavigate} />
}
