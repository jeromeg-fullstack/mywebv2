// components/CommentForm.js
import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";

const CommentForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [comment, setComment] = useState("");

	const handleSubmit = () => {
		// Handle comment submission
	};

	return (
		<Box sx={{ padding: "20px 0" }}>
			<TextField
				label="Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
				fullWidth
				sx={{ marginBottom: 2 }}
			/>
			<TextField
				label="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				fullWidth
				sx={{ marginBottom: 2 }}
			/>
			<TextField
				label="Comment"
				value={comment}
				onChange={(e) => setComment(e.target.value)}
				fullWidth
				multiline
				rows={4}
				sx={{ marginBottom: 2 }}
			/>
			<Button variant="contained" onClick={handleSubmit}>
				Submit
			</Button>
		</Box>
	);
};

export default CommentForm;
