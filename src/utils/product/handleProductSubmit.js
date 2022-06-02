import axios from "axios";

export default function handleProductSubmit(e, form, id) {
    e.preventDefault();
	if (!form.nombre) return;
	const method = id ? axios.put : axios.post;
	const url = id
		? `${process.env.REACT_APP_API_PRODUCTS}${id}`
		: process.env.REACT_APP_API_PRODUCTS;
	return method(url, form)
		.then((res) => console.log(res)
			//navigate("/products");
		)
		.catch((err) => console.error(err));
}