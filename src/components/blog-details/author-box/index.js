import React, { useState, useEffect } from "react";
import { Avatar, Box, Typography, IconButton, useTheme, lighten } from "@mui/material";
import { LinkedIn, Facebook, Twitter, YouTube } from "@mui/icons-material";
import { FollowButton } from "@/components/buttons";


const AuthorBox = ({ authorData = {} }) => {
	const [author, setAuthor] = useState({});

	const theme = useTheme();

	useEffect(() => {
		if (authorData && Object.keys(authorData).length > 0) {
			setAuthor(authorData);
		}
	}, [authorData]);

	console.log(author);
	return (
		<>
			{author && Object.keys(author).length > 0 && (
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "initial",
						p: 2,
						border: `1px solid ${theme.palette.background.paper}`,
						borderRadius: "10px",
						mb: "2rem"
					}}>
					<Box>
						<Box sx={{ display: "flex", flexDirection: "row", mb: "1rem" }}>
							<Box sx={{ mr: "1rem" }}>
								<Avatar src={author.image} alt={author.author} sx={{ width: 125, height: 125 }} />
							</Box>
							<Box sx={{ display: "flex", flexDirection: "column", padding: "10px" }}>
								<Typography
									variant="h6"
									sx={{
										fontSize: "18px",
										pb: ".5rem",
										color: `${
											theme.palette.mode === "dark"
												? lighten(theme.palette.common.gray, 0.75)
												: theme.palette.common.black
										} !important`
									}}>
									{author.author}
								</Typography>
								<Typography
									variant="body2"
									color="textSecondary"
									sx={{
										pb: ".5rem",
										color: `${
											theme.palette.mode === "dark"
												? lighten(theme.palette.common.gray, 0.75)
												: theme.palette.common.black
										} !important`
									}}>
									{author.followers} Followers
								</Typography>
								<FollowButton>Follow</FollowButton>
							</Box>
						</Box>
						<Box>
							<Typography
								variant="body2"
								sx={{
									fontSize: "16px",
									color: `${
										theme.palette.mode === "dark"
											? lighten(theme.palette.common.gray, 0.75)
											: theme.palette.common.black
									} !important`
								}}>
								{author.bio}
							</Typography>
						</Box>
					</Box>

					<Box>
						<IconButton component="a" href={author.linkedin} target="_blank">
							<LinkedIn />
						</IconButton>
						<IconButton component="a" href={author.facebook} target="_blank">
							<Facebook />
						</IconButton>
						<IconButton component="a" href={author.x} target="_blank">
							<Twitter />
						</IconButton>
						<IconButton component="a" href={author.youtube} target="_blank">
							<YouTube />
						</IconButton>
					</Box>
				</Box>
			)}
		</>
	);
};

export default AuthorBox;
