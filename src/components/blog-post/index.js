import React from "react";
import { Box, Typography, Link, Stack } from "@mui/material";

const CalendarIcon = () => <span>📅</span>; // Replace with Icomoon component
const ChatIcon = () => <span>💬</span>; // Replace with Icomoon component
const EyeIcon = () => <span>👁️</span>; // Replace with Icomoon component

const BlogPost = ({ title, image, tag, author, date, comments, views, description }) => {
	return (
		<Box
			sx={{
				marginBottom: "60px",
				paddingBottom: "40px",
				borderBottom: "1px solid #E6E6E6",
				"&:hover": {
					borderColor: "#3A3B3E" // Adjust for dark mode if needed
				}
			}}>
			{/* Image Section */}
			<Link href="Blog-Details.html" sx={{ display: "block", marginBottom: "16px" }}>
				<Box component="img" src={image} alt={title} sx={{ width: "100%", height: "auto" }} />
			</Link>

			{/* Tag Section */}
			<Box sx={{ display: "flex", marginBottom: "16px" }}>
				<Link
					href="Blog-Details.html"
					sx={{ textTransform: "uppercase", color: "#007bff", fontWeight: 500 }}>
					{tag}
				</Link>
			</Box>

			{/* Title Section */}
			<Typography variant="h4" component="h4" sx={{ color: "#171717", marginBottom: "16px" }}>
				<Link
					href="#"
					sx={{
						color: "#007bff",
						textDecoration: "none",
						"&:hover": { textDecoration: "underline" }
					}}>
					{title}
				</Link>
			</Typography>

			{/* Info Section (Author and Date) */}
			<Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "24px" }}>
				<Stack direction="row" spacing={2}>
					<Typography variant="body2" sx={{ color: "#171717" }}>
						by{" "}
						<Link href="Blog-Details.html" sx={{ marginLeft: "4px", color: "#007bff" }}>
							{author}
						</Link>
					</Typography>

					<Typography
						variant="body2"
						sx={{ display: "flex", alignItems: "center", color: "#171717" }}>
						<CalendarIcon />
						<Link href="Blog-Details.html" sx={{ marginLeft: "4px", color: "#171717" }}>
							{date}
						</Link>
					</Typography>
				</Stack>

				{/* Interaction Icons (Comments and Views) */}
				<Stack direction="row" spacing={2}>
					<Typography
						variant="body2"
						sx={{ display: "flex", alignItems: "center", color: "#171717" }}>
						<ChatIcon />
						<span style={{ marginLeft: "4px" }}>{comments}</span>
					</Typography>
					<Typography
						variant="body2"
						sx={{ display: "flex", alignItems: "center", color: "#171717" }}>
						<EyeIcon />
						<span style={{ marginLeft: "4px" }}>{views}</span>
					</Typography>
				</Stack>
			</Box>

			{/* Description Section */}
			<Typography variant="body2" sx={{ color: "#6c757d" }}>
				{description}
			</Typography>
		</Box>
	);
};

export default BlogPost;
