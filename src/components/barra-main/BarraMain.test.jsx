import { render, screen } from "@testing-library/react";
import useGetProducts from "../../hooks/useGetProducts";
import { ThemeContext } from "../../context/ThemeProvider";
import BarraMain from "./BarraMain";
import { MemoryRouter } from "react-router-dom";

jest.mock("../../hooks/useGetProducts");
jest.mock("../../context/ThemeProvider");

describe("BarraMain", () => {
	it("renders correctly", () => {
		useGetProducts.mockReturnValue({ products: [], getProducts: jest.fn() });
		render(
			<BarraMain nombre={["Productos", "Producto"]} />
		, {wrapper: MemoryRouter});
		expect(screen.getByText(/ver listado/i)).toBeInTheDocument();
	});
});