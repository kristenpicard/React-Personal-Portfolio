import React from "react";
import { Link } from "react-router-dom";
import "./links.css";

function Links() {
  return (
    <>
      <div className="align-items-center bg-dark btnsContainer">
        <section className="container btncnt px-lg-5 align-items-center bg-dark">
          <div className="row mx-lg-n5 bg-dark">
            <Link
              to="/projects"
              type="button"
              className="btn btn-outline-secondary btn-lg btn-block col-10"
              target="_blank"
            >
              <i className="fas fa-project-diagram"></i> Projects
            </Link>
            <br></br>
            <a
              href="https://github.com/kristenpicard"
              type="button"
              role="button"
              className="btn btn-outline-secondary btn-lg btn-block col-10"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
            <br></br>
            <a
              href="https://www.linkedin.com/in/kristen-picard/"
              type="button"
              className="btn btn-outline-secondary btn-lg btn-block col-10"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <br></br>
            <a
              href="https://drive.google.com/file/d/1ezUpq5BlYEwA_jYAEYtfqWb5dzUCeI-H/view?usp=sharing"
              type="button"
              className="btn btn-outline-secondary btn-lg btn-block col-10"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-download"></i> Resume
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Links;
