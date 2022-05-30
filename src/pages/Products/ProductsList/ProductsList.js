import "./ProductsList.css"
import ProductsCard from '../../../components/productsCard/ProductsCard'
import { useContext, useEffect , useState } from "react";
import useGetProducts from "../../../hooks/useGetProducts";
import { productsContext } from "../../../context/ProductsContext";
import axios from 'axios'
import Header from "../../../components/Header/Header";

export default function ProductsList() {

    const crumbs = [{ title: `Productos`, path: "/products" }];

    const { setProducts }= useContext(productsContext)

    const [busqueda , setBusqueda] = useState('');

    const [filtrados, setFiltrados] = useState([]);

    const {products, getProducts} = useGetProducts();

    const handleChange = (e) =>{
        setBusqueda(e.target.value);
        filtrar(e.target.value)
    }

    const filtrar = (terminoBusqueda) => {
        var filt= filtrados.filter((elemento=>{
            if(elemento.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return true;
            }
            return false
        }))
        setProducts(filt)
    }

    useEffect (()=>{

        getProducts();
        axios.get('http://localhost:3001/products/')
            .then(res=>setFiltrados(res.data))
            .catch(err=>console.log(err))
    },[])
    
    return(
        <>
        <Header breadcrumbs={crumbs}/>
        <form>
            <label htmlFor='busqueda'>Buscar</label> 
            <input 
                type='text' 
                id='busqueda' 
                name='busqueda' 
                value={busqueda} 
                onChange={handleChange}
        />
        </form>
        
            <ul>
                {products.map((producto)=>
                
                    <li key={producto.id}>
                        <ProductsCard producto={producto}/>
                    </li>
                )}
            </ul>
        
            
        </>
    )
}