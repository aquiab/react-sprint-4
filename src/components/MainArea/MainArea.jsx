import React, { useContext, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { sidebarContext } from "../context/sidebarContext";
import "./mainArea.css";

const MainArea = ({ children }) => {
	const { isOpen, closeSidebar } = useContext(sidebarContext);
	const sidebarStyle = {
		left: isOpen ? "0" : "-100%",
	};

  const sidebarRef = useClickOutside(closeSidebar)


	return (
		<div className="mainArea-container">
			<aside className="sidebar" style={sidebarStyle} ref={sidebarRef}>
				Sidebar
			</aside>
			<main className="mainArea">
				{children}
			</main>
		</div>
	);
};

export default MainArea;
