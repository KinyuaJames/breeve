import Image from "../images/C1.jpg";
import Logo from "../images/Logo.svg";
import Mobile from "../images/Logo.svg";

const Mainheader = () => {
  return (
    <div className="home">
      <div style={{ textShadow: "0px 1px 1px gray" }} className="main__header">
        <div className="main__logo">
          <img className="" src={Logo} alt="" />
        </div>
        <div className=" main__content">
          <div className="main__left">
            <p className="main__lead ">pursue your passion</p>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              delectus voluptatibus ad animi velit perferendis?
            </p>
          </div>
          <div className="main__right  ">
            <button className="">contact us</button>
            <button className="">enroll today</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainheader;
