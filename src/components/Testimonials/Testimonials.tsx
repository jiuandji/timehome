"use client";

import { useTranslations } from "next-intl";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Klaus & Helena Weber",
    country: "🇩🇪",
    countryName: "Alemania",
    text: "TIME HOME nos encontró la villa perfecta en Begur. Su equipo multilingüe hizo que todo el proceso fuera impecable — desde los tours virtuales hasta la firma del contrato. Nos sentimos apoyados en cada paso.",
    rating: 5,
    property: "Villa en Begur",
  },
  {
    name: "Андрей и Мария Петровы",
    country: "🇷🇺",
    countryName: "Rusia",
    text: "Искали квартиру с видом на море уже полгода. TIME HOME за неделю подобрали идеальный вариант в Плачя д'Аро. Профессионализм и забота — на высшем уровне. Оксана помогла со всеми документами.",
    rating: 5,
    property: "Apartamento en Platja d'Aro",
  },
  {
    name: "James & Sarah Mitchell",
    country: "🇬🇧",
    countryName: "Reino Unido",
    text: "After looking at dozens of agencies, TIME HOME stood out for their personal approach. Natali helped us navigate the Spanish legal system and made buying our holiday home stress-free.",
    rating: 5,
    property: "Adosado en Palamós",
  },
];

export default function Testimonials() {
  const t = useTranslations("testimonials");

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
          {testimonials.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.stars}>
                {Array.from({ length: item.rating }).map((_, j) => (
                  <span key={j} className={styles.star}>★</span>
                ))}
              </div>
              <blockquote className={styles.quote}>
                &ldquo;{item.text}&rdquo;
              </blockquote>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.meta}>
                    {item.country} {item.countryName} · {item.property}
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
