import {render, screen} from "@testing-library/react"
import { renderHook,act } from "@testing-library/react"
import ProductList from "./ProductsList"
import {MemoryRouter} from "react-router-dom"
import { sidebarContext } from "../../../context/sidebarContext"
import { productsContext } from "../../../context/ProductsContext"
import ProductsCard from "../../../components/productsCard/ProductsCard"
import useGetProducts from "../../../hooks/useGetProducts"


jest.mock("../../../hooks/useGetProducts")

describe("Products List",()=>{
const products = [
    {
    nombre: "prod1",
    precio: "2",
    stock: "99",
    desc: "desc",
    imgs: [
      "https://tienda.claro.com.ar/wcsstore/Claro/Attachment/linea-z-galaxy-foldheadmain.jpg",
      "https://www.clarin.com/img/2021/08/11/galaxy-z-fold-3-con___UPWei7kxV_340x340__1.jpg"
    ],
    id: 1
  },
  {
    nombre: "prod2",
    precio: "3",
    stock: "88",
    desc: "desc2",
    imgs: [
      "imgs1",
      "imgs2"
    ],
    id: 2
  },
  {
    nombre: "prod3",
    precio: "3",
    stock: "88",
    desc: "desc2",
    imgs: [
      "imgs1",
      "imgs2"
    ],
    id: 3
  }
]
  
  beforeEach(()=>{
        useGetProducts.mockReturnValue({products:products, getProducts: jest.fn()})
        render(
            <MemoryRouter>
                <sidebarContext.Provider
                    value={{
                        isOpen:false,
                        toggleSidebar: jest.fn(),
                        openSidebar: jest.fn(),
                        closeSidebar: jest.fn(),
                    }}
                    >
                    <productsContext.Provider
                        value={{
                            products:[],
                            setProducts:jest.fn()
                        }}
                    >
                        <ProductList>
                            <ProductsCard producto = {products}/>
                        </ProductList>
                    </productsContext.Provider>
                </sidebarContext.Provider>
            </MemoryRouter>        
            )
    })

    test("se renderizan cards correctas", async ()=>{

        screen.debug()
        const productEl = screen.getAllByRole("listitem")
        expect(productEl).toHaveLength(3)
    })
})