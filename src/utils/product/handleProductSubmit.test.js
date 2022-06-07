import axios from "axios";
import handleProductSubmit from "./handleProductSubmit";

jest.mock("axios");

describe("handleProductSubmit", () => {
  beforeEach(() => {
    axios.post.mockReturnValue(
			new Promise((resolve) => resolve({ data: { id: 1 } }))
		);
    axios.put.mockReturnValue(
			new Promise((resolve) => resolve({ data: { id: 1 } }))
		);
  });

	it("Llama a axios.put 1 vez cuando se invoca con parametro id", () => {
		handleProductSubmit(new Event("click"), { nombre: "test" }, 1);
		expect(axios.put).toHaveBeenCalledTimes(1);
	});
	
  it("Llama a axios.post 1 vez cuando se invoca sin parametro id", () => {
		handleProductSubmit(new Event("click"), { nombre: "test" });
		expect(axios.post).toHaveBeenCalledTimes(1);
	});

  it("retorna undefined si no se pasa nombre de formulario", () => {
    expect(handleProductSubmit(new Event("click"), { nombre: "" })).toBeUndefined();
  });

});
