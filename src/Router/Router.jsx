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
import Cart from "../pages/Cart/Cart";

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
                loader: () => fetch('https://tech-store-server-bma33retc-monishats-projects.vercel.app/products')
            },
            {
                path: '/products/brand/:brand',
                element: <PrivateRouote><BrandProducts /></PrivateRouote>,
                loader: ({params}) => fetch(`https://tech-store-server-bma33retc-monishats-projects.vercel.app/products/brand/${params.brand}`)
            },
            {
                path: '/productDetails/:id',
                element: <PrivateRouote><ProductDetails /></PrivateRouote>,
                loader: ({params}) => fetch(`https://tech-store-server-bma33retc-monishats-projects.vercel.app/products/${params.id}`)
            },
            {
                path: '/addProduct',
                element: <PrivateRouote><AddProduct /></PrivateRouote>
            },
            {
                path: '/updateProduct/:id',
                element: <PrivateRouote><UpdateProduct /></PrivateRouote>,
                loader: ({params}) => fetch(`https://tech-store-server-bma33retc-monishats-projects.vercel.app/products/${params.id}`)
            },
            {
                path: '/cart',
                element: <PrivateRouote><Cart /></PrivateRouote>,
                loader: () => fetch(`https://tech-store-server-bma33retc-monishats-projects.vercel.app/products/cart`)
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