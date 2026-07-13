import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Header } from '@/components/chrome/Header'
import { Footer } from '@/components/chrome/Footer'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { RelatedAreas, RelatedServices, RelatedPosts } from '@/components/sections/RelatedBlocks'
import { siteConfig } from '@/lib/site-config'
import { areaServiceSchema, faqPageSchema } from '@/lib/schema/jsonld'
import { Phone, ChevronRight, Shield, Clock } from 'lucide-react'

type AreaPageData = {
  title: string
  h1: string
  metaDescription: string
  region: string
  postcode: string
  distance: number
  streets: string[]
  accessNote: string
  propertyTypes: string
  landmarks: string[]
  introProse: string
  faqs: { question: string; answer: string }[]
}

const AREAS_MAP: Record<string, AreaPageData> = {
  'shaftesbury': {
    title: 'Shaftesbury',
    h1: 'Plumbing and Gas Heating Services in Shaftesbury',
    metaDescription: 'Local plumbing and gas heating engineer covering Shaftesbury. Boiler servicing, repairs, and landlord checks by Rob Holton.',
    region: 'Dorset',
    postcode: 'SP7',
    distance: 5,
    streets: ['Gold Hill', 'Park Walk', 'High Street', 'Bimport'],
    accessNote: 'Gold Hill itself is too steep and narrow at the bottom for trade van access. Any trade deliveries or carry operations are typically coordinated from the parking spaces on Park Walk or the top of the cobbles.',
    propertyTypes: 'A mixture of historic listed stone cottages and timber-framed terraces around Gold Hill and Bimport (which have strict flue venting and flue route constraints), and modern residential properties out toward Enmore Green and St James.',
    landmarks: ['Shaftesbury Abbey ruins', 'Gold Hill Museum', 'St Peter\'s Church', 'Westminster Memorial Hospital'],
    introProse: 'Shaftesbury sits on a hilltop above the Blackmore Vale, about five road miles from our Gillingham base via the A30 and B3081. It is one of our most regular plumbing call-out areas, from older cottages near Park Walk to modern houses in the outer estates.',
    faqs: [
      {
        question: 'Do you cover boiler repairs on Gold Hill and the town centre?',
        answer: 'Yes, I provide boiler repairs and plumbing services throughout the historic Shaftesbury town center. For steep and narrow streets like Gold Hill, parking is typically arranged at Park Walk with a short equipment carry to the property.',
      },
      {
        question: 'How quickly can you get to Shaftesbury from Gillingham for an emergency callout?',
        answer: 'Being based in Gillingham, Shaftesbury is only about 5 miles away via the A30 and B3081. This local proximity allows me to respond quickly, often within a short period of your call depending on current availability.',
      },
      {
        question: 'Do older Shaftesbury properties need different boiler servicing than newer homes?',
        answer: 'Older listed properties often have specific flue routing and venting constraints to maintain historic integrity. I check all older stone wall thickness and ventilation requirements during servicing to ensure full safety compliance.',
      },
      {
        question: 'Do you carry out landlord gas safety checks for rental properties in Shaftesbury?',
        answer: 'Yes, I conduct annual gas safety checks (CP12) for landlord rental properties throughout Shaftesbury SP7, covering boilers, hobs, and other gas appliances.',
      },
    ],
  },
  'wincanton': {
    title: 'Wincanton',
    h1: 'Plumbing and Gas Heating Services in Wincanton',
    metaDescription: 'Local plumbing and gas heating engineer covering Wincanton. Boiler servicing, repairs, and landlord checks by Rob Holton.',
    region: 'Somerset',
    postcode: 'BA9',
    distance: 8,
    streets: ['Peach Pie Street', 'Treacle Mine Road', 'Dancing Lane', 'North Street', 'South Street'],
    accessNote: 'Wincanton sits directly on the A303, allowing straightforward vehicular access. The historic town core around North Street can be narrow, but there are no major parking or carry restrictions for tradespeople.',
    propertyTypes: 'A mixture of older stone properties in the town centre close to North and South Street, and newer residential developments built out near the racecourse side.',
    landmarks: ['Wincanton Racecourse', 'Church of St Peter and St Paul', 'Wincanton Town Hall'],
    introProse: 'Wincanton is a Somerset market town about eight road miles from our Gillingham base, sitting right on the A303. It is famously twinned with the fictional Discworld city of Ankh-Morpork, with two streets—Peach Pie Street and Treacle Mine Road—named after the novels. We provide plumbing and gas services across Wincanton, from the old town core to modern estates near the racecourse.',
    faqs: [
      {
        question: 'Do you cover emergency callouts in Wincanton on race days?',
        answer: 'Yes, I cover emergency plumbing and gas callouts in Wincanton on race days. While traffic near the racecourse can be heavier, local route knowledge allows me to access town centre properties without delay.',
      },
      {
        question: 'How far is Wincanton from your Gillingham base?',
        answer: 'Wincanton is approximately 8 road miles from my base in Gillingham. It takes about 12-15 minutes to reach Wincanton via the A303 under normal traffic conditions.',
      },
      {
        question: 'Do you carry out landlord gas safety checks near Wincanton Racecourse?',
        answer: 'Yes, I provide annual landlord gas safety checks and issue CP12 certificates for rental properties across all parts of Wincanton BA9, including the newer developments by the racecourse.',
      },
      {
        question: 'Can you install a new boiler in an older Wincanton town-centre property?',
        answer: 'Yes. Older properties near North Street or Church Street often require careful system planning to handle older pipework layouts. I provide system updates and boiler swaps that maintain the character of Somerset stone buildings.',
      },
    ],
  },
  'sturminster-newton': {
    title: 'Sturminster Newton',
    h1: 'Plumbing and Gas Heating Services in Sturminster Newton',
    metaDescription: 'Local plumbing and gas heating engineer covering Sturminster Newton. Boiler servicing, repairs, and landlord checks by Rob Holton.',
    region: 'Dorset',
    postcode: 'DT10',
    distance: 9.5,
    streets: ['Bridge Street', 'Market Place', 'Rylands Lane'], // Verified streets
    accessNote: 'Access via the historic six-arch Town Bridge has a weight restriction, and parking around the Market Cross can be tight on market days, but it is generally accessible for service vans.',
    propertyTypes: 'A mix of period thatched cottages and stone homes in the town core, converted agricultural buildings in the surrounding Blackmore Vale country, and newer housing around the former cattle market Exchange site.',
    landmarks: ['Sturminster Newton Mill', 'St Mary\'s Church', 'Town Bridge (Rolls Bridge)', 'The Exchange arts centre'],
    introProse: 'Sturminster Newton is a Blackmore Vale market town situated on a meander of the River Stour, around nine and a half road miles from our Gillingham base. It is the furthest of our three main coverage towns, reaching out toward Blandford Forum and Sherborne, and includes everything from town-centre properties near the old Market Cross to farmhouses out across the surrounding dairy country.',
    faqs: [
      {
        question: 'Do you cover emergency callouts as far as Sturminster Newton?',
        answer: 'Yes, Sturminster Newton is within my active 10-mile service radius. I provide emergency callouts for plumbing and gas leaks to all properties in the DT10 postcode area.',
      },
      {
        question: 'Do you service LPG heating systems for rural properties near Sturminster Newton?',
        answer: 'Yes, I provide gas connection and maintenance services for LPG heating systems, which are common in off-grid rural farmhouses and cottages across the Blackmore Vale surrounding the town.',
      },
      {
        question: 'How long does it take you to reach Sturminster Newton from Gillingham?',
        answer: 'It takes approximately 15-20 minutes to reach Sturminster Newton from Gillingham base depending on the route taken. I am based locally, ensuring a fast response compared to national plumbing firms.',
      },
      {
        question: 'Do you carry out landlord gas safety checks for rental properties in Sturminster Newton?',
        answer: 'Yes, I carry out annual gas safety checks and issue CP12 certificates for landlords with rental properties in Sturminster Newton DT10.',
      },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(AREAS_MAP).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = AREAS_MAP[slug]
  if (!data) return {}

  return {
    title: `${data.title} Plumbing & Gas Heating`,
    description: data.metaDescription,
    alternates: {
      canonical: `/areas/${slug}`,
    },
  }
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = AREAS_MAP[slug]

  if (!data) {
    notFound()
  }

  const breadcrumbsTrail = [
    { label: 'Areas', href: '/services' },
    { label: data.title },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Schemas */}
      {areaServiceSchema({
        serviceType: 'Emergency Plumbing and Gas Heating Services',
        cityName: data.title,
        cityRegion: data.region,
        description: data.metaDescription,
        url: `${siteConfig.url.production}/areas/${slug}`,
      })}
      {faqPageSchema(data.faqs)}

      <Header />
      <div aria-hidden="true" className="h-[140px] md:h-[148px] lg:h-[176px] block" />

      <main className="flex-1 py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs trail={breadcrumbsTrail} />
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl md:text-5xl">
                  {data.h1}
                </h1>
                <p className="mt-4 text-muted max-w-xl">
                  Registered gas and heating services across {data.title}, {data.postcode} (~{data.distance} miles from Gillingham base).
                </p>
              </div>

              {/* Intro section */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Local Service in {data.title}</h2>
                <p className="text-muted leading-relaxed text-slate-700">
                  {data.introProse}
                </p>
              </div>

              {/* Property types & access */}
              <div className="space-y-6 pt-6 border-t border-border">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <h3 className="flex items-center gap-2 text-lg font-bold text-primary">
                      <Shield className="h-5 w-5 text-secondary" /> Property Types We Work On
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {data.propertyTypes}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="flex items-center gap-2 text-lg font-bold text-primary">
                      <Clock className="h-5 w-5 text-secondary" /> Access & Parking Realities
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {data.accessNote}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sourced streets & landmarks */}
              <div className="space-y-6 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-primary">Sourced Streets & Landmarks</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-muted mb-3">Verified Streets Served</h3>
                    <ul className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                      {data.streets.map((s, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-muted mb-3">Key Landmarks Covered</h3>
                    <ul className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                      {data.landmarks.map((l, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                          <span>{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Location FAQs */}
              <div className="space-y-6 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold text-primary">Local Questions in {data.title}</h2>
                <div className="space-y-4">
                  {data.faqs.map((faq, i) => (
                    <details key={i} className="group border-b border-border pb-4">
                      <summary className="flex cursor-pointer items-center justify-between font-bold text-primary list-none">
                        <span>{faq.question}</span>
                        <span className="transition-transform group-open:rotate-180">
                          <ChevronRight className="h-5 w-5 text-secondary" />
                        </span>
                      </summary>
                      <p className="mt-3 text-sm text-muted leading-relaxed">
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
                <h3 className="text-lg font-bold text-primary">Need an Engineer?</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Call Rob Holton for direct support in {data.title} and the surrounding area.
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
                  Book a Safety Check
                </Link>
              </div>

              <div className="rounded-2xl border border-border p-6 bg-white space-y-4 text-xs text-muted">
                <div className="font-bold text-primary uppercase tracking-wider">Quick Response Area</div>
                <p className="leading-relaxed">
                  Being situated only ~{data.distance} miles away from our HQ means we can rapidly dispatch for heating failures and plumbing leaks.
                </p>
              </div>
            </div>
          </div>

          {/* Related Linking Blocks */}
          <div className="mt-16 pt-8 border-t border-border">
            <RelatedAreas excludeSlug={slug} />
            <RelatedServices />
            <RelatedPosts />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
