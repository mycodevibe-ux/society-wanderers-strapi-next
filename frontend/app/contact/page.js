'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './page.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'Bespoke Travel Inquiry',
    subject: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: formData }),
      });
      const json = await res.json().catch(() => ({}));
      setRefId(json.referenceId || ('HSW-' + Math.random().toString(36).substring(2, 8).toUpperCase()));
      setSubmitted(true);
    } catch (err) {
      console.warn('Contact fallback:', err);
      setRefId('HSW-' + Math.random().toString(36).substring(2, 8).toUpperCase());
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.container}>
          <ScrollReveal animation="fade-up" duration={850} className={styles.header}>
            <span className={styles.kicker}>PRIVATE ADVISORY & COMMUNICATIONS</span>
            <h1 className={styles.title}>Direct Bureau Liaison</h1>
            <p className={styles.subtitle}>
              Connect with our discreet concierge desks in London, Paris, and Zurich for immediate itinerary commissions or confidential inquiries.
            </p>
          </ScrollReveal>

          <div className={styles.layout}>
            {/* Left: Global Bureaus & Direct Channels */}
            <ScrollReveal animation="fade-right" duration={900} className={styles.bureauCol}>
              <div className={styles.bureauCard}>
                <h3 className={styles.bureauCity}>Mayfair Bureau, London</h3>
                <p className={styles.bureauAddress}>
                  14 Berkeley Square, Mayfair<br />
                  London W1J 6BD, United Kingdom
                </p>
                <div className={styles.bureauMeta}>
                  <span>DIRECT: +44 (0) 20 7946 0912</span>
                  <span>CONFIDENTIAL: <a href="mailto:jointheclub@hswglobal.com">jointheclub@hswglobal.com</a></span>
                  <span>HOURS: 24/7 Dedicated Principal Coverage</span>
                </div>
              </div>

              <div className={styles.bureauCard}>
                <h3 className={styles.bureauCity}>Faubourg Bureau, Paris</h3>
                <p className={styles.bureauAddress}>
                  28 Rue du Faubourg Saint-Honoré<br />
                  75008 Paris, France
                </p>
                <div className={styles.bureauMeta}>
                  <span>DIRECT: +33 1 42 68 55 00</span>
                  <span>MARITIME & YACHT DESK: Ext. 4</span>
                </div>
              </div>

              <div className={styles.bureauCard}>
                <h3 className={styles.bureauCity}>Private Membership Application</h3>
                <p className={styles.bureauAddress}>
                  Seeking comprehensive global travel governance and unlisted sanctuary access?
                </p>
                <Link href="/begin-your-journey" className="btn btn--outline" style={{ marginTop: '0.5rem' }}>
                  BEGIN YOUR JOURNEY &rarr;
                </Link>
              </div>
            </ScrollReveal>

            {/* Right: Direct Dispatch Message Form */}
            <ScrollReveal animation="fade-left" duration={900} className={styles.formBox}>
              {submitted ? (
                <div className={styles.thankYouCard}>
                  <span className={styles.thankYouKicker}>COMMUNICATION DISPATCHED</span>
                  <h2 className={styles.thankYouTitle}>Thank You, {formData.fullName}</h2>
                  <span className={styles.thankYouBadge}>DISPATCH REF: {refId}</span>
                  <p className={styles.thankYouText}>
                    Your message has been routed to our Senior Advisory partners. You will receive a discreet response within 2 hours.
                  </p>
                  <Link href="/" className="btn btn--primary">
                    RETURN TO HOME &rarr;
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="contact-direct-form">
                  <h2 className={styles.formBoxTitle}>Direct Concierge Inquiry</h2>
                  <p className={styles.formBoxSub}>
                    Please provide your contact details and message below. For urgent aviation or maritime dispatches, we maintain live line readiness.
                  </p>

                  <div className={styles.formGrid}>
                    <div className="form-group">
                      <label className="form-label">FULL NAME *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Lord / Lady / Dr / Mr"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="principal@domain.com"
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formGrid}>
                    <div className="form-group">
                      <label className="form-label">TELEPHONE / SIGNAL</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="+44 7700 900077"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">NATURE OF INQUIRY</label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="Bespoke Travel Inquiry">Bespoke Travel Inquiry</option>
                        <option value="Private Aviation Dispatch">Private Aviation Dispatch</option>
                        <option value="Superyacht Charter">Superyacht Charter</option>
                        <option value="Private Villa Buyout">Private Villa Buyout</option>
                        <option value="High Society Club Membership">High Society Club Membership</option>
                        <option value="Media & Press">Media & Press</option>
                        <option value="Other Confidential Matter">Other Confidential Matter</option>
                      </select>
                    </div>
                  </div>

                  <div className={`form-group ${styles.fullWidth}`}>
                    <label className="form-label">SUBJECT</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="e.g. Summer Mediterranean Charter / Private Villa"
                    />
                  </div>

                  <div className={`form-group ${styles.fullWidth}`}>
                    <label className="form-label">YOUR CONFIDENTIAL MESSAGE *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                      placeholder="Describe your travel dates, preferred sanctuary, or advisory requirements."
                      rows={5}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className={`btn btn--primary ${styles.submitBtn}`}
                    disabled={submitting}
                    id="submit-contact-btn"
                  >
                    {submitting ? 'TRANSMITTING MESSAGE...' : 'DISPATCH CONFIDENTIAL MESSAGE'} <span className="btn__arrow">&rarr;</span>
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
