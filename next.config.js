/** @type {import('next').NextConfig} */
<<<<<<< HEAD
const nextConfig = {
    experimental: {
        serverActions: true,
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
        remotePatterns: [
            { hostname: 'res.cloudinary.com', protocol: 'https', port: '',
            hostname: "avatars.githubusercontent.com", protocol: 'https', port: '',
        }
        ]
    },
    webpack(config) {
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true,
        }
        return config
    }
}

module.exports = nextConfig
=======
const nextConfig = {}

module.exports = nextConfig
>>>>>>> 05ffb27 (Initial commit from Create Next App)
