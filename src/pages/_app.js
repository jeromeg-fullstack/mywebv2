import React from "react";
import "@/styles/globals.css"; // Import your global styles (normalize + custom styles)
import { CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@/utils/create-emotion-cache"; // Make sure to have this utility
import SiteThemeProvider from "@/context/theme";
import UserLayout from "@/layout/user-layout";

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }) {
  const getLayout = Component.getLayout || ((page) => <UserLayout>{page}</UserLayout>);
	return (
		<CacheProvider value={emotionCache}>
			<SiteThemeProvider>
				<CssBaseline />
				{getLayout(<Component {...pageProps} />)}
			</SiteThemeProvider>
		</CacheProvider>
	);
}

export default MyApp;
