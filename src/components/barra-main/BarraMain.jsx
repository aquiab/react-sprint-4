import React, {useContext} from 'react'
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
        <ul className='barra-main' >
            <div className='barra-porducts'>
                <li><img className='imagen' src={props.svgImg} alt="img" /></li>
                <li> {products.length} {props.nombre.barraTitulo} </li>
            </div>
            <div className='barra-buttons'>
                <li><Link to={props.nombre.pathToListado}><button className='barra-button'>Ver Listado</button></Link></li>
                <li><Link to={props.nombre.pathToAgregar}><button className='barra-button'>Agregar {props.nombre.botonTitulo}</button> </Link> </li>
            </div>
        </ul>
    </>
  )
}


export default BarraMain