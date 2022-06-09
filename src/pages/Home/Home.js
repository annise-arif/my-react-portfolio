import React from "react";
import book from "../../Images/book.png";
import weather from "../../Images/images-weather.png";
import me from "../../Images/me.jpg";
import skill from "../../Images/skill.png";
import work from "../../Images/work.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="profile">
          <img
            className="top-weather-icon rounded-circle"
            src={weather}
            alt="png"
          />
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

      {/* project section start */}


        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
                
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">

            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">

            </div>
        </div>


      {/* project section end */}

      <div className="aboutMe">
        <div className="about-me" id="about-me-id">
          <h2>ABOUT ME</h2>
          <hr className="dotted-hr" />
          <div className="row">
            <div className="aboutme-image col-lg-6 col-12">
              <img className="" src={me} alt="img" />
            </div>
            <div className="aboutme-desc col-lg-6 col-sm-12 col-md-6 mt-4">
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
                <b>Phone:</b> <a href="tel:+8801861449772">+8801861449772</a>
              </p>
              <hr className="aboutme-hr" />
              <p>
                <b>Page:</b>{" "}
                <a href="https//www.anis.com" target="blank">
                  https//www.anis.com
                </a>
              </p>
              <hr className="aboutme-hr" />
            </div>
          </div>
        </div>
      </div>
      {/* ========================== Professional-experience ========================== */}
      <div className="Professional-experience row">
        <div className="work-experience  col-lg-4 col-sm-12 col-md-6 mt-4">
          <div className="card">
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
          <div className="card">
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
          <div className="card">
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
        <div className="achievement col-lg-4 col-sm-12">
          <h2>ACHIEVEMENTS</h2>
          <hr className="dotted-hr" />
          <p>
            1.consectetur adipisicing elit. Omnis placeat laudantium tempore
            cupiditate consectetur, numquam eaque ut voluptatibus laboriosam
            nesciunt.
          </p>
          <p>
            2. public Bank Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Reprehenderit nesciunt facilis ipsam architecto, recusandae
            odit unde vero?
          </p>
          <p>
            3. Silver Button Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Iure sapiente provident rem suscipit. Sed, quam.
          </p>
          <p>
            4. IELTS 7 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Ullam facilis totam nam numquam magnam similique repellendus ad unde
            quasi?
          </p>
        </div>

        <div className="contact col-lg-4 col-sm-12" id="contactme-id">
          <h2> CONTACT ME</h2>
          <hr className="dotted-hr" />

          <form
            action="mailto:arifhasan.neon@gmail.com"
            enctype="text/plain"
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

        <div className="contact-links col-lg-4 col-sm-12">
          <h2>MORE WAYS TO CONTACT</h2>
          <hr className="dotted-hr" />
          <div className="media-buttons align-items-center">
            <button
              className="btn"
              onclick="window.open('https://www.youtube.com/channel/UCAVndfkblprqNVhoKvr4Wgw/videos')"
              className="request-callback"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
            </button>
            <button
              className="btn"
              onclick="window.open('https://www.youtube.com/channel/UCAVndfkblprqNVhoKvr4Wgw/videos')"
              className="request-callback px-4"
            >
              <i
                className="fab fa-facebook-f text-primary"
                aria-hidden="true"
              ></i>
            </button>
            <button
              className="btn"
              onclick="window.open('https://www.youtube.com/channel/UCAVndfkblprqNVhoKvr4Wgw/videos')"
              className="request-callback mt-2"
            >
              <i className="fab fa-skype text-success" aria-hidden="true"></i>
            </button>
            <button
              className="btn"
              onclick="window.open('https://www.youtube.com/channel/UCAVndfkblprqNVhoKvr4Wgw/videos')"
              className="request-callback"
            >
              <i
                className="fab fa-linkedin-in text-info"
                aria-hidden="true"
              ></i>
            </button>
            <button
              className="btn"
              onclick="window.open('https://www.youtube.com/channel/UCAVndfkblprqNVhoKvr4Wgw/videos')"
              className="request-callback py-3 px-4"
            >
              <i className="fab fa-youtube text-danger" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
