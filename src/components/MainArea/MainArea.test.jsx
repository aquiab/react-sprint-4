import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import SidebarProvider, { sidebarContext } from "../../context/sidebarContext";
import UserProvider from "../../context/userContext";
import Header from "../Header/Header";
import MainArea from "./MainArea";

describe("Main Area", () => {

	test("Main area renderiza con sidebar cerrado", () => {
		render(
			<MemoryRouter>
				<sidebarContext.Provider value={
					{
						isOpen: false,
						closeSidebar: jest.fn()
					}
				}>
					<UserProvider>
						<MainArea />
					</UserProvider>
				</sidebarContext.Provider>
			</MemoryRouter>
		);

		let main = screen.getByRole("main");
		let aside = screen.getByRole("complementary");
		let guard = screen.getByText("", { selector: ".clickEventGuard" });

		expect(main).toBeInTheDocument();
		expect(aside).toBeInTheDocument();
		expect(guard).toHaveStyle("display: none");
	});
	
	test("Main area renderiza con sidebar abierto", () => {
		render(
			<MemoryRouter>
				<sidebarContext.Provider value={
					{
						isOpen: true,
						closeSidebar: jest.fn()
					}
				}>
					<UserProvider>
						<MainArea />
					</UserProvider>
				</sidebarContext.Provider>
			</MemoryRouter>
		);

		let main = screen.getByRole("main");
		let aside = screen.getByRole("complementary");
		let guard = screen.getByText("", { selector: ".clickEventGuard" });

		expect(main).toBeInTheDocument();
		expect(aside).toBeInTheDocument();
		expect(guard).toHaveStyle("display: block");
	});
});
