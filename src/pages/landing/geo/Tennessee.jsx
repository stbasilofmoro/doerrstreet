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
  ],
  cta: {
    heading: 'Schedule a Track Inspection in Tennessee',
    sub: 'Contact us to discuss your Tennessee facility\'s track requirements and build an inspection program that keeps your rail access protected.',
  },
}

export function TennesseePage({ onNavigate }) {
  return <LandingPage {...PAGE} onNavigate={onNavigate} />
}
