import { LandingPage } from '../LandingPage'

const PAGE = {
  seo: {
    title: 'Railroad Track Inspection in Tennessee | FRA-Certified',
    description: 'FRA-certified railroad track inspection across Tennessee. Serving automotive, chemical, manufacturing, and industrial facilities in Nashville, Memphis, Chattanooga, Knoxville, and statewide.',
    canonical: 'https://doerrstreetrailco.com/track-inspection-tennessee',
  },
  hero: {
    title: 'Railroad Track Inspection in Tennessee',
    subtitle: 'Serving automotive manufacturers, chemical facilities, and industrial operations across the Volunteer State.',
  },
  sections: [
    {
      type: 'intro',
      body: [
        'Tennessee has become one of the most industrially active states in the Southeast. The Nashville corridor\'s rapid manufacturing growth, the Volkswagen assembly plant in Chattanooga, Nissan\'s North American operations in Smyrna, and the Tennessee Valley\'s heavy industrial heritage have created a dense network of rail-served industrial facilities that require documented, professional track inspection.',
        'CSX, Norfolk Southern, and CN all operate significant corridor mileage through Tennessee, with short-line connections extending rail access throughout the state. Every facility that connects to this network depends on private track that must meet FRA standards and Class I interchange requirements.',
      ],
    },
    {
      type: 'trust',
      items: [
        { value: 'TN', label: 'Statewide Coverage' },
        { value: 'FRA', label: 'Part 213 Certified' },
        { value: 'Class I', label: 'Railroad Alumni' },
        { value: '48hr', label: 'Report Turnaround' },
      ],
    },
    {
      type: 'two-col',
      heading: 'Tennessee Rail Operations We Inspect',
      body: [
        'Tennessee\'s rail-served industrial base reflects the state\'s diverse economy. Automotive OEM and supplier facilities in the middle Tennessee corridor, chemical manufacturers along the Cumberland River, steel and metals operations in east Tennessee, and agricultural processing facilities in the west all operate private track that needs FRA-standard documentation.',
        'Memphis, as one of the busiest freight rail hubs in North America, anchors the western anchor of Tennessee\'s rail network. The NS and CSX corridors through the middle and eastern parts of the state serve hundreds of industrial facilities. Our inspectors have carried Class I credentials on several of these routes.',
      ],
      listHeading: 'Tennessee Industries & Facilities We Serve',
      items: [
        'Nashville-area manufacturing and distribution',
        'Automotive OEM and tier supplier track',
        'Chattanooga industrial corridor',
        'Memphis rail hub and industrial facilities',
        'Chemical and petrochemical plant track',
        'East Tennessee steel and metals operations',
        'Agricultural processing facilities statewide',
        'Short-line railroad operators',
      ],
    },
    {
      type: 'features',
      heading: 'Why Tennessee Facilities Choose Us',
      subheading: 'Class I experience on every Tennessee track walk',
      items: [
        {
          title: 'Automotive Sector Expertise',
          body: 'Tennessee\'s automotive manufacturing corridor demands rigorous track programs. We understand the interchange standards and production-driven constraints these facilities face.',
        },
        {
          title: 'Multi-Railroad Knowledge',
          body: 'Tennessee is served by CSX, NS, and CN — three different Class I carriers with different interchange requirements. Our inspectors know all three.',
        },
        {
          title: 'Chemical Plant Protocol',
          body: 'Tennessee\'s chemical manufacturing corridor requires careful coordination and elevated documentation standards. We have the experience to inspect safely and thoroughly.',
        },
        {
          title: 'Memphis Hub Experience',
          body: 'The Memphis rail hub is one of the most complex freight environments in the country. Our inspectors understand what Class I carriers expect from facilities in that environment.',
        },
        {
          title: 'FRA Part 213 Certified',
          body: 'Every inspection is conducted against FRA Part 213 Track Safety Standards, producing documentation that satisfies federal and Class I requirements.',
        },
        {
          title: 'Ongoing Inspection Programs',
          body: 'We build monthly, quarterly, or semi-annual inspection programs that keep Tennessee industrial track in continuous documented compliance.',
        },
      ],
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          q: 'Do you work with facilities served by CSX, NS, and CN in Tennessee?',
          a: 'Yes. Tennessee is one of the few states served by three Class I carriers — CSX, Norfolk Southern, and CN. Our inspectors have Class I backgrounds that include experience with all three carriers\' interchange requirements and inspection standards. If your facility connects to any of the three Tennessee Class I networks, we can calibrate our inspection to the specific standards your carrier applies.',
        },
        {
          q: 'What track compliance challenges are most common at Tennessee automotive facilities?',
          a: 'Tennessee\'s automotive facilities — particularly the Volkswagen plant in Chattanooga and the Nissan complex in Smyrna — create high-frequency, high-precision track use patterns. The most common issues we see at automotive and tier supplier facilities are switch maintenance needs from high cycle counts, surface deviation in precision spotting zones, and documentation gaps from inconsistent inspection history. Automotive OEM facilities face frequent Class I audits, making documentation quality critical.',
        },
        {
          q: 'Can you service facilities in Memphis and western Tennessee?',
          a: 'Yes. Memphis is one of the most active rail hubs in North America, and the concentration of rail-served industrial facilities in the Memphis area creates significant demand for professional inspection services. We serve Memphis-area facilities and can mobilize from our Southeast base. The multi-railroad interchange environment at Memphis — including CN, CSX, NS, and short-line connections — means that Memphis-area facilities often face complex compliance requirements that benefit from our multi-carrier experience.',
        },
        {
          q: 'What are the most common track problems at Tennessee chemical plants?',
          a: 'Chemical facilities along the Cumberland River and in the Tennessee industrial corridor typically show ballast contamination from spill events, accelerated rail corrosion from atmospheric exposure, and tie degradation from chemical saturation. Switch maintenance is also a frequent finding at these facilities. Our inspectors coordinate with facility safety teams before any field work in chemical environments and document findings with the additional care those environments warrant.',
        },
        {
          q: 'Do you offer recurring inspection programs for Tennessee facilities?',
          a: 'Yes — monthly, quarterly, and semi-annual inspection programs are available for Tennessee facilities across all industries. Programs are priced on a fixed annual or quarterly fee so you have predictable inspection costs. Each visit produces a written report within 48 hours, and our reports track condition changes from visit to visit so you can see trends in your track\'s condition over time.',
        },
      ],
    },
  ],
  cta: {
    heading: 'Schedule a Track Inspection in Tennessee',
    sub: 'Contact us to discuss your Tennessee facility\'s track requirements and build an inspection program that keeps your rail access protected.',
  },
}

export function TennesseePage({ onNavigate }) {
  return <LandingPage {...PAGE} onNavigate={onNavigate} />
}
