import React from 'react'
import './ProductsCard.css'
import svgChevron from '../../assets/chevron-right.svg'

const ProductsCard = () => {

      return (
    <>
    <ul className='barra-products'>
        <div className='product'>
            <li><img src='' alt="imgProduct" /></li>
                <li className='product-info-container'> 
                    <div className='product-info'>
                        <p>
                            Coca Cola Lara 220ml Original Packx8
                        </p>
                        <p className='idProduct'>#123123</p>
                    </div>  
                </li>
        </div>
        <li className='flecha-container'><img className='flecha' src={svgChevron} alt="imgProduct"/></li>
    </ul>
    </>
  )
}

export default ProductsCard