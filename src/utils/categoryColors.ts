export const CATEGORY_COLORS = {
  Romance: "#FF99B3",
  Fantasy: "#8A7FFF",
  Action: "#FFA75F",
  Comedy: "#72E0C8",
  Drama: "#F7C86F",
  Thriller: "#E06D6D",
  Horror: "#2F3A56",
  SciFi: "#5AB3FF",
  Supernatural: "#9B6EFF",
  SliceOfLife: "#8BE38B",
  Mystery: "#6E6E6E",
  Default: "#D9D9D9"
};

export function getCategoryColor(category?: string | null): string {
  if (!category) return CATEGORY_COLORS.Default;
  const normalized = category.trim();
  return CATEGORY_COLORS[normalized as keyof typeof CATEGORY_COLORS] || CATEGORY_COLORS.Default;
}

