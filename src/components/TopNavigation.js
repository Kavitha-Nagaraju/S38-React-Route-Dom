import React from 'react'
import { Link } from 'react-router-dom'


function TopNavigation() {
  return (
    <div className='App'>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/SignUp">SignUp</Link>
            <Link to="/ApplicationForm">ApplicationForm</Link>
            <Link to="/Page">PageNotFound</Link>

        </nav>
        <div>
            <img src="https://th.bing.com/th?id=OIP.rXNA5W3YI4P04n3s2dzp1AHaEr&w=314&h=198&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2" width="500px" height="500px"></img>
            <video src="./video/video (2).mp4" controls width="400px"height="400px"></video>
            <audio src="./video/music.mp3" controls autoPlay muted></audio>
        </div>
        
    </div>
  )
}

export default TopNavigation
