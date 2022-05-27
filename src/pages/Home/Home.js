import BarraMain from "../../components/barra-main/BarraMain"
import "./Home.css"
import svgProduct from '../../assets/package-variant-closed.svg'
import svgStore from '../../assets/store.svg'

export default function Home() {



    return(
        <>
        <BarraMain svgImg={svgProduct}/>
        <BarraMain svgImg={svgStore}/>
        </>
    )
}