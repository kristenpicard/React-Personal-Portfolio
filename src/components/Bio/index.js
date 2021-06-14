import React from "react";

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
            Full Stack web developer utilizing special blend of technical and
            interpersonal skills to efficiently translate business needs into
            user-friendly, web functionality. Recently earned a certificate in
            full stack development from The Ohio State University, with newly
            developed skills in JavaScript, CSS, React.js, and mobile-first
            responsive web design. A self-motivated individual desiring to
            leverage strong time-management skills to efficiently prioritize
            competing objectives.
          </p>
        </div>
      </div>
    </>
  );
}

export default Bio;
