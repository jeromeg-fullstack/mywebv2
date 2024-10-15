import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScriptNext, Marker } from "@react-google-maps/api";
import { useTheme, Box } from "@mui/material";
import getConfig from "next/config";
import mapDarkStyle from "./map.dark.styles";
// import mapLightStyle from "./map.light.styles";

const logo2 = "/images/misc/logo.svg"; // Ensure this path is correct

const GoogleMaps = () => {
	const theme = useTheme();
	const { publicRuntimeConfig } = getConfig();
	const googleMapsKey =
		publicRuntimeConfig?.googleMapsKey || process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;

	const lat = 14.7108;
	const lng = 121.0523;

	const containerStyle = {
		width: "100%",
		height: "100vh"
	};

	const mapOptions = {
		styles: theme.palette.mode === "dark" ? mapDarkStyle.mapstyle : ""
	};

	// State to manage the preloaded image
	const [iconUrl, setIconUrl] = useState(null);

	// Preload the custom marker icon
	useEffect(() => {
		const img = new Image();
		img.src = logo2;
		img.onload = () => setIconUrl(logo2); // Set the icon once it's loaded
	}, []);

	if (!googleMapsKey) {
		console.error("Google Maps API key is missing.");
		return <div>Error: Google Maps API key is not defined.</div>;
	}

	return (
		<Box sx={{ height: "100vh", width: "100%" }}>
			<LoadScriptNext googleMapsApiKey={googleMapsKey}>
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={{ lat, lng }}
					zoom={12}
					options={mapOptions}>
					{iconUrl && window.google && (
						<Marker
							position={{ lat, lng }}
							title="Spex marks the spot!"
							icon={{
								url: iconUrl,
								scaledSize: new window.google.maps.Size(200, 200) // Check if window.google is available
							}}
						/>
					)}
				</GoogleMap>
			</LoadScriptNext>
		</Box>
	);
};

export default GoogleMaps;
