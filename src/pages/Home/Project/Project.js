import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Project = ({project}) => {
  const navigate = useNavigate();
 

  const handleDetail = (id) =>{
   navigate(`detail/${id}`)
  };
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 my-5">
          <Card data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="bg-dark text-white" style={{ width: "22rem" }}>
            <Card.Img className="border-none" variant="top" src={project.img} />
            <Card.Body>
              <Card.Title>{project.name}</Card.Title>
              <Card.Text>
              <b>Features : </b>
                {project.desc}
              </Card.Text>
              <Button onClick={() =>handleDetail(project.id)} variant="info">Details</Button>
            </Card.Body>
          </Card>
        </div>
    );
};

export default Project;