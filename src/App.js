import logo from "./logo.svg";
import "./App.css";
import Home from "./Page/Home/Home.jsx";
import Login from "./Page/Login/index.jsx";
import {
  NavLink,
  Route,
  Switch,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div>
      <Switch>
        <Route exact path="/login">
          <Login isAuth={isAuth} setIsAuth={setIsAuth} />
        </Route>
        <Route exact path="/home" component={Home} />
      </Switch>
      <ul>
        {isAuth ? (
          <li>
            <Redirect to="/home">Home</Redirect>
          </li>
        ) : (
          <li>
            <Redirect to="/login">Login</Redirect>
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;
