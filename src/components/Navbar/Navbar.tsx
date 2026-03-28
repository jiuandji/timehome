"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname, Link } from "@/i18n/navigation";
import styles from "./Navbar.module.css";

const languages = [
  { code: "es", flag: "🇪🇸", label: "ES" },
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "ru", flag: "🇷🇺", label: "RU" },
  { code: "pt", flag: "🇵🇹", label: "PT" },
  { code: "zh", flag: "🇨🇳", label: "ZH" },
] as const;

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/properties", label: t("properties") },
    { href: "/#about", label: t("about") },
    { href: "/#areas", label: t("areas") },
    { href: "/#testimonials", label: t("testimonials") },
    { href: "/contact", label: t("contact") },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale as "es" | "en" | "ru" | "pt" | "zh" });
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoTime}>TIME</span>
          <span className={styles.logoHome}>HOME</span>
          <span className={styles.logoRealty}>REALTY</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href as any} className={styles.navLink}>
                {link.label}
              </Link>
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
                className={`${styles.langBtn} ${locale === lang.code ? styles.langActive : ""}`}
                onClick={() => switchLocale(lang.code)}
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
            <Link
              key={link.href}
              href={link.href as any}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className={styles.mobileLangs}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`${styles.langBtn} ${locale === lang.code ? styles.langActive : ""}`}
                onClick={() => {
                  switchLocale(lang.code);
                  setMenuOpen(false);
                }}
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
