import React from "react";
import { useTheme } from "@mui/material";
import useIsScreenSizes from "@/utils/get-is-screen-sizes";

const ThemeSwitcherIcon = ({ code, cStyles }) => {
	const theme = useTheme();
	const { isMobileXS, isMobileS, isMobileM, isMobileL } = useIsScreenSizes();

	const isSmallView = isMobileXS || isMobileS || isMobileM || isMobileL;

	return (
		<span
			className={`icon`}
			dangerouslySetInnerHTML={{ __html: `&#x${code};` }}
			style={{
				display: "inline-block",
				textRendering: "auto",
				color: theme.palette.text.icon,
				verticalAlign: "middle",
				fontSize: isSmallView ? "1.8rem" : "2.25rem",
				transition: "color 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
				...cStyles
			}}
		/>
	);
};

export default ThemeSwitcherIcon;
