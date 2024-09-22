import React, { useState } from "react";
import { Avatar, Typography, IconButton, Button, Collapse, Box, Divider } from "@mui/material";
import { ThumbUp as LikeIcon, Reply as ReplyIcon } from "@mui/icons-material";

const Comment = ({ comment }) => {
	const [showReplies, setShowReplies] = useState(false);

	// Recursive rendering for nested replies
	return (
		<>
			<Box display="flex" mb={2}>
				<Avatar alt={comment.author.name} src={comment.author.avatar} />
				<Box ml={2}>
					<Typography variant="subtitle1" color="white">
						{comment.author.name}
					</Typography>
					<Typography variant="caption" color="gray">
						{new Date(comment.timestamp).toLocaleString()}
					</Typography>
					<Typography variant="body2" color="lightgray" mt={1}>
						{comment.content}
					</Typography>
					<Box display="flex" alignItems="center" mt={1}>
						<IconButton size="small" sx={{ color: "gray" }}>
							<LikeIcon fontSize="small" /> {comment.likes || 0} {/* Show likes or 0 if none */}
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
									<Comment key={reply.commentId} comment={reply} />
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
