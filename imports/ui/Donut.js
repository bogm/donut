import React, {Component} from 'react';
import Footer from './Footer'

class Donut extends Component {
 
  state={
    selected: null
  }
//Created a state to keep track of the selected Donut
  render(){
  
  const {donuts, deleteDonut, onChange} = this.props; //we use destructuring to get the props 
  
  const donutsList = donuts.map((donut) => { //we map through each item in the donuts array 
    //If we use arrow functions, we don't have to bind this because arrow functions bind this to the value of the component instance
    let editDonut = (id) => { //we match the selected donut id to the state.
    this.setState({
      selected: id
    })
  }
    let onKeyDown = (e) => {
      if(e.key === 'Enter') { //when the user enters enter we set the state to null
        this.setState({
          selected: null, 
        })
      donut.name = e.target.value //we set the name property to the value that we entered
        console.log(donut.name)
      }
    }
    return donut.status === 'false'? ( //if we check the 'no' radio button, we don't render the edit and delete images
    <div key={donut.id} className="donut">
    <div className="name">
    <img src={donut.image} />
    <div id="donut-name">
      <h3 id="donut-title">{donut.name}</h3>
      <p>{donut.date}</p>
    </div>
      </div>  
      <div className="price">
        <p>{donut.price}</p>
       </div>
     </div>
  )    : 
  <div key={donut.id} className="donut">
    <div className="name">
    <img src={donut.image} />
    <div id="donut-name">
      {this.state.selected === donut.id? //if the selected property is eqaul to the donut id, we display an input field
      <input id="name" type="text" defaultValue={donut.name} onChange={onChange} onKeyDown={onKeyDown}/> :
      <h3 id="donut-title">{donut.name}</h3> }
      <p>{donut.date}</p>
    </div>
      </div>  
      <div className="price">
        <p>{donut.price}</p> 
        <img src="img/edit.png" id={donut.id} onClick={()=>{editDonut(donut.id)}} />
        <img src="img/delete.png" id={donut.id} onClick={() => {deleteDonut(donut.id)}} />
       </div>
      </div>
})
    return (
      <div className="footer-donut">
  
        {donutsList}
       
        <div>
        <Footer />
        </div>
      </div>
    )
  }
}


export default Donut



