// components/Comments.js
import { Avatar, Box, Typography, Button } from "@mui/material";

const Comments = ({ comments }) => {
	return (
		<Box sx={{ padding: "20px 0", borderTop: "1px solid #ddd" }}>
			{comments.map((comment, index) => (
				<Box key={index} sx={{ marginBottom: 3 }}>
					<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
						<Avatar alt={comment.author} src={comment.authorImage} />
						<Typography variant="body2">{comment.author}</Typography>
					</Box>
					<Typography variant="body1" gutterBottom>
						{comment.text}
					</Typography>
					<Button variant="text">Reply</Button>
				</Box>
			))}
		</Box>
	);
};

export default Comments;
