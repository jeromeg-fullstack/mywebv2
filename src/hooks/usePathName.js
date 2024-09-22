import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function usePathName() {
	const [isBlogPage, setIsBlogPage] = useState(false);

	const router = useRouter();

	const blogPathPattern = /^\/blog(\/.*)?$/;

	useEffect(() => {
		if (!router.isReady) return; // Ensure the router is ready

		const handleRouteChange = (url) => {
			console.log("Route changed to:", url);
			if (url === "/blog" || blogPathPattern.test(url)) {
				setIsBlogPage(true);
			} else {
				setIsBlogPage(false);
			}
		};

		handleRouteChange(router.asPath);

		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.isReady, router.asPath]);

	return { isBlogPage };
}
