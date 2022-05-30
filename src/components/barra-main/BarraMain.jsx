import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import './BarraMain.css' 
import { useEffect} from "react";
import useGetProducts from "../../hooks/useGetProducts";
import PropTypes from "prop-types"
import {ThemeContext} from "../../context/ThemeProvider";


const BarraMain = (props) => {

  const {products, getProducts} =useGetProducts();

  useEffect(()=>{

    getProducts();
    
  },[])
    const { darkMode } = useContext(ThemeContext);
  return (
    <>
        <ul className={darkMode ? 'barra-main .dark' : 'barra-main'} >
            <div className={darkMode ? 'barra-porducts .dark' :'barra-porducts'}>
                <li><img className={darkMode ? 'imagen .dark' : 'imagen'} src={props.svgImg} alt="img" /></li>
                <li> {products.length} {props.nombre[0]} </li>
            </div>
            <div className='barra-buttons'>
                <li><Link to='products'><button className='barra-button'>Ver Listado </button></Link></li>
                <li><Link to='products/new'><button className='barra-button'>Agregar {props.nombre[1]}  </button> </Link> </li>
            </div>
        </ul>
    </>
  )
}


export default BarraMain