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
	lighten,
	Breadcrumbs,
	Link
} from "@mui/material";
import useIsScreenSizes from "@/utils/get-is-screen-sizes";
import ArticleItem from "@/components/article-item";
import BlogPost from "@/components/blog-post";
import TagGroup from "@/components/tag-group";
import BlogRelatedPostsBox from "@/components/blog-related-posts-box";
import ThemeDrawer from "@/components/theme-drawer";
import CommentBox from "./../../views/comment-box/index";

import CommentForm from "@/components/blog-details/comment-form";
import AuthorBox from "@/components/blog-details/author-box";

import commentsData from "@/data/comments";
import authorData from "@/data/authors";

const BlogDetailsPage = ({ blogPost, _blogData }) => {
	const [articles, setArticles] = useState([]);
	const [postComments, setPostComments] = useState({});
	const [newAuthor, setNewAuthor] = useState({});
	const theme = useTheme();
	const router = useRouter();
	const {
		id,
		title,
		image,
		tag,
		slug,
		author,
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
		views,
		comments,
		publishedAt,
		description,
		readTime
	};

	const { isTablet, isLaptop, isLaptopL, isDesktop } = useIsScreenSizes();

	const isBigView = isTablet || isLaptop || isLaptopL || isDesktop;

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	useEffect(() => {
		if (Array.isArray(_blogData)) {
			setArticles(_blogData);
		} else {
			console.log("no data!");
		}
	}, [_blogData]);

	useEffect(() => {
		let isMounted = true;
		const fetchBlogPostComments = async (id) => {
			const data = await new Promise((resolve, reject) => {
				try {
					const res = commentsData.find((comment) => id === comment.postId);
					resolve(res);
				} catch (error) {
					reject(error);
				}
			});
			setPostComments(data);
		};
		if (isMounted) {
			fetchBlogPostComments(id);
		}
		return () => {
			isMounted = false;
		};
	}, []);

	useEffect(() => {
		let isMounted = true;
		const fetchBlogTargetAuthor = async (author) => {
			const data = await new Promise((resolve, reject) => {
				try {
					const res = authorData.find((targetData) => author === targetData.author);
					resolve(res);
				} catch (error) {
					reject(error);
				}
			});

			setNewAuthor(data);
		};
		if (isMounted) {
			fetchBlogTargetAuthor(author);
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
					marginLeft: isBigView ? "95px" : 0
				}}>
				<Box
					sx={(theme) => ({
						backgroundColor:
							theme.palette.mode === "dark"
								? theme.palette.common.black
								: lighten(theme.palette.common.gray, 0.65),
						padding: isBigView ? "70px 100px" : "70px 0"
					})}>
					<Grid container>
						<Grid item xs={12}>
							<Container maxWidth="xl">
								<Grid container spacing={3}>
									<Grid item xs={12} lg={7}>
										<Breadcrumbs separator={<Typography color="textPrimary">/</Typography>}>
											<Link
												href="/"
												sx={{
													color: theme.palette.text.primary
												}}>
												Home
											</Link>
											<Link
												href="/blog"
												sx={{
													color: theme.palette.text.primary
												}}>
												Blog
											</Link>
											<Typography
												variant="body1"
												sx={{ textTransform: "capitalize", color: theme.palette.text.disabled }}>
												{slug}
											</Typography>
										</Breadcrumbs>
										<BlogDetailsHeader data={headerData} />
										<Box>
											{blogPost.blocks.map((block) => {
												switch (block.type) {
													case "header-one":
														return (
															<Typography
																key={block.key}
																variant="h4"
																fontWeight={600}
																mb="1.5rem"
																sx={{
																	color: theme.palette.text.primary
																}}>
																{block.text}
															</Typography>
														);
													case "header-two":
														return (
															<Typography
																key={block.key}
																variant="h4"
																sx={{
																	color: theme.palette.text.primary
																}}>
																{block.text}
															</Typography>
														);
													case "header-three":
														return (
															<Typography
																key={block.key}
																variant="h5"
																fontWeight={600}
																sx={{
																	color: theme.palette.text.primary
																}}>
																{block.text}
															</Typography>
														);
													case "header-four":
														return (
															<Typography
																key={block.key}
																variant="h5"
																sx={{
																	color: theme.palette.text.primary
																}}>
																{block.text}
															</Typography>
														);
													case "unordered-list-item":
														return (
															<List key={block.key}>
																<ListItem
																	alignItems="flex-start"
																	sx={{ color: theme.palette.text.primary }}>
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
															<Typography
																key={block.key}
																component={"p"}
																mb="1.5rem"
																sx={{ color: theme.palette.text.primary }}>
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
											<Box sx={{ display: "flex", gap: 3 }}>
												{blogData.slice(-2).map((article) => {
													return <BlogPost key={article.id} {...article} inRelatedPosts={true} />;
												})}
											</Box>
										</BlogRelatedPostsBox>
										<Box>
											{postComments?.comments && postComments?.comments?.length > 0 && (
												<CommentBox data={postComments.comments} />
											)}
										</Box>
										<Box>
											<CommentForm />
										</Box>
									</Grid>
									<Grid item xs={12} lg={5}>
										<Box>
											<AuthorBox authorData={newAuthor} />
										</Box>
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

	if (
		!blogPost &&
		!blogData
		// && postComments
	) {
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
