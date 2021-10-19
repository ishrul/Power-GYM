import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useFirebase from "../../../Hooks/useFirebase";
import logo from "../../../images/logo/logo.png";

const Header = () => {
  const { user, logOut } = useFirebase();
  return (
    <Navbar
      bg="light"
      variant="light"
      sticky="top"
      collapseOnSelect
      expand="md"
      style={{
        borderBottom: "5px solid #91ce6b",
        backgroundColor: "transparent",
      }}
    >
      <Container>
        <img
          className="rounded-3"
          src={logo}
          alt=""
          width="140vh"
          height="60vh"
        />
        <Navbar.Toggle />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <NavLink
            activeStyle={{
              color: "#252625",
              padding: "5px",
              borderBottom: "2px solid #91ce6bBottom",
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
              borderBottom: "2px solid #91ce6b ",
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
              borderBottom: "2px solid #91ce6b ",
              borderRadius: "10px",
            }}
            className="mx-3 text-decoration-none"
            to="/location"
          >
            Our Location
          </NavLink>
          <NavLink
            activeStyle={{
              color: "#252625",
              padding: "5px",
              borderBottom: "2px solid #91ce6b ",
              borderRadius: "10px",
            }}
            className="text-decoration-none"
            to="/about"
          >
            About Us
          </NavLink>
          {user.email ? (
            <button
              onClick={logOut}
              style={{
                color: "#252625",
                padding: "5px",
                borderBottom: "2px solid #91ce6b ",
                borderRadius: "10px",
                border: "none",
              }}
              className="ms-3 text-decoration-none"
            >
              logOut
            </button>
          ) : (
            <NavLink
              activeStyle={{
                color: "#252625",
                padding: "5px",
                borderBottom: "2px solid #91ce6b ",
                borderRadius: "10px",
              }}
              className="ms-3 text-decoration-none"
              to="/login"
            >
              Login
            </NavLink>
          )}
          {user.displayName && (
            <Navbar.Text className="ms-2">
              <Link className="ms-1 text-decoration-none" to="/login">
                {user.displayName}
              </Link>
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
