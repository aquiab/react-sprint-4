import axios from "axios";

export default function handleProductDelete(e, id) {
    e.preventDefault();
    axios.delete(`${process.env.REACT_APP_API_PRODUCTS}${id}`);
    //navigate("/products");
};