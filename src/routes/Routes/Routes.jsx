import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import Blogs from "../../pages/Blogs/Blogs";

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
                path: "blogs",
                element: <Blogs />
            }
        ]
    },
]);

export default router;