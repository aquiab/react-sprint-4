import axios from "axios";

export default function handleProductDelete(e, id) {
    e.preventDefault();
    return axios.delete(`${process.env.REACT_APP_API_PRODUCTS}${id}`);
};

// testear si se llamo a la funcion y si se le pasaron los parametros esperados