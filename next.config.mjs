/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: { unoptimized: true },

    // Add this rewrites function
    async rewrites() {
        return [
            {
                source: '/jain-culinary-guide', // This is the clean URL you will access
                destination: '/special.html',   // This points to the file in your /public folder
            },
            {
                source: '/inventory',
                destination: '/inventory.html',
            },
            {
                source: '/recipes',
                destination: '/recipes.html',
            },
        ];
    },
};

export default nextConfig;
