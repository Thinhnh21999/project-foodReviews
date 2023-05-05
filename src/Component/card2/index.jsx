import Food from "./Svg/food.svg"

export default function Card2() {
	return (
		<div className="flex w-full py-4 border-b border-grey">
			<img className="mr-3" src={Food} alt="..." />
			<div className="flex flex-col w-full">
				<h3 className="text-base mb-2 font-semibold">Ayam kentang</h3>
				<div className="flex">
					<div className="flex flex-col w-1/2">
						<p className="text-p">Price</p>
						<span className="text-primary font-semibold text-base">$ 15.40</span>
					</div>
					<div className="flex items-center">
						<img src={Minus} alt="minus" />
						<span className="font-semibold text-sm mx-3">0</span>
						<img src={Plus} alt="plus" />
					</div>
				</div>
			</div>
		</div>
	)
}