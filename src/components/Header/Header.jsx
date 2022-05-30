import React, { useContext } from "react";
import PropTypes from "prop-types";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import svgBars from "../../assets/menu.svg";
import "./header.css";
import { sidebarContext } from "../../context/sidebarContext";
const Header = ({ addon, addonExpanded, breadcrumbs }) => {

  const { toggleSidebar } = useContext(sidebarContext);
	return (
		<header className="header" style={{justifyContent: addonExpanded ? "stretch" : "space-between"}} >
			<div className="container" style={{display: addonExpanded ? "none" : "flex"}}>
				<button className="menuButton" onClick={toggleSidebar}>
					<img src={svgBars} alt=""/>
				</button>
				<Breadcrumb steps={breadcrumbs} />
			</div>
			<div className={`addon-container ${addonExpanded && "expanded"}`}>{addon}</div>
		</header>
	);
};

Header.propType = {
	addon: PropTypes.element,
	breadcrumbs: PropTypes.arrayOf(
		PropTypes.shape({ title: PropTypes.string, path: PropTypes.string })
	).isRequired
};

export default Header;
