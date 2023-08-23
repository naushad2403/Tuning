/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        // destination: "https://funky-seahorse-locally.ngrok-free.app/api/:path*",
        destination:
          "https://dd64-2401-4900-1c2b-9416-2dec-73a9-d3b8-7e67.ngrok-free.app/api/:path*",
      },
    ];
  },
};

// module.exports = nextConfig
