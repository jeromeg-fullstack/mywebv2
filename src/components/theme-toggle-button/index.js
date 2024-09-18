import { useCallback } from "react";
import { Box, styled, Tooltip } from "@mui/material";
import Icon from "../default-icon";
import { useThemeCtx } from "@/context/theme";

const ButtonToggle = styled("button")({
	all: "unset",
	cursor: "pointer",
	zIndex: 99999
});

const ThemeToggleButton = () => {
	const { toggleTheme, isDark } = useThemeCtx();

	const handleToggleTheme = useCallback(() => {
		console.log("toggle called");
		toggleTheme();
	}, [toggleTheme]);

	return (
		<Box sx={{ position: "absolute", right: "1%", top: "2%" }}>
			<Box sx={{ position: "relative", height: "50px", width: "50px" }}>
				<Tooltip title={!isDark ? "Light Mode" : "Dark Mode"} placement="left">
					<ButtonToggle display="flex" alignItems="center" onClick={handleToggleTheme}>
						{!isDark ? (
							<Icon className="icon-sun" style={{ color: "#da9b00" }} />
						) : (
							<Icon className="icon-moon" style={{ color: "#198bca" }} />
						)}
					</ButtonToggle>
				</Tooltip>
			</Box>
		</Box>
	);
};

export default ThemeToggleButton;
