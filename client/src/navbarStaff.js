
import './navbar.css';
import {Link} from 'react-router-dom';

const NavbarStaff = (prop)=>{
    return(
        <nav className='navbar2'>
            <div className='logo1'><Link to='/managebooks'>Library</Link></div> 
            <ul className='items'>
                <li className='comp'><Link to="/managebooks">Manage Book Collection</Link></li>
                <li className='comp'><Link to='/bookRequest'>Book Acquisition Requests</Link></li>
                <li className='comp'><Link to='/feedbackStaff'>Analyze Feedback</Link></li>
                <li className='comp'><Link to='/checkout'>View Checkout Details</Link></li>
                <li className='comp'><Link to='/'>Logout</Link></li> 
                
            </ul>                     
        </nav>        
    )
}

export default NavbarStaff