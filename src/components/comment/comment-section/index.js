import React, { useState } from "react";
import { Box, Typography, Select, MenuItem } from "@mui/material";

const CommentSection = () => {
	const [sortBy, setSortBy] = (useState < "newest") | ("oldest" > "newest");

	// Sorting logic
	const sortedComments = [...data.comments].sort((a, b) => {
		const dateA = new Date(a.timestamp).getTime();
		const dateB = new Date(b.timestamp).getTime();
		return sortBy === "newest" ? dateB - dateA : dateA - dateB;
	});

	const handleSortChange = (event) => {
		setSortBy(event.target.value);
	};

	return (
		<Box sx={{ width: "100%", backgroundColor: "#111", padding: "16px", borderRadius: "8px" }}>
			<Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
				<Typography variant="h6" sx={{ color: "#fff" }}>
					03 Comments
				</Typography>
				<Box>
					<Typography component="span" sx={{ color: "#999", marginRight: 1 }}>
						Sort By:
					</Typography>
					<Select
						value={sortBy}
						onChange={handleSortChange}
						sx={{
							color: "#fff",
							backgroundColor: "#333",
							borderRadius: "4px",
							"& .MuiSelect-icon": { color: "#fff" }
						}}>
						<MenuItem value="newest">Newest</MenuItem>
						<MenuItem value="oldest">Oldest</MenuItem>
					</Select>
				</Box>
			</Box>

			{sortedComments.map((comment) => (
				<Comment key={comment.commentId} comment={comment} />
			))}
		</Box>
	);
};
