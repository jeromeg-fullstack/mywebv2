import React from "react";
import getConfig from "next/config";
import GoogleMapReact from "google-map-react";
import mapDarkStyle from "./map.dark.styles";
import mapLightStyle from "./map.light.styles";
import { Box } from "@mui/material";
import { useThemeCtx } from "@/context/theme";

const logo2 = "/images/misc/logo.svg"; // Ensure this path is correct

const GoogleMaps = () => {
	const { isDark } = useThemeCtx();
	const { publicRuntimeConfig } = getConfig();

	// Ensure googleMapsKey is defined
	let googleMapsKey = publicRuntimeConfig?.googleMapsKey || "";

	// Define latitude and longitude values
	const lat = 14.7108;
	const lng = 121.0523;

	// Log for debugging
	console.log("Google Maps Key: ", googleMapsKey);

	const renderMarkers = (map, maps) => {
		// Check if map and maps objects are defined
		if (!map || !maps) {
			console.error("Map or Maps object is undefined.");
			return;
		}

		// Use AdvancedMarkerElement if available
		if (maps.marker && maps.marker.AdvancedMarkerElement) {
			let marker = new maps.marker.AdvancedMarkerElement({
				position: { lat: lat, lng: lng },
				map: map,
				title: "Spex marks the spot!",
				icon: logo2
			});
			return marker;
		} else {
			// Fallback to regular Marker if AdvancedMarkerElement is not available
			let marker = new maps.Marker({
				position: { lat: lat, lng: lng },
				map: map,
				title: "Spex marks the spot!",
				icon: logo2
			});
			return marker;
		}
	};

	// If the Google Maps API key is undefined, show an error
	if (!googleMapsKey) {
		console.error("Google Maps API key is missing.");
		return <div>Error: Google Maps API key is not defined.</div>;
	}

	return (
		<Box sx={{ height: "100%", maxWidth: "100%" }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: googleMapsKey }} // Ensure the API key is passed
				defaultZoom={12}
				defaultCenter={{ lat: lat || 0, lng: lng || 0 }} // Fallback to 0 if lat or lng is undefined
				options={{ styles: isDark ? mapDarkStyle : mapLightStyle }}
				yesIWantToUseGoogleMapApiInternals
				onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
				style={{ height: "100vh" }}
			/>
		</Box>
	);
};

export default GoogleMaps;
