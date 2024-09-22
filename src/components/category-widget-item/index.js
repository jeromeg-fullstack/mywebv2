// CategoryWidgetItem.js
import React from "react";
import { Box, Link, Typography, lighten, useTheme } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CategoryWidgetItem = ({ name, count, link }) => {
	const theme = useTheme();
	return (
		<Box
			component="li"
			sx={{
				paddingBottom: 2,
				marginBottom: 2,
				borderBottom: `solid 1px ${theme.palette.background.paper}`,
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center"
			}}>
			<Link
				href={link}
				underline="none"
				sx={(theme) => ({
					fontWeight: "bold",
					flex: "center",
					alignItems: "center",
					color: theme.palette.background.paper,
					transition: "color 0.4s ease",
					"&:hover": {
						color: `${
							theme.palette.mode === "dark" ? lighten(theme.palette.common.gray, 0.75) : "#000"
						} !important`
					}
				})}>
				<ArrowForwardIosIcon sx={{ fontSize: 13, mr: 1 }} />
				{name}
			</Link>
			<Typography component="span" sx={{ fontWeight: 700 }}>
				{count}
			</Typography>
		</Box>
	);
};

export default CategoryWidgetItem;
