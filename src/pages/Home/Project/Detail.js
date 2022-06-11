import React from "react";
import { Card, Carousel } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const projects = [
    {
      id: 1,
      live: "https://digital-hammer-drill-station.web.app/",
      client: "https://github.com/annise-arif/manufacturer-website-client",
      server: "https://github.com/annise-arif/manufacturer-website-server",
      name: "Digital Hammer Drill Station",
      img: "https://i.ibb.co/G97kWjk/h.png",
      img1: "https://i.ibb.co/k1kg1FK/h1.png",
      img2: "https://i.ibb.co/FKJFy3q/h2.png",
      used1: "React, React router",
      used2: "Tailwind css and daisyUi (conponent)",
      used3: "Firebase",
      used4: "React firebase hooks",
      used5: "React query",
      desc: " login, Sign Up, dashboard, An admin roled operations, Tools, and responsive homepage.",
      description:
        "google firebase authentication with email and social, react firebase hooks, tailwind css, daisyUi of tailwind components, react router, react query, fontAwesome icon",
    },
    {
      id: 2,
      live: "https://warehouse-of-car.firebaseapp.com/",
      client: "https://github.com/annise-arif/warehouse-management-client",
      server: "https://github.com/annise-arif/warehouse-management-server",
      name: "Ware House Of Car",
      img: "https://i.ibb.co/2cZpMvH/web-11.png",
      img1: "https://i.ibb.co/T8wfYMP/w1.png",
      img2: "https://i.ibb.co/vZHnKxV/w2.png",
      used1: "React, React router",
      used2: "React Bootstrap",
      used3: "Firebase",
      used4: "React firebase hooks",
      used5: "JsonWebToken",
      desc: " google firebase authentication with email and social",
      description:
        "A Car Salesperson, or Auto Sales Representative, is responsible for selling cars, trucks and vans for personal and commercial use.",
    },
    {
      id: 3,
      live: "https://memorable-journeys.web.app/",
      client: "https://github.com/annise-arif/independent-service-provider",
      name: "Memorable Journeys",
      img: "https://i.ibb.co/tcYKqD2/web-10.png",
      img1: "https://i.ibb.co/sFBvNYm/m1.png",
      img2: "https://i.ibb.co/BKBmBmq/m2.png",
      used1: "React, React router",
      used2: "React Bootstrap",
      used3: "firebase Hosting",
      used4: "React firebase hooks",
      used5: "React Toastify",
      desc: "React, React Bootstrap React Router React-firebase-hooks react-toastify",
      description: "React, React Bootstrap React Router React-firebase-hooks react-toastify, private route of booking proced page",
    },
  ];
  const { id } = useParams();

  const p = projects.find((project) => project.id == id);

  return (
    <div className="container">
      <h1 className="text-center">Details Of : {p?.name}</h1>
      <div className="col-12 my-5">
        <Card data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="bg-dark text-white mx-auto" style={{ width: "28rem" }}>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={p.img} alt="First slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={p.img1} alt="Second slide" />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={p.img2} alt="Third slide" />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <Card.Body>
            <Card.Title>{p?.name}</Card.Title>
            <Card.Text>
              <p>
              <b>Description : </b>
              {p?.description}
              </p>
              <p>
                <ul>
                  <li>{p.used1}</li>
                  <li>{p.used2}</li>
                  <li>{p.used3}</li>
                  <li>{p.used4}</li>
                  <li>{p.used5}</li>
                </ul>
              </p>
            </Card.Text>
            <button className="btn btn-info">
              <b>
                <a
                  className="text-decoration-none"
                  href={p?.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>
              </b>
            </button>
            <button className="btn btn-info mx-5">
              <b>
                <a
                  className="text-decoration-none"
                  href={p?.client}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Client Site
                </a>
              </b>
            </button>
            <button className="btn btn-info">
              <b>
                <a
                  className="text-decoration-none"
                  href={p?.server}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Server Site
                </a>
              </b>
            </button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Detail;
