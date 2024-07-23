import { Outlet, Navigate } from 'react-router-dom';

export const AuthLayout = () => {
    const isAuthenticated = false;

    return (
        <>
            {isAuthenticated ? (
                <Navigate to="/" />
            ) : (
                <section>
                    <Outlet />
                </section>
            )}
        </>
    );
};
