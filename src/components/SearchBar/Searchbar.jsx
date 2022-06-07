import React, { useState } from "react";
import svgLupa from "../../assets/lupa.svg";
import "./searchbar.css";
const Searchbar = ({ value, onChange, onExpand }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const handleClick = () => {
		setIsExpanded((x) => !x);
		onExpand();
	};
	return (
		<div className="searchbar-container">
			<button
				className="closeButton"
				style={{ display: isExpanded ? "flex" : "none" }}
				onClick={handleClick}
			>
				X
			</button>
			<div className={`searchBar ${isExpanded && "expanded"}`}>
				<form>
					<input
						type="search"
						id="busqueda"
						name="busqueda"
						value={value}
						onChange={onChange}
						placeholder="Buscar productos"
					/>
				</form>
				<button className="lupa" onClick={handleClick}>
					<img src={svgLupa} alt="" />
				</button>
			</div>
		</div>
	);
};

export default Searchbar;
