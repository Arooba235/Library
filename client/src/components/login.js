import '../styles/login.css'
import { Link } from 'react-router-dom'


const Login = (prop)=>{

    return (        
        <div className="login-page">
            <div className="login-header"> Library Management <span class="lib-name">System</span></div>
            <div className='partition'></div>
            <form className='form' >
                <div >
                    <input className="user-inp" type='username' placeholder='username'  />
                </div>
               <div>
                    <input className="pass-inp" type='password' placeholder='password'  />
               </div>
               <div>
                <button className="sub-button">Login</button>
               </div>
                
            </form>
            <div className="question">Don't have an account?</div>
            <Link to="/signup">
                <button>Signup</button>
            </Link>
        </div>
    )

}

export default Login

