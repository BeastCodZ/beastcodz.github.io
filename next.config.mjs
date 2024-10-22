/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  env: {
    EMAIL_SERVICE: process.env.EMAIL_SERVICE,
    EMAIL_TEMPLATE: process.env.EMAIL_TEMPLATE,
    EMAIL_USER: process.env.EMAIL_USER,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wallpapers.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "overflow.design",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.overflow.design", // Added www. to the hostname
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "c0.wallpaperflare.com", // Added the specific subdomain
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "wallpaperflare.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
