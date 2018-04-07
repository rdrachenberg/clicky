import React from "react";
import "./Navbar.css";
import "../Title";

const Navbar = props => (
    <nav className ="navbar">
        <div className="col-md-4">
            <div className="navbar-content">
                Your Score:  
                <span>  {props.currentScore}</span>
            </div>
        </div>
        <div className="col-md-4">
            <div className="navbar-content">
                {props.message}
            </div>
        </div>
        <div className="col-md-4">
            <div className="navbar-content">
                High Score: 
                <span>  {props.highestScore}</span>
            </div>
        </div>    
    </nav>
)
export default Navbar;