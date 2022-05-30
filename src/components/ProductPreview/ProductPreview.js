import "./ProductPreview.css"

export default function ProductPreview({producto}) {
    return(
        <div className="product-preview">
            {producto.imgs.length > 0 && <img src={producto.imgs[0]} alt="Imagen producto"/>}
            <div className="product-preview-bottom">
                <div className="product-preview-name">{producto.nombre}</div>
                <div className="product-preview-bottom-points">
                    <div className="product-preview-bottom-item">
                        <span className="product-preview-primary-text">{producto.precio} </span>
                        <span className="product-preview-secondary-text"><span>puntos</span><span>superclub</span></span>
                    </div>
                    <div className="product-preview-bottom-item">
                        <span className="product-preview-primary-text">{producto.stock} </span>
                        <span className="product-preview-secondary-text"><span>stock</span><span>disponible</span></span>
                    </div>
                </div> 
            </div>      
        </div>
    )
}