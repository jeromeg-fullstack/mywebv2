import React, { useState } from "react";
import { useTheme } from "@mui/material";
import "animate.css";
import useIsScreenSizes from "@/utils/get-is-screen-sizes";
import { useThemeCtx } from "@/context/theme";

const BouncingIcon = ({ code }) => {
	const [isBouncing, setIsBouncing] = useState(false);

	const theme = useTheme();
	const { isMobileXS, isMobileS, isMobileM, isMobileL, isTablet, isLaptop, isLaptopL, isDesktop } =
		useIsScreenSizes();
	const { isDark } = useThemeCtx();

	const isSmallView = isMobileXS || isMobileS || isMobileM || isMobileL;
	const isBigView = isLaptop || isLaptopL || isDesktop;

	return (
		<span
			className={`icon ${isBouncing ? "animate__animated animate__rubberBand" : ""}`}
			onMouseEnter={() => setIsBouncing(true)}
			onMouseLeave={() => setIsBouncing(false)}
			dangerouslySetInnerHTML={{ __html: `&#x${code};` }}
			style={{
				display: "inline-block",
				textRendering: "auto",
				color: isBouncing ? theme.palette.text.primary : theme.palette.text.icon,
				verticalAlign: "middle",
				fontSize: isSmallView ? "1.8rem" : "2.25rem",
				transition: "color 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
			}}
		/>
	);
};

export default BouncingIcon;
