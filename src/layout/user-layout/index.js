import { SiteUiProvider } from "@/context/ui";
import SiteContainer from "@/layout/site-container";
import SiteLoader from "@/layout/site-loader";
import getIsScreenSizes from "@/utils/get-is-screen-sizes";
import MobileView from "./../mobile-view";
import DesktopView from "./../desktop-view";
import MobileHeader from "../mobile-header";

const UserLayout = ({ children }) => {
	const { isMobileXS, isMobileS, isMobileM, isMobileL, isTablet, isLaptop, isLaptopL, isDesktop } =
		getIsScreenSizes();

	const isSmallScreen = isMobileXS || isMobileS || isMobileM || isMobileL || isTablet;
	const isBigScreen = isLaptop || isLaptopL || isDesktop;

	console.log("isSmallScreen :", isSmallScreen, "\n", "isBigScreen :", isBigScreen);

	return (
		<SiteUiProvider>
			<SiteContainer>
				<SiteLoader>
					{isSmallScreen ? (
						<MobileView {...{ MobileHeader }}>{children}</MobileView>
					) : (
						<DesktopView />
					)}
				</SiteLoader>
			</SiteContainer>
		</SiteUiProvider>
	);
};

export default UserLayout;
