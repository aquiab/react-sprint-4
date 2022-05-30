import "./ProductImagePreview.css"

export default function ProductImagePreview({img, setForm}) {
    const quitarImagen = e => {
        e.preventDefault()
        setForm(prevState => ({...prevState, imgs: prevState.imgs.filter(url => url !== img)}))
    }

    return(
        <div className="image-preview">
            <span className="image-preview-info">
                <img src={img} alt={img}/>
                <p>{img}</p>
            </span>
            <button onClick={quitarImagen} className="button-hover">Quitar</button>
        </div>
    )
}