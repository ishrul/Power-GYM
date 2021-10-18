import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, title, description, image } = service;

  return (
    <div className="container mb-4">
      <div className="card col">
        <div className="box">
          <div className="content">
            <img
              className="banner rounded-3 mb-2"
              src={image}
              alt=""
              width="100%"
              height="200vh"
            />
            <h3>{title}</h3>
            <p>{description.slice(0, 50)} ...</p>
            <button>
              <Link className="text-decoration-none text-light" to="/">
                Read More
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
