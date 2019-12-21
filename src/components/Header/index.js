import React from "react";
import "./style.css";

function Header(props){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h1>Crystal Clicker Game 2</h1>
            </nav>
            <div className="container">
                <h3>Score</h3>
                <h5 onChange={() => props.updatesWins()}>Wins: {props.wins}</h5>
                <h5 onChange={() => props.updatesLosses()}>Losses: {props.losses}</h5>
            </div>
        </div>
    );
}

export default Header;