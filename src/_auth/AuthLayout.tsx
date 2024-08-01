import React from "react";
import { Outlet, Navigate } from 'react-router-dom';
import Side from "../../public/assets/images/side-img.svg";


export const AuthLayout = () => {
    const isAuthenticated = false;

    return (
        <>
            {isAuthenticated ? (
                <Navigate to="/" />
            ) : (
                <div className="flex h-screen w-screen">
                    {/* Content Section */}
                    <section className="flex-1 flex justify-center items-center py-1">
                        <Outlet />
                    </section>
                    {/* Image Section */}
                    <img
                        src={Side}
                        alt="Side Image"
                        className="hidden xl:block h-full w-1/2 object-cover left-3"
                    />
                </div>
            )}
        </>
    );
};
