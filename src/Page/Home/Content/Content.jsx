import Navigation from "./Navigation/index.jsx";
import Dashboard from "./Dashboard/index.jsx";
import SideBar from "./SideBar/index.jsx";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min.js";

export default function Body() {
  return (
    <div className="flex flex-row relative w-full h-screen">
      <Router>
        <Navigation />
        <Dashboard />
        <SideBar />
      </Router>
    </div>
  );
}
