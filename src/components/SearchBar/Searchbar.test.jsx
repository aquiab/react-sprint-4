import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Searchbar from "./Searchbar";

describe("Searchbar", () => {
	it("renders without crashing", () => {
		render(<Searchbar />);
	});

	it("renders the correct text", () => {
		let mockFn = jest.fn();
		render(<Searchbar value={"test"} onChange={mockFn} />);
		expect(screen.getByDisplayValue("test")).toBeInTheDocument();
	});

	it("calls onChange when input changes", () => {
		let mockFn = jest.fn();
		render(<Searchbar value={"test"} onChange={mockFn} />);
		userEvent.type(screen.getByDisplayValue("test"), "test2");
		expect(mockFn).toHaveBeenCalledTimes(5);
	});

	it("calls onExpand when button is clicked", () => {
		let mockFn = jest.fn();
		render(<Searchbar value={"test"} onChange={mockFn} onExpand={mockFn} />);
		userEvent.click(screen.getByRole("button"));
		expect(mockFn).toHaveBeenCalledTimes(1);
	});

	it("has correct classes when expanded", () => {
		let mockFn = jest.fn();
		render(<Searchbar value={"test"} onChange={mockFn} onExpand={mockFn} />);
		expect(screen.getByText(/X/i)).toHaveStyle("display: none");
		userEvent.click(screen.getByRole("button"));
		expect(screen.getByText(/X/i)).toHaveStyle("display: flex");
    expect(screen.getByDisplayValue("test").closest(".searchBar")).toHaveClass("expanded");
	});
});
