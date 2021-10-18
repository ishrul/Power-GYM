import React from "react";
import { useEffect, useState } from "react";
import Trainer from "../Trainer/Trainer";

const TrainersPage = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    fetch("./trainers.json")
      .then((res) => res.json())
      .then((data) => setTrainers(data));
  }, []);
  return (
    <div>
      <h2
        style={{
          color: "#91ce6b",
          borderBottom: "2px solid #91ce6b",
          width: "200px",
          display: "inline-block",
          marginTop: "40px",
        }}
      >
        Our Trainers:
      </h2>
      <div className="cards">
        {trainers.map((trainer) => (
          <Trainer key={trainer.name} trainer={trainer}></Trainer>
        ))}
      </div>
    </div>
  );
};

export default TrainersPage;
