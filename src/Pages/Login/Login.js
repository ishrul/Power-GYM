import React from "react";
import "./Login.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Facebook, Google } from "react-bootstrap-icons";

const Login = () => {
  return (
    <div>
      <Form className="login my-5">
        <h3>Please Login</h3>
        <input type="email" placeholder="Enter Your Email" />
        <br />
        <input type="password" placeholder="Enter Your Password" />
        <br />
        <p>
          New in Power GYM? <Link to="/registration">Registration</Link>{" "}
        </p>
        <input className="submit-button" type="submit" value="Submit" />
      </Form>
      <br />
      <div className="col item social mb-5">
        <a className="p-1 fs-5 rounded border border-2 border-success text-decoration-none ">
          <Google className="me-2"></Google>
          sign in with google
        </a>
      </div>
    </div>
  );
};

export default Login;
