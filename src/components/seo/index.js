import Head from "next/head";

const SEO = ({
	title = "Default Title",
	description = "Default description",
	keywords = "virtual assistant, admin support, customer service, social media management",
	ogImage = "https://i.imgur.com/mSLCGXT.png",
	url = "https://jeromeski.vercel.app",
	author = "Jerome Gacoscosim",
	locale = "en_US"
}) => (
	<Head>
		{/* Primary Meta Tags */}
		<title>{title}</title>
		<meta name="description" content={description} />
		<meta name="keywords" content={keywords} />
		<meta name="author" content={author} />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta charSet="UTF-8" />
		{/* Open Graph / Facebook Meta Tags */}
		<meta property="og:type" content="website" />
		<meta property="og:url" content={url} />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta property="og:image" content={ogImage} />
		<meta property="og:site_name" content={author} />
		<meta property="og:locale" content={locale} />
		{/* Twitter Meta Tags */}
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:url" content={url} />
		<meta name="twitter:title" content={title} />
		<meta name="twitter:description" content={description} />
		<meta name="twitter:image" content={ogImage} />
		<meta name="twitter:creator" content="@jeromeski" /> {/* Replace with your Twitter handle */}
		{/* Google Search Meta Tags */}
		<meta name="robots" content="index, follow" />
		<meta name="googlebot" content="index, follow" />
		<link rel="canonical" href={url} /> {/* Canonical URL to prevent duplicate content issues */}
		{/* Favicon (optional) */}
		<link rel="icon" href="/favicon.ico" />
		{/* Other helpful tags */}
		<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
		<meta name="theme-color" content="#000000" />{" "}
		{/* Sets browser toolbar color in mobile browsers */}
		{/* Apple Touch Icon (for iOS devices) */}
		<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
		{/* Manifest for PWA */}
		<link rel="manifest" href="/manifest.json" /> {/* If using a Progressive Web App */}
	</Head>
);

export default SEO;
