import React from "react";
import BlogPost from "@/components/blog-post"; // Import the BlogPost component
import timeAgo from "@/utils/time-ago";

const BlogList = ({ currentPosts }) => {
	return (
		<div>
			{currentPosts.map((post) => {
				const formattedDate = timeAgo(post.publishedAt);
				if (typeof formattedDate === "string") {
					return (
						<BlogPost
							key={post.id}
							title={post.title}
							image={post.image}
							tag={post.tag}
							author={post.author}
							publishedAt={formattedDate}
							comments={post.comments}
							views={post.views}
							description={post.description}
							slug={post.slug}
							blocks={post.blocks}
						/>
					);
				}
			})}
		</div>
	);
};

export default BlogList;
