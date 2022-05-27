import React, { createContext, useState } from "react";

export const sidebarContext = createContext();

const SidebarProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen((x) => !x);
	};

	const closeSidebar = () => {
		setIsOpen(false);
	};

	const openSidebar = () => {
		setIsOpen(true);
	};

  const values = {
    isOpen,
    toggleSidebar,
    openSidebar,
    closeSidebar
  }

  return (
		<sidebarContext.Provider value={values}>
			{children}
		</sidebarContext.Provider>
	);
};

export default SidebarProvider;
