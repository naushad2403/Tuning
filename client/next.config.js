/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://255.255.255.0:3000/api/:path*",
      },
    ];
  },
};

// module.exports = nextConfig
