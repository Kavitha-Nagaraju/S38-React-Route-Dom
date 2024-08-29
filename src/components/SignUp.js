import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='signUp'>
        <form>
            <h1>SignUp</h1>
            <div>
                <label>FirstName</label>
                <input></input>
            </div>
            <div>
                <label>LastName</label>
                <input></input>
            </div>
            <div>
                <label>Email</label>
                <input></input>
            </div>
            <div>
                <label>Create Password</label>
                <input></input>
            </div>
            <div>
                <label>Re-enter Password</label>
                <input></input>
            </div>
            <div>
                <button type="button">SignUp</button>
            </div>
            <div>
                <p> If you Have Account Please Login</p>
            </div>
            <div>
                <Link to="/">Login</Link>
            </div>
        </form>
      
    </div>
  )
}

export default SignUp
