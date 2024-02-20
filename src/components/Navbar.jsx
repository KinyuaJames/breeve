import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/Logo.svg";
import "./navbar.css";
import { links } from "../data";
import { VscThreeBars } from "react-icons/vsc";
import { MdOutlineClose } from "react-icons/md";

import React from "react";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav id="home" className={``}>
      <div className="mainContainer nav__container ">
        <a href="#home" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="Nav Logo" />
        </a>
        <ul
          className={`${isNavShowing ? "show__nav" : "hide__nav"} nav__links `}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index} className="">
                <a
                  className="nav-link"
                  onClick={() => setIsNavShowing((prev) => !prev)}
                  href={path}
                >
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
        <button //three icons svg
          onClick={() => setIsNavShowing((prev) => !prev)}
          className="nav__toggle-btn "
        >
          {isNavShowing ? (
            <MdOutlineClose className="" />
          ) : (
            <VscThreeBars className="" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
