import React from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const OurLocation = () => {
  return (
    <div>
      <Header></Header>
      <div className="my-5">
        <h3 className="text-info border-bottom border-info border-3 w-25 d-inline-block">
          Our Location
        </h3>
        <div>
          {" "}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d138927.24863801213!2d90.42991403370165!3d23.792554439263604!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1634621964997!5m2!1sen!2sbd"
            width="70%"
            height="300vh"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default OurLocation;
