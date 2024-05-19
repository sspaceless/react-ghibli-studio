/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "image.tmdb.org" },
      { hostname: "www.themoviedb.org" },
      {hostname: "lh3.googleusercontent.com"},
    ],
  },
  output: "standalone",
};

export default nextConfig;
