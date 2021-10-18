import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useFirebase from "../../../Hooks/useFirebase";
import logo from "../../../images/logo/logo.png";

const Header = () => {
  const { user, logOut } = useFirebase();
  return (
    <div className="bg-transparent">
      <Navbar
        bg="light"
        variant="light"
        sticky="top"
        collapseOnSelect
        expand="md"
        style={{
          height: "100%",
          borderBottom: "5px solid #91ce6b",
        }}
      >
        <Container>
          <img
            className="rounded-3"
            src={logo}
            alt=""
            width="150vh"
            height="70vh"
          />
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
                Signed in as: <Link to="/login">{user.displayName}</Link>
              </Navbar.Text>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
