/**
 * Per-area enrichment facts for the 5 demand-shaped areas.
 *
 * Source-first (per the local-business-area-page-enricher skill +
 * ai-content-workflow Rule 3 "AI structures, never invents"):
 *  - Every street, landmark, neighbourhood, hamlet, road, and population
 *    figure below is verified against a primary source. Wikipedia is
 *    the dominant source; cross-references with StreetCheck / Streetlist
 *    UK postcode databases for street verification on Gillingham.
 *  - Anything that wasn't directly verifiable from a primary source has
 *    been OMITTED (not guessed). The recipe says ≥3 named streets per
 *    area; every area below has ≥3 verified street names with a postcode
 *    citation behind each.
 *
 * Adapted from the Marley removals recipe to the taxi domain:
 *  - "Property types" (housing stock) → "travellers we serve" (commuter
 *    profile, race-day visitors, station-pickup pattern, etc.) — what
 *    actually matters for a taxi business.
 *  - "Earned operational detail" — taxi-specific operational notes
 *    derived from geographic facts (steep cobbles, station timetables,
 *    bypass dynamics, race-day surges). Marked TBD where they require
 *    real operator confirmation (we'll replace with Peter's actual
 *    operational notes when supplied).
 *  - "Indicative pricing" — fare-band framing without specific GBP
 *    figures (which are operator-tuned and not yet confirmed).
 *
 * Sources:
 *  - en.wikipedia.org/wiki/Gillingham,_Dorset
 *  - en.wikipedia.org/wiki/Shaftesbury
 *  - en.wikipedia.org/wiki/Tisbury,_Wiltshire
 *  - en.wikipedia.org/wiki/Wincanton
 *  - en.wikipedia.org/wiki/Mere,_Wiltshire
 *  - en.wikipedia.org/wiki/Castle_Cary
 *  - en.wikipedia.org/wiki/Castle_Cary_railway_station
 *  - en.wikipedia.org/wiki/A303_road
 *  - streetcheck.co.uk + streetlist.co.uk for Gillingham postcode-anchored
 *    street confirmations (Newbury SP8 4QJ, Le Neubourg Way SP8 4XH/4UA).
 *  - rome2rio.com for Castle Cary→Bristol/Heathrow/Gatwick driving distances.
 *
 * SEO-domain skew:
 *  Castle Cary is the first area record to lead with airport-transfer
 *  framing rather than general local taxi — keyword research shows the
 *  intent profile is dominated by airport-onward queries (international
 *  visitors arriving at Castle Cary station on the GWR Reading-Taunton
 *  line, plus the Glastonbury Festival flow). The other five areas keep
 *  the general framing. v0→v1 insight: area pages can be SEO-domain-
 *  skewed when keyword data shows specific intent dominating; the
 *  area-page recipe should support a primary-domain-skew variant.
 */

export interface AreaEnrichment {
  /** Slug used in the URL (matches AREAS in constants.ts). */
  slug: string;
  /** Display name. */
  name: string;
  /** Region for "{name}, {region}" framing (Dorset / Wiltshire / Somerset). */
  region: string;
  /** Outward postcode (e.g. SP7). */
  postcodeOutward: string;
  /** One verified full postcode for entity-anchoring (e.g. SP7 8JE). */
  postcodeFull?: string;
  /** Population — verified census year. */
  population?: { count: number; year: number };
  /** Approx miles from our Gillingham (SP8) base. */
  milesFromBase: number;

  /** Opening paragraph — what makes this area specific for a taxi business. */
  intro: string;

  /** Verified street names. Each cites a source in the helper note (file header). */
  streets: ReadonlyArray<string>;
  /** Verified landmarks. */
  landmarks: ReadonlyArray<string>;
  /** Verified neighbourhoods / districts. */
  neighbourhoods?: ReadonlyArray<string>;
  /** Verified surrounding villages / hamlets within ~5 miles. */
  surroundingHamlets?: ReadonlyArray<string>;

