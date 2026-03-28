import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../../styles/variables.css";
import "../../styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const SITE_URL = "https://timehomerealty.com";

const seoTitles: Record<string, string> = {
  es: "TIME HOME REALTY — Inmobiliaria Premium en la Costa Brava",
  en: "TIME HOME REALTY — Premium Real Estate on the Costa Brava",
  ru: "TIME HOME REALTY — Элитная недвижимость на Коста Браве",
  pt: "TIME HOME REALTY — Imobiliária Premium na Costa Brava",
  zh: "TIME HOME REALTY — 布拉瓦海岸高端房产",
};

const seoDescriptions: Record<string, string> = {
  es: "Agencia inmobiliaria especializada en la compraventa de bienes raíces en la Costa Brava. Villas, apartamentos y propiedades exclusivas. Servicio en 5 idiomas.",
  en: "Real estate agency specializing in buying and selling properties on the Costa Brava. Villas, apartments and exclusive properties. Service in 5 languages.",
  ru: "Агентство недвижимости, специализирующееся на купле-продаже объектов на Коста Браве. Виллы, апартаменты и эксклюзивная недвижимость. Обслуживание на 5 языках.",
  pt: "Agência imobiliária especializada na compra e venda de imóveis na Costa Brava. Villas, apartamentos e propriedades exclusivas. Serviço em 5 idiomas.",
  zh: "专注于布拉瓦海岸房产买卖的房地产机构。别墅、公寓及独家房产。提供5种语言服务。",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const title = seoTitles[locale] || seoTitles.es;
  const description = seoDescriptions[locale] || seoDescriptions.es;

  // Generate hreflang alternates
  const alternateLanguages: Record<string, string> = {};
  for (const loc of routing.locales) {
    alternateLanguages[loc] = `${SITE_URL}/${loc}`;
  }

  return {
    title: {
      default: title,
      template: `%s | TIME HOME REALTY`,
    },
    description,
    keywords: [
      "inmobiliaria Costa Brava",
      "comprar casa Costa Brava",
      "villa lujo Platja d'Aro",
      "Costa Brava real estate",
      "luxury villa Spain",
      "купить дом Коста Брава",
      "недвижимость Испания",
      "imobiliária Costa Brava",
      "布拉瓦海岸房产",
    ],
    authors: [{ name: "Time Home Realty", url: SITE_URL }],
    creator: "Time Home Realty",
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: alternateLanguages,
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_ES" : locale === "en" ? "en_GB" : locale === "ru" ? "ru_RU" : locale === "pt" ? "pt_PT" : "zh_CN",
      url: `${SITE_URL}/${locale}`,
      siteName: "TIME HOME REALTY",
      title,
      description,
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "TIME HOME REALTY — Costa Brava",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      // google: "YOUR_VERIFICATION_CODE", // TODO добавить после верификации
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  // LocalBusiness Schema.org
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "TIME HOME REALTY",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-image.jpg`,
    description: seoDescriptions[locale] || seoDescriptions.es,
    telephone: "+34 603 37 96 91",
    email: "infotimehomerealty@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 Carrer Pineda del Mar, local 27B",
      addressLocality: "Castell-Platja d'Aro",
      addressRegion: "Girona",
      postalCode: "17250",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.8175,
      longitude: 3.0669,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    areaServed: {
      "@type": "Place",
      name: "Costa Brava, Girona, Spain",
    },
    knowsLanguage: ["es", "en", "ru", "pt", "zh"],
    priceRange: "€€€",
    sameAs: [
      "https://www.instagram.com/timehomerealty",
      "https://www.facebook.com/timehomerealty",
    ],
  };

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
