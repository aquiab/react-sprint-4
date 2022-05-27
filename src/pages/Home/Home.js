import BarraMain from "../../components/barra-main/BarraMain"
import "./Home.css"
import svgProduct from '../../assets/package-variant-closed.svg'
import svgStore from '../../assets/store.svg'
import ProductsCard from "../../components/productsCard/ProductsCard"

export default function Home() {



    return(
        <>
        <BarraMain svgImg={svgProduct}/>
        <BarraMain svgImg={svgStore}/> 
        </>
    )
}