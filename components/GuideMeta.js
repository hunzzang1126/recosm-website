// Byline, review date and sources for every guide. Keeps the editorial
// standard visible: who wrote it, when it was checked, what it rests on.
export const SOURCES = {
  hotlist: {
    label: "Health Canada, Cosmetic Ingredient Hotlist",
    url: "https://www.canada.ca/en/health-canada/services/consumer-product-safety/cosmetics/cosmetic-ingredient-hotlist-prohibited-restricted-ingredients/hotlist.html",
  },
  sccs: {
    label: "European Commission, Scientific Committee on Consumer Safety opinions (prostaglandin analogues, 2 February 2026)",
    url: "https://health.ec.europa.eu/scientific-committees/scientific-committee-consumer-safety-sccs/sccs-opinions_en",
  },
  notification: {
    label: "Health Canada, Notification of Cosmetics",
    url: "https://www.canada.ca/en/health-canada/services/consumer-product-safety/cosmetics/notification-cosmetics.html",
  },
  inci: { label: "Re:Cosm Lash Conditioning Serum, full ingredient list", url: "/product" },
};

export function GuideByline({ reviewed = "September 23, 2026" }) {
  return (
    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: "var(--space-8)" }}>
      Written by the Re:Cosm team · Last reviewed {reviewed} · Cosmetic information, not medical advice
    </p>
  );
}

export function GuideSources({ keys = [] }) {
  const list = [...keys, "inci"].filter((k, i, a) => a.indexOf(k) === i).map((k) => SOURCES[k]).filter(Boolean);
  return (
    <section style={{ margin: "var(--space-10) 0", paddingTop: "var(--space-6)", borderTop: "1px solid var(--color-border, #E9E4DD)" }}>
      <h2 className="heading-4" style={{ marginBottom: "var(--space-3)" }}>Sources and standards</h2>
      <p style={{ fontSize: 14, marginBottom: "var(--space-3)" }}>
        Ingredient facts are checked against our published formula and the sources below. We describe how lashes look and
        feel, never growth: that is a drug claim, and our serum is a cosmetic.
      </p>
      <ul style={{ paddingLeft: 20, fontSize: 14, lineHeight: 1.8 }}>
        {list.map((s) => (
          <li key={s.url}>
            <a href={s.url} {...(s.url.startsWith("http") ? { rel: "noopener", target: "_blank" } : {})}>{s.label}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
