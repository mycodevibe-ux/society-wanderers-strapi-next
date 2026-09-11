import Link from 'next/link';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './page.module.css';

export const metadata = {
  title: 'Legal Terms & Advisory Charter — HSW Global',
  description: 'Terms of representation, client fiduciary standards, booking protocols, and supplier disclaimers for High Society Wanderers.',
};

export default function LegalPage() {
  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main className={styles.main}>
        {/* Header Hero */}
        <header className={styles.heroHeader}>
          <div className={styles.container}>
            <ScrollReveal animation="fade-up" duration={850}>
              <span className={styles.kicker}>FIDUCIARY STANDARDS & TERMS</span>
              <h1 className={styles.title}>ADVISORY CHARTER & LEGAL TERMS</h1>
              <p className={styles.subtitle}>
                Terms of representation, client confidentiality, booking protocols, and independent supplier disclosures.
              </p>
              <div className={styles.revisionDate}>
                <span>LAST AMENDED: JANUARY 2026 &bull; EDITION 4.2</span>
              </div>
            </ScrollReveal>
          </div>
        </header>

        {/* Content Body */}
        <div className={styles.contentSection}>
          <div className={styles.container}>
            <div className={styles.layout}>
              {/* Quick Navigation Anchor Sidebar */}
              <aside className={styles.sidebar}>
                <div className={styles.stickyNav}>
                  <span className={styles.sidebarHeading}>SECTIONS</span>
                  <ul className={styles.navList}>
                    <li><a href="#section-1" className={styles.sideLink}>01. Scope of Representation</a></li>
                    <li><a href="#section-2" className={styles.sideLink}>02. Advisory Retainers & Fees</a></li>
                    <li><a href="#section-3" className={styles.sideLink}>03. Third-Party Operators</a></li>
                    <li><a href="#section-4" className={styles.sideLink}>04. Cancellations & Force Majeure</a></li>
                    <li><a href="#section-5" className={styles.sideLink}>05. Discretion & KYC Protocol</a></li>
                    <li><a href="#section-6" className={styles.sideLink}>06. Proprietary Itineraries</a></li>
                    <li><a href="#section-7" className={styles.sideLink}>07. Limitation of Liability</a></li>
                  </ul>
                  <div className={styles.sidebarSupport}>
                    <p className={styles.supportLabel}>LEGAL DESK</p>
                    <a href="mailto:jointheclub@hswglobal.com" className={styles.supportEmail}>
                      LEGAL@HSWGLOBAL.COM
                    </a>
                  </div>
                </div>
              </aside>

              {/* Main Legal Articles */}
              <div className={styles.articles}>
                {/* Article 01 */}
                <ScrollReveal animation="fade-up" duration={750} className={styles.articleBlock} id="section-1">
                  <span className={styles.articleNumber}>01.</span>
                  <h2 className={styles.articleTitle}>Scope of Private Advisory & Representation</h2>
                  <p className={styles.articleText}>
                    High Society Wanderers LLC ("HSW Global," "we," "us," or "the Advisory") operates strictly as a bespoke luxury travel advisory and private concierge service. We act as a professional intermediary and advisor between our clients ("Client," "Member," or "you") and vetted third-party service providers, including luxury hoteliers, private aviation charterers, maritime yacht operators, rail providers, and local cultural curators.
                  </p>
                  <p className={styles.articleText}>
                    Our role is to design, curate, and coordinate bespoke travel itineraries. We do not own, manage, or operate physical aircraft, yachts, hotels, or transport fleets. All travel reservations arranged by HSW Global are subject to the individual contracts, tariffs, conditions of carriage, and policies of the respective third-party suppliers.
                  </p>
                </ScrollReveal>

                {/* Article 02 */}
                <ScrollReveal animation="fade-up" duration={750} className={styles.articleBlock} id="section-2">
                  <span className={styles.articleNumber}>02.</span>
                  <h2 className={styles.articleTitle}>Advisory Retainers, Membership Dues & Commission Architecture</h2>
                  <p className={styles.articleText}>
                    To ensure uncompromised devotion to detail, HSW Global accepts a limited roster of private clients and collective members. Depending on the tier of representation:
                  </p>
                  <ul className={styles.bulletList}>
                    <li><strong>Bespoke Trip Design Retainers:</strong> One-off non-refundable itinerary design retainers are payable upon commissioning before comprehensive planning, rate negotiation, and supplier reservations commence.</li>
                    <li><strong>High Society Club Membership Dues:</strong> Annual or seasonal membership dues are billed annually and are non-refundable once the membership term commences and concierge services are activated.</li>
                    <li><strong>Supplier Payments:</strong> Supplier deposits, buyout balances, and charter payments must be settled in full per the agreed milestone dates. Failure to settle on time may forfeit reserved slots without recourse.</li>
                  </ul>
                </ScrollReveal>

                {/* Article 03 */}
                <ScrollReveal animation="fade-up" duration={750} className={styles.articleBlock} id="section-3">
                  <span className={styles.articleNumber}>03.</span>
                  <h2 className={styles.articleTitle}>Third-Party Suppliers & Independent Operators</h2>
                  <p className={styles.articleText}>
                    All private air charter operations are executed exclusively by certified FAA Part 135 (or EASA / national equivalent) operators holding ARGUS Platinum or Wyvern Wingman credentials. Maritime yacht charters are governed by standard Mediterranean Yacht Brokers Association (MYBA) or American Yacht Charter Association (AYCA) charter contracts.
                  </p>
                  <p className={styles.articleText}>
                    HSW Global exercises exhaustive due diligence in vetting suppliers but shall not be held liable for the acts, omissions, delays, mechanical failures, negligence, or insolvencies of any independent contractor or supplier.
                  </p>
                </ScrollReveal>

                {/* Article 04 */}
                <ScrollReveal animation="fade-up" duration={750} className={styles.articleBlock} id="section-4">
                  <span className={styles.articleNumber}>04.</span>
                  <h2 className={styles.articleTitle}>Cancellations, Alterations & Force Majeure</h2>
                  <p className={styles.articleText}>
                    Because high-tier luxury inventory—including private island buyouts, superyacht anchorages, and presidential suites—operates on strict contractual terms, cancellations initiated by the client are governed strictly by the terms established in the booking confirmation for each individual element.
                  </p>
                  <p className={styles.articleText}>
                    HSW Global shall not be liable for non-performance, deviations, cancellations, or delays caused by events beyond our reasonable control (Force Majeure), including acts of God, war, civil unrest, labor disputes, airspace closures, maritime weather advisories, epidemics, or governmental travel restrictions. We emphatically advise all clients to maintain comprehensive travel, medical evacuation, and cancellation insurance.
                  </p>
                </ScrollReveal>

                {/* Article 05 */}
                <ScrollReveal animation="fade-up" duration={750} className={styles.articleBlock} id="section-5">
                  <span className={styles.articleNumber}>05.</span>
                  <h2 className={styles.articleTitle}>Client Discretion & Know-Your-Customer (KYC) Protocol</h2>
                  <p className={styles.articleText}>
                    In compliance with international aviation manifest standards, maritime border laws, and financial security regulations, clients must provide valid passport records, passenger manifests, and required identification documents promptly when requested. HSW Global handles all identity data under bank-grade cryptographic protocols as outlined in our <Link href="/privacy" className={styles.inlineLink}>Privacy Charter</Link>.
                  </p>
                </ScrollReveal>

                {/* Article 06 */}
                <ScrollReveal animation="fade-up" duration={750} className={styles.articleBlock} id="section-6">
                  <span className={styles.articleNumber}>06.</span>
                  <h2 className={styles.articleTitle}>Intellectual Property & Proprietary Itineraries</h2>
                  <p className={styles.articleText}>
                    All bespoke travel dossiers, field folios, custom route coordinates, secret address records, and curatorial compilations prepared by HSW Global remain the intellectual property of High Society Wanderers. They are prepared solely for the personal use of the commissioned Client and may not be reproduced, published, resold, or redistributed to third parties without prior written consent.
                  </p>
                </ScrollReveal>

                {/* Article 07 */}
                <ScrollReveal animation="fade-up" duration={750} className={styles.articleBlock} id="section-7">
                  <span className={styles.articleNumber}>07.</span>
                  <h2 className={styles.articleTitle}>Limitation of Liability & Governing Jurisdiction</h2>
                  <p className={styles.articleText}>
                    To the maximum extent permitted by applicable law, HSW Global's aggregate liability arising out of or related to any itinerary design engagement shall in no event exceed the total advisory fee or commission retained directly by HSW Global for that specific commission.
                  </p>
                  <p className={styles.articleText}>
                    These terms and any related agreements shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to conflicts of law principles. Any dispute arising hereunder shall be submitted to confidential arbitration under the Commercial Arbitration Rules of the American Arbitration Association.
                  </p>
                </ScrollReveal>

                {/* Direct Contact Banner */}
                <div className={styles.contactCard}>
                  <h3 className={styles.contactCardTitle}>Questions Concerning Representation?</h3>
                  <p className={styles.contactCardText}>
                    Our legal and compliance directors are available to coordinate with family office counsel regarding customized non-disclosure agreements (NDAs) or master service contracts.
                  </p>
                  <a href="mailto:jointheclub@hswglobal.com" className="btn btn--primary">
                    CONTACT LEGAL COUNSEL &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
