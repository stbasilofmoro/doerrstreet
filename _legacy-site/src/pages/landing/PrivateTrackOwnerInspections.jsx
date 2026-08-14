import { LandingPage } from './LandingPage'

const PAGE = {
  seo: {
    title: 'Private Track Owner Inspections | Railroad Track Asset Compliance',
    description: 'FRA-certified railroad track inspections for private track owners. Asset condition documentation, compliance assessment, capital obligation analysis, and written reports for property owners, investors, and estate managers.',
    canonical: 'https://doerrstreetrailco.com/private-track-owner-inspections',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Railroad Track Inspection',
      name: 'Private Track Owner Inspections',
      description: 'FRA-certified railroad track inspection and asset condition documentation services for private track owners, property investors, and rail infrastructure asset managers.',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Doerr Street Rail Co',
        url: 'https://doerrstreetrailco.com',
        telephone: '+1-704-321-0802',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Weddington',
          addressRegion: 'NC',
          postalCode: '28104',
          addressCountry: 'US',
        },
      },
      areaServed: 'Southeastern United States',
    },
  },
  hero: {
    title: 'Private Track Owner Inspections',
    subtitle: 'You own the track. You bear the compliance obligation. Know exactly what you have.',
  },
  sections: [
    {
      type: 'intro',
      body: [
        'Private track ownership is a form of infrastructure ownership — and like any infrastructure asset, it carries ongoing maintenance obligations, regulatory compliance requirements, and liability exposure that comes with the deed. Whether you are an industrial property owner, an investment fund that acquired a rail-served facility, an estate executor managing inherited property, or a company that owns track it no longer actively uses, the track on your property is your legal and regulatory responsibility.',
        'Doerr Street Rail Co provides track owner inspections specifically designed for the asset management context. Our reports give owners the documented picture of their track asset they need — current condition, compliance status, maintenance obligations, and capital cost context. This is not an operational inspection conducted for a plant manager. It is a professional condition assessment conducted for someone who owns a piece of infrastructure and needs to understand exactly what they own.',
      ],
    },
    {
      type: 'trust',
      items: [
        { value: 'Asset', label: 'Condition Focus' },
        { value: 'FRA', label: 'Certified Inspectors' },
        { value: 'Capital', label: 'Obligation Analysis' },
        { value: '48hr', label: 'Written Report' },
      ],
    },
    {
      type: 'two-col',
      heading: 'What a Track Owner Inspection Provides',
      body: [
        'A track owner inspection goes beyond the basic FRA-standard deficiency list. It provides the contextual analysis that an asset owner needs: What is the condition of this infrastructure? What will it cost to bring it into compliance? What is the regulatory exposure associated with its current condition? What maintenance obligations are likely to arise in the next three to five years? These questions require not just inspection competence but capital program experience — which is what our team brings.',
        'Every track owner inspection results in a written report that documents current conditions, classifies all observed deficiencies against the applicable federal standard, and provides a practical assessment of capital obligations. We write these reports to be readable by a property owner, an investment analyst, or an estate attorney — not just a track maintenance supervisor. The goal is a document that informs ownership decisions.',
      ],
      listHeading: 'Track Owner Report Contents',
      items: [
        'Physical track inventory (length, configuration, track class)',
        'Current condition assessment per FRA Part 213',
        'Deficiency list with classification and location',
        'Compliance status relative to applicable standard',
        'Remediation priority ranking with urgency context',
        'Estimated capital cost range for compliance remediation',
        'Three-to-five year capital obligation projection',
        'Liability and regulatory exposure summary',
      ],
    },
    {
      type: 'features',
      heading: 'Who Uses Private Track Owner Inspections',
      subheading: 'Ownership creates obligation. Knowledge protects against both.',
      items: [
        {
          title: 'Industrial Property Owners',
          body: 'Owners of rail-served industrial properties — whether actively operating or leased to tenants — need documented knowledge of their track asset. Track condition affects property value, lease terms, and the owner\'s regulatory exposure regardless of who is using the facility.',
        },
        {
          title: 'Real Estate Investors and Funds',
          body: 'Investment funds and real estate investors acquiring rail-served industrial properties routinely underestimate the capital obligations associated with track. A pre-acquisition inspection establishes those obligations clearly before purchase price and capital reserves are finalized.',
        },
        {
          title: 'Estate and Trust Administrators',
          body: 'Estates and trusts that include rail-served industrial property need documented track condition assessments to understand asset condition, compliance status, and capital obligations. We provide the professional documentation that estate and trust administrators need to manage rail assets responsibly.',
        },
        {
          title: 'Tenants vs. Owners — Clarity on Responsibility',
          body: 'When track maintenance responsibility is shared or disputed between owner and tenant, an independent professional inspection documents current conditions clearly — providing an objective baseline that both parties can use to define responsibility going forward.',
        },
        {
          title: 'Dormant or Inactive Track Owners',
          body: 'Track that is no longer in active use still carries ownership obligations. If a carrier could potentially use the track, federal standards may still apply. Owners of dormant track benefit from an inspection that documents current conditions and clarifies the regulatory picture.',
        },
        {
          title: 'Pre-Sale and Divestiture Support',
          body: 'Sellers of rail-served industrial properties who provide professional track condition documentation reduce transaction friction, demonstrate good-faith disclosure, and position their track asset accurately in the divestiture process.',
        },
      ],
    },
    {
      type: 'text',
      heading: 'Track Ownership and Regulatory Exposure',
      body: [
        'Private track owners frequently underestimate their regulatory exposure. The FRA Track Safety Standards under 49 CFR Part 213 apply to track used by carriers. If your property includes track that has been or could be used by a railroad carrier, those standards apply to that track. The exposure is not theoretical — the FRA maintains an active field inspection presence, and Class I railroads conduct compliance audits of private track they operate over as part of their own regulatory obligations. Track owners who do not know the condition of their track are not insulated from these consequences; they are simply uninformed about their exposure.',
        'The most effective way to manage track ownership risk is to know exactly what you own. A professional inspection report documents current conditions in a form that is defensible to regulators, credible to insurers, and useful to the attorneys and advisors who may need to understand your track asset in various contexts. Ownership documentation is not a luxury — it is a basic component of responsible management of a regulated infrastructure asset.',
      ],
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          q: 'I own a rail-served property but a tenant operates it. Am I still responsible for the track?',
          a: 'Ownership creates baseline liability for the condition of property, including track. The extent of your obligation relative to your tenant\'s depends on your lease agreement. Regardless of lease terms, however, an owner who lacks documented knowledge of their track\'s condition is in a weaker position in any dispute or regulatory proceeding than one who has a current professional inspection report.',
        },
        {
          q: 'The track on my property has not been used in several years. Do I still need to worry about it?',
          a: 'Dormant track still carries ownership obligations. If the track is in a condition that could make it hazardous to anyone who accesses the property, that is a liability issue independent of FRA compliance. If there is any chance a carrier could seek to use the track in the future — or if it was used recently — the FRA applicability question should be addressed with qualified legal and technical counsel.',
        },
        {
          q: 'We are acquiring a rail-served industrial property. When should we order the track inspection?',
          a: 'As early in the due diligence process as practical — ideally before purchase price negotiations are finalized. Track that appears functional often has significant deferred maintenance with material capital obligations. Knowing the condition before you close allows you to negotiate accordingly, set aside appropriate capital reserves, or reconsider the acquisition if the condition is significantly worse than anticipated.',
        },
        {
          q: 'What does a track capital obligation estimate look like?',
          a: 'Our capital obligation estimates provide a range of likely costs for bringing identified deficiencies into compliance, organized by priority category. We base our estimates on current material and labor costs for the specific work types involved. These are professional estimates, not contractor bids — but they provide a sound basis for initial planning, reserve analysis, and transaction negotiations.',
        },
        {
          q: 'Can you provide testimony or expert opinion in legal proceedings involving track condition?',
          a: 'Our inspectors can discuss their findings and qualifications with legal counsel in the context of a specific matter. Whether we can provide formal expert testimony in a legal proceeding depends on the specifics of the case and our engagement. We recommend contacting us early in the process if litigation involving our inspection findings is anticipated.',
        },
      ],
    },
  ],
  cta: {
    heading: 'Request a Private Track Owner Inspection',
    sub: 'Contact us to discuss your track asset, your compliance questions, and what a professional ownership-focused inspection report looks like for your situation.',
  },
}

export function PrivateTrackOwnerInspectionsPage({ onNavigate }) {
  return <LandingPage {...PAGE} onNavigate={onNavigate} />
}
