import React, {Component} from 'react'
import Donut from './Donut'
// This component handles the donut state and methods for manipulating the state: delete, add etc
class List extends Component{
  constructor(props){
    super(props)
    this.state = {
      donuts:[
        {id: 1, name: 'Testy Donut', price: 10, status: 'true', image: 'img/donut1.png', date: new Date().toLocaleString()}
      ]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addDonut = this.addDonut.bind(this);
    this.changeImg = this.changeImg.bind(this);
    this.deleteDonut = this.deleteDonut.bind(this);

    // We have to bind this so methods can refere to the object properties
  }
 
  changeImg(e) {
    this.setState({
      image: e.target.src
    })
    console.log(this.state.image)
  }
  handleChange(e) {
    this.setState({
     
     [e.target.id]: e.target.value //We know that the target id will equal one of the properties from the state so we use that to capture the value
 
    })
  }

   addDonut(donut) {
     console.log(donut)
    donut.date = new Date().toLocaleString() //we assign a new date 
    donut.id =  Math.random() //we assign a random id to each item
    let donuts = [...this.state.donuts, donut] //we use deconstructuring to create a new array and add the new donut to it
    this.setState({
      donuts: donuts //we make the state equal to the new array
    })
  }

  deleteDonut(id){
    console.log(id)
    let donuts = this.state.donuts.filter(donut =>{
      return donut.id !== id //since filter returns an array of items that meet the condition, we can use that to filter out any donuts with the id equal to the element we clicked on 
    })
    this.setState({
      donuts: donuts //we assign the new array as a state
    })
  }

 
  handleSubmit(e){
    e.preventDefault(); //prevents default form behaviour
    console.log(this.state.name)
    if(this.state.name === undefined){
      alert('Please enter a name')
    } else if (this.state.price === undefined){
      alert('Please enter a price')
    } else if(this.state.image === undefined){
      alert('Please select an image')
    } //these are some form validations. I'm not sure how good they are... 
    else {
      this.addDonut(this.state)
    }
  
    }
  
  render(){
    return(
       <div id="form" className="section2">
        <div className="form-container">
          <div className="tag-line">
          <h3>Add a donut</h3>
          <p>Don't take too long</p>
          </div>
        <form onSubmit={this.handleSubmit}>
        <div className="donut-shapes">
          <p>Select a donut</p>
            <img src="img/donut1.png" className="donutimg" alt="donut1" id="image" onClick={this.changeImg}/>
            <img src="img/donut2.png" className="donutimg" alt="donut2" id="image" onClick={this.changeImg}/>
            <img src="img/donut3.png" className="donutimg" alt="donut3" id="image" onClick={this.changeImg}/>
          </div>
        <p>Can you eat this?</p>
          <div className="radio">
          
          <div><input type="radio" id="status" name="radio" value={true} onChange={this.handleChange} /> Yes</div>
          <div><input type="radio" id="status" name="radio" value={false} onChange={this.handleChange} /> No</div>
          </div>
          <input type="text" placeholder="Name" id="name" onChange={this.handleChange} />
          <input type="number" placeholder="Price" id="price" onChange={this.handleChange} />
          <input type="submit" value="Add a donut" /> 
        </form>
    
          </div>
        
        <Donut donuts ={this.state.donuts} deleteDonut={this.deleteDonut}  onChange={this.onChange}/>
        {/* //we pass the state and methods as props/ */}
        </div>
    )

  }
}

export default List;