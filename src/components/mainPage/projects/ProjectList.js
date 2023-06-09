import React, { useState } from "react";
import Project from "./Project";
import DesignProject from "../design/DesignProject";
import './ProjectList.css';
import { projectsData } from "./project-data";
import { designProjects } from "../design/design-project-data";
import SeeMoreBtn from "../SeeMoreBtn";

const ProjectList = ({scrollToAbout}) => {
  const [projects] = useState(projectsData);
  const [isOpen, setIsOpen] = useState(false);
  const [openProjects, setOpenProjects] = useState([]);

  const openProject = (id) => {
    if (openProjects.length === 0) {
      setOpenProjects([...openProjects, id]);
      setIsOpen(true);
    }
  };

  const closeProject = (id) => {
    if (openProjects.length > 0) {
      setIsOpen(false);
      setOpenProjects([]);
    }
  }

  return (
    <div className="project-list">
      <h2>Projects</h2>
      <p>
        Here are some of the projects that I have made. Click on them to find
        out more.
      </p>
        <SeeMoreBtn scrollToAbout={scrollToAbout} />
        <div className="projects-box">
        <h3>Development Projects</h3>
      <div className="projects">
        {projects.map((project) => {
          return <Project key={project.id} name={project.name} images={project.images} description={project.description} techUsed={project.techUsed} id={project.id} isOpen={isOpen} openProject={openProject} closeProject={closeProject} openProjects={openProjects} />
        })}
      </div>
      </div>
      <div className="projects-box">
        <h3>DesignProjects</h3>
      <div className="projects">
        {designProjects.map((project) => {
          return <DesignProject key={project.id} name={project.name} images={project.images} description={project.description} id={project.id} isOpen={isOpen} openProject={openProject} closeProject={closeProject} openProjects={openProjects} />
        })}
      </div>
      </div>
    </div>
  );
};

export default ProjectList;
