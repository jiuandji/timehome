import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en", "ru", "pt", "zh"],
  defaultLocale: "es",
});
