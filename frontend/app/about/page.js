import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import StatsSection from '../../components/StatsSection/StatsSection';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './page.module.css';

const STATS = [
  { value: '24/7', label: 'CONCIERGE' },
  { value: '120+', label: 'DESTINATIONS' },
  { value: '1:1', label: 'TRIP DESIGNER' },
  { value: 'No', label: 'COMPROMISE' },
];

const SOCIAL_ITEMS = [
  { image: '/images/social1.png' },
  { image: '/images/social2.png' },
  { image: '/images/social3.png' },
  { image: '/images/social4.png' },
  { image: '/images/social5.png' },
];

export const metadata = {
  title: 'About — HSW Global | Loren Buckles, Founder',
  description: 'Meet Loren Buckles, founder of HSW Global. A private travel advisory built on a simple conviction: the most demanding travelers deserve a single, trusted hand.',
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <HeroBanner
        title="A PRIVATE ADVISORY"
        subtitle="HSW Global was founded on a simple conviction: the most demanding travelers in the world deserve a single, trusted hand"
        imageSrc="/images/aboutBanner.png"
        height="medium"
      />

      {/* Founder Section */}
      <section className={styles.founderSection}>
        <div className={styles.container}>
          <div className={styles.founderGrid}>
            <ScrollReveal animation="fade-right" duration={900} className={styles.founderImageWrap}>
              <img src="/images/aboutLeft.png" alt="Loren Buckles" className={styles.founderImage} />
            </ScrollReveal>
            <ScrollReveal animation="fade-left" duration={900} className={styles.founderContent}>
              <h2 className={styles.founderName}>LOREN BUCKLES</h2>
              <h3 className={styles.founderSubtitle}>My Story</h3>
              <p className={styles.founderText}>
                Travel has always been more than movement to me. It has always been about understanding people, culture, and the stories that shape a place. My perspective was deeply influenced by time spent living in Italy and studying art history, archaeology, and cultural history, where I learned to see destinations beyond their landmarks and recognize the history, craftsmanship, and human experiences that bring them to life.
              </p>
              <p className={styles.founderText}>
                Today, that perspective is at the foundation of HSW GLOBAL. I create thoughtfully curated journeys that are deeply personal and intentionally designed whether for a family vacation, a romantic escape, a cultural immersion, or executive travel. With a background in events, logistics, and luxury travel planning, I believe exceptional experiences happen when every detail is anticipated before it is ever needed. My role is to remove complexity, manage the details, and create space for clients to simply enjoy the journey.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Travel Style */}
      <section className={styles.travelStyleSection}>
        <div className={styles.container}>
          <div className={styles.travelStyleGrid}>
            <ScrollReveal animation="fade-right" duration={900} className={styles.travelStyleContent}>
              <h3 className={styles.travelStyleTitle}>Travel Style</h3>
              <p className={styles.travelStyleText}>
                My approach to travel blends culture, storytelling, and refined luxury. I am drawn to destinations with depth places where history, architecture, art, and local traditions create experiences that feel meaningful and lasting. I believe travel should feel immersive rather than transactional and personal rather than predetermined.
              </p>
              <p className={styles.travelStyleText}>
                Through HSW GLOBAL, I design experiences that move beyond reservations and itineraries. From luxury hotels and private villas to curated experiences and seamless logistics, every journey is built with intention and tailored to the individual behind it. From the moment my clients depart to the moment they return home, every detail is thoughtfully managed to create travel that feels effortless, elevated, and unforgettable.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-left" duration={900} className={styles.travelStyleImageWrap}>
              <img src="/images/aboutR.png" alt="Travel style" className={styles.travelStyleImage} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className={styles.quoteSection}>
        <div className={styles.container}>
          <ScrollReveal animation="fade-scale" duration={950}>
            <blockquote className={styles.quote}>
              "We Don't Just Book Trips We Build Journeys People Remember For Life. We Don't Just Plan Trips We Design Unforgettable Life Chapters"
            </blockquote>
            <p className={styles.quoteAttribution}>LOREN BUCKLES, FOUNDER, HSW GLOBAL</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Panorama */}
      <section className={styles.panoramaSection}>
        <ScrollReveal animation="fade-up" duration={950}>
          <img src="/images/about.png" alt="Luxury destination panorama" className={styles.panoramaImage} />
        </ScrollReveal>
      </section>

      {/* Stats (Animated in Viewport) */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <StatsSection stats={STATS} />
        </div>
      </section>

      {/* Social Feed */}
      <section className={styles.socialSection}>
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
            {SOCIAL_ITEMS.map((item, i) => (
              <div key={i} className={styles.socialItem}>
                <img src={item.image} alt="HSW Global Instagram" />
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
