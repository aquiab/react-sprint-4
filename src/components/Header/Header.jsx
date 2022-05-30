import React, { useContext } from "react";
import PropTypes from "prop-types";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import svgBars from "../../assets/menu.svg";
import "./header.css";
import { sidebarContext } from "../../context/sidebarContext";
const Header = ({ addon, breadcrumbs }) => {

  const { toggleSidebar } = useContext(sidebarContext);
	return (
		<header className="header">
			<div className="container">
				<button className="menuButton" onClick={toggleSidebar}>
					<img src={svgBars} alt=""/>
				</button>
				<Breadcrumb steps={breadcrumbs} />
			</div>
			<div className="addon-container">{addon}</div>
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
