// next.config.js
import webpack from "webpack";

/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	publicRuntimeConfig: {
		// Will be available on both server and client
		googleMapsKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY
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
	}
};

export default nextConfig;
