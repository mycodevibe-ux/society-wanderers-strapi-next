import Link from 'next/link';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import StatsSection from '../components/StatsSection/StatsSection';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import styles from './page.module.css';

/* Fallback data matching design/home.jpg */
const FALLBACK_SERVICES = [
  { title: 'Hotels, Resorts & Private Villas', image: '/images/b1.png', slug: 'hotels-resorts-private-villas' },
  { title: 'Corporate Travel', image: '/images/b2.png', slug: 'corporate-travel' },
  { title: 'Weddings & Honeymoons', image: '/images/b3.png', slug: 'weddings-honeymoons' },
  { title: 'Rail Journeys', image: '/images/b4.png', slug: 'rail-journeys' },
  { title: 'Commercial & Private Flights', image: '/images/b6.png', slug: 'commercial-private-flights' },
  { title: 'Cruises & Private Charters', image: '/images/b5.png', slug: 'cruises-sailing-private-charters' },
  { title: 'Art, Culinary And Cultural Tours', image: '/images/b7.png', slug: 'art-culinary-cultural-tours' },
  { title: 'Private Transfers', image: '/images/b8.png', slug: 'private-transfers' },
];

const FALLBACK_STATS = [
  { value: '24/7', label: 'CONCIERGE' },
  { value: '120+', label: 'DESTINATIONS' },
  { value: '1:1', label: 'TRIP DESIGNER' },
  { value: 'No', label: 'COMPROMISE' },
];

/* Fallback articles matching design/home.jpg */
const FALLBACK_ARTICLES = [
  {
    title: 'The Psychology Behind Modern Luxury Travel',
    image: '/images/j1.png',
    category: 'CITY GUIDE',
    date: 'APRIL 2026',
    slug: 'psychology-behind-modern-luxury-travel',
  },
  {
    title: 'The New Standard Of Corporate Retreats',
    image: '/images/j2.png',
    category: 'CITY GUIDE',
    date: 'APRIL 2026',
    slug: 'the-new-standard-of-corporate-retreats',
  },
  {
    title: 'Where The Wealthy Are Traveling This Summer',
    image: '/images/j3.png',
    category: 'CITY GUIDE',
    date: 'APRIL 2026',
    slug: 'where-the-wealthy-are-traveling-this-summer',
  },
];

const FALLBACK_SOCIALS = [
  { image: '/images/social1.png', title: 'Travel Guide Paris France' },
  { image: '/images/social2.png', title: 'Sardinia Italy' },
  { image: '/images/social3.png', title: 'Storied Old Money Hotels' },
  { image: '/images/social4.png', title: 'Lake Como Retreat' },
  { image: '/images/social5.png', title: 'Historic Castle Estate' },
];

export const metadata = {
  title: 'HSW Global — Private Travel Advisory for the Exceptionally Well Traveled',
  description: 'Private Travel Advisory for the Exceptionally Well Traveled. Bespoke luxury travel experiences, concierge services, and exclusive membership.',
};

