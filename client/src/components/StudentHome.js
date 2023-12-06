import React from "react";
import { Link } from "react-router-dom";
function StudentHome() {
    return (
        <div>
            <h1>
            Hello and welcome to the student home page.
            </h1>
            <Link to="/" className="nav-link">Logout</Link>
            {/* <Link to="/game">Start Game</Link> */}
        </div>
    )
}

export default StudentHome;
