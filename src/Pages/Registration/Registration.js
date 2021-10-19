import React, { useEffect } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Google } from "react-bootstrap-icons";
import { Link, useHistory } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import useAuth from "../../Hooks/useAuth";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const Registration = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const auth = getAuth();

  const history = useHistory();

  const handleRegistration = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("          Password Must be at least 6 charecter long");
      return;
    }
    createNewUser(email, password);
    history.push("/home");
  };
  //   create user start
  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUserName();
        setError("");
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //   create user end
  //

  // ------------------------------------------------------------------------
  //   setup user name start
  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then((result) => {
        //   profile updated
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //   setup user name end

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const { logInWithGoogle } = useAuth();

  return (
    <div>
      <Header user={user ? user : ""} />
      <Form onSubmit={handleRegistration} className="login my-5">
        <h3>Create Account</h3>
        <input
          onBlur={handleNameChange}
          type="text"
          placeholder="Enter Your Name"
        />
        <br />
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
        <p className="text-danger">{error.slice(10, 100)}</p>
        <p>
          Already have an account? <Link to="/login">Login</Link>{" "}
        </p>
        <input className="submit-button" type="submit" value="Submit" />
      </Form>
      <div className="col item social mb-5">
        <a
          onClick={logInWithGoogle}
          className="p-1 fs-5 rounded border border-2 border-success text-decoration-none cursor"
        >
          <Google className="me-2"></Google>
          sign in with google
        </a>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Registration;
