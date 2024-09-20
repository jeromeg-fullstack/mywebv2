// components/BlogHeader.js
import { Avatar, Box, Typography, Chip, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import VisibilityIcon from "@mui/icons-material/Visibility";

const BlogDetailsHeader = ({ data }) => {
	return (
		<Box sx={{ padding: "20px 0", borderBottom: "1px solid #ddd" }}>
			<Typography variant="h3" gutterBottom>
				{data.title}
			</Typography>
			<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
				<Avatar alt={data.author} src={data.authorImage} />
				<Typography variant="body2">{data.author}</Typography>
				<Typography variant="body2">— {data.date}</Typography>
				<IconButton>
					<CalendarTodayIcon />
				</IconButton>
				<IconButton>
					<VisibilityIcon />
				</IconButton>
				<Typography variant="body2">{data.views}k Views</Typography>
				<Typography variant="body2">{data.readTime} Min Read</Typography>
			</Box>
		</Box>
	);
};

export default BlogDetailsHeader;
