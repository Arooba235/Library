
import './navbar.css';
import {Link} from 'react-router-dom';

const Navbar = (prop)=>{
    return(
        <nav className='navbar2'>
            <div className='logo1'><Link to='/studenthome'>Library</Link></div> 
            <ul className='items'>
                <li className='comp'><Link to='/borrowed'>Borrowed Books</Link></li>
                <li className='comp'><Link to='/feedback'>Feedback</Link></li>
                <li className='comp'><Link to='/login'>Logout</Link></li> 
                
            </ul>                     
        </nav>        
    )
}

export default Navbar