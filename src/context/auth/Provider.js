import AuthContext from "./index";
import { useState } from "react";


export default function AuthProvider({ children }) {
    const [userToken, setUserToken] = useState(false)

    const handleLogin = (token) => {
        setUserToken(true);
        window.sessionStorage.setItem("@user-token", JSON.stringify(token))
    }

    const handleLogout = () => {
        setUserToken(false);
        window.sessionStorage.removeItem("@user-token")
    }

    const checkAuth = () => userToken;

    return (
        <AuthContext.Provider value={
            {
                isAuthenticated: checkAuth,
                handleLogin,
                handleLogout,
            }
        }>
            {children}
        </AuthContext.Provider>
    );
}