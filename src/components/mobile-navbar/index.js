import React, { useEffect, useState, useMemo } from "react";
import { styled, Box, lighten, useTheme } from "@mui/material";
import { ThemeButton, MenuButton, DefaultButton, BrandButton } from "@/components/buttons";
import { useThemeCtx } from "@/context/theme";
import { useRouter } from "next/router";
import useIsScreenSizes from "@/utils/get-is-screen-sizes";
import DefaultIcon from "../default-icon";
import NavIcon from "../nav-icon";
import ThemeSwitcherIcon from "./../theme-switcher-icon/index";

// Refactored: Grouped styles for maintainability
const NavbarArea = styled("nav", {
	shouldForwardProp: (prop) => prop !== "isDark" && prop !== "hasShadow"
})(({ theme, isDark, hasShadow }) => ({
	height: "inherit",
	width: "inherit", // Ensure navbar takes full width
	backgroundColor: theme.palette.primary.main,
	transition: "background-color 0.5s cubic-bezier(0.5, 0, 0.2, 1)",
	boxShadow: hasShadow ? "0 4px 6px rgba(0, 0, 0, 0.5)" : "0 1px 3px rgba(0, 0, 0, 0.1)"
}));

const NavbarBrand = styled(Box)(({ theme }) => ({
	height: "inherit"
}));

const TogglerArea = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	height: "inherit"
}));

const MobileNavSub = styled("div", {
	shouldForwardProp: (prop) => prop !== "isMobileBig" && prop !== "menuToggler" && prop !== "isDark"
})(({ theme, isMobileBig, menuToggler, isDark }) => ({
	position: "absolute", // Fix to avoid overlap with content
	top: isMobileBig ? "74px" : "65px",
	right: menuToggler ? "0" : "100%",
	animation: menuToggler ? "slideInRight 0.5s ease" : "slideOutRight 0.5s ease",
	visibility: menuToggler ? "visible" : "hidden",
	opacity: menuToggler ? 1 : 0,
	width: "100%",
	height: "inherit",
	backgroundColor: theme.palette.primary.main,
	justifyContent: "center",
	alignItems: "center",
	boxShadow: "0 1px 1px 1.5px rgba(0, 0, 0, 0.05)",
	transition:
		"background-color 0.5s cubic-bezier(0.5, 0, 0.2, 1) , visibility 0.5s, opacity 0.5s ease-out",
	display: menuToggler ? "flex" : "none", // Show only when menuToggler is true
	"& .nav": {
		height: "inherit",
		width: "100%",
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center"
	},
	zIndex: 99999
}));

const MobileNavbar = () => {
	const [menuToggler, setMenuToggler] = useState(false);
	const { toggleTheme, isDark } = useThemeCtx();
	const theme = useTheme();
	const [hasShadow, setHasShadow] = useState(false);
	const router = useRouter(); // Detect current route

	const { isTablet, isMobileL, isMobileM } = useIsScreenSizes();
	const isMobileBig = isMobileL || isTablet;

	const makeActive = (pathname, path) => {
		if (pathname === path) {
			return {
				filter: "drop-shadow(0px 0px 1px rgba(8, 0, 0, 1))",
				color: isDark ? theme.palette.common.blue : theme.palette.text.icon
			};
		}
	};

	const pathname = router.pathname;

	const handleToggleMenu = () => setMenuToggler((prev) => !prev);
	const handleToggleTheme = () => toggleTheme();

	const handleNavClick = (path) => {
		setMenuToggler(false);
		router.push(path);
	};

	return (
		<NavbarArea hasShadow={hasShadow} isDark={isDark}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					height: "inherit",
					width: "inherit"
				}}>
				<NavbarBrand>
					<BrandButton href="">
						<img className="navbar__logo" src="/images/misc/logo.svg" alt="Logo" />
					</BrandButton>
				</NavbarBrand>

				<TogglerArea>
					<Box sx={{ padding: "0 2rem", height: "inherit" }}>
						<ThemeButton onClick={handleToggleTheme}>
							<ThemeSwitcherIcon
								code="e971"
								cStyles={{ color: isDark ? theme.palette.common.blue : theme.palette.text.icon }}
							/>
						</ThemeButton>
					</Box>
					<Box sx={{ position: "relative", height: "inherit" }}>
						<MenuButton onClick={handleToggleMenu} isDark={isDark}>
							{menuToggler ? <DefaultIcon code="e98e" /> : <DefaultIcon code="e96c" />}
						</MenuButton>
					</Box>
				</TogglerArea>
			</Box>
			<MobileNavSub isDark={isDark} menuToggler={menuToggler} isMobileBig={isMobileBig}>
				<nav className="nav">
					<DefaultButton onClick={() => handleNavClick("/")}>
						<NavIcon className="icon" code="e940" cStyles={makeActive(pathname, "/")} />
					</DefaultButton>

					<DefaultButton onClick={() => handleNavClick("/about")}>
						<NavIcon className="icon" code="e93b" cStyles={makeActive(pathname, "/about")} />
					</DefaultButton>

					<DefaultButton onClick={() => handleNavClick("/projects")}>
						<NavIcon className="icon" code="e915" cStyles={makeActive(pathname, "/projects")} />
					</DefaultButton>

					<DefaultButton onClick={() => handleNavClick("/blog")}>
						<NavIcon className="icon" code="e935" cStyles={makeActive(pathname, "/blog")} />
					</DefaultButton>

					<DefaultButton onClick={() => handleNavClick("/testimonials")}>
						<NavIcon className="icon" code="e907" cStyles={makeActive(pathname, "/testimonials")} />
					</DefaultButton>

					<DefaultButton onClick={() => handleNavClick("/contact")}>
						<NavIcon className="icon" code="e941" cStyles={makeActive(pathname, "/contact")} />
					</DefaultButton>
				</nav>
			</MobileNavSub>
		</NavbarArea>
	);
};

export default MobileNavbar;
