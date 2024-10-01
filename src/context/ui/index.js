import { createContext, useState, useMemo, useContext } from "react";

const SiteUiCtx = createContext();

const SiteUiProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [isInit, setIsInit] = useState(false);
  const [initBlastAnim, setInitBlastAnim] = useState(false);
	const [initBounceAnim, setInitBounceAnim] = useState(false);

	const state = useMemo(
		() => ({ isLoading, isOpen, isInit, initBlastAnim, initBounceAnim }),
		[isLoading, isOpen, isInit, initBlastAnim, initBounceAnim]
	);
	const dispatch = useMemo(
		() => ({ setIsLoading, setIsOpen, setIsInit, setInitBlastAnim, setInitBounceAnim }),
		[]
	);

	return <SiteUiCtx.Provider value={{ state, dispatch }}>{children}</SiteUiCtx.Provider>;
};

const useUiCtx = () => {
	const context = useContext(SiteUiCtx);
	if (!context) {
		throw new Error("useThemeCtx must be used within a SiteProvider");
	}
	return context;
};

export { useUiCtx, SiteUiProvider };
