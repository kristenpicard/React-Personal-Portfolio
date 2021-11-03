import React from "react";
import Headshot from "../../Assets/Headshot.jpg";
import "./bio.css";

function Bio() {
  return (
    <>
      <div className="min-vw-100 container bg-dark headshot">
        <img
          className="img bg-dark"
          src={Headshot}
          alt="Headshot of Kristen Picard"
        ></img>

        <div className="card-body biobody">
          <h5 className="card-title">Biography</h5>
          <p className="card-text">
            Hi there! I'm a Full-Stack Web Developer with a unique blend of
            technical and interpersonal skills and an execution mindset who
            translates business needs into user-friendly software. Graduate of
            The Ohio State University's Coding Bootcamp, with skills across the
            entire stack. Web development became my passion when I discovered it
            lets me tap into both the analytical and artistic sides of my
            personality. Ever since then I've been on a journey to deepen my
            knowledge and explore the limitless world of coding. Be sure to
            check out my projects to see what I've been working on.
          </p>
        </div>
      </div>
    </>
  );
}

export default Bio;
