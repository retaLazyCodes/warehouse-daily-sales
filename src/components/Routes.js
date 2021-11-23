import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import CategoryProvider from "../context/category/Provider.js";
import ProductProvider from "../context/product/Provider.js";

import AdminLayout from "../layouts/Admin.js";
import AuthLayout from "../layouts/Auth.js";
import PrivateRoute from "./PrivateRoute.js";

function Routes() {

    return (
        <Router>
            <Switch>
                <Route path="/admin" render={(props) =>
                    <PrivateRoute>
                        <CategoryProvider>
                            <ProductProvider>
                                <AdminLayout {...props} />
                            </ProductProvider>
                        </CategoryProvider>
                    </PrivateRoute>
                } />
                <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
                <Redirect from="/" to="/admin/index" />

            </Switch>
        </Router>
    );
}

export default Routes;

