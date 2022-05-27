import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import ProductsList from "../pages/Products/ProductsList/ProductsList";
import ProductView from "../pages/Products/ProductView/ProductView";
import Error from "../pages/Error/Error";

export default function AppRouter() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/products/new" element={<ProductView />} />
            <Route path="/products/:id" element={<ProductView />} />
            <Route path="*" element= {<Error />} />
        </Routes>
    )
}