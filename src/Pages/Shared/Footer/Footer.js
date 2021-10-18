import React from "react";
import "./Footer.css";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Body Combat</a>
                </li>
                <li>
                  <a href="#">Yoga Fitness</a>
                </li>
                <li>
                  <a href="#">Zumba Fitness</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>Power GYM</h3>
              <p>
                Power training typically involves exercises which apply the
                maximum amount of force as fast as possible; on the basis that
                strength + speed = power. Jumping with weights or throwing
                weights are two examples of power training exercises.
              </p>
            </div>
            <div className="col item social">
              <a href="#">
                <Facebook></Facebook>
              </a>
              <a href="#">
                <Twitter></Twitter>
              </a>
              <a href="#">
                <Youtube></Youtube>
              </a>
              <a href="#">
                <Instagram></Instagram>
              </a>
            </div>
          </div>
          <p className="copyright">Power GYM © 2021</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
