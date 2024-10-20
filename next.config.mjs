/** @type {import('next-sitemap').IConfig} */

import webpack from "webpack";
import dotenv from "dotenv";

dotenv.config();

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
	}
};

export default nextConfig;
