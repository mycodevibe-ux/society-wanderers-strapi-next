import Link from 'next/link';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import styles from './not-found.module.css';

export const metadata = {
  title: '404 — Coordinates Uncharted | HSW Global',
  description: 'The requested destination lies beyond charted coordinates. Return to HSW Global sanctuaries.',
};

export default function NotFound() {
  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main className={styles.main}>
        {/* Background Watermark Crest */}
        <div className={styles.watermarkWrapper}>
          <img
            src="/images/logobig.png"
            alt=""
            className={styles.watermarkLogo}
            aria-hidden="true"
          />
        </div>

        <div className={styles.ambientGlow} />

        <div className={styles.container}>
          <ScrollReveal animation="fade-scale" duration={950} className={styles.content}>
            <span className={styles.statusBadge}>EST. 2024 • COORDINATES UNCHARTED</span>

            <h1 className={styles.errorCode}>404</h1>

            <h2 className={styles.errorTitle}>An Uncharted Latitude</h2>

            <p className={styles.errorQuote}>
              "Even the finest navigators encounter waters that elude the charts."
            </p>

            <p className={styles.errorDescription}>
              The sanctuary, dispatch, or folio you are looking for has either been retired to private archives or lies beyond our current cartography. Allow us to steer your journey back to safe harbor.
            </p>

            <div className={styles.actionRow}>
              <Link href="/" className={styles.btnGold}>
                RETURN TO HARBOR &rarr;
              </Link>
              <Link href="/destinations" className={styles.btnOutline}>
                EXPLORE SANCTUARIES
              </Link>
              <Link href="/guides" className={styles.btnOutline}>
                BROWSE FIELD GUIDES
              </Link>
            </div>

            {/* Quick Directory Navigation */}
            <div className={styles.directoryBox}>
              <span className={styles.directoryLabel}>CHARTED DESTINATIONS:</span>
              <div className={styles.directoryLinks}>
                <Link href="/destinations" className={styles.dirLink}>Destinations</Link>
                <span className={styles.dirSep}>•</span>
                <Link href="/services" className={styles.dirLink}>Signature Services</Link>
                <span className={styles.dirSep}>•</span>
                <Link href="/journal" className={styles.dirLink}>The Journal</Link>
                <span className={styles.dirSep}>•</span>
                <Link href="/guides" className={styles.dirLink}>Curated Guides</Link>
                <span className={styles.dirSep}>•</span>
                <Link href="/high-society-club" className={styles.dirLink}>High Society Club</Link>
                <span className={styles.dirSep}>•</span>
                <Link href="/begin-your-journey" className={styles.dirLink}>Begin Your Journey</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </main>

      <Footer />
    </div>
  );
}
