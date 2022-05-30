import React, {createContext, useState} from 'react'

export const productsContext=createContext();

const ProductsProvider = ({children}) => {

    const {Provider} = productsContext;
    const [products , setProducts] = useState([])


  return (
    <Provider value={{products, setProducts}}>
        {children}
    </Provider>
    )
}

export default ProductsProvider