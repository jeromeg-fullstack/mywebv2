import { styled, GlobalStyles } from "@mui/material";
import { useThemeCtx } from "@/context/theme";
import getIsScreenSizes from "@/utils/get-is-screen-sizes";

const Page = styled("div", {
	shouldForwardProp: (prop) => prop !== "isBigView" && prop !== "isDark"
})(({ theme, isBigView, isDark }) => {
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
		height: "100vh",
		width: "100%",
		flexDirection: isBigView ? "row" : "column-reverse",
		...(isDark ? dark : light)
	};
});

const SiteContainer = ({ children }) => {
	const { isDark } = useThemeCtx();
	const { isMobileXS, isMobileS, isMobileM, isMobileL, isTablet, isLaptop, isLaptopL, isDesktop } =
		getIsScreenSizes();

	const isSmallView = isMobileXS || isMobileS || isMobileM || isMobileL || isTablet;
	const isBigView = isLaptop || isLaptopL || isDesktop;
	return (
		<Page isDark={isDark} isBigView={isBigView}>
			<GlobalStyles
				styles={{
					body: {
						height: "100%",
						width: "100vw",
						overflowX: "hidden",
						overflowY: "hidden",
						position: "relative",
						margin: 0,
						padding: 0
					}
				}}
			/>
			{children}
		</Page>
	);
};

export default SiteContainer;
