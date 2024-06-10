/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  env: {
    NOTION_DATABASE_ID: "51b1c5db34e24dbb8e38ff01139a6e07",
    NOTION_INTERNAL_INTEGRATION_TOKEN:
      "secret_N0XxyyOsDhmmLImH41H26A8mVq8AAMeh2qSBYIt3L7Z",
  },
};

module.exports = nextConfig;
