import React from 'react'
import { Link } from 'react-router-dom'
import './BarraMain.css' 
import { useEffect} from "react";
import useGetProducts from "../../hooks/useGetProducts";


const BarraMain = (props) => {

  const {products, getProducts} =useGetProducts();

  useEffect(()=>{

    getProducts();
    
  },[])

  return (
    <>
        <ul className='barra-main'>
            <div className='barra-porducts'>
                <li><img className='imagen' src={props.svgImg} alt="img" /></li>
                <li> {products.length} {props.nombre[0]} </li>
            </div>
            <div className='barra-buttons'>
                <li><Link to='products'><button className='barra-button'>Ver Listado </button></Link></li>
                <li><Link to=''><button className='barra-button'>Agregar {props.nombre[1]}  </button> </Link> </li>
            </div>
        </ul>
    </>
  )
}

export default BarraMain