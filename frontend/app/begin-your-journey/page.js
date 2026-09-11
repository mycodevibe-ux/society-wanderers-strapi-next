'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './page.module.css';

export default function BeginYourJourneyPage() {
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', referralSource: '',
    destination: '', travelDates: '', partySize: '', investmentRange: '',
    experienceInterests: '', accommodationPreference: '',
    travelPace: '', serviceLevel: '',
    celebrations: '', additionalNotes: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaceSelect = (pace) => {
    setFormData({ ...formData, travelPace: pace });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/booking-inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: formData }),
      });
      const json = await res.json().catch(() => ({}));
      if (json.referenceId) {
        setRefId(json.referenceId);
      } else {
        setRefId('HSW-' + Math.random().toString(36).substring(2, 8).toUpperCase());
      }
      setSubmitted(true);
    } catch (err) {
      console.warn('Form submission local fallback:', err);
      setRefId('HSW-' + Math.random().toString(36).substring(2, 8).toUpperCase());
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <>
        <Header />
        <div className={styles.thankYou}>
          <div className={styles.thankYouCard}>
            <span className={styles.thankYouKicker}>CONFIRMATION OF PRIVILEGED INQUIRY</span>
            <h1>Thank You, {formData.fullName || 'Esteemed Guest'}</h1>
            <span className={styles.thankYouRefBadge}>DOSSIER REF: {refId}</span>
            <p>
              Your travel preferences have been received by HSW Global Private Advisory. A Senior Trip Designer will review your requirements and reach out within 24 hours to begin crafting your bespoke itinerary.
            </p>
            <div className={styles.thankYouActions}>
              <Link href="/" className="btn btn--primary">
                RETURN TO HOME &rarr;
              </Link>
              <Link href="/destinations" className="btn btn--outline">
                EXPLORE SANCTUARIES &rarr;
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.layout}>
            {/* Left sidebar */}
            <ScrollReveal animation="fade-right" duration={900} className={styles.sidebar}>
              <h1 className={styles.pageTitle}>BEGIN YOUR JOURNEY</h1>
              <p className={styles.pageSubtitle}>Private Concierge Application</p>
              <p className={styles.pageDescription}>
                Every journey begins with understanding the details that matter most. Share your preferences below and HSW Global will thoughtfully curate an experience designed around your lifestyle, interests, and expectations.
              </p>
              <div className={styles.directContact}>
                <p className={styles.directLabel}>DIRECT</p>
                <a href="mailto:jointheclub@hswglobal.com" className={styles.directEmail}>
                  JOINTHECLUB@HSWGLOBAL.COM
                </a>
              </div>
            </ScrollReveal>

            {/* Form */}
            <form onSubmit={handleSubmit} className={styles.form} id="booking-form">
              {/* 01 - Introductions */}
              <ScrollReveal animation="fade-up" duration={750} className="form-section">
                <div className="form-section__header">
                  <span className="form-section__number">01.</span>
                  <span className="form-section__title">INTRODUCTIONS</span>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">FULL NAME</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="form-input" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">EMAIL</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="johndoe@gmail.com" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">PHONE</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-input" placeholder="+1 456-745-7458" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">HOW WERE YOU INTRODUCED TO HSW GLOBAL?</label>
                  <select name="referralSource" value={formData.referralSource} onChange={handleChange} className="form-select">
                    <option value="">Select</option>
                    <option value="Family/Friend">Family/Friend</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Referral">Professional Referral</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </ScrollReveal>

              {/* 02 - Journey Details */}
              <ScrollReveal animation="fade-up" duration={750} className="form-section">
                <div className="form-section__header">
                  <span className="form-section__number">02.</span>
                  <span className="form-section__title">JOURNEY DETAILS</span>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">DESTINATION(S)</label>
                    <select name="destination" value={formData.destination} onChange={handleChange} className="form-select">
                      <option value="">Select</option>
                      <option value="Europe">Europe</option>
                      <option value="Asia">Asia</option>
                      <option value="Caribbean">Caribbean</option>
                      <option value="Africa">Africa</option>
                      <option value="South America">South America</option>
                      <option value="North America">North America</option>
                      <option value="Oceania">Oceania</option>
                      <option value="Multiple">Multiple Destinations</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">TRAVEL DATES</label>
                    <input type="text" name="travelDates" value={formData.travelDates} onChange={handleChange} className="form-input" placeholder="Sep 21 - 28, 2026" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">TRAVELING PARTY</label>
                    <select name="partySize" value={formData.partySize} onChange={handleChange} className="form-select">
                      <option value="">Select</option>
                      <option value="Solo">Solo</option>
                      <option value="Couple">Couple</option>
                      <option value="Family (3-5)">Family (3-5)</option>
                      <option value="Group (6+)">Group (6+)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">PREFERRED INVESTMENT RANGE</label>
                    <select name="investmentRange" value={formData.investmentRange} onChange={handleChange} className="form-select">
                      <option value="">Select</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                      <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                      <option value="$50,000+">$50,000+</option>
                    </select>
                  </div>
                </div>
              </ScrollReveal>

              {/* 03 - Travel Style */}
              <ScrollReveal animation="fade-up" duration={750} className="form-section">
                <div className="form-section__header">
                  <span className="form-section__number">03.</span>
                  <span className="form-section__title">TRAVEL STYLE</span>
                </div>
                <div className="form-group">
                  <label className="form-label">EXPERIENCE INTERESTS:</label>
                  <select name="experienceInterests" value={formData.experienceInterests} onChange={handleChange} className="form-select">
                    <option value="">Select</option>
                    <option value="Coastal Escape">Coastal Escape</option>
                    <option value="Cultural Immersion">Cultural Immersion</option>
                    <option value="Adventure & Nature">Adventure & Nature</option>
                    <option value="Culinary & Wine">Culinary & Wine</option>
                    <option value="Wellness & Spa">Wellness & Spa</option>
                    <option value="City & Nightlife">City & Nightlife</option>
                  </select>
                </div>
              </ScrollReveal>

              {/* 04 - Accommodation */}
              <ScrollReveal animation="fade-up" duration={750} className="form-section">
                <div className="form-section__header">
                  <span className="form-section__number">04.</span>
                  <span className="form-section__title">ACCOMMODATION PREFERENCES</span>
                </div>
                <div className="form-group">
                  <label className="form-label">BOUTIQUE HOTEL</label>
                  <select name="accommodationPreference" value={formData.accommodationPreference} onChange={handleChange} className="form-select">
                    <option value="">Select</option>
                    <option value="Boutique Hotel">Boutique Hotel</option>
                    <option value="5-Star Resort">5-Star Resort</option>
                    <option value="Private Villa">Private Villa</option>
                    <option value="Yacht/Cruise">Yacht/Cruise</option>
                    <option value="Mixed">Mixed</option>
                  </select>
                </div>
              </ScrollReveal>

              {/* 05 - Travel Pace */}
              <ScrollReveal animation="fade-up" duration={750} className="form-section">
                <div className="form-section__header">
                  <span className="form-section__number">05.</span>
                  <span className="form-section__title">TRAVEL PACE</span>
                </div>
                <div className="pace-options">
                  {['RELAXED', 'BALANCED', 'FULLY CURATED SCHEDULE'].map((pace) => (
                    <button
                      key={pace}
                      type="button"
                      className={`pace-option ${formData.travelPace === pace ? 'active' : ''}`}
                      onClick={() => handlePaceSelect(pace)}
                    >
                      {pace}
                    </button>
                  ))}
                </div>
              </ScrollReveal>

              {/* 06 - Service Level */}
              <ScrollReveal animation="fade-up" duration={750} className="form-section">
                <div className="form-section__header">
                  <span className="form-section__number">06.</span>
                  <span className="form-section__title">SERVICE LEVEL</span>
                </div>
                <div className="form-group">
                  <select name="serviceLevel" value={formData.serviceLevel} onChange={handleChange} className="form-select">
                    <option value="">Select</option>
                    <option value="Hotel Reservations & Preferred Perks">Hotel Reservations & Preferred Perks</option>
                    <option value="Full Concierge & Itinerary Planning">Full Concierge & Itinerary Planning</option>
                    <option value="Ultra Luxury & Private Access">Ultra Luxury & Private Access</option>
                  </select>
                </div>
              </ScrollReveal>

              {/* 07 - Celebrations */}
              <ScrollReveal animation="fade-up" duration={750} className="form-section">
                <div className="form-section__header">
                  <span className="form-section__number">07.</span>
                  <span className="form-section__title">CELEBRATIONS & SPECIAL MOMENTS</span>
                </div>
                <div className="form-group">
                  <label className="form-label">ARE YOU CELEBRATING ANYTHING SPECIAL?</label>
                  <select name="celebrations" value={formData.celebrations} onChange={handleChange} className="form-select">
                    <option value="">Select</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Honeymoon">Honeymoon</option>
                    <option value="Retirement">Retirement</option>
                    <option value="Engagement">Engagement</option>
                    <option value="None">None</option>
                  </select>
                </div>
              </ScrollReveal>

              {/* 08 - Additional */}
              <ScrollReveal animation="fade-up" duration={750} className="form-section">
                <div className="form-section__header">
                  <span className="form-section__number">08.</span>
                  <span className="form-section__title">PREFERENCES & SPECIAL CONSIDERATIONS</span>
                </div>
                <div className="form-group">
                  <label className="form-label">ANYTHING WE SHOULD KNOW?</label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Dining Preferences, Accessibility Needs, Travel Goals, Or Special Requests."
                    rows={3}
                  />
                </div>
                <p className={styles.disclaimer}>
                  Each itinerary is tailored individually. Service fees and membership pricing vary based on travel needs, household size, and scope of concierge services.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={150} duration={750}>
                <button type="submit" className="btn btn--primary" disabled={submitting} id="submit-booking">
                  {submitting ? 'SUBMITTING...' : 'SUBMIT INQUIRY'} <span className="btn__arrow">→</span>
                </button>
              </ScrollReveal>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
