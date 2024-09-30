import { useState, useEffect, useRef } from "react";
import { styled, Box } from "@mui/material";
import { gsap, Power4 } from "gsap";
import { useRouter } from "next/router";
import { useThemeCtx } from "@/context/theme";

const Loader = styled(Box)(({ theme }) => ({
	height: "100vh",
	width: "100%",
	overflow: "hidden",
	position: "fixed",
	top: 0,
	left: 0,
	zIndex: 9999,
	backgroundColor: theme.palette.background.default,
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
}));

const SiteLoader = ({ children }) => {
	const { isDark } = useThemeCtx();
	const [isLoading, setIsLoading] = useState(true); // Start as loading for initial load
	const [gifSrc, setGifSrc] = useState("/images/misc/loading-bar-dark.gif"); // Initial gif source

	const loaderRef = useRef(null);
	const contentRef = useRef(null); // Reference to the content to hide
	const router = useRouter();
	const tlRef = useRef(null); // Reference to GSAP timeline

	// Effect to handle initial load animation
	useEffect(() => {
		if (isLoading && loaderRef.current) {
			// Hide the content initially
			if (contentRef.current) {
				contentRef.current.style.visibility = "hidden"; // Hide content at start
			}

			// Create a new GSAP timeline
			const tl = gsap.timeline({
				onComplete: () => {
					setIsLoading(false); // Hide loader after animation
					if (contentRef.current) {
						contentRef.current.style.visibility = "visible"; // Show content after loader finishes
					}
				}
			});

			tl.set(loaderRef.current, { x: "-100%" }) // Position loader off-screen to the left
				.to(loaderRef.current, {
					x: "0%", // Slide loader into view
					duration: 0.7,
					ease: Power4.out
				})
				.to(loaderRef.current, {
					delay: 7, // Hold loader for 2 seconds
					x: "100%", // Slide loader out to the right
					duration: 0.7,
					ease: Power4.in
				});

			tlRef.current = tl; // Store timeline reference
			tl.play(); // Play the animation
		}
	}, [isLoading]);

	// Effect to handle route change events
	useEffect(() => {
		const handleRouteChangeStart = () => {
			setIsLoading(true); // Show loader on route change start
			// setGifKey((prevKey) => prevKey + 1); // Update the gif key to force reloading
			setGifSrc(
				isDark
					? `/images/misc/loading-bar-dark.gif?timestamp=${new Date().getTime()}`
					: `/images/misc/loading-bar-light.gif?timestamp=${new Date().getTime()}`
			);
			if (contentRef.current) {
				contentRef.current.style.visibility = "hidden"; // Hide content during loading
			}
		};

		// Attach event listeners
		router.events.on("routeChangeStart", handleRouteChangeStart);
		router.events.on("routeChangeComplete", () => {}); // Optional: Can handle completion if needed
		router.events.on("routeChangeError", () => {}); // Optional: Handle errors if needed

		// Cleanup event listeners on unmount
		return () => {
			router.events.off("routeChangeStart", handleRouteChangeStart);
			router.events.off("routeChangeComplete", () => {});
			router.events.off("routeChangeError", () => {});
		};
	}, [router.events, isDark]);

	return (
		<>
			{isLoading && (
				<Loader ref={loaderRef}>
					{/* Replace with your desired loader content */}
					<Box
						// key={gifKey} // Use the gifKey to reload the gif
						component="img"
						// src="/images/misc/loading-bar-dark.gif"
						src={gifSrc} // Use the updated gifSrc with timestamp
						alt="Loading..."
					/>
				</Loader>
			)}
			<Box
				sx={(theme) => ({
					backgroundColor: theme.palette.background.default
				})}
				ref={contentRef}>
				{children} {/* Hide this content until loading completes */}
			</Box>
		</>
	);
};

export default SiteLoader;
