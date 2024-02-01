import React from "react";
import pere from "../assets/pere-enerve.png";

function Notfound() {
  return (
    <div className="notfound">
      <div>
        <h1>404</h1>
        <h2>Not Found</h2>
      </div>
      <div className="image-notfound">
        <img src={pere} alt="père enervé" />
      </div>
    </div>
  );
}

export default Notfound;
