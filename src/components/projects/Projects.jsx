import React from 'react'
import { useState } from 'react';
import './projects.css'
const Projects = () => {
  const [projects] = useState([
    {
      title: "Project 1",
      img: "/1.png",
       },
    {
      title: "Project 2",
      img: "/1.png",
      },
    {
      title: "Project 3",
      img: "/1.png",
        },
    {
      title: "Project 4",
      img: "/1.png",
       },
    {
      title: "Project 5",
      img: "/1.png",
      },
    {
      title: "Project 6",
      img: "/1.png",
        },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/wasifimtiaz"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects