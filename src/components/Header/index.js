import React from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
  return (
    <>
      <div className="card header bg-dark text-center">
        <h1 className="display-4 neon">Kristen Picard Portfolio</h1>
        <br></br>
        <p className="lead">Welcome! Stay awhile and look around.</p>
      </div>
    </>
  );
}

export default Header;
