import { render, screen } from "@testing-library/react";
import useGetProducts from "../../hooks/useGetProducts";
import BarraMain from "./BarraMain";
import { MemoryRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event'


jest.mock("../../hooks/useGetProducts");

describe("BarraMain", () => {

    beforeEach(()=>{
        useGetProducts.mockReturnValue({ products: [], getProducts: jest.fn() });
        const objectProps={barraTitulo:'Productos',botonTitulo:'Producto',pathToAgregar:'productos/new',pathToListado:'products'}
		render(
			<BarraMain nombre={objectProps} />
		, {wrapper: MemoryRouter});
    })
    
	test("los elementos se renderizan correctamente", () => { 
        const barra = screen.getAllByRole('listitem')
		expect(screen.getByText(/ver listado/i)).toBeInTheDocument();
        expect(barra).toHaveLength(4);
	});

    test('link navega a /products',()=>{
        const link = screen.getByRole('link',{name:'Ver Listado'})
        expect(link).toHaveAttribute('href',"/products")
    })

    test('link navega a /products/new ',()=>{
        const link = screen.getByRole('link',{name:/agregar producto/i})
        expect(link).toBeInTheDocument()
    })

    test('link de tienda navega a pagina de error',()=>{
        useGetProducts.mockReturnValue({ products: [], getProducts: jest.fn() });
        const objectProps={barraTitulo:'Tiendas',botonTitulo:'Tienda',pathToAgregar:'*',pathToListado:'*'}
		render(
			<BarraMain nombre={objectProps} />
		, {wrapper: MemoryRouter}); 
        const link = screen.getByRole('link',{name:/agregar tienda/i})
        expect(link).toHaveAttribute('href',"/*")

    })
});
