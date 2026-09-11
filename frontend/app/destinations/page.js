'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './page.module.css';

const REGIONS = [
  { id: 'all', label: 'ALL SANCTUARIES' },
  { id: 'mediterranean', label: 'MEDITERRANEAN & EUROPE' },
  { id: 'americas', label: 'AMERICAS & CARIBBEAN' },
  { id: 'africa', label: 'AFRICA & SAFARI' },
  { id: 'asia', label: 'ASIA & PACIFIC' },
];

const DESTINATIONS = [
  {
    id: 'amalfi-coast',
    title: 'Amalfi Coast & Capri',
    location: 'Campania, Italy',
    region: 'mediterranean',
    tag: 'ITALIAN RIVIERA',
    image: '/images/dest_amalfi.jpg',
    tagline: 'Clifftop Palaces & Private Riva Charters',
    description: 'Suspended between azure sea and lemon groves, our private villas in Positano and Ravello offer reserved berths, private cliff-access swimming platforms, and after-hours Capri grottos.',
    highlights: ['Private Cliffside Villa Buyouts', 'Classic Riva Aquarama Fleet', 'Curated After-Hours Grottos'],
    season: 'May — October',
  },
  {
    id: 'lake-como',
    title: 'Lake Como & Bellagio',
    location: 'Lombardy, Italy',
    region: 'mediterranean',
    tag: 'LOMBARDY LAKES',
    image: '/images/dest_como.jpg',
    tagline: 'Historic Waterfront Palazzos & Alpine Vistas',
    description: 'Centuries of aristocratic leisure reflected in calm waters. Exclusive access to private lakeside estates, historic gardens closed to the public, and bespoke gastronomic evenings.',
    highlights: ['Villa Sola Cabiati Private Access', 'Custom Wooden Speedboat Concierge', 'Michelin Star Lakeside Salons'],
    season: 'April — November',
  },
  {
    id: 'st-moritz',
    title: 'St. Moritz & Engadin',
    location: 'Graubünden, Switzerland',
    region: 'mediterranean',
    tag: 'SWISS ALPS',
    image: '/images/dest_stmoritz.jpg',
    tagline: 'Glacier Corridors & Aristocratic Alpine Sanctuaries',
    description: 'The birthplace of high-altitude glamour. Experience ski-in/ski-out private chalets with dedicated master chefs, heli-glacier excursions, and entry to closed-door toboggan clubs.',
    highlights: ['Private Heli-Ski Corridors', 'Bespoke Chalet Staff & Cellar', 'Badrutt’s Private Member Enclaves'],
    season: 'December — April / July — Sept',
  },
  {
    id: 'french-riviera',
    title: 'Cap d’Antibes & Saint-Tropez',
    location: 'Côte d’Azur, France',
    region: 'mediterranean',
    tag: 'FRENCH RIVIERA',
    image: '/images/dest_riviera.jpg',
    tagline: 'Belle Époque Mansions & Superyacht Anchorages',
    description: 'From pine-fringed headlands to legendary harbour berths. Private beach compound takeovers, vintage roadster excursions through Provence, and reservations at the Riviera’s most guarded tables.',
    highlights: ['Eden-Roc Villa Privilege', 'Guaranteed Port de Saint-Tropez Berths', 'Private Lavender & Vineyard Flights'],
    season: 'May — September',
  },
  {
    id: 'scottish-highlands',
    title: 'The Scottish Highlands',
    location: 'Highlands & Islands, UK',
    region: 'mediterranean',
    tag: 'HIGHLAND ESTATES',
    image: '/images/dest_highlands.jpg',
    tagline: 'Ancestral Castles & Heather-Clad Wilderness',
    description: 'Complete buyouts of ancient baronial estates set against lochs and dramatic peaks. Falconry, traditional stalking, and rare single-malt barrel tastings with master distillers.',
    highlights: ['Exclusive Castle & Estate Takeovers', 'Private Speyside Single-Malt Access', 'Helicopter Loch & Peak Landings'],
    season: 'June — October',
  },
  {
    id: 'cotswolds-oxfordshire',
    title: 'The Cotswolds & Oxfordshire',
    location: 'England, United Kingdom',
    region: 'mediterranean',
    tag: 'ENGLISH COUNTRYSIDE',
    image: '/images/dest_cotswolds.jpg',
    tagline: 'Honey-Stone Manors & Private Country Estates',
    description: 'Quintessential British refinement. Walled rose gardens, equestrian schooling on private land, and dinner parties arranged in private historic dining rooms with world-class guest speakers.',
    highlights: ['Grade I Jacobean Country Manors', 'Private Equestrian Concierge', 'Michelin Farm-to-Table Curations'],
    season: 'Year-Round Refinement',
  },
  {
    id: 'st-barths',
    title: 'St. Barths & Anguilla',
    location: 'French West Indies',
    region: 'americas',
    tag: 'CARIBBEAN ENCLAVE',
    image: '/images/dest_stbarths.jpg',
    tagline: 'Discreet Hillside Compounds & Turquoise Bays',
    description: 'Effortless French-Caribbean sophistication. Unlisted hillside villas with infinity views over Flamands and Gouverneur, yacht provisioning, and priority arrivals through Gustaf III Airport.',
    highlights: ['Discreet Hillside Compounds', 'Superyacht Mooring & Tender Logistics', 'Cheval Blanc Maison Privileges'],
    season: 'November — May',
  },
  {
    id: 'serengeti-safari',
    title: 'Serengeti & Masai Mara',
    location: 'Tanzania & Kenya',
    region: 'africa',
    tag: 'GREAT RIFT VALLEY',
    image: '/images/dest_serengeti.jpg',
    tagline: 'Untamed Wilderness with White-Glove Precision',
    description: 'Track the Great Migration from private, moveable tented camps set in closed conservation concessions. Private aircraft transfers, expert paleontologists, and champagne breakfasts under acacia trees.',
    highlights: ['Sole-Use Mobile Tented Camps', 'Unrestricted Conservation Zones', 'Private Aviator Safari Logistics'],
    season: 'June — October / Jan — March',
  },
  {
    id: 'kyoto-fuji',
    title: 'Kyoto & Honshu Island',
    location: 'Japan',
    region: 'asia',
    tag: 'IMPERIAL JAPAN',
    image: '/images/dest_kyoto.jpg',
    tagline: 'Living Heritage, Secret Zen Temples & Master Artisans',
    description: 'Cross the threshold of centuries-old ryokans reserved exclusively for family lineages. Private evening visits to Gion teahouses, Zen abbots, and custom culinary sessions with Living National Treasures.',
    highlights: ['Generational Ryokan Buyouts', 'After-Hours Zen Garden Meditation', 'Direct Access to Living Treasures'],
    season: 'March — May / Oct — Dec',
  },
  {
    id: 'tetiaroa-bora-bora',
    title: 'Bora Bora & Tetiaroa',
    location: 'French Polynesia',
    region: 'asia',
    tag: 'SOUTH PACIFIC',
    image: '/images/dest_borabora.jpg',
    tagline: 'Private Coral Atolls & Overwater Sanctuaries',
    description: 'Unspoiled sanctuaries surrounded by sapphire lagoons. Private atoll conservation hideaways once cherished by royalty, with dedicated marine biologists, pearl diving, and catamaran expeditions.',
    highlights: ['Private Atoll Conservation Buyout', 'Catamaran & Deep-Sea Explorations', 'Overwater Villas with Butler Corps'],
    season: 'April — November',
  },
];

