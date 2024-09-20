// components/TagGroup.js
import React, { useState } from "react";
import { Box, Typography, lighten } from "@mui/material";
import TagChip from "@/components/tag-chip";

const initialTags = [
	{ label: "Digital Marketing", selected: false },
	{ label: "Social Media", selected: false },
	{ label: "Startup", selected: false },
	{ label: "Webdesign", selected: false },
	{ label: "UX/UI", selected: false },
	{ label: "SEO & SEM", selected: false },
	{ label: "Development", selected: false },
	{ label: "Tips", selected: false }
];

const TagGroup = () => {
	const [tags, setTags] = useState(initialTags);

	const handleTagClick = (index) => {
		const updatedTags = tags.map((tag, i) =>
			i === index ? { ...tag, selected: !tag.selected } : tag
		);
		setTags(updatedTags);
	};

	return (
		<Box mt={1}>
			<Typography
				variant="h5"
				sx={(theme) => ({
					color: `${
						theme.palette.mode === "dark"
							? lighten(theme.palette.common.gray, 0.75)
							: theme.palette.common.black
					} !important`,
					fontWeight: "bold",
					marginBottom: "16px"
				})}>
				Popular Tags
			</Typography>
			<Box sx={{ display: "flex", flexWrap: "wrap" }}>
				{tags.map((tag, index) => (
					<TagChip
						sx={(theme) => ({
							color: `${
								theme.palette.mode === "dark"
									? lighten(theme.palette.common.gray, 0.75)
									: theme.palette.common.black
							} !important`
						})}
						key={index}
						label={tag.label}
						selected={tag.selected}
						onClick={() => handleTagClick(index)}
					/>
				))}
			</Box>
		</Box>
	);
};

export default TagGroup;
