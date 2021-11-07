import AuthContext from "./index";
import { useEffect, useState } from "react";


export default function AuthProvider({ children }) {
    const [user, setUser] = useState(false)
    const [token, setToken] = useState()

    useEffect(() => {

    }, [token]);

    const handleLogin = ({ auth_token }) => {
        setUser(true);
        setToken(auth_token)
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
                token
            }
        }>
            {children}
        </AuthContext.Provider>
    );
}