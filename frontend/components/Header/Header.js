'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const NAV_LINKS = [
  { label: 'DESTINATIONS', url: '/destinations' },
  { label: 'SERVICES', url: '/services' },
  { label: 'JOURNAL', url: '/journal' },
  { label: 'GUIDES', url: '/guides' },
  { label: 'HIGH SOCIETY CLUB', url: '/high-society-club' },
  { label: 'ABOUT', url: '/about' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} id="main-header">
      <div className={styles.container}>
        <Link href="/" className={styles.logo} aria-label="HSW Global Home">
          <img src="/images/logo.png" alt="High Society Wanderers" className={styles.logoImg} />
        </Link>

        <nav className={`${styles.nav} ${mobileOpen ? styles.navOpen : ''}`} id="main-nav">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.url || (link.url !== '/' && pathname?.startsWith(link.url));

            return (
              <Link
                key={link.url}
                href={link.url}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/begin-your-journey"
            className={styles.mobileCtaBtn}
            onClick={() => setMobileOpen(false)}
          >
            BEGIN YOUR JOURNEY →
          </Link>
        </nav>

        <Link
          href="/begin-your-journey"
          className={`${styles.ctaBtn} ${pathname === '/begin-your-journey' ? styles.ctaBtnActive : ''}`}
        >
          BEGIN YOUR JOURNEY
          <span className={styles.ctaArrow}>→</span>
        </Link>

        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
