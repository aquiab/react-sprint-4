import React from 'react'
import './ProductsCard.css'
import svgChevron from '../../assets/chevron-right.svg'

const ProductsCard = (props) => {


      return (
    <>
    <ul className='barra-products'>
        <div className='product'>
            <li><img src={props.producto.imgs[0]} alt="imgProduct" /></li>
                <li className='product-info-container'> 
                    <div className='product-info'>
                        <p>
                            {props.producto.nombre}
                        </p>
                        <p className='idProduct'>#{props.producto.id}</p>
                    </div>  
                </li>
        </div>
        <li className='flecha-container'><img className='flecha' src={svgChevron} alt="imgProduct"/></li>
    </ul>
    </>
  )
}

export default ProductsCard