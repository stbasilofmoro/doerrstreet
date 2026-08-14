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
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          q: 'Do you serve facilities in metro Atlanta as well as rural Georgia?',
          a: 'Yes — we serve all of Georgia. Metro Atlanta facilities, the Savannah port corridor, the Augusta-Columbus industrial belt, agricultural operations in south and west Georgia, and short-line-served rural facilities are all within our service area. Georgia is one of our most active states, and we have inspection experience across the full range of facility types operating in the state.',
        },
        {
          q: 'What are the most common track compliance issues at Atlanta-area industrial facilities?',
          a: 'Atlanta-area industrial facilities often have older track infrastructure that predates current FRA classification requirements. The most common findings are tie deficiency conditions in high-use sections near loading spots, gage deviation from heavy car weights and tight curve radii, and switch wear from high cycle counts. The NS Atlanta hub environment means Class I audits happen regularly, which makes documented inspection programs especially important for Atlanta-corridor facilities.',
        },
        {
          q: 'Can you inspect track at facilities near the Port of Savannah?',
          a: 'Yes. The Savannah port corridor is one of the highest-volume rail environments in the Southeast and the facilities serving it face significant Class I compliance pressure. We inspect transload terminals, distribution centers, and manufacturing facilities throughout the Savannah area. The Georgia Ports Authority rail operations create a compliance-intensive environment where professional inspection documentation is particularly valuable.',
        },
        {
          q: 'What track issues are most common at Georgia agricultural processing facilities?',
          a: 'Agricultural processing facilities in Georgia — particularly poultry and grain operations — often have older, lighter-weight infrastructure that has not been upgraded to match current car weight standards. Tie deficiency, inadequate ballast sections, and surface deviation from soft subgrade are the most common findings. Many of these facilities have not had a professional inspection in years, and a baseline inspection often surfaces a significant backlog of deferred maintenance.',
        },
        {
          q: 'How do we set up an ongoing inspection program for our Georgia facility?',
          a: 'Contact us to discuss your facility\'s track, your Class I connection, and your operational constraints. We will propose an appropriate inspection frequency, provide a fixed program price, and schedule the first inspection at a time that works for your operation. From there, inspections proceed on the agreed calendar with written reports delivered within 48 hours of each visit. Most programs are operational within two to three weeks of the initial conversation.',
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
