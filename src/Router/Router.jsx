import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import AddProduct from "../pages/AddProduct/AddProduct";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import Login from "../pages/Login/Login";
import Regester from "../pages/Regester/Regester";
import PrivateRouote from "../PrivateRouote/PrivateRouote";
import BrandProducts from "../pages/BrandProducts/BrandProducts";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/products',
                element: <Products />,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: '/products/brand/:brand',
                element: <PrivateRouote><BrandProducts /></PrivateRouote>,
                loader: ({params}) => fetch(`http://localhost:5000/products/brand/${params.brand}`)
            },
            {
                path: '/productDetails/:id',
                element: <PrivateRouote><ProductDetails /></PrivateRouote>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/addProduct',
                element: <PrivateRouote><AddProduct /></PrivateRouote>
            },
            {
                path: '/updateProduct/:id',
                element: <UpdateProduct />,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            }
        ]
    },
    {
        path: '/Login',
        element: <Login />
    },
    {
        path: '/regester',
        element: <Regester />
    }
]);

export default Router;