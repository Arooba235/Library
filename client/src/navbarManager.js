
import './navbar.css';
import {Link} from 'react-router-dom';

const NavbarManager = (prop)=>{
    return(
        <nav className='navbar2'>
            <div className='logo1'><Link to='/managebooksManager'>Library</Link></div> 
            <ul className='items'>
                <li className='comp'><Link to="/managebooksManager">Manage Book Collection</Link></li>
                <li className='comp'><Link to='/bookRequestManager'>Book Acquisition Requests</Link></li>
                <li className='comp'><Link to='/feedbackManager'>Feedback List</Link></li>
                <li className='comp'><Link to='/manageStaffInfo'>Manage Staff</Link></li>
                <li className='comp'><Link to='/budgetmanagement'>Budget Management</Link></li>
                <li className='comp'><Link to='/checkoutManager'>View Checkout Details</Link></li>
                <li className='comp'><Link to='/'>Logout</Link></li> 
                
            </ul>                     
        </nav>        
    )
}

export default NavbarManager