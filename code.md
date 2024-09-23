``` 
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
```