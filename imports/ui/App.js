import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, BrowserRouter } from 'react-router-dom';
import './style.css'

import Navbar from './Navbar'
import Login from './Login'
import Main from './Main'



class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <div> 
        {/* Used React router to set up the routes */}
      <Navbar />
       <Route exact path='/' component={Main} />
       <Route path='/login' component={Login} />
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App