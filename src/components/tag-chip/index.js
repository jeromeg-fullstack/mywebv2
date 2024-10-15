// components/TagChip.js
import React from "react";
import { Chip } from "@mui/material";

const TagChip = ({ label, selected, onClick }) => {
	return (
		<Chip
			label={label}
			clickable
			variant={selected ? "filled" : "outlined"}
			sx={{
				margin: "8px",
				borderRadius: "20px",
				fontSize: "0.9rem",
				fontWeight: "bold",
				cursor: "pointer"
			}}
			color={selected ? "primary" : "default"}
			onClick={onClick}
		/>
	);
};

export default TagChip;