export default function HomePage() {
  return (
    <>
      <Header />

      {/* ===== HERO ===== */}
      <HeroBanner
        title="HSW GLOBAL"
        subtitle="Private Travel Advisory for the Exceptionally Well Traveled"
        imageSrc="/images/banner.png"
        height="large"
      />

      {/* ===== SIGNATURE SERVICE ===== */}
      <section className={styles.signatureSection} id="signature-services">
        <ScrollReveal animation="fade-up" duration={900} className={styles.signatureHeader}>
          <h2 className={styles.signatureTitle}>SIGNATURE SERVICE</h2>
        </ScrollReveal>

        <ScrollReveal
          staggerChildren={true}
          staggerDelay={90}
          duration={850}
          className={styles.serviceGrid}
        >
          {FALLBACK_SERVICES.map((service, idx) => (
            <Link key={idx} href={`/services/${service.slug}`} className={styles.serviceCard}>
              <img src={service.image} alt={service.title} className={styles.serviceCardImg} />
              <div className={styles.serviceCardOverlay}>
                <h3 className={styles.serviceCardTitle}>{service.title}</h3>
              </div>
            </Link>
          ))}
        </ScrollReveal>
      </section>

      {/* ===== THE HIGH SOCIETY CLUB ===== */}
      <section className={styles.clubSection} id="club-teaser">
        {/* Top Banner with Red Lacquer Table, Candle & Book */}
        <ScrollReveal animation="fade-scale" duration={950} className={styles.clubBanner}>
          <img
            src="/images/sociatyClub.png"
            alt="The High Society Club"
            className={styles.clubBannerImg}
          />
          <div className={styles.clubBannerOverlay}>
            <h2 className={styles.clubBannerTitle}>
              THE HIGH<br />SOCIETY CLUB
            </h2>
          </div>
        </ScrollReveal>

        {/* 2-Column Content: Left Single Image, Right Mission Bullets & CTAs */}
        <div className={styles.clubMainArea}>
          <div className={styles.container}>
            <div className={styles.clubGrid}>
              {/* Left: Single Member Image */}
              <ScrollReveal animation="fade-right" duration={950} className={styles.clubImageCol}>
                <div className={styles.clubImageWrapper}>
                  <img
                    src="/images/Rectangle 9721719.png"
                    alt="The High Society Club Member Experience"
                    className={styles.clubMemberImg}
                  />
                </div>
              </ScrollReveal>

              {/* Right: Title, 5 Mission Bullets, and Dual CTAs */}
              <div className={styles.clubInfoCol}>
                <ScrollReveal animation="fade-up" duration={800}>
                  <h3 className={styles.clubHeading}>High Society Club</h3>
                </ScrollReveal>

                <ScrollReveal
                  staggerChildren={true}
                  staggerDelay={110}
                  duration={800}
                  as="ul"
                  className={styles.clubMissionList}
                >
                  <li>
                    A private membership created for those who believe travel should feel effortless, personal, and entirely without compromise.
                  </li>
                  <li>
                    More than a booking service, The High Society Club is a year-round concierge relationship thoughtfully managing every detail from departure to return, so every journey feels seamless.
                  </li>
                  <li>
                    Designed for discerning individuals, families, and executives seeking elevated access, preferred privileges, curated experiences, and a trusted travel partner who moves at their pace.
                  </li>
                  <li>
                    Membership provides access to tailored travel planning, luxury hotel and villa reservations, preferred partner amenities, private experiences, executive travel support, and concierge level service designed around your lifestyle.
                  </li>
                  <li>
                    Because true luxury is not having more options, it is having the right ones already arranged.
                  </li>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={250} duration={850} className={styles.clubCtaRow}>
                  <Link href="/begin-your-journey" className={styles.btnGold}>
                    REQUEST CONSIDERATION &rarr;
                  </Link>
                  <Link href="/high-society-club" className={styles.btnOutline}>
                    EXPLORE THE CLUB
                  </Link>
                </ScrollReveal>
              </div>
            </div>

            {/* Stats (Animated in Viewport) */}
            <StatsSection stats={FALLBACK_STATS} />
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL ===== */}
      <section className={styles.testimonialSection} id="testimonial">
        <div className={styles.container}>
          <ScrollReveal animation="fade-scale" duration={950}>
            <blockquote className={styles.testimonialQuote}>
              &ldquo;Working With Loren At HSW Global Made This Trip Completely Seamless From Start To Finish. Every Detail Was Thoughtfully Planned, Allowing Us To Fully Relax And Enjoy The Experience Without Any Stress.&rdquo;
            </blockquote>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200} duration={850} className={styles.testimonialAuthor}>
            <div className={styles.authorMeta}>
              <img src="/images/Ellipse 97.png" alt="Lawrence N." className={styles.testimonialAvatar} />
              <div>
                <p className={styles.authorName}>Lawrence N.</p>
                <p className={styles.authorRole}>Travel by Cruise</p>
              </div>
            </div>
            <Link href="/begin-your-journey" className={styles.testimonialCta}>
              LEAVE A REVIEW &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== THE JOURNAL ===== */}
      <section className={styles.journalSection} id="journal-preview">
        <div className={styles.container}>
          <ScrollReveal animation="fade-up" duration={850}>
            <h2 className={styles.journalTitle}>THE JOURNAL</h2>
          </ScrollReveal>

          <ScrollReveal
            staggerChildren={true}
            staggerDelay={140}
            duration={850}
            className={styles.journalGrid}
          >
            {FALLBACK_ARTICLES.map((article, i) => (
              <Link key={i} href={`/journal/${article.slug}`} className={styles.journalCard}>
                <div className={styles.journalCardImage}>
                  <img src={article.image} alt={article.title} />
                </div>
                <div className={styles.journalCardMeta}>
                  <span>{article.category}</span>
                  <span className={styles.metaDot}>•</span>
                  <span>{article.date}</span>
                </div>
                <h3 className={styles.journalCardTitle}>{article.title}</h3>
              </Link>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SOCIAL FEED ===== */}
      <section className={styles.socialSection} id="social-feed">
        <div className={styles.container}>
          <ScrollReveal animation="fade-up" duration={850}>
            <h2 className={styles.socialTitle}>SOCIAL FEED</h2>
          </ScrollReveal>

          <ScrollReveal
            staggerChildren={true}
            staggerDelay={90}
            duration={850}
            className={styles.socialGrid}
          >
            {FALLBACK_SOCIALS.map((item, i) => (
              <a
                key={i}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialItem}
              >
                <img src={item.image} alt={item.title || 'HSW Global Instagram'} />
                {/* Reel UI Overlay Badges matching design */}
                <div className={styles.reelBadge}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                  <span>14</span>
                </div>
                <div className={styles.reelPlay}>
                  <div className={styles.playCircle} />
                </div>
                <div className={styles.reelVolume}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                  </svg>
                </div>
              </a>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
