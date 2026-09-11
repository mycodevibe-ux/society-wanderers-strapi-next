import Link from 'next/link';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './page.module.css';

const SERVICES = [
  { number: '01', title: 'Hotels, Resorts & Private Villas', image: '/images/a1.png', slug: 'hotels-resorts-private-villas' },
  { number: '02', title: 'Cruises, Sailing & Private Charters', image: '/images/a2.png', slug: 'cruises-sailing-private-charters' },
  { number: '03', title: 'Weddings & Honeymoons', image: '/images/a3.png', slug: 'weddings-honeymoons' },
  { number: '04', title: 'Corporate Travel', image: '/images/a4.png', slug: 'corporate-travel' },
  { number: '05', title: 'Commercial & Private Flights', image: '/images/a5.png', slug: 'commercial-private-flights' },
  { number: '06', title: 'Art, Culinary & Cultural Tours', image: '/images/a6.png', slug: 'art-culinary-cultural-tours' },
  { number: '07', title: 'Private Transfers', image: '/images/a7.png', slug: 'private-transfers' },
  { number: '08', title: 'Rail Journeys', image: '/images/a8.png', slug: 'rail-journeys' },
];

export const metadata = {
  title: 'Services — HSW Global | Luxury Travel Services',
  description: 'Explore our signature travel services — from luxury hotels and private villas to yacht charters, private flights, weddings, and curated cultural experiences.',
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      
      <HeroBanner
        title="WANDER BEAUTIFULLY"
        imageSrc="/images/services.png"
        height="medium"
      />

      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <ScrollReveal
            staggerChildren={true}
            staggerDelay={90}
            duration={850}
            className={styles.servicesGrid}
          >
            {SERVICES.map((service) => (
              <Link
                key={service.number}
                href={`/services/${service.slug}`}
                className={styles.serviceCard}
              >
                <img src={service.image} alt={service.title} className={styles.serviceImage} />
                <div className={styles.serviceOverlay}>
                  <span className={styles.serviceNumber}>{service.number} —</span>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                </div>
              </Link>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
