import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Project from "../components/ProjectCard";
import projects from "../utils/projectslist.json";

class Projects extends Component {
  state = {
    projects,
  };
  render() {
    return (
      <div class="card bg-dark text-center">
        <h1 class="display-4 neon projectjumbo">Kristen Picard Projects</h1>
        <br></br>
        <br></br>

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
          />
        ))}
      </div>
    );
  }
}

export default Projects;
