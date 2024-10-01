import { Box } from "@mui/material";
import { styled } from "@mui/system";

const CommentBox = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "flex-start",
	padding: theme.spacing(2),
	// backgroundColor: "#222",
	color: "#fff",
	borderRadius: theme.shape.borderRadius,
	marginBottom: theme.spacing(2)
}));

const CommentContent = styled(Box)(({ theme }) => ({
	marginLeft: theme.spacing(2)
}));

const LikeReplyBox = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	marginTop: theme.spacing(1),
	color: "#999"
}));

export { CommentBox, CommentContent, LikeReplyBox };
