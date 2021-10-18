import React from "react";
import "./Trainer.css";

const Trainer = ({ trainer }) => {
  const { name, description, image, age } = trainer;
  return (
    <ul>
      <li className="list-unstyled">
        <a href="" className="card">
          <img src={image} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                <path />
              </svg>
              <img className="card__thumb" src={image} alt="" />
              <div className="card__header-text">
                <h3 className="card__title">{name}</h3>
                <span className="card__status">{age} years old.</span>
              </div>
            </div>
            <p className="card__description">{description}</p>
          </div>
        </a>
      </li>
    </ul>
  );
};

export default Trainer;
