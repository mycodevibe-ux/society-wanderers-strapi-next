import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import styles from './page.module.css';

/* Fallback articles database matching the designs */
const ARTICLES_DATA = {
  'psychology-behind-modern-luxury-travel': {
    slug: 'psychology-behind-modern-luxury-travel',
    category: 'Featured · Essay · April 2026',
    title: 'The Psychology Behind Modern Luxury Travel',
    subtitle: 'From destination collecting to emotional resonance: how the world’s most discerning travelers are redefining value.',
    date: 'April 14, 2026',
    readTime: '6 min read',
    author: {
      name: 'Loren HSW',
      role: 'Founder & Principal Advisor',
      avatar: '/images/Ellipse 97.png',
    },
    image: '/images/b3.png',
    caption: 'Quiet restoration and remote landscapes over ostentatious indulgence.',
    lead: 'Modern luxury travel is no longer defined solely by exclusivity or extravagance. It is increasingly shaped by emotion, meaning, and personal connection. Today’s travelers seek experiences that create a sense of escape, restoration, and discovery.',
    content: [
      {
        type: 'paragraph',
        text: 'For decades, the luxury travel sector operated on a predictable equation: higher thread counts, gilded lobbies, and private helicopters. While uncompromised comfort remains a prerequisite, the truly wealthy are experiencing an undeniable psychological evolution in how they perceive holiday time. Time has become the ultimate scarcity, and the question is no longer "Where can I spend?" but "How will this journey restore me?"',
      },
      {
        type: 'paragraph',
        text: 'We are witnessing the decisive shift from conspicuous consumption to quiet immersion. When an individual has achieved access to virtually any private club or five-star penthouse worldwide, standard luxury markers lose their allure. What replaces them is the yearning for authenticity—experiences so deeply personal and thoughtfully orchestrated that they cannot simply be booked with a credit card.',
      },
      {
        type: 'subheading',
        text: 'The Architecture of Restoration',
      },
      {
        type: 'paragraph',
        text: 'True rejuvenation requires friction-free logistics paired with space to breathe. At HSW Global, our private advisory philosophy revolves around understanding the traveler’s mental rhythm. A demanding corporate transaction requires an entirely different post-deal retreat than a multi-generational family reunion. When every transfer is discreetly synchronized and every personal preference remembered across continents, the mind genuinely relaxes.',
      },
      {
        type: 'quote',
        text: 'Privacy, time, authenticity, and thoughtful personalization have become the new markers of luxury, reflecting a shift from collecting destinations to creating experiences that feel deeply individual and genuinely memorable.',
        author: 'Loren — High Society Wanderers',
      },
      {
        type: 'subheading',
        text: 'The Future of Bespoke Wandering',
      },
      {
        type: 'paragraph',
        text: 'Looking ahead, luxury travel will be measured by relationships rather than reservations. Having a single trusted advisor who learns the nuances of how you take your morning espresso in Como, which side of the yacht you prefer for sunset in the Cyclades, or how your children travel, transforms a journey into a seamless extension of home.',
      },
    ],
    inlineImages: ['/images/img1.png', '/images/imgleft.png'],
  },
  'world-cup-2026-guide': {
    slug: 'world-cup-2026-guide',
    category: 'The Journal / Sports & Culture',
    title: 'World Cup 2026: The Essential Private Guide To Tickets, Suites & Aviation',
    subtitle: 'Navigating North America’s premier sporting spectacle with bespoke access, private aviation, and premier hospitality.',
    date: 'March 28, 2026',
    readTime: '8 min read',
    author: {
      name: 'Loren HSW',
      role: 'Founder & Principal Advisor',
      avatar: '/images/Ellipse 97.png',
    },
    image: '/images/b1.png',
    caption: 'Private aviation and protected box suites for World Cup 2026.',
    lead: 'With matches spread across three countries, sixteen host cities, and four time zones, World Cup 2026 presents both unprecedented excitement and logistical complexity.',
    content: [
      {
        type: 'paragraph',
        text: 'The 2026 World Cup across the United States, Canada, and Mexico is set to be the largest sporting event in global history. For high-net-worth attendees, standard commercial flight connections and crowded hotel lobbies are out of the question. Achieving a seamless itinerary requires synchronized private aviation slots and vetted luxury villa residences in key host cities like Los Angeles, Miami, New York, and Guadalajara.',
      },
      {
        type: 'quote',
        text: 'In high-demand international sporting events, precision planning is the line between unforgettable euphoria and exhausting logistics.',
        author: 'HSW Global Advisory',
      },
      {
        type: 'subheading',
        text: 'Hospitality Suites and Protected Access',
      },
      {
        type: 'paragraph',
        text: 'Our advisory secures private skyboxes, field-side hospitality lounges, and guaranteed helicopter transfers bypassing metropolitan stadium traffic. Whether following a specific national team or attending the knockout rounds, our dedicated travel designers orchestrate the entire stay with bespoke dining and cultural excursions between matches.',
      },
    ],
    inlineImages: ['/images/a4.png', '/images/a5.png'],
  },
  'insiders-guide-argentina': {
    slug: 'insiders-guide-argentina',
    category: 'The Journal / Travel Inspiration',
    title: "Insider's Guide To Argentina: From Patagonian Estancias to Mendoza Vineyards",
    subtitle: 'A private journey through polo estates, high-altitude Malbec terroirs, and glacial sanctuaries.',
    date: 'March 15, 2026',
    readTime: '7 min read',
    author: {
      name: 'Loren HSW',
      role: 'Founder & Principal Advisor',
      avatar: '/images/Ellipse 97.png',
    },
    image: '/images/b2.png',
    caption: 'Vast Patagonian landscapes and historic private estancias.',
    lead: 'Argentina offers a grand tapestry of untamed natural elegance and cosmopolitan sophistication, best experienced through private estates and secluded wilderness lodges.',
    content: [
      {
        type: 'paragraph',
        text: 'From the French-inspired boulevards of Recoleta in Buenos Aires to the dramatic granite peaks of Los Glaciares, Argentina rewards those who look beyond tourist trails. Private polo lessons with national champions, after-hours cellar tastings with Mendoza’s master winemakers, and helicopter flights over Iguazú Falls form the backbone of a quintessential HSW itinerary.',
      },
      {
        type: 'quote',
        text: 'The soul of Argentina is found in the stillness of the pampas and the warmth of conversations that linger long past midnight.',
        author: 'Field Notes, Buenos Aires',
      },
    ],
    inlineImages: ['/images/img3.png', '/images/img4.png'],
  },
  'insiders-guide-madrid': {
    slug: 'insiders-guide-madrid',
    category: 'The Journal / City Guides',
    title: "Insider's Guide To Madrid: Aristocratic Palaces & Secret Tapas Salons",
    subtitle: 'Discovering Spain’s golden capital through private viewings at the Prado, rooftop terraces, and historic quarters.',
    date: 'February 22, 2026',
    readTime: '5 min read',
    author: {
      name: 'Loren HSW',
      role: 'Founder & Principal Advisor',
      avatar: '/images/Ellipse 97.png',
    },
    image: '/images/b4.png',
    caption: 'Madrid at dusk: classical architecture and vibrant culinary salons.',
    lead: 'Madrid possesses a regal confidence and vibrant pulse that few European capitals can match, where centuries of artistic heritage seamlessly merge with avant-garde gastronomy.',
    content: [
      {
        type: 'paragraph',
        text: 'Madrid’s quiet luxury is tucked behind heavy carved oak doors in Salamanca and Chamberí. Here, private art collections rival public museums, and intimate gastronomic clubs host discreet dinners for discerning culinary connoisseurs.',
      },
    ],
    inlineImages: ['/images/a6.png', '/images/img2.png'],
  },
  'insiders-guide-italy-wine': {
    slug: 'insiders-guide-italy-wine',
    category: 'The Journal / Wine & Culinary',
    title: "Insider's Guide To Italy's Wine Regions: Piedmont, Montalcino & Beyond",
    subtitle: 'Exclusive cellar access, truffle hunts with master foragers, and private villa stays among rolling Italian hills.',
    date: 'February 10, 2026',
    readTime: '6 min read',
    author: {
      name: 'Loren HSW',
      role: 'Founder & Principal Advisor',
      avatar: '/images/Ellipse 97.png',
    },
    image: '/images/b5.png',
    caption: 'Misty autumn mornings across the Barolo hills of Piedmont.',
    lead: 'Italy’s greatest vintages are rooted in centuries of familial tradition, best unlocked through intimate conversations with winemakers who rarely open their cellars to the public.',
    content: [
      {
        type: 'paragraph',
        text: 'From the nebbiolo vines of the Langhe to the cypress-lined hills of the Val d’Orcia, our network includes multi-generational private winemakers who open their barrel cellars exclusively for HSW clients. Private helicopter flights between estates and dinners hosted by resident counts create an experience far beyond conventional tastings.',
      },
    ],
    inlineImages: ['/images/a2.png', '/images/b8.png'],
  },
  'morocco-best-places': {
    slug: 'morocco-best-places',
    category: 'The Journal / Travel Inspiration',
    title: "Morocco's 6 Best Places To Visit: From Royal Riads to Agafay Stargazing",
    subtitle: 'A private curation of Marrakech palaces, Atlas Mountain retreats, and nomadic desert luxury.',
    date: 'January 28, 2026',
    readTime: '7 min read',
    author: {
      name: 'Loren HSW',
      role: 'Founder & Principal Advisor',
      avatar: '/images/Ellipse 97.png',
    },
    image: '/images/b6.png',
    caption: 'Intricate zellij tilework and serene courtyards in Marrakech.',
    lead: 'Morocco is a sensory masterpiece where ancient imperial history converges with refined desert hospitality.',
    content: [
      {
        type: 'paragraph',
        text: 'Beyond the vibrant energy of the souks lies an intensely refined world of private riads, secret courtyards, and starlit luxury camps in the Agafay Desert. We arrange private after-hours viewings of the Majorelle Gardens and Berber village trekking with expert local anthropologists.',
      },
    ],
    inlineImages: ['/images/a7.png', '/images/a8.png'],
  },
  'insiders-guide-florence': {
    slug: 'insiders-guide-florence',
    category: 'The Journal / City Guides',
    title: "An Insider's Guide To Where To Go, Eat & Stay In Florence",
    subtitle: 'Renaissance palazzos, private atelier visits, and quiet dining gems along the Arno.',
    date: 'January 14, 2026',
    readTime: '6 min read',
    author: {
      name: 'Loren HSW',
      role: 'Founder & Principal Advisor',
      avatar: '/images/Ellipse 97.png',
    },
    image: '/images/b7.png',
    caption: 'The golden light of Florence illuminating the Ponte Vecchio.',
    lead: 'Florence remains the cradle of Western beauty. In this guide, we share private palace stays and secluded artisan studios away from the crowded piazzas.',
    content: [
      {
        type: 'paragraph',
        text: 'To experience Florence properly is to walk its streets early in the morning or after the midday heat has subsided. Our clients enjoy after-hours private tours of the Uffizi Gallery, bespoke leather workshops in Oltrarno, and candlelit dinners in private Renaissance gardens.',
      },
    ],
    inlineImages: ['/images/imgleft.png', '/images/b3.png'],
  },
};

