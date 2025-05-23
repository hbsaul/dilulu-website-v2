/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['source.unsplash.com', 'images.unsplash.com', 'via.placeholder.com', 'res.cloudinary.com'],
    unoptimized: true,
  },
  reactStrictMode: false,
  swcMinify: true,
};


module.exports = nextConfig;
