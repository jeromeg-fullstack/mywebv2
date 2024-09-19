import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import ThemeSwitcherIcon from "../theme-switcher-icon"; // Assuming sun/moon icons component
import DefaultIcon from "../default-icon"; // Gear icon component
import { DefaultButton } from "../buttons";
import { styled, useTheme, darken, lighten } from "@mui/material";
import $ from "jquery"; // Import jQuery
import { useThemeCtx } from "@/context/theme";

const DrawerContainer = styled("div")({
	position: "fixed",
	right: "-50px", // Initially hidden (right offscreen)
	top: "15px",
	width: "65px",
	zIndex: 99999999
});

const GearButton = styled("div")(({ theme }) => ({
	position: "fixed",
	right: "-50px", // Make it visible just outside the drawer
	top: "15px",
	width: "60px",
	height: "60px",
	backgroundColor: theme.palette.secondary.main,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	borderRadius: "4px 0 0 4px",
	cursor: "pointer",
	color: "#fff",
	transition: "color 0.3s ease", // Smooth color transition

	"& .gear-button": {
		all: "unset",
		padding: "10px"
	}
}));

const DrawerContent = styled("div")(({ theme }) => ({
	backgroundColor: darken(theme.palette.primary.main, 0.1),
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-evenly",
	alignItems: "center",
	height: "120px",
	borderRadius: "0 0 0 10px",
	boxShadow: "-5px 7px 13px -3px rgba(0,0,0,0.75)",
	"& button span.icon:hover": {
		color: theme.palette.common.gray
	}
}));

const ThemeDrawer = () => {
	const { isDark, toggleTheme } = useThemeCtx();
	const theme = useTheme();
	const [gearColor, setGearColor] = useState("#1d1d1d");
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const drawerRef = useRef(null); // Reference to the drawer content
	const gearRef = useRef(null);
	const gearButtonRef = useRef(null); // Reference for the gear button
	const gearAnimation = useRef(null); // Store the GSAP animation instance

	// UseEffect to handle jQuery animate for sliding effect of both drawer and gear button
	useEffect(() => {
		if (drawerRef.current && gearButtonRef.current) {
			if (isDrawerOpen) {
				// Animate the drawer and gear button together when opening
				$(drawerRef.current).stop(true, true).animate({ right: "0px" }, 300); // Slide in drawer
				$(gearButtonRef.current).stop(true, true).animate({ right: "60px" }, 300); // Move gear button left
			} else {
				// Animate the drawer and gear button together when closing
				$(drawerRef.current).stop(true, true).animate({ right: "-65px" }, 300); // Slide out drawer
				$(gearButtonRef.current).stop(true, true).animate({ right: "0px" }, 300); // Move gear button back
			}
		}
	}, [isDrawerOpen]); // Effect will run whenever `isDrawerOpen` state changes

	// UseEffect to handle the GSAP animation on the gear icon
	useEffect(() => {
		if (gearRef.current) {
			const gearIcon = gearRef.current;

			// Create a GSAP animation instance but don't start it yet
			gearAnimation.current = gsap.to(gearIcon, {
				rotation: 360,
				repeat: -1,
				duration: 1.5,
				ease: "linear",
				paused: true // Start paused
			});

			const handleMouseEnter = () => {
				gearAnimation.current.play(); // Play the rotation on hover
				setGearColor("black");
			};

			const handleMouseLeave = () => {
				gearAnimation.current.pause(); // Pause the rotation when not hovering
				setGearColor(theme.palette.common.black);
			};

			// Attach event listeners
			gearIcon.addEventListener("mouseenter", handleMouseEnter);
			gearIcon.addEventListener("mouseleave", handleMouseLeave);

			// Cleanup event listeners on component unmount
			return () => {
				gearIcon.removeEventListener("mouseenter", handleMouseEnter);
				gearIcon.removeEventListener("mouseleave", handleMouseLeave);
				gearAnimation.current.kill(); // Clean up the GSAP animation instance
			};
		}
	}, []);

	// Toggle Drawer
	const toggleDrawer = () => {
		setIsDrawerOpen((prev) => !prev);
	};

	const handleToggleTheme = () => {
		toggleTheme();
		toggleDrawer();
	};

	const handleEnterEffect = () => {};
	const handleLeaveEffect = () => {};

	return (
		<>
			<GearButton ref={gearButtonRef} onClick={toggleDrawer}>
				<button className="gear-button">
					<DefaultIcon ref={gearRef} className="icon" code="e993" cStyles={{ color: gearColor }} />
				</button>
			</GearButton>
			<DrawerContainer ref={drawerRef}>
				<DrawerContent>
					<DefaultButton onClick={handleToggleTheme} disabled={!isDark}>
						<ThemeSwitcherIcon
							className="icon"
							code="e981"
							cStyles={{
								color: !isDark ? theme.palette.text.secondary : theme.palette.text.icon
							}}
							onMouseEnter={handleEnterEffect}
							onMouseLeave={handleLeaveEffect}
						/>
					</DefaultButton>
					<DefaultButton onClick={handleToggleTheme} disabled={isDark}>
						<ThemeSwitcherIcon
							className="icon"
							code="e971"
							cStyles={{
								color: isDark ? theme.palette.common.blue : theme.palette.text.icon
							}}
						/>
					</DefaultButton>
				</DrawerContent>
			</DrawerContainer>
		</>
	);
};

ThemeDrawer.displayName = "ThemeDrawer";

export default ThemeDrawer;
