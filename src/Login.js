import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
function Login() {
    return (
        <div className="login">
            <Link to="/">
           <img src="https://www.aquaupgrade.com/wp-content/uploads/2020/08/AmazonPrimeVideo-genetic.jpg" className="login_info"/>
          </Link>
         <div className="login_container">
             <h1>
                 Sign-in
             </h1>
             <form>
                 <h5>E-mail</h5>
                 <input type="text" />
                 <h5>Password</h5>
                 <input type="password"/>
                 <button className="login_signInButton">Sign-in</button>
             </form >
             <p>
                 By signing-in you agree the terms and condition of amazon
                 of use & sale .Please see our privacy Notice ,our cookies Notice and Interest-Based Ads Notice.
             </p>
             <button className="login_registerButton">Create your Amazon Account</button>
         </div>
        </div>
    )
}

export default Login
