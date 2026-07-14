import { Header } from '@/components/chrome/Header'
import { Footer } from '@/components/chrome/Footer'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { faqPageSchema } from '@/lib/schema/jsonld'
import { ChevronDown, Wrench, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export const metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common plumbing, heating, boiler servicing, landlord safety checks, and emergency callout questions in Gillingham.',
}

const FAQS_DATABASE = [
  {
    category: 'Boiler Servicing, Installation & Repairs',
    items: [
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
  {
    category: 'Landlord Gas Safety Checks',
    items: [
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
  {
    category: 'Gas Installations',
    items: [
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
  {
    category: 'Emergency Callouts',
    items: [
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
        answer: 'Contact Rob directly to check current out-of-hours and weekend availability, and to get a fast answer on your specific emergency.',
      },
    ],
  },
]

export default function FaqsPage() {
  const allFaqs = FAQS_DATABASE.flatMap((c) => c.items)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Schema */}
      {faqPageSchema(allFaqs)}

      <Header />
      <div aria-hidden="true" className="h-[92px] md:h-[100px] lg:h-[112px] block" />

      <main className="flex-1 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs trail={[{ label: 'FAQs' }]} />
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <span className="text-[13px] font-bold uppercase tracking-[0.08em] pl-[0.08em] text-secondary">Common Questions</span>
                <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl font-serif">
                  Frequently Asked Questions
                </h1>
                <p className="mt-6 text-lg text-muted leading-relaxed">
                  Have a question about boiler safety, CP12 certificates, cooker installations, or emergency response? Find answers here.
                </p>
              </div>

              {/* Categorized FAQs */}
              <div className="space-y-10">
                {FAQS_DATABASE.map((cat, idx) => (
                  <div key={idx} className="space-y-6">
                    <h2 className="text-2xl font-bold text-primary font-serif border-b border-border pb-3">
                      {cat.category}
                    </h2>
                    <div className="space-y-4">
                      {cat.items.map((item, itemIdx) => (
                        <details key={itemIdx} className="group border border-border/80 rounded-xl bg-card p-5 transition-all duration-300 hover:border-slate-350 hover:shadow-sm">
                          <summary className="flex cursor-pointer items-center justify-between font-bold text-primary font-serif text-[15px] sm:text-[17px] select-none list-none outline-none">
                            <span>{item.question}</span>
                            <span className="transition-transform duration-300 group-open:rotate-180 flex-shrink-0 ml-4">
                              <ChevronDown className="h-5 w-5 text-secondary" />
                            </span>
                          </summary>
                          <p className="mt-4 text-[14px] leading-relaxed text-slate-600 pt-3 border-t border-slate-100/50">
                            {item.answer}
                          </p>
                        </details>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="group/sidebar rounded-2xl border border-border bg-white p-8 border-t-4 border-t-secondary shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:border-slate-300/80 transition-all duration-300 ease-out">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/5 text-secondary transition-all duration-300 group-hover/sidebar:bg-secondary/10 group-hover/sidebar:scale-105">
                  <Wrench className="h-6 w-6 transition-transform duration-300 group-hover/sidebar:rotate-12" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-primary font-serif">Need More Help?</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  If your question isn&apos;t answered here, contact Rob Holton directly.
                </p>
                <a
                  href={siteConfig.contact.primaryPhoneHref}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-secondary active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Phone className="h-4 w-4" />
                  <span>Contact Rob</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
