
import Navigation from "./Navigation/index.jsx"
import Dashboard from "./Dashboard/index.jsx"
import SideBar from "./SideBar/index.jsx"


export default function Body() {
	return (
		<div className="flex flex-row relative w-full h-screen">
			<Navigation />
			<Dashboard/>
			<SideBar/>
		</div>
	)
}