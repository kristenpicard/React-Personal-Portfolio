import React from "react";
import "./skills.css";

function Skills() {
  return (
    <>
      <div className="skillz">
        <div className="container skills bg-white">
          <h5 className="card-title skills">Skills</h5>

          <div className="card-deck bg-white">
            <div className="card bg-white">
              <i className="fab fa-html5 skillicon"></i>
              <br></br>
              <h5 className="card-title names">HTML</h5>
            </div>

            <div className="card bg-white">
              <i className="fab fa-js-square skillicon"></i>
              <br></br>
              <h5 className="card-title names">JAVASCRIPT</h5>
            </div>

            <div className="card bg-white">
              <i className="fas fa-database skillicon"></i>
              <br></br>
              <h5 className="card-title names">DATABASES</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
