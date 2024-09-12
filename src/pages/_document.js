// **React Imports
import React, { Children } from "react";

// **Next Imports
import Document, { Html, Head, Main, NextScript } from "next/document";

// **Vendor Imports
import createEmotionServer from "@emotion/server/create-instance";

// **Utils Imports
import createEmotionCache from "@/utils";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		// Store original page render method from ctx
		const originalRenderPage = ctx.renderPage;

		// Create Emotion cache
		const cache = createEmotionCache();

		// Extract critical CSS chunks method from Emotion server using cache
		const { extractCriticalToChunks } = createEmotionServer(cache);

		// Override ctx.renderPage to enhance the App component
		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App) =>
					function EnhanceApp(props) {
						return <App {...props} emotionCache={cache} />;
					}
			});

		// Get initial document props using Document.getInitialProps(ctx)
		const initialProps = await Document.getInitialProps(ctx);

		// Extract critical CSS chunks from initial props HTML
		const emotionStyles = extractCriticalToChunks(initialProps.html);

		// Create style tags from extracted CSS chunks
		const emotionStyleTags = emotionStyles.styles.map((style) => (
			<style
				key={style.key}
				dangerouslySetInnerHTML={{ __html: style.css }}
				data-emotion={`${style.key} ${style.ids.join(" ")}`}
			/>
		));

		// Return initial props combined with new Emotion style tags
		return {
			...initialProps,
			styles: [...Children.toArray(initialProps.styles), ...emotionStyleTags]
		};
	}

	render() {
		return (
			<Html>
				<Head>
					{/* Add Emotion and other styles here */}
					{this.props.styles}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
