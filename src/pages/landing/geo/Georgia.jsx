import { LandingPage } from '../LandingPage'

const PAGE = {
  seo: {
    title: 'Railroad Track Inspection in Georgia | FRA-Certified',
    description: 'FRA-certified railroad track inspection across Georgia. Serving industrial facilities in Atlanta, Savannah, Augusta, Columbus, and statewide. CSX, Norfolk Southern, and short-line corridor expertise.',
    canonical: 'https://doerrstreetrailco.com/track-inspection-georgia',
  },
  hero: {
    title: 'Railroad Track Inspection in Georgia',
    subtitle: 'Serving industrial facilities across metro Atlanta, the Port of Savannah corridor, and statewide Georgia.',
  },
  sections: [
    {
      type: 'intro',
      body: [
        'Georgia sits at the center of Southeastern freight rail operations. Atlanta is one of the busiest railroad hubs east of the Mississippi, with CSX and Norfolk Southern operating major classification yards and through routes that connect to industrial facilities across the metro area and beyond. The Port of Savannah — one of the fastest-growing container ports in North America — drives significant rail-served industrial activity through its inland rail corridors.',
        'Industrial facilities across Georgia depend on private track infrastructure that must comply with FRA standards and meet the interchange requirements of the Class I railroads that serve them. Doerr Street Rail Co provides FRA-certified railroad track inspection throughout Georgia, mobilizing from our Carolinas base.',
      ],
    },
    {
      type: 'trust',
      items: [
        { value: 'GA', label: 'Statewide Coverage' },
        { value: 'FRA', label: 'Part 213 Certified' },
        { value: 'CSX/NS', label: 'Corridor Expertise' },
        { value: '48hr', label: 'Report Turnaround' },
      ],
    },
    {
      type: 'two-col',
      heading: 'Georgia Rail Operations We Inspect',
      body: [
        'Georgia\'s rail-served industrial base spans the full spectrum of industrial activity. Automotive manufacturing in the greater Atlanta area, poultry and agriculture processing in the south and west, chemical and manufacturing facilities in the Augusta-Columbus corridor, and port-related logistics operations in the Savannah area all operate private track that requires documented inspection.',
        'The Norfolk Southern Atlanta hub and CSX\'s major Georgia corridors serve facilities across the state. Short-line railroads extend rail access to smaller communities. Our inspectors know how all of these systems work — and what compliance looks like on each.',
      ],
      listHeading: 'Georgia Industries & Facilities We Serve',
      items: [
        'Metro Atlanta manufacturing and distribution',
        'Port of Savannah terminal and inland rail',
        'Automotive and tier supplier facilities',
        'Poultry and agricultural processing plants',
        'Chemical and industrial facilities statewide',
        'Augusta-Columbus industrial corridor',
        'Short-line railroad operators',
        'Transload and bulk transfer terminals',
      ],
    },
    {
      type: 'features',
      heading: 'Why Georgia Facilities Choose Us',
      subheading: 'Southeast specialists with deep Class I experience',
      items: [
        {
          title: 'Atlanta Rail Hub Expertise',
          body: 'Atlanta is one of the most complex rail environments in the Southeast. Our inspectors understand the NS and CSX operating patterns and interchange standards that Atlanta-area facilities must meet.',
        },
        {
          title: 'Savannah Port Knowledge',
          body: 'Port-adjacent industrial track operates under elevated scrutiny. We understand the documentation and compliance expectations that Savannah-area facilities face.',
        },
        {
          title: 'Agricultural Rail Experience',
          body: 'Georgia\'s poultry and agricultural processing sector relies on rural rail connections that often operate with aging track infrastructure. We inspect and document with that context in mind.',
        },
        {
          title: 'CSX & NS Certified',
          body: 'Our inspectors are Class I alumni who know both CSX and NS interchange requirements from the inside.',
        },
        {
          title: 'Statewide Mobilization',
          body: 'We serve all of Georgia — metro Atlanta, the coast, the Piedmont, the southwest ag belt, and everywhere in between.',
        },
        {
          title: 'Ongoing Programs Available',
          body: 'Monthly, quarterly, or semi-annual inspection programs keep Georgia industrial track in continuous compliance year-round.',
        },
      ],
    },
  ],
  cta: {
    heading: 'Schedule a Track Inspection in Georgia',
    sub: 'Contact us to discuss your Georgia facility\'s track and what a documented inspection program looks like for your operation.',
  },
}

export function GeorgiaPage({ onNavigate }) {
  return <LandingPage {...PAGE} onNavigate={onNavigate} />
}