export default function DestinationsPage() {
  const [activeRegion, setActiveRegion] = useState('all');

  const filteredDestinations = activeRegion === 'all'
    ? DESTINATIONS
    : DESTINATIONS.filter(d => d.region === activeRegion);

  return (
    <>
      <Header />

      <HeroBanner
        title="SANCTUARIES OF DISTINCTION"
        subtitle="Curated Privileged Access to the World's Most Exclusive Enclaves & Private Havens"
        imageSrc="/images/banner2.png"
        height="large"
      />

      {/* Region Filter Navigation */}
      <section className={styles.filterSection}>
        <div className={styles.container}>
          <ScrollReveal animation="fade-up" duration={700}>
            <div className={styles.filterNav}>
              {REGIONS.map((region) => (
                <button
                  key={region.id}
                  className={`${styles.filterBtn} ${activeRegion === region.id ? styles.filterBtnActive : ''}`}
                  onClick={() => setActiveRegion(region.id)}
                >
                  {region.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className={styles.destinationsSection}>
        <div className={styles.container}>
          <ScrollReveal
            staggerChildren={true}
            staggerDelay={40}
            duration={450}
            className={styles.destinationsGrid}
          >
            {filteredDestinations.map((dest) => (
              <div key={dest.id} className={styles.destinationCard}>
                <div className={styles.cardImageWrapper}>
                  <img src={dest.image} alt={dest.title} className={styles.cardImage} />
                  <div className={styles.cardOverlay} />
                  <span className={styles.tagBadge}>{dest.tag}</span>
                  <span className={styles.seasonBadge}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '4px' }}>
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                    {dest.season}
                  </span>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardHeader}>
                    <span className={styles.locationMeta}>{dest.location}</span>
                    <h3 className={styles.cardTitle}>{dest.title}</h3>
                    <p className={styles.cardTagline}>"{dest.tagline}"</p>
                  </div>

                  <p className={styles.cardDescription}>{dest.description}</p>

                  <div className={styles.highlightsBox}>
                    <span className={styles.highlightsHeading}>PRIVILEGED ACCESS:</span>
                    <ul className={styles.highlightsList}>
                      {dest.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.cardCta}>
                    <Link
                      href={`/begin-your-journey?destination=${encodeURIComponent(dest.title)}`}
                      className={styles.inquireBtn}
                    >
                      REQUEST BESPOKE ITINERARY &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Sovereign Portfolio: Private Island & Estate Buyouts */}
      <section className={styles.buyoutSection}>
        <div className={styles.container}>
          <ScrollReveal animation="fade-scale" duration={950} className={styles.buyoutCard}>
            <div className={styles.buyoutContent}>
              <span className={styles.buyoutTag}>THE SOVEREIGN PORTFOLIO</span>
              <h2 className={styles.buyoutTitle}>Private Island & Historic Estate Buyouts</h2>
              <p className={styles.buyoutText}>
                For gatherings that demand absolute discretion, sovereign seclusion, and zero compromise.
                From whole-atoll buyouts in the South Pacific to 500-year-old Tuscan hill towns and Caribbean private keys,
                our advisory manages end-to-end air corridors, personal security architecture, and world-class culinary brigades.
              </p>
              <div className={styles.buyoutStatsRow}>
                <div className={styles.buyoutStat}>
                  <span className={styles.buyoutStatNum}>100%</span>
                  <span className={styles.buyoutStatLabel}>PRIVATE ACCESS</span>
                </div>
                <div className={styles.buyoutStat}>
                  <span className={styles.buyoutStatNum}>1:1</span>
                  <span className={styles.buyoutStatLabel}>STAFF TO GUEST RATIO</span>
                </div>
                <div className={styles.buyoutStat}>
                  <span className={styles.buyoutStatNum}>24/7</span>
                  <span className={styles.buyoutStatLabel}>DEDICATED CONCIERGE</span>
                </div>
              </div>
              <div className={styles.buyoutCtaRow}>
                <Link href="/begin-your-journey?type=EstateBuyout" className={styles.btnGold}>
                  INQUIRE ON BUYOUT PORTFOLIO &rarr;
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <ScrollReveal animation="fade-up" duration={900} className={styles.ctaBannerContent}>
            <span className={styles.ctaBadge}>BESPOKE TRAVEL DESIGN</span>
            <h2 className={styles.ctaBannerTitle}>Seeking an Unlisted Haven?</h2>
            <p className={styles.ctaBannerSubtitle}>
              Over sixty percent of the sanctuaries we unlock are not publicized on public indexes.
              Speak directly with our principal travel designers.
            </p>
            <Link href="/begin-your-journey" className={styles.btnGoldLarge}>
              BEGIN YOUR JOURNEY &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
