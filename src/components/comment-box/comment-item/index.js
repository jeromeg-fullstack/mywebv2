import React, { useState } from "react";
import {
	Avatar,
	Typography,
	IconButton,
	Button,
	Collapse,
	Box,
	Divider,
	useTheme,
	TextField
} from "@mui/material";
import { ThumbUp as LikeIcon, Reply as ReplyIcon } from "@mui/icons-material";
import ReplyItem from "./../reply-item/index";
import ReplyTextField from "./../../reply-text-field/index";

const CommentItem = ({ comment }) => {
	const [showReplies, setShowReplies] = useState(false);
	const [likeCount, setLikeCount] = useState(comment.likes || 0);
	const [showReplyForm, setShowReplyForm] = useState(false);
	const [replyText, setReplyText] = useState("");
	const [replies, setReplies] = useState(comment.replies || []);

	const theme = useTheme();

	// Handle like button click
	const handleLike = () => {
		setLikeCount((prevCount) => prevCount + 1);
	};

	// Handle reply submission
	const handleReplySubmit = (e) => {
		e.preventDefault();
		if (replyText.trim()) {
			const newReply = {
				commentId: replies.length + 1, // Assuming commentId is just sequential
				author: { name: "You", avatar: "" }, // You can modify this with real user data
				timestamp: new Date().toISOString(),
				content: replyText,
				likes: 0,
				replies: []
			};
			setReplies([...replies, newReply]);
			setReplyText("");
			setShowReplyForm(false); // Close the reply form after submission
		}
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

						{/* Toggle Replies */}
						<Button
							onClick={() => setShowReplies(!showReplies)}
							sx={{ color: "gray", fontSize: "0.875rem" }}>
							{showReplies ? "Hide Replies" : `Show Replies (${replies.length})`}
						</Button>

						{/* Toggle Reply Form */}
						<IconButton
							size="small"
							sx={{ color: "gray" }}
							onClick={() => setShowReplyForm(!showReplyForm)}>
							<ReplyIcon fontSize="small" />
						</IconButton>
					</Box>

					{/* Reply Form */}
					{showReplyForm && (
						<Box mt={2} mb={2}>
							<form onSubmit={handleReplySubmit}>
								<ReplyTextField
									value={replyText}
									onChange={(e) => setReplyText(e.target.value)}
									label="Write a reply..."
									fullWidth
									multiline
									rows={2}
									variant="outlined"
									sx={{ marginBottom: "10px" }}
								/>
								<Button type="submit" variant="contained" color="primary">
									Submit Reply
								</Button>
							</form>
						</Box>
					)}

					{/* Render Nested Replies */}
					{replies.length > 0 && (
						<Collapse in={showReplies} timeout="auto" unmountOnExit>
							<Box mt={2} ml={4}>
								{replies.map((reply) => (
									<ReplyItem key={reply.commentId} comment={reply} />
								))}
							</Box>
						</Collapse>
					)}
				</Box>
			</Box>
			{/* <Divider sx={{ borderColor: "#444" }} /> */}
		</>
	);
};

export default CommentItem;
