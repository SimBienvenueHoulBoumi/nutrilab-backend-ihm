/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: false,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.themealdb.com',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'via.placeholder.com',
            pathname: '/**',
          }
        ],
      },
};


export default nextConfig;
