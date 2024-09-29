// components/BlogHeader.js
import { Avatar, Box, Typography, IconButton } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useTheme } from "@mui/material";
import formatNumberWithK from "@/utils/format-number-with-k";
import timeAgo from "@/utils/time-ago";
import _ from "lodash";

const BlogDetailsHeader = ({ data }) => {
	const theme = useTheme();
	if (_.isEmpty(data)) {
		return <>Loading...</>;
	}

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
			<Box
				sx={{
					gap: 1,
					display: "flex",
					justifyContent: "space-between",
					width: "100%"
				}}>
				<Box display="flex" alignItems="center">
					<Avatar
						alt={data.author}
						src={data.authorImage}
						sx={{
							marginRight: "1rem",
							backgroundColor:
								theme.palette.mode === "dark"
									? theme.palette.common.silver
									: theme.palette.common.black
						}}
					/>
					<Typography
						variant="h6"
						sx={{ color: theme.palette.text.primary, fontWeight: 700, mr: 2 }}>
						{data.author}
					</Typography>
					<IconButton>
						<CalendarTodayIcon />
					</IconButton>
					<Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
						{timeAgo(data.publishedAt)}
					</Typography>
				</Box>
				<Box display="flex" alignItems="center">
					<IconButton>
						<VisibilityIcon />
					</IconButton>
					<Typography variant="body2" sx={{ color: theme.palette.text.primary, mr: 3 }}>
						{formatNumberWithK(data.views)} Views
					</Typography>
					<Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
						{data.readTime} Min Read
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default BlogDetailsHeader;
