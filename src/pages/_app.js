import React, { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import "@/styles/icomoon.css";
import "@/styles/testimonials.css";
import { CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@/utils/create-emotion-cache";
import SiteThemeProvider from "@/context/theme";
import UserLayout from "@/layout/user-layout";
import { SiteUiProvider } from "@/context/ui";
import { Analytics } from "@vercel/analytics/react";
const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }) {
	const getLayout = Component.getLayout || ((page) => <UserLayout>{page}</UserLayout>);
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url) => {
			window.gtag("config", "G-V8MGK13ZL0", { page_path: url });
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);
	return (
		<>
			<Analytics />
			{/* Google Tag (gtag.js) */}
			<Script
				strategy="afterInteractive"
				src="https://www.googletagmanager.com/gtag/js?id=G-V8MGK13ZL0"
			/>
			<Script
				id="google-analytics"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V8MGK13ZL0');
          `
				}}
			/>
			<CacheProvider value={emotionCache}>
				<SiteThemeProvider>
					<SiteUiProvider>
						<CssBaseline />
						{getLayout(<Component {...pageProps} />)}
					</SiteUiProvider>
				</SiteThemeProvider>
			</CacheProvider>
		</>
	);
}

export default MyApp;