export async function generateStaticParams() {
  return Object.keys(ARTICLES_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const article = ARTICLES_DATA[resolvedParams.slug];

  if (!article) {
    return {
      title: 'Article — The Journal | HSW Global',
      description: 'Private travel essays and guides from HSW Global.',
    };
  }

  return {
    title: `${article.title} — HSW Global Journal`,
    description: article.subtitle || article.lead,
    openGraph: {
      title: article.title,
      description: article.lead,
      images: [article.image],
    },
  };
}

export default async function JournalDetailPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // Retrieve article or generate graceful fallback for any unknown slug
  let article = ARTICLES_DATA[slug];

  if (!article) {
    const formattedTitle = slug
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

    article = {
      slug,
      category: 'The Journal / Travel Essay',
      title: formattedTitle,
      subtitle: 'Field notes, quiet recommendations, and insights curated for the discerning traveler.',
      date: 'April 2026',
      readTime: '5 min read',
      author: {
        name: 'Loren HSW',
        role: 'Founder & Principal Advisor',
        avatar: '/images/Ellipse 97.png',
      },
      image: '/images/banner2.png',
      caption: 'HSW Global Private Advisory Notes.',
      lead: 'Every extraordinary journey begins with a singular vision. At HSW Global, we cultivate relationships that elevate travel from an itinerary to an art form.',
      content: [
        {
          type: 'paragraph',
          text: 'The essence of true luxury is found in the unspoken understanding of what makes an experience unforgettable. Whether navigating remote archipelagos or arranging private access to protected historical landmarks, our focus remains steadfastly on effortless elegance and privacy.',
        },
        {
          type: 'quote',
          text: 'Travel designed around your rhythm, your lifestyle, and the memories you wish to create.',
          author: 'High Society Wanderers',
        },
      ],
      inlineImages: ['/images/img1.png', '/images/img2.png'],
    };
  }

  // Related articles (filter out current article)
  const relatedArticles = Object.values(ARTICLES_DATA)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <article className={styles.articlePage}>
      <Header />

      {/* --- Article Hero Header --- */}
      <header className={styles.hero}>
        <div className={styles.container}>
          <Link href="/journal" className={styles.backLink}>
            <span>←</span> BACK TO THE JOURNAL
          </Link>

          <p className={styles.category}>{article.category}</p>
          <h1 className={styles.title}>{article.title}</h1>

          <div className={styles.meta}>
            <span>{article.date}</span>
            <span className={styles.metaDot}>•</span>
            <span>{article.readTime}</span>
            <span className={styles.metaDot}>•</span>
            <span>BY {article.author.name}</span>
          </div>
        </div>

        <div className={styles.wideContainer}>
          <ScrollReveal animation="fade-scale" duration={950} className={styles.featuredImageWrapper}>
            <img src={article.image} alt={article.title} className={styles.featuredImage} />
          </ScrollReveal>
          {article.caption && <p className={styles.imageCaption}>{article.caption}</p>}
        </div>
      </header>

      {/* --- Article Body --- */}
      <main className={styles.contentBody}>
        <div className={styles.container}>
          {article.lead && (
            <ScrollReveal animation="fade-up" duration={850} className={styles.leadParagraph}>
              {article.lead}
            </ScrollReveal>
          )}

          {article.content.map((block, idx) => {
            if (block.type === 'paragraph') {
              return (
                <ScrollReveal key={idx} animation="fade-up" duration={750}>
                  <p className={`${styles.paragraph} ${idx === 0 ? styles.firstParagraph : ''}`}>
                    {block.text}
                  </p>
                </ScrollReveal>
              );
            }
            if (block.type === 'subheading') {
              return (
                <ScrollReveal key={idx} animation="fade-up" duration={750}>
                  <div className={styles.goldDivider} />
                  <h2 className={styles.subheading}>{block.text}</h2>
                </ScrollReveal>
              );
            }
            if (block.type === 'quote') {
              return (
                <ScrollReveal key={idx} animation="fade-scale" duration={850}>
                  <blockquote className={styles.quoteBox}>
                    <p className={styles.quoteText}>"{block.text}"</p>
                    {block.author && <p className={styles.quoteAuthor}>— {block.author}</p>}
                  </blockquote>
                </ScrollReveal>
              );
            }
            return null;
          })}

          {/* Inline Gallery */}
          {article.inlineImages && article.inlineImages.length > 0 && (
            <ScrollReveal
              staggerChildren={true}
              staggerDelay={120}
              duration={850}
              className={styles.inlineImageGrid}
            >
              {article.inlineImages.map((imgSrc, i) => (
                <img
                  key={i}
                  src={imgSrc}
                  alt={`${article.title} photograph ${i + 1}`}
                  className={styles.inlineImage}
                />
              ))}
            </ScrollReveal>
          )}

          {/* Author Footer Card */}
          <ScrollReveal animation="fade-up" duration={800} className={styles.authorSection}>
            <div className={styles.authorInfo}>
              <img src={article.author.avatar} alt={article.author.name} className={styles.authorAvatar} />
              <div>
                <p className={styles.authorName}>{article.author.name}</p>
                <p className={styles.authorRole}>{article.author.role}</p>
              </div>
            </div>
            <div className={styles.shareGroup}>
              <span className={styles.shareLabel}>SHARE</span>
              <button
                type="button"
                className={styles.shareBtn}
                title="Share this essay"
              >
                COPY LINK
              </button>
            </div>
          </ScrollReveal>

          {/* Inquiry CTA */}
          <ScrollReveal animation="fade-scale" duration={900} className={styles.inquiryCta}>
            <h3 className={styles.inquiryTitle}>Experience This Journey Firsthand</h3>
            <p className={styles.inquiryText}>
              Allow our private travel designers to curate a personalized itinerary tailored precisely to your schedule and expectations.
            </p>
            <Link href="/begin-your-journey" className="btn btn--primary">
              BEGIN YOUR JOURNEY <span className="btn__arrow">→</span>
            </Link>
          </ScrollReveal>
        </div>
      </main>

      {/* --- Related Articles --- */}
      {relatedArticles.length > 0 && (
        <section className={styles.relatedSection}>
          <div className={styles.wideContainer}>
            <ScrollReveal animation="fade-up" duration={800}>
              <h2 className={styles.relatedTitle}>CONTINUE READING</h2>
            </ScrollReveal>
            <ScrollReveal
              staggerChildren={true}
              staggerDelay={100}
              duration={850}
              className={styles.relatedGrid}
            >
              {relatedArticles.map((rel) => (
                <Link key={rel.slug} href={`/journal/${rel.slug}`} className={styles.relatedCard}>
                  <div className={styles.relatedImageWrapper}>
                    <img src={rel.image} alt={rel.title} className={styles.relatedImage} />
                  </div>
                  <p className={styles.relatedCategory}>{rel.category}</p>
                  <h3 className={styles.relatedCardTitle}>{rel.title}</h3>
                </Link>
              ))}
            </ScrollReveal>
          </div>
        </section>
      )}

      <Footer />
    </article>
  );
}
