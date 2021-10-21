import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

import AdminLayout from "../layouts/Admin.js";
import AuthLayout from "../layouts/Auth.js";
import PrivateRoute from "./PrivateRoute.js";

function Routes() {

    return (
        <Router>
            <Switch>
                <Route path="/admin" render={(props) =>
                    <PrivateRoute>
                        <AdminLayout {...props} />
                    </PrivateRoute>
                } />
                <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
                <Redirect from="/" to="/admin/index" />

            </Switch>
        </Router>
    );
}

export default Routes;

