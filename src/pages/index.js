import React, { useEffect, useRef, useState } from "react";
import { Link } from "next";
import dynamic from "next/dynamic";
const TypewriterEffect = dynamic(() => import("react-typewriter-effect"), { ssr: false });

import { gsap } from "gsap";
import { Box, useTheme } from "@mui/material";
import { useIsScreenSizes } from "@/hooks/useIsScreenSizes";
import initBlastText from "@/assets/js/blast";
import {
	ContentContainer,
	InnerContainer,
	GreetingText,
	DescriptionText,
	NameText,
	ImageContainer,
	SocialMediaContainer
} from "@/components/home-content";
import { SocialMediaButton } from "@/components/buttons";
import BouncingIcon from "@/components/bouncing-icon";
import ThemeDrawer from "@/components/theme-drawer";
import { useUiCtx } from "@/context/ui";
import SvgComponent from "@/components/svg-component";
import SEO from "@/components/seo";

const socialLinks = [
	{ code: "e92f", href: "https://www.facebook.com/smartvirtualassitant" },
	{ code: "e902", href: "https://twitter.com" },
	{ code: "e934", href: "https://instagram.com" },
	{ code: "e922", href: "https://linkedin.com" },
	{ code: "e900", href: "https://youtube.com" },
	{ code: "e930", href: "https://github.com" }
];

export default function Home() {
	const [isAnimated, setIsAnimated] = useState(false);
	const svgRef = useRef(null);
	const imageRef = useRef(null);
	const blastRef = useRef(null);
	const apiUrl = process.env.NEXT_PUBLIC_API_URL;
	const theme = useTheme();
	const {
		state: { isLoading }
	} = useUiCtx();

	const { isMobileXS, isMobileS, isMobileM, isMobileL, isTablet, isLaptop, isLaptopL, isDesktop } =
		useIsScreenSizes();

	const isSmallView = isMobileXS || isMobileS || isMobileM || isMobileL;
	const isBigView = isLaptop || isLaptopL || isDesktop;

	useEffect(() => {
		if (!isLoading) {
			const tl = gsap.timeline();

			tl.add(() => {
				initBlastText();
				$(".text-zone h2").blast({ delimiter: "character" });
				$(".text-zone .blast").each(function (index) {
					$(this)
						.css({ opacity: 0, top: "-500px", position: "relative", visibility: "visible" })
						.delay(300 * index)
						.animate({ top: "0px", opacity: 1 }, 500, () => {
							$(this).addClass("animate__animated animate__rubberBand");
						});
				});
			}, "+=0.5");

			const paths = svgRef.current?.querySelectorAll("path");
			if (paths) {
				paths.forEach((path, index) => {
					const length = path.getTotalLength();
					tl.fromTo(
						path,
						{
							strokeDasharray: length,
							strokeDashoffset: length
						},
						{
							strokeDashoffset: 0,
							duration: 2 + index * 0.2,
							ease: "power4.inOut",
							onComplete: () => {
								if (index === paths.length - 1) {
									gsap.to(svgRef.current, { opacity: 0, duration: 1 });
									setIsAnimated(true);
								}
							}
						},
						0
					);
				});
			}
		}
	}, [isLoading]);

	return (
		<>
			<SEO
				title="Home | Jerome Gacoscosim | Virtual Assistant"
				description="Hire a Professional Virtual Assistant - Expertise in administrative support, social media management, customer service, scheduling, and data entry. Efficient, reliable, and skilled in optimizing your business workflow for maximum productivity."
				keywords="virtual assistant, administrative support, social media manager, data entry, customer service, business assistant, scheduling, task management, virtual support, remote assistant, productivity solutions, calendar management"
				ogImage="https://imgur.com/cyPPZPT"
				url={`${apiUrl}`}
				author="Jerome Gacoscosim"
			/>

			{isBigView && <ThemeDrawer />}

			<ContentContainer isSmallView={isSmallView}>
				<InnerContainer isSmallView={isSmallView}>
					<GreetingText isSmallView={isSmallView} variant="h1">
						Hello! I&apos;m
					</GreetingText>
					<div className="text-zone">
						<NameText ref={blastRef} variant="h2">
							Jerome,
						</NameText>
					</div>
					<Box sx={{ display: "flex", gap: 1 }}>
						<span>
							<DescriptionText
								isSmallView={isSmallView}
								isMobileXS={isMobileXS}
								isMobileS={isMobileS}
								isMobileM={isMobileM}
								isMobileL={isMobileL}
								isTablet={isTablet}
								isLaptop={isLaptop}
								isLaptopL={isLaptopL}>
								Hire me as your
							</DescriptionText>
						</span>
						{!isLoading && (
							<span>
								<TypewriterEffect
									textStyle={{
										fontFamily: "Titillium Web",
										fontWeight: "bold",
										fontSize:
											isMobileXS || isMobileS || isMobileM
												? "13px"
												: isMobileL || isTablet
												? "16px"
												: isLaptop || isLaptopL
												? "24px"
												: "26px",
										color: theme.palette.mode === "dark" ? "#fff" : theme.palette.text.primary,
										letterSpacing: "1.5px",
										textShadow: "0px 0px 1px rgba(0,0,0,.5)"
									}}
									startDelay={100}
									cursorColor="#3F3D56"
									multiText={[
										"Social Media Manager",
										"Administrative Support",
										"Data Entry Specialist",
										"Business Assistant",
										"Scheduler",
										"Remote Assistant",
										"SEO support",
										"Web Developer",
										"Content Creator",
										"Graphic Designer",
										"Virtual Assistant"
									]}
									typeSpeed={100}
									scrollArea={null}
								/>
							</span>
						)}
					</Box>
					<SocialMediaContainer isSmallView={isSmallView}>
						{socialLinks.map((item, index) => (
							<SocialMediaButton key={index} href={item.href}>
								<BouncingIcon code={item.code} className="icon" />
							</SocialMediaButton>
						))}
					</SocialMediaContainer>
				</InnerContainer>
			</ContentContainer>

			<ImageContainer isSmallView={isSmallView}>
				{!isLoading && (
					<>
						<Box
							sx={{
								position: "absolute",
								top: ["60%", "60%", "50%"],
								left: "50%",
								transform: "translate(-50%, -50%)",
								width: ["196px", "246px", "396px", "496px"],
								height: ["196px", "246px", "396px", "496px"],
								objectFit: "contain",
								zIndex: 2
							}}>
							<SvgComponent ref={svgRef} />
						</Box>
						<Box
							ref={imageRef}
							className={`animate__animated  ${isAnimated ? "animate__bounceInDown" : ""}`}
							component="img"
							src="/images/jumbotron/jumbotron@1x.png"
							sx={{
								width: ["200px", "250px", "400px", "500px"],
								height: ["200px", "250px", "400px", "500px"],
								objectFit: "contain",
								zIndex: 2,
								visibility: isAnimated ? "visible" : "hidden",
								opacity: isAnimated ? 1 : 0
							}}
						/>
					</>
				)}
			</ImageContainer>
		</>
	);
}
