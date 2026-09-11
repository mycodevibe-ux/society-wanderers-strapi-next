import Link from 'next/link';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import HeroBanner from '../../../components/HeroBanner/HeroBanner';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import styles from './page.module.css';

export const SERVICES_DATA = {
  'hotels-resorts-private-villas': {
    slug: 'hotels-resorts-private-villas',
    number: '01',
    title: 'Hotels, Resorts & Private Villas',
    tagline: 'Guaranteed Unlisted Privilege & Secluded Residential Buyouts',
    heroImage: '/images/banner_villas.jpg',
    secondaryImage: '/images/dest_amalfi.jpg',
    lead: 'From private cliffside compounds in Amalfi to centuries-old palazzos on Lake Como and private Caribbean cay buyouts, our advisory unlocks sanctuary residences that never appear on open market indexes.',
    overview: 'Through our personal relationships with hotel owners, private estate trustees, and managing directors of the world’s most celebrated properties, our clients travel as recognized dignitaries. We bypass standard reservation channels to curate stays defined by absolute privacy, personalized staff rosters, and priority upgrades confirmed prior to departure.',
    inclusions: [
      'Guaranteed room and suite upgrades confirmed at booking where available',
      'Exclusive private villa buyouts with dedicated butler, chef, and housekeeping brigades',
      'Daily curated breakfast and bespoke property credits ($100 - $500 per stay)',
      'Direct, round-the-clock liaison with resident General Managers and Head Concierges',
      'Early arrival & late departure flexibility tailored to private flight schedules',
      'Pre-arrival preference provisioning (custom wine cellars, pillow menus, child nurseries)',
    ],
    caseStudy: {
      title: 'Tuscan Hillside Borgo Buyout',
      location: 'Val d’Orcia, Italy',
      detail: 'Complete 7-day exclusive buyout of a 16th-century hamlet for a 40-guest multi-generational anniversary, including private Michelin-starred banquets, classical quartet recitals, and helicopter vineyard shuttles.',
    },
  },
  'cruises-sailing-private-charters': {
    slug: 'cruises-sailing-private-charters',
    number: '02',
    title: 'Cruises, Sailing & Private Charters',
    tagline: 'Superyacht Sovereignty & Ultra-Luxury Expedition Voyaging',
    heroImage: '/images/banner_yacht.jpg',
    secondaryImage: '/images/dest_borabora.jpg',
    lead: 'Navigating the Mediterranean, Caribbean, and polar corridors with complete sovereignty. We orchestrate private mega-yacht charters, catamarans, and suites aboard the world’s most refined boutique cruise lines.',
    overview: 'Maritime travel under HSW Global is an art of quiet autonomy. Whether securing a berth in the Port of Saint-Tropez during peak regatta season or charting unmapped anchorages across the Cyclades, our maritime desk manages naval architecture vetting, provisioning, crew curation, and harbor clearances with white-glove precision.',
    inclusions: [
      'Private motor yacht & sailing superyacht charters from 30m to 90m+',
      'Exclusive suites on ultra-luxury boutique expedition vessels (Silversea, Seabourn, Ritz-Carlton Yacht)',
      'Custom itinerary design with confidential deep-water anchorages and tender-only cove access',
      'Private onboard chef staffing sourced from renowned Michelin kitchens',
      'Custom dive instructors, marine biologists, and water-toy fleets (Seabobs, submersibles)',
      'Priority berthing negotiations in crowded aristocratic ports',
    ],
    caseStudy: {
      title: 'Aegean Archipelago Expedition',
      location: 'Cyclades & Dodecanese, Greece',
      detail: 'A 14-day private charter aboard a 55-meter Benetti yacht, navigating secluded bays between Milos, Delos, and Patmos, accompanied by private classical archaeology lectures and sunset cliffside cantina takeovers.',
    },
  },
  'weddings-honeymoons': {
    slug: 'weddings-honeymoons',
    number: '03',
    title: 'Weddings & Honeymoons',
    tagline: 'Storied Venues, Romance Without Friction, & Lifelong Milestones',
    heroImage: '/images/banner_wedding.jpg',
    secondaryImage: '/images/dest_como.jpg',
    lead: 'Designing milestone romantic celebrations in the world’s most breathtaking settings—from historic French châteaux to private Polynesian atolls.',
    overview: 'A wedding or honeymoon should feel like an effortless life chapter. We collaborate intimately with couples and family offices to oversee destination logistics, exclusive resort takeovers, guest arrival corridors, and unforgettable romantic vignettes that reflect your personal love story.',
    inclusions: [
      'Full destination wedding venue scouting across historic castles, clifftop palazzos, and private islands',
      'End-to-end guest logistics coordination, VIP arrivals, and personalized welcome dossiers',
      'Tailored honeymoon itineraries featuring secluded pool villas, private sunset charters, and candlelit ruins',
      'On-site concierge team managing timing, luggage transfers, and spontaneous client requests',
      'Confidential registry management and celebratory partner amenities',
      'Honeymoon room upgrades, champagne greetings, and romantic spa therapies',
    ],
    caseStudy: {
      title: 'Château de Chantilly Celebration',
      location: 'Oise, France',
      detail: 'A 3-day equestrian and wedding celebration across a historic French royal estate, with 120 guests flown in via private charters, featuring fireworks over the moat and a 7-course gala banquet.',
    },
  },
  'corporate-travel': {
    slug: 'corporate-travel',
    number: '04',
    title: 'Corporate Travel & Executive Retreats',
    tagline: 'Strategic Precision, Discreet Logistics & Seamless Boardroom Retreats',
    heroImage: '/images/dest_stmoritz.jpg',
    secondaryImage: '/images/dest_highlands.jpg',
    lead: 'Executive itineraries designed for leaders who value punctuality, absolute discretion, and environments engineered for strategic clarity.',
    overview: 'When time is an executive’s most precious commodity, travel friction is unacceptable. HSW Global provides strategic corporate travel management for family office principals, founders, and executive boards. From last-minute transcontinental schedule pivots to high-level summits in secure private compounds, we maintain an unwavering standard of responsiveness.',
    inclusions: [
      '24/7 Dedicated Executive Concierge Desk with sub-5-minute emergency response',
      'Private conference and boardroom facilities equipped with secure communications',
      'Seamless multi-city commercial business/first and private jet connections',
      'Pre-negotiated corporate rates with leading luxury hospitality flags',
      'Armored vehicle ground transfers and executive close-protection coordination',
      'Post-transaction retreats blending high-level strategy with restoring wilderness immersion',
    ],
    caseStudy: {
      title: 'Global Tech Board Summit',
      location: 'St. Moritz & Zurich, Switzerland',
      detail: 'Orchestrating simultaneous private jet arrivals across Geneva and Samedan for a 16-member executive committee, transitioning to a private Alpine chalet for closed-door governance deliberations.',
    },
  },
  'commercial-private-flights': {
    slug: 'commercial-private-flights',
    number: '05',
    title: 'Commercial & Private Flights',
    tagline: 'Ramp-Side Access, Heavy Jet Charters & Airport Friction Eradicated',
    heroImage: '/images/banner2.png',
    secondaryImage: '/images/dest_riviera.jpg',
    lead: 'Air travel elevated to pure serenity. We curate private jet charters, helicopter transfers, and commercial first-class corridors with direct tarmac escorts.',
    overview: 'The modern airport concourse is a bottleneck best avoided. Through our global aviation network, our clients enjoy direct ramp-side arrivals, expedited border clearances, and access to a vetted global fleet of light, mid-size, and ultra-long-range private aircraft.',
    inclusions: [
      'On-demand private jet charter across ARGUS Platinum and Wyvern-certified operators',
      'Helicopter charters for direct transfers between international hubs, ski chalets, and yachts',
      'VIP tarmac meet-and-assist services bypassing commercial airport terminals',
      'Commercial First and Business class routing optimization with seat blocking and mileage management',
      'Bespoke in-flight dining tailored to specific culinary and cellar requests',
      'Discreet international luggage forwarding directly to your suite or yacht',
    ],
    caseStudy: {
      title: 'Transatlantic Heavy Jet Corridor',
      location: 'New York (Teterboro) — London (Farnborough)',
      detail: 'Coordination of a Bombardier Global 7500 charter with specialized pet quarantine clearance, onboard dining curated by a 3-star Michelin chef, and synchronized motorcars waiting on the tarmac.',
    },
  },
  'art-culinary-cultural-tours': {
    slug: 'art-culinary-cultural-tours',
    number: '06',
    title: 'Art, Culinary & Cultural Tours',
    tagline: 'After-Hours Access to Masterpieces, Living Treasures & Clandestine Tables',
    heroImage: '/images/dest_kyoto.jpg',
    secondaryImage: '/images/dest_cotswolds.jpg',
    lead: 'Transcending ordinary tourism to forge intimate connections with cultural guardians, master artisans, and legendary kitchens.',
    overview: 'True luxury lies in the depth of human experience. Drawing upon founder Loren Buckles’ background in art history, archaeology, and Italian cultural heritage, HSW Global arranges after-hours visits to museums closed to the public, private viewings with gallery directors, and dinners inside historic family cellars.',
    inclusions: [
      'After-hours private viewings of the Vatican Museums, Uffizi, Prado, and Louvre',
      'Private introductions to Living National Treasures, master ceramicists, and textile ateliers',
      'Exclusive vineyard tastings with multi-generational winemakers and estate owners',
      'Guaranteed reservations at the world’s most guarded 3-star Michelin tables',
      'Archeologist and art historian accompanied journeys through ancient sites',
      'Hands-on culinary immersions in private palazzo kitchens with master chefs',
    ],
    caseStudy: {
      title: 'After-Hours Renaissance Florence',
      location: 'Florence, Italy',
      detail: 'A private twilight access to the Vasari Corridor and private viewing of Botticelli’s masterpieces in the Uffizi with the head curator, followed by an intimate candlelit dinner in an 11th-century cloister.',
    },
  },
  'private-transfers': {
    slug: 'private-transfers',
    number: '07',
    title: 'Private Transfers & Chauffeur Services',
    tagline: 'Flawless Ground Navigation, Discreet Chauffeurs & Bespoke Fleets',
    heroImage: '/images/dest_riviera.jpg',
    secondaryImage: '/images/dest_stmoritz.jpg',
    lead: 'From runway tarmac to hotel portico, experience smooth, secure ground transit in pristine motorcars driven by career chauffeurs.',
    overview: 'The final mile of any journey dictates its lasting memory. We operate a fleet of late-model luxury motorcars—Rolls-Royce, Bentley, Mercedes-Maybach, and Range Rover—driven by vetted, security-trained chauffeurs who understand route discretion, local traffic patterns, and personal space.',
    inclusions: [
      'Pre-inspected luxury fleets including Mercedes-Benz S-Class, V-Class, Maybach, and Range Rover',
      'Uniformed, bilingual chauffeurs with extensive security and protocol training',
      'Live flight tracking and tarmac coordination ensuring zero wait time upon deplaning',
      'Complimentary onboard high-speed Wi-Fi, regional newspapers, and chilled amenities',
      'Child safety seats and specialized luggage transport vehicles available on demand',
      'Dedicated multi-day chauffeur service with constant standby capability',
    ],
    caseStudy: {
      title: 'Cannes Film Festival Fleet',
      location: 'Cannes & Côte d’Azur, France',
      detail: 'Dedicated fleet of 4 Mercedes-Maybachs and 2 luxury luggage vans on 24-hour standby for an international film delegation, executing seamless red carpet arrivals and late-night transfers to Cap d’Antibes.',
    },
  },
  'rail-journeys': {
    slug: 'rail-journeys',
    number: '08',
    title: 'Iconic & Private Rail Journeys',
    tagline: 'The Golden Age of Travel Reimagined Across Continents',
    heroImage: '/images/dest_highlands.jpg',
    secondaryImage: '/images/dest_como.jpg',
    lead: 'Relive the romance of vintage train travel with private Grand Suites aboard the Venice Simplon-Orient-Express, Royal Scotsman, and Andean Explorer.',
    overview: 'Rail travel offers a slow, poetic rhythm that no other medium can replicate. We reserve the most coveted Grand Suites on storied luxury trains, arranging champagne receptions in observation cars, private dining cabins, and bespoke off-train excursions into remote estates and alpine villages.',
    inclusions: [
      'Guaranteed reservations in Grand Suites with 24-hour private cabin stewards',
      'Exclusive routings on Venice Simplon-Orient-Express, Belmond Royal Scotsman, Maharajas’ Express',
      'Free-flowing vintage champagne and multi-course meals prepared onboard by culinary maestros',
      'Bespoke off-train excursions including private distillery tastings and castle garden viewings',
      'Private charter options for whole-train takeovers for milestone family celebrations',
      'Seamless baggage forwarding and luxury motorcar connections at each historic station',
    ],
    caseStudy: {
      title: 'Highlands & Lochs Grand Tour',
      location: 'Scottish Highlands',
      detail: 'A 5-day journey aboard the Royal Scotsman through the dramatic peaks of Cairngorms, featuring private clay pigeon shooting on ancestral estates and an evening ceilidh at a secluded lochside manor.',
    },
  },
};

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const service = SERVICES_DATA[resolvedParams.slug];

  if (!service) {
    return {
      title: 'Signature Service — HSW Global',
      description: 'Private luxury travel advisory services by HSW Global.',
    };
  }

  return {
    title: `${service.title} — Signature Services | HSW Global`,
    description: service.tagline,
  };
}

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const service = SERVICES_DATA[slug];

  if (!service) {
    return (
      <div className={styles.pageWrapper}>
        <Header />
        <main className={styles.notFoundBox}>
          <h1>Service Not Found</h1>
          <p>The requested service is not listed in our public portfolio.</p>
          <Link href="/services" className="btn btn--primary">Return to Services</Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Get other services for bottom navigation
  const otherServices = Object.values(SERVICES_DATA)
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <div className={styles.pageWrapper}>
      <Header />

      {/* Hero Banner */}
      <HeroBanner
        title={service.title}
        subtitle={service.tagline}
        imageSrc={service.heroImage}
        height="large"
      />

      <main className={styles.main}>
        {/* Navigation Breadcrumb */}
        <div className={styles.breadcrumbBar}>
          <div className={styles.container}>
            <Link href="/services" className={styles.backLink}>
              <span>&larr;</span> ALL SIGNATURE SERVICES
            </Link>
            <span className={styles.serviceNumberBadge}>SERVICE {service.number}</span>
          </div>
        </div>

        {/* Section 1: Overview & Philosophy */}
        <section className={styles.overviewSection}>
          <div className={styles.container}>
            <div className={styles.overviewGrid}>
              <ScrollReveal animation="fade-right" duration={900} className={styles.overviewTextCol}>
                <span className={styles.sectionKicker}>THE ADVISORY STANDARD</span>
                <h2 className={styles.overviewHeading}>Uncompromising Attention to Every Detail</h2>
                <p className={styles.leadText}>{service.lead}</p>
                <p className={styles.bodyText}>{service.overview}</p>
                <div className={styles.ctaButtonWrapper}>
                  <Link
                    href={`/begin-your-journey?service=${encodeURIComponent(service.title)}`}
                    className="btn btn--primary"
                  >
                    COMMISSION THIS SERVICE <span className="btn__arrow">&rarr;</span>
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-left" duration={900} className={styles.overviewImageCol}>
                <div className={styles.imageCard}>
                  <img src={service.secondaryImage} alt={service.title} className={styles.serviceImg} />
                  <div className={styles.imageCardBadge}>
                    <span>HSW PRIVATE ADVISORY</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 2: Privileged Inclusions */}
        <section className={styles.inclusionsSection}>
          <div className={styles.container}>
            <ScrollReveal animation="fade-up" duration={850} className={styles.inclusionsHeader}>
              <span className={styles.sectionKicker}>CURATED CAPABILITIES</span>
              <h2 className={styles.inclusionsTitle}>Privileged Inclusions</h2>
              <p className={styles.inclusionsSubtitle}>
                Every engagement benefits from our direct global relationships and private concierge infrastructure.
              </p>
            </ScrollReveal>

            <ScrollReveal
              staggerChildren={true}
              staggerDelay={100}
              duration={850}
              className={styles.inclusionsGrid}
            >
              {service.inclusions.map((inclusion, idx) => (
                <div key={idx} className={styles.inclusionCard}>
                  <span className={styles.inclusionDiamond}>&#9670;</span>
                  <p className={styles.inclusionText}>{inclusion}</p>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </section>

        {/* Section 3: Case Study Spotlight */}
        {service.caseStudy && (
          <section className={styles.caseStudySection}>
            <div className={styles.container}>
              <ScrollReveal animation="fade-scale" duration={950} className={styles.caseStudyCard}>
                <div className={styles.caseStudyContent}>
                  <span className={styles.caseStudyKicker}>PORTFOLIO SPOTLIGHT</span>
                  <h3 className={styles.caseStudyTitle}>{service.caseStudy.title}</h3>
                  <span className={styles.caseStudyLocation}>{service.caseStudy.location}</span>
                  <p className={styles.caseStudyDetail}>{service.caseStudy.detail}</p>
                  <Link
                    href={`/begin-your-journey?service=${encodeURIComponent(service.title)}&caseStudy=${encodeURIComponent(service.caseStudy.title)}`}
                    className={styles.caseStudyLink}
                  >
                    PLAN A SIMILAR JOURNEY &rarr;
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </section>
        )}

        {/* Section 4: Bottom Consultation CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <ScrollReveal animation="fade-up" duration={900} className={styles.ctaBox}>
              <span className={styles.ctaBadge}>PRIVATE CONCIERGE RELATIONSHIP</span>
              <h2 className={styles.ctaHeading}>Ready to Begin Curating?</h2>
              <p className={styles.ctaSub}>
                Speak directly with our principal trip designers to structure your forthcomng itinerary with precision and discretion.
              </p>
              <Link
                href={`/begin-your-journey?service=${encodeURIComponent(service.title)}`}
                className="btn btn--primary"
              >
                BEGIN YOUR JOURNEY &rarr;
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 5: Other Signature Services */}
        <section className={styles.relatedServicesSection}>
          <div className={styles.container}>
            <ScrollReveal animation="fade-up" duration={800}>
              <h2 className={styles.relatedTitle}>EXPLORE OTHER SIGNATURE SERVICES</h2>
            </ScrollReveal>

            <ScrollReveal
              staggerChildren={true}
              staggerDelay={100}
              duration={850}
              className={styles.relatedGrid}
            >
              {otherServices.map((item) => (
                <Link key={item.slug} href={`/services/${item.slug}`} className={styles.relatedCard}>
                  <div className={styles.relatedImageWrap}>
                    <img src={item.heroImage} alt={item.title} className={styles.relatedImg} />
                    <div className={styles.relatedOverlay}>
                      <span className={styles.relatedNumber}>{item.number} —</span>
                      <h3 className={styles.relatedCardTitle}>{item.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
