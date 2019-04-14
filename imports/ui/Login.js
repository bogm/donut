import React, {Component} from 'react'
import AccountsUIWrapper from './AccountsUIWrapper.js';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
 
import {Donuts} from '../ui/api/users.js';
//I haven't acomplished much here... basically, the register form adds a new user to the db. I've tried to create some validation, but wasn't successfull

class Login extends Component {
  state={
    user:[
      {id: 1, name:'', password:'', email: '', password2: ''}
    ],

  }
 
  render(){

    let donutState = this.props.donuts
    const name = this.state.name;
    const email = this.state.email;
    const password = this.state.password;
    const password2 = this.state.password2;
    console.log(donutState)

    let handleSubmit = (e) => {
      e.preventDefault(); 
      addUser(this.state)
      //We insert the state into the db
      Donuts.insert({
        name,
        email,
        password,
        password2
      })
      }


    let handleChange = (e) => { 
      this.setState({
        [e.target.id]: [e.target.value]
      })
    
  }

    let addUser = (user) => {
      let users = [...this.state.user, user]
      this.setState({
        user: users
      })
    
  }
    const donuts = donutState.map((donut) => {
      return <div key={donut.id}>
        <li>User name created with name: {donut.username} email: {donut.email} and password: {donut.password}</li>
      </div>
    }) //we return an user from the database

    return(
      <div>
     <div className="form-page">
       <form className="login-form">
         <input type="email" placeholder="Email" name='email' />
         <input type="text" placeholder="Password" name='pass' />
         <button id="forgot-password" type="submit">Forgot your password</button>
         <button id="login"  type="submit">Sign in</button>
       </form>
       <form className="register-form" onSubmit={handleSubmit}>
         <input type="text" onChange={handleChange} placeholder="Name" id="name"/>
         <input type="email" onChange={handleChange} placeholder="Email" id="email"/>
         <input type="password" onChange={handleChange} placeholder="Password" id="password" />
         <input type="password" onChange={handleChange} placeholder="Password" id="password2" />
         <button id="register" type="submit" onClick={addUser}>Sign up</button>
       </form>
      
     </div>
     <ul>{donuts}</ul> 
     </div>
    )
  }
}

export default withTracker(() =>{
  return{
    donuts: Donuts.find({}).fetch(), //We fetch donuts from db 
    currentUser: Meteor.user()
  };
})(Login);
