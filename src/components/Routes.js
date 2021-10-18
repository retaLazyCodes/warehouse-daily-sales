import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import { useContext, useEffect } from "react";
import AuthContext from "../context/auth";

function Routes() {
    const { userToken } = useContext(AuthContext)

    useEffect(() => {
        if (userToken == false) {
            <Redirect to="/auth/login" />
        }
    }, [])

    return (
        <Router>
            <Switch>
                <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
                <Route path="/auth" render={(props) => <AuthLayout {...props} />} />

                {userToken ? <Redirect from="/" to="/admin/index" /> : <Redirect to="/auth/login" />}

            </Switch>
        </Router>
    );
}

export default Routes;

