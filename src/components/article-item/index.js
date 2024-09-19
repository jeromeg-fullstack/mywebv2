import React from "react";
import {
	Stack,
	Typography,
	Divider,
	styled,
  Box
} from "@mui/material";

const Item = styled(Box)({});

const ArticleItem = ({ title, author, date }) => (
	<Item>
		<Stack
			direction="row"
			spacing={2}
			alignItems="center"
			divider={<Divider orientation="horizontal" flexItem />}>
			{/* Placeholder for image */}
			<div
				style={{
					width: 60,
					height: 60,
					backgroundColor: "#ccc",
					borderRadius: 4
				}}
			/>
			<Stack spacing={0.5}>
				<Typography variant="h6" component="h2">
					{title}
				</Typography>
				<Typography variant="body2" color="textSecondary">
					by {author} — {new Date(date).toLocaleDateString()}
				</Typography>
			</Stack>
		</Stack>
	</Item>
);

export default ArticleItem;
