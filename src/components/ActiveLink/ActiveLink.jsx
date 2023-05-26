/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";


const ActiveLink = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? "active font-medium text-orange-600" : ""}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;