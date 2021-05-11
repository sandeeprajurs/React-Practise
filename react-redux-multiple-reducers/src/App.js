import { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div>
        <h1>A score {this.props.a}</h1>
        <button onClick={()=> this.props.updateA(this.props.b)}>A</button>
        <h1>B score {this.props.b}</h1>
        <button onClick={()=> this.props.updateB(this.props.a)}>B</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    a: state.rA.a,
    b: state.rB.b
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    updateA: (b_val) => dispatch({type: "UPDATE_A", b: b_val}),
    updateB: (a_val) => dispatch({type: "UPDATE_B", a: a_val})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
