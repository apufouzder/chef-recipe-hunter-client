import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import Blogs from "../../pages/Blogs/Blogs";
import Login from "../../pages/Login/Login";
import Registration from "../../pages/Registration/Registration";
import ChefRecipes from "../../pages/ChefRecipes/ChefRecipes";

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
                element: <ChefRecipes />,
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
            }
        ]
    },
]);

export default router;