import { defineRouting } from "next-intl/routing";

/** 唯一真相源：最终语言集合（与 request.ts / language-switcher.tsx / locales/*.json 保持四处一致） */
export const locales = ["en", "ja", "ko", "es"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof locales)[number];
