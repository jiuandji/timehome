---
description: Pipeline от дизайна в Figma к готовому коду Next.js
---

# Design to Code Pipeline

## Предусловия
- Figma MCP подключён (API токен установлен)
- Next.js проект инициализирован
- Дизайн-система имплементирована (цвета, шрифты, компоненты)

## Шаги

1. **Получить данные из Figma**
   - Скопировать ссылку на frame/компонент в Figma
   - Через Figma MCP получить layout-данные, стили, spacing

2. **Анализ компонента**
   - Определить тип: page / section / component / atom
   - Проверить наличие аналога в дизайн-системе
   - Выявить responsive breakpoints

3. **Создание React-компонента**
   ```
   src/components/[ComponentName]/
   ├── index.tsx          # Компонент
   ├── styles.module.css  # CSS Modules
   └── types.ts           # TypeScript типы
   ```

4. **Стилизация**
   - Использовать CSS-переменные из дизайн-системы
   - Mobile-first подход (min-width media queries)
   - Проверить hover/focus/active состояния

5. **Контент и i18n**
   - Все строки через `next-intl` (не захардкожены)
   - Запустить translate-content skill для 5 языков

// turbo
6. **Запустить dev-сервер и проверить**
   ```bash
   npm run dev
   ```

7. **Визуальное сравнение**
   - Через browser_subagent открыть страницу
   - Сравнить с Figma макетом
   - Запустить design-review skill

8. **Коммит**
   ```bash
   git add .
   git commit -m "feat(components): add [ComponentName]"
   ```
