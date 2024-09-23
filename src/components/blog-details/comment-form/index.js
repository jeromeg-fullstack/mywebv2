import { useState } from "react";
import dynamic from "next/dynamic";

// ** Vendor Imports
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
	Box,
	TextField,
	styled,
	useTheme,
	CircularProgress,
	Typography,
	lighten,
	darken
} from "@mui/material";

const ThemedFormControl = dynamic(() => import("@/components/themed-form-control"), { ssr: false });

import { ThemedButton } from "@/components/buttons";

const CustomTextField = styled(TextField)({
	"& .MuiInputLabel-root": {
		color: "white" // Default label color
	},
	"& .MuiInputLabel-shrink": {
		color: "white" // Shrink label color when focused
	},
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: "gray" // Default border color
		},
		"&:hover fieldset": {
			borderColor: "darkgray" // Border color on hover
		},
		"&.Mui-focused fieldset": {
			borderColor: "white" // Border color when input is focused
		}
	}
});

const CommentForm = () => {
	const [submitting, setSubmitting] = useState(false);
	const theme = useTheme();

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
			email: "",
			message: ""
		}
	});

	return (
		<Box sx={{ padding: "20px 20px" }}>
			<Typography
				variant="h5"
				sx={(theme) => ({
					fontWeight: "bold",
					mb: 2,
					color: `${
						theme.palette.mode === "dark"
							? lighten(theme.palette.common.gray, 0.75)
							: theme.palette.common.black
					} !important`
				})}>
				Leave A Comment
			</Typography>
			<form>
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
					name="message"
					label="Message"
					errors={errors}
					multiline={true}
					maxRows={5}
				/>

				<Box>
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
	);
};

export default CommentForm;
