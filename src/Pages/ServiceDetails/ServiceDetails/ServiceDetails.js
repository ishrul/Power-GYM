import React from "react";
import "./ServiceDetails.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Facebook,
  Github,
  Google,
  Instagram,
  Youtube,
} from "react-bootstrap-icons";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";

const ServiceDetails = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const [services, setServices] = useState([]);
  const { serviceId } = useParams();

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  //   set service
  const service = services.find((serve) => serve.id === serviceId);

  return (
    <div>
      <Header />
      <div id="container1">
        <div className="service-details">
          <h1>{service?.title}</h1>
          <span className="hint-star">
            <Facebook className="m-1 star"></Facebook>
            <Google className="m-1 star"></Google>
            <Instagram className="m-1 star"></Instagram>
            <Github className="m-1 star"></Github>
            <Youtube className="m-1 star"></Youtube>
          </span>
          <p className="information">{service?.description}</p>
        </div>

        <div className="service-image">
          <img src={service?.image} alt="" />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ServiceDetails;
