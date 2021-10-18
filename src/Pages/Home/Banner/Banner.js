import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner/banner-1.jpg";
import banner2 from "../../../images/banner/banner-2.jpg";
import banner3 from "../../../images/banner/banner-3.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="banner d-block w-100"
            src={banner1}
            alt="First slide"
            height="380vh"
          />
          <Carousel.Caption>
            <h3>Free Guest Pass</h3>
            <p>
              Come in and check us out with a free 1 day gym pass for you or
              your family
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="banner d-block w-100"
            src={banner2}
            alt="Second slide"
            height="380vh"
          />

          <Carousel.Caption>
            <h3>Class Timetable</h3>
            <p>
              From Yoga to BodyAttack, check out one of our classes on this
              week.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="banner d-block w-100"
            src={banner3}
            alt="Third slide"
            height="380vh"
          />

          <Carousel.Caption>
            <h3>We're Changing</h3>
            <p>
              Because better clubs means a better experience for you. Give us
              your feedback.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
