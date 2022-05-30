import "./ProductView.css"
import { useForm } from "../../../hooks/useForm"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import ProductCard from "../../../components/ProductCard"
import ProductImagePreview from "../../../components/ProductImagePreview"

export default function ProductView() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [newImage, setNewImage] = useState("")
    const [form, handleChange, setForm, resetForm] = useForm({
        nombre: "",
        precio: 0,
        stock: 0,
        desc: "",
        tienda: "",
        imgs: []
    })

    useEffect(() => {
        id && axios.get(`${process.env.REACT_APP_API_PRODUCTS}${id}`)
            .then(res => setForm(res.data))
            .catch(() => navigate("/error"))
    }, [id, setForm, navigate])

    const handleSubmit = e => {
        e.preventDefault()
        const method = id ? axios.put : axios.post
        const url = id ? `${process.env.REACT_APP_API_PRODUCTS}${id}` : process.env.REACT_APP_API_PRODUCTS
        method(url, form)
            .then(res => console.log(res))
            .catch(err => console.error(err))
    }

    const addNewImage = e => {
        e.preventDefault()
        !form.imgs.includes(newImage) && setForm({...form, imgs: [...form.imgs, newImage]})
    }

    return(
        <div className="product-view">
            <ProductCard producto={form} />
            <form className="form">
                <h2>Información</h2>
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" name="nombre" type="text" placeholder="Nombre del producto" value={form.nombre}
                autoComplete="off" onChange={e => handleChange(e)} required></input>
                <label htmlFor="precio">Valor</label>
                <input id="precio" name="precio" type="number" value={form.precio}
                onChange={e => handleChange(e)}></input>
                <label htmlFor="stock">Stock</label>
                <div className="input-number">
                    <button className="input-number-left" onClick={e => {
                        e.preventDefault()
                        form.stock > 0 && setForm({...form, stock: form.stock - 1})}
                    }
                    aria-label="Restar 1 producto">-</button>
                    <input id="stock" name="stock" type="number" value={form.stock}
                    onChange={e => handleChange(e)}></input>
                    <button className="input-number-right" onClick={e => {
                        e.preventDefault()
                        setForm({...form, stock: form.stock + 1})}
                    }
                    aria-label="Sumar 1 producto">+</button>
                </div>
                <label htmlFor="desc">Descripción</label>
                <textarea id="desc" name="desc" placeholder="Descripción" value={form.desc}
                autoComplete="off" onChange={e => handleChange(e)}></textarea>
                <label htmlFor="tienda">Tienda</label>
                <select name="tienda" id="tienda">
                </select>
                <h2>Galería de Imágenes</h2>
                <label htmlFor="imagenes">Nueva Imagen</label>
                <span className="form-add-img">
                    <input id="new_img" name="new_img" type="text" placeholder="URL de la imagen" value={newImage}
                    autoComplete="off" onChange={e => setNewImage(e.target.value)}></input>
                    <button onClick={addNewImage}>Agregar</button>
                </span>
                <p>Imágenes actuales</p>
                {form.imgs.map(img => <ProductImagePreview img={img} setForm={setForm} key={img}/>)}
                <span className="form-buttons">
                    <input type="reset" value="Cancelar" onClick={resetForm}></input>
                    <input type="submit" value="Guardar" onClick={handleSubmit}></input>
                </span>        
            </form>
        </div>
    )
}