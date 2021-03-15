import React, { useState } from 'react'
import { Link,useHistory } from 'react-router-dom'
import { db,auth } from './firebase';
import "./Login.css"
function Login() {
    const history=useHistory();

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const signIn=e=>{
           e.preventDefault();
           //implementing firebase
           auth.signInWithEmailAndPassword(email,password).then
           (auth=>{
               history.push("/");
           }).catch(error=>(error.message))

    }
    const register=e=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
           if(auth)
           {
               history.push('/');
           }
        }).catch(error=>alert(error.message));
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
             <button onClick={register}className="login_registerButton">Create your Amazon Account</button>
         </div>
        </div>
    )
}

export default Login
