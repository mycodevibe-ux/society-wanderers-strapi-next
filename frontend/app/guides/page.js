'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './page.module.css';

const CATEGORIES = [
  { id: 'all', label: 'ALL FIELD NOTES' },
  { id: 'city', label: 'CITY INTEL' },
  { id: 'coastal', label: 'COASTAL & ISLAND' },
  { id: 'alpine', label: 'ALPINE & ESTATES' },
  { id: 'yachting', label: 'YACHTING & AVIATION' },
];

const GUIDES = [
  {
    id: 'paris-haute-vivant',
    title: 'Paris: The Discreet Haute-Vivant Address Book',
    category: 'city',
    categoryLabel: 'CITY INTEL',
    readTime: '8 MIN READ',
    issue: 'SPRING / SUMMER 2026',
    image: '/images/aboutBanner.png',
    curator: 'HSW Paris Bureau',
    excerpt: 'Beyond the Grand Boulevards: private art salons along the Quai Voltaire, appointment-only jeweler ateliers on Place Vendôme, and the discreet speakeasies frequented by French cinematographers.',
    highlights: ['Private Salons of Place Vendôme', 'After-Hours Museum Curations', 'Historic Cellars of Saint-Germain'],
  },
  {
    id: 'costa-smeralda-yachting',
    title: 'Costa Smeralda & Corsica: The Superyacht Anchorage Dossier',
    category: 'coastal',
    categoryLabel: 'COASTAL & ISLAND',
    readTime: '12 MIN READ',
    issue: 'MAY 2026',
    image: '/images/banner_yacht.jpg',
    curator: 'Mediterranean Maritime Bureau',
    excerpt: 'The ultimate yachting dispatches for navigating the Maddalena Archipelago, securing unlisted deep-water anchorages, and stepping ashore to clandestine cliffside cantinas accessible only by tender.',
    highlights: ['Unlisted Deep-Water Anchorages', 'Tender-Only Cliffside Cantinas', 'Bespoke Seabob & Submersible Corridors'],
  },
  {
    id: 'old-money-uk-estates',
    title: 'Old-Money Sanctums: The Storied Country Estates of the UK',
    category: 'alpine',
    categoryLabel: 'ALPINE & ESTATES',
    readTime: '10 MIN READ',
    issue: 'EDITION IV',
    image: '/images/dest_cotswolds.jpg',
    curator: 'British Heritage Archives',
    excerpt: 'Where kings, statesmen, and literary dynasties have found refuge for over two centuries. An intimate appraisal of private grouse estates, private walled gardens, and butler etiquette.',
    highlights: ['Ancestral Estate Takeovers', 'Private Speyside Rare Casks', 'Historic Manor Library Salons'],
  },
  {
    id: 'grand-alpine-enclaves',
    title: 'The Grand Alpine Enclaves: St. Moritz, Gstaad & Zermatt',
    category: 'alpine',
    categoryLabel: 'ALPINE & ESTATES',
    readTime: '9 MIN READ',
    issue: 'WINTER 2026',
    image: '/images/dest_stmoritz.jpg',
    curator: 'Alpine Concierge Corps',
    excerpt: 'Navigating the high altitudes of Europe with absolute poise. Glacier landing coordinates, the private cigar lounges of the Palace, and evening toboggan runs guided by torchlight.',
    highlights: ['Private Heli-Ski Corridors', 'Discreet Members-Only Chalets', 'High-Altitude Caviar Salons'],
  },
  {
    id: 'lake-como-villeggiatura',
    title: 'Lake Como: Waterfront Palazzos & The Art of Villeggiatura',
    category: 'coastal',
    categoryLabel: 'COASTAL & ISLAND',
    readTime: '7 MIN READ',
    issue: 'SUMMER 2026',
    image: '/images/dest_como.jpg',
    curator: 'Lombardy Bureau',
    excerpt: 'A poetic examination of Northern Italy’s most storied lake. Private boatyard restorations of Riva speedboats, locked gardens of neoclassical villas, and midnight swims under Torno’s cliffs.',
    highlights: ['Riva Aquarama Historic Fleets', 'Locked Botanical Sanctuaries', 'Private Cellar Dinners with Marchesi'],
  },
  {
    id: 'kyoto-zen-artisans',
    title: 'Kyoto: Zen Quarters, Master Artisans & Living Treasures',
    category: 'city',
    categoryLabel: 'CITY INTEL',
    readTime: '11 MIN READ',
    issue: 'AUTUMN 2026',
    image: '/images/dest_kyoto.jpg',
    curator: 'Kyoto Resident Concierge',
    excerpt: 'The cultural soul of Japan unlocked through decades of personal family introductions. Evening visits to Zen gardens closed to travelers, 400-year-old kaiseki lineages, and private tea masters.',
    highlights: ['Centuries-Old Ryokan Portfolios', 'Private Gion Chado Gatherings', 'Living National Treasure Ateliers'],
  },
  {
    id: 'superyacht-charter-masterclass',
    title: 'High Seas Sovereignty: The Superyacht Charter Masterclass',
    category: 'yachting',
    categoryLabel: 'YACHTING & AVIATION',
    readTime: '14 MIN READ',
    issue: 'ANNUAL DISPATCH',
    image: '/images/dest_borabora.jpg',
    curator: 'Naval Architecture Advisory',
    excerpt: 'How to commission, provision, and route a 60-meter vessel across the Mediterranean and Caribbean with zero logistical friction and unmatched onboard culinary standards.',
    highlights: ['Pre-Season Mooring Negotiations', 'Michelin Chef Sourcing Protocols', 'Private Dive Logistics & Submarines'],
  },
  {
    id: 'art-of-arrival-aviation',
    title: 'The Art of Arrival: Private Aviation & VIP Ground Corridors',
    category: 'yachting',
    categoryLabel: 'YACHTING & AVIATION',
    readTime: '6 MIN READ',
    issue: 'EXECUTIVE MEMORANDUM',
    image: '/images/banner2.png',
    curator: 'Aviation Operations',
    excerpt: 'Air corridors, ramp-side tarmac transfers in bespoke motorcars, and international customs clearance handled without setting foot in an airport concourse.',
    highlights: ['Ramp-Side Motorcar Approvals', 'Heavy Jet Charter Selection', 'Discreet Luggage Forwarding'],
  },
];

