import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import PropertyCard from "@/components/PropertyCard/PropertyCard";
import Testimonials from "@/components/Testimonials/Testimonials";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import { getFeaturedProperties } from "@/data/properties";
import { areas } from "@/data/areas";
import { teamMembers } from "@/data/site-config";
import type { Locale } from "@/types/property";
import styles from "./page.module.css";

export default function Home() {
  const tProps = useTranslations("properties");
  const tAreas = useTranslations("areas");
  const tAbout = useTranslations("about");
  const locale = useLocale() as Locale;

  const featuredProperties = getFeaturedProperties();

  return (
    <>
      <Navbar />
      <Hero />

      {/* Featured Properties */}
      <section className={styles.propertiesSection} id="properties">
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <p className={styles.tagline}>{tProps("tagline")}</p>
            <h2 className={styles.sectionTitle}>
              {tProps("title")} <em className={styles.accent}>{tProps("titleAccent")}</em>
            </h2>
            <p className={styles.sectionSubtitle}>{tProps("subtitle")}</p>
          </div>

          <div className={styles.propertyGrid}>
            {featuredProperties.map((property) => (
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
            ))}
          </div>

          <div className={styles.viewAll}>
            <a href={`/${locale}/properties`} className={styles.viewAllBtn}>
              {tProps("viewAll")} →
            </a>
          </div>
        </div>
      </section>

      {/* Areas / Zonas */}
      <section className={styles.areasSection} id="areas">
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <p className={styles.tagline}>{tAreas("tagline")}</p>
            <h2 className={styles.sectionTitle}>
              {tAreas("title")} <em className={styles.accent}>{tAreas("titleAccent")}</em>
            </h2>
            <p className={styles.sectionSubtitle}>{tAreas("subtitle")}</p>
          </div>

          <div className={styles.areasGrid}>
            {areas.map((area) => (
              <Link key={area.slug} href={`/areas/${area.slug}`} className={styles.areaCard}>
                <Image src={area.image} alt={area.name} className={styles.areaImage} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px" />
                <div className={styles.areaOverlay} />
                <div className={styles.areaContent}>
                  <h3 className={styles.areaName}>{area.name}</h3>
                  <span className={styles.areaCount}>
                    {tAreas("propertiesCount", { count: area.count })}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us — Nuestras Ventajas */}
      <section className={styles.whySection} id="about">
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <p className={styles.tagline}>{tAbout("tagline")}</p>
            <h2 className={styles.sectionTitle}>
              {tAbout("title")}{" "}
              <em className={styles.accent}>{tAbout("titleAccent")}</em>
            </h2>
          </div>

          <p className={styles.aboutText}>{tAbout("description")}</p>

          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>🌍</div>
              <h3 className={styles.whyTitle}>{tAbout("langTitle")}</h3>
              <p className={styles.whyText}>{tAbout("langText")}</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>🤝</div>
              <h3 className={styles.whyTitle}>{tAbout("certTitle")}</h3>
              <p className={styles.whyText}>{tAbout("certText")}</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>⚖️</div>
              <h3 className={styles.whyTitle}>{tAbout("legalTitle")}</h3>
              <p className={styles.whyText}>{tAbout("legalText")}</p>
            </div>
          </div>

          {/* Team */}
          <div className={styles.teamSection}>
            <p className={styles.teamTitle}>{tAbout("teamTitle")}</p>
            <p className={styles.teamSubtitle}>{tAbout("teamSubtitle")}</p>
            <div className={styles.teamGrid}>
              {teamMembers.map((member) => (
                <div key={member.name} className={styles.teamCard}>
                  <div className={styles.teamAvatar}>{member.initial}</div>
                  <h4 className={styles.teamName}>{member.name}</h4>
                  <p className={styles.teamRole}>{member.role[locale]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
