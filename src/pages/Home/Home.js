import React from "react";
import weather from "../../Images/images-weather.png";
import me from "../../Images/me.jpg";
import "./Home.css";

const Home = () => {
  return (
    <>
    <div className="container">
      <div className="profile">
        <img className="top-weather-icon rounded-circle" src={weather} alt="png" />
        <div className="profile-desc">
          <h1>
            I am a web designer
            <br /> & <br /> Web Developer
          </h1>
          <p>
            Hi! My name is MD:Anis hossain arif Sheikh. Welcome to my personal
            page that I've designed to showcase my skills and expertise that
            I've accumulated over the year.
          </p>
        </div>
        <img className="bottom-weather-icon" src={weather} alt="png" />
        <a
          href="https://drive.google.com/file/d/1XcTACgaZD-Nz4tg_-3TovfzfvSzauyLh/view?usp=sharing"
          target="blank"
        >
          <button className="cv-button mt-4">Download Resume</button>
        </a>
      </div>
    </div>

    <div className="aboutMe">
      <div class="about-me" id="about-me-id">
            <h2>ABOUT ME</h2>
            <hr class="dotted-hr"/>
            <div className="row">
            <div class="aboutme-image col-lg-6 col-12">
                <img class="" src={me} alt="img"/>
            </div>
            <div class="aboutme-desc col-lg-6 col-sm-12 col-md-6 mt-4">
                <p>I like to call myself ``a passionate computer science learner & Web developing".</p>
                <p>I made lot of projects on different subjects. My first priority is making the web site more interesting and give you a clear understanding so you can feel it good and don't get bore.</p>
                 
                <hr class="aboutme-hr"/>
                <p><b>Name:</b> Arif Hasan</p>
                <hr class="aboutme-hr"/>
                <p><b>Address:</b> Dhaka, Sreepur, Gazipur</p>
                <hr class="aboutme-hr"/>
                <p><b>Email:</b> <a href="mailto:arifhasan.neon@gmail.com">arifhasan.neon@gmail.com</a></p>
                <hr class="aboutme-hr"/>
                <p><b>Phone:</b> <a href="tel:+8801861449772">+8801861449772</a></p>
                <hr class="aboutme-hr"/>
                <p><b>Page:</b> <a href="https//www.anis.com" target="blank">https//www.anis.com</a></p>
                <hr class="aboutme-hr"/>
            </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;
