import React from "react";
import { Container } from "react-bootstrap";

const Motto = () => {
  return (
    <Container>
      <div className="row row-cols-md-3 row-cols-1 my-3 gx-5">
        <div className="col">
          <img
            src="http://fitness.skat.tf/wp-content/uploads/sites/8/2014/04/weight.jpg"
            alt=""
          />
          <h5>MODERN REQUIPMENTS</h5>
          <p>
            Creating the perfect body is no small matter. Not being content with
            just repeating.
          </p>
        </div>
        <div className="col">
          <img
            src="http://fitness.skat.tf/wp-content/uploads/sites/8/2014/04/heart.jpg"
            alt=""
          />
          <h5>WE CARE FOR YOU</h5>
          <p>
            {" "}
            We will help you to shape your muscles; Look different, feel
            different; Turn your fat into fit.
          </p>
        </div>
        <div className="col">
          <img
            src="http://fitness.skat.tf/wp-content/uploads/sites/8/2014/04/muscle.png"
            alt=""
          />
          <h5>Turn Fat into Fit! </h5>
          <p>
            {" "}
            Practice hard, play strong, pain is glory. Get in the gym. Power,
            perseverance, and discipline.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Motto;
