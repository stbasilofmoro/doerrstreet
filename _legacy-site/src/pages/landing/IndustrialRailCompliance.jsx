import { LandingPage } from './LandingPage'

const PAGE = {
  seo: {
    title: 'Industrial Rail Compliance | FRA Compliance Inspection & Audit Prep',
    description: 'Industrial rail compliance services for facilities facing FRA inspections, Class I railroad audits, or citation remediation. FRA-certified inspectors with Class I railroad experience across the Southeastern U.S.',
    canonical: 'https://doerrstreetrailco.com/industrial-rail-compliance',
  },
  hero: {
    title: 'Industrial Rail Compliance Services',
    subtitle: 'FRA standards. Class I requirements. Documented compliance you can stand behind.',
  },
  sections: [
    {
      type: 'intro',
      body: [
        'Rail compliance for industrial facilities is not optional — it is the price of access to the national freight railroad network. Facilities that fail to meet FRA track safety standards or Class I interchange requirements risk restricted service, federal citations, and operational disruption that can cost far more than the inspection program that would have prevented it.',
        'Our industrial rail compliance services help facilities understand where they stand against federal and Class I standards, document their good-faith compliance effort, and prepare for the inspections and audits that are coming — on a schedule they control.',
      ],
    },
    {
      type: 'trust',
      items: [
        { value: 'FRA', label: 'Part 213 Certified' },
        { value: 'Class I', label: 'Interchange Expertise' },
        { value: '30+', label: 'Years Experience' },
        { value: '800+', label: 'Projects Completed' },
      ],
    },
    {
      type: 'two-col',
      heading: 'The Compliance Landscape for Industrial Track',
      body: [
        'Industrial track owners operate at the intersection of two distinct regulatory frameworks: federal FRA standards under 49 CFR Part 213, and the private interchange requirements imposed by the Class I railroad that serves their facility. These requirements overlap but are not identical — and failing either one can disrupt your rail service.',
        'Our compliance inspections evaluate your track against both frameworks simultaneously. We know how federal track inspectors classify defects, and we know how Class I railroad track representatives conduct interchange audits. That dual perspective is what makes our compliance inspections genuinely useful.',
      ],
      listHeading: 'Compliance Services',
      items: [
        'FRA Part 213 compliance baseline inspection',
        'Class I interchange audit preparation',
        'Violation notice response and remediation planning',
        'Defect documentation and classification',
        'Ongoing compliance inspection programs',
        'Re-inspection after remediation',
        'Compliance record documentation',
        'Regulatory and interchange correspondence support',
      ],
    },
    {
      type: 'features',
      heading: 'Common Compliance Challenges We Solve',
      subheading: 'Industrial rail compliance issues we see and resolve every week',
      items: [
        {
          title: 'Deferred Maintenance Accumulation',
          body: 'Years of deferred track maintenance creates compounding defect conditions. We help facilities triage what needs immediate attention versus what can be phased into a maintenance schedule.',
        },
        {
          title: 'Class I Notice of Deficiency',
          body: 'If your railroad has issued a track deficiency notice, we help you understand the specific requirements, prioritize remediation, and document completed work for railroad re-inspection.',
        },
        {
          title: 'FRA Citation Response',
          body: 'Federal track citations require documented response within defined timeframes. Our inspection and documentation services support your formal response and remediation program.',
        },
        {
          title: 'Interchange Reinstatement',
          body: 'Facilities that have had interchange restricted due to track condition need a documented remediation program and third-party verification. We provide both.',
        },
        {
          title: 'New Compliance Program Development',
          body: 'Facilities that have never had a formal track compliance program need a starting point. We conduct a baseline inspection and build a program from the ground up.',
        },
        {
          title: 'Insurance and Liability Documentation',
          body: 'Facilities with rail-related liability exposure need documented evidence of inspection and maintenance effort. Our reports create that record.',
        },
      ],
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          q: 'What is the difference between FRA compliance and Class I compliance?',
          a: '49 CFR Part 213 is the federal minimum standard enforced by the FRA. Class I railroads layer their own, often more stringent, interchange requirements on top of that federal baseline. A track can technically meet FRA Part 213 minimums and still fail a Class I interchange audit if it does not meet the carrier\'s specific standards. Facilities that focus only on FRA compliance may still face Class I service restrictions.',
        },
        {
          q: 'How quickly must FRA violations be remediated once identified?',
          a: 'Remediation timelines depend on the severity and classification of the defect under Part 213. Immediate defects — those that pose a direct safety risk — may require suspension of car movements until the defect is corrected. Other defects have prescribed remediation windows that allow continued operations at restricted speeds while repairs are made. Our compliance reports clearly identify each defect\'s classification and the corresponding operational and remediation requirements.',
        },
        {
          q: 'Can we continue rail operations while compliance deficiencies exist?',
          a: 'In many cases, yes — but at restricted operating speeds or with operational limitations. The FRA standard prescribes specific operational responses for each defect class. Some defects allow continued use at reduced speed; others require a service stop until repaired. We provide precise guidance on the operational status of your track based on actual findings, so you are not guessing about what you can safely continue to do.',
        },
        {
          q: 'What documentation do we need to support a Class I interchange reinstatement?',
          a: 'Most Class I carriers require written documentation that identified deficiencies have been remediated before they will resume service on restricted track. An independent re-inspection report from a certified inspector — confirming that repairs meet the applicable standard — is typically the most effective documentation you can provide. We conduct pre-reinstatement inspections specifically for this purpose and produce written confirmation that supports your carrier\'s restoration decision.',
        },
        {
          q: 'We have never had a formal compliance program. Where do we start?',
          a: 'A baseline inspection is the right starting point. It documents current conditions, classifies every deficiency, and establishes the factual foundation for a compliance program. From the baseline, we help you prioritize remediation, design an ongoing inspection schedule, and build the documentation system that demonstrates continuous compliance going forward. Starting with a baseline means you know exactly where you stand from day one of your program.',
        },
      ],
    },
  ],
  cta: {
    heading: 'Get Your Rail Compliance Under Control',
    sub: 'Whether you\'re responding to a notice or building a proactive program, we\'re ready to help. Contact us today.',
  },
}

export function IndustrialRailCompliancePage({ onNavigate }) {
  return <LandingPage {...PAGE} onNavigate={onNavigate} />
}
