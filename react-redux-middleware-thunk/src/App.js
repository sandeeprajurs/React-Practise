import { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreator from './store/actions/action';

class App extends Component {

  // state = {
  //   age: 21
  // }

  // ageUp = () => {
  //   this.setState(prevState => ({ age: prevState.age + 1 }));
  // }

  // ageDown = () => {
  //   this.setState(prevState => ({ age: prevState.age - 1 }));
  // }

  render() {
    return (
      <div className="App">
        <h1>{this.props.age}</h1>
        <button onClick={this.props.ageUp}>Age Up</button>
        <button onClick={this.props.ageDown}>Age Down</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ageUp: () => dispatch(actionCreator.ageUp()),
    ageDown: () => dispatch(actionCreator.ageDown()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
