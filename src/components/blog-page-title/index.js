import React, { useEffect, useState } from "react";
import { Container, Typography, Breadcrumbs, Link, Box, Stack } from "@mui/material";
import { styled } from "@mui/system";

// Reusable Page Title Component with Parallax Effect
const BlogPageTitle = () => {
	const [offsetY, setOffsetY] = useState(0);

	const handleScroll = () => {
		setOffsetY(window.pageYOffset);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			{/* Content */}
			<Container
				maxWidth="lg"
				sx={{ position: "relative", zIndex: 2, padding: "60px 0 80px", textAlign: "center" }}>
				<Stack direction="row" justifyContent="center" sx={{ marginBottom: 2 }}>
					<Breadcrumbs aria-label="breadcrumb" sx={{ color: "#fff", opacity: 0.9 }}>
						<Link underline="hover" color="inherit" href="/home">
							Home
						</Link>
						<Typography color="textPrimary">Our Blog</Typography>
					</Breadcrumbs>
				</Stack>

				<Typography
					variant="h1"
					component="h1"
					sx={{ fontSize: 42, color: "#fff", fontWeight: "bold", mb: 2 }}>
					Blog Grid
				</Typography>

				<Typography variant="body1" component="p" sx={{ color: "#fff", lineHeight: 1.21 }}>
					Discover a Treasure Trove of Informative and Inspiring Content on Our Engaging Blog: Stay
					<br className="show-desktop" /> Informed, Inspired, and Entertained!
				</Typography>
			</Container>
		</>
	);
};

export default BlogPageTitle;
