import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Link to="/home">
        <button className=" btn-dark mt-3 px-2 py-1 rounded-3">
          Go To Home
        </button>
      </Link>
      <br />
      <img src="https://i.ibb.co/bJwyczT/404-jpg.png" alt="" width="100%" />
    </div>
  );
};

export default NotFound;
