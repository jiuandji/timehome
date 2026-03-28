"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import styles from "./Footer.module.css";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoTime}>TIME</span>
              <span className={styles.logoHome}>HOME</span>
              <span className={styles.logoRealty}>REALTY</span>
            </div>
            <p className={styles.description}>{t("description")}</p>
            <div className={styles.langs}>
              🇪🇸 🇬🇧 🇷🇺 🇵🇹 🇨🇳 — {t("langNote")}
            </div>
            <div className={styles.socials}>
              <a href="https://www.facebook.com/time.home.realty.2023" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                Facebook
              </a>
              <a href="https://www.instagram.com/timehomerealty.pda" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>{t("explore")}</h4>
            <Link href="/properties" className={styles.link}>{t("allProperties")}</Link>
            <Link href="/" className={styles.link}>{t("villas")}</Link>
            <Link href="/" className={styles.link}>{t("apartments")}</Link>
            <Link href="/#areas" className={styles.link}>{t("areaGuide")}</Link>
            <Link href="/" className={styles.link}>{t("buyGuide")}</Link>
          </div>

          {/* Company */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>{t("company")}</h4>
            <Link href="/#about" className={styles.link}>{t("aboutUs")}</Link>
            <Link href="/#testimonials" className={styles.link}>{t("reviews")}</Link>
            <Link href="/" className={styles.link}>{t("blog")}</Link>
            <Link href="/" className={styles.link}>{t("terms")}</Link>
          </div>

          {/* Contact */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>{t("contactTitle")}</h4>
            <a href="tel:+34603379691" className={styles.link}>📞 +34 603 37 96 91</a>
            <a href="tel:+34621145911" className={styles.link}>📞 +34 621 145 911</a>
            <a href="https://wa.me/34603379691" className={styles.link} target="_blank" rel="noopener noreferrer">💬 {t("whatsapp")}</a>
            <a href="mailto:infotimehomerealty@gmail.com" className={styles.link}>✉️ infotimehomerealty@gmail.com</a>
            <p className={styles.address}>
              📍 12 Carrer Pineda del Mar,<br />
              local 27B, Castell-Platja d&apos;Aro,<br />
              Girona, España
            </p>
          </div>
        </div>

        {/* Schedule */}
        <div className={styles.schedule}>
          <p className={styles.scheduleTitle}>🕐 {t("schedule")}</p>
          <p className={styles.scheduleText}>{t("weekdays")}</p>
          <p className={styles.scheduleText}>{t("sundays")}</p>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} TIME HOME REALTY. {t("copyright")}
          </p>
          <div className={styles.legal}>
            <Link href="/" className={styles.legalLink}>{t("privacy")}</Link>
            <Link href="/" className={styles.legalLink}>{t("cookies")}</Link>
            <Link href="/" className={styles.legalLink}>{t("legal")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
