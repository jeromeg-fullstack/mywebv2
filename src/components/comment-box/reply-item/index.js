import React, { useState } from "react";
import { Avatar, Typography, IconButton, Box, useTheme } from "@mui/material";
import { ThumbUp as LikeIcon, Reply as ReplyIcon } from "@mui/icons-material";

const ReplyItem = ({ comment }) => {
	const [likeCount, setLikeCount] = useState(comment.likes || 0);
	const theme = useTheme();

	// Handle like button click
	const handleLike = () => {
		setLikeCount((prevCount) => prevCount + 1);
	};

	return (
		<>
			<Box display="flex" sx={{ padding: "10px 15px" }}>
				<Avatar alt={comment.author.name} src={comment.author.avatar} />
				<Box ml={2} sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
					<Typography
						variant="subtitle1"
						sx={{ color: theme.palette.primary.contrastText, fontWeight: 700, fontSize: "18px" }}>
						{comment.author.name}
					</Typography>
					<Typography
						variant="caption"
						sx={{ color: theme.palette.primary.contrastText, fontSize: "14px" }}>
						{new Date(comment.timestamp).toLocaleString()}
					</Typography>
					<Typography
						variant="body2"
						sx={{ color: theme.palette.primary.contrastText, fontSize: "16px" }}
						mt={1}>
						{comment.content}
					</Typography>

					{/* Like and Reply buttons */}
					<Box display="flex" alignItems="center" mt={1}>
						{/* Like Button */}
						<IconButton size="small" sx={{ color: "gray" }} onClick={handleLike}>
							<LikeIcon fontSize="small" sx={{ mr: ".5rem" }} /> {likeCount}
						</IconButton>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default ReplyItem;
