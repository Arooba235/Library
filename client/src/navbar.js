
import './navbar.css';
import {Link} from 'react-router-dom';

const Navbar = (prop)=>{
    return(
        <nav className='navbar2'>
            <div className='logo1'><Link to='/studenthome'>Library</Link></div> 
            <ul className='items'>
                <li className='comp'><Link to='/studenthome'>View Available Books</Link></li>
                <li className='comp'><Link to='/borrowed'>Borrowed Books</Link></li>
                <li className='comp'><Link to='/feedback'>Feedback</Link></li>
                <li className='comp'><Link to='/fine'>View Fine</Link></li>
                <li className='comp'><Link to='/'>Logout</Link></li> 
                
            </ul>                     
        </nav>        
    )
}

export default Navbar