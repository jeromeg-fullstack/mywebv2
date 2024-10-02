import React from "react";
import { Avatar, Box, Typography, Grid, useTheme } from "@mui/material";
import { useIsScreenSizes } from "@/hooks/useIsScreenSizes";

function TestimonialCard() {
	const theme = useTheme();
	const { isMobileXs, isMobileS, isMobileM, isMobileL, IsTablet, isDesktop, isLaptop, isLaptopL } =
		useIsScreenSizes();
	return (
		<>
			<Box
				sx={{
					background:
						theme.palette.mode === "dark"
							? `url(/images/background/body-bg-dark.png)`
							: `url(/images/background/body-bg-light.png)`,
					backgroundAttachment: "fixed",
					padding: ["20px", "40px"],
					borderRadius: "16px",
					position: "relative",
					border: `2px solid ${theme.palette.text.primary}`,
					borderRadius: "10px",
					backgroundColor: "#000",
					margin: ["10px 18px", "10px 28px"],
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
				<Box>
					<Typography
						variant="h3"
						component="p"
						sx={{
							marginBottom: "20px",
							fontWeight: 400,
							fontSize: ["18px", "20px", "30px"],
							lineHeight: ["1.75rem", "1.5rem", "3rem"],
							letterSpacing: ["1px", "1.5px"],
							color: theme.palette.text.primary,
							fontWeight: 600
						}}>
						I was skeptical about the redesign at first, but I have to admit that it&apos;s much
						better than before. It&apos;s so much faster and easier to use.
					</Typography>
					<Grid container alignItems="center">
						<Grid item>
							<Avatar variant="rounded" sx={{ marginRight: "15px", width: 56, height: 56 }}>
								KM
							</Avatar>
						</Grid>
						<Grid item>
							<Typography
								variant="body1"
								sx={{ fontSize: ["18px", "23px"], color: theme.palette.text.primary }}>
								Kathryn Murphy
							</Typography>
							<Typography
								variant="subtitle1"
								sx={{ fontSize: ["13px", "15px"], color: theme.palette.text.primary }}>
								Creative Director of Avitex
							</Typography>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</>
	);
}

export default TestimonialCard;
