import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoTime}>TIME</span>
              <span className={styles.logoHome}>HOME</span>
              <span className={styles.logoRealty}>REALTY</span>
            </div>
            <p className={styles.description}>
              Agencia inmobiliaria premium en la Costa Brava. Ayudamos a familias internacionales a encontrar su hogar soñado desde 2017.
            </p>
            <div className={styles.langs}>
              🇪🇸 🇬🇧 🇷🇺 🇵🇹 🇨🇳 — Hablamos tu idioma
            </div>
            <div className={styles.socials}>
              <a href="https://www.facebook.com/time.home.realty.2023" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                Facebook
              </a>
              <a href="https://www.instagram.com/timehomerealty.pda" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Explorar</h4>
            <a href="#properties" className={styles.link}>Todas las propiedades</a>
            <a href="#" className={styles.link}>Villas y chalets</a>
            <a href="#" className={styles.link}>Apartamentos</a>
            <a href="#areas" className={styles.link}>Guía de zonas</a>
            <a href="#" className={styles.link}>Guía de compra</a>
          </div>

          {/* Company */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Empresa</h4>
            <a href="#about" className={styles.link}>Sobre nosotros</a>
            <a href="#testimonials" className={styles.link}>Opiniones</a>
            <a href="#" className={styles.link}>Blog y artículos</a>
            <a href="#" className={styles.link}>Términos y condiciones</a>
          </div>

          {/* Contact */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contacto</h4>
            <a href="tel:+34603379691" className={styles.link}>
              📞 +34 603 37 96 91
            </a>
            <a href="tel:+34621145911" className={styles.link}>
              📞 +34 621 145 911
            </a>
            <a href="https://wa.me/34603379691" className={styles.link} target="_blank" rel="noopener noreferrer">
              💬 WhatsApp
            </a>
            <a href="mailto:infotimehomerealty@gmail.com" className={styles.link}>
              ✉️ infotimehomerealty@gmail.com
            </a>
            <p className={styles.address}>
              📍 12 Carrer Pineda del Mar,<br />
              local 27B, Castell-Platja d&apos;Aro,<br />
              Girona, España
            </p>
          </div>
        </div>

        {/* Schedule */}
        <div className={styles.schedule}>
          <p className={styles.scheduleTitle}>🕐 Horario</p>
          <p className={styles.scheduleText}>Lunes a Sábado: 10:00–14:00 y 15:00–19:00</p>
          <p className={styles.scheduleText}>Domingos: con cita previa</p>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} TIME HOME REALTY. Todos los derechos reservados.
          </p>
          <div className={styles.legal}>
            <a href="#" className={styles.legalLink}>Política de Privacidad</a>
            <a href="#" className={styles.legalLink}>Política de Cookies</a>
            <a href="#" className={styles.legalLink}>Aviso Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
