import React, { useState } from "react";
import SectionHead from "./SectionHead";
import { ImQuotesLeft } from "react-icons/im";
import Card from "../UI/Card";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { testimonial } from "../data";

import "./testimonial.css";

const Testimonials = () => {
  let reset = testimonial.slice(1, testimonial.length - 1);
  const [index, setIndex] = useState(0);
  const { name, desc, avatar } = testimonial[index];
  const [testimonialz, setTestimonialz] = useState(reset);

  const prevTestmonHandler = () => {
    setIndex((prev) => prev - 1);
    if (index == 0) {
      setIndex(testimonial.length - 1);
    }
    const slice1 = testimonial.slice(index);
    const slice2 = testimonial.slice(0, index - 1);
    const slice3 = slice1.concat(slice2);
    setTestimonialz(slice3);
  };
  const nextTestmonHandler = () => {
    if (index >= testimonial.length - 1) {
      setIndex(0);
      setTestimonialz(reset);
    } else {
      let slice1 = testimonial.slice(index + 2);
      let slice2 = testimonial.slice(0, index + 2);
      let slice3 = slice1.concat(slice2);

      setTestimonialz(slice3);
      setIndex((prev) => prev + 1);
    }
  };

  return (
    <section className="mainContainer  testimonials">
      <div className="testimonials_container">
        <SectionHead
          icon={<ImQuotesLeft />}
          title="Testimonials"
          className="testimonial-section-head"
        />
        <Card className="testimonial">
          <div className="avatar ">
            <img src={avatar} alt="" />
          </div>
          <p className="testimonial_quote">{`"${desc}"`} </p>
          <h5>{name} </h5>
        </Card>
        <div className="testimonial-nav ">
          <button className="mon-btn ">
            <IoIosArrowDropleftCircle
              onClick={prevTestmonHandler}
              className=""
            />
          </button>
          <button className="mon-btn ">
            <IoIosArrowDroprightCircle
              onClick={nextTestmonHandler}
              className=""
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
