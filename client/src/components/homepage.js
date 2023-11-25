import '../styles/login.css'
import { Link } from 'react-router-dom'

const Homepage = (prop)=> {
  return (
    <div className='Homepage'>
      <Link to="/login">
        <button className="sub-button">Login</button>
      </Link>
      <Link to="/signup">
        <button className="sub-button">Signup</button>
      </Link>
    </div>
  )
}

export default Homepage