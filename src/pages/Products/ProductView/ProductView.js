import "./ProductView.css"
import { useForm } from "../../../hooks/useForm"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function ProductView() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [form, handleChange, setForm, resetForm] = useForm({
        nombre: "",
        precio: 0,
        stock: 0,
        desc: "",
        tienda: "",
        imgs: []
    })

    useEffect(() => {
        console.log(process.env)
        id && axios.get(`${process.env.REACT_APP_API_PRODUCTS}${id}`)
            .then(res => setForm(res.data))
            .catch(() => navigate("/error"))
    }, [id, setForm, navigate])

    const handleSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:3001/products", form)
            .then(res => console.log(res))
    }

    return(
        <>
            <form className="form">
                <h1>Información</h1>
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" name="nombre" type="text" placeholder="Nombre del producto" value={form.nombre}
                autoComplete="off" onChange={e => handleChange(e)}></input>
                <label htmlFor="precio">Valor</label>
                <input id="precio" name="precio" type="number" placeholder="Precio" value={form.precio}
                onChange={e => handleChange(e)}></input>
                <label htmlFor="stock">Stock</label>
                <input id="stock" name="stock" type="number" placeholder="Stock" value={form.stock}
                onChange={e => handleChange(e)}></input>
                <label htmlFor="desc">Descripción</label>
                <textarea id="desc" name="desc" placeholder="Descripción" value={form.desc}
                autoComplete="off" onChange={e => handleChange(e)}></textarea>
                <label htmlFor="tienda">Tienda</label>
                <select name="tienda" id="tienda">
                </select>
                <h1>Galería de Imágenes</h1>
                <label htmlFor="imagenes">Nueva Imagen</label>
                <input id="imagenes" name="imagenes" type="text" placeholder="imagenes" value={form.imgs}
                autoComplete="off" onChange={e => handleChange(e)}></input>
                <input type="reset" value="Cancelar" onClick={resetForm}></input>
                <input type="submit" value="Guardar" onClick={handleSubmit}></input>
            </form>
        </>
    )
}