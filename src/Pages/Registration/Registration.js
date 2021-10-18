import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Google } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const auth = getAuth();

  const handleRegistration = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password Must be at least 6 charecter long");
      return;
    }
    createNewUser(email, password);
  };
  //   create user start
  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setError("");
        setUserName();
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //   create user end
  // ------------------------------------------------------------------------
  //   setup user name start
  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
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

  const { logInWithGoogle } = useFirebase();
  return (
    <div>
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
        <p>
          Already have an account? <Link to="/login">Login</Link>{" "}
        </p>
        <p className="text-danger">{error.slice(10, 50)}</p>
        <input className="submit-button" type="submit" value="Submit" />
      </Form>
      <div className="col item social mb-5">
        <a
          onClick={logInWithGoogle}
          className="p-1 fs-5 rounded border border-2 border-success text-decoration-none"
        >
          <Google className="me-2"></Google>
          sign in with google
        </a>
      </div>
    </div>
  );
};

export default Registration;
