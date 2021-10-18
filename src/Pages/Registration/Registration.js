import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Google } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div>
      <Form className="login my-5">
        <h3>Create Account</h3>
        <input type="text" placeholder="Enter Your Name" />
        <br />
        <input type="email" placeholder="Enter Your Email" />
        <br />
        <input type="password" placeholder="Enter Your Password" />
        <br />
        <p>
          Already have an account? <Link to="/login">Login</Link>{" "}
        </p>
        <input className="submit-button" type="submit" value="Submit" />
      </Form>
      <div className="col item social mb-5">
        <a className="p-1 fs-5 rounded border border-2 border-success text-decoration-none">
          <Google className="me-2"></Google>
          sign in with google
        </a>
      </div>
    </div>
  );
};

export default Registration;
