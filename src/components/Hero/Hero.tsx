import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* Dark overlay for text readability */}
      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.tagline}>La mejor opción inmobiliaria en toda la Costa Brava</p>
        <h1 className={styles.title}>
          Inmobiliaria{" "}
          <em className={styles.accent}>TIME HOME REALTY</em>
        </h1>
        <p className={styles.subtitle}>
          Desde 2017 · 76 propiedades · 5 idiomas · Asesoramiento jurídico completo
        </p>

        {/* Search Bar */}
        <div className={styles.searchBar}>
          <div className={styles.searchField}>
            <label className={styles.searchLabel}>Quiero</label>
            <select className={styles.searchSelect}>
              <option>Comprar</option>
              <option>Alquilar</option>
              <option>Invertir</option>
            </select>
          </div>

          <div className={styles.divider} />

          <div className={styles.searchField}>
            <label className={styles.searchLabel}>Tipo</label>
            <select className={styles.searchSelect}>
              <option>Todos los tipos</option>
              <option>Villa / Chalet</option>
              <option>Apartamento</option>
              <option>Adosado</option>
              <option>Local comercial</option>
              <option>Terreno</option>
            </select>
          </div>

          <div className={styles.divider} />

          <div className={styles.searchField}>
            <label className={styles.searchLabel}>Zona</label>
            <select className={styles.searchSelect}>
              <option>Toda la Costa Brava</option>
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
            <label className={styles.searchLabel}>Precio máximo</label>
            <select className={styles.searchSelect}>
              <option>Sin límite</option>
              <option>€300.000</option>
              <option>€500.000</option>
              <option>€750.000</option>
              <option>€1.000.000</option>
              <option>€2.000.000</option>
              <option>€5.000.000+</option>
            </select>
          </div>

          <button className={styles.searchButton}>
            Buscar
          </button>
        </div>

        {/* Stats bar */}
        <div className={styles.statsRow}>
          <div className={styles.stat}>
            <span className={styles.statValue}>100%</span>
            <span className={styles.statLabel}>Fiabilidad</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>7+</span>
            <span className={styles.statLabel}>Años en el sector</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>97%</span>
            <span className={styles.statLabel}>Satisfacción</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>95%</span>
            <span className={styles.statLabel}>Éxito en cierres</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Descubre más</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
