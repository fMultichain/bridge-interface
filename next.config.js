// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
// }


// Path: next.config.js
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: config => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  },
  async redirects() {
    return [
      {
        source: '/bridge',
        destination: '/',
        permanent: true,
      },
    ]
  }
}
module.exports = nextConfig