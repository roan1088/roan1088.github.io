import React from "react";

function MainHeading({ children }) {
  return (
    <div className="row">
      <div className="col">
        <h1>{children}</h1>
        <hr />
      </div>
    </div>
  );
}

export default MainHeading;