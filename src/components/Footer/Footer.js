import React from "react";
import { NavLink, Nav, Container, NavItem } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>
          <Nav>
            <NavItem style={{ display: "flex" }}>Collaborators:</NavItem>
            <NavItem style={{ display: "flex" }}>
              Михаил Добрев:
              <NavLink href="https://github.com/yaboiishere">Github</NavLink>
              <NavLink href="https://github.com/yaboiishere">Linked In</NavLink>
            </NavItem>
            <NavItem style={{ display: "flex" }}>
              Кирил Киров:
              <NavLink href="https://github.com/kirilkirov01">Github</NavLink>
              <NavLink href="https://github.com/yaboiishere">Linked In</NavLink>
            </NavItem>
            <NavItem style={{ display: "flex" }}>
              Кристиян Михалев:
              <NavLink href="https://github.com/kristiyanmv">Github</NavLink>
              <NavLink href="https://github.com/yaboiishere">Linked In</NavLink>
            </NavItem>
          </Nav>
          <div className="copyright">
            <NavLink href="https://www.creative-tim.com/?ref=bdr-user-archive-footer">
              Template from Creative Tim
            </NavLink>
            <br />
            <NavItem>
              © {new Date().getFullYear()} made with{" "}
              <i className="tim-icons icon-heart-2" /> by{" "}
              <a href="https://www.creative-tim.com/?ref=bdr-user-archive-footer">
                Creative Tim
              </a>{" "}
              for a better web.
            </NavItem>
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
