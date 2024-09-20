import { useRouter } from "next/router";
import BlogHeader from "@/components/blog-details/blog-details-header";
import BlogContent from "@/components/blog-details/content";
import BlogTagsAndShare from "@/components/blog-details-tags-and-share";
import Comments from "@/components/blog-details/comments";
import CommentForm from "@/components/blog-details/comment-form";
import AuthorBox from "@/components/blog-details/author-box";
import NewsletterBox from "@/components/NewsletterBox";

const BlogDetailsPage = ({ blogData }) => {
	const router = useRouter();

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<BlogDetailsHeader data={blogData.header} />
			<BlogContent content={blogData.content} />
			<BlogTagsAndShare tags={blogData.tags} />
			<Comments comments={blogData.comments} />
			<CommentForm />
			<AuthorBox author={blogData.author} />
			<NewsletterBox />
		</div>
	);
};

export async function getStaticProps({ params }) {
	// Fetch blog details based on slug
	const blogData = await fetchBlogData(params.slug);
	return {
		props: {
			blogData
		}
	};
}

export default BlogDetailsPage;
