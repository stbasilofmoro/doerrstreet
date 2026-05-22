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
  ],
  cta: {
    heading: 'Get Your Rail Compliance Under Control',
    sub: 'Whether you\'re responding to a notice or building a proactive program, we\'re ready to help. Contact us today.',
  },
}

export function IndustrialRailCompliancePage({ onNavigate }) {
  return <LandingPage {...PAGE} onNavigate={onNavigate} />
}
