import { styled } from "@mui/material";

const SiteLayout = styled("div")({
	className: "site-container"
})`
display: flex;
	flex-direction: column;
	min-height: 100vh;
  overflow-y: hidden;
  @media (min-width: 1200px) {
    flex-direction: row;
  }`;

export default SiteLayout;
