import webpack from "webpack";
import dotenv from "dotenv";

dotenv.config(); // Ensure that environment variables are loaded

const nextConfig = {
	reactStrictMode: true,
	publicRuntimeConfig: {
		googleMapsKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "undefined-key"
	},
	webpack: (config) => {
		console.log("Google Maps Key: ", process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
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
