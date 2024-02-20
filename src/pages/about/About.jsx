import React from "react";
import "./about.css";

import { image } from "../../images";
const About = () => {
  return (
    <section id="about" className="about__story aboutSection">
      <div className="mainContainer mobileContainer">
        <div className="about about__story-container ">
          <div className="section__image">
            <img src={image.pianostool} alt="" />
          </div>
          <div className="section__content">
            <h4>About us</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est odit
              quia repudiandae asperiores deleniti ratione esse iusto atque
              sint. Molestiae voluptatum cupiditate at commodi quo consectetur
              quisquam laudantium veniam. Error non dolorem nulla labore quas!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est odit
              quia repudiandae asperiores deleniti ratione esse iusto atque
              sint. Molestiae voluptatum cupiditate at commodi quo consectetur
              quisquam laudantium veniam. Error non dolorem nulla labore quas!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              suscipit voluptates libero iste id cupiditate!
            </p>
          </div>
        </div>
        <div className="about__story-missviss ">
          <div className="section__image">
            <img src={image.steinway3} alt="" />
          </div>
          <div className="section__content">
            <h4>Mission</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est odit
              quia repudiandae asperiores deleniti ratione esse iusto atque
              sint. Molestiae voluptatum cupiditate at commodi quo consectetur
              quisquam laudantium veniam. Error non dolorem nulla labore quas!
            </p>
            <h4>Vission</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est odit
              quia repudiandae asperiores deleniti ratione esse iusto atque
              sint. Molestiae voluptatum cupiditate at commodi quo consectetur
              quisquam laudantium veniam. Error non dolorem nulla labore quas!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
