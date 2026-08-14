import { LandingPage } from '../LandingPage'

const PAGE = {
  seo: {
    title: 'Railroad Track Inspection in South Carolina | FRA-Certified',
    description: 'FRA-certified railroad track inspection across South Carolina. Serving automotive, chemical, port, and manufacturing facilities in Charleston, Greenville, Spartanburg, Columbia, and statewide.',
    canonical: 'https://doerrstreetrailco.com/track-inspection-south-carolina',
  },
  hero: {
    title: 'Railroad Track Inspection in South Carolina',
    subtitle: 'Serving automotive suppliers, port terminals, chemical plants, and industrial facilities statewide.',
  },
  sections: [
    {
      type: 'intro',
      body: [
        'South Carolina has emerged as one of the Southeast\'s most active industrial corridors. The BMW plant in Spartanburg, Volvo\'s North American assembly facility in Berkeley County, Boeing\'s operations outside Charleston, and the Port of Charleston\'s inland rail connections have all driven significant growth in rail-served industrial activity across the state.',
        'Where there is rail-served industry, there is private track that must meet FRA standards and Class I interchange requirements. Doerr Street Rail Co provides FRA-certified railroad track inspection throughout South Carolina — rapidly mobilized from our Carolina headquarters.',
      ],
    },
    {
      type: 'trust',
      items: [
        { value: 'SC', label: 'Statewide Coverage' },
        { value: 'FRA', label: 'Part 213 Certified' },
        { value: 'CSX/NS', label: 'Corridor Expertise' },
        { value: '48hr', label: 'Report Turnaround' },
      ],
    },
    {
      type: 'two-col',
      heading: 'South Carolina Rail Operations We Inspect',
      body: [
        'South Carolina\'s rail network is served by CSX and Norfolk Southern, with short-line connections extending rail access to facilities throughout the Upstate, Midlands, and Lowcountry. The state\'s automotive supply chain, chemical manufacturers, port-related logistics operations, and agricultural processing facilities all operate private track that needs documented inspection.',
        'The Port of Charleston\'s inland rail connectivity — including the Inland Port in Greer — has made Upstate South Carolina a significant intermodal hub, increasing both rail traffic volumes and the compliance expectations placed on facilities whose track connects to this network.',
      ],
      listHeading: 'SC Industries & Facilities We Serve',
      items: [
        'Automotive OEM and tier supplier facilities',
        'Port of Charleston terminal and rail operations',
        'Inland Port Greer intermodal connections',
        'Chemical and petrochemical plant track',
        'Upstate manufacturing and industrial facilities',
        'Columbia-area industrial corridors',
        'Lowcountry agricultural and food processing',
        'Short-line railroad operators statewide',
      ],
    },
    {
      type: 'features',
      heading: 'Why South Carolina Facilities Choose Us',
      subheading: 'Carolina-based. Class I trained. FRA certified.',
      items: [
        {
          title: 'Automotive Sector Experience',
          body: 'South Carolina\'s automotive corridor demands high-frequency, well-documented track programs. We understand the production pressures and the interchange standards OEM facilities face.',
        },
        {
          title: 'Port & Intermodal Expertise',
          body: 'Track serving port and intermodal terminals operates under elevated scrutiny. We inspect and document to the standard those environments require.',
        },
        {
          title: 'CSX & NS Interchange Knowledge',
          body: 'Both Class I railroads serving South Carolina have specific interchange requirements. Our inspectors know both standards from their Class I careers.',
        },
        {
          title: 'Chemical Plant Protocol',
          body: 'Chemical plant rail access demands careful coordination and elevated documentation standards. We have the experience and protocols to inspect safely in those environments.',
        },
        {
          title: 'Rapid Mobilization',
          body: 'From our Carolina base, we mobilize quickly across South Carolina for both scheduled programs and urgent inspection events.',
        },
        {
          title: 'Ongoing Compliance Programs',
          body: 'Monthly or quarterly inspection programs maintain continuous documentation and protect your interchange rights year-round.',
        },
      ],
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          q: 'How quickly can you mobilize for an inspection in South Carolina?',
          a: 'South Carolina is within our core service territory — we mobilize from our Carolina headquarters and can typically reach any South Carolina location within one to three business days for a scheduled inspection. For urgent situations in the Upstate or along the I-26 corridor, same-day or next-day response is often achievable.',
        },
        {
          q: 'Do you work with automotive OEM and supplier facilities in South Carolina?',
          a: 'Yes. The South Carolina automotive corridor — including the Upstate BMW, Volvo, and supplier ecosystem — represents a significant portion of our South Carolina work. Automotive OEM facilities require rigorous, well-documented track programs because Class I carriers serving those facilities conduct frequent interchange audits. We are familiar with those requirements and the documentation standards they expect.',
        },
        {
          q: 'What compliance issues are most common at South Carolina port-connected facilities?',
          a: 'Port-connected and intermodal-adjacent facilities in South Carolina face elevated Class I scrutiny because their track sees high car volumes and Class I operations that are closely monitored. The most common issues we find are switch wear and adjustment needs from the high cycle counts that intermodal-adjacent operations produce, along with ballast deterioration from heavy traffic loading. We document these systematically so facilities can manage them proactively.',
        },
        {
          q: 'Can you inspect chemical plant track safely in South Carolina?',
          a: 'Yes. We have experience inspecting track in chemical manufacturing and petrochemical environments across the Southeast, including South Carolina. We coordinate with facility safety personnel on access requirements, PPE protocols, and hot work restrictions before any field work begins. Our inspectors are familiar with the track conditions these environments produce and document them accurately.',
        },
        {
          q: 'Do you offer ongoing monthly inspection programs for South Carolina facilities?',
          a: 'Yes. Monthly and quarterly inspection programs are available for South Carolina facilities and are particularly valuable for high-volume operations, automotive suppliers with Class I audit exposure, and port-connected facilities. We structure programs around your operational calendar and deliver written reports within 48 hours of each visit — giving you a continuous compliance documentation record.',
        },
      ],
    },
  ],
  cta: {
    heading: 'Schedule a Track Inspection in South Carolina',
    sub: 'Contact us to discuss your South Carolina facility\'s track, interchange requirements, and compliance program.',
  },
}

export function SouthCarolinaPage({ onNavigate }) {
  return <LandingPage {...PAGE} onNavigate={onNavigate} />
}
