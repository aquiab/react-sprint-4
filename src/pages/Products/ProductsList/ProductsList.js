import "./ProductsList.css"
import ProductsCard from '../../../components/productsCard/ProductsCard'
import axios from 'axios';
import { useState , useEffect} from "react";

export default function ProductsList() {

    const [productos , setProductos]= useState([])

    useEffect (()=>{

        axios.get('http://localhost:3001/products/')
            .then(res=> setProductos(res.data))
            .catch(err=>console.log(err))
    },[])
     
    return(
        <>
            <ul>
                {productos.map((producto)=>
                
                    <li key={producto.id}>
                        <ProductsCard producto={producto}/>
                    </li>
                )}
            </ul>

            
        </>
    )
}