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
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          q: 'How quickly can you mobilize for a track inspection in North Carolina?',
          a: 'North Carolina is our home territory — we are headquartered in Weddington, in the Charlotte metro area. For most North Carolina locations, we can mobilize within one to three business days for standard scheduled inspections. For urgent situations such as a Class I restriction, a derailment, or a pending audit, same-day or next-day mobilization is often possible.',
        },
        {
          q: 'Do you work with both CSX and Norfolk Southern-served facilities in North Carolina?',
          a: 'Yes. Our inspectors are alumni of both CSX and Norfolk Southern, among other Class I carriers. We are familiar with the interchange requirements, audit protocols, and operating standards both railroads apply to private track in North Carolina — which means our inspections are calibrated to what your specific Class I partner will actually expect.',
        },
        {
          q: 'What industries in North Carolina most commonly need track inspection services?',
          a: 'The facilities we most frequently inspect in North Carolina include manufacturing plants in the Charlotte-Piedmont corridor, chemical facilities along the I-85 corridor, wood products and paper operations in the western and central parts of the state, agricultural processing facilities in eastern NC, and transload terminals throughout the state. Short-line railroad operators serving rural industrial customers also represent a significant portion of our North Carolina work.',
        },
        {
          q: 'What is the most common compliance problem you find on North Carolina industrial track?',
          a: 'Deferred tie replacement is the most common significant finding on North Carolina industrial track. Tie condition tends to deteriorate gradually and without obvious operational symptoms until the percentage of defective ties in a 39-foot segment exceeds the FRA threshold. Ballast fouling — often accelerated by inadequate drainage — is the second most common problem. Both are entirely addressable with a planned maintenance program once they are properly documented.',
        },
        {
          q: 'Can you support both the inspection and any maintenance work needed on our North Carolina facility track?',
          a: 'Yes. We inspect and maintain track across North Carolina. Our tie contractor relationships and direct OTM access mean we can often provide maintenance at better material pricing than a local contractor purchasing from a distributor. Moving from inspection findings directly to a maintenance scope — with one company, one contact — eliminates the scheduling gap and re-mobilization cost that separate inspection and maintenance vendors create.',
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
