import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

test("renders correctly", () => {
	render(
		<BrowserRouter>
			<Breadcrumb steps={[{ title: "hola", path: "/" }]} />
		</BrowserRouter>
	);
	expect(screen.getByText(/hola/i)).toBeInTheDocument();
});
