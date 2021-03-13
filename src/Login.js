import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const signIn=e=>{
           e.preventDefault();
           //implementing firebase

    }
    const register=e=>{
        e.preventDefault()
    }
    
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
                 <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
                 <h5>Password</h5>
                 <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                 <button type="submit" className="login_signInButton" onClick={signIn}>Sign-in</button>
             </form >
          
             <p>
                 By signing-in you agree the terms and condition of amazon
                 of use & sale .Please see our privacy Notice ,our cookies Notice and Interest-Based Ads Notice.
             </p>
             <button onclick={register}className="login_registerButton">Create your Amazon Account</button>
         </div>
        </div>
    )
}

export default Login
