import BarraMain from "../../components/barra-main/BarraMain";
import "./Home.css";
import svgProduct from "../../assets/package-variant-closed.svg";
import svgStore from "../../assets/store.svg";
import Header from "../../components/Header/Header";
import { useContext } from "react";
import { userContext } from "../../context/userContext";

export default function Home() {
	const { user } = useContext(userContext);

	const tiendas = {barraTitulo:"Tiendas", botonTitulo:"Tienda", pathToListado:'*',pathToAgregar:'*' }; 
	const productos = {barraTitulo:"Productos", botonTitulo:"Producto", pathToListado:'products',pathToAgregar:'products/new'};
	const crumbs = [{ title: `Hola ${user.name}!`, path: "/" }];
	return (
		<div className="home">
			<Header breadcrumbs={crumbs} />
			<div className="home__container">
				<BarraMain svgImg={svgProduct} nombre={productos} />
				<BarraMain svgImg={svgStore} nombre={tiendas}  />
			</div>
		</div>
	);
}
