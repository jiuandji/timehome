import { useTranslations, useLocale } from "next-intl";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import PropertyCard from "@/components/PropertyCard/PropertyCard";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import { getPropertyBySlug, properties } from "@/data/properties";
import { siteConfig, teamMembers } from "@/data/site-config";
import type { Locale } from "@/types/property";
import styles from "./page.module.css";

const SITE_URL = "https://timehomerealty.com";

// Feature key → translation key mapping
const featureKeyMap: Record<string, string> = {
  seaView: "featureSeaView",
  mountainView: "featureMountainView",
  pool: "featurePool",
  garden: "featureGarden",
  terrace: "featureTerrace",
  garage: "featureGarage",
  smartHome: "featureSmartHome",
  airConditioning: "featureAirConditioning",
  heating: "featureHeating",
  security: "featureSecurity",
};

// Type key → translation key mapping
const typeKeyMap: Record<string, string> = {
  villa: "typeVilla",
  apartment: "typeApartment",
  townhouse: "typeTownhouse",
  commercial: "typeCommercial",
  land: "typeLand",
};

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

// Dynamic SEO metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return { title: "Property Not Found" };
  }

  const loc = (locale || "es") as Locale;
  const title = property.title[loc];
  const description = property.shortDescription[loc];
  const image = property.images[0];
  const url = `${SITE_URL}/${locale}/property/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: `${SITE_URL}/es/property/${slug}`,
        en: `${SITE_URL}/en/property/${slug}`,
        ru: `${SITE_URL}/ru/property/${slug}`,
        pt: `${SITE_URL}/pt/property/${slug}`,
        zh: `${SITE_URL}/zh/property/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      locale: loc === "es" ? "es_ES" : loc === "en" ? "en_GB" : loc === "ru" ? "ru_RU" : loc === "pt" ? "pt_PT" : "zh_CN",
      url,
      title: `${title} | ${property.priceFormatted}`,
      description,
      siteName: "TIME HOME REALTY",
      images: [{ url: image, width: 800, height: 570, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${property.priceFormatted}`,
      description,
      images: [image],
    },
  };
}

export default async function PropertyDetailPage({ params }: Props) {
  const { slug, locale } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const loc = (locale || "es") as Locale;

  // Schema.org RealEstateListing
  const propertySchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.title[loc],
    description: property.shortDescription[loc],
    url: `${SITE_URL}/${locale}/property/${slug}`,
    image: property.images,
    datePosted: "2025-01-01",
    offers: {
      "@type": "Offer",
      price: property.price,
      priceCurrency: "EUR",
      availability: property.status === "active"
        ? "https://schema.org/InStock"
        : "https://schema.org/SoldOut",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: property.location.town,
      addressRegion: property.location.region,
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: property.location.coordinates.lat,
      longitude: property.location.coordinates.lng,
    },
    numberOfBedrooms: property.bedrooms || undefined,
    numberOfBathroomsTotal: property.bathrooms || undefined,
    floorSize: property.area > 0 ? {
      "@type": "QuantitativeValue",
      value: property.area,
      unitCode: "MTK",
    } : undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(propertySchema) }}
      />
      <PropertyDetailContent slug={slug} />
    </>
  );
}


function PropertyDetailContent({ slug }: { slug: string }) {
  const t = useTranslations("properties");
  const locale = useLocale() as Locale;
  const property = getPropertyBySlug(slug)!;

  // Get similar properties (same type, different id)
  const similar = properties
    .filter((p) => p.id !== property.id && p.status === "active")
    .slice(0, 3);

  const agent = teamMembers[0];

  const whatsappMessage = encodeURIComponent(
    `${t("contactTitle")} — ${property.title[locale]} (${property.reference})`
  );
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className={styles.detailPage}>
      <Navbar />

      {/* Gallery Hero */}
      <section className={styles.gallerySection}>
        <Image
          src={property.images[0]}
          alt={property.title[locale]}
          className={styles.mainImage}
          fill
          sizes="100vw"
          priority
        />
        <div className={styles.galleryOverlay} />
        {property.tag && (
          <span className={styles.galleryBadge}>{property.tag}</span>
        )}
        {property.images.length > 1 && (
          <div className={styles.galleryThumbs}>
            {property.images.slice(0, 4).map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={`${property.title[locale]} ${i + 1}`}
                className={`${styles.thumb} ${i === 0 ? styles.thumbActive : ""}`}
                width={120}
                height={85}
              />
            ))}
          </div>
        )}
      </section>

      {/* Content */}
      <div className={styles.contentWrapper}>
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb}>
          <Link href="/">{t("backToHome")}</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <Link href="/properties">{t("catalogTitleAccent")}</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span>{property.title[locale]}</span>
        </nav>

        {/* Main column */}
        <div className={styles.mainColumn}>
          {/* Title block */}
          <div className={styles.titleBlock}>
            <div className={styles.propertyLocation}>
              <svg className={styles.locationIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              {property.location.town}, {property.location.region}
            </div>
            <h1 className={styles.propertyTitle}>{property.title[locale]}</h1>
            <div className={styles.propertyPrice}>{property.priceFormatted}</div>
            <div className={styles.propertyRef}>
              {t("reference")}: {property.reference}
            </div>
          </div>

          {/* Specs Grid */}
          <div className={styles.specsGrid}>
            {property.bedrooms > 0 && (
              <div className={styles.specItem}>
                <span className={styles.specIcon}>🛏️</span>
                <span className={styles.specValue}>{property.bedrooms}</span>
                <span className={styles.specLabel}>{t("specBedrooms")}</span>
              </div>
            )}
            <div className={styles.specItem}>
              <span className={styles.specIcon}>🚿</span>
              <span className={styles.specValue}>{property.bathrooms}</span>
              <span className={styles.specLabel}>{t("specBathrooms")}</span>
            </div>
            {property.area > 0 && (
              <div className={styles.specItem}>
                <span className={styles.specIcon}>📐</span>
                <span className={styles.specValue}>{property.area} m²</span>
                <span className={styles.specLabel}>{t("specArea")}</span>
              </div>
            )}
            {property.plotArea && (
              <div className={styles.specItem}>
                <span className={styles.specIcon}>🌿</span>
                <span className={styles.specValue}>{property.plotArea} m²</span>
                <span className={styles.specLabel}>{t("specPlot")}</span>
              </div>
            )}
            {property.yearBuilt && (
              <div className={styles.specItem}>
                <span className={styles.specIcon}>📅</span>
                <span className={styles.specValue}>{property.yearBuilt}</span>
                <span className={styles.specLabel}>{t("specYear")}</span>
              </div>
            )}
            <div className={styles.specItem}>
              <span className={styles.specIcon}>🏠</span>
              <span className={styles.specValue}>
                {t(typeKeyMap[property.type] || "typeVilla")}
              </span>
              <span className={styles.specLabel}>{t("specType")}</span>
            </div>
          </div>

          {/* Description */}
          <div className={styles.descriptionBlock}>
            <p className={styles.sectionLabel}>{t("descriptionTitle")}</p>
            <h2 className={styles.sectionHeading}>{t("descriptionHeading")}</h2>
            <p className={styles.descriptionText}>
              {property.shortDescription[locale]}
            </p>
          </div>

          {/* Features */}
          {property.features.length > 0 && (
            <div className={styles.featuresBlock}>
              <p className={styles.sectionLabel}>{t("featuresTitle")}</p>
              <h2 className={styles.sectionHeading}>{t("featuresHeading")}</h2>
              <ul className={styles.featuresList}>
                {property.features.map((feature) => (
                  <li key={feature} className={styles.featureItem}>
                    <span className={styles.featureCheck}>✓</span>
                    {t(featureKeyMap[feature] || feature)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.contactCard}>
            <h3 className={styles.contactTitle}>{t("contactTitle")}</h3>
            <p className={styles.contactSubtitle}>{t("contactSubtitle")}</p>

            <a href={whatsappUrl} target="_blank" rel="noopener" className={styles.contactWhatsApp}>
              <svg viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.637l4.703-1.248A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.382-1.572l-.376-.227-2.793.741.756-2.76-.249-.395A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              {t("contactWhatsApp")}
            </a>

            <a href={`tel:${siteConfig.phoneNumber.replace(/\s/g, "")}`} className={styles.contactPhone}>
              📞 {t("contactCall")} — {siteConfig.phoneNumber}
            </a>

            <div className={styles.contactDivider}>{t("contactOr")}</div>

            <a href={`mailto:${siteConfig.email}?subject=${property.reference} — ${property.title[locale]}`} className={styles.contactEmail}>
              ✉️ {t("contactEmailBtn")}
            </a>

            {/* Agent card */}
            <div className={styles.agentCard}>
              <div className={styles.agentAvatar}>{agent.initial}</div>
              <div className={styles.agentInfo}>
                <span className={styles.agentName}>{agent.name}</span>
                <span className={styles.agentRole}>{agent.role[locale]}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Similar Properties */}
      {similar.length > 0 && (
        <section className={styles.similarSection}>
          <h2 className={styles.similarTitle}>
            {t("similarTitle")}{" "}
            <em className={styles.similarTitleAccent}>{t("similarTitleAccent")}</em>
          </h2>
          <div className={styles.similarGrid}>
            {similar.map((p) => (
              <PropertyCard
                key={p.id}
                image={p.thumbnail}
                title={p.title[locale]}
                location={`${p.location.town}, ${p.location.region}`}
                price={p.priceFormatted}
                beds={p.bedrooms}
                baths={p.bathrooms}
                area={p.area}
                tag={p.tag}
                slug={p.slug}
              />
            ))}
          </div>
        </section>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
