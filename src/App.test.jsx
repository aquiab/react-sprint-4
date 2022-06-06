import { render, screen } from "@testing-library/react";
import { sidebarContext } from "./context/sidebarContext";
import { userContext } from "./context/userContext";
import { ThemeContext } from "./context/ThemeProvider";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import { act } from "react-dom/test-utils";

jest.mock("axios");

describe("App", () => {
	it("renders without crashing", () => {
		act(() => {
			axios.get.mockResolvedValue({});
			render(
				<sidebarContext.Provider
					value={{ isOpen: false, closeSidebar: jest.fn() }}
				>
					<userContext.Provider value={{ user: { name: "test" } }}>
						<ThemeContext.Provider value={{ darkNMode: false }}>
							<App />
						</ThemeContext.Provider>
					</userContext.Provider>
				</sidebarContext.Provider>,
				{ wrapper: MemoryRouter }
			);
		});
	});

	it("renders the correct text", () => {
		act(() => {
			axios.get.mockResolvedValue({});
			render(
				<sidebarContext.Provider
					value={{ isOpen: false, closeSidebar: jest.fn() }}
				>
					<userContext.Provider value={{ user: { name: "test" } }}>
						<ThemeContext.Provider value={{ darkNMode: false }}>
							<App />
						</ThemeContext.Provider>
					</userContext.Provider>
				</sidebarContext.Provider>,
				{ wrapper: MemoryRouter }
			);
		});
    expect(screen.getByRole("main")).toBeInTheDocument();
	});
});
