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

	test("renderiza correctamente con addon", () => {
		const addon = <div>addon</div>;
		render(
			<sidebarContext.Provider value={{ toggleSidebar: jest.fn() }}>
				<Header breadcrumbs={breadcrumbs} addon={addon} />
			</sidebarContext.Provider>,
			{ wrapper: MemoryRouter }
		);
    
		expect(screen.getByText(/step1/i)).toBeInTheDocument();
		expect(screen.getByText(/addon/i)).toBeInTheDocument();
	});

	test("renderiza correctamente con addonExpanded", () => {
		const addon = <div>addon</div>;
		render(
			<sidebarContext.Provider value={{ toggleSidebar: jest.fn() }}>
				<Header breadcrumbs={breadcrumbs} addon={addon} addonExpanded />
			</sidebarContext.Provider>,
			{ wrapper: MemoryRouter }
		);

    let addonRend = screen.getByText(/addon/i)
    let header = addonRend.closest("header");
		expect(screen.getByText(/step1/i)).toBeInTheDocument();
		expect(addonRend).toBeInTheDocument();
    expect(header).toHaveStyle("justify-content: stretch");

		let div = screen.getByText("addon").closest(".addon-container");
    expect(div).toHaveClass("expanded");
	});
});
