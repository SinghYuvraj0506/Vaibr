import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Register = () => {
    useDocumentTitle("Register");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isLogin = useSelector((state) => state.isLogin);
    useEffect(() => {
        if (isLogin) {
            navigate("/");
        }
    }, [isLogin, navigate]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_EXPRESS_URL}/api/user/register`,
                {
                    name,
                    email,
                    password,
                }
            );
            const data = response.data;
            if (data?.success) {
                toast.success(data.msg, { autoClose: 1000, hideProgressBar: true });
                navigate("/login");
            }
        } catch (error) {
            setName("");
            setEmail("");
            setPassword("");
            toast.error(error.response?.data?.msg, { autoClose: 1000, hideProgressBar: true });
            // console.log(error);
        }
    };

    return (
        <div className=" p-4 mt-10">
            <h1 className="text-center m-3 font-semibold text-2xl">Register</h1>
            <form
                onSubmit={handleSubmit}
                className="bg-gray-100 p-6 rounded shadow-md w-full max-w-sm mx-auto"
            >
                <div className="mb-4">
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        required
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
                >
                    Submit
                </button>
            </form>
            <p className="mt-4 text-center">
                Already have an account ?{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                    Login instead
                </Link>
            </p>
        </div>
    );
};

export default Register;
