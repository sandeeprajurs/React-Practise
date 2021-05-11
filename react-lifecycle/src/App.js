import './App.css';
import { Component } from 'react';
import Child from './child';


class App extends Component {

  // state={
  //   name: "sudeep"
  // }

  constructor() {
    super();
    this.state = {
      name: "sandeep",
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <h1>React Life Cycle Methods</h1>
        <div>{this.state.name}</div>
        <button onClick={() => this.setState({ counter: this.state.counter+1 })}>Click Me</button>
        <div>{this.state.counter}</div>
        <Child count={this.state.counter}/>
      </div>
    )
  }
}

export default App;
