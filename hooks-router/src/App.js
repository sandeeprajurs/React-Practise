import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Components/home";
import About from "./Components/about";
import User from "./Components/user";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to={
            {
              pathname: "/about",
              state: {
                from: "root"
              }
            }
          }>About</Link></li>
          <li><Link to="/user/sandeep/raju">User</Link></li>
        </ul>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/user/:firstName/:lastName" exact component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
