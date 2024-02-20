import React from "react";
import { Prices } from "../data";
import Card from "../UI/Card";
import SectionHead from "./SectionHead";
import { SiCashapp } from "react-icons/si";
import { MdShoppingCart } from "react-icons/md";
import images from "../images/images";
const Pricing = () => {
  return (
    <section className="">
      <div className="mainContainer pricing__container ">
        <div className="pricing-right">
          <img src={images.pianoV} alt="Pricing Image" className="" />
        </div>
        <div className="pricing-left ">
          <SectionHead
            icon={<SiCashapp />}
            title="Our Prices"
            className=""
          ></SectionHead>
          <div className="card__wrapper pricing__card-wrapper">
            {Prices.map(({ id, icons, title, desc }) => {
              return (
                <Card className="pricing-card" key={id}>
                  <span className="">{<MdShoppingCart />}</span>
                  <h4 className=" ">{title} </h4>
                  <small className=" ">{desc} </small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
