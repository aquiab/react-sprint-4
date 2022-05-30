import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import svgHome from "../../assets/home.svg";
import svgProducts from "../../assets/package-variant-closed.svg";
import svgStore from "../../assets/store.svg";
import ProfileButton from "../ProfileButton/ProfileButton";
import { sidebarContext } from "../../context/sidebarContext";
import "./menuPrincipal.css";

const MenuPrincipal = () => {
	const { closeSidebar } = useContext(sidebarContext);
	return (
		<div className="menuPrincipal__container">
			<nav className="navbar">
				<Link to="/" onClick={closeSidebar}>
					<Logo />
				</Link>
				<ul className="list">
					<li>
						<NavLink
							className={({ isActive }) =>
								"navlink " + (isActive ? "active" : "")
							}
							to="/"
							onClick={closeSidebar}
						>
							<img className="" src={svgHome} alt="" /> Inicio
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								"navlink " + (isActive ? "active" : "")
							}
							to="/products"
							onClick={closeSidebar}
						>
							<img className="" src={svgProducts} alt="" /> Productos
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								"navlink " + (isActive ? "active" : "")
							}
							to="/stores"
							onClick={closeSidebar}
						>
							<img className="" src={svgStore} alt="" /> Tiendas
						</NavLink>
					</li>
				</ul>
			</nav>
			<Link to="/profile" onClick={closeSidebar}>
				<ProfileButton />
			</Link>
		</div>
	);
};

export default MenuPrincipal;
