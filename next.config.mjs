/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: { unoptimized: true },
    // Clean URLs for the static pages in /public (/jain-culinary-guide,
    // /inventory, /recipes) are handled by the rewrites in firebase.json;
    // Next.js rewrites do not apply to a static export.
};

export default nextConfig;
