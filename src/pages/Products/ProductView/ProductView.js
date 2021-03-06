import "./ProductView.css";
import { useForm } from "../../../hooks/useForm";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductPreview from "../../../components/ProductPreview/ProductPreview";
import ProductImagePreview from "../../../components/ProductImagePreview/ProductImagePreview";
import Header from "../../../components/Header/Header";

export default function ProductView() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [newImage, setNewImage] = useState("");
	const [initialForm, setInitialForm] = useState(null);
	const [form, handleChange, setForm, ,] = useForm({
		nombre: "",
		precio: 0,
		stock: 0,
		desc: "",
		imgs: [],
	});

	useEffect(() => {
		id &&
			axios
				.get(`${process.env.REACT_APP_API_PRODUCTS}${id}`)
				.then((res) => {
					setForm(res.data);
					setInitialForm(res.data);
				})
				.catch(() => navigate("/error"));
	}, [id, setForm, navigate]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!form.nombre) return;
		const method = id ? axios.put : axios.post;
		const url = id
			? `${process.env.REACT_APP_API_PRODUCTS}${id}`
			: process.env.REACT_APP_API_PRODUCTS;
		method(url, form)
			.then((res) => {
				console.log(res);
				navigate("/products");
			})
			.catch((err) => console.error(err));
	};

	const handleDelete = (e) => {
		e.preventDefault();
		axios.delete(`${process.env.REACT_APP_API_PRODUCTS}${id}`);
		navigate("/products");
	};

	const addNewImage = (e) => {
		e.preventDefault();
		setNewImage("");
		newImage.trim() &&
			!form.imgs.includes(newImage) &&
			setForm({ ...form, imgs: [...form.imgs, newImage] });
	};

	const crumbs = [
		{ title: `Productos`, path: "/products" },
		{ title: `#${id || "Nuevo producto"}`, path: `/products/${id}` },
	];

	return (
		<>
			<Header
				breadcrumbs={crumbs}
				addon={
					<button className="button-hover" onClick={handleDelete}>
						Eliminar
					</button>
				}
			/>
			<div className="product-view">
				{initialForm && <ProductPreview producto={initialForm} />}
				<form className="form">
					<h2>Informaci??n</h2>
					<span className="form-item">
						<label htmlFor="nombre">Nombre</label>
						<input
							id="nombre"
							name="nombre"
							type="text"
							placeholder="Nombre del producto"
							value={form.nombre}
							autoComplete="off"
							onChange={(e) => handleChange(e)}
						></input>
					</span>
					<span className="form-item">
						<label htmlFor="precio">Valor</label>
						<input
							id="precio"
							name="precio"
							type="number"
							value={form.precio}
							onChange={(e) => handleChange(e)}
						></input>
					</span>
					<span className="form-item">
						<label htmlFor="stock">Stock</label>
						<div className="input-number">
							<button
								className="input-number-left"
								onClick={(e) => {
									e.preventDefault();
									form.stock > 0 && setForm({ ...form, stock: parseInt(form.stock) - 1 });
								}}
								aria-label="Restar 1 producto"
							>
								-
							</button>
							<input
								id="stock"
								name="stock"
								type="number"
								value={form.stock}
								onChange={(e) => handleChange(e)}
							></input>
							<button
								className="input-number-right"
								onClick={(e) => {
									e.preventDefault();
									setForm({ ...form, stock: parseInt(form.stock) + 1 });
								}}
								aria-label="Sumar 1 producto"
							>
								+
							</button>
						</div>
					</span>
					<span className="form-item">
						<label htmlFor="desc">Descripci??n</label>
						<textarea
							id="desc"
							name="desc"
							placeholder="Descripci??n"
							value={form.desc}
							autoComplete="off"
							onChange={(e) => handleChange(e)}
						></textarea>
					</span>

					<h2>Galer??a de Im??genes</h2>
					<span className="form-item">
						<label htmlFor="imagenes">Nueva Imagen</label>
						<span className="form-add-img">
							<input
								id="new_img"
								name="new_img"
								type="text"
								placeholder="URL de la imagen"
								value={newImage}
								autoComplete="off"
								onChange={(e) => setNewImage(e.target.value)}
							></input>
							<button onClick={addNewImage} className="button-hover">
								Agregar
							</button>
						</span>
					</span>
					<p>Im??genes actuales</p>
					{form.imgs.map((img) => (
						<ProductImagePreview img={img} setForm={setForm} key={img} />
					))}
					<span className="form-buttons">
						<input
							type="reset"
							value="Cancelar"
							onClick={() => setForm(initialForm)}
							className="button-hover"
						></input>
						<input
							type="submit"
							value="Guardar"
							onClick={handleSubmit}
							className="button-hover"
						></input>
					</span>
				</form>
			</div>
		</>
	);
}
