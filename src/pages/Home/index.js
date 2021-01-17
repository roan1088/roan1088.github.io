import React, { useEffect } from "react";
import MainHeading from "../../components/MainHeading";

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
    </>
  );
}

export default Home;