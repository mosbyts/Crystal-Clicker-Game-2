import React from "react";
import "./style.css";

const Header = props => (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h1>Crystal Clicker Game 2</h1>
            </nav>
            <div className="container">
                <h5>Score: {props.score}</h5>
                <h5>Losses: {props.losses}</h5>
            </div>
        </div>
);

export default Header;