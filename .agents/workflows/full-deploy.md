---
description: Полный пайплайн деплоя от Git до Production
---

# Full Deploy Pipeline

// turbo-all

## Предусловия
- Код скоммичен в feature-ветку
- Все тесты проходят
- Design review пройден
- SEO audit пройден

## Шаги

// turbo
1. **Линтинг и тесты**
   ```bash
   npm run lint && npm run type-check && npm run build
   ```

// turbo
2. **Пуш изменений**
   ```bash
   git push origin $(git branch --show-current)
   ```

3. **Создание PR**
   ```bash
   gh pr create --fill
   ```

4. **Preview проверка**
   - Vercel автоматически создаёт preview
   - Запустить performance-check workflow на preview URL
   - Запустить design-review skill
   - Запустить seo-audit skill

5. **Мерж в main**
   ```bash
   gh pr merge --squash --auto
   ```

6. **Post-deploy проверка**
   - Открыть production URL через browser_subagent
   - Проверить все 5 языков
   - Проверить мобильную версию
   - Проверить WhatsApp кнопку
   - Проверить формы обратной связи

7. **Мониторинг**
   - Проверить Sentry на ошибки (первые 30 минут)
   - Проверить Google Search Console
   - Проверить analytics (трафик, bounce rate)
