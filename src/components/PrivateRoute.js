import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthContext from "../context/auth";


export default function PrivateRoute({ children, ...rest }) {
    const { isAuthenticated } = useContext(AuthContext)

    return (
        <Route {...rest} render={() => {
            return isAuthenticated() === true
                ? children
                : <Redirect to="/auth/login" />
        }}

        />
    )
}