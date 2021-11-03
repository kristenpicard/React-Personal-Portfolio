import React, { Component } from "react";
import Project from "../components/ProjectCard";
import projects from "../utils/projectslist.json";
import "./projectspage.css";

class Projects extends Component {
  state = {
    projects,
  };
  render() {
    return (
      <>
        <div className="card bg-dark text-center">
          <div className="jumbocontainer">
            <h1 className="display-4 neon projectjumbo">
              Kristen Picard Projects
            </h1>
          </div>

          {this.state.projects.map((projects) => (
            <Project
              id={projects.id}
              title={projects.title}
              image={projects.image}
              deployedlink={projects.deployedlink}
              icon={projects.icon}
              deployedtitle={projects.deployedtitle}
              ghlink={projects.ghlink}
              githubicon={projects.githubicon}
              githubtitle={projects.githubtitle}
              description={projects.description}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Projects;
