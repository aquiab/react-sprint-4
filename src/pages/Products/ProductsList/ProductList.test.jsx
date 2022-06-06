import {render, screen} from "@testing-library/react"
import ProductList from "./ProductsList"
import {MemoryRouter} from "react-router-dom"
import ProductsProvider, { productsContext } from "../../../context/ProductsContext"

describe("Products List",()=>{
    test("se renderizan cards correctas",()=>{
        render(
        <MemoryRouter>
            <productsContext.Provider
                value={{
                    products:[],
                    setProducts:jest.fn()
                }}
            >
                <ProductList/>
            </productsContext.Provider>
        </MemoryRouter>
        
        )
        screen.debug()
    })
})