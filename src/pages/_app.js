import React from "react";
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
	return (
		<>
			<Analytics />
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
