// CategoryWidget.js
import React from "react";
import { Stack, Typography, lighten, darken } from "@mui/material";
import CategoryWidgetItem from "@/components/category-widget-item";

const categories = [
	{ name: "Marketing", count: 10, link: "/blog-grid" },
	{ name: "Development", count: 21, link: "/blog-grid" },
	{ name: "Digital Marketing", count: 30, link: "/blog-grid" },
	{ name: "Web Design", count: 9, link: "/blog-grid" },
	{ name: "Business", count: 5, link: "/blog-grid" }
];

const CategoryWidget = () => {
	return (
		<Stack spacing={3} sx={{ paddingTop: 3, paddingBottom: 3 }}>
			{/* Widget Title */}
			<Typography
				variant="h5"
				sx={(theme) => ({
					fontWeight: "bold",
					marginBottom: "16px",
					color:
						theme.palette.mode === "dark"
							? lighten(theme.palette.common.gray, 1)
							: darken(theme.palette.common.black, 1)
				})}>
				Categories
			</Typography>

			{/* Category List */}
			<Stack spacing={2} component="ul" sx={{ padding: 0, listStyle: "none" }}>
				{categories.map((category, index) => (
					<CategoryWidgetItem
						key={index}
						name={category.name}
						count={category.count}
						link={category.link}
					/>
				))}
			</Stack>
		</Stack>
	);
};

export default CategoryWidget;
