import { Link } from "react-router-dom";
import ActiveLink from "../../ActiveLink/ActiveLink";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    return (
        <div className="bg-base-200">
            <div className="navbar container mx-auto">
                <div className="navbar-start">

                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <ActiveLink to="/">Home</ActiveLink>
                            <ActiveLink to="/blogs">Blogs</ActiveLink>
                        </ul>
                    </div>

                    <Link to="/" className="btn btn-ghost normal-case text-xl">TastyChef.</Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-lg menu-horizontal gap-6 px-1">
                        <ActiveLink to="/">Home</ActiveLink>
                        <ActiveLink to="/blogs">Blogs</ActiveLink>
                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} alt="profile" />
                                    </div>
                                </label>

                                <button onClick={handleLogOut} className="btn text-xl capitalize bg-orange-500 border-0 hover:bg-orange-400">Log Out</button>
                            </>
                            :
                            <Link to="/login">
                                <button className="btn text-xl capitalize bg-orange-500 border-0 hover:bg-orange-400">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;