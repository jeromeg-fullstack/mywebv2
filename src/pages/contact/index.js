import { useState } from "react";
import dynamic from "next/dynamic";

import { Box } from "@mui/material";

// ** Vendor Imports
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// **MUI Imports
import { CircularProgress } from "@mui/material";

import {
	ImageContentSection,
	TextContentHeading,
	TextContentDescription,
	ContactContentSection,
	ContactTextContentWrap
} from "@/components/global-contents/index";
import ThemeDrawer from "@/components/theme-drawer";
import { useIsScreenSizes } from "@/hooks/useIsScreenSizes";
import GoogleMaps from "@/components/google-maps";
import { ThemedButton } from "@/components/buttons";
import SEO from "@/components/seo";

const ThemedFormControl = dynamic(() => import("@/components/themed-form-control"), { ssr: false });

const Contact = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
	const { isMobileXS, isMobileS, isMobileM, isMobileL, isLaptop, isLaptopL, isDesktop } =
		useIsScreenSizes();

	const isSmallView = isMobileXS || isMobileS || isMobileM || isMobileL;
	const isBigView = isLaptop || isLaptopL || isDesktop;

	const [submitting, setSubmitting] = useState(false);

	const schema = yup.object().shape({
		fullName: yup.string().required(),
		companyName: yup.string().required(),
		email: yup.string().email().required(),
		message: yup.string().required()
	});

	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(schema),
		mode: "onTouched",
		defaultValues: {
			fullName: "",
			companyName: "",
			email: "",
			message: ""
		}
	});

	return (
		<>
			<SEO
				title="Contact | Jerome Gacoscosim | Virtual Assistant"
				description="Hire a Professional Virtual Assistant - Expertise in administrative support, social media management, customer service, scheduling, and data entry. Efficient, reliable, and skilled in optimizing your business workflow for maximum productivity."
				keywords="virtual assistant, administrative support, social media manager, data entry, customer service, business assistant, scheduling, task management, virtual support, remote assistant, productivity solutions, calendar management"
				ogImage="https://imgur.com/cyPPZPT"
				url={`${apiUrl}/contact`}
				author="Jerome Gacoscosim"
			/>
			{isBigView && <ThemeDrawer />}
			<ContactContentSection isSmallView={isSmallView}>
				<ContactTextContentWrap isSmallView={isSmallView}>
					<Box>
						<TextContentHeading>Contact Me</TextContentHeading>
						<TextContentDescription
						// sx={{ alignSelf: "initial" }}
						>
							I love taking on freelance projects, specially the challenging and ambitious ones.
							However, if you have another in mind, feel free to contact me and lets talk about it
							over a cup of coffee ☕.
						</TextContentDescription>
						<Box
							sx={{
								height: "100%",
								width: "100%",
								mt: "1rem"
							}}>
							<form onSubmit={handleSubmit()}>
								<Box sx={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
									<ThemedFormControl
										control={control}
										name="fullName"
										label="Fullname"
										errors={errors}
										multiline={false}
									/>
									<ThemedFormControl
										control={control}
										name="companyName"
										label="Company Name"
										errors={errors}
										multiline={false}
									/>
								</Box>

								<ThemedFormControl
									control={control}
									name="email"
									label="Email"
									errors={errors}
									multiline={false}
								/>

								<ThemedFormControl
									control={control}
									name="message"
									label="Message"
									errors={errors}
									multiline={true}
									maxRows={5}
								/>

								<Box sx={{}}>
									<ThemedButton fullWidth variant="contained" disabled={submitting}>
										{submitting ? (
											<CircularProgress disableShrink={true} size={25} color="inherit" />
										) : (
											"Send Message"
										)}
									</ThemedButton>
								</Box>
							</form>
						</Box>
					</Box>
				</ContactTextContentWrap>
			</ContactContentSection>
			{isBigView && (
				<ImageContentSection isSmallView={isSmallView}>
					<GoogleMaps />
				</ImageContentSection>
			)}
		</>
	);
};

export default Contact;
