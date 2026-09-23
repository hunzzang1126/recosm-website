import { INGREDIENTS, ingredientPath, HUB_MODIFIED } from "@/lib/ingredients";
import { GUIDES } from "@/lib/guides";

const BASE_URL = "https://www.recosm.co";

// lastModified is the date the page content last changed. Keep it honest:
// a date that moves on every build teaches Google to ignore it.
const PAGES = [
  ["/", "2026-09-10", "weekly", 1],
  ["/product", "2026-08-25", "weekly", 0.9],
  ["/science", "2026-08-25", "monthly", 0.8],
  ["/guides/prostaglandin-free-lash-serums", "2026-09-23", "monthly", 0.8],
  ["/guides/lash-serum-ingredients", HUB_MODIFIED, "monthly", 0.8],
  ["/guides/lash-serum-ingredients-to-avoid", "2026-09-23", "monthly", 0.8],
  ["/guides/lash-serums-with-extensions", "2026-09-23", "monthly", 0.8],
  ["/stockists", "2026-08-25", "monthly", 0.6],
  ["/faq", "2026-08-25", "monthly", 0.7],
  ["/contact", "2026-08-25", "yearly", 0.5],
];

export default function sitemap() {
  return [
    ...PAGES.map(([path, date, changeFrequency, priority]) => ({
      url: `${BASE_URL}${path}`,
      lastModified: new Date(date),
      changeFrequency,
      priority,
    })),
    ...GUIDES.map((g) => ({
      url: `${BASE_URL}/guides/${g.slug}`,
      lastModified: new Date("2026-09-23"),
      changeFrequency: "monthly",
      priority: 0.8,
    })),
    ...INGREDIENTS.map((i) => ({
      url: `${BASE_URL}${ingredientPath(i.slug)}`,
      lastModified: new Date(HUB_MODIFIED),
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ];
}
