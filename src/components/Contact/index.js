import React from "react";
import "./contact.css";

function Contact() {
  return (
    <>
      <div className="container contact bg-white">
        <h5 className="card-title contact">Contact</h5>

        <div className="card-deck contact bg-white">
          <div className="card email bg-white">
            <i className="fas fa-phone skilliconcontact"></i>
            <br></br>
            <h5 className="card-title phone">937-287-6079</h5>
          </div>
          <div className="card email bg-white">
            <i className="fas fa-envelope skilliconcontact"></i>
            <br></br>
            <h5 className="emailTitle">kristenpicard93@gmail.com</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
