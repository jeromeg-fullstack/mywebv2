import React from "react";
import BlogPost from "./BlogPost"; // Import the BlogPost component

const BlogList = () => {
	return (
		<div>
			{blogData.map((post) => (
				<BlogPost
					key={post.id}
					title={post.title}
					image={post.image}
					tag={post.tag}
					author={post.author}
					date={post.date}
					comments={post.comments}
					views={post.views}
					description={post.description}
				/>
			))}
		</div>
	);
};

export default BlogList;
