import Link from 'next/link';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import styles from './page.module.css';

export const GUIDES_DATA = {
  'paris-haute-vivant': {
    id: 'paris-haute-vivant',
    title: 'Paris: The Discreet Haute-Vivant Address Book',
    subtitle: 'Private art salons along Quai Voltaire, appointment-only jeweler ateliers on Place Vendôme, and clandestine speakeasies.',
    category: 'city',
    categoryLabel: 'CITY INTEL',
    readTime: '8 MIN READ',
    issue: 'SPRING / SUMMER 2026',
    image: '/images/aboutBanner.png',
    secondaryImage: '/images/dest_como.jpg',
    curator: 'HSW Paris Bureau',
    coordinates: '48.8566° N, 2.3522° E',
    lead: 'To experience Paris as an insider is to bypass the grand boulevards in favor of heavy carved oak doors in the 7th and 8th arrondissements, behind which generations of French aristocracy, curators, and cinematographers gather in quiet splendor.',
    narrative: [
      'The true elegance of Paris is rarely visible from street level. It exists in the hushed interior courtyards of the Faubourg Saint-Germain, inside private apartment salons overlooking the Seine, and within discreet ateliers on Place Vendôme where master gemologists present rare untreated stones away from public display cases.',
      'Our Paris Bureau operates through personal introductions that span decades. Whether arranging after-hours contemplation before the Winged Victory of Samothrace in the Louvre, securing the single private dining salon tucked behind a historic Left Bank bookshop, or curating private viewings at Yves Saint Laurent’s preserved studio, our focus is on effortless access devoid of tourist friction.',
      'Even dining in Paris requires foreknowledge. While reservations at celebrated three-star establishments remain essential, the most thrilling culinary moments occur in intimate ten-seat bistros where generational chefs cook exclusively for friends, regulars, and travelers accompanied by a trusted advisory.',
    ],
    addressBook: [
      {
        name: 'Cabinet d’Amateur Voltaire',
        type: 'Private Art Salon',
        district: '7th Arrondissement (Quai Voltaire)',
        detail: 'By private introduction only. A 17th-century riverfront salon showcasing Old Master drawings and neoclassical sculpture, hosted by an aristocratic family friend.',
      },
      {
        name: 'Salon Noir de Vendôme',
        type: 'Haute Joaillerie Atelier',
        district: '1st Arrondissement (Place Vendôme)',
        detail: 'Discreet second-floor private viewing salon specializing in untreated Golconda diamonds and custom signet rings hand-carved in unpolished 24-karat gold.',
      },
      {
        name: 'L’Arrière-Cave Saint-Germain',
        type: 'Clandestine Cellar',
        district: '6th Arrondissement (Rue Jacob)',
        detail: 'Accessed through an unmarked doorway behind an antiquarian bookbinder. Vintage Romanée-Conti and rare grower Champagnes poured alongside aged Comté.',
      },
      {
        name: 'Jardin Privé de Marigny',
        type: 'Locked Garden Sanctuary',
        district: '8th Arrondissement (Champs-Élysées Gardens)',
        detail: 'Keyholder access to a secluded rose pavilion surrounded by 200-year-old linden trees, ideal for afternoon espresso and undisturbed reading.',
      },
    ],
    protocol: {
      attire: 'Unstated Elegance — Tailored jackets, cashmere knitwear, discreet timepieces. Avoid overt monogrammed accessories.',
      bestSeason: 'April through June / September through November',
      accessWindow: 'Private atelier viewings must be commissioned 4 weeks in advance via your HSW Trip Designer.',
    },
  },
  'costa-smeralda-yachting': {
    id: 'costa-smeralda-yachting',
    title: 'Costa Smeralda & Corsica: The Superyacht Anchorage Dossier',
    subtitle: 'Navigating the Maddalena Archipelago, securing unlisted deep-water anchorages, and stepping ashore to clandestine cantinas.',
    category: 'coastal',
    categoryLabel: 'COASTAL & ISLAND',
    readTime: '12 MIN READ',
    issue: 'MAY 2026',
    image: '/images/banner_yacht.jpg',
    secondaryImage: '/images/dest_riviera.jpg',
    curator: 'Mediterranean Maritime Bureau',
    coordinates: '41.1394° N, 9.5375° E',
    lead: 'The waters between Northeast Sardinia and Southern Corsica represent the pinnacle of European yachting—where granite cliffs carved by the mistral shelter turquoise lagoons inaccessible to all but private tenders.',
    narrative: [
      'While Porto Cervo commands the social spotlight, the seasoned maritime connoisseur knows that true ecstasy lies among the pink sands of Budelli, the wild granite passages of Spargi, and the deep limestone fjords of Bonifacio.',
      'Securing unlisted moorings requires acute meteorological intuition and direct harbor master relationships. As the afternoon mistral sweeps across the Strait of Bonifacio, positioning your vessel in the protected lee of Cala di Volpe or Mortorio makes the difference between a restless swell and a tranquil candlelit dinner on the aft deck.',
      'Stepping ashore should never be transactional. Our advisory coordinates private RIB tenders directly to cliffside jetties where local fishermen prepare freshly speared sea bass baked in Sardinian sea salt, accompanied by crisp Vermentino di Gallura vintages that never cross Italian borders.',
    ],
    addressBook: [
      {
        name: 'Cala Soraya Anchorage',
        type: 'Secluded Lagoon Anchorage',
        district: 'Isola di Spargi',
        detail: 'Uncharted deep-water shelter protected from westerly winds. Crystalline turquoise seabed ideal for evening tender mooring and seabed illumination.',
      },
      {
        name: 'La Cantina del Capitano',
        type: 'Tender-Only Cliff Cantina',
        district: 'Capo d’Orso',
        detail: 'Perched on granite boulders above the sea. No road access. Wild lobster linguine and sea urchin carpaccio served directly onto private wooden terraces.',
      },
      {
        name: 'Cala di Luna Sea Caves',
        type: 'Private Submersible Corridor',
        district: 'Gulf of Orosei',
        detail: 'Cavernous limestone grottos with cathedral ceilings. Best explored at first morning light via electric Seabob before offshore day-boats arrive.',
      },
      {
        name: 'Bonifacio Haute Citadel Mooring',
        type: 'Private Berthing Slip',
        district: 'Bonifacio Fjord, Southern Corsica',
        detail: 'Protected berths carved deep inside a 70-meter limestone fissure. Private customs clearance orchestrated directly on your gangway.',
      },
    ],
    protocol: {
      attire: 'Nautical Linen — Barefoot deck etiquette, white/navy linen trousers, polarized handmade eyewear.',
      bestSeason: 'June through early July / September (to avoid peak August marine congestion)',
      accessWindow: 'Deep-water anchorages and tender reservations are confirmed live 24 hours ahead according to wind vectors.',
    },
  },
  'old-money-uk-estates': {
    id: 'old-money-uk-estates',
    title: 'Old-Money Sanctums: The Storied Country Estates of the UK',
    subtitle: 'Private grouse estates, walled gardens, ancestral castle takeovers, and library salons across Oxfordshire and Scotland.',
    category: 'alpine',
    categoryLabel: 'ALPINE & ESTATES',
    readTime: '10 MIN READ',
    issue: 'EDITION IV',
    image: '/images/dest_cotswolds.jpg',
    secondaryImage: '/images/dest_highlands.jpg',
    curator: 'British Heritage Archives',
    coordinates: '51.8642° N, 1.3400° W',
    lead: 'Behind centuries-old drystone walls and towering wrought-iron gates lies Britain’s most enduring luxury: ancestral land managed with quiet stewardship, roaring log fires, and immaculate country hospitality.',
    narrative: [
      'The British country estate is not a hotel; it is a living continuum of architecture, botany, and family lineage. From Jacobean manors in the Cotswolds to baronial castles commanding heather-clad lochs in Aberdeenshire, our portfolio grants sole-use access to properties held by the same families for four hundred years.',
      'Here, days move to a gentle, civilized tempo. Mornings begin with breakfast served on sterling silver in sunlit morning rooms, followed by driven shooting, fly-fishing for wild Atlantic salmon on private beats, or riding through ancient oak parklands accompanied by estate gamekeepers.',
      'Evenings culminate in wood-paneled libraries lined with first-edition folios, where single-cask Highland malts are poured beside crackling hearths, and multi-course dinners are served by career butlers trained in the grand traditions of British service.',
    ],
    addressBook: [
      {
        name: 'Auchencairn Baronial Castle',
        type: 'Private Estate Buyout',
        district: 'Highland Perthshire, Scotland',
        detail: '14-bedroom 17th-century fortress set within a 12,000-acre private sporting estate. Private helicopter pad, gun room, and resident bagpiper on call.',
      },
      {
        name: 'Combe Florey Manor',
        type: 'Grade I Jacobean Country House',
        district: 'Somerset / Cotswolds Border',
        detail: 'Surrounded by walled rose gardens and ancient yew mazes. Private equestrian schooling and dinners prepared by former royal household chefs.',
      },
      {
        name: 'The Speyside Private Vault',
        type: 'Closed-Door Cask Cellar',
        district: 'Craigellachie, Speyside',
        detail: 'Discreet tasting room hidden inside an 1890 stone distillery warehouse. Taste 50-year-old single malts straight from the wood with master blenders.',
      },
    ],
    protocol: {
      attire: 'Country Classic — Scottish tweed, Barbour jackets, Church’s brogues, and black tie for formal Saturday dinners in the Great Hall.',
      bestSeason: 'August through November for sporting estates; May through July for Cotswold garden blooms.',
      accessWindow: 'Castle buyouts require minimum 60 days advance vetting and security clearance.',
    },
  },
  'grand-alpine-enclaves': {
    id: 'grand-alpine-enclaves',
    title: 'The Grand Alpine Enclaves: St. Moritz, Gstaad & Zermatt',
    subtitle: 'Glacier corridors, private cigar salons, exclusive ski chalets, and torchlit night runs high above the clouds.',
    category: 'alpine',
    categoryLabel: 'ALPINE & ESTATES',
    readTime: '9 MIN READ',
    issue: 'WINTER 2026',
    image: '/images/dest_stmoritz.jpg',
    secondaryImage: '/images/dest_highlands.jpg',
    curator: 'Alpine Concierge Corps',
    coordinates: '46.4908° N, 9.8355° E',
    lead: 'High altitude glamour at its most refined. St. Moritz, Gstaad, and Zermatt remain the quintessential winter playgrounds for European royalty, industrialists, and connoisseurs of crisp mountain air.',
    narrative: [
      'The magic of the Engadin Valley lies in its champagne climate—dry, invigorating air bathed in three hundred days of sunshine. From private ski-in/ski-out chalets in Suvretta to the historic salons of Badrutt’s Palace, our advisory ensures effortless mountain sovereignty.',
      'Our clients bypass public lifts via helicopter glacier drops onto untracked powder corridors above Corviglia and Diavolezza. Following a day on the slopes, private mountain huts are transformed into candlelit raclette and white truffle salons, with guests descending by torchlight under a canopy of Alpine stars.',
      'In Gstaad and Zermatt, discretion reigns supreme. Private members’ clubs, secluded wellness sanctuaries fed by mineral thermal springs, and horse-drawn sleighs replace conventional tourist hustle.',
    ],
    addressBook: [
      {
        name: 'Chalet Corvatsch Private Enclave',
        type: 'Ski-in / Ski-out Master Chalet',
        district: 'Suvretta, St. Moritz',
        detail: 'Direct piste access, private indoor ozone lap pool, spa, personal ski butler, and chauffeur-driven Defender on standby 24/7.',
      },
      {
        name: 'Chesa Veglia Cigar & Truffle Salon',
        type: 'Private Members Club',
        district: 'Via Veglia, St. Moritz',
        detail: '17th-century farmhouse salon reserved for patrons and club members. Wood-fired black truffle Dama Bianca and rare Cuban selections.',
      },
      {
        name: 'Gornergrat Heli-Drop Sanctuary',
        type: 'Glacier Landing Corridor',
        district: 'Matterhorn Alpine Crossing, Zermatt',
        detail: 'Exclusive morning flight corridors landing above 3,800m, followed by a 14km descent guided by an Olympic certified mountain guide.',
      },
    ],
    protocol: {
      attire: 'Alpine Chic — Moncler or Loro Piana shearling outerwear, cashmere turtlenecks, Bogner ski tailoring.',
      bestSeason: 'December to April for winter skiing; July to September for high-altitude hiking and sailing on Lake St. Moritz.',
      accessWindow: 'Chalet buyouts for Festive Season (Dec 20 - Jan 6) must be reserved 6 to 9 months prior.',
    },
  },
  'lake-como-villeggiatura': {
    id: 'lake-como-villeggiatura',
    title: 'Lake Como: Waterfront Palazzos & The Art of Villeggiatura',
    subtitle: 'Private boatyard restorations of classic Riva speedboats, locked neoclassical botanical gardens, and midnight lake swims.',
    category: 'coastal',
    categoryLabel: 'COASTAL & ISLAND',
    readTime: '7 MIN READ',
    issue: 'SUMMER 2026',
    image: '/images/dest_como.jpg',
    secondaryImage: '/images/dest_amalfi.jpg',
    curator: 'Lombardy Bureau',
    coordinates: '45.9880° N, 9.2568° E',
    lead: 'Centuries of aristocratic leisure reflected in still mountain waters. Lake Como is an architectural masterpiece where neoclassical villas emerge seamlessly from lush cypress and azalea hillsides.',
    narrative: [
      'The Italian concept of villeggiatura—the deliberate withdrawal from urban intensity to an aristocratic country sanctuary—is perfected along the shores of Lake Como. From Bellagio to Tremezzo and Moltrasio, the lake is best experienced entirely from the water.',
      'Our advisory maintains private access to vintage mahogany Riva Aquarama speedboats, captained by local skippers whose families have navigated these currents for generations. Glide silently past historic Villa Balbianello, pull up to private stone jetties, and step into locked botanical gardens closed to the public.',
      'Evenings unfold on stone terraces hovering over the lake, where aperitifs of Franciacorta are accompanied by classical piano melodies and private dining arranged inside Renaissance frescoes.',
    ],
    addressBook: [
      {
        name: 'Villa Sola Cabiati Private Grounds',
        type: 'Neoclassical Palazzo',
        district: 'Tremezzina, Lake Como',
        detail: 'Summer residence of the Dukes of Serbelloni. After-hours private access to Napoleon’s preserved bedchamber and private frescoes.',
      },
      {
        name: 'Riva Aquarama Historic Fleet No. 42',
        type: 'Custom Wooden Speedboat Concierge',
        district: 'Cernobbio Marina',
        detail: 'Fully restored 1968 Riva Super Aquarama available exclusively for HSW guests, complete with chilled vintage champagne and bespoke picnic basket.',
      },
      {
        name: 'Crotto dei Platani Terrace',
        type: 'Waterfront Cantina',
        district: 'Brienno',
        detail: 'Tables carved into rock directly above the water. Risotto al pesce persico and wild lake trout paired with Lombardy’s finest cellar reserves.',
      },
    ],
    protocol: {
      attire: 'Riviera Refinement — Crisp white linen shirts, tailored bermuda shorts, leather boat loafers, silk scarves.',
      bestSeason: 'May through October. June and September offer the most serene water conditions.',
      accessWindow: 'Riva charters and private villa dinners should be confirmed 3 weeks in advance.',
    },
  },
  'kyoto-zen-artisans': {
    id: 'kyoto-zen-artisans',
    title: 'Kyoto: Zen Quarters, Master Artisans & Living Treasures',
    subtitle: 'After-hours meditation in ancient Zen temples, multi-generational kaiseki lineages, and private tea master introductions.',
    category: 'city',
    categoryLabel: 'CITY INTEL',
    readTime: '11 MIN READ',
    issue: 'AUTUMN 2026',
    image: '/images/dest_kyoto.jpg',
    secondaryImage: '/images/dest_borabora.jpg',
    curator: 'Kyoto Resident Concierge',
    coordinates: '35.0116° N, 135.7681° E',
    lead: 'Kyoto is the cultural heart of Japan, an ancient imperial capital where centuries-old traditions are guarded with fierce reverence and unlocked only through trusted familial introductions.',
    narrative: [
      'Behind simple cedar lattice facades in Gion and Higashiyama lies an exquisitely disciplined aesthetic world. Here, beauty is measured not by extravagance, but by proportion, seasonal mindfulness, and the quiet mastery of craftsmen whose family lineages span four hundred years.',
      'Through our Kyoto bureau, clients cross thresholds inaccessible to independent travelers. Experience private evening meditation sessions guided by head Zen abbots in moss gardens closed to the public, followed by tea ceremonies (Chado) conducted by grandmasters in private tea pavilions.',
      'Culinary experiences in Kyoto are an intellectual revelation. We reserve counter seats at three-seat kaiseki sanctuaries where master chefs curate menus inspired by seasonal poetry, ceramics dating to the Edo period, and rare mountain ingredients foraged that very dawn.',
    ],
    addressBook: [
      {
        name: 'Daitoku-ji Sub-Temple Private Zen Enclave',
        type: 'Zen Temple Meditation',
        district: 'Kita-ku, Kyoto',
        detail: 'After-hours private admittance to a 15th-century rock and moss garden with the temple abbot for undisturbed tea and mindfulness.',
      },
      {
        name: 'Kikunoi Honten Private Sukiya Suite',
        type: '3-Star Michelin Kaiseki Sanctuary',
        district: 'Higashiyama, Kyoto',
        detail: 'Private tatami room overlooking a private Japanese stream. 12-course seasonal kaiseki orchestrated by Master Chef Yoshihiro Murata.',
      },
      {
        name: 'Nakagawa Woodcraft Atelier',
        type: 'Living National Treasure Studio',
        district: 'Ukyo-ku, Kyoto',
        detail: 'Private introduction to master woodcraftsman Shuji Nakagawa, observing the handcrafted assembly of traditional Ki-oke cedar wood vessels.',
      },
    ],
    protocol: {
      attire: 'Mindful Restraint — Modest, refined clothing. Shoes that slip on and off easily with pristine clean socks for tatami flooring.',
      bestSeason: 'Late March to April for cherry blossoms; November to early December for fiery autumn maple foliage.',
      accessWindow: 'Kyoto temple viewings and tea ceremonies must be requested at least 6 weeks in advance.',
    },
  },
  'superyacht-charter-masterclass': {
    id: 'superyacht-charter-masterclass',
    title: 'High Seas Sovereignty: The Superyacht Charter Masterclass',
    subtitle: 'How to commission, provision, and route a 60-meter vessel across the Mediterranean and Caribbean with zero friction.',
    category: 'yachting',
    categoryLabel: 'YACHTING & AVIATION',
    readTime: '14 MIN READ',
    issue: 'ANNUAL DISPATCH',
    image: '/images/dest_borabora.jpg',
    secondaryImage: '/images/banner_yacht.jpg',
    curator: 'Naval Architecture Advisory',
    coordinates: '43.5528° N, 7.0174° E',
    lead: 'Chartering a superyacht represents the pinnacle of private leisure, transforming the world’s oceans into your personal, fully staffed estate.',
    narrative: [
      'A successful superyacht charter is an intricate balance of naval architecture, crew dynamics, itinerary flexibility, and culinary excellence. The secret is not merely securing a large vessel, but identifying the hull design and crew personality that harmonizes with your family or executive rhythm.',
      'Our maritime advisory oversees every detail from initial MYBA charter contract negotiations and advance provisioning allowances (APA) to customs declarations, fuel bunkering, and helicopter tender coordination. We interview captains personally to ensure their knowledge of unlisted bays and their ability to navigate unexpected weather windows.',
      'Onboard dining is calibrated weeks before embarkation. Our culinary directors liaise directly with your head chef to source regional specialties at every port of call—white truffles in Piedmont, wild oysters in Brittany, or fresh mangos in the Grenadines.',
    ],
    addressBook: [
      {
        name: 'Port Hercule Prime Berth Reservation',
        type: 'Superyacht Berth Concierge',
        district: 'Monaco Harbor',
        detail: 'Guaranteed deep-water berths during Monaco Grand Prix and Yacht Show with ramp-side VIP access and security clearance.',
      },
      {
        name: 'St. Barths Gustavia Outer Anchorage',
        type: 'Protected Island Mooring',
        district: 'Gustavia, French West Indies',
        detail: 'Reserved deep-water holding for 70m+ vessels with dedicated tender lanes directly to private docks and beach clubs.',
      },
      {
        name: 'Exumas Private Sandbar Luncheon',
        type: 'Clandestine Sandbar Experience',
        district: 'Exuma Cays, Bahamas',
        detail: 'Tender setup of linen dining tables, champagne coolers, and chef grill on an ephemeral sandbar that emerges for only 3 hours at low tide.',
      },
    ],
    protocol: {
      attire: 'MYBA Deck Protocol — Deck shoes or barefoot on teak decks. Soft luggage only (avoid rigid hardshell suitcases that scuff teak).',
      bestSeason: 'Mediterranean: May to October. Caribbean & Bahamas: November to April.',
      accessWindow: 'Prime summer charter yachts (50m+) are commissioned between October and January for the upcoming season.',
    },
  },
  'art-of-arrival-aviation': {
    id: 'art-of-arrival-aviation',
    title: 'The Art of Arrival: Private Aviation & VIP Ground Corridors',
    subtitle: 'Air corridors, ramp-side tarmac transfers in bespoke motorcars, and international customs clearance with zero concourse time.',
    category: 'yachting',
    categoryLabel: 'YACHTING & AVIATION',
    readTime: '6 MIN READ',
    issue: 'EXECUTIVE MEMORANDUM',
    image: '/images/banner2.png',
    secondaryImage: '/images/dest_riviera.jpg',
    curator: 'Aviation Operations',
    coordinates: '40.7128° N, 74.0060° W',
    lead: 'The true luxury of private flight is not champagne at thirty-five thousand feet; it is the absolute eradication of waiting, queues, and friction on the ground.',
    narrative: [
      'In private aviation, the journey begins the moment your motorcar glides past the fixed-base operator (FBO) gate. Through our tarmac coordination protocols, your car drives directly to the aircraft stairs, your luggage is transferred by dedicated handlers, and flight manifests are cleared without setting foot inside a terminal.',
      'Our flight operations desk monitors air traffic control slots, international diplomatic clearances, and weather patterns in real-time. If a commercial airport experiences airspace congestion, we seamlessly divert your flight to nearby private airfields—such as Le Bourget instead of CDG, or Samedan instead of Zurich.',
      'Upon touchdown, our ground concierge ensures seamless continuity. Chauffeurs are pre-cleared for tarmac collection, suites are pre-checked with luggage already unpacked, and custom dining is prepared for your immediate arrival.',
    ],
    addressBook: [
      {
        name: 'Paris Le Bourget VIP Ramp Corridor',
        type: 'Dedicated Business Aviation Airport',
        district: 'Le Bourget, France',
        detail: 'Direct tarmac transfer to waiting armored Mercedes-Maybach with discreet French border police clearance inside private VIP lounge.',
      },
      {
        name: 'London Farnborough Tarmac Direct',
        type: 'Private Aviation Gateway',
        district: 'Hampshire / London Corridor',
        detail: 'State-of-the-art private terminal with direct ramp-side access and helicopter shuttle connection to Battersea Heliport in 12 minutes.',
      },
      {
        name: 'Samedan St. Moritz High Altitude Gateway',
        type: 'Alpine Aviation Corridor',
        district: 'Engadin Valley, Switzerland',
        detail: 'Europe’s highest airport at 1,707m. Direct ski and mountain transfer within 15 minutes of wheel touchdown.',
      },
    ],
    protocol: {
      attire: 'Executive Travel Comfort — Loro Piana cashmere travel sets, bespoke leather slip-ons, minimal metal hardware for swift clearance.',
      bestSeason: 'Year-round on-demand capability with winter de-icing protocols strictly verified.',
      accessWindow: 'Charter slots can be mobilized within 3 hours for urgent transcontinental requirements.',
    },
  },
};

