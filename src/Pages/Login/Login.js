import React, { useState } from "react";
import "./Login.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Google } from "react-bootstrap-icons";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const auth = getAuth();

  const { logInWithGoogle } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password Must be at least 6 charecter long");
      return;
    }
    processLogin(email, password);
  };

  //   login function start
  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //   login function end

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <Form onSubmit={handleLogin} className="login my-5">
        <h3>Please Login</h3>
        <input
          onBlur={handleEmailChange}
          type="email"
          placeholder="Enter Your Email"
        />
        <br />
        <input
          onBlur={handlePasswordChange}
          type="password"
          placeholder="Enter Your Password"
        />
        <br />
        <p>
          New in Power GYM? <Link to="/registration">Registration</Link>{" "}
        </p>
        <p>{error}</p>
        <input className="submit-button" type="submit" value="Submit" />
      </Form>
      <br />
      <div className="col item social mb-5">
        <a
          onClick={logInWithGoogle}
          className="p-1 fs-5 rounded border border-2 border-success text-decoration-none "
        >
          <Google className="me-2"></Google>
          sign in with google
        </a>
      </div>
    </div>
  );
};

export default Login;
