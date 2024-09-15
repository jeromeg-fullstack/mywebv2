import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, styled } from "@mui/material";
import { BrandButton, ThemeButton } from "@/components/buttons";
import { NavButton, NavText } from "@/components/buttons";
import Icon from "@/components/icon";
import { useThemeCtx } from "@/context/theme";

// Header wrapper
const HeaderContainer = styled("header")({
	width: "95px",
	height: "100vh",
	// position: "fixed",
	// left: 0,
	// top: 0,
	backgroundColor: "#333", // Example background color
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "space-between"
	// overflow: "hidden"
});

// Navbar inside header
const Nav = styled("nav")({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "space-between",
	height: "inherit"
});

// Nav list
const NavList = styled("ul")({
	listStyleType: "none",
	padding: 0,
	margin: 0,
	width: "100%",
	height: "70%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "space-around"
});

// Nav items
const NavItem = styled("li")({
	width: "100%",
	textAlign: "center",
	cursor: "pointer"
});
const DesktopHeader = () => {
	const [themeToggler, setThemeToggler] = useState(false);
	const { toggleTheme, isDark } = useThemeCtx();
	const [hasShadow, setHasShadow] = useState(false);
	const router = useRouter(); // Detect current route
	const [isBlogPage, setIsBlogPage] = useState(false);

	const pathname = router.pathname;

	const isActive = (pathname, path) => {
		if (pathname === path) {
			return { filter: "drop-shadow(0px 0px 1px rgba(8, 0, 0, 1))", color: "#46c34c" };
		}
	};

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

	const handleNavClick = (path) => {
		router.push(path);
	};

	const handleToggleTheme = () => setThemeToggler((prev) => !prev);

	useEffect(() => {
		toggleTheme();
	}, [themeToggler]);

	return (
		<HeaderContainer>
			<Nav>
				<Box sx={{ height: "75px" }}>
					<BrandButton href="">
						<img className="navbar__logo" src="/images/misc/logo.svg" alt="Logo" />
					</BrandButton>
				</Box>
				<Box
					sx={{
						height: "inherit",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center"
					}}>
					<NavList>
						<NavItem>
							<NavButton onClick={() => handleNavClick("/")}>
								<Icon icon="icon-home" className="icon icon-home" sx={isActive(pathname, "/")} />
								<NavText isDark={isDark} className="nav-text">
									Home
								</NavText>
							</NavButton>
						</NavItem>
						<NavItem>
							<NavButton onClick={() => handleNavClick("/about")}>
								<Icon
									icon="icon-user-check"
									className="icon icon-user-check"
									sx={isActive(pathname, "/about")}
								/>
								<NavText isDark={isDark} className="nav-text">
									About
								</NavText>
							</NavButton>
						</NavItem>
						<NavItem>
							<NavButton onClick={() => handleNavClick("/projects")}>
								<Icon
									icon="icon-briefcase"
									className="icon icon-briefcase"
									sx={isActive(pathname, "/projects")}
								/>
								<NavText isDark={isDark} className="nav-text">
									Projects
								</NavText>
							</NavButton>
						</NavItem>
						<NavItem>
							<NavButton onClick={() => handleNavClick("/blog")}>
								<Icon
									icon="icon-pen-tool"
									className="icon icon-pen-tool"
									sx={isActive(pathname, "/blog")}
								/>
								<NavText isDark={isDark} className="nav-text">
									Blog
								</NavText>
							</NavButton>
						</NavItem>
						<NavItem>
							<NavButton onClick={() => handleNavClick("/testimonials")}>
								<Icon
									icon="icon-users"
									className="icon icon-users"
									sx={isActive(pathname, "/testimonials")}
								/>
								<NavText isDark={isDark} className="nav-text">
									Testimonials
								</NavText>
							</NavButton>
						</NavItem>
						<NavItem>
							<NavButton onClick={() => handleNavClick("/contact")}>
								<Icon
									icon="icon-mail"
									className="icon icon-mail"
									sx={isActive(pathname, "/contact")}
								/>
								<NavText isDark={isDark} className="nav-text">
									Contact
								</NavText>
							</NavButton>
						</NavItem>
					</NavList>
				</Box>
			</Nav>
		</HeaderContainer>
	);
};

export default DesktopHeader;
