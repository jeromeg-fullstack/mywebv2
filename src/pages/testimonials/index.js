import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Avatar, Container, Box, Typography, Grid, useTheme, GlobalStyles } from "@mui/material";
import Slider from "react-slick";
import _ from "lodash";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "@/components/testimonial-card";
import { TextContentHeading } from "@/components/global-contents";
import ThemeDrawer from "@/components/theme-drawer";
import { useThemeCtx } from "@/context/theme";
import { useIsScreenSizes } from "@/hooks/useIsScreenSizes";
import testimonialsData from "@/data/testimonials";

export default function Testimonials() {
	const [testimonials, setTestimonials] = useState({});
	const { isDark } = useThemeCtx();
	const { isDesktop, isLaptop, isLaptopL } = useIsScreenSizes();
	const theme = useTheme();

	useEffect(() => {
		if (_.isEmpty(testimonialsData)) {
			return;
		}
		setTestimonials(testimonialsData);
	}, []);

	const isBigView = isLaptop || isLaptopL || isDesktop;

	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 10000,
		arrows: false
	};

	return (
		<>
			<Head>
				<title>Testimonials | SmartVA | Jerome Gacoscosim</title>
				<meta name="description" content="About page showcasing recent articles" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{isBigView && <ThemeDrawer />}
			<GlobalStyles
				styles={{
					".slider-container": {
						position: "relative",
						width: "100%",
						height: "300px", // Adjust the height as needed
						overflow: "hidden",
						padding: "0 20px"
					},
					".slide": {
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100%",
						// backgroundColor: isDark ? "white" : "#2d2d2d",
						color: isDark ? "white" : "#2d2d2d",
						marginBottom: "10px !important"
					},
					".slick-dots": {
						width: "100%",
						display: "flex",
						justifyContent: "center",
						bottom: "-50px !important" // Move the dots further down
					},
					".slick-dots li button": {
						position: "relative", // To position the pseudo-element relative to the button
						zIndex: 1 // Make sure the small dot has a higher z-index than the ::before element
					},
					".slick-dots li button:before": {
						fontSize: "10px",
						color: isDark ? "white !important" : "#2d2d2d  !important"
					},
					".slick-dots li.slick-active button": {
						width: "10px", // Size of the small dot
						height: "10px",
						borderRadius: "50%",
						backgroundColor: isDark ? `white` : `#2d2d2d`, // Color of the small active dot
						position: "relative", // This ensures the `::before` is positioned relative to this element
						zIndex: 2 // Ensure the small dot is on top of the ::before element (outer border)
					},
					".slick-dots li.slick-active button::before": {
						content: '""',
						position: "absolute",
						top: "50%",
						left: "50%",
						width: "20px", // Outer border size
						height: "20px",
						border: isDark ? `2px solid white` : `2px solid #2d2d2d`, // Outer border color and thickness
						borderRadius: "50%",
						transform: "translate(-50%, -50%)", // Centers the outer border around the dot
						zIndex: 1 // Make sure the outer border is behind the small dot
					}
				}}
			/>

			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100%",
					width: "100%"
				}}>
				<Container maxWidth="lg" sx={{ marginTop: "-5rem" }}>
					<TextContentHeading
						sx={{
							fontSize: ["30px", "45px", "60px"],
							letterSpacing: "-0.05em !important",
							marginLeft: "25px"
						}}>
						Testimonials
					</TextContentHeading>
					<Box sx={{ position: "relative", height: "inherit", width: "inherit" }}>
						<Slider {...settings}>
							{!_.isEmpty(testimonials) &&
								testimonials?.map((testimonial) => (
									<TestimonialCard
										key={testimonial._id} // Use a unique key for each item
										text={testimonial.text}
										author={testimonial.author}
										position={testimonial.position}
										avatar={testimonial.avatar}
										profileImage={testimonial.profileImage}
									/>
								))}
						</Slider>
					</Box>
				</Container>
			</Box>
		</>
	);
}
