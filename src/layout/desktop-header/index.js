import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useScroll } from "react-use";

import { Box, styled, darken } from "@mui/material";
import { BrandButton, NavButton, NavText } from "@/components/buttons";
import { useThemeCtx } from "@/context/theme";
import NavIcon from "@/components/nav-icon";
import { useTheme } from "@emotion/react";

const HeaderContainer = styled("header", {
	shouldForwardProp: (prop) => prop !== "isDark"
})(({ theme, isDark }) => ({
	width: "95px",
	height: "100vh",
	backgroundColor: theme.palette.primary.main,
	transition: "background-color 0.5s cubic-bezier(0.5, 0, 0.2, 1)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "space-between",
	boxShadow: "3px 0px 4px 0px rgba(0,0,0,0.1)"
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
	const { isDark, isBlogPage } = useThemeCtx();
	const theme = useTheme();
	const router = useRouter();
	const pathname = router.pathname;

	const handleNavClick = (path) => {
		router.push(path);
	};

	return (
		<HeaderContainer isDark={isDark}>
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
							{ path: "/blog", icon: "e935", label: "Blog" },
							{ path: "/testimonials", icon: "e907", label: "Testimonials" },
							{ path: "/contact", icon: "e941", label: "Contact" }
						].map(({ path, icon, label }) => {
							const isActive = pathname === path;

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
															filter: "drop-shadow(0px 0px 1px rgba(8, 0, 0, 1))",
															color: isDark
																? theme.palette.common.blue
																: darken(theme.palette.common.gold, 0.1)
													  }
													: {}
											}
										/>
										<NavText isDark={isDark} className="nav-text">
											{label}
										</NavText>
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