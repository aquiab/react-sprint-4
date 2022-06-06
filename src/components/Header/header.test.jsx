import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { sidebarContext } from "../../context/sidebarContext";
import Header from "./Header";


describe("Header", () => {
	const breadcrumbs = [
		{ title: "step1", path: "/" },
		{ title: "step2", path: "/step2" },
	];
	test("renderiza correctamente", () => {
		render(
			<sidebarContext.Provider value={{ toggleSidebar: jest.fn() }}>
				<Header breadcrumbs={breadcrumbs} />
			</sidebarContext.Provider>,
			{ wrapper: MemoryRouter }
		);
		expect(screen.getByText(/step1/i)).toBeInTheDocument();
	});

	
});