export default function GuidesPage() {
  const [activeCat, setActiveCat] = useState('all');

  const filteredGuides = activeCat === 'all'
    ? GUIDES
    : GUIDES.filter(g => g.category === activeCat);

  return (
    <>
      <Header />

      <HeroBanner
        title="FIELD NOTES & GUIDES"
        subtitle="Unpublished Dossiers, Secret Addresses & Insider Intel for the Exceptionally Well Traveled"
        imageSrc="/images/aboutBanner.png"
        height="large"
      />

      {/* Filter Tabs */}
      <section className={styles.filterSection}>
        <div className={styles.container}>
          <ScrollReveal animation="fade-up" duration={700}>
            <div className={styles.filterNav}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  className={`${styles.filterBtn} ${activeCat === cat.id ? styles.filterBtnActive : ''}`}
                  onClick={() => setActiveCat(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Guides Editorial Grid */}
      <section className={styles.guidesSection}>
        <div className={styles.container}>
          <ScrollReveal
            staggerChildren={true}
            staggerDelay={40}
            duration={450}
            className={styles.guidesGrid}
          >
            {filteredGuides.map((guide) => (
              <article key={guide.id} className={styles.guideCard}>
                <div className={styles.cardMedia}>
                  <img src={guide.image} alt={guide.title} className={styles.cardImage} />
                  <div className={styles.cardOverlay} />
                  <span className={styles.categoryBadge}>{guide.categoryLabel}</span>
                  <span className={styles.readBadge}>{guide.readTime}</span>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.metaRow}>
                    <span className={styles.issueText}>{guide.issue}</span>
                    <span className={styles.metaDot}>•</span>
                    <span className={styles.curatorText}>{guide.curator}</span>
                  </div>

                  <h3 className={styles.guideTitle}>
                    <Link href={`/guides/${guide.id}`} className={styles.titleLink}>
                      {guide.title}
                    </Link>
                  </h3>

                  <p className={styles.guideExcerpt}>{guide.excerpt}</p>

                  <div className={styles.highlightsContainer}>
                    <span className={styles.highlightsLabel}>KEY INTEL:</span>
                    <div className={styles.highlightsPills}>
                      {guide.highlights.map((h, i) => (
                        <span key={i} className={styles.highlightPill}>{h}</span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.cardFooter}>
                    <Link href={`/guides/${guide.id}`} className={styles.readLink}>
                      READ FIELD DOSSIER &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Leather-bound Bespoke Field Dossier Service */}
      <section className={styles.dossierFeatureSection}>
        <div className={styles.container}>
          <ScrollReveal animation="fade-scale" duration={950} className={styles.dossierCard}>
            <div className={styles.dossierContent}>
              <span className={styles.dossierBadge}>THE BESPOKE EDITION</span>
              <h2 className={styles.dossierTitle}>Personalized Field Dossiers</h2>
              <p className={styles.dossierText}>
                Every journey planned by High Society Wanderers is accompanied by an exclusive, hand-bound travel folio.
                Printed on archival Italian vellum with custom gold debossing, each volume contains confidential table reservations,
                curated local contacts, private gate codes, and bespoke walking routes designed solely around your preferences.
              </p>
              <div className={styles.dossierPoints}>
                <div className={styles.dossierPoint}>
                  <span className={styles.pointIcon}>✦</span>
                  <span className={styles.pointText}>Custom Archival Vellum Binding</span>
                </div>
                <div className={styles.dossierPoint}>
                  <span className={styles.pointIcon}>✦</span>
                  <span className={styles.pointText}>Direct Private Concierge Hotlines</span>
                </div>
                <div className={styles.dossierPoint}>
                  <span className={styles.pointIcon}>✦</span>
                  <span className={styles.pointText}>Updated Live Prior to Touchdown</span>
                </div>
              </div>
              <div className={styles.dossierCta}>
                <Link href="/begin-your-journey" className={styles.btnGold}>
                  COMMISSION A BESPOKE DOSSIER &rarr;
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <ScrollReveal animation="fade-up" duration={900} className={styles.ctaBox}>
            <span className={styles.ctaTag}>TRAVEL WITH FOREKNOWLEDGE</span>
            <h2 className={styles.ctaHeading}>Ready to Unlock the Unlisted?</h2>
            <p className={styles.ctaSub}>
              Consult with our private travel designers to curate your forthcoming season across the world’s most coveted sanctuaries.
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
