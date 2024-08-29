import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='logIn'>
       <form>
            <h1>Login</h1>

            <div>
                <label>Email</label>
                <input></input>
            </div>
            <div>
                <label>Password</label>
                <input></input>
            </div>
            <div>
                <Link to="/ApplicationForm">
                <button type="button">Login</button>
                </Link>
            </div> 
            <div>
                <p>If You dont SignUp before Please Signup now</p>

            </div>
            <div>
             <Link to="/SignUp">SignUp</Link>
            
             
            </div>
        </form>
    </div>
  )
}

export default Login
