import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/chrome/Header'
import { Footer } from '@/components/chrome/Footer'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { RelatedAreas, RelatedServices, RelatedPosts } from '@/components/sections/RelatedBlocks'
import { siteConfig } from '@/lib/site-config'
import { serviceSchema, faqPageSchema } from '@/lib/schema/jsonld'
import { Phone, ChevronRight } from 'lucide-react'

type ServicePageData = {
  title: string
  seoTitle?: string
  h1: string
  metaDescription: string
  subsections: { title: string; content: string[] }[]
  faqs: { question: string; answer: string }[]
  serviceType: string
}

const SERVICES_MAP: Record<string, ServicePageData> = {
  'boiler-servicing-installation-repairs': {
    title: 'Boiler Servicing, Installation & Repairs',
    seoTitle: 'Boiler Servicing, Installation & Repairs | Expert Plumbers',
    h1: 'Boiler Servicing, Installation and Repairs in Gillingham and North Dorset',
    metaDescription: 'Keep your boiler running efficiently with expert boiler servicing, installation, and repair services. Fast, reliable, and affordable solutions from trusted engineers.',
    serviceType: 'Boiler servicing, installation and repair',
    subsections: [
      {
        title: 'Boiler Servicing',
        content: [
          'Regular servicing is the single most important action to keep your central heating system running safely and efficiently. An annual service is also a standard legal requirement to keep your boiler manufacturer warranty valid.',
          'During a standard service, I conduct a full visual inspection of the boiler casing and seals, verify the flue and ventilation lines are clear, test the gas operating pressure, inspect the internal burner chamber, and check all safety devices. Typical UK industry rates range from £80 to £120 for a gas boiler (sourced from Checkatrade/MyJobQuote guides) depending on the system type. Contact me directly for a fixed quote for your specific boiler.',
        ],
      },
      {
        title: 'Boiler Installation',
        content: [
          'If your current boiler is frequently breaking down, losing pressure, or costing you too much in energy bills, it may be time to replace it. A modern combi boiler is significantly more energy-efficient than older conventional models.',
          'A new boiler installation involves a complete home heating survey, draining and removing the old unit, flushing the system pipework to remove sludge, mounting the new boiler, connecting the flue, and commissioning the gas lines. Straightforward swaps take around one day, while system conversions (e.g. converting a conventional system to a combi) can take two to three days. I specialize in selecting systems that suit period Dorset cottages as well as newer modern builds.',
        ],
      },
      {
        title: 'Boiler Repairs',
        content: [
          'If you have no heat or hot water, notice water leaking under the casing, hear loud banging/gurgling noises (kettling), or see a flashing error code on the control panel, your boiler needs repair.',
          'Being based in Gillingham allows me to respond quickly to boiler breakdowns. I diagnose the core fault—whether it is a failed pump, a blocked heat exchanger, a faulty diaphragm, or sensor issue—and resolve it using quality replacement parts.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How often should a boiler be serviced?',
        answer: 'Most manufacturers and engineers recommend a boiler service once every 12 months. Annual servicing keeps the boiler running safely and efficiently, and is often required to keep the manufacturer\'s warranty valid. Contact Rob to book your annual service.',
      },
      {
        question: 'How much does a boiler service cost?',
        answer: 'UK boiler service costs typically run £80-£120 for a gas boiler, £75-£110 for oil, and £70-£110 for an electric combi, with the exact price depending on the boiler type, its location in the property, and local labour rates. Get in touch for a fixed quote for your boiler.',
      },
      {
        question: 'How long does a boiler installation take?',
        answer: 'A straightforward like-for-like combi boiler swap usually takes around a day. A full system conversion (for example, moving from a conventional or system boiler to a combi, or relocating the boiler) can take two to three days. Rob will confirm the exact timescale after a survey of your property.',
      },
      {
        question: 'How much does a new boiler cost to install?',
        answer: 'New boiler installation costs vary widely depending on the boiler model, the complexity of the install, and whether any pipework or flue changes are needed. Ask Rob for a fixed, itemised quote after a home visit or survey.',
      },
      {
        question: 'What\'s included in a boiler service?',
        answer: 'A boiler service typically includes a visual inspection of the unit, checking the flue and ventilation, testing the gas pressure and burner, inspecting seals and connections for wear, and testing the safety devices. Any issues found are flagged before they become a breakdown.',
      },
    ],
  },
  'landlord-safety-checks': {
    title: 'Landlord Safety Checks (CP12)',
    seoTitle: 'Landlord Gas Safety Checks & CP12 Certificates',
    h1: 'Landlord Gas Safety Checks (CP12) in Gillingham and North Dorset',
    metaDescription: 'Ensure your property is compliant with professional landlord gas safety checks and CP12 certificates. Reliable inspections completed by qualified Gas Safe engineers.',
    serviceType: 'Landlord gas safety certificate (CP12)',
    subsections: [
      {
        title: 'Your Legal Obligations',
        content: [
          'Under the UK Gas Safety (Installation and Use) Regulations 1998, landlords have a strict legal duty to ensure all gas appliances, flues, and pipework in their rental properties are safe. You must have an annual gas safety check completed every 12 months, and provide a copy of the certificate (CP12) to your existing tenants within 28 days of the check.',
          'There is no grace period for expired certificates. If a CP12 certificate lapses, landlords face immediate legal exposure. Book your safety renewal in advance of the expiry date to ensure continuous compliance.',
        ],
      },
      {
        title: 'What is Checked During the Inspection?',
        content: [
          'During a landlord gas safety check, I inspect all gas-burning appliances in the property (boilers, hobs, cookers, and fireplaces) to ensure they are operating at the correct gas pressure, burning fuel cleanly, venting exhaust gases safely through the flue, and that all safety cut-off devices operate.',
          'I also conduct a system-wide gas tightness test at the meter to verify there are no hidden gas leaks in the property pipework.',
        ],
      },
      {
        title: 'CP12 Costs and Scheduling',
        content: [
          'A standard landlord gas safety check for a single property with one gas boiler and one gas hob typically ranges from £60 to £90 (sourced from Checkatrade/LetCompliance), with additional fees of £10 to £15 per additional gas appliance. Contact me for a fixed price based on your property configuration.',
          'We work with individual landlords, property managers, and letting portfolios across North Dorset and the borders.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is a CP12 / landlord gas safety certificate?',
        answer: 'A CP12 is the landlord gas safety certificate confirming that every gas appliance, flue and pipe at a rental property has been checked and is safe. UK law requires landlords to have a valid one at all times and to provide a copy to tenants.',
      },
      {
        question: 'How much does a landlord gas safety certificate cost?',
        answer: 'Typical UK pricing runs £60-£90 for a single rental property, with some engineers charging an additional £10-£15 per extra gas appliance checked. Contact Rob for a price based on your property and the number of appliances involved.',
      },
      {
        question: 'How often do landlords need a gas safety check?',
        answer: 'Every 12 months, without exception. The certificate must be renewed before it expires, and there is no grace period once it lapses.',
      },
      {
        question: 'What happens if a landlord doesn\'t have a valid gas safety certificate?',
        answer: 'A landlord without a valid, in-date CP12 is not meeting their legal obligations from the day the previous certificate expires. Tenants must also be given a copy of the current certificate within 28 days of the check being carried out.',
      },
      {
        question: 'Who can carry out a landlord gas safety check?',
        answer: 'Only a Gas Safe registered engineer can legally carry out and sign a landlord gas safety check. You can verify any engineer\'s registration at gassaferegister.co.uk before booking.',
      },
    ],
  },
  'gas-installations': {
    title: 'Gas Installations',
    seoTitle: 'Professional Gas Installation Services | Gas Safe Engineers',
    h1: 'Gas Installations in Gillingham and North Dorset',
    metaDescription: 'Professional gas installation services for homes and businesses. Our qualified Gas Safe engineers provide safe, efficient, and fully compliant installations.',
    serviceType: 'Gas installation',
    subsections: [
      {
        title: 'Certified Gas Appliance Fitting',
        content: [
          'Any installation or modification involving gas lines must legally be carried out by a Gas Safe registered engineer. Gas hobs, range cookers, and gas fires must never be connected as a DIY project or by an unregistered general builder.',
          'I provide safe, certified gas appliance connections, ensuring all pipework is properly sized, pressure-tested, and vented to prevent safety hazards.',
        ],
      },
      {
        title: 'The Safety Testing Process',
        content: [
          'Every gas installation requires strict safety checks. This includes running a system tightness test to check for leaks, checking ventilation is adequate in the room, inspecting flues, and validating operating gas pressures at the appliance burner.',
          'Upon completion, I verify the system meets all current safety standards and issue an official certificate of completion.',
        ],
      },
      {
        title: 'Rural and Off-Grid Heating Configurations',
        content: [
          'Many properties in the rural areas surrounding Gillingham are off the mains gas grid and rely on Liquefied Petroleum Gas (LPG) or oil. I provide gas connection work for both natural mains gas systems and LPG cylinder/tank networks.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need a Gas Safe registered engineer to install a gas appliance?',
        answer: 'Yes. Any work on gas appliances, pipework or fittings in the UK must legally be carried out by a Gas Safe registered engineer. This applies to cookers, hobs, fires, boilers and central heating pipework alike.',
      },
      {
        question: 'How much does a gas installation cost?',
        answer: 'Cost depends entirely on the appliance and the complexity of the pipework involved (a straightforward cooker connection vs. new gas central heating pipework, for example). Contact Rob for a quote specific to your job.',
      },
      {
        question: 'Can I install my own gas cooker or hob?',
        answer: 'No. Connecting a gas cooker, hob or any other gas appliance must be done by a Gas Safe registered engineer, both for your safety and to stay within the law.',
      },
      {
        question: 'What\'s involved in a gas installation safety check?',
        answer: 'A gas safety check includes a tightness test on the pipework, checking ventilation is adequate, inspecting the appliance and its connections, and confirming the flue (where fitted) is clear and correctly installed, before the engineer issues a certificate of completion.',
      },
      {
        question: 'How long does a gas installation take?',
        answer: 'A single appliance connection (a cooker or gas fire, for example) is often completed within a couple of hours. Larger jobs, such as new central heating pipework, take longer and depend on the scope of work agreed with Rob in advance.',
      },
    ],
  },
  'emergency-callouts': {
    title: 'Emergency Callouts',
    seoTitle: '24/7 Emergency Plumbing Services | Fast Response',
    h1: 'Emergency Plumbing Callouts in Gillingham and North Dorset',
    metaDescription: 'Need an emergency plumber? Our rapid response team is available for urgent plumbing repairs, leaks, boiler breakdowns, and gas emergencies when you need us most.',
    serviceType: 'Emergency plumbing callout',
    subsections: [
      {
        title: 'What Counts as a Plumbing or Gas Emergency?',
        content: [
          'A plumbing or gas emergency requires immediate attention to protect your property from water damage or to keep your family safe. This includes burst pipes, severe active leaks, a complete loss of heating or hot water during cold winter months, and any suspected gas leak.',
          'If you smell gas or suspect a gas leak, you should isolate the main supply at the gas meter if it is safe to do so, ventilate the property, and contact the National Gas Emergency Service immediately on 0800 111 999. Once the primary safety is managed, contact BMV Plumbing for repairs.',
        ],
      },
      {
        title: 'What to Do While You Wait',
        content: [
          'If you have a burst pipe or severe leak, locate and turn off the main stopcock to stop the flow of water. Turn on taps to drain the pipework and place buckets under the leak. Do not touch any electrical switches if they have come into contact with water.',
        ],
      },
      {
        title: 'Local Gillingham Response',
        content: [
          'Being based locally in Gillingham (SP8) allows me to respond quickly across the 10-mile catchment area, reaching Shaftesbury, Wincanton, and Sturminster Newton faster than national agencies.',
          'Contact me directly on the phone number on this page for the quickest answer on availability and rates for your emergency.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much does an emergency plumber cost?',
        answer: 'UK emergency call-out fees typically range from around £75 to £120, with hourly rates on top depending on the job and the time of day. Contact Rob directly for the clearest, fastest answer on cost for your specific emergency.',
      },
      {
        question: 'How quickly can an emergency plumber come out?',
        answer: 'Response times vary by job and time of day, but being based locally in Gillingham means a faster response across the 10-mile coverage area than a firm dispatching from further away. Call the number on this page for the quickest answer on availability right now.',
      },
      {
        question: 'What counts as a plumbing emergency?',
        answer: 'Burst pipes, a complete loss of heating in cold weather, major leaks, a boiler breakdown leaving you with no hot water, and any suspected gas leak all count as emergencies that need a same-day response.',
      },
      {
        question: 'What should I do if I smell gas?',
        answer: 'Turn off the gas supply at the meter if it\'s safe to do so, don\'t use any switches, naked flames or anything that could cause a spark, ventilate the property by opening doors and windows, and call the National Gas Emergency Service on 0800 111 999 immediately. Once the immediate danger is dealt with, contact BMV Plumbing for the follow-up repair.',
      },
      {
        question: 'Do you offer emergency callouts out of hours or on weekends?',
        answer: 'Rob is available Monday to Friday from 8:00am to 6:00pm for regular calls, and is available on Saturdays and Sundays for out-of-hours emergency support. Contact Rob directly to check current availability and get a fast response.',
      },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(SERVICES_MAP).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = SERVICES_MAP[slug]
  if (!data) return {}

  return {
    title: data.seoTitle || data.title,
    description: data.metaDescription,
    alternates: {
      canonical: `/services/${slug}`,
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = SERVICES_MAP[slug]

  if (!data) {
    notFound()
  }

  const breadcrumbsTrail = [
    { label: 'Services', href: '/services' },
    { label: data.title },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Schemas */}
      {serviceSchema({
        slug,
        title: data.title,
        description: data.metaDescription,
        serviceType: data.serviceType,
      })}
      {faqPageSchema(data.faqs)}

      <Header />
      <div aria-hidden="true" className="h-[92px] md:h-[100px] lg:h-[112px] block" />

      <main className="flex-1 py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs trail={breadcrumbsTrail} />
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-4">
                <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl md:text-5xl leading-tight">
                  {data.h1}
                </h1>
                <p className="text-muted max-w-xl text-slate-650">
                  Providing professional, Gas Safe registered services across Gillingham and the surrounding region.
                </p>
              </div>

              {/* Service Featured Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-slate-100 shadow-md">
                <Image 
                  src={
                    slug === 'boiler-servicing-installation-repairs' ? '/boiler-advice.webp' :
                    slug === 'landlord-safety-checks' ? 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80' :
                    slug === 'gas-installations' ? '/plumber-hero.webp' :
                    slug === 'emergency-callouts' ? '/van-hero.webp' : '/plumber-hero.webp'
                  }
                  alt={data.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>

              {/* Service Quick Info Dashboard Card */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 border border-slate-100/60 rounded-2xl p-5 text-center shadow-2xs">
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Response Time</span>
                  <p className="text-sm font-black text-slate-800">
                    {slug === 'emergency-callouts' ? 'Rapid Response' : 'Same / Next Day'}
                  </p>
                </div>
                <div className="space-y-1 border-l border-slate-200/60">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Accreditation</span>
                  <p className="text-sm font-black text-slate-850">Gas Safe Certified</p>
                </div>
                <div className="space-y-1 border-l border-slate-200/60">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Accredited Area</span>
                  <p className="text-sm font-black text-slate-800">10-Mile Radius</p>
                </div>
                <div className="space-y-1 border-l border-slate-200/60">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Pricing Policy</span>
                  <p className="text-sm font-black text-slate-850">Free Quotes</p>
                </div>
              </div>

              {/* Subsections */}
              <div className="space-y-12">
                {data.subsections.map((sub, i) => (
                  <div key={i} className="relative pl-6 border-l-2 border-slate-200 space-y-4 hover:border-secondary transition-colors duration-300">
                    <h2 className="text-2xl font-extrabold text-primary tracking-tight">{sub.title}</h2>
                    {sub.content.map((p, pIdx) => (
                      <p key={pIdx} className="text-slate-650 leading-relaxed font-semibold">
                        {p}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              {/* FAQ Accordion */}
              <div className="space-y-6 pt-12 border-t border-border">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary">Frequently Asked</span>
                  <h2 className="text-3xl font-extrabold text-primary font-serif">Questions & Answers</h2>
                </div>
                <div className="mt-8 space-y-4">
                  {data.faqs.map((faq, i) => (
                    <details key={i} className="group bg-slate-50/50 border border-slate-100 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between font-bold text-primary list-none outline-none">
                        <span className="text-[15px] font-black text-slate-850">{faq.question}</span>
                        <span className="transition-transform group-open:rotate-180 text-secondary">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </span>
                      </summary>
                      <p className="mt-3 text-sm text-slate-650 leading-relaxed font-medium pt-3 border-t border-slate-250/30">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar CTA Column */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-bold text-primary">Need a Quote?</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Call Rob Holton directly to request pricing or schedule an inspection.
                </p>
                <a
                  href={siteConfig.contact.primaryPhoneHref}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-secondary py-3 text-sm font-semibold text-white hover:bg-secondary-hover transition-colors shadow-sm"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.contact.primaryPhone}
                </a>
                <Link
                  href="/contact"
                  className="mt-3 flex w-full items-center justify-center rounded-full border border-primary py-3 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
                >
                  Send a Message
                </Link>
              </div>

              {/* Trust Badge / Credentials Sidebar Info */}
              <div className="rounded-2xl border border-border p-6 bg-white space-y-4 text-xs text-muted">
                <div className="font-bold text-primary uppercase tracking-wider">Service Guarantee</div>
                <p className="leading-relaxed">
                  All gas work is completed in strict accordance with the UK Gas Safety Regulations. No shortcuts, fully insured, and backed by years of trade expertise.
                </p>
              </div>
            </div>
          </div>

          {/* Related Linking Blocks */}
          <div className="mt-16 pt-8 border-t border-border">
            <RelatedAreas />
            <RelatedServices excludeSlug={slug} />
            <RelatedPosts />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
