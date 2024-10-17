import webpack from "webpack";
import dotenv from "dotenv";

dotenv.config(); // Ensure that environment variables are loaded

const nextConfig = {
	reactStrictMode: true,
	publicRuntimeConfig: {
		googleMapsKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "undefined-key"
	},
	webpack: (config) => {
		config.plugins.push(
			new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery",
				"window.jQuery": "jquery"
			})
		);
		return config;
	},
	eslint: {
		ignoreDuringBuilds: true
	},
	async rewrites() {
		return [
			{
				source: "/sitemap.xml",
				destination: "/sitemap.xml" // This will map to your dynamic sitemap route
			}
		];
	}
};

export default nextConfig;
