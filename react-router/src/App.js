import { Component } from 'react';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './App.css';

const UserName = (props) => {
  return (<h1>Welcome {props.username}</h1>)
}

// const DunmmyComp = () => {
//   return (<h1>Welcome Sandeep</h1>)
// }


class App extends Component {

  state = {
    login: false
  }

  loginHandler = () => {
    this.setState(prevState => ({
      login: !prevState.login
    }))
  }

  render() {
    return (
      <Router>
        <ul>
          <li><Link to="/" >Welcome Page</Link></li>
          <li><Link to="/about" >About Page</Link></li>
          <li><Link to="/user/sandeep" >User Sandeep Page</Link></li>
        </ul>
        <Route path="/" exact strict render={() => { return (<h1>Welcome</h1>) }} />
        <Route path="/about" exact strict render={() => { return (<h1>Welcome To About Page</h1>) }} />
        {/* <Route path="/user/sandeep" exact component={DunmmyComp}/> */}
        <Route path="/user/:username" exact render={({ match }) => {
          if(this.state.login)
            return <UserName username={match.params.username} />
          return <Redirect to='/' />
        }} />
        <button onClick={this.loginHandler} >{this.state.login ? "Logout" : "Login"}</button>
      </Router>
    );
  }

}

export default App;
