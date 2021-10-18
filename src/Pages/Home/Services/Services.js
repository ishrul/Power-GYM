import React from "react";
import { useState, useEffect } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      <h2
        style={{
          color: "#91ce6b",
          borderBottom: "2px solid #91ce6b",
          width: "200px",
          display: "inline-block",
          marginTop: "40px",
        }}
      >
        Our Services:
      </h2>
      <div className="row row-cols-md-3 row-cols-1 my-3 gx-2 p-0">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </>
  );
};

export default Services;
