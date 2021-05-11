import './App.css';
import React, { Component } from 'react';

class App extends Component {

  constructor(){
    super();
    this.inputRef = React.createRef();
    this.firstNameRef = React.createRef();
    this.submitRef = React.createRef();
    this.lastNameRef = React.createRef();
    this.ageRef = React.createRef();
  }

  componentDidMount(){
    //onload focus on first input field
    this.inputRef.current.focus();
  }

  _handleKeyPress = (event) => {
    
    if(event.key === 'Enter'){
      if(event.target.name === 'input-field')
          this.firstNameRef.current.focus();
      else if(event.target.name === 'first-name')
          this.lastNameRef.current.focus();
      else if(event.target.name === 'last-name')
          this.ageRef.current.focus();
      else if(event.target.name === 'age')
          this.submitRef.current.focus();
      else
          this.inputRef.current.focus();
    }
  }

  render() {
    return (
      <div className="App">
        <input type="text"  onKeyDown={this._handleKeyPress} name="input-field" ref={this.inputRef} /><br/>
        <input type="text" onKeyDown={this._handleKeyPress} name="first-name" ref={this.firstNameRef} />
        <input type="text" onKeyDown={this._handleKeyPress} name="last-name" ref={this.lastNameRef} />
        <input type="text" onKeyDown={this._handleKeyPress} name="age" ref={this.ageRef} />
        <button name="submit" ref={this.submitRef} >Submit</button>
      </div>
    )
  }
}

export default App;
