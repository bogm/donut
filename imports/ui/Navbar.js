import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'


 
// App component - represents the whole app

class Navbar extends Component {
  render(){
    return(
      <div className="nav">
        <div className="logo"><Link to="/">Donut</Link><sup>&trade;</sup>
        </div>
        <div className="linknot">
        <div className="navigation-links">
          <Link to="/login" >Login</Link>
          </div>
        <div className="notif">
          <Link to="/"><img src="/img/alarm.png" alt="alarm" /> </Link>
          <svg className="alarm-1" width="0.208in" height="0.208in">
          <circle cx="9" cy="9" r="7.5" fill="rgb(237, 20, 91)" />
        <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="10px" font-family="Gadugi" dy=".3em">1</text>
        </svg>
      </div>
      </div>
      
      </div>
    )

  }
}

export default Navbar