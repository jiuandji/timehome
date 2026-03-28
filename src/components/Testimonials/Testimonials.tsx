import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Klaus & Helena Weber",
    country: "🇩🇪 Alemania",
    text: "TIME HOME nos encontró la villa perfecta en Begur. Su equipo multilingüe hizo que todo el proceso fuera impecable — desde los tours virtuales hasta la firma del contrato. Nos sentimos apoyados en cada paso.",
    rating: 5,
    property: "Villa en Begur",
  },
  {
    name: "Андрей и Мария Петровы",
    country: "🇷🇺 Rusia",
    text: "Искали квартиру с видом на море уже полгода. TIME HOME за неделю подобрали идеальный вариант в Плачя д'Аро. Профессионализм и забота — на высшем уровне. Оксана помогла со всеми документами.",
    rating: 5,
    property: "Apartamento en Platja d'Aro",
  },
  {
    name: "James & Sarah Mitchell",
    country: "🇬🇧 Reino Unido",
    text: "After looking at dozens of agencies, TIME HOME stood out for their personal approach. Natali helped us navigate the Spanish legal system and made buying our holiday home stress-free.",
    rating: 5,
    property: "Adosado en Palamós",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.tagline}>Lo que dicen nuestros clientes</p>
          <h2 className={styles.title}>
            Historias de familias que encontraron su{" "}
            <em className={styles.accent}>hogar soñado</em>
          </h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.stars}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className={styles.star}>★</span>
                ))}
              </div>
              <blockquote className={styles.quote}>
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.meta}>
                    {t.country} · {t.property}
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
