import React, { useEffect } from "react";
import MainHeading from "../../components/MainHeading";
import Skill from "../../components/Skill";

function Home() {
  useEffect(() => {
    document.title = "Rohan Chitrakar";
  }, []);

  return (
    <>
      <MainHeading>About Me</MainHeading>
      <div className="row">
        <div className="col">
          <img className="float-left mr-4" src="https://avatars0.githubusercontent.com/u/71278881?v=4" alt="Rohan" width="150px" height="150px" />
          <p>Full stack web developer recognized for the ability to write clean and efficient code for mobile responsive web development. Complex problem solver with a certificate in full stack web development from Columbia University. Proven leader with effective team collaboration skills excited to leverage knowledge to  drive engaging user experiences.</p>
        </div>
      </div>
      <br />
      <h4>Skills</h4>
      <div className="row">
        <Skill code="html5" name="HTML5" />
        <Skill code="css3-alt" name="CSS3" />
        <Skill code="js-square" name="JavaScript" />
      </div>
      <div className="row">
        <Skill code="node" name="Node.js" />
        <Skill code="react" name="React" />
        <Skill code="bootstrap" name="Bootstrap" />
      </div>
      <br />
      <h5>Tools & Libraries</h5>
      <p>jQuery, Ajax, API, SQL, Express, MySQL, MongoDB, Handlebars</p>
      <h5>Previously learnt languages</h5>
      <p>C++, PHP, Visual Basic, ActionScript, PowerBuilder</p>
    </>
  );
}

export default Home;