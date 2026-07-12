import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

// Inline SVG brand icons (lucide-react v3 removed brand icons)
const IconGithub = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);
const IconLinkedin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const IconGlobe = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
  </svg>
);
const IconTelegram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.686c.223-.195-.054-.285-.346-.086l-6.4 4.02-2.76-.865c-.595-.185-.606-.595.126-.884l10.796-4.159c.5-.184.954.116.804.896z"/>
  </svg>
);

const LogoStar = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
  </svg>
);

const socialLinks = [
  { href: 'https://github.com/Mahtab-Azim', Icon: IconGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/mahtab-abdolazimzadeh/', Icon: IconLinkedin, label: 'LinkedIn' },
  { href: 'https://mahtab.dev', Icon: IconGlobe, label: 'Website' },
  { href: 'https://t.me/Itsmahtech', Icon: IconTelegram, label: 'Telegram' },
];

const navLinks = [
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/#contact' },
];

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div className={styles.top}>
          {/* Left: CTA */}
          <div className={styles.cta}>
            <p className={styles.ctaLabel}>Got a project in mind?</p>
            <h2 className={styles.ctaHeading}>
              Let's create something<br />
              extraordinary
            </h2>
          </div>

          {/* Middle: Contact info */}
          <div className={styles.contactInfo}>
            <a href="mailto:hello@mahtab.dev" className={styles.contactItem}>
              <Mail size={16} strokeWidth={1.75} />
              hello@mahtab.dev
            </a>
            <div className={styles.contactItem}>
              <MapPin size={16} strokeWidth={1.75} />
              Tehran, Iran (GMT+3:30)
            </div>
          </div>

          {/* Right: Social links */}
          <div className={styles.social}>
            <p className={styles.socialLabel}>Follow me</p>
            <div className={styles.socialLinks}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={styles.socialIcon}
                >
                  <s.Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom */}
        <div className={styles.bottom}>
          <Link href="/" className={styles.bottomLogo} aria-label="Mahtab Azimzadeh — Home">
            <div className={styles.logoContainer}>
              <span className={styles.logoM}>M</span>
              <span className={styles.logoA}>A</span>
              <span className={styles.logoStar}>
                <LogoStar />
              </span>
            </div>
          </Link>

          <nav className={styles.bottomNav} aria-label="Footer navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.bottomNavLink}>
                {link.label}
              </Link>
            ))}
          </nav>

          <p className={styles.copyright}>
            © {new Date().getFullYear()} Mahtab Azimzadeh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
