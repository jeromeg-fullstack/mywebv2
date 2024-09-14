import { styled, GlobalStyles } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Page = styled("div")(({ theme }) => ({
	backgroundImage: "url('/images/background/bg-415px.png')",
	backgroundSize: "cover",
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
	position: "relative",
	display: "flex",
	flexDirection: "column-reverse",
	// MUI Breakpoints for media queries
	[theme.breakpoints.up("sm")]: {
		backgroundImage: "url('/images/background/bg-600px.png')"
	},
	[theme.breakpoints.up("md")]: {
		backgroundImage: "url('/images/background/bg-765px.png')"
	},
	[theme.breakpoints.up("lg")]: {
		backgroundImage: "url('/images/background/bg-900px.png')"
	},
	[theme.breakpoints.up("xl")]: {
		backgroundImage: "url('/images/background/bg-1366px.png')"
	}
}));

const SiteContainer = ({ children }) => {
	const theme = useTheme();

	return (
		<Page>
			<GlobalStyles
				styles={{
					body: {
						height: "100%",
						width: "100vw",
						overflowX: "hidden",
						overflowY: "hidden",
						position: "relative",
						margin: 0,
						padding: 0
					}
				}}
			/>
			{children}
		</Page>
	);
};

export default SiteContainer;
