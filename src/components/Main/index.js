import React from "react";
import "./style.css";

function Main(props) {
  return (
    <main className="container pt-4 pb-4">
      <div className="row">
        <div className="col-sm-9 p-4" id="mainArea">
          {props.children}
        </div>
      </div>
    </main>
  );
}

export default Main;