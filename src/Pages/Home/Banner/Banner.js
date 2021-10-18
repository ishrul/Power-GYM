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
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
