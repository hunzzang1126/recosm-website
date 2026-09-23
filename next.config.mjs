/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The /guides index was removed; Google still had it. Send it to the
      // ingredient guide, which is now the hub that links every guide page.
      { source: "/guides", destination: "/guides/lash-serum-ingredients", permanent: true },
      // Ingredient pages merged on 2026-09-23 (see MERGED in lib/ingredients.js).
      { source: "/guides/lash-serum-ingredients/red-clover-extract", destination: "/guides/lash-serum-ingredients/acetyl-tetrapeptide-3", permanent: true },
      { source: "/guides/lash-serum-ingredients/centella-asiatica", destination: "/guides/lash-serum-ingredients/soothing-botanicals", permanent: true },
      { source: "/guides/lash-serum-ingredients/dipotassium-glycyrrhizate", destination: "/guides/lash-serum-ingredients/soothing-botanicals", permanent: true },
      { source: "/guides/lash-serum-ingredients/houttuynia-cordata", destination: "/guides/lash-serum-ingredients/soothing-botanicals", permanent: true },
    ];
  },
};

export default nextConfig;
