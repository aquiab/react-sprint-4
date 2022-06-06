import { render, screen } from "@testing-library/react";
import { MemoryRouter, UNSAFE_RouteContext } from "react-router-dom";
import SidebarProvider from "../../context/sidebarContext";
import { userContext } from "../../context/userContext";
import MenuPrincipal from "./MenuPrincipal";

describe("Menu Principal", () => {
	const component = (ruta) => (
		<MemoryRouter initialEntries={[ruta || "/"]}>
			<userContext.Provider
				value={{
					user: {
						name: "username",
						image: "",
					},
					setUser: jest.fn(),
				}}
			>
				<SidebarProvider>
					<MenuPrincipal />
				</SidebarProvider>
			</userContext.Provider>
		</MemoryRouter>
	);

	test("Menu principal renderiza", () => {
		render(component());
		let menu = screen.getByText("Inicio");
		expect(menu).toBeInTheDocument();
	});

	test("Link del logo te lleva a home (/)", () => {
		render(component());
		let link = screen.getByText(/commerce/i).closest("a");
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute("href", "/");
	});

	test("Navlink inicio te lleva a home (/)", () => {
		render(component("/"));
		let link = screen.getByText(/inicio/i);
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute("href", "/");
	});

	test("Navlink inicio se activa en la ruta /", () => {
		render(component("/"));
		let link = screen.getByText(/inicio/i);
		expect(link).toHaveClass("active");
	});

	test("Navlink productos te lleva a products (/products)", () => {
		render(component("/products"));
		let link = screen.getByText(/productos/i);
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute("href", "/products");
	});

	test("Navlink productos se activa en la ruta /products", () => {
		render(component("/products"));
		let link = screen.getByText(/productos/i);
		expect(link).toHaveClass("active");
	});

	test("Navlink tiendas te lleva a stores (/stores)", () => {
		render(component("/stores"));
		let link = screen.getByText(/tiendas/i);
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute("href", "/stores");
	});

	test("Navlink tienda se activa en la ruta /stores", () => {
		render(component("/stores"));
		let link = screen.getByText(/tiendas/i);
		expect(link).toHaveClass("active");
	});

	test("Boton de perfil te lleva a profile (/profile)", () => {
		render(component("/"));
		let link = screen.getByText(/username/i).closest("a");
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute("href", "/profile");
	});
});
