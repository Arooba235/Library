import React from "react";
import { Link } from "react-router-dom";
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link, useLocation } from 'react-router-dom';

function ManageBooks() {
    // const location = useLocation();
    return (
        <div>
            <h1>
            Hello and welcome to the Book managing page.
            </h1>
            <Link to="/" className="nav-link">Logout</Link>
            {/* <Link to="/game">Start Game</Link> */}
        </div>
    )
}

export default ManageBooks;
