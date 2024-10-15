import React, { useEffect, useState } from "react";
import {
	Container,
	Typography,
	Breadcrumbs,
	Link,
	Stack,
	lighten,
	darken,
	useTheme
} from "@mui/material";
import { useIsScreenSizes } from "@/hooks/useIsScreenSizes";

// Reusable Page Title Component with Parallax Effect
const BlogPageTitle = () => {
	const [offsetY, setOffsetY] = useState(0);
	const theme = useTheme();

	const { isTablet, isLaptop, isLaptopL, isDesktop } = useIsScreenSizes();

	const isBigView = isTablet || isLaptop || isLaptopL || isDesktop;

	const handleScroll = () => {
		setOffsetY(window.pageYOffset);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<Container maxWidth="lg" sx={{ padding: "60px 0 80px", textAlign: "center", width: "100vw" }}>
				<Stack direction="row" justifyContent="center" sx={{ marginBottom: 2 }}>
					<Breadcrumbs
						aria-label="breadcrumb"
						separator={<Typography color="textPrimary">/</Typography>}
						sx={{
							color: theme.palette.primary.main
						}}>
						<Link
							underline="hover"
							sx={(theme) => ({
								color:
									theme.palette.mode === "dark"
										? lighten(theme.palette.common.gray, 1)
										: darken(theme.palette.common.black, 1)
							})}
							href="/">
							Home
						</Link>
						<Typography color="textPrimary">My Blog</Typography>
					</Breadcrumbs>
				</Stack>

				<Typography
					variant="h1"
					component="h1"
					sx={(theme) => ({
						fontSize: 42,
						color:
							theme.palette.mode === "dark"
								? lighten(theme.palette.common.gray, 0.75)
								: theme.palette.common.black,
						fontWeight: "bold",
						mb: 2
					})}>
					Blog
				</Typography>

				<Typography
					variant="body1"
					component="p"
					sx={(theme) => ({
						color:
							theme.palette.mode === "dark"
								? lighten(theme.palette.common.gray, 0.5)
								: theme.palette.common.black,
						lineHeight: 1.21,
						px: isBigView ? "18rem" : "3rem",
						fontWeight: "bold"
					})}>
					Discover a Treasure Trove of Informative and Inspiring Content on Our Engaging Blog: Stay
					Informed, Inspired, and Entertained!
				</Typography>
			</Container>
		</>
	);
};

export default BlogPageTitle;
