import comments from "@/data/comments";
import authors from "@/data/authors";
import posts from "@/data/posts";

export const fetchTargetBlogPostDetails = async (slug) => {
	return new Promise((resolve, reject) => {
		try {
			if (posts) {
				const targetPost = posts.find((post) => post.slug === slug);
				resolve(targetPost);
			}
		} catch (error) {
			reject(error);
		}
	});
};
export const fetchBlogPosts = async () => {
	return new Promise((resolve, reject) => {
		try {
			if (posts) resolve(posts);
		} catch (error) {
			reject(error);
		}
	});
};

export const fetchTargetBlogPostComments = async (id) => {
	return new Promise((resolve, reject) => {
		try {
			const targetComments = comments.find((comment) => comment.id === id);
			resolve(targetComments);
		} catch (error) {
			reject(error);
		}
	});
};

export const fetchTargetBlogAuthor = async (author) => {
	return new Promise((resolve, reject) => {
		try {
			const targetAuthor = authors.find((a) => a.author === author);
			resolve(targetAuthor);
		} catch (error) {
			reject(error);
		}
	});
};
