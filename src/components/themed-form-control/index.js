import React from "react";
import { FormControl, TextField, FormHelperText } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Controller } from "react-hook-form";

const ThemedFormControl = ({ control, name, label, errors, multiline, maxRows, sx }) => {
	const theme = useTheme(); // Access the current theme

	return (
		<FormControl
			fullWidth
			sx={{
				...sx,
				mb: "1rem",
				"& .MuiInputLabel-root": {
					color:
						theme.palette.mode === "dark" ? theme.palette.grey[300] : theme.palette.text.primary
				},
				"& .MuiInputLabel-root.MuiInputLabel-shrink": {
					color: theme.palette.mode === "dark" ? "white" : theme.palette.text.primary
				},
				"& .MuiOutlinedInput-root": {
					"& fieldset": {
						borderColor:
							theme.palette.mode === "dark" ? theme.palette.grey[300] : theme.palette.grey[500]
					},
					"&:hover fieldset": {
						borderColor: theme.palette.primary.main
					},
					"&.Mui-focused fieldset": {
						borderColor: theme.palette.primary.main
					},
					"&:focus .MuiInputLabel-root.MuiInputLabel-shrink": {
						color: theme.palette.mode === "dark" ? "white" : theme.palette.text.primary
					}
				}
			}}>
			<Controller
				name={name}
				control={control}
				rules={{ required: true }}
				render={({ field: { value, onChange } }) => (
					<TextField
						label={`${label}*`}
						value={value}
						onChange={onChange}
						error={Boolean(errors[name])}
						multiline={multiline}
						maxRows={maxRows}
						variant="filled"
						sx={{
							"& label": {
								color: theme.palette.mode === "dark" ? "white" : theme.palette.text.primary
							},
							padding: 0
						}}
					/>
				)}
			/>
			{errors[name] && (
				<FormHelperText sx={{ color: "error.main" }} id={name}>
					This field is required
				</FormHelperText>
			)}
		</FormControl>
	);
};

export default ThemedFormControl;
