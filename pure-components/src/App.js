import './App.css';
import { Component } from 'react';
import ChildOne from './childOne';
import ChildTwo from './childTwo';

class App extends Component {

  render() {
    return (
      <div>
        <h1> Foot ball Score</h1>
        <div>without pureComponent</div>
        <ChildOne />
        <div>with pureComponent</div>
        <ChildTwo/>
      </div>
    )
  }
}

export default App;
