import { useEffect, useMemo } from "react";
import TagCloud from "TagCloud"; // If you installed via npm

import {
	TextContentSection,
	ImageContentSection,
	TextContentWrap,
	TextContentHeading,
	TextContentDescription
} from "@/components/global-contents";
import { useTheme } from "@mui/material";
import ThemeDrawer from "@/components/theme-drawer";
import { useIsScreenSizes } from "@/hooks/useIsScreenSizes";
import SEO from "@/components/seo";

const About = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
	const theme = useTheme();
	const { isMobileXS, isMobileS, isMobileM, isMobileL, isLaptop, isLaptopL, isDesktop } =
		useIsScreenSizes();

	const isSmallView = isMobileXS || isMobileS || isMobileM || isMobileL;

	const isBigView = isLaptop || isLaptopL || isDesktop;

	const tags = useMemo(() => {
		const fb = "Facebook Ads";
		const ig = "Instagram Ads";
		const copy = "Copywriting";
		const wp = "Wordpress";
		const seo = "Search Engine Optimization";
		const photoshop = "Adobe Photoshop";
		const premiere = "Adobe Premiere";
		const webdev = "Web Development";
		const notion = "Notion";
		const email = "Email Marketing";
		const smm = "Social Media Management";
		const calendar = "Calendar Management";
		const content = "Content Marketing";
		const analytics = "Google Analytics";
		const ecommerce = "Ecommerce SEO";

		return [
			fb,
			ig,
			copy,
			wp,
			seo,
			photoshop,
			premiere,
			webdev,
			notion,
			email,
			calendar,
			content,
			analytics,
			ecommerce,
			smm
		];
	}, []);

	// Function to determine radius based on screen width
	function getRadius() {
		const viewportWidth = window.innerWidth;

		if (viewportWidth <= 600) return 100;
		if (viewportWidth <= 765) return 150;
		if (viewportWidth <= 900) return 175;
		if (viewportWidth <= 1024) return 200;
		if (viewportWidth <= 1366) return 250;
		return 300;
	}

	useEffect(() => {
		// Initialize TagCloud after component has mounted
		const container = "#tagcloud"; // use a valid selector for your container
		let radius = getRadius();

		// Store the TagCloud instance so we can destroy it later
		const tagCloudInstance = TagCloud(container, tags, {
			radius: radius,
			maxSpeed: "normal",
			initSpeed: "normal",
			direction: 135,
			keep: true
		});

		// Cleanup function to ensure the TagCloud instance is destroyed
		return () => {
			if (tagCloudInstance) {
				tagCloudInstance.destroy(); // Cleanup the TagCloud instance
				console.log("TagCloud unmounted.");
			}
		};
	}, [tags]); // Empty dependency array to run only on mount
	return (
		<>
			<SEO
				title="About | Jerome Gacoscosim | Virtual Assistant"
				description="Hire a Professional Virtual Assistant - Expertise in administrative support, social media management, customer service, scheduling, and data entry. Efficient, reliable, and skilled in optimizing your business workflow for maximum productivity."
				keywords="virtual assistant, administrative support, social media manager, data entry, customer service, business assistant, scheduling, task management, virtual support, remote assistant, productivity solutions, calendar management, smartva, smart va"
				ogImage="https://imgur.com/cyPPZPT"
				url={`${apiUrl}/about`}
				author="Jerome Gacoscosim"
			/>
			{isBigView && <ThemeDrawer />}
			<TextContentSection isSmallView={isSmallView}>
				<TextContentWrap>
					<TextContentHeading>About Me</TextContentHeading>
					<TextContentDescription>
						I’m a Frontend Developer, graphic artist, and web designer who blends creativity with
						code to craft digital experiences that not only work beautifully but also tell a story.
						Since 2019, I’ve been on a mission to master WordPress, JavaScript, and high-quality
						content creation as a Virtual Assistant. My journey began in a copy shop, and it’s
						evolved into building authority through my blog, YouTube channel, and social media.
					</TextContentDescription>
				</TextContentWrap>
			</TextContentSection>
			<ImageContentSection isSmallView={isSmallView}>
				<div id="tagcloud" className="tagcloud-container"></div>
				<style jsx>{`
					#tagcloud {
						font-family: "lores-bold-narrow";
						font-size: 14px;
						color: ${theme.palette.text.secondary};
						text-shadow: -2.5px -2.5px 0 #333, 2.5px -2.5px 0 #333, -2.5px 2.5px 0 #333,
							2.5px 2.5px 0 #333;
						transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
						z-index: -1;
						margin: 0;
						text-align: center;
					}

					@media screen and (min-width: 765px) {
						#tagcloud {
							font-size: 17px;
						}
					}

					@media screen and (min-width: 1024px) {
						#tagcloud {
							font-size: 22px;
						}
					}

					@media screen and (min-width: 1200px) {
						#tagcloud {
							font-size: 27px;
						}
					}

					@media screen and (min-width: 1366px) {
						#tagcloud {
							font-size: 30px;
						}
					}

					.tagcloud--item {
						text-align: center !important;
						transition: color 0.3s ease, transform 0.3s ease;
					}

					.tagcloud--item:hover {
						color: #ffd700;
						transform: scale(1.3);
					}
				`}</style>
			</ImageContentSection>
		</>
	);
};

export default About;
