import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Trainers from "../../Trainers/Trainers";
import Banner from "../Banner/Banner";
import Motto from "../Motto/Motto";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Motto />
      <Services />
      <Trainers />
    </div>
  );
};

export default Home;
