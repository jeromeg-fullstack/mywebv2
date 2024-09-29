import React, { useState, useEffect } from "react";
import { Box, Container, Pagination, Stack, lighten, Grid, useTheme } from "@mui/material";
import ThemeDrawer from "@/components/theme-drawer";
import BlogPageTitle from "@/components/blog-page-title";
import ArticleItem from "@/components/article-item";
import CategoryWidget from "./../../components/category-widget/index";
import TagGroup from "@/components/tag-group";
import BlogList from "@/components/blog-list";
import useIsScreenSizes from "@/utils/get-is-screen-sizes";
import blogData from "@/data/posts";
import BlogRelatedPostsBox from "@/components/blog-related-posts-box";
import { useThemeCtx } from "@/context/theme";

const Blog = ({ data }) => {
	const [posts, setPosts] = useState([]);
	const { isBlogPage } = useThemeCtx();
	const { isTablet, isLaptop, isLaptopL, isDesktop } = useIsScreenSizes();
	const theme = useTheme();

	const isBigView = isLaptop || isLaptopL || isDesktop;
	const isIncreasePadding = isTablet || isLaptop || isLaptopL || isDesktop;

	const [currentPage, setCurrentPage] = useState(1);
	const postsPerPage = 2;

	const totalPages = Math.ceil(posts.length / postsPerPage);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	const handlePageChange = (event, value) => {
		setCurrentPage(value);
	};

	useEffect(() => {
		let isMounted = true;
		const getPosts = () => {
			try {
				if (data) {
					setPosts(data);
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

	useEffect(() => {
		console.log("I changed!");
	}, [isBlogPage]);

	return (
		<>
			{isBigView && <ThemeDrawer />}
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "stretch",
					marginLeft: isBigView ? "95px" : 0
				}}>
				<Grid container>
					<Grid item display="flex" justifyContent="center" alignItems="center">
						<BlogPageTitle />
					</Grid>
					<Grid item xs={12}>
						<Box
							sx={{
								backgroundColor:
									theme.palette.mode === "dark"
										? theme.palette.common.black
										: lighten(theme.palette.common.silver, 0.25),
								padding: isIncreasePadding ? "70px 100px" : "50px 0"
							}}>
							<Container fixed>
								<Grid container spacing={3}>
									<Grid item xs={12} md={7}>
										<BlogList currentPosts={currentPosts} />
										<Box sx={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
											<Pagination
												count={totalPages}
												page={currentPage}
												onChange={handlePageChange}
												color="secondary"
												variant="outlined"
												shape="rounded"
											/>
										</Box>
									</Grid>
									<Grid item xs={12} md={5}>
										<BlogRelatedPostsBox>
											<BlogList currentPosts={currentPosts.slice(-currentPosts.length, 1)} />
										</BlogRelatedPostsBox>
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
									</Grid>
								</Grid>
							</Container>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export async function getStaticProps() {
	// Fetch your blog list from an API or database
	const data = blogData;

	return {
		props: {
			data
		}
	};
}

export default Blog;
