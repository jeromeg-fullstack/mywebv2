import React from "react";
import { TextField, lighten, darken } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTextField = styled((props) => <TextField {...props} />)(({ theme }) => ({
	"& label": {
		color: theme.palette.mode === "dark" ? theme.palette.grey[300] : theme.palette.text.primary,
		fontSize: "1rem", // Customize label font size
		transition: "0.3s ease all"
	},
	"& label.Mui-focused": {
		color: theme.palette.mode === "dark" ? theme.palette.grey[300] : theme.palette.text.primary
	},
	"& label.MuiFormLabel-filled": {
		color: theme.palette.mode === "dark" ? theme.palette.grey[300] : theme.palette.text.primary
	},
	"& .MuiInputBase-root": {
		"& fieldset": {
			borderColor:
				theme.palette.mode === "dark" ? theme.palette.grey[300] : theme.palette.text.primary
		},
		"&:hover fieldset": {
			borderSize: "1px",
			borderColor:
				theme.palette.mode === "dark" ? theme.palette.grey[300] : theme.palette.text.primary
		},
		"&.Mui-focused fieldset": {
			borderColor:
				theme.palette.mode === "dark"
					? theme.palette.grey[300]
					: lighten(theme.palette.text.primary, 0.5)
		}
	},
	"& .MuiInputLabel-shrink": {
		color: theme.palette.mode === "dark" ? theme.palette.grey[300] : theme.palette.text.primary
	},
	"&:focused .MuiInputLabel-shrink": {
		color:
			theme.palette.mode === "dark"
				? theme.palette.grey[300]
				: darken(theme.palette.text.primary, 0.1)
	}
}));

export default function ReplyTextField(props) {
	return <StyledTextField {...props} />;
}
