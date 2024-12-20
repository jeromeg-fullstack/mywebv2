import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Container, Grid, Breadcrumbs, Link, Typography, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import BlogDetailsHeader from "@/components/blog-details/blog-details-header";
import ArticleItem from "@/components/article-item";
import BlogPost from "@/components/blog-post";
import TagGroup from "@/components/tag-group";
import BlogRelatedPostsBox from "@/components/blog-related-posts-box";
import ThemeDrawer from "@/components/theme-drawer";
import CommentBox from "@/views/comment-box";
import CommentForm from "@/components/blog-details/comment-form";
import AuthorBox from "@/components/blog-details/author-box";
import {
	fetchTargetBlogPostDetails,
	fetchBlogPosts,
	fetchTargetBlogPostComments,
	fetchTargetBlogAuthor
} from "@/services/blog";
import { useIsScreenSizes } from "@/hooks/useIsScreenSizes";
import SEO from "@/components/seo";

const BlogDetailsPage = ({ blogPost, blogCollection }) => {
	const [postComments, setPostComments] = useState([]);
	const [newAuthor, setNewAuthor] = useState({});
	const [post, setPost] = useState(blogPost || {});
	const theme = useTheme();
	const router = useRouter();
	const { isTablet, isLaptop, isLaptopL, isDesktop } = useIsScreenSizes();
	const isBigView = isTablet || isLaptop || isLaptopL || isDesktop;

	console.log(postComments);

	useEffect(() => {
		const fetchComments = async () => {
			const comments = await fetchTargetBlogPostComments(post.id);
			setPostComments(comments || []);
		};
		if (post?.id) {
			fetchComments();
		}
	}, [post?.id]);

	useEffect(() => {
		const fetchAuthor = async () => {
			const author = await fetchTargetBlogAuthor(post.author);
			setNewAuthor(author || {});
		};
		if (post?.author) {
			fetchAuthor();
		}
	}, [post?.author]);

	if (router.isFallback) return <div>Loading...</div>;
	if (!blogPost) return <div>Post not found</div>;

	return (
		<>
			<SEO
				title="Home | Jerome Gacoscosim | Virtual Assistant"
				description="Hire a Professional Virtual Assistant - Expertise in administrative support, social media management, customer service, scheduling, and data entry. Efficient, reliable, and skilled in optimizing your business workflow for maximum productivity."
				keywords="virtual assistant, administrative support, social media manager, data entry, customer service, business assistant, scheduling, task management, virtual support, remote assistant, productivity solutions, calendar management, smartva, smart va"
				ogImage="https://imgur.com/cyPPZPT"
				url={`https://smartva.studio/${post.slug}`}
				author="Jerome Gacoscosim"
			/>
			{isBigView && <ThemeDrawer />}

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "stretch",
					marginLeft: isBigView ? "95px" : 0,
					marginTop: isBigView ? 0 : "75px",
					height: "100%"
				}}>
				<Box sx={{ padding: isBigView ? "70px 100px" : "70px 0" }}>
					<Grid container>
						<Grid item xs={12}>
							<Container maxWidth="xl">
								<Grid container spacing={3}>
									<Grid item xs={12} lg={7}>
										<Breadcrumbs separator={<Typography>/</Typography>}>
											<Link href="/" sx={{ color: theme.palette.text.primary }}>
												Home
											</Link>
											<Link href="/blog" sx={{ color: theme.palette.text.primary }}>
												Blog
											</Link>
											<Typography
												variant="body1"
												sx={{ textTransform: "capitalize", color: theme.palette.text.disabled }}>
												{blogPost.slug}
											</Typography>
										</Breadcrumbs>

										<BlogDetailsHeader data={post} />

										<Box>
											{blogPost.blocks.map((block) => (
												<RenderBlock key={block.key} block={block} theme={theme} />
											))}
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
												{blogCollection.slice(-2).map((article) => (
													<BlogPost key={article.id} {...article} inRelatedPosts />
												))}
											</Box>
										</BlogRelatedPostsBox>

										{postComments.length > 0 && <CommentBox data={postComments} />}
										<CommentForm />
									</Grid>

									<Grid item xs={12} lg={5}>
										<AuthorBox authorData={newAuthor} />
										<Box
											sx={{
												borderBottom: `1px solid ${theme.palette.secondary.main}`,
												paddingBottom: "3.5rem"
											}}>
											<Stack spacing={2}>
												{blogCollection.map((article, idx) => (
													<ArticleItem key={idx} {...article} />
												))}
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

const RenderBlock = ({ block, theme }) => {
	switch (block.type) {
		case "header-one":
			return (
				<Typography
					variant="h4"
					fontWeight={600}
					mb="1.5rem"
					sx={{ color: theme.palette.text.primary }}>
					{block.text}
				</Typography>
			);
		case "header-two":
			return (
				<Typography variant="h4" sx={{ color: theme.palette.text.primary }}>
					{block.text}
				</Typography>
			);
		case "image":
			return (
				<Box key={block.key} my={2}>
					<img
						src={block.data.src}
						alt={block.data.alt}
						style={{ width: "100%", height: "auto" }}
					/>
					<Typography variant="caption">{block.data.caption}</Typography>
				</Box>
			);
		default:
			return (
				<Typography component="p" mb="1.5rem" sx={{ color: theme.palette.text.primary }}>
					{block.text}
				</Typography>
			);
	}
};

export default BlogDetailsPage;

// Fetch data for a specific post by slug
export async function getStaticProps({ params }) {
	const blogPost = await fetchTargetBlogPostDetails(params.slug);
	const blogCollection = await fetchBlogPosts(); // Fetch all posts for related articles section

	if (!blogPost) {
		return { notFound: true };
	}

	return {
		props: {
			blogPost,
			blogCollection
		},
		revalidate: 10 // Revalidate every 10 seconds
	};
}

// Generate paths for dynamic routes
export async function getStaticPaths() {
	const posts = await fetchBlogPosts();
	const paths = posts.map((post) => ({
		params: { slug: post.slug }
	}));

	return {
		paths,
		fallback: true // Enable fallback for non-generated pages
	};
}
