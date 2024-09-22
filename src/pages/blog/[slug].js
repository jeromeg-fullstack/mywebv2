import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BlogDetailsHeader from "@/components/blog-details/blog-details-header";
import blogData from "@/data/posts";
import {
	Typography,
	List,
	ListItem,
	Grid,
	Container,
	Box,
	Stack,
	useTheme,
	lighten
} from "@mui/material";
import useIsScreenSizes from "@/utils/get-is-screen-sizes";
import ArticleItem from "@/components/article-item";
import { Check } from "@mui/icons-material";
import BlogPost from "@/components/blog-post";
import TagGroup from "@/components/tag-group";
import BlogRelatedPostsBox from "@/components/blog-related-posts-box";
import ThemeDrawer from "@/components/theme-drawer";

const BlogDetailsPage = ({ blogPost, _blogData }) => {
	const [articles, setArticles] = useState([]);
	const theme = useTheme();
	const router = useRouter();
	const {
		title,
		image,
		tag,
		author,
		authorImage,
		publishedAt,
		comments,
		views,
		description,
		readTime,
		blocks
	} = blogPost;

	const headerData = {
		title,
		author,
		authorImage,
		views,
		comments,
		publishedAt,
		description,
		readTime
	};

	const { isLaptop, isLaptopL, isDesktop } = useIsScreenSizes();

	const isBigView = isLaptop || isLaptopL || isDesktop;

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	useEffect(() => {
		console.log(_blogData);
		if (Array.isArray(_blogData)) {
			setArticles(_blogData);
		} else {
			console.log("no data!");
		}
	}, [_blogData]);

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
				<Box
					sx={(theme) => ({
						backgroundColor:
							theme.palette.mode === "dark"
								? theme.palette.common.black
								: lighten(theme.palette.common.gray, 0.65),
						padding: "50px 0"
					})}>
					<Grid container>
						<Grid item xs={12}>
							<Container maxWidth="xl">
								<Grid container spacing={3}>
									<Grid item xs={12} lg={7}>
										<BlogDetailsHeader data={headerData} />
										<Box>
											{blogPost.blocks.map((block) => {
												switch (block.type) {
													case "header-one":
														return (
															<Typography key={block.key} variant="h4" fontWeight={600} mb="1.5rem">
																{block.text}
															</Typography>
														);
													case "header-two":
														return (
															<Typography key={block.key} variant="h4">
																{block.text}
															</Typography>
														);
													case "header-three":
														return (
															<Typography key={block.key} variant="h5" fontWeight={600}>
																{block.text}
															</Typography>
														);
													case "header-four":
														return (
															<Typography key={block.key} variant="h5">
																{block.text}
															</Typography>
														);
													case "unordered-list-item":
														return (
															<List key={block.key}>
																<ListItem alignItems="flex-start">
																	<Check fontSize="medium" color="action" />
																	{block.inlineStyleRanges.length > 0 ? (
																		<strong>{block.text}</strong>
																	) : (
																		block.text
																	)}
																</ListItem>
															</List>
														);
													case "image":
														return (
															<Box
																key={block.key}
																my={2}
																sx={{ height: "auto", minWidth: "300px" }}>
																<img
																	src={block.data.src}
																	alt={block.data.alt}
																	style={{ width: "100%", height: "auto" }}
																/>
																<Typography variant="caption">{block.data.caption}</Typography>
															</Box>
														);
													case "unstyled":
													default:
														return (
															<Typography key={block.key} component={"p"} mb="1.5rem">
																{block.text}
															</Typography>
														);
												}
											})}
										</Box>
										<Box
											sx={{
												borderBottom: `1px solid ${theme.palette.secondary.main}`,
												borderTop: `1px solid ${theme.palette.secondary.main}`,
												marginBottom: "3.5rem",
												padding: "1.5rem 0"
											}}>
											<TagGroup />
										</Box>
										<BlogRelatedPostsBox>
											{blogData.slice(-2).map((article) => {
												return <BlogPost {...article} />;
											})}
										</BlogRelatedPostsBox>
									</Grid>
									<Grid item xs={12} lg={5}>
										<Box
											sx={{
												borderBottom: `1px solid ${theme.palette.secondary.main}`,
												paddingBottom: "3.5rem"
											}}>
											<Stack spacing={2}>
												{articles.map((article, idx) => {
													return (
														<React.Fragment key={idx}>
															<ArticleItem {...article} />
														</React.Fragment>
													);
												})}
											</Stack>
										</Box>
									</Grid>
								</Grid>
							</Container>
						</Grid>
					</Grid>
				</Box>
			</Box>
			{/* <Container>
				
			</Container> */}
			{/* <BlogDetailsHeader data={title} />
			<BlogContent content={image, } />
			<BlogTagsAndShare tags={blogData.tags} />
			<Comments comments={blogData.comments} />
			<CommentForm />
			<AuthorBox author={blogData.author} />
			<NewsletterBox /> */}
		</>
	);
};

const fetchBlogPostData = async (slug) => {
	const data = await new Promise((resolve, reject) => {
		try {
			const res = blogData.find((post) => slug === post.slug);
			resolve(res);
		} catch (error) {
			reject(error);
		}
	});
	return data;
};

const fetchBlogPosts = async () => {
	const data = await new Promise((resolve, reject) => {
		try {
			const res = blogData;
			resolve(res);
		} catch (error) {
			reject(error);
		}
	});
	return data;
};

export async function getStaticProps({ params }) {
	const { slug } = params;
	// Fetch the blog post data based on the slug
	// Replace with your actual logic to get the blog post
	const res = await fetchBlogPostData(slug);
	const blogPost = res;
	const res2 = await fetchBlogPosts();
	const _blogData = res2;

	if (!blogPost && !blogData) {
		return {
			notFound: true
		};
	}

	return {
		props: {
			blogPost,
			_blogData
		},
		revalidate: 60 // Re-generate the page every 60 seconds (optional)
	};
}

export async function getStaticPaths() {
	// Fetch your blog list data to generate paths
	const res = await blogData;
	const blogList = res;

	// Map the list of blog posts to generate paths with slugs
	const paths = blogList.map((post) => ({
		params: { slug: post.slug }
	}));

	return {
		paths,
		fallback: true // Enable fallback for non-pre-rendered pages
	};
}

export default BlogDetailsPage;
