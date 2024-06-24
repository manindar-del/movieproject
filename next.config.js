/** @type {import('next').NextConfig} */
const nextConfig = {
  dangerouslyAllowSVG: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['source.unsplash.com', 'img.omdbapi', "m.media-amazon.com"],
  },
  reactStrictMode: true,
  env: {
    OMDB_ENDPOINT: process.env.OMDB_ENDPOINT,
    OMDB_API_KEY: process.env.OMDB_API_KEY
  },

}

module.exports = nextConfig;
