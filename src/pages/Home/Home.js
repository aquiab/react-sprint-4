import BarraMain from "../../components/barra-main/BarraMain"
import "./Home.css"
import svgProduct from '../../assets/package-variant-closed.svg'
import svgStore from '../../assets/store.svg'

export default function Home() {

    const tiendas = ['Tiendas', 'Tienda']
    const productos = ['Productos', 'Producto']

    return(
        <>
        <BarraMain svgImg={svgProduct} nombre={productos}/>
        <BarraMain svgImg={svgStore} nombre={tiendas}/> 
        </>
    )
}