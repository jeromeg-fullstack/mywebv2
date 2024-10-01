import React, { useState, useEffect } from "react";
import { Box, Typography, Select, MenuItem, useTheme, darken, lighten } from "@mui/material";
import CommentItem from "../comment-item";

const CommentSection = ({ comments }) => {
	const [newData, setNewData] = useState([]);
	const [sortBy, setSortBy] = useState("newest");
	const theme = useTheme();

	// Sorting logic
	const sortedComments = [...newData].sort((a, b) => {
		const dateA = new Date(a.timestamp).getTime();
		const dateB = new Date(b.timestamp).getTime();
		return sortBy === "newest" ? dateB - dateA : dateA - dateB;
	});

	const handleSortChange = (event) => {
		setSortBy(event.target.value);
	};

	useEffect(() => {
		if (comments.length > 0) {
			setNewData(comments);
		}
	}, [comments]);

	return (
		<>
			{newData.length > 0 ? (
				<Box
					sx={{
						width: "100%",
						background:
							theme.palette.mode === "dark"
								? `url(/images/background/body-bg-dark.png)`
								: `url(/images/background/body-bg-light.png)`,
						backgroundAttachment: "fixed",
						padding: "16px",
						borderRadius: "8px",
						boxShadow: `0px 0px 3px 0px rgba(0,0,0,0.25)`
					}}>
					<Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
						<Typography variant="h6" sx={{ color: theme.palette.text.primary }} fontWeight={700}>
							{newData.length} Comments
						</Typography>
						<Box>
							<Typography
								component="span"
								sx={{ color: theme.palette.text.primary, marginRight: 1 }}>
								Sort By:
							</Typography>
							<Select
								value={sortBy}
								onChange={handleSortChange}
								sx={{
									color: theme.palette.mode === "dark" ? "#000" : "#fff",
									backgroundColor: theme.palette.primary.contrastText,
									borderRadius: "4px",
									"& .MuiSelect-icon": {
										color: theme.palette.mode === "dark" ? "#000" : "#fff"
									},
									"& .MuiSelect-select": { py: "5px" }
								}}
								MenuProps={{
									PaperProps: {
										sx: {
											bgcolor: theme.palette.primary.contrastText,
											"& .MuiMenuItem-root": {
												color: theme.palette.primary.main,
												padding: "5px 10px !important"
											},
											"& .MuiMenuItem-root:hover": {
												bgcolor:
													theme.palette.mode === "dark"
														? darken(theme.palette.background.paper, 0.15)
														: lighten(theme.palette.background.paper, 0.1)
											}
										}
									}
								}}>
								<MenuItem value="newest">Newest</MenuItem>
								<MenuItem value="oldest">Oldest</MenuItem>
							</Select>
						</Box>
					</Box>

					{sortedComments.map((comment) => (
						<CommentItem key={comment.commentId} comment={comment} />
					))}
				</Box>
			) : null}
		</>
	);
};

export default CommentSection;
