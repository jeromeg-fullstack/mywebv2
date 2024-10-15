// components/NewsletterBox.js
import { Box, TextField, Button, Typography } from "@mui/material";

const NewsletterBox = () => {
	return (
		<Box sx={{ padding: "20px 0", textAlign: "center", borderTop: "1px solid #ddd" }}>
			<Typography variant="h6" gutterBottom>
				Subscribe For Daily Newsletter
			</Typography>
			<TextField
				label="Your email address"
				variant="outlined"
				sx={{ marginBottom: 2, width: "80%" }}
			/>
			<Button variant="contained">Sign Up</Button>
		</Box>
	);
};

export default NewsletterBox;
