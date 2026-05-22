import { LandingPage } from '../LandingPage'

const PAGE = {
  seo: {
    title: 'Railroad Track Inspection in North Carolina | FRA-Certified',
    description: 'FRA-certified railroad track inspection services across North Carolina. Serving industrial facilities in Charlotte, Greensboro, Raleigh, Wilmington, and statewide. CSX and Norfolk Southern corridor expertise.',
    canonical: 'https://doerrstreetrailco.com/track-inspection-north-carolina',
  },
  hero: {
    title: 'Railroad Track Inspection in North Carolina',
    subtitle: 'Serving industrial facilities, short lines, and rail operators across the Tar Heel State.',
  },
  sections: [
    {
      type: 'intro',
      body: [
        'North Carolina is home to one of the most active industrial rail corridors in the Southeastern United States. The Charlotte-Piedmont manufacturing belt, the Triad\'s textile and logistics operations, the Research Triangle\'s advanced manufacturing base, and the Port of Wilmington\'s rail-served terminals all depend on private track infrastructure that must meet FRA standards and Class I interchange requirements.',
        'Doerr Street Rail Co provides FRA-certified railroad track inspection services throughout North Carolina — from the mountains to the coast. Our inspectors are based in the Carolinas and understand the CSX and Norfolk Southern operating environments that serve North Carolina industrial facilities.',
      ],
    },
    {
      type: 'trust',
      items: [
        { value: 'NC', label: 'Statewide Coverage' },
        { value: 'FRA', label: 'Part 213 Certified' },
        { value: 'CSX/NS', label: 'Corridor Expertise' },
        { value: '48hr', label: 'Report Turnaround' },
      ],
    },
    {
      type: 'two-col',
      heading: 'North Carolina Industrial Rail We Inspect',
      body: [
        'North Carolina\'s industrial rail network spans a wide range of facility types. Chemical manufacturers along the I-85 corridor, furniture and wood products operations in the Triad, automotive suppliers in the Piedmont, and agriculture-related facilities in the eastern counties all operate private track that requires documented inspection.',
        'Whether your facility connects to the CSX Q-Line through Charlotte, the NS Piedmont Subdivision through Greensboro, or a short-line connection in the eastern part of the state, our inspectors know the Class I track standards your siding must meet to maintain interchange.',
      ],
      listHeading: 'NC Facilities & Operations We Serve',
      items: [
        'Charlotte manufacturing and industrial corridor',
        'Piedmont Triad industrial facilities',
        'Research Triangle manufacturing operations',
        'Wilmington port and intermodal facilities',
        'Eastern NC agricultural and food processing',
        'Western NC paper and wood products',
        'Short-line railroad operators statewide',
        'Transload and bulk transfer terminals',
      ],
    },
    {
      type: 'features',
      heading: 'Why North Carolina Facilities Choose Us',
      subheading: 'Local presence. Class I expertise. FRA-standard reporting.',
      items: [
        {
          title: 'Carolina-Based Operations',
          body: 'We are headquartered in Weddington, NC. North Carolina is our home territory — we mobilize quickly and know the rail network.',
        },
        {
          title: 'CSX & NS Expertise',
          body: 'Our inspectors are alumni of Class I railroads that operate throughout North Carolina. We know their interchange requirements and audit standards.',
        },
        {
          title: 'FRA Part 213 Certified',
          body: 'Every inspector holds FRA Part 213 Track Safety Standards certification. Our reports meet the documentation standard required by federal inspectors.',
        },
        {
          title: 'Short-Line Experience',
          body: 'North Carolina\'s short-line network connects hundreds of industrial facilities. We serve short-line operators and the facilities they serve.',
        },
        {
          title: 'Rapid Response Available',
          body: 'For urgent track events in North Carolina, we can typically mobilize within 24 to 48 hours for emergency inspection and documentation.',
        },
        {
          title: 'Ongoing Inspection Programs',
          body: 'Monthly, quarterly, or semi-annual inspection programs keep North Carolina industrial track in continuous compliance.',
        },
      ],
    },
  ],
  cta: {
    heading: 'Schedule a Track Inspection in North Carolina',
    sub: 'Contact us to discuss your North Carolina facility\'s track and what a documented inspection program looks like for your operation.',
  },
}

export function NorthCarolinaPage({ onNavigate }) {
  return <LandingPage {...PAGE} onNavigate={onNavigate} />
}
