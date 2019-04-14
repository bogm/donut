import React, {Component} from 'react'

class Footer extends Component{
  render(){
    return(
      <div className="footer">
      <div className="cta">
        <p>Don't forget to call for a donut or subscribe!</p>
      </div>
      <div className="subscribe">
        <p>+008 045 0477 045</p>
        <div className="footer-btn">
        <input type="email" id="sub-email" placeholder="Email"></input>
        <button id="sub-btn">Subscribe</button>
        </div>
      </div>
        <div className="footer-logo">
          Donut<sup>&trade;</sup>
        </div>
      </div>

    )
  }
}

export default Footer;