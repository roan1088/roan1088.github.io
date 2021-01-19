import React from "react";

function Skill({code, name}) {
  return (
    <div className="col-3 text-center">
      <i className={"fab fa-" + code + " fa-3x"}></i>
      <br />
      {name}
    </div>
  );
}

export default Skill;