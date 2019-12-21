import React from "react";
import "./style.css";

const Card = props => {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} key={props.id} onClick = {() => props.game(props.id)} className="remove"></img>
        </div>
        <div className="crystalName">
              <p><strong>{props.name}</strong></p>
        </div>
      </div>
    );
  }

export default Card;