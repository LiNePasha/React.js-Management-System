import { createContext, useContext, useEffect, useState } from "react";
import Header from "../components/header/Header";
import { RenderMenu, RenderRoutes } from "../components/login-structure/RenderNavigation";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
    const [user, setUser] = useState(() => {
        // Initialize user state from localStorage if available
        const userData = localStorage.getItem("user");
        return userData ? JSON.parse(userData) : { name: "", isAuthenticated: false };
    });

    useEffect(() => {
        // Update localStorage whenever user state changes
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    const login = (userName, password) => {
        return new Promise((resolve, reject) => {
            if (password === "password") {
                setUser({ name: userName, isAuthenticated: true });
                toast.success(`Welcome Back ${userName}`);
                resolve("success");
            } else {
                reject("Password must be - 'password' to login");
            }
        });
    };

    const logout = () => {
        setUser({ name: "", isAuthenticated: false });
        toast.success('Logout successful');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            <>
                <Header />
                <RenderMenu />
                <RenderRoutes />
            </>
        </AuthContext.Provider>
    );
};
