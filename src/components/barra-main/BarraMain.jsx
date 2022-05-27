import React from 'react'
import { Link } from 'react-router-dom'
import './BarraMain.css' 


const BarraMain = ({svgImg}) => {


  return (
    <>
        <ul className='barra-main'>
            <div className='barra-porducts'>
                <li><img className='imagen' src={svgImg} alt="img" /></li>
                <li>123 Productos</li>
            </div>
            <div className='barra-buttons'>
                <li><Link to='products'><button className='barra-button'>Ver Listado </button></Link></li>
                <li><Link to=''><button className='barra-button'>Agregar Tienda</button> </Link> </li>
            </div>
        </ul>
    </>
  )
}

export default BarraMain