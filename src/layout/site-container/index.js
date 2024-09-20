import { styled, GlobalStyles, useTheme } from "@mui/material";
import { useThemeCtx } from "@/context/theme";
import useIsScreenSizes from "@/utils/get-is-screen-sizes";

const Page = styled("div", {
	shouldForwardProp: (prop) => prop !== "isBigView" && prop !== "isDark" && prop !== "isBlogPage"
})(({ theme, isBigView, isDark, isBlogPage }) => {
	const dark = {
		[theme.breakpoints.up("sm")]: {
			backgroundImage: "url('/images/background/bg-600px.png')"
		},
		[theme.breakpoints.up("md")]: {
			backgroundImage: "url('/images/background/bg-765px.png')"
		},
		[theme.breakpoints.up("lg")]: {
			backgroundImage: "url('/images/background/bg-900px.png')"
		},
		[theme.breakpoints.up("xl")]: {
			backgroundImage: "url('/images/background/bg-1366px.png')"
		}
	};

	const light = {
		[theme.breakpoints.up("sm")]: {
			backgroundImage: "url('/images/background/bg-lite-600px.png')"
		},
		[theme.breakpoints.up("md")]: {
			backgroundImage: "url('/images/background/bg-lite-765px.png')"
		},
		[theme.breakpoints.up("lg")]: {
			backgroundImage: "url('/images/background/bg-lite-900px.png')"
		},
		[theme.breakpoints.up("xl")]: {
			backgroundImage: "url('/images/background/bg-lite-1366px.png')"
		}
	};
	return {
		backgroundImage: isDark
			? "url('/images/background/bg-415px.png')"
			: "url('/images/background/bg-lite-415px.png')",
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		position: "relative",
		display: "flex",
		height: isBlogPage ? "auto" : "100vh",
		width: "100%",
		flexDirection: isBigView ? "row" : "column",
		...(isDark ? dark : light),
		alignItems: "stretch"
	};
});

const SiteContainer = ({ children }) => {
	const { isDark, isBlogPage } = useThemeCtx();
	const { isMobileXS, isMobileS, isMobileM, isMobileL, isTablet, isLaptop, isLaptopL, isDesktop } =
		useIsScreenSizes();

	const isSmallView = isMobileXS || isMobileS || isMobileM || isMobileL || isTablet;
	const isBigView = isLaptop || isLaptopL || isDesktop;

	const theme = useTheme();

	return (
		<Page isDark={isDark} isBigView={isBigView} isBlogPage={isBlogPage}>
			{isBlogPage && (
				<GlobalStyles
					styles={{
						body: {
							height: "auto", // Allow body to grow for the blog page
							overflowY: "auto", // Allow scrolling on blog page
							backgroundColor: theme.palette.background.default
						},
						html: {
							height: "auto", // Allow html to grow
							backgroundColor: theme.palette.primary.main
						},
						"#__next": {
							height: "auto" // Let Next.js wrapper grow
						}
					}}
				/>
			)}
			{children}
		</Page>
	);
};

export default SiteContainer;
