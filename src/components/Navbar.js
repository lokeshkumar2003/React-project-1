import React from "react";
import logo from "./images/favicon.ico";
export default function Navbar(){
    return (
        <nav>
            <img src={logo} className="nav--icon"/>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React course-project 1</h4>
        </nav>
    )
}