import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

test("renders correctly", () => {
	render(<Breadcrumb steps={[{ title: "hola", path: "/" }]} />, {
		wrapper: BrowserRouter,
	});
	expect(screen.getByText(/hola/i)).toBeInTheDocument();
	expect(screen.getByText(/hola/).closest("a")).toHaveAttribute("href", "/");
});
