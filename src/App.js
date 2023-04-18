import logo from "./logo.svg";
import "./App.css";
import Home from "./Page/Home/index.jsx";
import Login from "./Page/Login/index.jsx";
import Contact from "./Page/Contact";
import About from "./Page/About";
import {
  NavLink,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
