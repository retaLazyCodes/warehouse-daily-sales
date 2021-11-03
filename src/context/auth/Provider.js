import AuthContext from "./index";
import { useState } from "react";


export default function AuthProvider({ children }) {
    const [user, setUser] = useState(false)

    const handleLogin = (token) => {
        setUser(true);
        window.sessionStorage.setItem("@user-token", JSON.stringify(token))
    }

    const handleLogout = () => {
        setUser(false);
        window.sessionStorage.removeItem("@user-token")
    }

    const checkAuth = () => user;

    return (
        <AuthContext.Provider value={
            {
                isAuthenticated: checkAuth,
                setUser,
                handleLogin,
                handleLogout,
            }
        }>
            {children}
        </AuthContext.Provider>
    );
}