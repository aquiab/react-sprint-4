import "./ProductCard.css"

export default function ProductCard({producto}) {
    return(
        <div className="product-card">
            <img src={producto.imgs[0]} alt="Imagen producto"/>
            <div className="product-card-bottom">
                <div className="product-card-name">{producto.nombre}</div>
                <div className="product-card-bottom-points">
                    <div className="product-card-bottom-item">
                        <span className="product-card-primary-text">{producto.precio} </span>
                        <span className="product-card-secondary-text"><span>puntos</span><span>superclub</span></span>
                    </div>
                    <div className="product-card-bottom-item">
                        <span className="product-card-primary-text">{producto.stock} </span>
                        <span className="product-card-secondary-text"><span>stock</span><span>disponible</span></span>
                    </div>
                </div> 
            </div>      
        </div>
    )
}