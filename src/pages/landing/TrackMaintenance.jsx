import { LandingPage } from './LandingPage'

const PAGE = {
  seo: {
    title: 'Railroad Track Maintenance | Tie Contractor & OTM Supply | Doerr Street Rail Co',
    description: 'Railroad track maintenance by a certified tie contractor with direct OTM supply. Transparent pricing, no surprises, quality work delivered on schedule across the Southeastern United States.',
    canonical: 'https://doerrstreetrailco.com/track-maintenance',
  },
  hero: {
    title: 'Railroad Track Maintenance',
    subtitle: 'Transparent pricing. Quality materials. Work completed on schedule.',
  },
  sections: [
    {
      type: 'intro',
      body: [
        'Track maintenance should not be a guessing game. Too many industrial track owners receive vague estimates, discover material costs that ballooned mid-project, or wait weeks past a promised completion date before their track is back in service. We built our maintenance operation to solve exactly those problems.',
        'Doerr Street Rail Co is not only a certified track inspection firm — we are a major railroad tie contractor with direct access to ties and Other Track Material at costs well below what most contractors pay on the open market. That means we bring the materials, the crew, and the certainty to every project we take on.',
      ],
    },
    {
      type: 'trust',
      items: [
        { value: 'OTM', label: 'Direct Material Access' },
        { value: '30+', label: 'Years Combined Experience' },
        { value: 'Class I', label: 'Trained & Certified' },
        { value: 'Fixed', label: 'Upfront Project Pricing' },
      ],
    },
    {
      type: 'two-col',
      heading: 'What We Maintain',
      body: [
        'Our maintenance crews handle the full scope of industrial track work — from targeted tie replacement on a single defect segment to complete line rehabilitation across a plant facility. Every project begins with a clear written scope and a fixed price before a single crew member sets foot on your property.',
        'Because we supply our own ties and OTM, we control the material pipeline from procurement through installation. There are no third-party supply delays, no inflated distributor markups passed to you, and no mid-project surprises when materials arrive short.',
      ],
      listHeading: 'Maintenance Scope',
      items: [
        'Tie replacement — spot, segment, and full-line',
        'Rail installation, adjustment, and joint repair',
        'Ballast application, surfacing, and tamping',
        'Switch maintenance, adjustment, and rebuilds',
        'Spike, plate, and anchor replacement',
        'Joint bar and fastener renewal',
        'Track surfacing and alignment correction',
        'FRA defect remediation and re-inspection',
      ],
    },
    {
      type: 'features',
      heading: 'The Doerr Street Maintenance Difference',
      subheading: 'Material advantage. Cost transparency. Work that holds.',
      items: [
        {
          title: 'Price Clarity From Day One',
          body: 'You receive a written scope and firm price before work begins. No open-ended estimates, no change orders for standard field conditions, no invoices that bear no resemblance to what you approved.',
        },
        {
          title: 'Major Tie Contractor Scale',
          body: 'We operate as a primary railroad tie contractor across the Southeast. That volume translates directly into material availability and pricing that smaller maintenance outfits cannot match.',
        },
        {
          title: 'OTM at a Fraction of Market Cost',
          body: 'Our direct supply relationships cover the full range of Other Track Material — plates, spikes, anchors, joint bars, and hardware. We pass those savings to our customers rather than padding a materials line item.',
        },
        {
          title: 'Work Completed on Schedule',
          body: 'We staff projects to finish on time, not to stretch billing hours. Delivery dates are commitments. If your track needs to be back in service by a specific date, we plan and crew accordingly.',
        },
        {
          title: 'Inspect-to-Maintain Continuity',
          body: 'When we inspect your track and identify defects, we can move directly into maintenance without a re-mobilization gap. One company, one point of contact, work that addresses exactly what the inspection found.',
        },
        {
          title: 'FRA-Certified Oversight on Every Job',
          body: 'Maintenance work is supervised by FRA Part 213 certified personnel. Your track is returned to service meeting or exceeding its FRA class designation — documented and defensible.',
        },
      ],
    },
    {
      type: 'text',
      heading: 'Who We Work With',
      body: 'We serve industrial track owners across the full range of rail-served operations — manufacturing facilities, paper and lumber mills, chemical and aggregate plants, transload terminals, and short-line railroads. If your operation depends on track being in service and you need a maintenance contractor who shows up with the right materials, gives you a straight price, and finishes when they said they would — that is exactly what we do.',
    },
  ],
  cta: {
    heading: 'Get a Track Maintenance Quote',
    sub: 'Tell us what your track needs. We will assess the scope, provide transparent pricing, and give you a schedule you can plan around.',
  },
}

export function TrackMaintenancePage({ onNavigate }) {
  return <LandingPage {...PAGE} onNavigate={onNavigate} />
}
