import { createContext, useState, useMemo } from "react";

const SiteUiContext = createContext();

const SiteUiProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [isInit, setIsInit] = useState(false);

	const state = useMemo(() => ({ isLoading, isOpen, isInit }), [isLoading, isOpen, isInit]);
	const dispatch = useMemo(() => ({ setIsLoading, setIsOpen, setIsInit }), []);

	return <SiteUiContext.Provider value={{ state, dispatch }}>{children}</SiteUiContext.Provider>;
};

export { SiteUiContext, SiteUiProvider };
