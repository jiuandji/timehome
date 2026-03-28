import type { Metadata } from "next";

const SITE_URL = "https://timehomerealty.com";

const titles: Record<string, string> = {
  es: "Contacto — TIME HOME REALTY",
  en: "Contact — TIME HOME REALTY",
  ru: "Контакты — TIME HOME REALTY",
  pt: "Contacto — TIME HOME REALTY",
  zh: "联系我们 — TIME HOME REALTY",
};

const descriptions: Record<string, string> = {
  es: "Contáctenos para encontrar su propiedad ideal en la Costa Brava. Horarios, ubicación de la oficina, WhatsApp y formulario de contacto.",
  en: "Contact us to find your ideal property on the Costa Brava. Office hours, location, WhatsApp and contact form.",
  ru: "Свяжитесь с нами, чтобы найти идеальную недвижимость на Коста Браве. Часы работы, расположение офиса, WhatsApp и форма связи.",
  pt: "Contacte-nos para encontrar a sua propriedade ideal na Costa Brava. Horários, localização do escritório, WhatsApp e formulário de contacto.",
  zh: "联系我们，在布拉瓦海岸找到理想房产。营业时间、办公室位置、WhatsApp和联系表格。",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title = titles[locale] || titles.es;
  const description = descriptions[locale] || descriptions.es;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/contact`,
      languages: {
        es: `${SITE_URL}/es/contact`,
        en: `${SITE_URL}/en/contact`,
        ru: `${SITE_URL}/ru/contact`,
        pt: `${SITE_URL}/pt/contact`,
        zh: `${SITE_URL}/zh/contact`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/contact`,
      siteName: "TIME HOME REALTY",
      type: "website",
    },
  };
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
