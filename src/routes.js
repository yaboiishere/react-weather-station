/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { Dashboard } from "views/Dashboard.js";
import Map from "views/Map.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
<<<<<<< HEAD
    layout: "/admin",
=======
    layout: "",
>>>>>>> master
  },
  {
    path: "/map",
    name: "Map",
    rtlName: "خرائط",
<<<<<<< HEAD
    icon: "tim-icons icon-square-pin",
    component: Map,
    layout: "/admin",
=======
    icon: "tim-icons icon-pin",
    component: Map,
    layout: "",
  },
  {
    redirect: "/dashboard",
    path: "/",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "",
>>>>>>> master
  },
];
export default routes;
