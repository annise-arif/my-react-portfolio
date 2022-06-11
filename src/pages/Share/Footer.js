import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark py-5">
      <div className="container">
        <p className="text-white d-flex justify-content-between">
          <div>
          Copyright &copy; 2022. Developed with <span className="text">❤</span> Love For
          Developer MD: Arif Hasan. Portfolio
          </div>
          <div className="ms-3">
            <a href="https://www.youtube.com/channel/UCAVndfkblprqNVhoKvr4Wgw/videos" target="_blank">
            <button className="rounded-circle px-1 me-3">
              <i
                className="fab fa-youtube"
                style={{ color: "red" }}
                aria-hidden="true"
              ></i>
            </button>
            </a>
            <a href="https://www.facebook.com/arifhasan.neon/" target="_blank">
            <button className="rounded-circle px-2 me-3">
              <i
                className="fab fa-facebook-f text-primary"
                aria-hidden="true"
              ></i>
            </button>
            </a>
            
            <button className="rounded-circle me-3">
              <i className="fab fa-skype text-success" aria-hidden="true"></i>
            </button>

            <a href="https://www.linkedin.com/in/arif-hasan-1b2803180/" target="_blank">
            <button className="rounded-circle ">
              <i
                className="fab fa-linkedin-in text-info"
                aria-hidden="true"
              ></i>
            </button>
            </a>
            <a href="https://github.com/annise-arif?tab=repositories" target="_blank">
            <button className="rounded-circle ms-3">
              <i className="fab fa-github text-black" aria-hidden="true"></i>
            </button>
            </a>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Footer;
