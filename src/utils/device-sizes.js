// Breakpoints with corrections
export const breakpointsMinWidth = {
	base: "200px",
	mobileXs: "327px",
	mobileS: "415px",
	mobileM: "600px",
	mobileL: "765px", // Added 'px'
	tablet: "900px", // Added 'px'
	laptop: "1024px",
	laptopL: "1200px",
	desktop: "1366px"
};

export const breakpointsMaxWidth = {
	mobileXs: "414px",
	mobileS: "599px",
	mobileM: "764px",
	mobileL: "899px",
	tablet: "1023px",
	laptop: "1199px",
	laptopL: "1365px",
	desktop: "2501px"
};
// Devices Min Width
export const devicesMinWidth = {
	mobileXs: `(min-width: ${breakpointsMinWidth.base})`,
	mobileS: `(min-width: ${breakpointsMinWidth.mobileS})`,
	mobileM: `(min-width: ${breakpointsMinWidth.mobileM})`,
	mobileL: `(min-width: ${breakpointsMinWidth.mobileL})`,
	tablet: `(min-width: ${breakpointsMinWidth.tablet})`,
	laptop: `(min-width: ${breakpointsMinWidth.laptop})`,
	laptopL: `(min-width: ${breakpointsMinWidth.laptopL})`,
	desktop: `(min-width: ${breakpointsMinWidth.desktop})`
};

// Devices Max Width
export const devicesMaxWidth = {
	mobileXs: `(max-width: ${breakpointsMaxWidth.mobileXs})`,
	mobileS: `(max-width: ${breakpointsMaxWidth.mobileS})`,
	mobileM: `(max-width: ${breakpointsMaxWidth.mobileM})`,
	mobileL: `(max-width: ${breakpointsMaxWidth.mobileL})`,
	tablet: `(max-width: ${breakpointsMaxWidth.tablet})`,
	laptop: `(max-width: ${breakpointsMaxWidth.laptop})`,
	laptopL: `(max-width: ${breakpointsMaxWidth.laptopL})`,
	desktop: `(max-width: ${breakpointsMaxWidth.desktop})`
};
