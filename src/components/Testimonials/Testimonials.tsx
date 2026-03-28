"use client";

import { useTranslations, useLocale } from "next-intl";
import { testimonials } from "@/data/testimonials";
import type { Locale } from "@/types/property";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const locale = useLocale() as Locale;

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.tagline}>{t("tagline")}</p>
          <h2 className={styles.title}>
            {t("title")}{" "}
            <em className={styles.accent}>{t("titleAccent")}</em>
          </h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.stars}>
                {Array.from({ length: item.rating }).map((_, j) => (
                  <span key={j} className={styles.star}>★</span>
                ))}
              </div>
              <blockquote className={styles.quote}>
                &ldquo;{item.text[locale]}&rdquo;
              </blockquote>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.meta}>
                    {item.country} {item.countryName[locale]} · {item.property}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

