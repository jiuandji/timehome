"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import styles from "./PropertyCard.module.css";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: number;
  tag?: string;
  slug?: string;
}

export default function PropertyCard({
  image,
  title,
  location,
  price,
  beds,
  baths,
  area,
  tag,
  slug,
}: PropertyCardProps) {
  const t = useTranslations("properties");
  const locale = useLocale();

  const detailHref = slug ? `/property/${slug}` : "#";

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} className={styles.image} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px" />
        {tag && <span className={styles.badge}>{tag}</span>}
      </div>

      <div className={styles.body}>
        <div className={styles.locationRow}>
          <svg className={styles.pinIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            <circle cx="12" cy="9" r="2.5"/>
          </svg>
          <span className={styles.location}>{location}</span>
        </div>

        <h3 className={styles.title}>{title}</h3>

        <div className={styles.specs}>
          {beds > 0 && (
            <>
              <div className={styles.spec}>
                <span className={styles.specValue}>{beds}</span>
                <span className={styles.specLabel}>{t("beds")}</span>
              </div>
              <div className={styles.specDivider} />
            </>
          )}
          <div className={styles.spec}>
            <span className={styles.specValue}>{baths}</span>
            <span className={styles.specLabel}>{t("baths")}</span>
          </div>
          <div className={styles.specDivider} />
          <div className={styles.spec}>
            <span className={styles.specValue}>{area}</span>
            <span className={styles.specLabel}>m²</span>
          </div>
        </div>

        <div className={styles.footer}>
          <span className={styles.price}>{price}</span>
          <Link href={detailHref as any} className={styles.viewBtn}>{t("details")} →</Link>
        </div>
      </div>
    </article>
  );
}

