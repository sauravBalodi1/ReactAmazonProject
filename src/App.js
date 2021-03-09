import React from 'react'
import './App.css';
import Header from "../src/Header";
import Home from "./Home"
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom"; 
function App() {
  return (
    <Router>
    <div>
     <Switch>
       
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
