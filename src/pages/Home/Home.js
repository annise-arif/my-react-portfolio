import React from "react";
import book from "../../Images/book.png";
import weather from "../../Images/images-weather.png";
import me from "../../Images/me.jpg";
import skill from "../../Images/skill.png";
import work from "../../Images/work.png";
import "./Home.css";
import Projects from "./Projects/Projects";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="profile">
          <img data-aos="fade-up" data-aos-duration="3000"
            className="top-weather-icon rounded-circle"
            src={weather}
            alt="png"
          />
          <div className="profile-desc">
            <h1>
              <span data-aos="zoom-in" data-aos-duration="3000">MD: Arif hasan</span> 
              <br /> <br /><span data-aos="zoom-in-left" data-aos-duration="3000">Web Developer</span>
            </h1>
            <p>
              Hi! My name is MD:Anis hossain arif Sheikh. Welcome to my personal
              page that I've designed to showcase my skills and expertise that
              I've accumulated over the year.
            </p>
          </div>
          <img data-aos="fade-up" data-aos-duration="3000" className="bottom-weather-icon" src={weather} alt="png" />
          <a
            href="https://drive.google.com/file/d/1XcTACgaZD-Nz4tg_-3TovfzfvSzauyLh/view?usp=sharing"
            target="blank"
          >
            <button data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="cv-button mt-4">Download Resume</button>
          </a>
        </div>
      </div>

     

      <div className="aboutMe">
        <div className="about-me" id="about-me-id">
          <h2 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">ABOUT ME</h2>
          <hr className="dotted-hr" />
          <div className="row">
            <div className="aboutme-image col-lg-6 col-12">
              <img data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="" src={me} alt="img" />
            </div>
            <div data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="aboutme-desc col-lg-6 col-sm-12 col-md-6 mt-4">
              <p>
                I like to call myself ``a passionate computer science learner &
                Web developing".
              </p>
              <p>
                I made lot of projects on different subjects. My first priority
                is making the web site more interesting and give you a clear
                understanding so you can feel it good and don't get bore.
              </p>

              <hr className="aboutme-hr" />
              <p>
                <b>Name:</b> Arif Hasan
              </p>
              <hr className="aboutme-hr" />
              <p>
                <b>Address:</b> Dhaka, Sreepur, Gazipur
              </p>
              <hr className="aboutme-hr" />
              <p>
                <b>Email:</b>{" "}
                <a href="mailto:arifhasan.neon@gmail.com">
                  arifhasan.neon@gmail.com
                </a>
              </p>
              <hr className="aboutme-hr" />
              <p>
                <b>Phone:</b> <a href="tel:+8801861449772">01303477672</a>
              </p>
              <hr className="aboutme-hr" />
              
            </div>
          </div>
        </div>
      </div>
      {/* ========================== Professional-experience ========================== */}
      <div className="Professional-experience row">
        <div className="work-experience  col-lg-4 col-sm-12 col-md-6 mt-4">
          <div data-aos="zoom-out-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="card">
            <div className="card-icon">
              <img className="rounded-img" src={work} alt="work icon" />
            </div>
            <div className="card-title">
              <h2>WORK EXPERIENCE</h2>
            </div>
            <div className="card-desc">
              <ol>
                <li>
                  <strong>Student of Science technology</strong> <br />
                  01/06/2016-01/08/2017 <br />
                  Sreepur Pilot High School <br />
                  Dhaka, Sreepur, Gazipur ( Bangladesh) <br />
                </li>
                <hr />
                <li>
                  <strong>
                    Student of Electronics Engineering & Web Designing
                  </strong>{" "}
                  <br />
                  10/11/2017-03/12/2018 <br />
                  Model institute of science & technology. Gazipur (MIST
                  <br />
                  Gazipur, shibbari, DUET, ( Bangladesh) <br />
                </li>
                <hr />
                <li>
                  <strong>Student of Science technology</strong> <br />
                  01/06/2016-01/08/2017 <br />
                  Sreepur Pilot High School <br />
                  Dhaka, Sreepur, Gazipur ( Bangladesh) <br />
                </li>
                <hr />
                <li>
                  <strong> Web Designer & Developer</strong> <br />
                  19/05/2018-03/02/2012 <br />
                  Model institute of science & technology. Gazipur (MIST
                  <br />
                  Gazipur, shibbari, DUET, ( Bangladesh) <br />
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="education col-lg-4 col-sm-12 col-md-6 mt-4">
          <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="card">
            <div className="card-icon">
              <img className="rounded-img" src={book} alt="work icon" />
            </div>
            <div className="card-title">
              <h2>EDUCATION AND TRAINING</h2>
            </div>
            <div className="card-desc">
              <ol>
                <li>
                  <strong>Student of Science technology</strong> <br />
                  01/06/2016-01/08/2017 <br />
                  Sreepur Pilot High School <br />
                  Dhaka, Sreepur, Gazipur ( Bangladesh) <br />
                  <a className="" href="https://youtu.be/JjQYJFyEckE">
                    Subscribe my channel
                  </a>
                </li>
                <hr />
                <li>
                  <strong>
                    Student of Electronics Engineering & Web Designing
                  </strong>{" "}
                  <br />
                  10/11/2017-03/12/2018 <br />
                  Model institute of science & technology. Gazipur (MIST
                  <br />
                  Gazipur, shibbari, DUET, ( Bangladesh) <br />
                </li>
                <hr />
                <li>
                  <strong>Student of Science technology</strong> <br />
                  01/06/2016-01/08/2017 <br />
                  Sreepur Pilot High School <br />
                  Dhaka, Sreepur, Gazipur ( Bangladesh) <br />
                </li>
                <hr />
                <li>
                  <strong> Web Designer & Developer</strong> <br />
                  19/05/2018-03/02/2012 <br />
                  Model institute of science & technology. Gazipur (MIST
                  <br />
                  <a className="" href="https://youtu.be/JjQYJFyEckE">
                    Subscribe my channel
                  </a>{" "}
                  <br />
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="skills col-lg-4 col-sm-12 col-md-6 mt-4" id="skill-id">
          <div data-aos="fade-up"
     data-aos-duration="3000" className="card">
            <div className="card-icon">
              <img className="rounded-img" src={skill} alt="work icon" />
            </div>
            <div className="card-title">
              <h2>SKILLS</h2>
            </div>
            <div className="card-desc">
              <div className="skills-container">
                <ul>
                  <li className="html">HTML</li>
                  <li className="css">CSS</li>
                  <li className="bootstrap">Bootstrap</li>
                  <li className="tailwind">Tailwind.css</li>
                  <li className="js">JavaScript</li>
                  <li className="react">React.Js</li>
                  <li className="node">Node.js</li>
                  <li className="express">Express.js</li>
                  <li className="github">Github</li>
                  <li className="mongoDb">MongoDB</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* ========================== Professional-experience end ========================== */}
      <div className="achievement-contact row">
        <div data-aos="fade-up"
     data-aos-anchor-placement="top-center" className="achievement col-lg-4 col-sm-12">
          <h2>ACHIEVEMENTS</h2>
          <hr className="dotted-hr" />
          <p className="mt-5 pt-5">
            1. I have achieve jsc school certificate from sreepur pilot heigh school.
          </p>
          <p>
            2. I Have completed senior school certificate from potka karigori school
          </p>
          <p>
            3. I have achieve Diploma in Electronics Engineering certificate from Model institute of science and technology (MIST), Gazipur, Shibbari, Duet. 1740
          </p>
          <p>
            4. I Have achieve Complete web development Main course with Jhankar Mahbub brother from web.programming-hero.com and I am learning SCIC bonus content for Job Hunting and getting Job.. 
          </p>
        </div>

        <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className="contact col-lg-4 col-sm-12" id="contactme-id">
          <h2> CONTACT ME</h2>
          <hr className="dotted-hr" />

          <form
            action="mailto:arifhasan.neon@gmail.com"
            encType="text/plain"
            method="POST"
          >
            <p>
              <input type="text" placeholder="Your Name" name="name" required />
            </p>
            <p>
              <input type="text" placeholder="Your Email" name="email" required />
            </p>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message Here"
              required
            ></textarea>
            <button type="submit">SEND</button>
            <button type="reset">RESET</button>
          </form>
        </div>

        <div data-aos="zoom-out-left" className="contact-links col-lg-4 col-sm-12">
          <h2>MORE WAYS TO CONTACT</h2>
          <hr className="dotted-hr" />
          <div className="media-buttons align-items-center">
            <h3 className="mx-3">Go To Footer for Social Contact Don't hasitate to contact me</h3>

          </div>
        </div>
      </div>
       <Projects></Projects>
    </>
  );
};

export default Home;
