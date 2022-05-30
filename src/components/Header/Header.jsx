import React, { useContext } from "react";
import PropTypes from "prop-types";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import svgBars from "../../assets/menu.svg";
import "./header.css";
import { sidebarContext } from "../../context/sidebarContext";
const Header = ({ addon, breadcrums }) => {

  const { toggleSidebar } = useContext(sidebarContext);
	return (
		<header className="header">
			<div className="container">
				<button className="menuButton" onClick={toggleSidebar}>
					<img src={svgBars} />
				</button>
				<Breadcrumb steps={breadcrums} />
			</div>
			<div className="addon-container">{addon}</div>
		</header>
	);
};

Header.propType = {
	addon: PropTypes.element,
	breadcrums: PropTypes.arrayOf(
		PropTypes.shape({ title: PropTypes.string, path: PropTypes.string })
	).isRequired
};

export default Header;
