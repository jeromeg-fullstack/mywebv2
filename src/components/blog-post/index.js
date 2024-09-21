import React from "react";
import { useRouter } from "next/router";
import { Box, Typography, Link, Stack, lighten, useTheme } from "@mui/material";

const CalendarIcon = () => <span>📅</span>; // Replace with Icomoon component
const ChatIcon = () => <span>💬</span>; // Replace with Icomoon component
const EyeIcon = () => <span>👁️</span>; // Replace with Icomoon component

const BlogPost = ({
	title,
	image,
	tag,
	author,
	publishedAt,
	comments,
	views,
	description,
	slug,
	blocks
}) => {
	const theme = useTheme();
	const router = useRouter();
	const handleClick = (blogPost) => {
		router.push({
			pathname: `/blog/${slug}`
		});
	};
	return (
		<Box
			sx={{
				marginBottom: "60px",
				paddingBottom: "40px",
				borderBottom: `solid 1px ${theme.palette.background.paper}`
				// "&:hover": {
				// 	borderBottom: `solid 2px ${
				// 		theme.palette.mode === "dark"
				// 			? lighten(theme.palette.common.gray, 0.75)
				// 			: theme.palette.common.black
				// 	} !important`
				// }
			}}>
			{/* Image Section */}
			<Box
				sx={(theme) => ({
					display: "block",
					marginBottom: "16px"
				})}>
				<Box component="img" src={image} alt={title} sx={{ width: "100%", height: "auto" }} />
			</Box>

			{/* Tag Section */}
			<Box
				sx={{
					display: "inline-block",
					marginBottom: "16px",
					backgroundColor: theme.palette.background.default,
					padding: "2.5px 10px",
					borderRadius: "5px"
				}}>
				<Typography
					sx={(theme) => ({
						textTransform: "uppercase",
						color: `${
							theme.palette.mode === "dark"
								? lighten(theme.palette.common.gray, 0.75)
								: theme.palette.common.black
						} !important`,
						fontSize: "20px",
						fontWeight: 500
					})}>
					{tag}
				</Typography>
			</Box>

			{/* Title Section */}
			<Box sx={{ marginBottom: "16px", cursor: "pointer" }} onClick={handleClick}>
				<Typography
					variant="h4"
					component="h4"
					sx={{
						color: `${
							theme.palette.mode === "dark"
								? lighten(theme.palette.common.gray, 0.75)
								: theme.palette.common.black
						} !important`,
						textDecoration: "none",
						"&:hover": { textDecoration: "underline" }
					}}>
					{title}
				</Typography>
			</Box>

			{/* Info Section (Author and Date) */}
			<Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "24px" }}>
				<Stack direction="row" spacing={2}>
					<Typography
						variant="body2"
						sx={{
							color: `${
								theme.palette.mode === "dark"
									? lighten(theme.palette.common.gray, 0.75)
									: theme.palette.common.black
							} !important`
						}}>
						by{" "}
						<Link
							href={`/blog/${slug}`}
							sx={{
								marginLeft: "4px",
								color: `${
									theme.palette.mode === "dark"
										? lighten(theme.palette.common.gray, 0.75)
										: theme.palette.common.black
								} !important`
							}}>
							{author}
						</Link>
					</Typography>

					<Typography
						variant="body2"
						sx={{
							display: "flex",
							alignItems: "center",
							color: `${
								theme.palette.mode === "dark"
									? lighten(theme.palette.common.gray, 0.75)
									: theme.palette.common.black
							} !important`
						}}>
						<CalendarIcon />
						<Link
							href="#"
							sx={{
								marginLeft: "4px",
								color: `${
									theme.palette.mode === "dark"
										? lighten(theme.palette.common.gray, 0.75)
										: theme.palette.common.black
								} !important`
							}}>
							{publishedAt}
						</Link>
					</Typography>
				</Stack>

				{/* Interaction Icons (Comments and Views) */}
				<Stack direction="row" spacing={2}>
					<Typography
						variant="body2"
						sx={(theme) => ({
							display: "flex",
							alignItems: "center",
							color: `${
								theme.palette.mode === "dark"
									? lighten(theme.palette.common.gray, 0.75)
									: theme.palette.common.black
							} !important`
						})}>
						<ChatIcon />
						<span
							style={{
								marginLeft: "4px",
								color: `${
									theme.palette.mode === "dark"
										? lighten(theme.palette.common.gray, 0.75)
										: theme.palette.common.black
								} !important`
							}}>
							{comments}
						</span>
					</Typography>
					<Typography
						variant="body2"
						sx={{
							display: "flex",
							alignItems: "center",
							color: `${
								theme.palette.mode === "dark"
									? lighten(theme.palette.common.gray, 0.75)
									: theme.palette.common.black
							} !important`
						}}>
						<EyeIcon />
						<span style={{ marginLeft: "4px" }}>{views}</span>
					</Typography>
				</Stack>
			</Box>

			{/* Description Section */}
			<Typography
				variant="body2"
				sx={{
					color: `${
						theme.palette.mode === "dark"
							? lighten(theme.palette.common.gray, 0.75)
							: theme.palette.common.black
					} !important`
				}}>
				{description}
			</Typography>
		</Box>
	);
};

export default BlogPost;
