/** @type {import('next').NextConfig} */
const nextConfig = {
  //disabled strict mode to emulate proper state changes while in dev
  reactStrictMode: false,
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
};

export default nextConfig;
