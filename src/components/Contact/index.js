import React from "react";

function Contact() {
  return (
    <>
      <div className="container skills bg-white">
        <h5 className="card-title skills">
          Contact
        </h5>

        <div className="card-deck bg-white">
          <div className="card bg-white">
            <i className="fas fa-phone skillicon"></i>
            <br></br>
            <h5 className="card-title">555-555-5555</h5>
          </div>
          <div className="card bg-white">
            <i className="fas fa-envelope skillicon"></i>
            <br></br>
            <h5 className="card-title">Kristen@fakeemail.com</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
