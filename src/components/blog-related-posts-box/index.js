import { Box, Typography, lighten } from "@mui/material";

const BlogRelatedPostsBox = ({ children }) => {
	return (
		<Box>
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
				Related Posts
			</Typography>
			{children}
		</Box>
	);
};

export default BlogRelatedPostsBox;
