/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "./views/Index.js";
import CashBox from "./components/CashBox";
import Sales from "./components/Sales";
import Products from "./components/Products";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/cashbox",
    name: "Caja del día",
    icon: "ni ni-tv-2 text-primary",
    component: CashBox,
    layout: "/admin",
  },
  {
    path: "/sales",
    name: "Ventas",
    icon: "ni ni-tv-2 text-primary",
    component: Sales,
    layout: "/admin",
  },
  {
    path: "/products",
    name: "Productos",
    icon: "ni ni-tv-2 text-primary",
    component: Products,
    layout: "/admin",
  },
];
export default routes;
