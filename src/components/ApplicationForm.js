import React from 'react'
import { Link } from 'react-router-dom'

function ApplicationForm() {
  return (
    <div className='ApplicationForm'>
        <div>
            <Link to="/">Home</Link>
        </div>
        <div>
            <Link to="/SignUp">SignUp</Link>
        </div>
        <div>
            <Link to="*">PageNotFound</Link>
        </div>
        <div>
          <h1>ApplicationForm</h1> 
        </div>
        <form>
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
                <label>Password</label>
                <input type="password"></input>
            </div>
            <div>
                <label>MobileNumber</label>
                <input type="number"></input>
            </div>
            <div>
                <label>State</label>
                <input list="state"></input>
                <datalist id="state">
                <option>AndhraPradhesh</option>
                <option>Telangana</option>
                <option>Maharastra</option>
                <option>Tamilnadu</option>
                </datalist>
            </div>
            <div>
                <label>Education</label>
                <select >
                    <optgroup label="B.Tech"></optgroup>
                    <option>CSE</option>
                    <option>CSE-Ds</option>
                    <option>CSE-AIML</option>
                    <option>EEE</option>
                    <option>ECE</option>
                    <option>Mech</option>
                    <option>Civil</option>
                    <optgroup label="MSC"></optgroup>
                    <option>Project management</option>
                    <option>Arts</option>
                    <option>MSC ComputerScience</option>
                    <optgroup label="M.Tech"></optgroup>
                    <option>CSE</option>
                    <option>ECE</option>
                </select>
                
            </div>
            <div>
                <label>Resume</label>
                <input type="file"></input>
            </div>
            <div>
                <label>Gender</label>
                <input type="radio" name="gender" className='input'></input>
                <label className="hobi">Female</label>
                <input type="radio" name="gender" className='input'></input>
                <label>Male</label>
            </div>
            <div>
                <label>MaritalStatus</label>
               <input type="radio" name="ms" className='input'></input>
               <label className="hobi">Married</label>
               <input type="radio" name="ms" className='input'></input>
               <label >UnMarried</label>
            </div>
            <div>
                <label>Date Of Birth</label>
                <input type="datetime-local"></input>
            </div>
            <div>
                <label>Hobbies</label>
                <input type="checkbox" multiple className='input'></input>
                <label className="hobi">Listening Music</label>
                <input type="checkbox" multiple className='input'></input>
                <label className="hobi" >Reading Books</label>
                <input type="checkbox" multiple className='input'></input>
                <label className="hobi">Playing Games</label>
            </div>
            <div>
                <Link to="/TopNavigation">
                <button type="button">Submit</button>
                </Link>
            </div>
            
        </form>
      
    </div>
  )
}

export default ApplicationForm
