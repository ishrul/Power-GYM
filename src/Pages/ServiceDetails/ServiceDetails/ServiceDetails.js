import React from "react";
import "./ServiceDetails.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  Facebook,
  Github,
  Google,
  Instagram,
  Youtube,
} from "react-bootstrap-icons";

const ServiceDetails = () => {
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
      <div id="container">
        <div className="product-details">
          <h1>{service?.title}</h1>
          <span className="hint-star">
            <Facebook className="m-1 star"></Facebook>
            <Google className="m-1 star"></Google>
            <Instagram className="m-1 star"></Instagram>
            <Github className="m-1 star"></Github>
            <Youtube className="m-1 star"></Youtube>
          </span>
          <p className="information">
            {service?.description.slice(0, 100)}....
          </p>

          <p className="text-dark">Hover Or Click Image For Details...</p>
        </div>

        <div className="product-image">
          <img src={service?.image} alt="" />

          <div className="info ps-1">
            <h2> Description</h2>
            <small>{service?.description}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
