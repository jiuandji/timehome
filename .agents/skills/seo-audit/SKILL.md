---
name: seo-audit
description: SEO-аудит страницы — мета-теги, Schema.org, hreflang, Core Web Vitals
---

# SEO-аудит страницы

## Когда использовать
При создании или обновлении любой страницы сайта для проверки SEO-готовности.

## Шаги

1. **Мета-теги** (проверить через Fetch/read_url_content):
   - [ ] `<title>` — уникальный, 50-60 символов, содержит ключевые слова
   - [ ] `<meta description>` — 150-160 символов, содержит CTA
   - [ ] `<meta robots>` — index, follow
   - [ ] `<link rel="canonical">` — правильный URL
   - [ ] Open Graph теги (og:title, og:description, og:image)
   - [ ] Twitter Card теги

2. **Структура заголовков:**
   - [ ] Один `<h1>` на страницу
   - [ ] Иерархия h1 → h2 → h3 (без пропусков)
   - [ ] Ключевые слова в h1 и h2

3. **Schema.org разметка:**
   - [ ] `RealEstateAgent` — для главной и контактов
   - [ ] `Product` + `Offer` — для карточки объекта
   - [ ] `BreadcrumbList` — навигация
   - [ ] `FAQPage` — для FAQ
   - [ ] `Review` — для отзывов

4. **Мультиязычность:**
   - [ ] `hreflang` теги для каждого языка (ru, en, es, pt, zh)
   - [ ] `<html lang="xx">` атрибут
   - [ ] URL-структура: `/ru/`, `/en/`, `/es/`, `/pt/`, `/zh/`

5. **Технический SEO:**
   - [ ] sitemap.xml существует и актуален
   - [ ] robots.txt правильно настроен  
   - [ ] Изображения: alt-тексты, lazy loading, WebP
   - [ ] Core Web Vitals в зелёной зоне

## Ключевые слова (по языкам)

| Язык | Ключевые слова |
|---|---|
| EN | buy property Costa Brava, luxury villa Begur, apartment Platja d'Aro |
| ES | comprar casa Costa Brava, villa lujo Begur, piso Platja d'Aro |
| RU | купить дом Коста Брава, вилла Бегур, квартира Плача д'Аро |
| DE | Haus kaufen Costa Brava, Villa Begur, Wohnung Platja d'Aro |
