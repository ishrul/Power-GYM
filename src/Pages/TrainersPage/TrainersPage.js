import React from "react";
import { useEffect, useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import Trainer from "../Trainer/Trainer";

const TrainersPage = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    fetch("./trainers.json")
      .then((res) => res.json())
      .then((data) => setTrainers(data));
  }, []);
  return (
    <div>
      <Header />
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
      <Footer></Footer>
    </div>
  );
};

export default TrainersPage;
