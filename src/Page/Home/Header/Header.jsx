import Logo from "./Svg/logo.svg"
import Arrow from "./Svg/arrow.svg"
import HomeIcon from "./Svg/home.svg"
import Order from "./Svg/order.svg"
import History from "./Svg/history.svg"
import Bills from "./Svg/bills.svg"
import User from "./Svg/user.svg"
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min"

export default function Header() {
	return (
		<div className="bg-white py-4 px-6 flex items-center justify-between border-b solid border-[#E4E4E4]">
			<div className="flex">
				<button className="relative mr-7">
					<img  src={ Arrow } alt="" />
					<div className="absolute left-16 inset-0 border-r-2 solid border-[#E4E4E4]"></div>
				</button>
				<img className="mx-7" src={ Logo } alt="" />
				<div>
					<h4 className="font-bold">Walk-In</h4>
					<p className="text-p text-sm">Coca coffeetalk</p>
				</div>
			</div>

			<navbar className="flex items-center">
				<ul className="flex">
					<li className="mr-8">
						<NavLink className="flex text-p" to="/home">
							<img className="mr-3" src={HomeIcon} alt=",,,"></img>
							Home
						</NavLink>
					</li>
					<li className="mr-8">
						<NavLink className="flex text-p" to="/home">
							<img className="mr-3" src={Order} alt=",,,"></img>
							Order
						</NavLink>
					</li>
					<li className="mr-8">
						<NavLink className="flex text-p" to="/home">
							<img className="mr-3" src={History} alt=",,,"></img>
							History
						</NavLink>
					</li>
					<li className="mr-8">
						<NavLink className="flex text-p" to="/home">
							<img className="mr-3" src={Bills} alt=",,,"></img>
							Bills
						</NavLink>
					</li>
				</ul>

				<div className="flex">
					<div className="bg-primary/10 rounded-[58px] mr-4">
						<p className="text-primary py-2 px-5">Dinning option</p>
					</div>
					<div className="bg-[#F8F9FD] rounded-[58px] mr-4">
						<p className=" py-2 px-5">10:53:00  26/02/2023</p>
					</div>
					<img className="mr-4" src={User} alt=",,," />
				</div>
			</navbar>
		</div>
	)
}