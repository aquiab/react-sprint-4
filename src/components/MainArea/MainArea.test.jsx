import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import SidebarProvider, { sidebarContext } from "../../context/sidebarContext";
import UserProvider from "../../context/userContext";
import Header from "../Header/Header";
import MainArea from "./MainArea";

describe("Main Area", () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<SidebarProvider>
					<UserProvider>
						<MainArea />
					</UserProvider>
				</SidebarProvider>
			</MemoryRouter>
		);
	});
	test("Main area renderiza", () => {
		let main = screen.getByRole("main");
		let aside = screen.getByRole("complementary");
		expect(main).toBeInTheDocument();
		expect(aside).toBeInTheDocument();
	});
});
