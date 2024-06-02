import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Product from "../Pages/ProductDetails";

import { Route, Routes } from "react-router-dom";

export default function AllRoutes(){

    return(<>
    <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Product-Details" element={<Product/>}/>
    </Routes>
    </>)
}