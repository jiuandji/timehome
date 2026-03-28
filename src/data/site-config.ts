/**
 * TimeHome Realty — Site Configuration
 * Central place for all contact info, social media, and business details
 */

import type { SiteConfig } from "@/types/property";

export const siteConfig: SiteConfig = {
  name: "TIME HOME REALTY",
  url: "https://timehomerealty.com",
  defaultLocale: "es",
  locales: ["es", "en", "ru", "pt", "zh"],
  whatsappNumber: "34603379691",
  phoneNumber: "+34 603 37 96 91",
  email: "infotimehomerealty@gmail.com",
  address: {
    street: "12 Carrer Pineda del Mar, local 27B",
    city: "Castell-Platja d'Aro",
    postalCode: "17250",
    country: "España",
  },
  socialMedia: {
    instagram: "https://www.instagram.com/timehomerealty.pda",
    facebook: "https://www.facebook.com/time.home.realty.2023",
  },
  workingHours: {
    weekdays: "10:00–14:00 / 15:00–19:00",
    saturday: "10:00–14:00 / 15:00–19:00",
    sunday: "Con cita previa",
  },
};

export const phones = [
  { number: "+34 603 37 96 91", href: "tel:+34603379691" },
  { number: "+34 621 145 911", href: "tel:+34621145911" },
];

export const teamMembers = [
  {
    name: "Oksana",
    initial: "O",
    role: {
      es: "Especialista Inmobiliaria",
      en: "Real Estate Specialist",
      ru: "Специалист по недвижимости",
      pt: "Especialista Imobiliária",
      zh: "房地产专家",
    },
    languages: ["es", "en", "ru"],
  },
  {
    name: "Natali",
    initial: "N",
    role: {
      es: "Especialista Inmobiliaria",
      en: "Real Estate Specialist",
      ru: "Специалист по недвижимости",
      pt: "Especialista Imobiliária",
      zh: "房地产专家",
    },
    languages: ["es", "en", "ru", "pt"],
  },
];
