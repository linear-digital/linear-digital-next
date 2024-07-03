/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ld.mdtamiz.com',
        port: '', // Optional: specify if the hostname uses a specific port
        pathname: '/images/**', // Adjust according to your path structure
      },
    ],
  },
};

export default nextConfig;
