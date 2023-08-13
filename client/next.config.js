/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = {
  async rewrites() {
    return [
      {
        source: "/user/:path*",
        destination:
          "https://6nwki6q3vl.execute-api.us-east-1.amazonaws.com/user/:path*",
      },
    ];
  },
};

// module.exports = nextConfig
