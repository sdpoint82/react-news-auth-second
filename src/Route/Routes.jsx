import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Carrer from "../Pages/Carrer";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Singlenews from "../Pages/Singlenews";
import PrivetRoutes from "./PrivetRoutes";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path: "/aNews/:id",
                element: <PrivetRoutes>
                    <Singlenews></Singlenews>
                </PrivetRoutes>

            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/carrer",
                element: <Carrer></Carrer>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },

        ]
    },
]);

export default router;