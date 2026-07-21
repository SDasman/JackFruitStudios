/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/JackFruitStudios",
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
