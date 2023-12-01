import React from "react";
import { Link } from "react-router-dom";

function StaffHome() {
    return (
        <div>
          <button> <Link to="/managebooks">  Manage Book Collection! </Link> </button>
          <button> <Link to="/bookRequest"> Book Acquisition Requests </Link> </button>
          <button> <Link to='/feedbackStaff'>Analyze Feedback</Link> </button>
          <button> <Link to='/checkout'>View Checkout Details</Link> </button>
          <button> <Link to='/'>Logout</Link> </button>
        </div>
    )
}

export default StaffHome;
