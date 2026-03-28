import type { Metadata } from "next";

const SITE_URL = "https://timehomerealty.com";

const titles: Record<string, string> = {
  es: "Propiedades en la Costa Brava",
  en: "Properties on the Costa Brava",
  ru: "Недвижимость на Коста Браве",
  pt: "Propriedades na Costa Brava",
  zh: "布拉瓦海岸房产",
};

const descriptions: Record<string, string> = {
  es: "Explora nuestra selección de villas, apartamentos y propiedades exclusivas en la Costa Brava. Filtra por tipo, ubicación y precio.",
  en: "Explore our selection of villas, apartments and exclusive properties on the Costa Brava. Filter by type, location and price.",
  ru: "Изучите наш выбор вилл, апартаментов и эксклюзивной недвижимости на Коста Браве. Фильтруйте по типу, расположению и цене.",
  pt: "Explore a nossa seleção de villas, apartamentos e propriedades exclusivas na Costa Brava. Filtre por tipo, localização e preço.",
  zh: "浏览我们在布拉瓦海岸的别墅、公寓和独家房产精选。按类型、位置和价格筛选。",
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
      canonical: `${SITE_URL}/${locale}/properties`,
      languages: {
        es: `${SITE_URL}/es/properties`,
        en: `${SITE_URL}/en/properties`,
        ru: `${SITE_URL}/ru/properties`,
        pt: `${SITE_URL}/pt/properties`,
        zh: `${SITE_URL}/zh/properties`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/properties`,
      siteName: "TIME HOME REALTY",
      type: "website",
    },
  };
}

export default function PropertiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
