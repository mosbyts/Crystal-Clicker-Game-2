import React from "react";

function Container(props) {
  return (
    <div className="card-group">
      <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />
    </div>
  );
}

export default Container;