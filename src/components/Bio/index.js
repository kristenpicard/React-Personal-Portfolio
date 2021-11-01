import React from "react";
import "./bio.css";

function Bio() {
  return (
    <>
      <div className="min-vw-100 container bg-dark headshot">
        <div className="wrap">
          <img
            className="img bg-dark"
            src="Assets/Headshot.jpg"
            alt="Headshot of Kristen Picard"
            width="300"
          ></img>
        </div>
        <br></br>
        <div className="card-body biobody">
          <h5 className="card-title">Biography</h5>
          <p className="card-text">
            Full-Stack web developer with a unique blend of technical and
            interpersonal skills and an execution mindset that will add value to
            teams and work efficiently to translate business needs into
            user-friendly software. Graduate of The Ohio State University's
            Full-Stack Coding Bootcamp, with newly developed skills in
            JavaScript, CSS, React.js, and mobile-first responsive web design. A
            self-motivated individual desiring to leverage strong
            time-management skills to efficiently prioritize competing
            objectives.
          </p>
        </div>
      </div>
    </>
  );
}

export default Bio;
