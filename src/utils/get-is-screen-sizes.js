// Media Query Hook Usage
import { useMediaQuery } from "@mui/material";
import { devicesMaxWidth, devicesMinWidth } from "@/utils/device-sizes";

export default function useIsScreenSizes() {
	const isMobileXS = useMediaQuery(`${devicesMinWidth.mobileXs} and ${devicesMaxWidth.mobileXs}`);
	const isMobileS = useMediaQuery(`${devicesMinWidth.mobileS} and ${devicesMaxWidth.mobileS}`);
	const isMobileM = useMediaQuery(`${devicesMinWidth.mobileM} and ${devicesMaxWidth.mobileM}`);
	const isMobileL = useMediaQuery(`${devicesMinWidth.mobileL} and ${devicesMaxWidth.mobileL}`); // Corrected
	const isTablet = useMediaQuery(`${devicesMinWidth.tablet} and ${devicesMaxWidth.tablet}`);
	const isLaptop = useMediaQuery(`${devicesMinWidth.laptop} and ${devicesMaxWidth.laptop}`); // Corrected 'Tablet' to 'tablet'
	const isLaptopL = useMediaQuery(`${devicesMinWidth.laptopL} and ${devicesMaxWidth.laptopL}`);
	const isDesktop = useMediaQuery(`${devicesMinWidth.desktop} and ${devicesMaxWidth.desktop}`); // Corrected

	return {
		isMobileXS,
		isMobileS,
		isMobileM,
		isMobileL,
		isTablet,
		isLaptop,
		isLaptopL,
		isDesktop
	};
}
