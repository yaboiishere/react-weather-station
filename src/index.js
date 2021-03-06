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
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { HashRouter, Route, Switch } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import AdminLayout from "layouts/Admin/Admin.js";

import "assets/scss/black-dashboard-react.scss";
import "assets/css/app.css";
import "assets/css/nucleo-icons.css";

const hist = createBrowserHistory();

ReactDOM.render(
  <CookiesProvider>
    <HashRouter history={hist}>
      <Switch>
        <Route path="/" render={(props) => <AdminLayout {...props} />} />
      </Switch>
    </HashRouter>
  </CookiesProvider>,
  document.getElementById("root")
);
