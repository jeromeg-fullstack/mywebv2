import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
	Box,
	Container,
	Pagination,
	Typography,
	Stack,
	lighten,
	Grid,
	useTheme
} from "@mui/material";
import ThemeDrawer from "@/components/theme-drawer";
import BlogPageTitle from "@/components/blog-page-title";
import ArticleItem from "@/components/article-item";
import CategoryWidget from "./../../components/category-widget/index";
import TagGroup from "@/components/tag-group";
import BlogList from "@/components/blog-list";
import useIsScreenSizes from "@/utils/get-is-screen-sizes";
import blogData from "@/data/posts";
import BlogRelatedPostsBox from "@/components/blog-related-posts-box";

const Blog = ({ data }) => {
	const [posts, setPosts] = useState([]);
	const [isBlogPage, setIsBlogPage] = useState(false);
	const { isLaptop, isLaptopL, isDesktop } = useIsScreenSizes();
	const theme = useTheme();

	const router = useRouter();

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
								padding: "70px 0"
							}}>
							<Container maxWidth="xl">
								<Grid container spacing={3}>
									<Grid item xs={12} md={8}>
										<BlogList currentPosts={currentPosts} />
										<Box sx={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
											<Pagination
												count={totalPages} // Total number of pages
												page={currentPage} // Current page
												onChange={handlePageChange} // Handle page change
												color="secondary" // Color of the pagination (can be changed)
												variant="outlined"
												shape="rounded"
											/>
										</Box>
									</Grid>
									<Grid item xs={12} md={4}>
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
