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
					color: "#77929e"
				},
				{
					// "lightness": 20
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
					color: "#000000"
				},
				{
					lightness: 16
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
					color: "#000000"
				},
				{
					lightness: 20
				}
			]
		},
		{
			featureType: "administrative",
			elementType: "geometry.stroke",
			stylers: [
				{
					color: "#000000"
				},
				{
					lightness: 17
				},
				{
					weight: 1.2
				}
			]
		},
		{
			featureType: "landscape",
			elementType: "geometry",
			stylers: [
				{
					color: "#1d1d1d"
				}
			]
		},
		{
			featureType: "poi",
			elementType: "geometry",
			stylers: [
				{
					color: "#000000"
				},
				{
					lightness: 21
				}
			]
		},
		{
			featureType: "road.highway",
			elementType: "geometry.fill",
			stylers: [
				{
					color: "#000000"
				},
				{
					lightness: 17
				}
			]
		},
		{
			featureType: "road.highway",
			elementType: "geometry.stroke",
			stylers: [
				{
					color: "#000000"
				},
				{
					lightness: 29
				},
				{
					weight: 0.2
				}
			]
		},
		{
			featureType: "road.arterial",
			elementType: "geometry",
			stylers: [
				{
					color: "#000000"
				},
				{
					lightness: 18
				}
			]
		},
		{
			featureType: "road.local",
			elementType: "geometry",
			stylers: [
				{
					color: "#000000"
				},
				{
					lightness: 16
				}
			]
		},
		{
			featureType: "transit",
			elementType: "geometry",
			stylers: [
				{
					color: "#000000"
				},
				{
					lightness: 19
				}
			]
		},
		{
			featureType: "water",
			elementType: "geometry",
			stylers: [
				{
					color: "#1677a1"
				},
				{
					// "lightness": 17
				}
			]
		},
		{
			featureType: "water",
			elementType: "geometry.fill",
			stylers: [
				{
					visibility: "on"
				}
			]
		}
	]
};