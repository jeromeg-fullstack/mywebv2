import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SvgComponent from "../svg-component";
import { Box } from "@mui/material";

const AnimatedJumbotronOutline = () => {
	const svgRef = useRef(null);

	useEffect(() => {
		const paths = svgRef.current?.querySelectorAll("path");

		if (paths) {
			paths.forEach((path, index) => {
				const length = path.getTotalLength();
				gsap.fromTo(
					path,
					{ strokeDasharray: length, strokeDashoffset: length },
					{ strokeDashoffset: 0, duration: 20 + index * 0.2, ease: "power2.out" }
				);
			});
		}
	}, []);

	return (
		<Box
			sx={{
				height: "auto",
				width: "163px",
				position: "absolute",
				top: ["70%", "50%"],
				left: "50%",
				transform: "translate(-50%, -50%)"
			}}>
			<SvgComponent ref={svgRef} />
		</Box>
	);
};

export default AnimatedJumbotronOutline;
