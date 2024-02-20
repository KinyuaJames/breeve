import React from "react";
import Logo from "../images/Logo.svg";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="">
      <div className="">
        <div className="footer-container">
          <article className="">
            <a href="#home" className="logo">
              <img src={Logo} alt="Footer Logo" />
            </a>
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
              repudiandae illo, officiis a deserunt aperiam.
            </p>
            <div className="footer-socials">
              <a href="/" target="_blank" rel="noreferrer noopener">
                <FaLinkedin />{" "}
              </a>
              <a href="/" target="_blank" rel="noreferrer noopener">
                <FaFacebook />{" "}
              </a>
              <a href="/" target="_blank" rel="noreferrer noopener">
                <AiFillInstagram />{" "}
              </a>
              <a href="/" target="_blank" rel="noreferrer noopener">
                <AiOutlineTwitter />{" "}
              </a>
            </div>
          </article>
          <article className="links">
            <h4>permalinks</h4>
            <a href="#about">About</a>
            <a href="#lessons">Lessons</a>
            <a href="#home">Home</a>
            <a href="#contact">Contact</a>
          </article>
          <article className="links">
            <h4>Get In Touch</h4>
            <a href="#about">About</a>
            <a href="#lesson">Lessons</a>
            <a href="#contact">contact</a>
          </article>
        </div>
        <div className="footer-copyright">
          <small>2023 GNIAS WEB &copy; All Rights Reserved</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
