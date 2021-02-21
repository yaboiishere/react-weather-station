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
/*eslint-disable*/
import React from "react";
import { NavLink, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import { Nav, NavLink as ReactstrapNavLink } from "reactstrap";
import TextField from "@material-ui/core/TextField";
import LoginModal from "components/Material/LoginModalComponent";

var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
    this.state = {
      open: false,
    };
  }
  timeSpanSelect = [
    {
      value: "30.minutes.ago",
      label: "30 min",
    },
    {
      value: "1.hour.ago",
      label: "1 hour",
    },
    {
      value: "3.hours.ago",
      label: "3 hours",
    },
    {
      value: "6.hours.ago",
      label: "6 Hours",
    },
    {
      value: "12.hours.ago",
      label: "12 hours",
    },
    {
      value: "24.hours.ago",
      label: "24 hours",
    },
  ];
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  linkOnClick = () => {
    document.documentElement.classList.remove("nav-open");
  };
  setOpen = (open) => {
    this.setState({ open: open });
  };
  render() {
    const { bgColor, routes, rtlActive, logo } = this.props;
    let logoImg = null;
    let logoText = null;
    if (logo !== undefined) {
      if (logo.outterLink !== undefined) {
        logoImg = (
          <a
            href={logo.outterLink}
            className="simple-text logo-mini"
            target="_blank"
            onClick={this.props.toggleSidebar}
          >
            <div className="logo-img">
              <img src={logo.imgSrc} alt="react-logo" />
            </div>
          </a>
        );
        logoText = (
          <a
            href={logo.outterLink}
            className="simple-text logo-normal"
            target="_blank"
            onClick={this.props.toggleSidebar}
          >
            {logo.text}
          </a>
        );
      } else {
        logoImg = (
          <Link
            to={logo.innerLink}
            className="simple-text logo-mini"
            onClick={this.props.toggleSidebar}
          >
            <div className="logo-img">
              <img src={logo.imgSrc} alt="react-logo" />
            </div>
          </Link>
        );
        logoText = (
          <Link
            to={logo.innerLink}
            className="simple-text logo-normal"
            onClick={this.props.toggleSidebar}
          >
            {logo.text}
          </Link>
        );
      }
    }
    const timeSpanStyle = {
      position: "absolute",
      height: "40px",
      left: 0,
      width: "100%",
      top: 917 - 56,
    };
    return (
      <div className="sidebar" data={bgColor} ref={this.sidebar}>
        <div
          className="sidebar-wrapper"
          ref="sidebar"
          style={{ height: "100%" }}
        >
          {logoImg !== null || logoText !== null ? (
            <div className="logo">
              {logoImg}
              {logoText}
            </div>
          ) : null}
          <Nav>
            {routes.map((prop, key) => {
              if (prop.redirect) return null;
              return (
                <li
                  className={
                    this.activeRoute(prop.path) +
                    (prop.pro ? " active-pro" : "")
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                    onClick={this.props.toggleSidebar}
                  >
                    <i className={prop.icon} />
                    <p>{rtlActive ? prop.rtlName : prop.name}</p>
                  </NavLink>
                </li>
              );
            })}
            {this.props.loggedIn ? (
              <li
                onClick={() => {
                  this.props.setLoggedIn(false);
                }}
              >
                <a className="nav-link">
                  <i
                    className="tim-icons icon-button-power"
                    aria-hidden="true"
                  />
                  <p>Logout</p>
                </a>
              </li>
            ) : (
              <li></li>
            )}
            {this.props.loggedIn ? (
              <li
                onClick={() => {
                  this.props.setLoggedIn(false);
                }}
              >
                <a className="nav-link">
                  <i
                    className="tim-icons icon-button-power"
                    aria-hidden="true"
                  />
                  <p>Logout</p>
                </a>
              </li>
            ) : (
              <li onClick={() => this.setOpen(true)}>
                <a className="nav-link">
                  <i className="tim-icons icon-upload" />
                  <p>Login</p>
                </a>
              </li>
            )}
            <LoginModal
              open={this.state.open}
              setOpen={this.setOpen}
              loggedIn={this.props.loggedIn}
              setLoggedIn={this.props.setLoggedIn}
            />
          </Nav>
          <TextField
            id="outlined-basic"
            select
            label="Time Span"
            name="time_span"
            variant="outlined"
            value={this.props.timeSpan}
            SelectProps={{
              native: true,
            }}
            onChange={this.props.handleTimeSpanChange}
            className="footer"
            style={timeSpanStyle}
            fullWidth
          >
            {this.timeSpanSelect.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </div>
      </div>
    );
  }
}

Sidebar.defaultProps = {
  rtlActive: false,
  bgColor: "primary",
  routes: [{}],
};

Sidebar.propTypes = {
  // if true, then instead of the routes[i].name, routes[i].rtlName will be rendered
  // insde the links of this component
  rtlActive: PropTypes.bool,
  bgColor: PropTypes.oneOf(["primary", "blue", "green"]),
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the text of the logo
    text: PropTypes.node,
    // the image src of the logo
    imgSrc: PropTypes.string,
  }),
};

export default Sidebar;
