---
name: deploy-preview
description: Деплой preview-версии сайта для ревью
---

# Деплой preview-версии

## Когда использовать
Перед каждым мержем в main — деплоить preview для проверки.

## Шаги

### 1. Проверка перед деплоем
```bash
# Линтинг
npm run lint

# Type check
npm run type-check

# Build
npm run build
```

Все три должны пройти без ошибок.

### 2. Создание Preview
```bash
# Коммит изменений
git add .
git commit -m "feat: описание изменений"

# Push в feature-ветку
git push origin feature/описание

# Vercel автоматически создаст preview URL
```

### 3. Проверка Preview
Используя browser_subagent:
1. Открыть preview URL
2. Проверить все 5 языков (переключение работает)
3. Проверить мобильную версию (375px)
4. Запустить design-review skill
5. Запустить seo-audit skill

### 4. Lighthouse проверка
- Performance ≥ 95
- Accessibility ≥ 95
- Best Practices ≥ 95
- SEO ≥ 95

### 5. Мерж и деплой production
```bash
# Создать PR
gh pr create --title "описание" --body "что изменено"

# После одобрения — мерж в main
# Vercel автоматически деплоит production
```

## Rollback
Если что-то сломалось в production:
```bash
# Vercel позволяет мгновенный rollback
vercel rollback
```
