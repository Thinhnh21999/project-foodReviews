import offers from "./Svg/offers.svg";
import beveragets from "./Svg/beveragets.svg";
import breakfast from "./Svg/breakfast.svg";
import lasagma from "./Svg/lasagma.svg";
import misc from "./Svg/misc.svg";
import pasta from "./Svg/pasta.svg";
import {
  NavLink,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

export default function Navigation() {
  const location = useLocation();

  return (
    <div className="relative p-6 flex flex-col items-center border-r solid border-gray w-[125px]">
      <div className="fixed">
        <NavLink
          to="/home/coffee"
          className={`navigation-item text-p ${
            location.pathname === "/home/coffee" ? "active-navigation" : ""
          }`}
        >
          <img className="mb-2" src={offers} alt="...." />
          <p className="text-xs">coffee</p>
        </NavLink>
        <NavLink
          to="/home/beverages"
          className={`navigation-item text-p ${
            location.pathname === "/home/beverages" ? "active-navigation" : ""
          }`}
        >
          <img className="mb-2" src={beveragets} alt="...." />
          <p className="text-xs">beverages</p>
        </NavLink>
        <NavLink
          to="/home/food"
          className={`navigation-item text-p ${
            location.pathname === "/home/food" ? "active-navigation" : ""
          }`}
        >
          <img className="mb-2" src={breakfast} alt="...." />
          <p className="text-xs">food</p>
        </NavLink>
        <NavLink
          to="/home/appetizer"
          className={`navigation-item text-p ${
            location.pathname === "/home/appetizer" ? "active-navigation" : ""
          }`}
        >
          <img className="mb-2" src={lasagma} alt="...." />
          <p className="text-xs">appetizer</p>
        </NavLink>
        <NavLink
          to="/home/bread"
          className={`navigation-item text-p ${
            location.pathname === "/home/bread" ? "active-navigation" : ""
          }`}
        >
          <img className="mb-2" src={misc} alt="...." />
          <p className="text-xs">bread</p>
        </NavLink>
        <NavLink
          to="/home/snack"
          className={`navigation-item text-p ${
            location.pathname === "/home/snack" ? "active-navigation" : ""
          }`}
        >
          <img className="mb-2" src={pasta} alt="...." />
          <p className="text-xs">snack</p>
        </NavLink>
      </div>
    </div>
  );
}
