import type { LucideIcon } from "lucide-react";
import { BookOpen, Gamepad2, Keyboard, Map, Swords, TrendingUp, Users } from "lucide-react";

interface NavigationItem {
  /** 翻译键：对应 en.json 的 nav.<key> */
  key: string;
  /** URL 路径：必须与 content/<locale>/ 下的分类目录同名 */
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

/** 唯一真相源：与 content/<locale>/ 子目录、content.ts 的 GROUP_TITLES/GROUP_ORDER、en.json 的 nav 键一一对应 */
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "combat", path: "/combat", icon: Swords, isContentType: true },
  { key: "modes", path: "/modes", icon: Gamepad2, isContentType: true },
  { key: "progression", path: "/progression", icon: TrendingUp, isContentType: true },
  { key: "maps", path: "/maps", icon: Map, isContentType: true },
  { key: "controls", path: "/controls", icon: Keyboard, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
