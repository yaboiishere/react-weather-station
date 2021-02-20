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
import { Route, Switch, Redirect } from "react-router-dom";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import Cookies from 'universal-cookie';

// core components
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";

import logo from "assets/img/kiro.ico";
// import logo from "assets/img/react-logo.png";
import { Dashboard } from "views/Dashboard";
import Map from "views/Map"

var ps;

class Admin extends React.Component {
  cookies = new Cookies();

  constructor(props) {

    super(props);
    this.state = {
      backgroundColor: "blue",
      sidebarOpened:
        document.documentElement.className.indexOf("nav-open") !== -1,
      timeSpan: this.cookies.get('timeSpan') ? this.cookies.get('timeSpan') : "6.hours.ago",
      loggedIn: this.cookies.get('loggedIn') ? this.cookies.get('loggedIn') : false
    };
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      ps = new PerfectScrollbar(this.refs.mainPanel, { suppressScrollX: true });
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.documentElement.className += " perfect-scrollbar-off";
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      if (navigator.platform.indexOf("Win") > -1) {
        let tables = document.querySelectorAll(".table-responsive");
        for (let i = 0; i < tables.length; i++) {
          ps = new PerfectScrollbar(tables[i]);
        }
      }
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }
  // this function opens and closes the sidebar on small devices
  toggleSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({ sidebarOpened: !this.state.sidebarOpened });
  };
  handleBgClick = (color) => {
    this.setState({ backgroundColor: color });
  };
  getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  handleTimeSpanChange = (event) =>{
    this.cookies.set('timeSpan', event.target.value, {path: '/'})
    this.setState({
      timeSpan: event.target.value
    })
  }
  render() {
    
    return (
      <>
        <div className="wrapper">
          <Sidebar
            {...this.props}
            timeSpan = {this.state.timeSpan}
            handleTimeSpanChange = {this.handleTimeSpanChange}
            routes={routes}
            bgColor={this.state.backgroundColor}
            logo={{
              outterLink: "https://www.creative-tim.com/",
              text: "Weather Stations",
              imgSrc: logo,
            }}
            toggleSidebar={this.toggleSidebar}
            open={this.state.open}
            setOpen={this.setOpen}
            loggedIn={this.state.loggedIn}
          />
          <div
            className="main-panel"
            ref="mainPanel"
            data={this.state.backgroundColor}
          >
            {/* <AdminNavbar
              {...this.props}
              brandText={this.getBrandText(this.props.location.pathname)}
              toggleSidebar={this.toggleSidebar}
              sidebarOpened={this.state.sidebarOpened}
            /> */}
            <Switch>
              <Route
                path={"/admin/dashboard"}
                render={(props) =>(<Dashboard {...props} timeSpan={this.state.timeSpan}/>)}
                key={0}/>
              <Route
                path={"/admin/map"}
                render={(props) =>(<Map {...props}/>)}
                key={1}/>
              <Redirect from="*" to="/dashboard" />
            </Switch>
            {
              // we don't want the Footer to be rendered on map page
              this.props.location.pathname.indexOf("maps") !== -1 ? null : (
                <Footer fluid />
              )
            }
          </div>
        </div>
        <FixedPlugin
          bgColor={this.state.backgroundColor}
          handleBgClick={this.handleBgClick}
        />
      </>
    );
  }
}

export default Admin;
