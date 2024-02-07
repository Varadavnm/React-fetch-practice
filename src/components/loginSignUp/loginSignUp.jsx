import React from 'react'
import './loginsignup.css'
import person from '../assets/person.png'
import email from '../assets/email.jpg'
import password from '../assets/password.svg'


const loginSignUp = () => {
  return (
    <div className="container">
        <div className="header">
            <div className="text"> Sign Up</div>
            <div className="underline">_</div>
        </div>
            <div className="inputs">
            <div className="input">
                <img
                    src={person}
                    class="img-fluid rounded-top"
                    alt=""
                />
                <input type="text" placeholder='Name' />
            </div>
            <div className="input">
                <img
                    src={email}
                    class="img-fluid rounded-top"
                    alt=""
                />
                <input type="email" placeholder='Email Id' />
            </div>
            <div className="input">
                <img
                    src={password}
                    class="img-fluid rounded-top"
                    alt=""
                />
                <input type="password" placeholder='Password' />
            </div>
            </div>
            <div className="forgot-password">Forgot password? <span>click here!</span>             
            </div>
            <div className="submit-container">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>
              

        </div>
    </div>

  )
}

export default loginSignUp
