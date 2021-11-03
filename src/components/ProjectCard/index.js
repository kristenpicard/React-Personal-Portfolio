import React from "react";
import "./projects.css";

function Project(props) {
  return (
    <>
      {/* <div className="grid-container row"> */}
      {/* <div className="grid-item1 col"> */}
      <div className="container align-items-center bg-dark">
        <div className="card-body projectsbody">
          <h5 className="card-title projecttitle">{props.title}</h5>
          <div className="projectscreenshot">
            <img
              className="img2 bg-dark"
              src={props.image}
              alt="Project screenshot"
            ></img>
          </div>

          <p className="projectbuttons">
            <a
              href={props.deployedlink}
              type="button"
              role="button"
              className="btn2 btn-outline-secondary"
              target="_blank"
              rel="noreferrer"
            >
              <i className={props.icon}></i>&nbsp;
              {props.deployedtitle}
            </a>
            <br></br>
            <a
              href={props.ghlink}
              type="button"
              role="button"
              className="btn2 btn-outline-secondary"
              target="_blank"
              rel="noreferrer"
            >
              <i className={props.githubicon}></i>&nbsp;
              {props.githubtitle}
            </a>
          </p>
        </div>
      </div>
      {/* </div> */}
      {/* <div className="grid-item2 col">Im here!!!!!!!!!!!!!!!!!!!</div> */}
      {/* </div> */}
    </>
  );
}

export default Project;
