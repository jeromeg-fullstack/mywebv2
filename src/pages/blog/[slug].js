import React, { useEffect, useState } from "react";
import _ from "lodash";
import { useRouter } from "next/router";
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
	Breadcrumbs,
	Link
} from "@mui/material";
import { useIsScreenSizes } from "@/hooks/useIsScreenSizes";
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
	const [headerData, setHeaderData] = useState({});

	const { isMobileL, isTablet, isLaptop, isLaptopL, isDesktop } = useIsScreenSizes();

	const isBigView = isTablet || isLaptop || isLaptopL || isDesktop;

	useEffect(() => {
		if (Array.isArray(_blogData)) {
			setArticles(_blogData);
		} else {
			console.log("no data!");
		}
	}, [_blogData]);

	useEffect(() => {
		// Fetch the blog post or perform some side effect here
		fetchBlogPost(postId).then((data) => {
			setBlogPost(data);
		});

		// Return a cleanup function if needed (e.g., for unsubscribing or clearing timers)
		return () => {
			// Cleanup logic here (optional)
		};
	}, [postId]);

	useEffect(() => {
		let isMounted = true;
		const fetchBlogPostComments = async (id) => {
			const data = await new Promise((resolve, reject) => {
				try {
					const res = commentsData.find((comment) => id === comment.postId);
					resolve(res || {}); // fallback to empty object if no comment found
				} catch (error) {
					reject(error);
				}
			});
			if (isMounted) {
				setPostComments(data || {}); // fallback to empty object
			}
		};
		if (isMounted && !_.isEmpty(headerData)) {
			fetchBlogPostComments(headerData.id); // Ensure 'id' exists before calling the function
		}
		return () => {
			isMounted = false;
		};
	}, [headerData]);

	useEffect(() => {
		const fetchBlogTargetAuthor = async (author) => {
			const data = await new Promise((resolve, reject) => {
				try {
					const res = authorData.find((targetData) => author === targetData.author);
					resolve(res || {}); // Ensure fallback
				} catch (error) {
					reject(error);
				}
			});
			setNewAuthor(data || {}); // Set to an empty object if undefined
		};
		fetchBlogTargetAuthor(headerData.author);
	}, [headerData]);

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	if (_.isEmpty(blogPost)) {
		return <div>Post not found</div>; // Handle missing blog post data
	}

	return (
		<>
			{isBigView && <ThemeDrawer />}

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "stretch",
					marginLeft: isBigView ? "95px" : 0,
					marginTop: "75px",
					position: "relative"
				}}>
				<Box
					sx={(theme) => ({
						padding: isMobileL ? "70px 70px" : isBigView ? "70px 100px" : "70px 0"
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
												{blogPost.slug}
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
											{postComments?.comments && postComments.comments.length > 0 && (
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
	const blogPost = await fetchBlogPostData(slug); // Fetch the blog post by slug

	if (!blogPost) {
		return {
			notFound: true // Return 404 if no post is found
		};
	}

	const _blogData = await fetchBlogPosts(); // Fetch all blog posts for related posts, etc.

	return {
		props: {
			blogPost,
			_blogData
		},
		revalidate: 60 // Optionally revalidate the page every 60 seconds
	};
}

export async function getStaticPaths() {
	const blogList = await fetchBlogPosts(); // Fetch the list of all blog posts

	const paths = blogList.map((post) => ({
		params: { slug: post.slug } // Generate paths using the post slug
	}));

	return {
		paths, // Provide the generated paths
		fallback: true // Allow fallback for non-pre-rendered pages
	};
}

export default BlogDetailsPage;
