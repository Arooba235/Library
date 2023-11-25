import '../styles/homepage.css'
import { Link } from 'react-router-dom'

const Homepage = (prop)=> {
  return (
    <div className='Homepage'>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/signup">
        <button>Signup</button>
      </Link>
    </div>
  )
}

export default Homepage