import { SiteUiProvider } from "@/context/ui";
import SiteContainer from "@/layout/site-container";
import SiteLoader from "@/layout/site-loader";
import useIsScreenSizes from "@/utils/get-is-screen-sizes";
import MobileView from "@/layout/mobile-view";
import DesktopView from "@/layout/desktop-view";
import MobileHeader from "@/layout/mobile-header";
import DesktopHeader from "@/layout/desktop-header";

const UserLayout = ({ children }) => {
	const { isMobileXS, isMobileS, isMobileM, isMobileL, isTablet } = useIsScreenSizes();

	const isSmallView = isMobileXS || isMobileS || isMobileM || isMobileL || isTablet;

	return (
		<SiteUiProvider>
			<SiteContainer>
				<SiteLoader>
					{isSmallView ? (
						<MobileView {...{ MobileHeader }}>{children}</MobileView>
					) : (
						<DesktopView {...{ DesktopHeader }}>{children}</DesktopView>
					)}
				</SiteLoader>
			</SiteContainer>
		</SiteUiProvider>
	);
};

export default UserLayout;
