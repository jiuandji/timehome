"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const languages = [
  { code: "es", flag: "🇪🇸", label: "ES" },
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "ru", flag: "🇷🇺", label: "RU" },
  { code: "pt", flag: "🇵🇹", label: "PT" },
  { code: "zh", flag: "🇨🇳", label: "ZH" },
];

const navLinks = [
  { href: "#properties", label: "Propiedades" },
  { href: "#about", label: "Sobre nosotros" },
  { href: "#areas", label: "Zonas" },
  { href: "#testimonials", label: "Opiniones" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("es");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <a href="/" className={styles.logo}>
          <span className={styles.logoTime}>TIME</span>
          <span className={styles.logoHome}>HOME</span>
          <span className={styles.logoRealty}>REALTY</span>
        </a>

        {/* Desktop Navigation */}
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: languages + phone + burger */}
        <div className={styles.rightSection}>
          {/* Language Selector */}
          <div className={styles.langSelector}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`${styles.langBtn} ${activeLang === lang.code ? styles.langActive : ""}`}
                onClick={() => setActiveLang(lang.code)}
                aria-label={`Switch to ${lang.label}`}
              >
                <span className={styles.flag}>{lang.flag}</span>
              </button>
            ))}
          </div>

          {/* Phone */}
          <a href="tel:+34603379691" className={styles.phone}>
            +34 603 37 96 91
          </a>

          {/* Mobile burger */}
          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className={styles.mobileLangs}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`${styles.langBtn} ${activeLang === lang.code ? styles.langActive : ""}`}
                onClick={() => setActiveLang(lang.code)}
              >
                {lang.flag} {lang.label}
              </button>
            ))}
          </div>
          <a href="tel:+34603379691" className={styles.mobilePhone}>
            📞 +34 603 37 96 91
          </a>
          <a href="tel:+34621145911" className={styles.mobilePhone}>
            📞 +34 621 145 911
          </a>
        </div>
      )}
    </nav>
  );
}
