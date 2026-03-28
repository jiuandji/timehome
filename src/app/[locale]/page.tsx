import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import PropertyCard from "@/components/PropertyCard/PropertyCard";
import Testimonials from "@/components/Testimonials/Testimonials";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import styles from "./page.module.css";

/* ====================================
   REAL DATA from timehomerealty.es
   ==================================== */
const featuredProperties = [
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    title: "Exclusiva propiedad en Mas Nou",
    location: "Platja d'Aro, Costa Brava",
    price: "€996.000",
    beds: 3,
    baths: 2,
    area: 295,
    tag: "EXCLUSIVA",
  },
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    title: "Villa de Lujo — Zona Golf Costa Brava",
    location: "Santa Cristina d'Aro",
    price: "€1.450.000",
    beds: 6,
    baths: 4,
    area: 480,
    tag: "LUJO",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    title: "Local comercial en Platja d'Aro",
    location: "Platja d'Aro, Costa Brava",
    price: "€299.000",
    beds: 0,
    baths: 1,
    area: 126,
    tag: "COMERCIAL",
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    title: "Apartamento con vistas al mar",
    location: "Palamós, Costa Brava",
    price: "€385.000",
    beds: 2,
    baths: 1,
    area: 95,
    tag: "NUEVO",
  },
  {
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    title: "Chalet adosado con jardín",
    location: "Sant Antoni de Calonge",
    price: "€520.000",
    beds: 4,
    baths: 3,
    area: 210,
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    title: "Ático reformado en primera línea",
    location: "Begur, Costa Brava",
    price: "€875.000",
    beds: 3,
    baths: 2,
    area: 155,
    tag: "EXCLUSIVA",
  },
];

const areas = [
  { name: "Platja d'Aro", image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80", count: 28 },
  { name: "Begur", image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=600&q=80", count: 12 },
  { name: "Santa Cristina d'Aro", image: "https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?w=600&q=80", count: 8 },
  { name: "Palamós", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80", count: 11 },
  { name: "Sant Antoni de Calonge", image: "https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?w=600&q=80", count: 9 },
  { name: "Tossa de Mar", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&q=80", count: 8 },
];

export default function Home() {
  const tProps = useTranslations("properties");
  const tAreas = useTranslations("areas");
  const tAbout = useTranslations("about");

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
            {featuredProperties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>

          <div className={styles.viewAll}>
            <a href="#" className={styles.viewAllBtn}>
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
            {areas.map((area, i) => (
              <a key={i} href="#" className={styles.areaCard}>
                <img src={area.image} alt={area.name} className={styles.areaImage} loading="lazy" />
                <div className={styles.areaOverlay} />
                <div className={styles.areaContent}>
                  <h3 className={styles.areaName}>{area.name}</h3>
                  <span className={styles.areaCount}>
                    {tAreas("propertiesCount", { count: area.count })}
                  </span>
                </div>
              </a>
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
              <div className={styles.teamCard}>
                <div className={styles.teamAvatar}>O</div>
                <h4 className={styles.teamName}>Oksana</h4>
                <p className={styles.teamRole}>{tAbout("teamRole")}</p>
              </div>
              <div className={styles.teamCard}>
                <div className={styles.teamAvatar}>N</div>
                <h4 className={styles.teamName}>Natali</h4>
                <p className={styles.teamRole}>{tAbout("teamRole")}</p>
              </div>
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
