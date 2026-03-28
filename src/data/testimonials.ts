/**
 * TimeHome Realty — Testimonials Data
 * Real client reviews with localized translations
 */

export interface TestimonialData {
  id: string;
  name: string;
  country: string;       // flag emoji
  countryName: {
    es: string;
    en: string;
    ru: string;
    pt: string;
    zh: string;
  };
  text: {
    es: string;
    en: string;
    ru: string;
    pt: string;
    zh: string;
  };
  rating: number;
  property: string;      // property type + location
}

export const testimonials: TestimonialData[] = [
  {
    id: "weber-de",
    name: "Klaus & Helena Weber",
    country: "🇩🇪",
    countryName: {
      es: "Alemania",
      en: "Germany",
      ru: "Германия",
      pt: "Alemanha",
      zh: "德国",
    },
    text: {
      es: "TIME HOME nos encontró la villa perfecta en Begur. Su equipo multilingüe hizo que todo el proceso fuera impecable — desde los tours virtuales hasta la firma del contrato. Nos sentimos apoyados en cada paso.",
      en: "TIME HOME found us the perfect villa in Begur. Their multilingual team made the entire process flawless — from virtual tours to signing the contract. We felt supported every step of the way.",
      ru: "TIME HOME нашли для нас идеальную виллу в Бегуре. Их многоязычная команда сделала весь процесс безупречным — от виртуальных туров до подписания контракта. Мы чувствовали поддержку на каждом шагу.",
      pt: "A TIME HOME encontrou-nos a villa perfeita em Begur. A sua equipa multilingue tornou todo o processo impecável — desde as visitas virtuais até à assinatura do contrato. Sentimo-nos apoiados em cada passo.",
      zh: "TIME HOME为我们在贝古尔找到了完美的别墅。他们的多语言团队使整个过程无可挑剔——从虚拟参观到签署合同。我们在每一步都感到被支持。",
    },
    rating: 5,
    property: "Villa en Begur",
  },
  {
    id: "petrov-ru",
    name: "Андрей и Мария Петровы",
    country: "🇷🇺",
    countryName: {
      es: "Rusia",
      en: "Russia",
      ru: "Россия",
      pt: "Rússia",
      zh: "俄罗斯",
    },
    text: {
      es: "Buscábamos un apartamento con vistas al mar durante medio año. TIME HOME encontró la opción perfecta en Platja d'Aro en una semana. Profesionalismo y atención al más alto nivel. Oksana nos ayudó con toda la documentación.",
      en: "We had been searching for a sea-view apartment for six months. TIME HOME found the perfect option in Platja d'Aro within a week. Professionalism and care at the highest level. Oksana helped us with all the paperwork.",
      ru: "Искали квартиру с видом на море уже полгода. TIME HOME за неделю подобрали идеальный вариант в Плача д'Аро. Профессионализм и забота — на высшем уровне. Оксана помогла со всеми документами.",
      pt: "Procurávamos um apartamento com vista para o mar há meio ano. A TIME HOME encontrou a opção perfeita em Platja d'Aro numa semana. Profissionalismo e cuidado ao mais alto nível. A Oksana ajudou-nos com toda a documentação.",
      zh: "我们找了半年的海景公寓。TIME HOME在一周内就在普拉查达罗找到了完美的选择。专业精神和关怀达到最高水平。Oksana帮助我们处理了所有文件。",
    },
    rating: 5,
    property: "Apartamento en Platja d'Aro",
  },
  {
    id: "mitchell-uk",
    name: "James & Sarah Mitchell",
    country: "🇬🇧",
    countryName: {
      es: "Reino Unido",
      en: "United Kingdom",
      ru: "Великобритания",
      pt: "Reino Unido",
      zh: "英国",
    },
    text: {
      es: "Después de consultar con docenas de agencias, TIME HOME destacó por su enfoque personal. Natali nos ayudó a navegar por el sistema legal español e hizo que la compra de nuestra casa vacacional fuera completamente libre de estrés.",
      en: "After looking at dozens of agencies, TIME HOME stood out for their personal approach. Natali helped us navigate the Spanish legal system and made buying our holiday home stress-free.",
      ru: "Просмотрев десятки агентств, TIME HOME выделилась своим персональным подходом. Натали помогла нам разобраться в испанской правовой системе и сделала покупку нашего дома для отдыха абсолютно беззаботной.",
      pt: "Depois de consultar dezenas de agências, a TIME HOME destacou-se pela sua abordagem pessoal. A Natali ajudou-nos a navegar pelo sistema legal espanhol e tornou a compra da nossa casa de férias totalmente livre de stress.",
      zh: "在咨询了数十家机构后，TIME HOME以其个人化的服务脱颖而出。Natali帮助我们了解西班牙法律体系，使我们购买度假屋的过程完全没有压力。",
    },
    rating: 5,
    property: "Adosado en Palamós",
  },
];
