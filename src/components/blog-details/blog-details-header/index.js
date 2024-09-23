// components/BlogHeader.js
import { Avatar, Box, Typography, IconButton } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useTheme } from "@mui/material";

const initData = {
	title: "Understanding React Components",
	author: "Jane Doe",
	authorImage: "https://example.com/jane-doe.jpg",
	date: "September 20, 2024",
	views: 12,
	readTime: 5
};

const BlogDetailsHeader = ({ data = initData }) => {
	const theme = useTheme();
	return (
		<Box sx={{ padding: "20px 0", borderBottom: "1px solid #ddd", mb: "2rem" }}>
			<Box mb="1.5rem">
				<Typography
					variant="h3"
					gutterBottom
					fontSize={32}
					fontWeight={600}
					sx={{ color: theme.palette.text.primary }}>
					{data.title}
				</Typography>
				<Typography
					variant="h4"
					fontSize={20}
					fontWeight={400}
					sx={{ color: theme.palette.text.primary }}>
					{data.description.substring(0, 70)}...
				</Typography>
			</Box>
			<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
				<Avatar
					alt={data.author}
					src={data.authorImage}
					sx={{
						backgroundColor:
							theme.palette.mode === "dark"
								? theme.palette.common.silver
								: theme.palette.common.black
					}}
				/>
				<Typography variant="h6" sx={{ color: theme.palette.text.primary, fontWeight: 700 }}>
					{data.author}
				</Typography>
				<Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
					— {data.date}
				</Typography>
				<IconButton>
					<CalendarTodayIcon />
				</IconButton>
				<IconButton>
					<VisibilityIcon />
				</IconButton>
				<Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
					{data.views}k Views
				</Typography>
				<Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
					{data.readTime} Min Read
				</Typography>
			</Box>
		</Box>
	);
};

export default BlogDetailsHeader;
