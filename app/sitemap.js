const BASE_URL = "https://www.recosm.co";

export default function sitemap() {
  const lastModified = new Date();
  return [
    { url: `${BASE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/product`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/science`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/guides/prostaglandin-free-lash-serums`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/guides/lash-serum-ingredients`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/guides/lash-serums-with-extensions`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/stockists`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/faq`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified, changeFrequency: "monthly", priority: 0.5 },
  ];
}
