import React, {Component} from 'react'
import  './App.css'


class App extends Component {
  constructor(){
    super()
    this.state = {
      fname:"",
      lname:"",
      address:"",
      number:"",
      position:"",
      duties:""

    }
    this.handleChange = this.handleChange.bind(this)
  }
  onSubmit = (e)=>{
    console.log('form', e.target)
    return false
  }
  handleChange = (e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render(){
    return(
      <div>
        <h1 className="title">Resume Builder</h1>
        <form onSubmit={this.onSubmit}>
          <h4>Personal Information</h4>
          <div className='container'>
            <h5>Names<span>*</span></h5>
            <input type="textbox" className="Fname" placeholder="First Name" value={this.state.fname} name="fname" onChange={this.handleChange}/>
            <input type="textbox" className="lname" placeholder="Last Name"  value={this.state.lname} name="lname" onChange={this.handleChange}/>
            <h5>Address<span>*</span></h5>
            <input type="textbox" className="Add1" placeholder="Address 1" value={this.state.address} name="address" onChange={this.handleChange}/>
            <input type="textbox" className="Add2" placeholder="Address 2" value={this.state.address} name="address" onChange={this.handleChange}/>
            <h5>Phone Numbers<span>*</span></h5>
            <input type="tel" className="Call1" placeholder="Mobile Number" value={this.state.number} name="number" onChange={this.handleChange}/>
            <input type="tel" className="Call2" placeholder="Home Number" value={this.state.number} name="number" onChange={this.handleChange}/>   
          </div>
          <h4>Work Experience</h4>
          <div className="container">
            <h5>Current Role<span>*</span></h5>
            <input type="textbox"  className="pheld" placeholder="Position" value={this.state.position} name="position" onChange={this.handleChange}/>
            <input type="text" className="position"  placeholder="Duties" value={this.state.duties} name="duties" onChange={this.handleChange}/>
            <h5>Previous Role<span>*</span></h5>
            <input type="textbox"  className="pheld" placeholder="Position" value={this.state.position} name="position" onChange={this.handleChange}/>
            <input type="text" className="position"  placeholder="Duties" value={this.state.duties} name="duties" onChange={this.handleChange}/>  
          </div>
          <button className="btn">SUBMIT</button>        
        </form>   
      </div>
    )
  }
  
}

export default App