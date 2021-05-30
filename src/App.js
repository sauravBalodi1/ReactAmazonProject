import React, { useEffect } from 'react'
import './App.css';
import Header from "../src/Header";
import Home from "./Home"
import Checkout from "./Checkout"

import {BrowserRouter as Router ,Switch,Route} from "react-router-dom"; 
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe(
  "pk_test_51IViWHAt2Q8V7HNTAaCbi2qdiI1zPtodI7D7FYqycwPdIcELIWx5WSHjLw6zD4GlJAjKQT0EitGC4MJgkLx98UFT00b6TIZgT5"
);
function App() {

const [{},dispatch]=useStateValue();

  useEffect(() => {
   auth.onAuthStateChanged(authUser=>{
     console.log(`the user is : `,authUser);
   
     if(authUser)
   {// if user has logged in
       dispatch({
         type:'SET_USER',
         user:authUser,
       })
   }
   else
   {//the user has not logged in
    dispatch({
      type:'SET_USER',
      user:null,
    })
   }
   })
    
  }, [])



  return (
    <Router>
    <div className="app">
     <Switch>
     <Route path="/login">
      <Login />
       
       </Route>
       <Route path="/payment">
         <Header/>
         <Elements stripe={promise}>
         <Payment/>
         </Elements>
       </Route>
       <Route path="/checkout">
       <Header />
         <Checkout/>
       </Route>
       <Route path="/">
          {/* Header */}
      <Header />
      {/* home */}
      <Home/>
       </Route>

     </Switch>
     
    </div>
    </Router>
    
  )
  
}

export default App;
