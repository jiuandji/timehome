/**
 * TimeHome Realty — Areas / Zonas Data
 * Coverage areas on Costa Brava with property counts
 */

export interface AreaData {
  slug: string;
  name: string;
  image: string;
  count: number;
  description: {
    es: string;
    en: string;
    ru: string;
    pt: string;
    zh: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const areas: AreaData[] = [
  {
    slug: "platja-daro",
    name: "Platja d'Aro",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    count: 28,
    description: {
      es: "El corazón turístico de la Costa Brava. Playas doradas, vida nocturna y propiedades exclusivas.",
      en: "The tourist heart of Costa Brava. Golden beaches, nightlife, and exclusive properties.",
      ru: "Туристическое сердце Коста Бравы. Золотые пляжи, ночная жизнь и эксклюзивная недвижимость.",
      pt: "O coração turístico da Costa Brava. Praias douradas, vida noturna e propriedades exclusivas.",
      zh: "布拉瓦海岸的旅游中心。金色海滩、夜生活和独家物业。",
    },
    coordinates: { lat: 41.8175, lng: 3.0669 },
  },
  {
    slug: "begur",
    name: "Begur",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&q=80",
    count: 12,
    description: {
      es: "Pueblo medieval con calas paradisíacas. La joya más exclusiva de la Costa Brava.",
      en: "Medieval village with paradise coves. The most exclusive gem of Costa Brava.",
      ru: "Средневековая деревня с райскими бухтами. Самая эксклюзивная жемчужина Коста Бравы.",
      pt: "Vila medieval com enseadas paradisíacas. A joia mais exclusiva da Costa Brava.",
      zh: "拥有天堂般海湾的中世纪村庄。布拉瓦海岸最独特的瑰宝。",
    },
    coordinates: { lat: 41.9544, lng: 3.2072 },
  },
  {
    slug: "santa-cristina-daro",
    name: "Santa Cristina d'Aro",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    count: 8,
    description: {
      es: "Zona residencial tranquila con campos de golf y villas de lujo rodeadas de naturaleza.",
      en: "Quiet residential area with golf courses and luxury villas surrounded by nature.",
      ru: "Тихая жилая зона с полями для гольфа и роскошными виллами в окружении природы.",
      pt: "Zona residencial tranquila com campos de golfe e vilas de luxo rodeadas de natureza.",
      zh: "宁静的住宅区，拥有高尔夫球场和被大自然环绕的豪华别墅。",
    },
    coordinates: { lat: 41.8119, lng: 2.9953 },
  },
  {
    slug: "palamos",
    name: "Palamós",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&q=80",
    count: 11,
    description: {
      es: "Puerto pesquero con encanto, famoso por su gamba roja y su autenticidad mediterránea.",
      en: "Charming fishing port, famous for its red prawns and Mediterranean authenticity.",
      ru: "Очаровательный рыбацкий порт, знаменитый красными креветками и средиземноморской аутентичностью.",
      pt: "Porto de pesca encantador, famoso pelos seus camarões vermelhos e autenticidade mediterrânica.",
      zh: "迷人的渔港，以红虾和地中海风情闻名。",
    },
    coordinates: { lat: 41.8486, lng: 3.1283 },
  },
  {
    slug: "sant-antoni-de-calonge",
    name: "Sant Antoni de Calonge",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80",
    count: 9,
    description: {
      es: "Ambiente familiar con paseo marítimo y propiedades con excelente relación calidad-precio.",
      en: "Family-friendly atmosphere with seafront promenade and great value properties.",
      ru: "Семейная атмосфера с набережной и недвижимостью с отличным соотношением цена-качество.",
      pt: "Ambiente familiar com passeio marítimo e propriedades com excelente relação qualidade-preço.",
      zh: "家庭友好的氛围，拥有海滨长廊和高性价比的物业。",
    },
    coordinates: { lat: 41.8533, lng: 3.0897 },
  },
  {
    slug: "tossa-de-mar",
    name: "Tossa de Mar",
    image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=600&q=80",
    count: 8,
    description: {
      es: "Villa medieval amurallada con las playas más fotografiadas de la Costa Brava.",
      en: "Walled medieval town with the most photographed beaches on Costa Brava.",
      ru: "Средневековый город-крепость с самыми фотографируемыми пляжами Коста Бравы.",
      pt: "Vila medieval amuralhada com as praias mais fotografadas da Costa Brava.",
      zh: "拥有布拉瓦海岸最上镜海滩的中世纪城墙小镇。",
    },
    coordinates: { lat: 41.7200, lng: 2.9311 },
  },
];
