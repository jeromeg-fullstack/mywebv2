import React from "react";
import getConfig from "next/config";
import GoogleMapReact from "google-map-react";
import mapDarkStyle from "./map.dark.styles";
import mapLightStyle from "./map.light.styles";
const logo2 = "/images/misc/logo.svg";
import { Box } from "@mui/material";
import { useThemeCtx } from "@/context/theme";

const { publicRuntimeConfig } = getConfig();

const googleMapsKey = publicRuntimeConfig.googleMapsKey;

const GoogleMaps = () => {
	const { isDark } = useThemeCtx();
	const lat = 14.7108;
	const lng = 121.0523;

	const renderMarkers = (map, maps) => {
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
	return (
		<Box sx={{ height: "100%", maxWidth: "100%" }}>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: googleMapsKey
				}}
				defaultZoom={12}
				options={{ styles: isDark ? mapDarkStyle : mapLightStyle }}
				defaultCenter={{
					lat: lat,
					lng: lng
				}}
				yesIWantToUseGoogleMapApiInternals
				onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}></GoogleMapReact>
		</Box>
	);
};

export default GoogleMaps;
