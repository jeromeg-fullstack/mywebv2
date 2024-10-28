import React, { useState, useEffect } from "react";
import { Box, Container, Pagination, Stack, lighten, Grid, useTheme } from "@mui/material";
import _ from "lodash";
import ThemeDrawer from "@/components/theme-drawer";
import BlogPageTitle from "@/components/blog-page-title";
import ArticleItem from "@/components/article-item";
import CategoryWidget from "./../../components/category-widget/index";
import TagGroup from "@/components/tag-group";
import BlogList from "@/components/blog-list";

import blogData from "@/data/posts";
import BlogRelatedPostsBox from "@/components/blog-related-posts-box";
import { useIsScreenSizes } from "@/hooks/useIsScreenSizes";
import BlogSearch from "@/components/blog-search";
import SEO from "@/components/seo";

const Blog = ({ data }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
	const [posts, setPosts] = useState(data ?? []);
	const { isMobileL, isTablet, isLaptop, isLaptopL, isDesktop } = useIsScreenSizes();

	const isBigView = isTablet || isLaptop || isLaptopL || isDesktop;
	const isIncreasePadding = isMobileL || isTablet || isLaptop || isLaptopL || isDesktop;

	const relatedPosts = data.relatedPosts ? data.relatedPosts : [];
	const theme = useTheme();

	// State for filtered related posts
	const [filteredRelatedPosts, setFilteredRelatedPosts] = useState(relatedPosts);

	// ** Pagination
	const [currentPage, setCurrentPage] = useState(1);
	const postsPerPage = 2;

	const totalPages = Math.ceil(posts.length / postsPerPage);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	const handlePageChange = (event, value) => {
		setCurrentPage(value);
	};

	const handleResultSelect = (title) => {
		console.log(`Selected post: ${title}`);
		// Add logic here if you want to do something with the selected post
	};

	useEffect(() => {
		const getPosts = () => {
			try {
				if (!_.isEmpty(blogData)) {
					setPosts(data);
				}
			} catch (error) {
				throw new Error("Error fetching posts");
			}
		};
		getPosts();
	}, [blogData]);

	return (
		<>
			<SEO
				title="Blog | Jerome Gacoscosim | Virtual Assistant"
				description="Hire a Professional Virtual Assistant - Expertise in administrative support, social media management, customer service, scheduling, and data entry. Efficient, reliable, and skilled in optimizing your business workflow for maximum productivity."
				keywords="virtual assistant, administrative support, social media manager, data entry, customer service, business assistant, scheduling, task management, virtual support, remote assistant, productivity solutions, calendar management, smartva, smart va"
				ogImage="https://imgur.com/cyPPZPT"
				url={`${apiUrl}/blog`}
				author="Jerome Gacoscosim"
			/>
			{isBigView && <ThemeDrawer />}
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "stretch",
					marginLeft: isBigView ? "95px" : 0,
					marginTop: isBigView ? 0 : "65px",
					height: "100%"
				}}>
				<Grid container>
					<Grid item display="flex" justifyContent="center" alignItems="center">
						<BlogPageTitle />
					</Grid>
					<Grid item xs={12}>
						<Box
							sx={{
								background:
									theme.palette.mode === "dark"
										? `url(/images/background/body-bg-dark.png)`
										: `url(/images/background/body-bg-light.png)`,
								backgroundAttachment: "fixed",
								backgroundColor:
									theme.palette.mode === "dark"
										? theme.palette.common.black
										: lighten(theme.palette.common.silver, 0.25),
								padding: isIncreasePadding ? "70px 100px" : "50px 0"
							}}>
							<Container maxWidth="xl">
								<Grid container spacing={3}>
									<Grid item xs={12} md={7}>
										{currentPosts.length > 0 ? (
											<BlogList currentPosts={currentPosts} />
										) : (
											<Box>No blog posts available.</Box>
										)}
										{totalPages > 0 && (
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
										)}
									</Grid>
									<Grid item xs={12} md={5}>
										<BlogSearch data={relatedPosts} onResultSelect={handleResultSelect} />
										{/* Render filtered related posts */}

										<BlogRelatedPostsBox>
											<BlogList currentPosts={currentPosts.slice(-1)} />
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
