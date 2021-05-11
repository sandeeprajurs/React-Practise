import './App.css';
import {Component} from 'react';
import Button from './HOCEx2/button';
import PlaneComponent from './Component/planeComponent';
import HOCButton from './HigerOrderComponent/hocButton';
import HowerComponent from './HOCEx2/howerComponent';

class App extends Component {
  
  render(){
    return(
      <div>
          <h1> Without higher order Component</h1>
          <PlaneComponent />
          <h1> With higher order Component</h1>
          <HOCButton disable />
          <div>-------------------------------------------------</div>
          <Button />
          <div>-------------------------------------------------</div>
          <HowerComponent />
      </div>
    )
  }
}

export default App;
