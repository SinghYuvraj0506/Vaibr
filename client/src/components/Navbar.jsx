import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authActions } from "../redux/store";

const Navbar = () => {
    const isLogin = useSelector((state) => state.isLogin);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        try {
            dispatch(authActions.logout());
            localStorage.clear();
            toast.warn("logged out", { autoClose: 1000, hideProgressBar: true });
            navigate("/login");
        } catch (error) {
            toast.warn("error logging out", { autoClose: 1000, hideProgressBar: true });
        }
    };

    const activeStyling = {
        color: "wheat",
    };

    return (
        <nav className="flex justify-center items-center bg-blue-600 text-white p-3 gap-6">
            <NavLink to="/" style={({ isActive }) => (isActive ? activeStyling : {})}>
                Home
            </NavLink>
            {!isLogin && (
                <NavLink to="/login" style={({ isActive }) => (isActive ? activeStyling : {})}>
                    Login
                </NavLink>
            )}
            {!isLogin && (
                <NavLink to="/register" style={({ isActive }) => (isActive ? activeStyling : {})}>
                    Register
                </NavLink>
            )}
            {isLogin && <button onClick={handleLogout}>Logout</button>}
        </nav>
    );
};

export default Navbar;
