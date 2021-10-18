import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../images/logo/logo.png";

const Header = () => {
  return (
    <>
      <Navbar
        bg="light"
        variant="light"
        sticky="top"
        collapseOnSelect
        expand="md"
      >
        <Container>
          <img src={logo} alt="" height="50vh" />
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Navbar.Toggle />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <NavLink
              activeStyle={{
                color: "#252625",
                padding: "5px",
                border: "2px solid #91ce6b ",
                borderRadius: "10px",
              }}
              className="text-decoration-none"
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              activeStyle={{
                color: "#252625",
                padding: "5px",
                border: "2px solid #91ce6b ",
                borderRadius: "10px",
              }}
              className="mx-3 text-decoration-none"
              to="/trainers"
            >
              Trainers
            </NavLink>
            <NavLink
              activeStyle={{
                color: "#252625",
                padding: "5px",
                border: "2px solid #91ce6b ",
                borderRadius: "10px",
              }}
              className="text-decoration-none"
              to="/about"
            >
              About Us
            </NavLink>
            <NavLink
              activeStyle={{
                color: "#252625",
                padding: "5px",
                border: "2px solid #91ce6b ",
                borderRadius: "10px",
              }}
              className="ms-3 text-decoration-none"
              to="/login"
            >
              Login
            </NavLink>
            <Navbar.Text className="ms-2">
              Signed in as: <Link to="/login">Mark Otto</Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
