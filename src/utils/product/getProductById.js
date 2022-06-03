import axios from "axios";

export default function getProductById(id) {
    return axios.get(`${process.env.REACT_APP_API_PRODUCTS}${id}`)
}