export async function generateStaticParams() {
  return Object.keys(GUIDES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const guide = GUIDES_DATA[resolvedParams.slug];

  if (!guide) {
    return {
      title: 'Field Dossier — HSW Global',
      description: 'Discreet luxury field notes and curated guides from HSW Global.',
    };
  }

  return {
    title: `${guide.title} — Field Dossiers | HSW Global`,
    description: guide.subtitle || guide.lead,
  };
}

export default async function GuideDetailPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const guide = GUIDES_DATA[slug];

  if (!guide) {
    return (
      <div className={styles.pageWrapper}>
        <Header />
        <main className={styles.notFoundBox}>
          <h1>Field Dossier Not Found</h1>
          <p>The requested dispatch is not in our active field records.</p>
          <Link href="/guides" className="btn btn--primary">Return to Guides</Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Related guides (other 3)
  const relatedGuides = Object.values(GUIDES_DATA)
    .filter((g) => g.id !== guide.id)
    .slice(0, 3);

  return (
    <article className={styles.pageWrapper}>
      <Header />

      {/* Top Header / Breadcrumb */}
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.topMetaRow}>
            <Link href="/guides" className={styles.backLink}>
              <span>&larr;</span> ALL FIELD NOTES & GUIDES
            </Link>
            <span className={styles.issueBadge}>{guide.issue}</span>
          </div>

          <div className={styles.headerContent}>
            <span className={styles.categoryLabel}>{guide.categoryLabel} &bull; {guide.coordinates}</span>
            <h1 className={styles.title}>{guide.title}</h1>
            <p className={styles.subtitle}>&ldquo;{guide.subtitle}&rdquo;</p>

            <div className={styles.curatorMeta}>
              <span className={styles.curatorName}>CURATED BY {guide.curator.toUpperCase()}</span>
              <span className={styles.metaDot}>&bull;</span>
              <span className={styles.readTime}>{guide.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Hero Media */}
        <div className={styles.heroMediaContainer}>
          <ScrollReveal animation="fade-scale" duration={950} className={styles.heroMediaWrapper}>
            <img src={guide.image} alt={guide.title} className={styles.heroImage} />
            <div className={styles.heroMediaOverlay} />
            <div className={styles.heroCaption}>
              <span>DISPATCH RECORD &bull; {guide.coordinates}</span>
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* Main Content Body */}
      <main className={styles.main}>
        <div className={styles.container}>
          {/* Lead Paragraph */}
          <ScrollReveal animation="fade-up" duration={850} className={styles.leadBox}>
            <p className={styles.leadParagraph}>{guide.lead}</p>
          </ScrollReveal>

          {/* Detailed Narrative */}
          <div className={styles.narrativeBody}>
            {guide.narrative.map((paragraph, i) => (
              <ScrollReveal key={i} animation="fade-up" duration={750}>
                <p className={`${styles.bodyParagraph} ${i === 0 ? styles.firstParagraph : ''}`}>
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>

          {/* Secondary Visual Breakpoint */}
          {guide.secondaryImage && (
            <ScrollReveal animation="fade-up" duration={900} className={styles.visualBreak}>
              <img src={guide.secondaryImage} alt={`${guide.title} atmosphere`} className={styles.breakImage} />
              <p className={styles.breakCaption}>Atmospheric dispatches from the field &bull; High Society Wanderers Archives</p>
            </ScrollReveal>
          )}

          {/* Section: The Curated Address Book */}
          <section className={styles.addressBookSection}>
            <ScrollReveal animation="fade-up" duration={800} className={styles.addressBookHeader}>
              <span className={styles.kicker}>CONFIDENTIAL COORDINATES</span>
              <h2 className={styles.addressBookTitle}>The Address Book</h2>
              <p className={styles.addressBookSub}>
                Vetted sanctuaries, private salons, and clandestine tables accessible through our private travel advisory.
              </p>
            </ScrollReveal>

            <ScrollReveal
              staggerChildren={true}
              staggerDelay={100}
              duration={850}
              className={styles.addressGrid}
            >
              {guide.addressBook.map((item, idx) => (
                <div key={idx} className={styles.addressCard}>
                  <div className={styles.addressCardTop}>
                    <span className={styles.addressType}>{item.type}</span>
                    <span className={styles.addressDistrict}>{item.district}</span>
                  </div>
                  <h3 className={styles.addressName}>{item.name}</h3>
                  <p className={styles.addressDetail}>{item.detail}</p>
                </div>
              ))}
            </ScrollReveal>
          </section>

          {/* Section: Protocol & Etiquette */}
          {guide.protocol && (
            <section className={styles.protocolSection}>
              <ScrollReveal animation="fade-scale" duration={950} className={styles.protocolCard}>
                <span className={styles.protocolKicker}>INSIDER PROTOCOL & ETIQUETTE</span>
                <h3 className={styles.protocolTitle}>Field Etiquette & Timelines</h3>
                <div className={styles.protocolGrid}>
                  <div className={styles.protocolItem}>
                    <span className={styles.protocolLabel}>RECOMMENDED DRESS</span>
                    <p className={styles.protocolVal}>{guide.protocol.attire}</p>
                  </div>
                  <div className={styles.protocolItem}>
                    <span className={styles.protocolLabel}>OPTIMAL SEASON</span>
                    <p className={styles.protocolVal}>{guide.protocol.bestSeason}</p>
                  </div>
                  <div className={styles.protocolItem}>
                    <span className={styles.protocolLabel}>LEAD TIME & ACCESS</span>
                    <p className={styles.protocolVal}>{guide.protocol.accessWindow}</p>
                  </div>
                </div>
              </ScrollReveal>
            </section>
          )}

          {/* Section: Commission Bespoke Dossier */}
          <section className={styles.dossierSection}>
            <ScrollReveal animation="fade-scale" duration={950} className={styles.dossierBox}>
              <span className={styles.dossierBadge}>THE BESPOKE EDITION</span>
              <h2 className={styles.dossierHeading}>Commission a Personalized Travel Dossier</h2>
              <p className={styles.dossierText}>
                Allow our principal designers to curate an archival, hand-bound Italian vellum dossier tailored specifically to your upcoming season in {guide.title.split(':')[0]}.
              </p>
              <div className={styles.dossierCtaRow}>
                <Link
                  href={`/begin-your-journey?guide=${encodeURIComponent(guide.title)}`}
                  className="btn btn--primary"
                >
                  COMMISSION BESPOKE DOSSIER &rarr;
                </Link>
              </div>
            </ScrollReveal>
          </section>

          {/* Section: Related Field Notes */}
          {relatedGuides.length > 0 && (
            <section className={styles.relatedSection}>
              <ScrollReveal animation="fade-up" duration={800}>
                <h2 className={styles.relatedTitle}>CONTINUE READING FIELD NOTES</h2>
              </ScrollReveal>

              <ScrollReveal
                staggerChildren={true}
                staggerDelay={100}
                duration={850}
                className={styles.relatedGrid}
              >
                {relatedGuides.map((rel) => (
                  <Link key={rel.id} href={`/guides/${rel.id}`} className={styles.relatedCard}>
                    <div className={styles.relatedMedia}>
                      <img src={rel.image} alt={rel.title} className={styles.relatedImage} />
                      <div className={styles.relatedOverlay} />
                      <span className={styles.relatedBadge}>{rel.categoryLabel}</span>
                    </div>
                    <div className={styles.relatedBody}>
                      <span className={rel.readTime}>{rel.readTime}</span>
                      <h3 className={styles.relatedCardTitle}>{rel.title}</h3>
                    </div>
                  </Link>
                ))}
              </ScrollReveal>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </article>
  );
}
