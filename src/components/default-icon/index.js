import React, { forwardRef } from "react";
import { useTheme } from "@mui/material";
import useIsScreenSizes from "@/utils/get-is-screen-sizes";

const DefaultIcon = forwardRef(({ code, cStyles = {} }, ref) => {
	const theme = useTheme();
	const { isMobileXS, isMobileS, isMobileM, isMobileL } = useIsScreenSizes();

	const isSmallView = isMobileXS || isMobileS || isMobileM || isMobileL;

	return (
		<span
			ref={ref}
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
});

DefaultIcon.displayName = "DefaultIcon";

export default DefaultIcon;
