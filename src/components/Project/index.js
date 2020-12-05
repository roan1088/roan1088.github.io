import React from "react";
import "./style.css";

function Project({ name, image, homepage, url, description }) {
  return (
    <div className="col-lg-6 mb-3">
      <a href={homepage} target="_blank" rel="noreferrer">
        <img src={image} alt={name} className="portfolio-image" />
      </a>
      <h4>{name}</h4>
      <a href={url} target="_blank" rel="noreferrer">Link to github repo</a>
      <p>{description}</p>
    </div>
  );
}

export default Project;