import React from "react";
import "./style.css";

function Card(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} onClick={() => props.removeCrystal(props.id)} className="remove"></img>
        </div>
        <div className="crystalName">
              <p><strong>{props.name}</strong></p>
        </div>
      </div>
    );
  }

export default Card;