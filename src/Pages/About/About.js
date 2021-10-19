import React from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const About = () => {
  return (
    <div>
      <Header />
      <div className="my-5">
        <h3 className="text-info border-bottom border-info border-3 w-25 d-inline-block">
          WHO WE ARE
        </h3>
        <p className="text-secondary border-bottom w-100 px-5 ">
          We are an independent gym that is committed to working with you to
          gain the results you want. Whether your aim is to loose weight, tone
          up, build bulk or gain weight we can put together a gym programme or
          recommend the right classes for you to attend in our studios. Our
          members benefit from a free gym programme and review every month, free
          studio classes and price reductions on our personal training sessions.
          As a member you can also access our pool and tennis courts for free
          and have priority for booking any of the pre-book activities, classes
          or sessions that we run.
        </p>
      </div>
      <div className="my-5">
        <h3 className="text-info border-bottom border-info border-3 w-25 d-inline-block">
          Visit in Our Gym Center
        </h3>
        <div>
          <iframe
            width="90%"
            height="300vh"
            src="https://www.youtube.com/embed/DLo6WqYwiik"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="my-5">
        <h3 className="text-info border-bottom border-info border-3 w-25 d-inline-block">
          Our Loacation
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
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
