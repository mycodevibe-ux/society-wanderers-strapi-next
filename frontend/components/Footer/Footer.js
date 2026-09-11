'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';

const NAV_COL_1 = [
  { label: 'DESTINATIONS', url: '/destinations' },
  { label: 'SERVICES', url: '/services' },
  { label: 'JOURNAL', url: '/journal' },
  { label: 'GUIDES', url: '/guides' },
  { label: 'HIGH SOCIETY CLUB', url: '/high-society-club' },
  { label: 'ABOUT', url: '/about' },
];

const NAV_COL_2 = [
  { label: 'TEAM', url: '/about' },
  { label: 'LEGAL', url: '/legal' },
  { label: 'PRIVACY', url: '/privacy' },
  { label: 'CONTACT', url: '/contact' },
];

export default function Footer() {
  const pathname = usePathname();

  const isLinkActive = (url) => {
    if (!pathname) return false;
    if (url === '/') return pathname === '/';
    if (url === '/contact') return pathname === '/contact' || pathname === '/begin-your-journey';
    return pathname === url || pathname.startsWith(url + '/');
  };

  return (
    <footer className={styles.footer} id="site-footer">
      <div className={styles.container}>
        <div className={styles.main}>
          {/* Left: Crest Logo */}
          <div className={styles.logoCol}>
            <Link href="/" aria-label="HSW Global Home">
              <img
                src="/images/logobig.png"
                alt="High Society Wanderers"
                className={styles.logo}
              />
            </Link>
          </div>

          {/* Center: Main Nav + Email */}
          <div className={styles.centerCol}>
            <nav className={styles.navLinks}>
              {NAV_COL_1.map((link) => {
                const active = isLinkActive(link.url);
                return (
                  <Link
                    key={link.label}
                    href={link.url}
                    className={`${styles.navLink} ${active ? styles.navLinkActive : ''}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className={styles.emailWrapper}>
              <a href="mailto:jointheclub@hswglobal.com" className={styles.email}>
                JOINTHECLUB@HSWGLOBAL.COM
              </a>
            </div>
          </div>

          {/* Right: Secondary Nav + CTA Button (Touches Right Edge) */}
          <div className={styles.rightCol}>
            <nav className={styles.rightNavLinks}>
              {NAV_COL_2.map((link) => {
                const active = isLinkActive(link.url);
                return (
                  <Link
                    key={link.label}
                    href={link.url}
                    className={`${styles.navLink} ${active ? styles.navLinkActive : ''}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className={styles.ctaWrapper}>
              <Link
                href="/begin-your-journey"
                className={`${styles.ctaBtn} ${pathname === '/begin-your-journey' ? styles.ctaBtnActive : ''}`}
              >
                BEGIN YOUR JOURNEY &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright on left, 5 Social Icons on right */}
        <div className={styles.bottomBar}>
          <p className={styles.copyrightText}>
            © Copyright of High Society Wanderers {new Date().getFullYear()}
          </p>
          <div className={styles.socialIcons}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .592.046.87.136V9.41a6.33 6.33 0 0 0-.87-.06A6.34 6.34 0 0 0 3.14 15.7a6.34 6.34 0 0 0 10.74 4.49 6.27 6.27 0 0 0 1.93-4.5V8.58a8.28 8.28 0 0 0 4.84 1.56V6.69z"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="mailto:jointheclub@hswglobal.com" aria-label="Email">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
