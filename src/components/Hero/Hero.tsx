"use client";

import { useTranslations } from "next-intl";
import styles from "./Hero.module.css";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.tagline}>{t("tagline")}</p>
        <h1 className={styles.title}>
          {t("title")}{" "}
          <em className={styles.accent}>{t("titleAccent")}</em>
        </h1>
        <p className={styles.subtitle}>{t("subtitle")}</p>

        {/* Search Bar */}
        <div className={styles.searchBar}>
          <div className={styles.searchField}>
            <label className={styles.searchLabel}>{t("searchWant")}</label>
            <select className={styles.searchSelect}>
              <option>{t("searchBuy")}</option>
              <option>{t("searchRent")}</option>
              <option>{t("searchInvest")}</option>
            </select>
          </div>

          <div className={styles.divider} />

          <div className={styles.searchField}>
            <label className={styles.searchLabel}>{t("searchType")}</label>
            <select className={styles.searchSelect}>
              <option>{t("searchTypeAll")}</option>
              <option>{t("searchTypeVilla")}</option>
              <option>{t("searchTypeApartment")}</option>
              <option>{t("searchTypeTownhouse")}</option>
              <option>{t("searchTypeCommercial")}</option>
              <option>{t("searchTypeLand")}</option>
            </select>
          </div>

          <div className={styles.divider} />

          <div className={styles.searchField}>
            <label className={styles.searchLabel}>{t("searchArea")}</label>
            <select className={styles.searchSelect}>
              <option>{t("searchAreaAll")}</option>
              <option>Platja d&apos;Aro</option>
              <option>Begur</option>
              <option>Santa Cristina d&apos;Aro</option>
              <option>Sant Antoni de Calonge</option>
              <option>Palamós</option>
              <option>Tossa de Mar</option>
              <option>Barcelona</option>
            </select>
          </div>

          <div className={styles.divider} />

          <div className={styles.searchField}>
            <label className={styles.searchLabel}>{t("searchPrice")}</label>
            <select className={styles.searchSelect}>
              <option>{t("searchPriceAll")}</option>
              <option>€300.000</option>
              <option>€500.000</option>
              <option>€750.000</option>
              <option>€1.000.000</option>
              <option>€2.000.000</option>
              <option>€5.000.000+</option>
            </select>
          </div>

          <button className={styles.searchButton}>{t("searchButton")}</button>
        </div>

        {/* Stats bar */}
        <div className={styles.statsRow}>
          <div className={styles.stat}>
            <span className={styles.statValue}>100%</span>
            <span className={styles.statLabel}>{t("statReliability")}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>7+</span>
            <span className={styles.statLabel}>{t("statYears")}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>97%</span>
            <span className={styles.statLabel}>{t("statSatisfaction")}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>95%</span>
            <span className={styles.statLabel}>{t("statSuccess")}</span>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>{t("scrollMore")}</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
