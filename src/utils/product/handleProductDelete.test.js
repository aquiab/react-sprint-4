import axios from "axios";
import handleProductDelete from "./handleProductDelete";

jest.mock("axios");

describe("handleProductDelete", () => {
  it("Llama a axios.delete 1 vez cuando se invoca", () => {
    handleProductDelete(new Event("click"), 1);
    expect(axios.delete).toHaveBeenCalledTimes(1);
  });
});