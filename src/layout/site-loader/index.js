import { useState, useEffect, useRef } from "react";
import { styled, Box, useTheme } from "@mui/material";
import { gsap, Power4 } from "gsap";
import { useRouter } from "next/router";
import { useThemeCtx } from "@/context/theme";
import { useUiCtx } from "@/context/ui";

const Loader = styled(Box)(({ theme }) => ({
	height: "100vh",
	width: "100%",
	overflow: "hidden",
	position: "fixed",
	top: 0,
	left: 0,
	zIndex: 9999, // Ensure loader stays on top
	backgroundColor: theme.palette.background.default,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	transform: "translateX(-100%)" // Initial off-screen position
}));

const SiteLoader = ({ children }) => {
	const { isDark } = useThemeCtx();
	const theme = useTheme();
	const [gifSrc, setGifSrc] = useState("/images/misc/loading-bar-dark.gif");
	const {
		state: { isLoading },
		dispatch: { setIsLoading }
	} = useUiCtx();

	const loaderRef = useRef(null);
	const contentRef = useRef(null);
	const router = useRouter();

	const tlRef = useRef(null);

	useEffect(() => {
		if (isLoading && loaderRef.current) {
			if (contentRef.current) {
				contentRef.current.style.visibility = "hidden"; // Ensure content is hidden
			}

			const tl = gsap.timeline({
				onComplete: () => {
					setIsLoading(false); // Hide loader after animation
					if (contentRef.current) {
						contentRef.current.style.visibility = "visible"; // Show content after loader finishes
					}
				}
			});

			tl.to(loaderRef.current, {
				x: "0%",
				duration: 0.7,
				ease: Power4.out
			}).to(loaderRef.current, {
				delay: 5, // Adjust the delay if you want to hold the loader longer
				x: "100%",
				duration: 0.7,
				ease: Power4.in
			});

			tlRef.current = tl;
			tl.play();
		}
	}, [isLoading]);

	useEffect(() => {
		const handleRouteChangeStart = () => {
			setIsLoading(true); // Show loader on route change start
			setGifSrc(
				isDark
					? `/images/misc/loading-bar-dark.gif?timestamp=${new Date().getTime()}`
					: `/images/misc/loading-bar-light.gif?timestamp=${new Date().getTime()}`
			);
		};

		router.events.on("routeChangeStart", handleRouteChangeStart);
		router.events.on("routeChangeComplete", () => {}); // Can handle completion if needed
		router.events.on("routeChangeError", () => {}); // Handle errors if needed

		return () => {
			router.events.off("routeChangeStart", handleRouteChangeStart);
		};
	}, [router.events, isDark]);

	return (
		<>
			{isLoading && (
				<Loader ref={loaderRef}>
					<Box component="img" src={gifSrc} alt="Loading..." />
				</Loader>
			)}
			<Box
				id="main-content"
				sx={{
					backgroundColor: theme.palette.mode === "dark" ? "#2d2d2d" : "#CBCBCB !important",
					visibility: isLoading ? "hidden" : "visible" // Set visibility based on loading state
				}}
				ref={contentRef}>
				{children}
			</Box>
		</>
	);
};

export default SiteLoader;
