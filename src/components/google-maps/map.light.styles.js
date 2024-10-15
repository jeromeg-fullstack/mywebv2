/* eslint-disable import/no-anonymous-default-export */
export default {
	mapstyle: [
		{
			featureType: "all",
			elementType: "labels.text.fill",
			stylers: [
				{
					saturation: 36
				},
				{
					color: "#a0b8c3" // Lighter version of #77929e
				}
			]
		},
		{
			featureType: "all",
			elementType: "labels.text.stroke",
			stylers: [
				{
					visibility: "on"
				},
				{
					color: "#2b2b2b" // Lighter version of #000000
				},
				{
					lightness: 30 // Increased lightness
				}
			]
		},
		{
			featureType: "all",
			elementType: "labels.icon",
			stylers: [
				{
					visibility: "off"
				}
			]
		},
		{
			featureType: "administrative",
			elementType: "geometry.fill",
			stylers: [
				{
					color: "#2b2b2b" // Lighter version of #000000
				},
				{
					lightness: 40 // Increased lightness
				}
			]
		},
		{
			featureType: "landscape",
			elementType: "geometry",
			stylers: [
				{
					color: "#303030" // Lighter version of #1d1d1d
				}
			]
		},
		{
			featureType: "poi",
			elementType: "geometry",
			stylers: [
				{
					color: "#2b2b2b" // Lighter version of #000000
				},
				{
					lightness: 40 // Increased lightness
				}
			]
		},
		{
			featureType: "road.highway",
			elementType: "geometry.fill",
			stylers: [
				{
					color: "#2b2b2b" // Lighter version of #000000
				},
				{
					lightness: 30 // Increased lightness
				}
			]
		},
		{
			featureType: "road.arterial",
			elementType: "geometry",
			stylers: [
				{
					color: "#2b2b2b" // Lighter version of #000000
				},
				{
					lightness: 25 // Increased lightness
				}
			]
		},
		{
			featureType: "road.local",
			elementType: "geometry",
			stylers: [
				{
					color: "#2b2b2b" // Lighter version of #000000
				},
				{
					lightness: 25 // Increased lightness
				}
			]
		},
		{
			featureType: "transit",
			elementType: "geometry",
			stylers: [
				{
					color: "#2b2b2b" // Lighter version of #000000
				},
				{
					lightness: 30 // Increased lightness
				}
			]
		},
		{
			featureType: "water",
			elementType: "geometry",
			stylers: [
				{
					color: "#52a3c7" // Lighter version of #1677a1
				}
			]
		}
	]
};
