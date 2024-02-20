import React, { useState } from "react";

export const ContactForm = () => {
  const [data, setData] = useState({ name: "", email: "", subject: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = () => {
    alert(data);
  };

  return (
    <div className="mainContainer">
      <form action="" method="post" onSubmit={handleSubmit} className=" ">
        <div className="form-container">
          <h4 className="  ">Lets get in touch</h4>
          <p className="">
            Join Our Masterclass Music school at any level and conquer your
            passion
          </p>
          <hr />
          <div className="form-group-container ">
            <div className="form-group">
              <label className=" " htmlFor="name">
                Name
              </label>
              <input
                className=" "
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name    'John Doe'"
                value={data.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group ">
              <label className=" " htmlFor="email">
                email
              </label>
              <input
                className=" "
                type="text"
                id="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Enter Your Email here 'jon@doe'"
              />
            </div>
            <div className="form-group ">
              <label className=" " htmlFor="subject">
                subject
              </label>
              <textarea
                id="subject"
                name="subject"
                className="  "
                value={data.subject}
                placeholder="Your Message Goes Here         🖊📝😊"
                onChange={handleChange}
                cols="30"
                rows="10"
              />
            </div>
            <div className="form-group ">
              <label className=" " htmlFor="subject">
                Terms of service
              </label>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  name="terms"
                  value="checked"
                  className="checkbox"
                />{" "}
                <span className="">
                  i agree to the terms and conditions as described in our{" "}
                  <cite>T&C documentation</cite>
                </span>
              </div>
            </div>
            <button type="submit" className="">
              send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
