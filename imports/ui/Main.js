import React, { Component } from 'react';
import List from './List'
import { Link, animateScroll as scroll } from "react-scroll";
// used react scroll for smooth scrolling
 
class Main extends Component{
  render(){
    return(
  <div className="container">
    <div className="section1">
        <div className="text-card">
          <h1>Best Donut in The city</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quos fuga iusto! Dolore impedit ipsam nisi velit at eos officia?</p>
          <div className="arrow">
          <Link to="form" smooth={true}><img src="img/arrow.png" alt="down arrow"/></Link>
        </div>
      </div>
    </div>
  
       
      <div className="col3">
        <div className="column">
          <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, placeat!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem exercitationem voluptate reprehenderit possimus libero fuga veniam soluta perspiciatis, eos sit.</p>
        </div>
        <div className="column">
        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, placeat!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem exercitationem voluptate reprehenderit possimus libero fuga veniam soluta perspiciatis, eos sit.</p>
        </div>
        <div className="column">
        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, placeat!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem exercitationem voluptate reprehenderit possimus libero fuga veniam soluta perspiciatis, eos sit.</p>
        </div>
      </div>
      <List />
 
      </div>
  
    )
  }
}

export default Main;