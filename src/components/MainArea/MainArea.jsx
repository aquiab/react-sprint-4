import React, { useContext } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { sidebarContext } from "../../context/sidebarContext";
import "./mainArea.css";
import MenuPrincipal from "../MenuPrincipal/MenuPrincipal";

const MainArea = ({ children }) => {
	const { isOpen, closeSidebar } = useContext(sidebarContext);
	const sidebarStyle = {
		left: isOpen ? "0" : "-100%",
	};

	const sidebarRef = useClickOutside(closeSidebar);

	return (
		<div className="mainArea-container">
			<aside className="sidebar" style={sidebarStyle} ref={sidebarRef}>
				<MenuPrincipal />
			</aside>
			<main className="mainArea">{children}</main>
			<div
				className="clickEventGuard"
				style={{ display: isOpen ? "block" : "none" }}
			/>
		</div>
	);
};

export default MainArea;
