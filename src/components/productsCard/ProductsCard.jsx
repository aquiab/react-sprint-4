import React from 'react'
import './ProductsCard.css'
import svgChevron from '../../assets/chevron-right.svg'
import { Link } from 'react-router-dom'


const ProductsCard = (props) => {

    return (
    <Link to = {`${props.producto.id}`}>
        <article className='barra-products'>
            <div className='product'>
                <div>
                    {props.producto.imgs.length > 0 && 
                    <img className='products-img' src={props.producto.imgs[0]} alt="imgProd" />}
                </div>
                    <div className='product-info-container'> 
                        <div className='product-info'>
                            <p>
                                {props.producto.nombre}
                            </p>
                            <p className='idProduct'>#{props.producto.id}</p>
                        </div>  
                    </div>
            </div>
            <div className='flecha-container'><img className='flecha' src={svgChevron} alt="imgProduct"/></div>
        </article>
    </Link>
  )
}

export default ProductsCard