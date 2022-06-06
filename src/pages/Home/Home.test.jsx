import { render, screen } from "@testing-library/react"
import Home from "./Home"
import { MemoryRouter } from "react-router-dom"
import { userContext } from "../../context/userContext"
import { sidebarContext } from "../../context/sidebarContext"
import useGetProducts from "../../hooks/useGetProducts"

jest.mock("../../hooks/useGetProducts")

const producto = [{
    id : "1",
    imgs : "url",
    nombre : "nombre"
},
{
    id : "2",
    imgs : "url2",
    nombre : "nombre2"
},
]
describe ("Home",()=>{
    beforeEach(()=>{
        const user={
            name:"olivia",
            image:"url"
        }
        useGetProducts.mockReturnValue({products:producto, getProducts: jest.fn()})
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
                <userContext.Provider
                    value={{user}}
                >
                    <Home/>
                </userContext.Provider>
    
            </sidebarContext.Provider>
        </MemoryRouter>
    )
    })
    test("se renderiza correctamente",()=>{
        screen.debug();
        const ulEl=screen.getAllByRole("list");
        const imgEl=screen.getAllByRole("img");
        const butEl=screen.getAllByText(/ver listado/i);
        const butElAgregarProd=screen.getByRole("link",{name:/agregar producto/i});
        const butElAgregarTienda=screen.getByRole("link",{name:/agregar tienda/i})
        expect(butElAgregarProd).toBeInTheDocument();
        expect(butElAgregarTienda).toBeInTheDocument();
        expect(butEl).toHaveLength(2);
        expect(imgEl).toHaveLength(3);
        expect(ulEl).toHaveLength(2);
    })
})