import React from "react";
import "./OurLocation.css";
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
        <div>
          <h3 className="text-info border-bottom border-info border-3 w-25 d-inline-block">
            Our Class Routine
          </h3>
          <div className="routine m-3 p-1 rounded-3">
            <div className="row row-cols-8 ">
              <div className="col"></div>
              <div className="col">Sun</div>
              <div className="col">Mon</div>
              <div className="col">Tue</div>
              <div className="col">Wed</div>
              <div className="col">Thu</div>
              <div className="col">Fri</div>
              <div className="col">Sat</div>
            </div>
            <div className="row row-cols-8">
              <div className="col">Mourning</div>
              <div className="col">State-of-the-Art Equipment</div>
              <div className="col">Group Classes</div>
              <div className="col">Personal Trainers</div>
              <div className="col">Yoga Fitness</div>
              <div className="col">Body Combat</div>
              <div className="col">Zumba Fitness</div>
              <div className="col">Group Classes</div>
            </div>
            <div className="row row-cols-8">
              <div className="col">Evening</div>
              <div className="col">Group Classes</div>
              <div className="col">State-of-the-Art Equipment</div>
              <div className="col">Personal Trainers</div>
              <div className="col">Group Classes</div>
              <div className="col">Zumba Fitness</div>
              <div className="col">Body Combat</div>
              <div className="col">Yoga Fitness</div>
            </div>
            <div className="row row-cols-8">
              <div className="col">Night</div>
              <div className="col">Body Combat</div>
              <div className="col">Group Classes</div>
              <div className="col">State-of-the-Art Equipment</div>
              <div className="col">Zumba Fitness</div>
              <div className="col">Yoga Fitness</div>
              <div className="col">Group Classes</div>
              <div className="col">Personal Trainers</div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default OurLocation;
