import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

test("renders correctly", () => {
	const steps = [
		{ title: "step1", path: "/" },
		{ title: "step2", path: "/step2" },
		{ title: "step3", path: "/step3" },
		{ title: "step4", path: "/step4" },
		{ title: "step5", path: "/step5" },
	];
	render(<Breadcrumb steps={steps} />, {
		wrapper: BrowserRouter,
	});
	expect(screen.getByText(/step1/i)).toBeInTheDocument();
	expect(screen.getByText(/step1/).closest("a")).toHaveAttribute("href", "/");
	expect(screen.getAllByRole("link").length).toBe(steps.length);
});
