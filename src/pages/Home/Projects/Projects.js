import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import project12 from '../../../Images/projects/web-12.png';
import project11 from '../../../Images/projects/web-11.png';
import project10 from '../../../Images/projects/web-10.png';
import Project from "../Project/Project";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() =>{
      fetch('projects.json')
    .then(res=>res.json())
    .then(data=>setProjects(data));
    }, []);

  return (
    <div>
      {/* project section start */}

      <div className="row container mx-auto">
        <h1 className="text-center text-dark mt-5">
          My Pr<span style={{ color: "#39a4ac" }}>o</span>jects
        </h1>
        {
            projects.map(project => <Project
            key={project.id}
            project={project}></Project> )
        }
       
      </div>

      {/* project section end */}
    </div>
  );
};

export default Projects;
