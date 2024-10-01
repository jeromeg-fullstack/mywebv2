import { SiteUiProvider } from "@/context/ui";
import SiteContainer from "@/layout/site-container";
import SiteLoader from "@/layout/site-loader";

import MobileView from "@/layout/mobile-view";
import DesktopView from "@/layout/desktop-view";
import MobileHeader from "@/layout/mobile-header";
import DesktopHeader from "@/layout/desktop-header";

import { useIsScreenSizes } from "@/hooks/useIsScreenSizes";

const UserLayout = ({ children }) => {
	const { isMobileXS, isMobileS, isMobileM, isMobileL, isTablet } = useIsScreenSizes();

	const isSmallView = isMobileXS || isMobileS || isMobileM || isMobileL || isTablet;

	return (
		<SiteUiProvider>
			<SiteContainer>
				{isSmallView ? (
					<MobileView {...{ MobileHeader }}>{children}</MobileView>
				) : (
					<DesktopView {...{ DesktopHeader }}>{children}</DesktopView>
				)}
			</SiteContainer>
		</SiteUiProvider>
	);
};

export default UserLayout;
