import "./ProductsList.css";
import ProductsCard from "../../../components/productsCard/ProductsCard";
import { useContext, useEffect, useState } from "react";
import useGetProducts from "../../../hooks/useGetProducts";
import { productsContext } from "../../../context/ProductsContext";
import axios from "axios";
import Header from "../../../components/Header/Header";
import Searchbar from "../../../components/SearchBar/Searchbar";
import { Link } from "react-router-dom";

export default function ProductsList() {
	const crumbs = [{ title: `Productos`, path: "/products" }];

	const { setProducts } = useContext(productsContext);

	const [busqueda, setBusqueda] = useState("");

	const [filtrados, setFiltrados] = useState([]);

	const { products, getProducts } = useGetProducts();

    const [searchbarExpanded, setSearchbarExpanded] = useState(false)

	const handleChange = (e) => {
		setBusqueda(e.target.value);
		filtrar(e.target.value);
	};

	const filtrar = (terminoBusqueda) => {
		var filt = filtrados.filter((elemento) => {
			if (
				elemento.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
			) {
				return true;
			}
			return false;
		});
		setProducts(filt);
	};

	useEffect(() => {
		getProducts();
		axios
			.get(process.env.REACT_APP_API_PRODUCTS)
			.then((res) => setFiltrados(res.data))
			.catch((err) => console.log(err));
	}, []);


    const handleSearchBarExpand = () => {
        setSearchbarExpanded(!searchbarExpanded)
    }
	return (
		<>
			<Header
				breadcrumbs={crumbs}
				addon={
				<> 	
					<Searchbar value={busqueda} onChange={handleChange} onExpand={handleSearchBarExpand}/>
					<Link className="button-hover" to="/products/new">Agregar producto</Link>
				</>
				}
				addonExpanded={searchbarExpanded}
			/>

			<ul>
				{products.map((producto) => (
					<li key={producto.id}>
						<ProductsCard producto={producto} />
					</li>
				))}
			</ul>
		</>
	);
}
