import {render, screen} from "@testing-library/react"
import ProductsCard from "./ProductsCard"
import {MemoryRouter} from "react-router-dom"

describe('Products Card',()=>{

    beforeEach(()=>{
        render(<ProductsCard producto={ producto }/>
        ,{wrapper: MemoryRouter});
    })

    const producto = {
        id : 1,
        imgs : "url",
        nombre : "nombre"
    }
    test('los elementos se renderizan correctamente',()=>{
        const imgEl=screen.getAllByRole("img");
        const stringEl=screen.getByText(/nombre/i);
        const idEl=screen.getByText(/#1/i);
        expect(idEl).toBeInTheDocument();
        expect(stringEl).toBeInTheDocument();
        expect(imgEl).toHaveLength(2);
    }) 

    test("card navega a /id",()=>{
        const linkEl = screen.getByRole("link");
        expect(linkEl).toHaveAttribute("href","/1")
    })

})