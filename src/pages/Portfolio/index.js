import React from "react";
import MainHeading from "../../components/MainHeading";
import Project from "../../components/Project";
import progressiveBudget from "../../images/progressive-budget.png";
import employeeDirectory from "../../images/employee-directory.png";
import eatDaBurger from "../../images/eat-da-burger.png";
import weatherDashboard from "../../images/weather-dashboard.png";
import quizzinc from "../../images/quizzinc.png";
import hangman from "../../images/hangman.png";

function Portfolio() {
  const projects = [{
    name: "Progressive Budget",
    image: progressiveBudget,
    homepage: "https://progressive-budget-1088.herokuapp.com/",
    url: "https://github.com/roan1088/progressive-budget",
    description: "A fast and easy app to track withdrawals and deposits with or without a data/internet connection"
  }, {
    name: "Employee Directory",
    image: employeeDirectory,
    homepage: "https://roan1088.github.io/employee-directory/",
    url: "https://github.com/roan1088/employee-directory",
    description: "A employee directory to view non-sensitive data about other employees"
  }, {
    name: "Eat Da Burger",
    image: eatDaBurger,
    homepage: "https://eat-da-burger-1088.herokuapp.com/",
    url: "https://github.com/roan1088/eat-da-burger",
    description: "An app that lets users input the names of burgers they'd like to devour"
  }, {
    name: "Weather Dashboard",
    image: weatherDashboard,
    homepage: "https://roan1088.github.io/weather-dashboard/",
    url: "https://github.com/roan1088/weather-dashboard",
    description: "An application where a user can check for the current weather and the weather forecast for the next five days using the OpenWeatherMap API"
  }, {
    name: "Quizzinc",
    image: quizzinc,
    homepage: "https://stormy-shelf-50629.herokuapp.com/",
    url: "https://github.com/kylegold/Project-Two",
    description: "An application when you can create and take created quizzes"
  }, {
    name: "Hangman",
    image: hangman,
    homepage: "https://roan1088.github.io/hangman/",
    url: "https://github.com/roan1088/hangman",
    description: "A game of Hangman made using JS/JQuery"
  }];

  useEffect(() => {
    document.title = "Rohan's Portfolio";
  }, []);

  return (
    <>
      <MainHeading>Portfolio</MainHeading>
      <div className="row">
        {projects.map((project, i) => <Project {...project} key={i} />)}
      </div>
    </>
  );
}

export default Portfolio;