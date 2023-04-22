import Arrow from "./Svg/arrow.svg"
import Btn from "../../../../Component/Btn/index.jsx"
import Food from "./Svg/food.svg"
import Food2 from "./Svg/food2.svg"
import Food3 from "./Svg/food3.svg"
import Minus from "./Svg/minus.svg"
import Plus from "./Svg/plus.svg"

export default function SideBar() {
	return (
		<div className="flex flex-col w-[360px] h-screen border-l solid border-grey">
			<div className="px-6">
				<div className="p-1 mt-4 h-11 w-full flex  rounded-[58px] bg-[#F8F9FD] text-3.5">
				<div className="bg-white w-1/2 flex-center cursor-pointer rounded-[58px]"><p className="py-2 px-4">Buy</p></div>
				<div className="text-p w-1/2 flex-center cursor-pointer"><p className="py-2 px-4">Reservation</p></div>
				</div>
				<form action="" className="py-6">
					<h2 className="mb-4 text-title">Customer Information</h2>
					<div className="mb-3 input">
						<input className="w-full" type="text" placeholder="Customer Name" />
					</div>
					<div className="flex mb-3 input">
						<input className="w-full" type="text" placeholder="Select table" />
						<img src={Arrow} alt="" />
					</div>
					<Btn content="Add note" style={{backgroundColor: "#FFF5EE", color: "#FF5C00"}}/>
				</form>
			</div>
			<hr className="w-full" />
			
			<div className="p-6 flex flex-col">
				<h2 className="text-title">Orders details</h2>
				<div className="flex w-full py-4 border-b border-grey">
					<img className="mr-3" src={Food} alt="..." />
					<div className="flex flex-col w-full">
						<h3 className="text-base mb-2 font-semibold">Steak sapi bakar</h3>
						<div className="flex">
							<div className="flex flex-col w-1/2">
								<p className="text-p">Price</p>
								<span className="text-primary font-semibold text-base">$ 25.12</span>
							</div>
							<div className="flex items-center">
								<img src={Minus} alt="minus" />
								<span className="font-semibold text-sm mx-3">1</span>
								<img src={Plus} alt="plus" />
							</div>
						</div>
					</div>
				</div>
				
				<div className="flex w-full py-4 border-b border-grey">
					<img className="mr-3" src={Food2} alt="..." />
					<div className="flex flex-col w-full">
						<h3 className="text-base mb-2 font-semibold">Ayam kentang</h3>
						<div className="flex">
							<div className="flex flex-col w-1/2">
								<p className="text-p">Price</p>
								<span className="text-primary font-semibold text-base">$ 15.40</span>
							</div>
							<div className="flex items-center">
								<img src={Minus} alt="minus" />
								<span className="font-semibold text-sm mx-3">1</span>
								<img src={Plus} alt="plus" />
							</div>
						</div>
					</div>
				</div>
				<div className="flex w-full py-4 border-b border-grey">
					<img className="mr-3" src={Food3} alt="..." />
					<div className="flex flex-col w-full">
						<h3 className="text-base mb-2 font-semibold">Mie kuah pedas</h3>
						<div className="flex">
							<div className="flex flex-col w-1/2">
								<p className="text-p">Price</p>
								<span className="text-primary font-semibold text-base">$ 11.21</span>
							</div>
							<div className="flex items-center">
								<img src={Minus} alt="minus" />
								<span className="font-semibold text-sm mx-3">1</span>
								<img src={Plus} alt="plus" />
							</div>
						</div>
					</div>
				</div>

			</div>

			<hr />

			<div className="p-6">
				<div className="text-base flex flex-col">
					<div className="flex justify-between mb-3">
						<p className="text-p">Sub Total</p>
						<span className="font-semibold">$ 62.13</span>
					</div>

					<div className="flex justify-between mb-3 pb-4 border-b border-dashed">
						<p className="text-p">Tax (10%)</p>
						<span className="font-semibold">$ 1.87</span>
					</div>

					<div className="flex justify-between mb-8">
						<p className="text-p">Total</p>
						<span className="font-semibold text-primary">$ 64.00</span>
					</div>
				</div>
				<Btn content="Pay Now"/>
			</div>
		</div>
	)
}