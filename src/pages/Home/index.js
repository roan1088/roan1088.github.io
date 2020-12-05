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
          <p>Hello World! My name is Rohan Chitrakar. I live in NYC, New York but I am originally from Lalitpur, Nepal. I came to the US in 2012 as a student. Right now I am taking this Coding bootcamp with Columbia University to get into computer science field and kickstart my career.</p>
          <p>My favorite hobby is playing video games. My dream job is to become a game developer. I hope that from this bootcamp I am able to start my career in development which would a step towards my dream job.</p>
        </div>
      </div>
    </>
  );
}

export default Home;