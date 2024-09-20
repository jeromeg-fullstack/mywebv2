// components/BlogTagsAndShare.js
import { Box, Chip, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const BlogTagsAndShare = ({ tags }) => {
	return (
		<Box sx={{ display: "flex", justifyContent: "space-between", padding: "20px 0" }}>
			<Box>
				{tags.map((tag, index) => (
					<Chip key={index} label={tag} sx={{ marginRight: 1 }} />
				))}
			</Box>
			<Box>
				<IconButton>
					<FacebookIcon />
				</IconButton>
				<IconButton>
					<TwitterIcon />
				</IconButton>
				<IconButton>
					<PinterestIcon />
				</IconButton>
				<IconButton>
					<LinkedInIcon />
				</IconButton>
			</Box>
		</Box>
	);
};

export default BlogTagsAndShare;
