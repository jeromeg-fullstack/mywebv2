// components/BlogContent.js
import { Box, Typography } from "@mui/material";

const BlogContent = ({ content }) => {
	return (
		<Box sx={{ padding: "20px 0" }}>
			{content.map((section, index) => (
				<Typography key={index} variant="body1" gutterBottom>
					{section.text}
				</Typography>
			))}
		</Box>
	);
};

export default BlogContent;
