import React, { useState, useRef, useEffect } from "react";

import { styled, useTheme, Box, darken } from "@mui/material";
import Icon from "../icon";

const NavbarArea = styled("nav")(({ theme }) => {
	console.log(theme);
	return {
		position: "relative",
		height: "auto",
		backgroundColor: theme.palette.background.default,
		"& .navbar__main": {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center"
		},
		"& .navbar__brand": {
			// padding: "5px"
		},
		"& .navbar__togglers": {
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		}
	};
});

const BrandButton = styled("button")(({ theme }) => ({
	all: "unset",
	cursor: "pointer",
	backgroundColor: theme.palette.background.paper,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	padding: "17px 14px",
	"& img": {
		height: "auto",
		width: "65px"
	}
}));

const MenuButton = styled("button")(({ theme }) => ({
	all: "unset",
	backgroundColor: darken(theme.palette.background.default, 0.1),
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	height: "100%",
	padding: "11px",
	cursor: "pointer"
}));

const ThemeButton = styled("button")(({ theme }) => ({
	all: "unset",
	display: "flex",
	backgroundColor: "transparent",
	justifyContent: "center",
	alignItems: "center",
	height: "100%",
	padding: "11px",
	cursor: "pointer"
}));

const MobileNavbar = () => {
	const [menuToggler, setMenuToggler] = useState(true);
	const [themeToggler, setThemeToggler] = useState(false);

	const handleToggleMenu = () => {
		setMenuToggler((prev) => !prev);
	};

	const handleToggleTheme = () => {
		setThemeToggler((prev) => !prev);
	};

	const theme = useTheme();

	return (
		<NavbarArea>
			<div className="navbar__main">
				<div className="navbar__brand">
					<BrandButton href="">
						<img className="navbar__logo" src="/images/misc/logo.svg" />
					</BrandButton>
				</div>
				<div className="navbar__togglers">
					<Box sx={{ mr: ".5rem" }}>
						<ThemeButton onClick={handleToggleTheme}>
							<Icon
								icon="icon-sun"
								className="icon-sun"
								sx={{
									color: themeToggler ? theme.palette.text.icon : "",
									display: themeToggler ? "block" : "none"
								}}
							/>
							<Icon
								icon="icon-moon"
								className="icon-moon"
								sx={{
									color: !themeToggler ? theme.palette.text.icon : "",
									display: !themeToggler ? "block" : "none"
								}}
							/>
						</ThemeButton>
					</Box>
					<Box sx={{ position: "relative" }}>
						<MenuButton onClick={handleToggleMenu}>
							<Icon
								icon="icon-menu"
								className="icon-menu"
								sx={{ display: menuToggler ? "block" : "none" }}
							/>
							<Icon
								icon="icon-x1"
								className="icon-x1"
								sx={{ display: !menuToggler ? "block" : "none" }}
							/>
						</MenuButton>
					</Box>
				</div>
			</div>
			<div className="navbar__sub"></div>
		</NavbarArea>
	);
};

export default MobileNavbar;
