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
                element: <Products />
            },
            {
                path: '/productDetails',
                element: <ProductDetails />
            },
            {
                path: '/addProduct',
                element: <AddProduct />
            },
            {
                path: '/updateProduct',
                element: <UpdateProduct />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/regester',
        element: <Regester />
    }
]);

export default Router;