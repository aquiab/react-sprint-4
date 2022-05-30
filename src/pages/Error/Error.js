import Header from "../../components/Header/Header"
import "./Error.css"

export default function Error() {
    const crumbs = [{ title: "Página no encontrada", path: "#" }];
    return(
        <div className="errorPage__container">
            <Header breadcrums={crumbs}/>
            <div className="errorPage__content">
                <span className="code">404</span>
                <h1>La página que estás buscando no existe.</h1>
            </div>
            Página no encontrada
        </div>
    )
}