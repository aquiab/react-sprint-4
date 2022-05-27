import React, { useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import "./mainArea.css";
import svgBars from "../../assets/menu.svg";

const MainArea = ({ children }) => {
	const [sidebarOpened, setSidebarOpened] = useState(false);
	const sidebarStyle = {
		left: sidebarOpened ? "0" : "-100%",
	};

	const handleSidebarOpen = () => {
		setSidebarOpened((x) => !x);
	};

  const closeSidebar = () => {
    setSidebarOpened(false);
  };

  const sidebarRef = useClickOutside(closeSidebar)


	return (
		<div className="mainArea-container">
			<aside className="sidebar" style={sidebarStyle} ref={sidebarRef}>
				MainArea
			</aside>
			<main className="mainArea">
				<button className="menuButton" onClick={handleSidebarOpen}><img src={svgBars}/></button>
				{children}
			</main>
		</div>
	);
};

export default MainArea;
