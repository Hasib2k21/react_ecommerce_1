import { createBrowserRouter } from "react-router-dom";

import Home from "../app/pages/home/Index";
import About from "../app/pages/about/Index";
import Cart from "../app/pages/cart/Index";
import Checkout from "../app/pages/checkout/Index";
import Products from "../app/pages/products/Index";

import WebsiteLayout from "../app/layouts/WebsiteLayout";
import Error404 from "../app/pages/errors/Error404";

const router = createBrowserRouter([
    {
        path: "/",
        element: <WebsiteLayout />,
        errorElement: <Error404 />,
        children: [
            {
                errorElement: <Error404 />,
                children: [
                    {
                        index: true,
                        element: <Home />,
                    },
                    {
                        path: "about",
                        element: <About />,
                    },
                    {
                        path: "cart",
                        element: <Cart />,
                    },
                    {
                        path: "checkout",
                        element: <Checkout />,
                    },
                    {
                        path: "products",
                        element: <Products />,
                    },
                ]
            }

        ]
    },


]);

export default router;