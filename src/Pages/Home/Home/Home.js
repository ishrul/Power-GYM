import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Trainers from "../../Trainers/Trainers";
import Banner from "../Banner/Banner";
import Motto from "../Motto/Motto";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Motto />
      <Services />
      <Trainers />
      <Footer />
    </div>
  );
};

export default Home;
