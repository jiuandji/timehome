/**
 * TimeHome Realty — Properties Data
 * Real listings from timehomerealty.com
 * TODO: Migrate to Sanity CMS
 */

export interface PropertyData {
  id: string;
  slug: string;
  reference: string;
  status: "active" | "sold" | "reserved" | "draft";
  featured: boolean;
  exclusive: boolean;

  // Content
  title: {
    es: string;
    en: string;
    ru: string;
    pt: string;
    zh: string;
  };
  shortDescription: {
    es: string;
    en: string;
    ru: string;
    pt: string;
    zh: string;
  };

  // Specs
  type: "villa" | "apartment" | "townhouse" | "land" | "commercial";
  price: number;
  priceFormatted: string;
  priceOnRequest: boolean;
  bedrooms: number;
  bathrooms: number;
  area: number;
  plotArea?: number;
  yearBuilt?: number;

  // Location
  location: {
    town: string;
    region: string;
    coordinates: { lat: number; lng: number };
  };

  // Media (from WP)
  images: string[];
  thumbnail: string;

  // Features
  features: string[];

  // Tag for card display
  tag?: string;
}

export const properties: PropertyData[] = [
  {
    id: "prop-001",
    slug: "exclusiva-propiedad-mas-nou",
    reference: "TH-2025-001",
    status: "active",
    featured: true,
    exclusive: true,
    title: {
      es: "Exclusiva propiedad en Mas Nou",
      en: "Exclusive Property in Mas Nou",
      ru: "Эксклюзивная недвижимость в Мас Ноу",
      pt: "Propriedade Exclusiva em Mas Nou",
      zh: "Mas Nou独家物业",
    },
    shortDescription: {
      es: "Impresionante villa con vistas panorámicas al mar en la prestigiosa urbanización Mas Nou.",
      en: "Stunning villa with panoramic sea views in the prestigious Mas Nou urbanization.",
      ru: "Потрясающая вилла с панорамным видом на море в престижной урбанизации Мас Ноу.",
      pt: "Villa deslumbrante com vistas panorâmicas do mar na prestigiada urbanização Mas Nou.",
      zh: "位于著名的Mas Nou社区，拥有壮丽全景海景的别墅。",
    },
    type: "villa",
    price: 996000,
    priceFormatted: "€996.000",
    priceOnRequest: false,
    bedrooms: 3,
    bathrooms: 2,
    area: 295,
    plotArea: 800,
    location: {
      town: "Platja d'Aro",
      region: "Costa Brava",
      coordinates: { lat: 41.8175, lng: 3.0669 },
    },
    images: [
      "https://timehomerealty.com/wp-content/uploads/classified-listing/2025/11/60-400x285.jpg",
    ],
    thumbnail: "https://timehomerealty.com/wp-content/uploads/classified-listing/2025/11/60-400x285.jpg",
    features: ["seaView", "pool", "garden", "terrace", "garage"],
    tag: "EXCLUSIVA",
  },
  {
    id: "prop-002",
    slug: "villa-lujo-golf-costa-brava",
    reference: "TH-2025-002",
    status: "active",
    featured: true,
    exclusive: false,
    title: {
      es: "Villa de Lujo — Zona Golf Costa Brava",
      en: "Luxury Villa — Costa Brava Golf Area",
      ru: "Роскошная вилла — зона гольфа Коста Брава",
      pt: "Villa de Luxo — Zona de Golfe Costa Brava",
      zh: "豪华别墅 — 布拉瓦海岸高尔夫区",
    },
    shortDescription: {
      es: "Espectacular villa de lujo junto al Golf Costa Brava con acabados de alta gama y piscina infinity.",
      en: "Spectacular luxury villa next to Costa Brava Golf with high-end finishes and infinity pool.",
      ru: "Впечатляющая роскошная вилла рядом с Гольф Коста Брава с отделкой класса люкс и бассейном-инфинити.",
      pt: "Espetacular villa de luxo junto ao Golfe Costa Brava com acabamentos de alta gama e piscina infinity.",
      zh: "位于布拉瓦海岸高尔夫球场旁的豪华别墅，配有高端装修和无边泳池。",
    },
    type: "villa",
    price: 2800000,
    priceFormatted: "€2.800.000",
    priceOnRequest: false,
    bedrooms: 5,
    bathrooms: 4,
    area: 710,
    plotArea: 2500,
    yearBuilt: 2020,
    location: {
      town: "Santa Cristina d'Aro",
      region: "Costa Brava",
      coordinates: { lat: 41.8119, lng: 2.9953 },
    },
    images: [
      "https://timehomerealty.com/wp-content/uploads/classified-listing/2025/11/3-2-400x285.jpg",
    ],
    thumbnail: "https://timehomerealty.com/wp-content/uploads/classified-listing/2025/11/3-2-400x285.jpg",
    features: ["pool", "garden", "garage", "smartHome", "airConditioning", "heating", "security"],
    tag: "LUJO",
  },
  {
    id: "prop-003",
    slug: "local-comercial-platja-daro",
    reference: "TH-2025-003",
    status: "active",
    featured: true,
    exclusive: false,
    title: {
      es: "Local comercial en venta",
      en: "Commercial Property for Sale",
      ru: "Коммерческое помещение на продажу",
      pt: "Imóvel Comercial à Venda",
      zh: "商业地产出售",
    },
    shortDescription: {
      es: "Local comercial bien ubicado en el centro de Platja d'Aro, ideal para negocio turístico.",
      en: "Well-located commercial property in the center of Platja d'Aro, ideal for tourist business.",
      ru: "Хорошо расположенное коммерческое помещение в центре Плача д'Аро, идеально для туристического бизнеса.",
      pt: "Imóvel comercial bem localizado no centro de Platja d'Aro, ideal para negócio turístico.",
      zh: "位于普拉查达罗市中心的优质商业地产，适合旅游业务。",
    },
    type: "commercial",
    price: 299000,
    priceFormatted: "€299.000",
    priceOnRequest: false,
    bedrooms: 0,
    bathrooms: 1,
    area: 126,
    location: {
      town: "Platja d'Aro",
      region: "Costa Brava",
      coordinates: { lat: 41.8175, lng: 3.0669 },
    },
    images: [
      "https://timehomerealty.com/wp-content/uploads/classified-listing/2025/11/2-2-400x285.jpg",
    ],
    thumbnail: "https://timehomerealty.com/wp-content/uploads/classified-listing/2025/11/2-2-400x285.jpg",
    features: ["airConditioning"],
    tag: "COMERCIAL",
  },
  {
    id: "prop-004",
    slug: "casa-vistas-mar-montana-calonge",
    reference: "TH-2025-004",
    status: "active",
    featured: true,
    exclusive: false,
    title: {
      es: "Impresionante casa con vistas al mar y la montaña",
      en: "Stunning House with Sea and Mountain Views",
      ru: "Впечатляющий дом с видом на море и горы",
      pt: "Casa Impressionante com Vistas ao Mar e à Montanha",
      zh: "拥有海景和山景的壮丽住宅",
    },
    shortDescription: {
      es: "Casa con vistas espectaculares al mar y la montaña en Calonge, amplia y luminosa.",
      en: "House with spectacular sea and mountain views in Calonge, spacious and bright.",
      ru: "Дом с потрясающим видом на море и горы в Калондже, просторный и светлый.",
      pt: "Casa com vistas espetaculares ao mar e à montanha em Calonge, espaçosa e luminosa.",
      zh: "位于卡隆赫的宽敞明亮住宅，拥有壮丽的海景和山景。",
    },
    type: "villa",
    price: 630000,
    priceFormatted: "€630.000",
    priceOnRequest: false,
    bedrooms: 4,
    bathrooms: 4,
    area: 233,
    location: {
      town: "Calonge",
      region: "Costa Brava",
      coordinates: { lat: 41.8553, lng: 3.0767 },
    },
    images: [
      "https://timehomerealty.com/wp-content/uploads/classified-listing/2025/11/16-2-400x285.jpg",
    ],
    thumbnail: "https://timehomerealty.com/wp-content/uploads/classified-listing/2025/11/16-2-400x285.jpg",
    features: ["seaView", "mountainView", "terrace", "garden"],
    tag: "NUEVO",
  },
  {
    id: "prop-005",
    slug: "casa-unifamiliar-sant-antoni-calonge",
    reference: "TH-2025-005",
    status: "active",
    featured: true,
    exclusive: false,
    title: {
      es: "Casa unifamiliar en Sant Antoni de Calonge",
      en: "Detached House in Sant Antoni de Calonge",
      ru: "Отдельный дом в Сант Антони де Калондже",
      pt: "Casa Unifamiliar em Sant Antoni de Calonge",
      zh: "圣安东尼德卡隆赫独栋住宅",
    },
    shortDescription: {
      es: "Amplia casa unifamiliar con 5 dormitorios en una zona tranquila de Sant Antoni de Calonge.",
      en: "Spacious detached house with 5 bedrooms in a quiet area of Sant Antoni de Calonge.",
      ru: "Просторный отдельный дом с 5 спальнями в тихом районе Сант Антони де Калондже.",
      pt: "Ampla casa unifamiliar com 5 quartos numa zona tranquila de Sant Antoni de Calonge.",
      zh: "位于圣安东尼德卡隆赫安静地区的5卧室独栋住宅。",
    },
    type: "villa",
    price: 390000,
    priceFormatted: "€390.000",
    priceOnRequest: false,
    bedrooms: 5,
    bathrooms: 3,
    area: 195,
    location: {
      town: "Sant Antoni de Calonge",
      region: "Costa Brava",
      coordinates: { lat: 41.8533, lng: 3.0897 },
    },
    images: [
      "https://timehomerealty.com/wp-content/uploads/classified-listing/2025/07/hon-2025-07-12T180445.118-1-400x285.jpg",
    ],
    thumbnail: "https://timehomerealty.com/wp-content/uploads/classified-listing/2025/07/hon-2025-07-12T180445.118-1-400x285.jpg",
    features: ["garden", "terrace", "garage"],
  },
  {
    id: "prop-006",
    slug: "chalet-planta-baja-sant-feliu",
    reference: "TH-2025-006",
    status: "active",
    featured: true,
    exclusive: false,
    title: {
      es: "Encantador chalet aislado en planta baja",
      en: "Charming Detached Single-Story Chalet",
      ru: "Очаровательное отдельное шале на одном этаже",
      pt: "Encantador Chalet Isolado em Planta Baixa",
      zh: "迷人的独栋单层小屋",
    },
    shortDescription: {
      es: "Chalet aislado en planta baja con piscina privada en Sant Feliu de Guíxols.",
      en: "Detached single-story chalet with private pool in Sant Feliu de Guíxols.",
      ru: "Отдельное одноэтажное шале с частным бассейном в Сант Фелиу де Гишольс.",
      pt: "Chalet isolado em planta baixa com piscina privada em Sant Feliu de Guíxols.",
      zh: "位于圣费利乌的独栋单层小屋，配有私人泳池。",
    },
    type: "villa",
    price: 475000,
    priceFormatted: "€475.000",
    priceOnRequest: false,
    bedrooms: 5,
    bathrooms: 2,
    area: 96,
    location: {
      town: "Sant Feliu de Guíxols",
      region: "Costa Brava",
      coordinates: { lat: 41.7833, lng: 3.0281 },
    },
    images: [
      "https://timehomerealty.com/wp-content/uploads/classified-listing/2025/11/15-2-400x285.jpg",
    ],
    thumbnail: "https://timehomerealty.com/wp-content/uploads/classified-listing/2025/11/15-2-400x285.jpg",
    features: ["pool", "garden", "terrace"],
    tag: "CON PISCINA",
  },
  {
    id: "prop-007",
    slug: "parcela-vistas-mar-serra-brava",
    reference: "TH-2025-007",
    status: "active",
    featured: false,
    exclusive: false,
    title: {
      es: "Parcela con vistas panorámicas al mar en Serra Brava",
      en: "Plot with Panoramic Sea Views in Serra Brava",
      ru: "Участок с панорамным видом на море в Серра Брава",
      pt: "Parcela com Vistas Panorâmicas ao Mar em Serra Brava",
      zh: "Serra Brava全景海景地块",
    },
    shortDescription: {
      es: "Parcela edificable con vistas panorámicas al mar en la exclusiva zona de Serra Brava, Lloret de Mar.",
      en: "Buildable plot with panoramic sea views in the exclusive Serra Brava area, Lloret de Mar.",
      ru: "Участок под строительство с панорамным видом на море в эксклюзивной зоне Серра Брава, Ллорет де Мар.",
      pt: "Parcela edificável com vistas panorâmicas ao mar na exclusiva zona de Serra Brava, Lloret de Mar.",
      zh: "位于洛雷特德马尔Serra Brava独家区域的可建筑地块，拥有全景海景。",
    },
    type: "land",
    price: 350000,
    priceFormatted: "€350.000",
    priceOnRequest: false,
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    plotArea: 1200,
    location: {
      town: "Lloret de Mar",
      region: "Costa Brava",
      coordinates: { lat: 41.6989, lng: 2.8456 },
    },
    images: [
      "https://timehomerealty.com/wp-content/uploads/classified-listing/2025/11/1-400x285.jpg",
    ],
    thumbnail: "https://timehomerealty.com/wp-content/uploads/classified-listing/2025/11/1-400x285.jpg",
    features: ["seaView"],
    tag: "TERRENO",
  },
];

// Helper functions
export function getFeaturedProperties(): PropertyData[] {
  return properties.filter((p) => p.featured && p.status === "active");
}

export function getPropertyBySlug(slug: string): PropertyData | undefined {
  return properties.find((p) => p.slug === slug);
}

export function filterProperties(params: {
  type?: string;
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  minBedrooms?: number;
}): PropertyData[] {
  return properties.filter((p) => {
    if (p.status !== "active") return false;
    if (params.type && p.type !== params.type) return false;
    if (params.location && p.location.town !== params.location) return false;
    if (params.minPrice && p.price < params.minPrice) return false;
    if (params.maxPrice && p.price > params.maxPrice) return false;
    if (params.minBedrooms && p.bedrooms < params.minBedrooms) return false;
    return true;
  });
}

export function getUniqueLocations(): string[] {
  return [...new Set(properties.map((p) => p.location.town))];
}
