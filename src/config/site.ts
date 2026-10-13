export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "enfosi Wiki",
  shortName: "enfosi",
  logoText: "E",
  tagline: "Complete Guides, Characters, Mechanics & Updates",
  description: "Explore enfosi Wiki with detailed gameplay guides, character information, mechanics, updates, and essential resources to help players discover everything.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://enfosiwiki.top",
  supportEmail: "support@enfosiwiki.top",
  gameUrl: "https://www.roblox.com/games/78353262320982/Enfosi",
  heroVideoId: "xHPrS4uEn7s", // Enfosi - Beginner Guide (gameplay tutorial)
  social: {
    discord: "https://www.roblox.com/groups/9835935",
    youtube: "https://www.youtube.com/@BucketBazard",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
