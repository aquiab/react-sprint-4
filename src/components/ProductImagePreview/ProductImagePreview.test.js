import { render, screen } from "@testing-library/react";
import ProductImagePreview from "./ProductImagePreview";

describe("ProductImagePreview", () => {
    beforeEach(() => {
        render(<ProductImagePreview img="urltest123.png" setForm={jest.fn()}/>)
    })
    it("Se renderiza correctamente", () => {
        expect(screen.getByAltText("urltest123.png")).toHaveAttribute("src", "urltest123.png")
        expect(screen.getByText("urltest123.png")).toBeInTheDocument()
    })
})