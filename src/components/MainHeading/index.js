import React from "react";

function MainHeading({ children }) {
  return (
    <div class="row">
      <div class="col">
        <h1>{children}</h1>
        <hr />
      </div>
    </div>
  );
}

export default MainHeading;