"use client";

import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import { Link } from "@/i18n/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import { siteConfig } from "@/data/site-config";
import styles from "./page.module.css";

export default function ContactPage() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now just show success state
    // In production this would send to an API / Sanity / email service
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}`;

  return (
    <div className={styles.contactPage}>
      <Navbar />

      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb}>
            <Link href="/">← Home</Link>
            <span className={styles.breadcrumbSep}>/</span>
            <span style={{ color: "#fff" }}>{t("pageTitle")}</span>
          </nav>
          <h1 className={styles.pageTitle}>
            {t("pageTitle")}{" "}
            <em className={styles.accent}>{t("pageTitleAccent")}</em>
          </h1>
          <p className={styles.pageSubtitle}>{t("pageSubtitle")}</p>
        </div>
      </section>

      {/* Main Content */}
      <div className={styles.contentWrapper}>
        {/* Form */}
        <div className={styles.formCard}>
          {!submitted ? (
            <>
              <h2 className={styles.formTitle}>{t("formTitle")}</h2>
              <p className={styles.formSubtitle}>{t("formSubtitle")}</p>
              <form className={styles.formGrid} onSubmit={handleSubmit}>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>{t("fieldName")}</label>
                  <input
                    type="text"
                    className={styles.fieldInput}
                    required
                    placeholder="Juan García"
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>{t("fieldEmail")}</label>
                  <input
                    type="email"
                    className={styles.fieldInput}
                    required
                    placeholder="email@example.com"
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>{t("fieldPhone")}</label>
                  <input
                    type="tel"
                    className={styles.fieldInput}
                    placeholder="+34 600 000 000"
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>{t("fieldInterest")}</label>
                  <select className={styles.fieldSelect} defaultValue="">
                    <option value="" disabled>—</option>
                    <option value="buy">{t("interestBuy")}</option>
                    <option value="sell">{t("interestSell")}</option>
                    <option value="rent">{t("interestRent")}</option>
                    <option value="invest">{t("interestInvest")}</option>
                    <option value="other">{t("interestOther")}</option>
                  </select>
                </div>
                <div className={`${styles.fieldGroup} ${styles.fieldFull}`}>
                  <label className={styles.fieldLabel}>{t("fieldMessage")}</label>
                  <textarea
                    className={styles.fieldTextarea}
                    required
                    rows={4}
                  />
                </div>
                <button type="submit" className={styles.submitBtn}>
                  {t("submitBtn")} →
                </button>
              </form>
            </>
          ) : (
            <div className={styles.successState}>
              <div className={styles.successIcon}>✅</div>
              <h3 className={styles.successTitle}>{t("successTitle")}</h3>
              <p className={styles.successText}>{t("successText")}</p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>{t("infoTitle")}</h3>

            {/* Office */}
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>{t("officeTitle")}</p>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon}>📍</span>
                <span>
                  {siteConfig.address.street}<br />
                  {siteConfig.address.postalCode} {siteConfig.address.city}<br />
                  {siteConfig.address.country}
                </span>
              </div>
            </div>

            {/* Schedule */}
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>{t("scheduleTitle")}</p>
              <div className={styles.scheduleRow}>
                <span className={styles.scheduleDay}>{t("weekdays")}</span>
                <span className={styles.scheduleHours}>{t("weekdaysHours")}</span>
              </div>
              <div className={styles.scheduleRow}>
                <span className={styles.scheduleDay}>{t("sunday")}</span>
                <span className={styles.scheduleHours}>{t("sundayHours")}</span>
              </div>
            </div>

            {/* Direct contact */}
            <div className={`${styles.infoBlock} ${styles.infoBlockLast}`}>
              <p className={styles.infoLabel}>{t("directContact")}</p>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon}>📞</span>
                <a href={`tel:${siteConfig.phoneNumber.replace(/\s/g, "")}`} className={styles.infoLink}>
                  {siteConfig.phoneNumber}
                </a>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon}>✉️</span>
                <a href={`mailto:${siteConfig.email}`} className={styles.infoLink}>
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a href={whatsappUrl} target="_blank" rel="noopener" className={styles.whatsappCta}>
            <svg viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.637l4.703-1.248A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.382-1.572l-.376-.227-2.793.741.756-2.76-.249-.395A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            WhatsApp — {siteConfig.phoneNumber}
          </a>
        </aside>
      </div>

      {/* Map */}
      <section className={styles.mapSection}>
        <h2 className={styles.mapTitle}>{t("mapTitle")}</h2>
        <div className={styles.mapEmbed}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.1234567!2d3.0685!3d41.8175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bb13e5c5555555%3A0x1234567890abcdef!2s12%20Carrer%20Pineda%20del%20Mar%2C%2017250%20Castell-Platja%20d'Aro%2C%20Girona!5e0!3m2!1ses!2ses!4v1711234567890"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="TimeHome Realty Office"
          />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
