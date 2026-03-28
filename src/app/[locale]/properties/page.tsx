"use client";

import { useTranslations, useLocale } from "next-intl";
import { useState, useMemo } from "react";
import { Link } from "@/i18n/navigation";
import Navbar from "@/components/Navbar/Navbar";
import PropertyCard from "@/components/PropertyCard/PropertyCard";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import { properties, getUniqueLocations } from "@/data/properties";
import type { Locale } from "@/types/property";
import styles from "./page.module.css";

type SortOption = "newest" | "price-asc" | "price-desc";
type PropertyType = "" | "villa" | "apartment" | "townhouse" | "commercial" | "land";

export default function PropertiesPage() {
  const t = useTranslations("properties");
  const locale = useLocale() as Locale;
  const locations = getUniqueLocations();

  // Filter state
  const [typeFilter, setTypeFilter] = useState<PropertyType>("");
  const [locationFilter, setLocationFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [bedroomFilter, setBedroomFilter] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("newest");

  const filteredProperties = useMemo(() => {
    let result = properties.filter((p) => p.status === "active");

    if (typeFilter) {
      result = result.filter((p) => p.type === typeFilter);
    }
    if (locationFilter) {
      result = result.filter((p) => p.location.town === locationFilter);
    }
    if (priceFilter) {
      const maxPrice = parseInt(priceFilter);
      result = result.filter((p) => p.price <= maxPrice);
    }
    if (bedroomFilter) {
      const minBeds = parseInt(bedroomFilter);
      result = result.filter((p) => p.bedrooms >= minBeds);
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
      default:
        // Keep original order (newest first assumption)
        break;
    }

    return result;
  }, [typeFilter, locationFilter, priceFilter, bedroomFilter, sortBy]);

  const resetFilters = () => {
    setTypeFilter("");
    setLocationFilter("");
    setPriceFilter("");
    setBedroomFilter("");
    setSortBy("newest");
  };

  const hasActiveFilters = typeFilter || locationFilter || priceFilter || bedroomFilter;

  return (
    <div className={styles.catalogPage}>
      <Navbar />

      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb}>
            <Link href="/">{t("backToHome")}</Link>
            <span className={styles.breadcrumbSep}>/</span>
            <span style={{ color: "#fff" }}>{t("catalogTitleAccent")}</span>
          </nav>
          <h1 className={styles.pageTitle}>
            {t("catalogTitle")}{" "}
            <em className={styles.accent}>{t("catalogTitleAccent")}</em>
          </h1>
          <p className={styles.pageSubtitle}>{t("catalogSubtitle")}</p>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <div className={styles.filtersWrapper}>
        <div className={styles.filtersContainer}>
          {/* Type filter */}
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>{t("filterAll")}</label>
            <select
              className={styles.filterSelect}
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value as PropertyType)}
            >
              <option value="">{t("filterAll")}</option>
              <option value="villa">{t("filterVilla")}</option>
              <option value="apartment">{t("filterApartment")}</option>
              <option value="townhouse">{t("filterTownhouse")}</option>
              <option value="commercial">{t("filterCommercial")}</option>
              <option value="land">{t("filterLand")}</option>
            </select>
          </div>

          {/* Location filter */}
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>{t("filterLocation")}</label>
            <select
              className={styles.filterSelect}
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              <option value="">{t("filterAllLocations")}</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          {/* Price filter */}
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>{t("filterPrice")}</label>
            <select
              className={styles.filterSelect}
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            >
              <option value="">{t("filterAllPrices")}</option>
              <option value="300000">€300.000</option>
              <option value="500000">€500.000</option>
              <option value="750000">€750.000</option>
              <option value="1000000">€1.000.000</option>
              <option value="2000000">€2.000.000</option>
              <option value="5000000">€5.000.000</option>
            </select>
          </div>

          {/* Bedrooms filter */}
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>{t("filterBedrooms")}</label>
            <select
              className={styles.filterSelect}
              value={bedroomFilter}
              onChange={(e) => setBedroomFilter(e.target.value)}
            >
              <option value="">{t("filterAllBedrooms")}</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </div>

          <div className={styles.filterSpacer} />

          {/* Sort */}
          <div className={styles.sortGroup}>
            <label className={styles.filterLabel}>{t("sortBy")}</label>
            <select
              className={styles.filterSelect}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
            >
              <option value="newest">{t("sortNewest")}</option>
              <option value="price-asc">{t("sortPriceAsc")}</option>
              <option value="price-desc">{t("sortPriceDesc")}</option>
            </select>
          </div>

          {hasActiveFilters && (
            <button className={styles.resetBtn} onClick={resetFilters}>
              {t("resetFilters")}
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      <section className={styles.resultsSection}>
        <div className={styles.resultsHeader}>
          <span className={styles.resultsCount}>
            {t("resultsCount", { count: filteredProperties.length })}
          </span>
        </div>

        <div className={styles.propertyGrid}>
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                image={property.thumbnail}
                title={property.title[locale]}
                location={`${property.location.town}, ${property.location.region}`}
                price={property.priceFormatted}
                beds={property.bedrooms}
                baths={property.bathrooms}
                area={property.area}
                tag={property.tag}
                slug={property.slug}
              />
            ))
          ) : (
            <div className={styles.noResults}>
              <div className={styles.noResultsIcon}>🏠</div>
              <h3 className={styles.noResultsTitle}>{t("noResults")}</h3>
              <p className={styles.noResultsHint}>{t("noResultsHint")}</p>
              <button className={styles.noResultsResetBtn} onClick={resetFilters}>
                {t("resetFilters")}
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
