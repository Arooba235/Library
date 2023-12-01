import React from "react";
import { Link } from "react-router-dom";

function ManagerHome() {
    return (
        <div>
          <button> <Link to="/managebooksManager">  Manage Book Collection! </Link> </button>
          <button> <Link to="/bookRequestManager"> Book Acquisition Requests </Link> </button>
          <button> <Link to="/feedbackmanager"> Feedbacks List </Link> </button>
          <button> <Link to="/updatestaffinfo"> Manage Staff </Link> </button>
          {/*<button> <Link to='/feedbackStaff'>Analyze Feedback</Link> </button>*/}
          <button> <Link to='/checkoutManager'>View Checkout Details</Link> </button>
          <button> <Link to='/'>Logout</Link> </button>
        </div>
    )
}

export default ManagerHome;
