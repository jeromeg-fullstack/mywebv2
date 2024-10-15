import { SiteUiProvider } from "@/context/ui";

import SiteLoader from "@/layout/site-loader";
import SiteContainer from "@/layout/site-container";

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
			<SiteLoader>
				<SiteContainer>
					{isSmallView ? (
						<MobileView {...{ MobileHeader }}>{children}</MobileView>
					) : (
						<DesktopView {...{ DesktopHeader }}>{children}</DesktopView>
					)}
				</SiteContainer>
			</SiteLoader>
		</SiteUiProvider>
	);
};

export default UserLayout;
