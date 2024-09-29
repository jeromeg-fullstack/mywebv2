import React, { useState } from "react";
import {
	TextField,
	Button,
	Chip,
	Autocomplete,
	Switch,
	FormControlLabel,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
	Typography,
	Box
} from "@mui/material";
import { EditorState } from "draft-js";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";

// Dynamically import the Editor from react-draft-wysiwyg to avoid SSR issues
const Editor = dynamic(() => import("react-draft-wysiwyg").then((mod) => mod.Editor), {
	ssr: false
});

const CreateArticle = () => {
	const [title, setTitle] = useState("");
	const [summary, setSummary] = useState("");
	const [tags, setTags] = useState([]);
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const [coverImage, setCoverImage] = useState(null);
	const [author, setAuthor] = useState("");
	const [status, setStatus] = useState("draft");
	const [autoShare, setAutoShare] = useState(false);
	const [publicationDate, setPublicationDate] = useState("");
	const [seoTitle, setSeoTitle] = useState("");
	const [seoDescription, setSeoDescription] = useState("");

	const handleEditorChange = (state) => {
		setEditorState(state);
	};

	const handleCoverImageUpload = (event) => {
		if (event.target.files && event.target.files[0]) {
			setCoverImage(event.target.files[0]);
		}
	};

	const handleTagsChange = (event, value) => {
		setTags(value);
	};

	const handleSubmit = () => {
		// Handle form submission logic
		const articleData = {
			title,
			summary,
			tags,
			content: editorState.getCurrentContent(),
			coverImage,
			author,
			status,
			autoShare,
			publicationDate,
			seoTitle,
			seoDescription
		};
		console.log("Submitting article:", articleData);
	};

	return (
		<Box sx={{ p: 4 }}>
			<Typography variant="h4" gutterBottom>
				Create New Article
			</Typography>

			{/* Title */}
			<TextField
				fullWidth
				label="Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				margin="normal"
				required
			/>

			{/* Rich Text Editor for Content */}
			<Box sx={{ mt: 2 }}>
				<Typography variant="h6" gutterBottom>
					Content
				</Typography>
				<Editor
					editorState={editorState}
					onEditorStateChange={handleEditorChange}
					toolbar={{
						options: [
							"inline",
							"blockType",
							"fontSize",
							"list",
							"textAlign",
							"link",
							"embedded",
							"emoji",
							"image"
						],
						inline: { inDropdown: true },
						list: { inDropdown: true },
						textAlign: { inDropdown: true },
						link: { inDropdown: true },
						image: { uploadEnabled: true }
					}}
					wrapperClassName="demo-wrapper"
					editorClassName="demo-editor"
				/>
			</Box>

			{/* Summary */}
			<TextField
				fullWidth
				label="Article Summary"
				value={summary}
				onChange={(e) => setSummary(e.target.value)}
				multiline
				rows={3}
				margin="normal"
			/>

			{/* Tags */}
			<Autocomplete
				multiple
				options={["React", "JavaScript", "CSS", "Web Development"]}
				value={tags}
				onChange={handleTagsChange}
				freeSolo
				renderTags={(value, getTagProps) =>
					value.map((option, index) => (
						<Chip key={index} label={option} {...getTagProps({ index })} />
					))
				}
				renderInput={(params) => (
					<TextField {...params} variant="outlined" label="Tags" placeholder="Add tags" />
				)}
				sx={{ mt: 2 }}
			/>

			{/* Cover Image */}
			<Box sx={{ mt: 2 }}>
				<Typography variant="h6" gutterBottom>
					Cover Image
				</Typography>
				<input type="file" onChange={handleCoverImageUpload} accept="image/*" />
				{coverImage && <Typography variant="body1">Uploaded: {coverImage.name}</Typography>}
			</Box>

			{/* Author */}
			<TextField
				fullWidth
				label="Author"
				value={author}
				onChange={(e) => setAuthor(e.target.value)}
				margin="normal"
				required
			/>

			{/* Status (Draft/Published) */}
			<FormControl fullWidth margin="normal">
				<InputLabel id="status-label">Status</InputLabel>
				<Select labelId="status-label" value={status} onChange={(e) => setStatus(e.target.value)}>
					<MenuItem value="draft">Draft</MenuItem>
					<MenuItem value="published">Published</MenuItem>
				</Select>
			</FormControl>

			{/* Publication Date */}
			<TextField
				fullWidth
				label="Publication Date"
				type="date"
				value={publicationDate}
				onChange={(e) => setPublicationDate(e.target.value)}
				margin="normal"
				InputLabelProps={{
					shrink: true
				}}
			/>

			{/* SEO Meta Title */}
			<TextField
				fullWidth
				label="SEO Title"
				value={seoTitle}
				onChange={(e) => setSeoTitle(e.target.value)}
				margin="normal"
			/>

			{/* SEO Meta Description */}
			<TextField
				fullWidth
				label="SEO Description"
				value={seoDescription}
				onChange={(e) => setSeoDescription(e.target.value)}
				multiline
				rows={3}
				margin="normal"
			/>

			{/* Auto-share on Social Media */}
			<FormControlLabel
				control={<Switch checked={autoShare} onChange={(e) => setAutoShare(e.target.checked)} />}
				label="Auto-share on Social Media"
				sx={{ mt: 2 }}
			/>

			{/* Submit Button */}
			<Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 3 }}>
				Publish Article
			</Button>
		</Box>
	);
};

export default CreateArticle;
