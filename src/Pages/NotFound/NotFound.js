import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const NotFound = () => {
  return (
    <div>
      <Header />
      <Link to="/home">
        <button className=" btn-dark mt-3 px-2 py-1 rounded-3">
          Go To Home
        </button>
      </Link>
      <br />
      <img src="https://i.ibb.co/bJwyczT/404-jpg.png" alt="" width="100%" />
      <Footer></Footer>
    </div>
  );
};

export default NotFound;
