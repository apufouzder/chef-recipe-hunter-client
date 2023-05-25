import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import Footer from "../components/shared/Footer/Footer";

const Main = () => {
    return (
        <div className="">
            <Header />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Main;