import React from "react";
import { Link } from "react-router-dom";
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link, useLocation } from 'react-router-dom';

function StaffHome() {
    // const location = useLocation();
    return (
        <div>
          <button> <Link to="/managebooks">  Manage Book Collection! </Link> </button>
        </div>
    )
}

export default StaffHome;
