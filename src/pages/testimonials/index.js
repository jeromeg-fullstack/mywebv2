import React, { useState, useEffect } from "react";
import { Container, Box, useTheme, GlobalStyles } from "@mui/material";
import Slider from "react-slick";
import _ from "lodash";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "@/components/testimonial-card";
import { TextContentHeading } from "@/components/global-contents";
import ThemeDrawer from "@/components/theme-drawer";
import { useIsScreenSizes } from "@/hooks/useIsScreenSizes";
import testimonialsData from "@/data/testimonials";
import SEO from "@/components/seo";

const Testimonials = () => {
	const [testimonials, setTestimonials] = useState({});
	const { isDesktop, isLaptop, isLaptopL } = useIsScreenSizes();
	const theme = useTheme();
	const isDark = theme.palette.mode === "dark";
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

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
			<SEO
				title="Testimonials | Jerome Gacoscosim | Virtual Assistant"
				description="Hire a Professional Virtual Assistant - Expertise in administrative support, social media management, customer service, scheduling, and data entry. Efficient, reliable, and skilled in optimizing your business workflow for maximum productivity."
				keywords="virtual assistant, administrative support, social media manager, data entry, customer service, business assistant, scheduling, task management, virtual support, remote assistant, productivity solutions, calendar management"
				ogImage="https://imgur.com/cyPPZPT"
				url={`${apiUrl}/testimonials`}
				author="Jerome Gacoscosim"
			/>
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
};

export default Testimonials;
