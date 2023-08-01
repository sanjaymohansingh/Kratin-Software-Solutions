import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/navbar-styles.css";

const CustomNavbar = () => {
  return (
    <Navbar className="navbar-custom sticky-top navCSS" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Elderly Care
      </Navbar.Brand>
      <Navbar.Collapse id="navbarNavDropdown">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/emergency-contact">
            Emergency Helpline Number
          </Nav.Link>
          <Nav.Link as={Link} to="/exercise-videos">
            Exercise Videos
          </Nav.Link>
          <Nav.Link as={Link} to="/healthy-recipes">
            Recipes
          </Nav.Link>
          <Nav.Link as={Link} to="/reminders">
            Reminder
          </Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link as={Link} to="/login">
            <div className="navAccountResponsive float-end mt-1 mb-1 float-end">
              <p className="navAccountText" style={{ margin: 0 }}>
                <a className="loginButton" href="/login">
                  <i className="fas fa-sign-in-alt"></i>
                  Login{" "}
                </a>
              </p>
            </div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
