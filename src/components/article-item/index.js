import React from "react";
import { Stack, Typography, Divider, styled, Box, lighten, useTheme } from "@mui/material";
import Image from "next/image";

const Item = styled(Box)({
	cursor: "pointer"
});

const ArticleItem = ({ title, author, publishedAt, image }) => {
	const theme = useTheme();
	return (
		<Item>
			<Stack
				direction="row"
				spacing={1}
				alignItems="center"
				divider={<Divider orientation="horizontal" flexItem />}>
				{/* Placeholder for image */}
				<Box className="post-thumb" sx={{ borderRadius: "5px" }}>
					<Image src={image} alt={title} height={70} width={90} />
				</Box>
				<Stack spacing={0.5}>
					<Typography
						variant="h6"
						component="h2"
						sx={(theme) => ({
							color: theme.palette.background.paper,
							transition: "color 0.4s ease, text-decoration 0.4s ease",
							"&:hover": {
								color: `${
									theme.palette.mode === "dark" ? lighten(theme.palette.common.gray, 0.75) : "#000"
								} !important`,
								textDecoration: "underline"
							}
						})}>
						{title}
					</Typography>
					<Typography
						variant="body2"
						sx={(theme) => ({
							color: `${
								theme.palette.mode === "dark"
									? lighten(theme.palette.common.gray, 0.75)
									: theme.palette.common.black
							} !important`
						})}>
						by {author} — {new Date(publishedAt).toLocaleDateString()}
					</Typography>
				</Stack>
			</Stack>
		</Item>
	);
};

export default ArticleItem;
