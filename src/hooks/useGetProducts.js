import { useContext } from "react";
import axios from 'axios';
import { productsContext } from "../context/ProductsContext";

const useGetProducts = () => {

    const {products, setProducts} = useContext(productsContext)

    const getProducts = ()=>{
        axios.get('http://localhost:3001/products/')
            .then(res=>setProducts(res.data))
            .catch(err=>console.log(err))

    }

  return (
    {products, getProducts}
  )
}

export default useGetProducts