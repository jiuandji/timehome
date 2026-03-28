---
name: property-schema
description: Создание и валидация карточки объекта недвижимости
---

# Создание карточки объекта

## Когда использовать
При добавлении нового объекта недвижимости на сайт.

## Обязательная структура данных объекта

```typescript
interface Property {
  // Базовое
  id: string;                    // Уникальный ID (uuid)
  slug: string;                  // URL-friendly: "villa-maritima-begur"
  status: 'active' | 'sold' | 'reserved' | 'draft';
  featured: boolean;             // Показывать на главной
  exclusive: boolean;            // Бейдж EXCLUSIVE
  
  // Локализованные поля (для каждого из 5 языков)
  title: LocalizedString;        // "Villa Maritima" (может различаться)
  description: LocalizedString;  // Storytelling-описание
  shortDescription: LocalizedString; // Для карточки (2-3 строки)
  
  // Характеристики
  type: 'villa' | 'apartment' | 'townhouse' | 'land' | 'commercial';
  price: number;                 // В евро
  priceOnRequest: boolean;       // Для ultra-luxury
  bedrooms: number;
  bathrooms: number;
  area: number;                  // m² жилая
  plotArea?: number;             // m² участок
  yearBuilt?: number;
  
  // Локация
  location: {
    town: string;                // "Begur"
    region: string;              // "Costa Brava"
    coordinates: { lat: number; lng: number; };
    nearestBeach?: string;
    distanceToBeach?: string;    // "400m"
    distanceToAirport?: string;  // "1h30m to BCN"
  };
  
  // Медиа
  images: {
    url: string;
    alt: LocalizedString;
    category: 'exterior' | 'interior' | 'aerial' | 'view' | 'detail' | 'area';
    order: number;
  }[];
  virtualTourUrl?: string;       // Matterport embed
  videoUrl?: string;             // YouTube/Vimeo
  floorPlanUrl?: string;
  
  // Удобства
  features: string[];            // ['pool', 'seaView', 'garden', 'garage', 'smartHome']
  
  // SEO
  metaTitle: LocalizedString;
  metaDescription: LocalizedString;
  
  // Метаданные
  createdAt: Date;
  updatedAt: Date;
  agent?: string;                // Ответственный агент
  reference: string;             // Внутренний номер "TH-2026-042"
}

type LocalizedString = {
  es: string;
  en: string;
  ru: string;
  pt: string;
  zh: string;
};
```

## Чек-лист при добавлении объекта

- [ ] Минимум 15 фотографий (идеал: 40-60)
- [ ] Фото в правильном порядке: аэро → экстерьер → гостиная → кухня → спальни → ванные → вид → детали
- [ ] Все фото оптимизированы через Cloudinary (WebP, lazy load)
- [ ] Описание-storytelling на EN (не «3 beds, 2 baths»)
- [ ] Перевод на 5 языков через translate-content skill
- [ ] Schema.org разметка `Product` + `Offer`
- [ ] Координаты на карте проверены
- [ ] Reference номер уникален
- [ ] SEO мета-теги заполнены на всех языках
