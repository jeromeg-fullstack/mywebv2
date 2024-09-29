/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	publicRuntimeConfig: {
		// Will be available on both server and client
		googleMapsKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY
	}
};

export default nextConfig;
