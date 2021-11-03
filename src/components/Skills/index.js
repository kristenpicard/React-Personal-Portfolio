import React from "react";
import "./skills.css";

function Skills() {
  return (
    <>
      {/* <div className="container skills bg-white"> */}
      <h5 className="card-title skills-title">Skills</h5>
      <div className="card-deck skills-deck bg-white">
        <div className="bg-white">
          <i className="fab fa-html5 skillicon"></i>
          <br></br>
          <h5 className="card-title names">HTML</h5>
        </div>

        <div className="bg-white">
          <i className="fab fa-css3-alt skillicon"></i>
          <br></br>
          <h5 className="card-title names">CSS</h5>
        </div>

        <div className="bg-white">
          <i className="fab fa-js-square skillicon"></i>
          <br></br>
          <h5 className="card-title names">JAVASCRIPT</h5>
        </div>

        <div className="bg-white">
          <i className="fab fa-node skillicon"></i>
          <br></br>
          <h5 className="card-title names">NODE</h5>
        </div>

        <div className="bg-white">
          <i className="fab fa-react skillicon"></i>
          <br></br>
          <h5 className="card-title names">REACT</h5>
        </div>

        <div className="bg-white">
          <i className="fas fa-database skillicon"></i>
          <br></br>
          <h5 className="card-title names">DATABASES</h5>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Skills;
