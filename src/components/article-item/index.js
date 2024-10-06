import React from "react";
import { useRouter } from "next/router";
import { Stack, Typography, Divider, styled, Box, lighten, useTheme } from "@mui/material";
import Image from "next/image";
import timeAgo from "@/utils/time-ago";

const Item = styled(Box)({
	cursor: "pointer"
});

const ArticleItem = ({ title, author, publishedAt, image, slug }) => {
	const theme = useTheme();
	const router = useRouter();
	const handleClick = () => {
		router.push({
			pathname: `/blog/${slug}`
		});
	};
	return (
		<Item onClick={handleClick}>
			<Stack
				direction="row"
				spacing={1}
				alignItems="center"
				divider={<Divider orientation="horizontal" flexItem />}>
				{/* Placeholder for image */}
				<Box className="post-thumb" sx={{ borderRadius: "5px", boxShadow: theme.shadows[1] }}>
					<Image src={image} alt={title} height={70} width={90} />
				</Box>
				<Stack spacing={0.5}>
					<Typography
						variant="h6"
						component="h2"
						sx={{
							color: theme.palette.background.paper,
							lineHeight: "1.30rem",
							transition: "color 0.4s ease, text-decoration 0.4s ease",
							"&:hover": {
								color: `${
									theme.palette.mode === "dark" ? lighten(theme.palette.common.gray, 0.75) : "#000"
								} !important`,
								textDecoration: "underline"
							}
						}}>
						{title}
					</Typography>
					<Typography
						variant="body2"
						sx={{
							color: `${
								theme.palette.mode === "dark"
									? lighten(theme.palette.common.gray, 0.75)
									: theme.palette.common.black
							} !important`
						}}>
						by {author} — {timeAgo(publishedAt)}
					</Typography>
				</Stack>
			</Stack>
		</Item>
	);
};

export default ArticleItem;
