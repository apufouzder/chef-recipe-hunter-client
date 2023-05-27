import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import Blogs from "../../pages/Blogs/Blogs";
import Login from "../../pages/Login/Login";
import Registration from "../../pages/Registration/Registration";
import ChefRecipes from "../../pages/ChefRecipes/ChefRecipes";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import NotFound from "../../components/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "chefs/:chefId",
                element: <PrivateRoute><ChefRecipes /></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.chefId}`)
            },
            {
                path: "blogs",
                element: <Blogs />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Registration />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    },
]);

export default router;