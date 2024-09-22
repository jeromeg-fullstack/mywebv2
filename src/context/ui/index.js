import { createContext, useState, useMemo, useContext } from "react";

const SiteUiCtx = createContext();

const SiteUiProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [isInit, setIsInit] = useState(false);

	const state = useMemo(() => ({ isLoading, isOpen, isInit }), [isLoading, isOpen, isInit]);
	const dispatch = useMemo(() => ({ setIsLoading, setIsOpen, setIsInit }), []);

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
