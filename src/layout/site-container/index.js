import { styled, GlobalStyles } from "@mui/material";
import { useThemeCtx } from "@/context/theme";
import { useIsScreenSizes } from "@/hooks/useIsScreenSizes";
import { useScrollPosition } from "@/hooks/useScrollPosition"; // Import the custom hook

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
		backgroundPosition: `center`, // Adjust this multiplier
		backgroundRepeat: "no-repeat",
		backgroundAttachment: "fixed", // Ensure this works as expected
		position: "relative",
		display: "flex",
		height: isBlogPage ? "auto" : "100vh",
		width: "100%",
		flexDirection: isBigView ? "row" : "column",
		...(isDark ? dark : light),
		alignItems: "stretch",
		zIndex: 1,
		overflow: "auto" // Ensure content can scroll
	};
});

const SiteContainer = ({ children }) => {
	const { isDark, isBlogPage } = useThemeCtx();
	const { isLaptop, isLaptopL, isDesktop } = useIsScreenSizes();
	const isBigView = isLaptop || isLaptopL || isDesktop;

	const scrollY = useScrollPosition(); // Get scrollY from the custom hook

	return (
		<Page isDark={isDark} isBigView={isBigView} isBlogPage={isBlogPage} currentScrollY={scrollY}>
			{isBlogPage && (
				<GlobalStyles
					styles={{
						body: {
							height: "auto",
							overflowY: "auto"
						},
						html: {
							height: "auto"
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
