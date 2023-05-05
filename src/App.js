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
import { useSelector, useDispatch } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.Auth.isAuth); // lấy state ở reducer Auth (Auth định nghĩa tại reducer)

  return (
    <div>
      <Switch>
        <Route exact path="/login">
          <Login />
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
