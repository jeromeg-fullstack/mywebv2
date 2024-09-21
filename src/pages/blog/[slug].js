import { useRouter } from "next/router";
import { useState } from "react";
import BlogDetailsHeader from "@/components/blog-details/blog-details-header";
import BlogContent from "@/components/blog-details/content";
import BlogTagsAndShare from "@/components/blog-details/tags-and-share";
import Comments from "@/components/blog-details/comments";
import CommentForm from "@/components/blog-details/comment-form";
import AuthorBox from "@/components/blog-details/author-box";
import NewsletterBox from "@/components/blog-details/news-letter-box";
import blogData from "@/data/posts";
import { Typography, List, ListItem, Grid, Container } from "@mui/material";

const BlogDetailsPage = ({ blogPost }) => {
	const router = useRouter();

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			{/* <Container>
				
			</Container> */}
			{/* <BlogDetailsHeader data={title} />
			<BlogContent content={image, } />
			<BlogTagsAndShare tags={blogData.tags} />
			<Comments comments={blogData.comments} />
			<CommentForm />
			<AuthorBox author={blogData.author} />
			<NewsletterBox /> */}

			<Grid container>
				<Grid item xs={12} lg={8}>
					<div>
						{blogPost.blocks.map((block) => {
							switch (block.type) {
								case "header-one":
									return (
										<Typography key={block.key} variant="h1">
											{block.text}
										</Typography>
									);
								case "header-two":
									return (
										<Typography key={block.key} variant="h2">
											{block.text}
										</Typography>
									);
								case "header-three":
									return (
										<Typography key={block.key} variant="h3">
											{block.text}
										</Typography>
									);
								case "header-four":
									return (
										<Typography key={block.key} variant="h4">
											{block.text}
										</Typography>
									);
								case "unordered-list-item":
									return (
										<List key={block.key}>
											<ListItem>
												{block.inlineStyleRanges.length > 0 ? (
													<strong>{block.text}</strong>
												) : (
													block.text
												)}
											</ListItem>
										</List>
									);
								case "unstyled":
								default:
									return (
										<Typography key={block.key} paragraph>
											{block.text}
										</Typography>
									);
							}
						})}
					</div>
				</Grid>
				<Grid item xs={12} lg={8}></Grid>
			</Grid>
		</div>
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

export async function getStaticProps({ params }) {
	const { slug } = params;
	// Fetch the blog post data based on the slug
	// Replace with your actual logic to get the blog post
	const res = await fetchBlogPostData(slug);
	const blogPost = res;

	if (!blogPost) {
		return {
			notFound: true
		};
	}

	return {
		props: {
			blogPost
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
