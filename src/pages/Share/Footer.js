import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark py-5">
      <div className="container">
        <p className="text-white d-flex justify-content-between">
          <div>
          &copy;2022. Developed with <span className="text">❤</span> Love For
          Developer MD: Arif Hasan. Portfolio
          </div>
          <div className="ms-3">
            <button className="rounded-circle px-1 me-3">
              <i
                className="fab fa-youtube"
                style={{ color: "red" }}
                aria-hidden="true"
              ></i>
            </button>
            <button className="rounded-circle px-2 me-3">
              <i
                className="fab fa-facebook-f text-primary"
                aria-hidden="true"
              ></i>
            </button>
            <button className="rounded-circle me-3">
              <i className="fab fa-skype text-success" aria-hidden="true"></i>
            </button>
            <button className="rounded-circle ">
              <i
                className="fab fa-linkedin-in text-info"
                aria-hidden="true"
              ></i>
            </button>
            <button className="rounded-circle ms-3">
              <i className="fab fa-github text-black" aria-hidden="true"></i>
            </button>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Footer;
