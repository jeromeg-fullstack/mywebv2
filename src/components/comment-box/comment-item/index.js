import React, { useState } from "react";
import {
	Avatar,
	Typography,
	IconButton,
	Button,
	Collapse,
	Box,
	Divider,
	useTheme
} from "@mui/material";
import { ThumbUp as LikeIcon, Reply as ReplyIcon } from "@mui/icons-material";

const CommentItem = ({ comment }) => {
	const [showReplies, setShowReplies] = useState(false);
	const theme = useTheme();

	// Recursive rendering for nested replies
	return (
		<>
			<Box display="flex" sx={{ padding: "10px 15px" }}>
				<Avatar alt={comment.author.name} src={comment.author.avatar} />
				<Box ml={2}>
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
					<Box display="flex" alignItems="center" mt={1}>
						<IconButton size="small" sx={{ color: "gray" }}>
							<LikeIcon fontSize="small" sx={{ mr: ".5rem" }} /> {comment.likes || 0}{" "}
							{/* Show likes or 0 if none */}
						</IconButton>
						<Button
							onClick={() => setShowReplies(!showReplies)}
							sx={{ color: "gray", fontSize: "0.875rem" }}>
							{showReplies ? "Hide Replies" : `Show Replies (${comment.replies?.length || 0})`}
						</Button>
						<IconButton size="small" sx={{ color: "gray" }}>
							<ReplyIcon fontSize="small" />
						</IconButton>
					</Box>

					{/* Render nested replies */}
					{comment.replies && (
						<Collapse in={showReplies} timeout="auto" unmountOnExit>
							<Box mt={2} ml={4}>
								{comment.replies.map((reply) => (
									<CommentItem key={reply.commentId} comment={reply} />
								))}
							</Box>
						</Collapse>
					)}
				</Box>
			</Box>
			<Divider sx={{ borderColor: "#444" }} />
		</>
	);
};

export default CommentItem;