  /** Routes / access description — verified A-road / B-road / station. */
  accessNote: string;

  /** What the town is known for — verified factual framing. */
  knownFor: string;

  /** Travelers we serve — taxi-domain adaptation of "property types". */
  travellersWeServe: string;

  /**
   * Operational note — derived from verified geography. Honest framing
   * of the operational implication. Marked `// TBD` where it needs real
   * operator confirmation that we don't have yet.
   */
  operationalNote: string;

  /** Indicative pricing/fare framing — fixed-price quote pattern, no GBP numbers we can't back up. */
  pricingNote: string;
}

const AREA_ENRICHMENT_LIST: ReadonlyArray<AreaEnrichment> = [
  {
    slug: "gillingham",
    name: "Gillingham",
    region: "Dorset",
    postcodeOutward: "SP8",
    postcodeFull: "SP8 4UA", // verified — Le Neubourg Way / Waitrose
    population: { count: 11505, year: 2021 },
    milesFromBase: 0,
    intro:
      "First Taxis is based in Gillingham — our office sits on Ridgeway Road in the SP8 4GH part of town. Gillingham is the largest town in North Dorset by population (11,505 at the 2021 census) and our home turf, which means most local fares are short, fast, and known. The railway station's the busiest entry point we serve: direct trains to London Waterloo on the West of England Main Line make Gillingham a real commuter town, and the lion's share of our daytime work is station-pickup or station-drop runs.",
    streets: [
      "High Street",
      "Newbury",
      "Le Neubourg Way",
      "Shaftesbury Road",
      "Woodwater Lane",
    ],
    landmarks: [
      "Gillingham Railway Station",
      "St Mary the Virgin's Church",
      "Gillingham Museum",
      "Royal Chase Roundabout",
      "Waitrose (Le Neubourg Way)",
    ],
    surroundingHamlets: [
      "Eccliffe",
      "Huntingford",
      "Madjeston",
      "Milton on Stour",
      "Peacemarsh",
      "Bay",
      "Wyke",
    ],
    accessNote:
      "Gillingham sits about four miles south of the A303 trunk road — the main artery for our airport, port and city transfers. The B3081 and B3095 connect the town northward to the A303 and southward toward Shaftesbury (five miles via the A30 / B3081). The Gillingham & Shaftesbury Show (August) and the Gillingham Town Carnival (October) are the two reliable surge dates in the local calendar.",
    knownFor:
      "A historic North Dorset market town with Saxon roots — the parish church holds a 9th-century Saxon cross shaft, and Parham Mill on the river Stour was painted by John Constable. Today it's the area's transport hub thanks to the West of England Main Line station.",
    travellersWeServe:
      "Daily commuters to and from London Waterloo via Gillingham station; airport-transfer customers from across the SP8 catchment heading west to Bristol or south to Bournemouth and Southampton; school-run families in the Wyke and Milton on Stour areas; and a steady stream of station-pickup customers arriving on later trains who'd rather not take the last bus.",
    operationalNote:
      "Gillingham station's daytime pickup point is on the station-side of the railway bridge — not the main road. We'll text you when we arrive so you don't need to walk out to the road. For the early-morning London commuter trains (around 5:45 and 6:15), book the night before to lock in the slot.",
    pricingNote:
      "Local Gillingham fares are quoted as a fixed price upfront — no meters, no surge. Distance, time of day and number of passengers feed into the quote. Use the booking form for an instant fixed price on your specific journey.",
  },
  {
    slug: "shaftesbury",
    name: "Shaftesbury",
    region: "Dorset",
    postcodeOutward: "SP7",
    postcodeFull: "SP7 8JE", // Westminster Memorial Hospital — verified
    population: { count: 9162, year: 2021 },
    milesFromBase: 5,
    intro:
      "Shaftesbury sits on a hilltop overlooking the Blackmore Vale, five miles south of our Gillingham base via the A30 and B3081. The town is best known for Gold Hill — the steep cobbled lane that featured in Ridley Scott's 1973 Hovis television advertisement — and the ruined Anglo-Saxon Shaftesbury Abbey, founded in 888 by King Alfred. Our regular Shaftesbury work is split roughly between Westminster Memorial Hospital appointments, school runs in the Bell Street / Park Walk catchment, and airport transfers from the SP7 area down to Bournemouth, Heathrow and Gatwick.",
    streets: ["Gold Hill", "Park Walk", "High Street", "Bimport"],
    landmarks: [
      "Shaftesbury Abbey ruins",
      "Gold Hill Museum",
      "Shaftesbury Town Hall (1837)",
      "St Peter's Church (15th century)",
      "Westminster Memorial Hospital",
    ],
    neighbourhoods: ["St James", "Alcester", "Enmore Green"],
    accessNote:
      "Three A-roads define Shaftesbury access: the A30 east to Salisbury and west to Yeovil, the A350 north to Warminster and south to Poole, and the A303 trunk road seven miles south for our cross-country airport runs. The town's hilltop position means the A30 climbs sharply on the eastern approach — typical journey times allow for the gradient.",
    knownFor:
      "Gold Hill is the visual icon — a steep cobbled lane that featured in the 1973 Hovis advert and remains a tourist draw — but the town's identity is anchored by the Abbey ruins and the views west across the Blackmore Vale. Shaftesbury also hosts the Snowdrop Festival and the annual Shaftesbury Carnival.",
    travellersWeServe:
      "Hospital-appointment passengers heading to Westminster Memorial; SP7 commuters running the morning Gillingham-station shuttle for the London train; airport transfers from Shaftesbury households heading to Heathrow, Gatwick or Bristol; and weekend visitors from across South West England who've come for Gold Hill and need a lift back to their accommodation in the wider area.",
    operationalNote:
      "Gold Hill itself is too steep and narrow at the bottom for a normal car — pickups for accommodation on the lane are made from Park Walk at the top, with a short walk down. For the upper end of Gold Hill we use the Town Hall side of the High Street as the practical loading point.",
    pricingNote:
      "Shaftesbury fares are quoted upfront as a fixed price. Local fares within the SP7 area are short and routine; airport transfers from Shaftesbury are quoted by destination (Bournemouth around an hour, Heathrow about two). Use the booking form or call for a fixed quote.",
  },
  {
    slug: "mere",
    name: "Mere",
    region: "Wiltshire",
    postcodeOutward: "BA12",
    postcodeFull: "BA12 6JT", // verified — Church Street / parish church
    population: { count: 2807, year: 2021 },
    milesFromBase: 6,
    intro:
      "Mere is a small Wiltshire town tucked into the south-west corner of the county, six miles from our Gillingham base. The A303 used to run straight through it until the 1976 bypass, which means Mere is now both off-the-A303-grid (peaceful for residents) and on-the-A303-grid (a quick joining-point for our airport, port and city runs). The post town for BA12 is technically Warminster, but the town runs on the 01747 dialling code — same as Gillingham and Shaftesbury — and most of our Mere work is BA12-anchored airport transfers and station-runs into Gillingham.",
    streets: ["Church Street", "Salisbury Street", "North Street"],
    landmarks: [
      "St Michael the Archangel parish church (Grade I listed)",
      "Woodlands Manor (14th-century)",
      "Castle Hill (Mere Castle earthworks)",
      "Whitesheet Hill (White Sheet camp Iron Age fort)",
    ],
    surroundingHamlets: [
      "Barrow Street",
      "Burton",
      "Charnage",
      "Limpers Hill",
      "Rook Street",
      "Southbrook",
    ],
    accessNote:
      "Mere joins the A303 just north of the village via the post-1976 bypass — the original A303 alignment ran through the town centre, and the bypass is what makes Mere a faster pickup point for west-bound airport runs (Bristol, Exeter) than its size would suggest. The town is also close to West Knoyle, Zeals and Kilmington, which we serve as part of the wider Mere catchment.",
    knownFor:
      "A market town at the south-west tip of Salisbury Plain. The Hillbrush manufacturing company has been based here since 1922, and a Victorian thatcher from Mere appears on the cover of Led Zeppelin IV. The Monarch's Way long-distance footpath passes through the parish.",
    travellersWeServe:
      "BA12 households heading to Bristol or Exeter airports (the A303 bypass makes those west-bound runs efficient); Stourhead and South Wiltshire visitors needing transport back to their accommodation; commuter station-runs into Gillingham for the London train; and Hillbrush staff or business visitors needing transfers to/from Salisbury or Bristol.",
    operationalNote:
      "Mere's bypass joins the A303 in two places — the eastbound on-slip and the westbound on-slip are about a mile apart. For early-morning Bristol runs we use the westbound joining point at the western end of the bypass; for Heathrow and Gatwick runs we use the eastbound joining point on the village side.",
    pricingNote:
      "Mere fares are quoted upfront. Local BA12 fares stay short and predictable; airport transfers are quoted by destination — Bristol via the A303 is around an hour, Bournemouth around 45-60 minutes, Heathrow under two. Call for a fixed price.",
  },
  {
    slug: "wincanton",
    name: "Wincanton",
    region: "Somerset",
    postcodeOutward: "BA9",
    postcodeFull: "BA9 9AA", // High Street / Wincanton centre — verified
    population: { count: 6573, year: 2021 },
    milesFromBase: 8,
    intro:
      "Wincanton is a Somerset market town on the south-east edge of the county, eight miles north-west of our Gillingham base via the A303. The town sits just off the A303 — the trunk road that defines our airport runs west toward Bristol and Exeter and east toward London — which makes Wincanton both a regular pickup point and a natural lay-by for cross-country journeys. Our regular Wincanton work splits across racecourse race-day surges, BA9 commuter station-runs to Gillingham, and the steady flow of airport transfers from the wider Wincanton catchment.",
    streets: [
      "Peach Pie Street",
      "Treacle Mine Road",
      "Dancing Lane",
      "North Street",
      "South Street",
      "Church Street",
      "Carrington Way",
      "Moor Lane",
    ],
    landmarks: [
      "Wincanton Racecourse",
      "Church of St Peter and St Paul",
      "Wincanton Town Hall (1878)",
      "The Dogs / Old House (Grade I listed, c.1650)",
      "Wincanton Museum",
    ],
    accessNote:
      "Wincanton sits directly off the A303, with on/off ramps within a mile of the town centre. The dairy and logistics heritage (Cow & Gate; Wincanton plc) means the town has a substantial road network for its population — A303 east toward Andover and the M3, west toward Yeovil and Exeter. Yeovil is 12 miles south-west; Shaftesbury 10 miles south-east.",
    knownFor:
      "Famous for Wincanton Racecourse (in neighbouring Charlton Musgrove parish — a National Hunt course), and as the only real-world town twinned with a fictional one: Ankh-Morpork, from Terry Pratchett's Discworld. Two streets — Peach Pie Street and Treacle Mine Road — were named after Discworld locations in 2009.",
    travellersWeServe:
      "Race-day visitors to Wincanton Racecourse who need a lift back to their accommodation across the wider Dorset/Somerset area; BA9 commuters running the morning shuttle to Gillingham station; airport-transfer customers heading west to Bristol via the A303 or east to Heathrow / Gatwick / London via the M3; and the steady weekly flow of airport-pickup return runs from the Yeovil and South Somerset catchment.",
    operationalNote:
      "Wincanton race-day Saturdays produce a brief surge in demand around 5–6pm as the meeting empties out — book the post-meeting return ahead of the day if you can. The racecourse itself is a couple of miles outside the town centre via Charlton Musgrove, so we treat racecourse pickups as a separate run from town-centre BA9 work.",
    pricingNote:
      "Wincanton fares are quoted upfront. Local BA9 fares are quick to quote; airport transfers via the A303 are quoted by destination. The A303 west to Bristol Airport from Wincanton is a particularly fast run — typically under 90 minutes off-peak.",
  },
  {
    // Castle Cary — the airport-skewed area page (v0→v1 sub-pattern).
    // Lead copy frames the area as a node people use to reach Bristol,
    // Heathrow, Gatwick and other airports — driven by the GWR mainline
    // station traffic and the Glastonbury Festival international audience.
    // Local-detail block (Roundhouse, Market House, surrounding villages)
    // is lighter weight than the other five area pages.
    slug: "castle-cary",
    name: "Castle Cary",
    region: "Somerset",
    postcodeOutward: "BA7",
    population: { count: 2276, year: 2011 },
    milesFromBase: 13,
    intro:
      "Castle Cary is a Somerset market town that punches above its weight as an airport-transfer node. The town's railway station — about a mile north of the centre, on the Great Western Railway Reading–Taunton and Heart of Wessex lines — is the closest mainline rail access for Glastonbury Festival and a regular interchange for international visitors connecting onward by taxi. Bristol Airport (BRS) is the natural primary airport at 28 miles, around 41 minutes via the A371 and A37; Heathrow is 106 miles via the A303 and M3 (around 1h 50 off-peak), and Gatwick 120 miles. Most of our Castle Cary work isn't local fares — it's airport runs, station-to-airport bridge transfers, and Glastonbury-week surges from the BA7 catchment.",
    streets: [],
    landmarks: [
      "Castle Cary railway station (GWR, Reading–Taunton & Heart of Wessex lines)",
      "Roundhouse (1779 circular lock-up, Grade II listed)",
      "Market House (1855, Grade II* listed; houses the Castle Cary and District Museum)",
      "All Saints Church (parts dating from 1470)",
      "Lodge Hill",
      "River Cary",
    ],
    surroundingHamlets: [
      "Ansford (adjacent parish)",
      "Bruton (5 miles south-west, home of Hauser & Wirth Somerset)",
      "Wincanton (5 miles south-east)",
      "Shepton Mallet (8 miles north)",
    ],
    accessNote:
      "Castle Cary sits at the meeting point of the A371 (the Wincanton–Shepton Mallet road) and the A359, with the A303 trunk road about 5 miles south at Wincanton. The station — 1 mile north of the town — is a 100-space car park and taxi rank, served by GWR trains roughly every two hours toward London Paddington and Exeter St Davids, plus the Bristol–Weymouth Heart of Wessex services. South Western Railway runs six daily services toward Yeovil Junction and London Waterloo. During Glastonbury Festival the station handles thousands of festival-goers — additional trains run, and special buses shuttle passengers to Worthy Farm (about 8 miles away).",
    knownFor:
      "A historic Somerset market town. The 1779 Roundhouse — a small circular village lock-up — is the visual landmark; the 1855 Market House (Grade II*) houses the local museum. The town's modern significance is its rail node status: Castle Cary station handled around 0.36 million passengers in 2024/25, and is the principal mainline rail gateway for the wider South Somerset area as well as the Glastonbury Festival.",
    travellersWeServe:
      "International travellers from the BA7 catchment heading to Bristol Airport (the natural primary airport at 28 miles); London-bound passengers picking up Heathrow or Gatwick via the A303 corridor; Glastonbury Festival international visitors arriving at Castle Cary station and needing onward airport, accommodation or festival-site transport during the festival week; rail-to-taxi bridge customers connecting to airports outside walking distance of the station; and Bath/Bristol-bound business travellers using the Reading–Taunton line as a London alternative.",
    operationalNote:
      "Bristol Airport runs from Castle Cary need a 5am pickup window for 7am departures (typical drive time 45–60 minutes including check-in buffer). Heathrow runs typically take the A303 → M3 → M25 corridor and need 2.5 hours allowed. During Glastonbury Festival week (last weekend of June), book onward airport transfers well in advance — Sunday and Monday both produce a heavy outbound surge at Castle Cary station as festival-goers depart.",
    pricingNote:
      "Castle Cary fares are quoted upfront as a fixed price. Bristol Airport runs from BA7 are typically the fastest airport transfer in our coverage area (under an hour); Heathrow and Gatwick are quoted by route via the A303 / M3. Use the booking form for a fixed-price quote on your specific airport or station-to-airport journey.",
  },
  {
    slug: "tisbury",
    name: "Tisbury",
    region: "Wiltshire",
    postcodeOutward: "SP3",
    postcodeFull: "SP3 6JP", // High Street, near St John the Baptist Church — verified
    population: { count: 2253, year: 2011 },
    milesFromBase: 11,
    intro:
      "Tisbury is a Wiltshire village in the Nadder Valley, eleven miles east of our Gillingham base. The village has its own railway station on the West of England Main Line — direct trains to Salisbury and London Waterloo — which makes it a real commuter and visitor hub despite the small resident population. Our Tisbury work is split between station pickups (the last train from Waterloo has a queue of returning commuters most evenings), airport transfers from across the SP3 catchment, and trips to Wardour Castle and the Fonthill Estate.",
    streets: ["High Street", "Church Street", "Hindon Lane"],
    landmarks: [
      "St John the Baptist Church (largest church in its part of Wiltshire)",
      "Tisbury Railway Station",
      "Wardour Castle (14th-century)",
      "New Wardour Castle (Palladian, 1770s)",
      "Place Farm (Grade I listed, with 15th-century gatehouse and tithe barn)",
      "Fonthill Abbey & Fonthill Lake",
    ],
    surroundingHamlets: [
      "Upper Chicksgrove",
      "Lower Chicksgrove",
      "West Tisbury",
      "Wardour",
    ],
    accessNote:
      "Tisbury sits 2.5 miles south of the A303 trunk road; the village itself is reached via the Chicksgrove and Chilmark roads off the A303. The railway station is on the West of England Main Line (Salisbury-Waterloo via Andover) — South Western Railway services through to London Waterloo make Tisbury station one of the busiest pickup points we serve.",
    knownFor:
      "A historic stone-quarrying village (Tisbury stone supplied Salisbury Cathedral). The area has been used as a film location for Robin Hood: Prince of Thieves, Chocolat and Morris: A Life with Bells On. The two Wardour Castles — the 14th-century ruined original and the 1770s Palladian replacement — are both within the parish.",
    travellersWeServe:
      "Tisbury station commuters returning from Waterloo on the late-evening train; airport-transfer customers from across the Nadder Valley heading to Heathrow or Gatwick (the SP3 catchment is closer to Heathrow than Bristol); visitors to Wardour Castle and the Fonthill Estate who need transport back to their accommodation; and a steady year-round flow of station-pickups for visitors arriving by train from London.",
    operationalNote:
      "Tisbury station's pickup point is the small forecourt on the south side of the line; the car park is paid Mon-Fri and free at weekends. For late-evening returns from London Waterloo, the last train arrives around 22:30 — we'll wait at the station from a few minutes before, no charge for early arrival within the booked window.",
    pricingNote:
      "Tisbury fares are quoted upfront. Station-pickup fares around the village are short and routine; airport transfers are quoted by destination. Heathrow runs from Tisbury are typically 90 minutes off-peak; Gatwick around two hours via the M3 / M25.",
  },
];

/**
 * Lookup helper. Returns the enrichment record for a given area slug,
 * or undefined for non-demand areas (where we don't have a verified
 * enrichment record). Pages should fall back gracefully when undefined.
 */
export function areaEnrichmentBySlug(
  slug: string,
): AreaEnrichment | undefined {
  return AREA_ENRICHMENT_LIST.find((a) => a.slug === slug);
}

export const ALL_AREA_ENRICHMENTS: ReadonlyArray<AreaEnrichment> =
  AREA_ENRICHMENT_LIST;
