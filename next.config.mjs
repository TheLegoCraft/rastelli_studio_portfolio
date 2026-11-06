/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return ['cycling-iceland-and-trans-european', 'photography-and-hobbies'].map(slug => ({
      source: `/projects/${slug}`,
      destination: '/hobbies',
      permanent: false,
    }));
  },
};

export default nextConfig;
