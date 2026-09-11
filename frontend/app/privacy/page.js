import Link from 'next/link';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './page.module.css';

export const metadata = {
  title: 'Privacy & Discretion Charter — HSW Global',
  description: 'Discretion charter, data protection standards, and executive confidentiality commitments of High Society Wanderers.',
};

export default function PrivacyPage() {
  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main className={styles.main}>
        {/* Header Hero */}
        <header className={styles.heroHeader}>
          <div className={styles.container}>
            <ScrollReveal animation="fade-up" duration={850}>
              <span className={styles.kicker}>CONFIDENTIALITY & DATA FIDUCIARY</span>
              <h1 className={styles.title}>PRIVACY & DISCRETION CHARTER</h1>
              <p className={styles.subtitle}>
                Our unwavering commitment to safeguarding the identities, itineraries, and personal security of our private collective.
              </p>
              <div className={styles.revisionDate}>
                <span>LAST REVIEWED: JANUARY 2026 &bull; PROTOCOL SEC-4</span>
              </div>
            </ScrollReveal>
          </div>
        </header>

        {/* Content Section */}
        <div className={styles.contentSection}>
          <div className={styles.container}>
            <div className={styles.layout}>
              {/* Quick Anchor Navigation */}
              <aside className={styles.sidebar}>
                <div className={styles.stickyNav}>
                  <span className={styles.sidebarHeading}>DISCRETION CHARTER</span>
                  <ul className={styles.navList}>
                    <li><a href="#charter-1" className={styles.sideLink}>01. Principle of Discretion</a></li>
                    <li><a href="#charter-2" className={styles.sideLink}>02. Data We Collect</a></li>
                    <li><a href="#charter-3" className={styles.sideLink}>03. Purpose of Processing</a></li>
                    <li><a href="#charter-4" className={styles.sideLink}>04. Zero Commercial Disclosure</a></li>
                    <li><a href="#charter-5" className={styles.sideLink}>05. Security Architecture</a></li>
                    <li><a href="#charter-6" className={styles.sideLink}>06. GDPR & CCPA Rights</a></li>
                    <li><a href="#charter-7" className={styles.sideLink}>07. Data Protection Officer</a></li>
                  </ul>
                  <div className={styles.sidebarSupport}>
                    <p className={styles.supportLabel}>DISCRETION DESK</p>
                    <a href="mailto:jointheclub@hswglobal.com" className={styles.supportEmail}>
                      PRIVACY@HSWGLOBAL.COM
                    </a>
                  </div>
                </div>
              </aside>

              {/* Main Privacy Principles */}
              <div className={styles.articles}>
                {/* 01. The Principle of Discretion */}
                <ScrollReveal animation="fade-up" duration={750} className={styles.articleBlock} id="charter-1">
                  <span className={styles.articleNumber}>01.</span>
                  <h2 className={styles.articleTitle}>The Foundational Principle of Discretion</h2>
                  <p className={styles.articleText}>
                    At High Society Wanderers ("HSW Global"), discretion is not merely a legal compliance policy; it is the cornerstone of our entire private advisory philosophy. We represent prominent individuals, high-net-worth families, enterprise leaders, and public figures whose personal movements require absolute confidentiality.
                  </p>
                  <p className={styles.articleText}>
                    We operate under strict internal non-disclosure protocols. Client identities, past travels, impending departures, private aviation tail numbers, yacht coordinates, and residential arrangements are guarded with bank-grade vigilance.
                  </p>
                </ScrollReveal>

                {/* 02. Information We Collect */}
                <ScrollReveal animation="fade-up" duration={750} className={styles.articleBlock} id="charter-2">
                  <span className={styles.articleNumber}>02.</span>
                  <h2 className={styles.articleTitle}>Information Entrusted to Us</h2>
                  <p className={styles.articleText}>
                    To orchestrate seamless private travel, we collect only the information strictly necessary to execute your journey:
                  </p>
                  <ul className={styles.bulletList}>
                    <li><strong>Candidate & Contact Data:</strong> Full legal name, preferred alias, encrypted telephone, private email, and primary residence.</li>
                    <li><strong>Travel Preferences & Biometrics:</strong> Dietary specifications, pillow and bedding preferences, medical allergies, companion details, and preferred traveling pace.</li>
                    <li><strong>Regulatory & Border Documentation:</strong> Passport copies, diplomatic visas, and passenger manifest data required by international civil aviation and customs authorities.</li>
                    <li><strong>Financial Instruments:</strong> Encrypted payment confirmations and billing records managed via PCI-DSS Level 1 compliant processors.</li>
                  </ul>
                </ScrollReveal>

                {/* 03. Purpose of Processing */}
                <ScrollReveal animation="fade-up" duration={750} className={styles.articleBlock} id="charter-3">
                  <span className={styles.articleNumber}>03.</span>
                  <h2 className={styles.articleTitle}>Purpose & Proportionality of Data Use</h2>
                  <p className={styles.articleText}>
                    Information provided to HSW Global is utilized exclusively for:
                  </p>
                  <ul className={styles.bulletList}>
                    <li>Negotiating and confirming bespoke hotel reservations, private villa buyouts, and yacht berths under confidential VIP codes.</li>
                    <li>Filing mandatory flight manifests with civil aviation authorities and Fixed-Base Operators (FBOs).</li>
                    <li>Customizing archival hand-bound field dossiers and personal itinerary briefings.</li>
                    <li>Maintaining personal concierge continuity across subsequent seasons so your preferences never need repeating.</li>
                  </ul>
                </ScrollReveal>

                {/* 04. Zero Commercial Disclosure */}
                <ScrollReveal animation="fade-up" duration={750} className={styles.articleBlock} id="charter-4">
                  <span className={styles.articleNumber}>04.</span>
                  <h2 className={styles.articleTitle}>Zero Commercial Sale or Data Monetization</h2>
                  <p className={styles.articleText}>
                    HSW Global has never sold, leased, monetized, or shared client information with external marketing conglomerates, data brokers, or advertising networks. We never will.
                  </p>
                  <p className={styles.articleText}>
                    Data is disclosed only to verified operational suppliers (e.g., the General Manager of your reserved property or the pilot-in-command of your chartered jet) strictly on a "need-to-know" basis to facilitate your arrival.
                  </p>
                </ScrollReveal>

                {/* 05. Security Architecture */}
                <ScrollReveal animation="fade-up" duration={750} className={styles.articleBlock} id="charter-5">
                  <span className={styles.articleNumber}>05.</span>
                  <h2 className={styles.articleTitle}>Cryptographic & Physical Security Architecture</h2>
                  <p className={styles.articleText}>
                    All digital records are stored within encrypted cloud repositories adhering to SOC2 Type II, ISO 27001, and AES-256 standards. Access is restricted solely to your designated principal trip designer. Physical travel dossiers and passenger manifests are handled under strict chain-of-custody protocols.
                  </p>
                </ScrollReveal>

                {/* 06. GDPR & CCPA Rights */}
                <ScrollReveal animation="fade-up" duration={750} className={styles.articleBlock} id="charter-6">
                  <span className={styles.articleNumber}>06.</span>
                  <h2 className={styles.articleTitle}>Global Privacy Rights (GDPR & CCPA Compliance)</h2>
                  <p className={styles.articleText}>
                    Regardless of your geographic jurisdiction, HSW Global extends international gold-standard privacy protections to all clients:
                  </p>
                  <ul className={styles.bulletList}>
                    <li><strong>Right to Full Access:</strong> Request a comprehensive export of all personal dossiers maintained in your advisory profile.</li>
                    <li><strong>Right to Erasure / Digital Sunset:</strong> Upon completion of a journey or conclusion of membership, you may request the immediate cryptographic erasure of your non-statutory records.</li>
                    <li><strong>Right to Restriction:</strong> Restrict the sharing of sensitive personal preferences to specific designated suppliers.</li>
                  </ul>
                </ScrollReveal>

                {/* 07. Data Protection Officer */}
                <ScrollReveal animation="fade-up" duration={750} className={styles.articleBlock} id="charter-7">
                  <span className={styles.articleNumber}>07.</span>
                  <h2 className={styles.articleTitle}>Direct Inquiries to the Data Protection Officer</h2>
                  <p className={styles.articleText}>
                    For inquiries regarding our discretion protocols, bespoke non-disclosure agreements, or to exercise your rights under global privacy legislation, please contact our confidential office directly:
                  </p>
                  <div className={styles.officerBox}>
                    <p className={styles.officerTitle}>Data Protection & Discretion Officer</p>
                    <p className={styles.officerEntity}>High Society Wanderers Advisory Secretariat</p>
                    <p className={styles.officerEmail}>Email: <a href="mailto:jointheclub@hswglobal.com">privacy@hswglobal.com</a></p>
                    <p className={styles.officerEncrypted}>Encrypted PGP Keys available upon verified request.</p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
