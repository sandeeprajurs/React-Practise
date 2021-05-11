import { Component } from 'react';
import {connect} from 'react-redux';

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
        <ul>
          {
            this.props.history.map( data => {
              return <li onClick={() => this.props.deleteItem(data.id)} key={data.id}>{data.age}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
    history: state.history
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ageUp: () => dispatch({ type: "AGEUP" }),
    ageDown: () => dispatch({ type: "AGEDOWN" }),
    deleteItem: (id) => dispatch({type: "DEL_ITEM", key: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
