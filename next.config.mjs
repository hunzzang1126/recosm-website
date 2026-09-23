/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The /guides index was removed; Google still had it. Send it to the
      // ingredient guide, which is now the hub that links every guide page.
      { source: "/guides", destination: "/guides/lash-serum-ingredients", permanent: true },
    ];
  },
};

export default nextConfig;
