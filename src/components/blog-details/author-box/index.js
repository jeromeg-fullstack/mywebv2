// components/AuthorBox.js
import { Avatar, Box, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const AuthorBox = ({ author }) => {
	return (
		<Box sx={{ padding: "20px 0", borderTop: "1px solid #ddd" }}>
			<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
				<Avatar alt={author.name} src={author.image} />
				<Box>
					<Typography variant="h6">{author.name}</Typography>
					<Typography variant="body2">{author.bio}</Typography>
					<Box>
						<IconButton>
							<LinkedInIcon />
						</IconButton>
						<IconButton>
							<TwitterIcon />
						</IconButton>
						<IconButton>
							<YouTubeIcon />
						</IconButton>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default AuthorBox;
