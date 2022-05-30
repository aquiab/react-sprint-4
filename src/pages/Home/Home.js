import BarraMain from "../../components/barra-main/BarraMain";
import "./Home.css";
import svgProduct from "../../assets/package-variant-closed.svg";
import svgStore from "../../assets/store.svg";
import Header from "../../components/Header/Header";
import { useContext } from "react";
import { userContext } from "../../context/userContext";

export default function Home() {
	const { user } = useContext(userContext);

	const tiendas = ['Tiendas', 'Tienda']
    const productos = ['Productos', 'Producto']
	const crumbs = [{ title: `Hola ${user.name}!`, path: "/" }];
	return (
		<div className="home">
			<Header breadcrums={crumbs} />
			<div className="home__container">
				<BarraMain svgImg={svgProduct} nombre={productos} />
				<BarraMain svgImg={svgStore} nombre={tiendas}/>
			</div>
		</div>
	);
}
