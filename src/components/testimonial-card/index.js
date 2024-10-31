import React from "react";
import { Avatar, Box, Typography, Grid, useTheme, Link } from "@mui/material";
import PropTypes from "prop-types";

function TestimonialCard({ text, author, position, avatar, profileImage, linkUrl }) {
	const theme = useTheme();

	return (
		<Box
			sx={{
				background: `url(/images/background/body-bg-${
					theme.palette.mode === "dark" ? "dark" : "light"
				}.png)`,
				backgroundAttachment: "fixed",
				padding: ["15px 35px", "20px 40px"],
				borderRadius: "16px",
				position: "relative",
				border: `2px solid ${theme.palette.text.primary}`,
				backgroundColor: theme.palette.background.default,
				margin: "10px 28px",
				"&::before": {
					borderRadius: "16px",
					position: "absolute",
					content: '""',
					width: "100%",
					height: "100%",
					left: "8px",
					top: "8px",
					backgroundColor: theme.palette.text.primary,
					zIndex: "-1"
				}
			}}>
			<Typography
				variant="h3"
				component="p"
				sx={{
					fontWeight: 600,
					fontSize: { xs: "16px", sm: "18px", md: "30px" },
					lineHeight: { xs: "1.75rem", md: "3rem" },
					letterSpacing: { xs: "1px", md: "1.5px" },
					color: theme.palette.text.primary
				}}>
				{text.length > 175 ? text.substring(0, 175) : text}
				{"..."}
			</Typography>
			<Box sx={{ marginBottom: "20px", display: "flex", justifyContent: "flex-end" }}>
				<Link
					sx={{ color: theme.palette.text.primary, fontSize: ["15px", "18px"], fontWeight: "bold" }}
					href={linkUrl}>
					Click for Full Review
				</Link>
			</Box>

			<Grid container alignItems="center">
				<Grid item>
					<Avatar
						variant="rounded"
						src={profileImage || ""}
						sx={{ marginRight: "15px", width: 56, height: 56 }}>
						{!profileImage && avatar}
					</Avatar>
				</Grid>
				<Grid item>
					<Typography
						variant="body1"
						sx={{
							fontSize: { xs: "18px", md: "23px" },
							color: theme.palette.text.primary,
							fontWeight: theme.palette.mode === "dark" ? 600 : 700
						}}>
						{author}
					</Typography>
					<Typography
						variant="subtitle1"
						sx={{
							fontSize: { xs: "13px", md: "15px" },
							color: theme.palette.text.primary
						}}>
						{position}
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
}

TestimonialCard.propTypes = {
	text: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired,
	avatar: PropTypes.string,
	profileImage: PropTypes.string
};

export default TestimonialCard;
