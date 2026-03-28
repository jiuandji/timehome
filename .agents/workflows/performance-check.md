---
description: Проверка производительности через Lighthouse и Core Web Vitals
---

# Performance Check

## Когда запускать
- После каждого значительного изменения
- Перед мержем в production
- Еженедельно для мониторинга

## Шаги

1. **Lighthouse аудит**
   - Запустить через browser_subagent или Lighthouse MCP
   - Проверить все 4 категории:
     - Performance ≥ 95
     - Accessibility ≥ 95
     - Best Practices ≥ 95
     - SEO ≥ 95

2. **Core Web Vitals**
   | Метрика | Хорошо | Нужна работа | Плохо |
   |---|---|---|---|
   | LCP | < 1.5s | 1.5-2.5s | > 2.5s |
   | FID | < 50ms | 50-100ms | > 100ms |
   | CLS | < 0.05 | 0.05-0.1 | > 0.1 |
   | INP | < 200ms | 200-500ms | > 500ms |

3. **Размер бандла**
   ```bash
   npm run build
   # Проверить размер в output
   ```
   - Total JS < 200KB (gzipped)
   - Total CSS < 50KB (gzipped)
   - Largest image < 200KB (после оптимизации)
   - Total page weight < 1.5MB

4. **Проверка на мобильном**
   - Через browser_subagent на viewport 375px
   - Скролл плавный (60fps)
   - Нет горизонтального скролла
   - Текст читаем без зума

5. **Отчёт**
   - Записать результаты в artifacts
   - Сравнить с предыдущими замерами
   - Если регрессия > 5% — исправить до деплоя
