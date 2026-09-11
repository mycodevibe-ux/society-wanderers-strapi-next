import Link from 'next/link';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './page.module.css';

const FEATURED_ARTICLE = {
  category: 'Featured · Essay · April 2026',
  title: 'The Psychology Behind Modern Luxury Travel',
  excerpt: 'Modern luxury travel is no longer defined solely by exclusivity or extravagance. It is increasingly shaped by emotion, meaning, and personal connection. Today\'s travelers seek experiences that create a sense of escape, restoration, and discovery journeys that align with how they want to feel rather than simply where they want to go. Privacy, time, authenticity, and thoughtful personalization have become the new markers of luxury, reflecting a shift from collecting destinations to creating experiences that feel deeply individual and genuinely memorable.',
  image: '/images/b3.png',
  slug: 'psychology-behind-modern-luxury-travel',
};

const ARTICLES = [
  { title: 'World Cup 2026: The Essential Guide To Tickets...', image: '/images/b1.png', category: 'THE JOURNAL / TRAVEL INSPIRATION', slug: 'world-cup-2026-guide' },
  { title: "Insider's Guide To Argentina", image: '/images/b2.png', category: 'THE JOURNAL / TRAVEL INSPIRATION', slug: 'insiders-guide-argentina' },
  { title: "Insider's Guide To Madrid", image: '/images/b4.png', category: 'THE JOURNAL / TRAVEL INSPIRATION', slug: 'insiders-guide-madrid' },
  { title: "Insider's Guide To Italy's Wine Regions", image: '/images/b5.png', category: 'THE JOURNAL / TRAVEL INSPIRATION', slug: 'insiders-guide-italy-wine' },
  { title: "Morocco's 6 Best Places To Visit", image: '/images/b6.png', category: 'THE JOURNAL / TRAVEL INSPIRATION', slug: 'morocco-best-places' },
  { title: "An Insider's Guide To Where To Go, Eat & Stay In Florence", image: '/images/b7.png', category: 'THE JOURNAL / TRAVEL INSPIRATION', slug: 'insiders-guide-florence' },
];

export const metadata = {
  title: 'The Journal — HSW Global | Travel Essays & Guides',
  description: 'Essays, field notes, and quiet recommendations written for the well traveled. Explore luxury travel insights from HSW Global.',
};

export default function JournalPage() {
  return (
    <>
      <Header />
      
      <HeroBanner
        title="NOTES FROM THE ROAD"
        subtitle="Essays, field notes, and quiet recommendations written for the well traveled."
        imageSrc="/images/banner2.png"
        height="medium"
      />

      {/* Featured Article */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <ScrollReveal animation="fade-scale" duration={950} className={styles.featuredCard}>
            <div className={styles.featuredImage}>
              <img src={FEATURED_ARTICLE.image} alt={FEATURED_ARTICLE.title} />
            </div>
            <div className={styles.featuredContent}>
              <p className={styles.featuredCategory}>{FEATURED_ARTICLE.category}</p>
              <h2 className={styles.featuredTitle}>{FEATURED_ARTICLE.title}</h2>
              <p className={styles.featuredExcerpt}>{FEATURED_ARTICLE.excerpt}</p>
              <Link href={`/journal/${FEATURED_ARTICLE.slug}`} className="btn btn--primary">
                READ MORE <span className="btn__arrow">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Article Grid */}
      <section className={styles.articlesSection}>
        <div className={styles.container}>
          <ScrollReveal
            staggerChildren={true}
            staggerDelay={100}
            duration={850}
            className={styles.articlesGrid}
          >
            {ARTICLES.map((article, i) => (
              <Link key={i} href={`/journal/${article.slug}`} className={styles.articleCard}>
                <div className={styles.articleImage}>
                  <img src={article.image} alt={article.title} />
                </div>
                <p className={styles.articleCategory}>{article.category}</p>
                <h3 className={styles.articleTitle}>{article.title}</h3>
              </Link>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
