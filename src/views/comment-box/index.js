import CommentSection from "@/components/comment-box/comment-section";
import React from "react";

const CommentBox = ({ data }) => {
	return (
		<>
			{data.length > 0 ? (
				<CommentSection comments={data} />
			) : (
				<>
					<p>No data</p>
				</>
			)}
		</>
	);
};

export default CommentBox;
