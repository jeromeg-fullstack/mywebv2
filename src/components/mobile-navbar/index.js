import React, { useEffect, useState } from "react";
import { styled, useTheme, Box, darken, lighten } from "@mui/material";
import { ThemeButton, MenuButton, NavButton, BrandButton } from "@/components/buttons";

import Icon from "../icon";
import { useThemeCtx } from "@/context/theme";
import { useRouter } from "next/router";

// Refactored: Grouped styles for maintainability
const NavbarArea = styled("nav")(({ theme, hasShadow, isDark }) => ({
	position: "static",
	width: "100%", // Ensure navbar takes full width
	backgroundColor: isDark
		? theme.palette.background.default
		: lighten(theme.palette.background.default, 0.9),
	transition: "background-color 0.5s cubic-bezier(0.5, 0, 0.2, 1)",
	boxShadow: hasShadow ? "0 4px 6px rgba(0, 0, 0, 0.5)" : "none" // Conditional shadow
}));

const NavbarBrand = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center"
}));

const TogglerArea = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center"
}));

const MobileNavSub = styled(Box)(({ theme, isDark, menuToggler }) => ({
	position: "absolute", // Fix to avoid overlap with content
	top: "60px",
	right: menuToggler ? "0" : "100%",
	animation: menuToggler ? "slideInRight 0.5s ease" : "slideOutRight 0.5s ease",
	visibility: menuToggler ? "visible" : "hidden",
	opacity: menuToggler ? 1 : 0,
	width: "100%",
	height: "70px",
	backgroundColor: isDark
		? theme.palette.background.default
		: lighten(theme.palette.background.default, 0.9),
	justifyContent: "center",
	alignItems: "center",
	boxShadow: "0 -2px 2px -2px gray",
	transition:
		"background-color 0.5s cubic-bezier(0.5, 0, 0.2, 1) , visibility 0.5s, opacity 0.5s ease-out",
	display: menuToggler ? "flex" : "none", // Show only when menuToggler is true
	"& .nav": {
		width: "100%",
		display: "flex",
		justifyContent: "space-around"
	},

	"& > button": {
		padding: "1rem",
		display: "flex",
		justifyItems: "center",
		alignItems: "center"
		// background-color: #070707 !important,
	}
}));

const MobileNavbar = () => {
	const [menuToggler, setMenuToggler] = useState(false);
	const [themeToggler, setThemeToggler] = useState(false);
	const theme = useTheme();
	const { toggleTheme, isDark } = useThemeCtx();
	const [hasShadow, setHasShadow] = useState(false);
	const router = useRouter(); // Detect current route
	const [isBlogPage, setIsBlogPage] = useState(false);

	const isActive = (pathname, path) => {
		if (pathname === path) {
			return { filter: "drop-shadow(0px 0px 1px rgba(8, 0, 0, 1))", color: "#46c34c" };
		}
	};

	const pathname = router.pathname;

	const handleScroll = () => {
		if (window.scrollY > 50) {
			setHasShadow(true);
		} else {
			setHasShadow(false);
		}
	};

	useEffect(() => {
		// Check if current route is the blog page
		if (router.pathname === "/blog") {
			setIsBlogPage(true);
		} else {
			setIsBlogPage(false);
		}
	}, [router.pathname]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleToggleMenu = () => setMenuToggler((prev) => !prev);
	const handleToggleTheme = () => setThemeToggler((prev) => !prev);
	const handleNavClick = (path) => {
		setMenuToggler(false);
		router.push(path);
	};

	useEffect(() => {
		toggleTheme();
	}, [themeToggler]);

	return (
		<NavbarArea hasShadow={hasShadow} isDark={isDark}>
			<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
				<NavbarBrand>
					<BrandButton href="">
						<img className="navbar__logo" src="/images/misc/logo.svg" alt="Logo" />
					</BrandButton>
				</NavbarBrand>

				<TogglerArea>
					<Box sx={{ mr: ".5rem" }}>
						<ThemeButton onClick={handleToggleTheme}>
							<Icon
								icon="icon-sun"
								className="icon-sun"
								sx={{
									color: !themeToggler ? theme.palette.text.icon : "",
									display: themeToggler ? "inline-block" : "none"
								}}
							/>
							<Icon
								icon="icon-moon"
								className="icon-moon"
								sx={{
									color: themeToggler ? "#46c34c" : "",
									display: !themeToggler ? "inline-block" : "none"
								}}
							/>
						</ThemeButton>
					</Box>
					<Box sx={{ position: "relative" }}>
						<MenuButton onClick={handleToggleMenu} isDark={isDark}>
							<Icon
								icon="icon-menu"
								className="icon-menu"
								sx={{ display: !menuToggler ? "block" : "none" }}
							/>
							<Icon
								icon="icon-x1"
								className="icon-x1"
								sx={{ display: menuToggler ? "block" : "none" }}
							/>
						</MenuButton>
					</Box>
				</TogglerArea>
			</Box>
			<MobileNavSub isDark={isDark} menuToggler={menuToggler}>
				<nav className="nav">
					<NavButton onClick={() => handleNavClick("/")}>
						<Icon icon="icon-home" className="icon-home" sx={isActive(pathname, "/")} />
					</NavButton>
					<NavButton onClick={() => handleNavClick("/about")}>
						<Icon
							icon="icon-user-check"
							className="icon-user-check"
							sx={isActive(pathname, "/about")}
						/>
					</NavButton>
					<NavButton onClick={() => handleNavClick("/projects")}>
						<Icon
							icon="icon-briefcase"
							className="icon-briefcase"
							sx={isActive(pathname, "/projects")}
						/>
					</NavButton>
					<NavButton onClick={() => handleNavClick("/blog")}>
						<Icon icon="icon-pen-tool" className="icon-pen-tool" sx={isActive(pathname, "/blog")} />
					</NavButton>
					<NavButton onClick={() => handleNavClick("/testimonials")}>
						<Icon
							icon="icon-users"
							className="icon-users"
							sx={isActive(pathname, "/testimonials")}
						/>
					</NavButton>
					<NavButton onClick={() => handleNavClick("/contact")}>
						<Icon icon="icon-mail" className="icon-mail" sx={isActive(pathname, "/contact")} />
					</NavButton>
				</nav>
			</MobileNavSub>
		</NavbarArea>
	);
};

export default MobileNavbar;
