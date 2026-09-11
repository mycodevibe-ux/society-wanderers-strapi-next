import Link from 'next/link';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import { fetchAPI, getStrapiMedia } from '../../lib/strapi';
import styles from './page.module.css';

const FALLBACK_SERVICES = [
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

export default async function ServicesPage() {
  const [pageRes, servicesRes] = await Promise.allSettled([
    fetchAPI('/services-page', { populate: '*' }),
    fetchAPI('/services', { populate: '*', sort: 'order:asc' }),
  ]);

  const pageData = pageRes.status === 'fulfilled' && pageRes.value?.data ? pageRes.value.data : null;
  const rawServices = servicesRes.status === 'fulfilled' && servicesRes.value?.data ? servicesRes.value.data : null;

  const heroImg = pageData?.heroImage ? getStrapiMedia(pageData.heroImage, '/images/services.png') : '/images/services.png';

  const servicesList = rawServices && rawServices.length > 0
    ? rawServices.map((s, idx) => ({
        number: s.number || String(idx + 1).padStart(2, '0'),
        title: s.title,
        slug: s.slug,
        image: getStrapiMedia(s.image, FALLBACK_SERVICES[idx]?.image || '/images/a1.png'),
      }))
    : FALLBACK_SERVICES;

  return (
    <>
      <Header />
      
      <HeroBanner
        title={pageData?.heroTitle || 'WANDER BEAUTIFULLY'}
        subtitle={pageData?.heroSubtitle || ''}
        imageSrc={heroImg}
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
            {servicesList.map((service) => (
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
