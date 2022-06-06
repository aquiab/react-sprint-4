import { render, screen } from "@testing-library/react";
import { sidebarContext } from "../../../context/sidebarContext";
import ProductView from "./ProductView";
import { MemoryRouter, useParams } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import getProductById from "../../../utils/product/getProductById"
import { wait } from "@testing-library/user-event/dist/utils";

jest.mock("../../../context/sidebarContext")
jest.mock("../../../utils/product/getProductById")
jest.mock("react-router-dom", () => {
    const originalModule = jest.requireActual("react-router-dom")
    return {
        ...originalModule,
        useParams: jest.fn()
    }
})

describe("ProductView en modo nuevo producto (no recibió id)", () => {
    beforeEach(() => {
        useParams.mockReturnValue({id: undefined})
		render(
            <sidebarContext.Provider value={{}}>
			    <ProductView />
            </sidebarContext.Provider>
		, {wrapper: MemoryRouter});
    })

	it("Si no recibe producto se renderiza con los inputs vacíos", () => {
		expect(screen.getByText(/nuevo producto/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/nombre/i)).toHaveValue("")
        expect(screen.getByLabelText(/valor/i)).toHaveValue(0)
        expect(screen.getByLabelText(/stock/i)).toHaveValue(0)
        expect(screen.getByLabelText(/descripción/i)).toHaveValue("")
        expect(screen.getByLabelText(/nueva imagen/i)).toHaveValue("")
	});
    it("Los inputs funcionan correctamente", () => {
        const nombre = screen.getByLabelText(/nombre/i)
        const valor = screen.getByLabelText(/valor/i)
        const desc = screen.getByLabelText(/descripción/i)
        const new_img = screen.getByLabelText(/nueva imagen/i)
        const stock = screen.getByLabelText(/stock/i)
        const stock_sub = screen.getByLabelText(/restar 1 producto/i)
        const stock_add = screen.getByLabelText(/sumar 1 producto/i)

        userEvent.click(nombre)
        userEvent.keyboard("test")
        expect(nombre).toHaveValue("test")
        userEvent.click(valor)
        userEvent.keyboard("1")
        expect(valor).toHaveValue(1)
        userEvent.click(desc)
        userEvent.keyboard("test")
        expect(desc).toHaveValue("test")
        userEvent.click(new_img)
        userEvent.keyboard("test")
        expect(new_img).toHaveValue("test")
        userEvent.click(stock)
        userEvent.keyboard("100")
        expect(stock).toHaveValue(100)
        userEvent.click(stock_sub)
        expect(stock).toHaveValue(99)
        userEvent.click(stock_add)
        expect(stock).toHaveValue(100)
    })
    it("Si se agrega una imagen al input de nueva imagen y se apreta agregar aparece", () => {
        const new_img = screen.getByLabelText(/nueva imagen/i)
        const new_img_add = screen.getByRole("button", {name: /agregar/i})
        userEvent.click(new_img)
        userEvent.keyboard("pepe")
        userEvent.click(new_img_add)
        expect(new_img).toHaveValue("")
        expect(screen.getByText(/pepe/i)).toBeInTheDocument()
    })
})

describe("Product View en modo editar producto (recibió id por params)", () => {
    beforeEach(() => {
        useParams.mockReturnValue({id: 1})
        getProductById.mockReturnValue(new Promise((resolve, reject) => {
            resolve({
                data: {
                    nombre: "celular",
                    precio: "2000",
                    stock: "100",
                    desc: "un buen celular",
                    id: 1,
                    imgs: ["urltest123", "urltest456"]
                }
            })
        }))
		render(
            <sidebarContext.Provider value={{}}>
			    <ProductView />
            </sidebarContext.Provider>
		, {wrapper: MemoryRouter});
    })
    it("Si se recibe un producto, se renderizan los inputs con los datos del producto", async () => {
        await wait()
        expect(screen.getByLabelText(/nombre/i)).toHaveValue("celular")
        expect(screen.getByLabelText(/valor/i)).toHaveValue(2000)
        expect(screen.getByLabelText(/stock/i)).toHaveValue(100)
        expect(screen.getByLabelText(/descripción/i)).toHaveValue("un buen celular")
        expect(screen.getByLabelText(/nueva imagen/i)).toHaveValue("")
        expect(screen.getByText("#1")).toBeInTheDocument()
        expect(screen.getByText("urltest123")).toBeInTheDocument()
        expect(screen.getByText("urltest456")).toBeInTheDocument()
    })
    it("Si se toca el botón de quitar imagen esta desaparece", async () => {
        await wait()
        const botones = screen.getAllByText(/quitar/i)
        userEvent.click(botones[0])
        expect(screen.queryByText("urltest123")).toBeNull()
        expect(screen.getByText("urltest456")).toBeInTheDocument()
        userEvent.click(botones[1])
        expect(screen.queryByText("urltest456")).toBeNull()
    })
    it("Si se hacen cambios en el producto y se toca el botón de cancelar se resetean los inputs", async () => {
        await wait()
        const nombre = screen.getByLabelText(/nombre/i)
        userEvent.click(nombre)
        userEvent.keyboard(" bueno")
        expect(nombre).toHaveValue("celular bueno")
        userEvent.click(screen.getByText(/cancelar/i))
        expect(nombre).toHaveValue("celular")
    })
})