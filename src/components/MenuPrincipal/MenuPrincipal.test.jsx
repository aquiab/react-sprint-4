import { render, screen } from "@testing-library/react";
import { MemoryRouter, UNSAFE_RouteContext } from "react-router-dom";
import SidebarProvider from "../../context/sidebarContext";
import { userContext } from "../../context/userContext";
import MenuPrincipal from "./MenuPrincipal";

describe("Menu Principal", () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
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
	});

	test("Menu principal renderiza", () => {
		let menu = screen.getByText("Inicio");
		expect(menu).toBeInTheDocument();
	});

	test("Link del logo te lleva a home (/)", () => {
		let menu = screen.getByText(/commerce/i).closest("a");
		expect(menu).toBeInTheDocument();
		expect(menu).toHaveAttribute("href", "/");
	});
	test("Navlink inicio te lleva a home (/)", () => {
		let menu = screen.getByText(/inicio/i);
		expect(menu).toBeInTheDocument();
		expect(menu).toHaveAttribute("href", "/");
	});

	test("Navlink productos te lleva a home (/products)", () => {
		let menu = screen.getByText(/productos/i);
		expect(menu).toBeInTheDocument();
		expect(menu).toHaveAttribute("href", "/products");
	});

	test("Navlink tiendas te lleva a home (/stores)", () => {
		let menu = screen.getByText(/tiendas/i);
		expect(menu).toBeInTheDocument();
		expect(menu).toHaveAttribute("href", "/stores");
	});

	test("Boton de perfil te lleva a home (/)", () => {
		let menu = screen.getByText(/username/i).closest("a");
		screen.debug();
		expect(menu).toBeInTheDocument();
		expect(menu).toHaveAttribute("href", "/profile");
	});
});
