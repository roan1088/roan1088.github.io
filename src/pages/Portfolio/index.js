import React, { useEffect } from "react";
import MainHeading from "../../components/MainHeading";
import Project from "../../components/Project";
import googleBooksSearch from "../../images/google-books-search.png";
import employeeDirectory from "../../images/employee-directory.png";
import eatDaBurger from "../../images/eat-da-burger.png";
import hotParkr from "../../images/hotparkr.png";
import quizzinc from "../../images/quizzinc.png";
import hangman from "../../images/hangman.png";

function Portfolio() {
  const projects = [{
    name: "HotParkr",
    image: hotParkr,
    homepage: "https://project-three-skirk.herokuapp.com/",
    url: "https://github.com/idallas93/HotParkr-Application",
    description: "HotParkr is an app that allows users to find dog parks near them, find information about their local dog parks, blog about those parks, and connect with other users who frequent the local dog parks!",
    stack: "Node.js, Express, Mongoose, MongoDB, Passport, JS Web Token, React, Bootstrap"
  }, {
    name: "Quizzinc",
    image: quizzinc,
    homepage: "https://stormy-shelf-50629.herokuapp.com/",
    url: "https://github.com/kylegold/Project-Two",
    description: "An application when you can create and take created quizzes.",
    stack: "Node.js, Express, Sequelize, MySQL, Passport, API, Handlebars"
  }, {
    name: "Google Books Search",
    image: googleBooksSearch,
    homepage: "https://google-books-1088.herokuapp.com/",
    url: "https://github.com/roan1088/google-books-search/",
    description: "An app that searches books using Google Books API, and saves books to a database.",
    stack: "Node.js, Express, Mongoose, MongoDB, API, React"
  },{
    name: "Employee Directory",
    image: employeeDirectory,
    homepage: "https://roan1088.github.io/employee-directory/",
    url: "https://github.com/roan1088/employee-directory",
    description: "A employee directory to view non-sensitive data about other employees.",
    stack: "React, Bootstrap, API, HTML, CSS"
  }, {
    name: "Eat Da Burger",
    image: eatDaBurger,
    homepage: "https://eat-da-burger-1088.herokuapp.com/",
    url: "https://github.com/roan1088/eat-da-burger",
    description: "An app that lets users input the names of burgers they'd like to devour.",
    stack: "Node.js, Express, Handlebars, MySQL"
  }, {
    name: "Hangman",
    image: hangman,
    homepage: "https://roan1088.github.io/hangman/",
    url: "https://github.com/roan1088/hangman",
    description: "A game of Hangman made using JS/JQuery.",
    stack: "JS/jQuery, HTML, CSS, Ajax, API"
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