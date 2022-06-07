import getProductById from "./getProductById";
import axios from "axios";

jest.mock("axios");

describe("getProductById", () => {
	it("Llama a axios.get 1 vez cuando se invoca", () => {
		getProductById(1);
		expect(axios.get).toHaveBeenCalledTimes(1);
	});
});
