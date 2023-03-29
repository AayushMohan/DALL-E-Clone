/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["links.papareact.com", "avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
