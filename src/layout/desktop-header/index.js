import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Box, styled, darken } from "@mui/material";
import { BrandButton, NavButton, NavText } from "@/components/buttons";
import { useThemeCtx } from "@/context/theme";
import NavIcon from "@/components/nav-icon";
import { useTheme } from "@emotion/react";

const HeaderContainer = styled("header", {
	shouldForwardProp: (prop) => prop !== "isDark" && prop !== "isFixed"
})(({ theme, isFixed }) => ({
	width: "95px",
	height: "100vh",
	position: isFixed ? "fixed" : "relative",
	backgroundColor: theme.palette.primary.main,
	transition:
		"background-color 0.5s cubic-bezier(0.5, 0, 0.2, 1), position 0.5s cubic-bezier(0.5, 0, 0.2, 1)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "space-between",
	boxShadow: isFixed ? "3px 0px 4px 0px rgba(0,0,0,0.15)" : "",
	zIndex: 100
}));

const Nav = styled("nav")({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "space-between",
	height: "inherit"
});

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

const NavItem = styled("li")({
	width: "100%",
	textAlign: "center",
	cursor: "pointer"
});

const DesktopHeader = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const { isDark, isBlogPage } = useThemeCtx();
	const theme = useTheme();
	const router = useRouter();
	const pathname = router.pathname;

	const handleNavClick = (path) => {
		router.push(path);
	};

	useEffect(() => {
		// Check if current route is the blog page
		if (router.pathname === "/blog") {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	}, [router.pathname]);


	return (
		<HeaderContainer isDark={isDark} isFixed={isBlogPage}>
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
						{[
							{ path: "/", icon: "e940", label: "Home" },
							{ path: "/about", icon: "e93b", label: "About" },
							{ path: "/projects", icon: "e915", label: "Projects" },
							// { path: "/blog", icon: "e935", label: "Blog" },
							{ path: "/testimonials", icon: "e907", label: "Testimonials" },
							{ path: "/contact", icon: "e941", label: "Contact" }
						].map(({ path, icon, label }) => {
							const isActive = path === "/blog" ? pathname.startsWith("/blog") : pathname === path;

							return (
								<NavItem key={path}>
									<NavButton
										onClick={() => handleNavClick(path)}
										className={isActive ? "active" : ""}>
										<NavIcon
											className="icon"
											code={icon}
											cStyles={
												isActive
													? {
															filter: isDark
																? `drop-shadow(0px 0px .75px rgba(255,255,255, .35))`
																: ` drop-shadow(0px 0px 1px rgba(8, 0, 0, 1))`,
															color: isDark
																? theme.palette.common.blue
																: darken(theme.palette.common.gold, 0.1)
													  }
													: {}
											}
										/>
										<NavText className="nav-text">{label}</NavText>
									</NavButton>
								</NavItem>
							);
						})}
					</NavList>
				</Box>
			</Nav>
		</HeaderContainer>
	);
};

export default DesktopHeader;