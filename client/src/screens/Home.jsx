import React from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Home = () => {
    useDocumentTitle("Home");
    const Name = localStorage.getItem("name");

    return (
        <>
            <ProtectedRoute>
                <h1 className="text-center m-3 font-semibold text-4xl">Welcome {Name}</h1>
            </ProtectedRoute>
        </>
    );
};

export default Home;
