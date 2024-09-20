import React, { useState, useEffect } from "react";
import { useThemeCtx } from "@/context/theme";
import { Box, Container, Pagination, Typography, Stack, lighten } from "@mui/material";
import Grid from "@mui/material/Grid2";

import ThemeDrawer from "@/components/theme-drawer";
import useIsScreenSizes from "@/utils/get-is-screen-sizes";
import BlogPageTitle from "@/components/blog-page-title";
import blogData from "@/data/posts";
import ArticleItem from "@/components/article-item";
import CategoryWidget from "./../../components/category-widget/index";
import TagGroup from "@/components/tag-group";
import BlogList from "@/components/blog-list";

const Blog = () => {
	const { isBlogPage } = useThemeCtx();
	const [posts, setPosts] = useState([]);
	const { isLaptop, isLaptopL, isDesktop } = useIsScreenSizes();

	const isBigView = isLaptop || isLaptopL || isDesktop;

	const [currentPage, setCurrentPage] = useState(1); // Current page state
	const postsPerPage = 2; // Number of posts to display per page

	// Calculate the total number of pages
	const totalPages = Math.ceil(posts.length / postsPerPage);

	// Get the blog posts for the current page
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	// Handle page change
	const handlePageChange = (event, value) => {
		setCurrentPage(value);
	};

	useEffect(() => {
		let isMounted = true;
		const getPosts = () => {
			try {
				if (blogData) {
					setPosts(blogData);
				}
			} catch (error) {
				throw new Error("Error fetching posts");
			}
		};
		if (isMounted) {
			getPosts();
		}
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<>
			{isBigView && <ThemeDrawer />}
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "stretch",
					marginLeft: isBlogPage ? "95px" : 0
				}}>
				<BlogPageTitle />
				<Box
					sx={(theme) => ({
						backgroundColor:
							theme.palette.mode === "dark"
								? theme.palette.common.black
								: lighten(theme.palette.common.gray, 0.65),
						padding: "70px 0"
					})}>
					<Container maxWidth="xl">
						<BlogList currentPosts={currentPosts} />
						<Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
							<Pagination
								count={totalPages} // Total number of pages
								page={currentPage} // Current page
								onChange={handlePageChange} // Handle page change
								color="secondary" // Color of the pagination (can be changed)
								variant="outlined"
								shape="rounded"
							/>
						</Box>
						<Box mt={3}>
							<Typography
								variant="h5"
								sx={(theme) => ({
									fontWeight: "bold",
									mb: 2,
									color: `${
										theme.palette.mode === "dark"
											? lighten(theme.palette.common.gray, 0.75)
											: theme.palette.common.black
									} !important`
								})}>
								Related Posts
							</Typography>
							<BlogList currentPosts={currentPosts.slice(-currentPosts.length, 1)} />
						</Box>
						<Stack spacing={2}>
							{posts.slice(0, 5).map((article, idx) => {
								return (
									<React.Fragment key={idx}>
										<ArticleItem {...article} />
									</React.Fragment>
								);
							})}
						</Stack>
						<CategoryWidget />
						<TagGroup />
					</Container>
				</Box>
			</Box>
		</>
	);
};

export default Blog;
