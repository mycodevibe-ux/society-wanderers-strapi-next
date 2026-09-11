import Link from 'next/link';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './page.module.css';

const BENEFITS = [
  { title: 'YEAR-ROUND CONCIERGE', description: 'A dedicated point of contact who learns your preferences over time how you travel, where you stay, and the details that matter before they ever need to be requested.' },
  { title: 'PRIORITY ACCESS', description: 'Protected reservations, preferred partner privileges, and experiences not always available through public channels.' },
  { title: 'DEDICATED TRIP DESIGNER', description: 'One trusted advisor across every journey. No reintroductions, no starting over simply continuity and thoughtful service.' },
  { title: 'PREFERRED PRIVILEGES', description: 'Preferred partner amenities, upgrades where available, hotel credits, and elevated experiences through our global relationships.' },
  { title: 'PRIVATE AVIATION & YACHTING', description: 'Private aviation coordination, yacht charters, helicopter transfers, and bespoke transportation designed around your schedule.' },
  { title: 'HOUSEHOLD & FAMILY CARE', description: 'Children, family members, personal staff, and travel companions are supported with the same level of care and attention extended to every Member.' },
];

export const metadata = {
  title: 'The High Society Club — HSW Global | Private Travel Membership',
  description: 'A private travel collective for those who understand that time is their most valuable asset. Discover exclusive membership benefits.',
};

export default function HighSocietyClubPage() {
  return (
    <>
      <Header />

      <HeroBanner
        title="THE HIGH SOCIETY CLUB"
        subtitle="Private travel. Perfectly executed."
        imageSrc="/images/club.png"
        height="medium"
      />

      {/* Intro */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <ScrollReveal animation="fade-right" duration={900}>
              <h2 className={styles.introHeading}>
                FOR THOSE ACCUSTOMED TO MORE.
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-left" duration={900} className={styles.introText}>
              <p>
                The High Society Club is a private travel collective created for those who understand that time is their most valuable asset. More than a membership, it is a long term concierge relationship designed around access, discretion, and thoughtful service. From quiet weekends away to multi-destination journeys and private experiences, every detail is anticipated and managed with care.
              </p>
              <p>
                Membership is structured across three levels from effortless luxury hotel access to fully managed concierge and ultra luxury travel experiences each designed to meet you where and how you travel.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <ScrollReveal
            staggerChildren={true}
            staggerDelay={100}
            duration={850}
            className={styles.benefitsGrid}
          >
            {BENEFITS.map((benefit, i) => (
              <div key={i} className={styles.benefitCard}>
                <div className={styles.benefitDiamond}>◆</div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDesc}>{benefit.description}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Membership CTA */}
      <section className={styles.ctaSection}>
        <ScrollReveal animation="fade-scale" duration={950} className={styles.ctaBg}>
          <img src="/images/membership.png" alt="Membership" className={styles.ctaBgImage} />
          <div className={styles.ctaOverlay} />
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Membership Has Its Privileges</h2>
            <p className={styles.ctaText}>
              Travel should feel effortless, personal, and entirely without compromise. Begin a private conversation and discover the membership level designed for how you travel.
            </p>
            <Link href="/high-society-club/apply" className="btn btn--primary">
              REQUEST MEMBERSHIP CONSIDERATION <span className="btn__arrow">→</span>
            </Link>
            <p className={styles.ctaSubtext}>
              ACCEPTED MEMBERS RECEIVE A PRIVATE LOGIN FOR ITINERARIES AND TRIP DETAILS.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </>
  );
}
