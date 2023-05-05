import Coffee from "./coffee.jsx";
import Food from "./food.jsx";
import Beverages from "./beverages.jsx";
import Appetizer from "./appetizer.jsx";
import Bread from "./bread.jsx";
import Snack from "./snack.jsx";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min.js";

export default function Dashboard(props) {
  return (
    <div className="grow">
      <Switch>
        <Route path="/home/coffee" component={Coffee} />
        <Route path="/home/beverages" component={Beverages} />
        <Route path="/home/food" component={Food} />
        <Route path="/home/appetizer" component={Appetizer} />
        <Route path="/home/bread" component={Bread} />
        <Route path="/home/snack" component={Snack} />
        <Redirect to="/home/food" component={Food} />
      </Switch>
    </div>
  );
}
