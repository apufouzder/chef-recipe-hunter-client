import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";

const Main = () => {
    return (
        <div className="">
            <Header />
            <Outlet></Outlet>
        </div>
    );
};

export default Main;