/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://funky-seahorse-locally.ngrok-free.app/api/:path*",
      },
    ];
  },
};

// module.exports = nextConfig
