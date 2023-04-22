import offers from "./Svg/offers.svg"
import beveragets from "./Svg/beveragets.svg"
import breakfast from "./Svg/breakfast.svg"
import lasagma from "./Svg/lasagma.svg"
import misc from "./Svg/misc.svg"
import pasta from "./Svg/pasta.svg"

export default function Navigation() {
	return (
		<div className="p-6 flex flex-col items-center border-r solid border-gray w-[125px] h-screen">
			<div>
				<div className="navigation-item">
				<img className="mb-2" src={offers} alt="...." />
				<p className="text-p text-xs">Coffee</p>
			</div>
			<div className="navigation-item">
				<img className="mb-2" src={beveragets} alt="...." />
				<p className="text-p text-xs">Beverages</p>
			</div>
			<div className="navigation-item bg-gradient-to" style={{backgroundImage: 'linear-gradient(218.57deg, #FFAB18 -6.67%, #FF2197 137.69%)'}}>
				<img className="mb-2" src={breakfast} alt="...." />
				<p className="text-white text-xs">Food</p>
			</div>
			<div className="navigation-item">
				<img className="mb-2" src={lasagma} alt="...." />
				<p className="text-p text-xs">Appetizer</p>
			</div>
			<div className="navigation-item">
				<img className="mb-2" src={misc} alt="...." />
				<p className="text-p text-xs">Bread</p>
			</div>
			<div className="navigation-item">
				<img className="mb-2" src={pasta} alt="...." />
				<p className="text-p text-xs">Snack</p>
			</div>
			</div>
		</div>
	)
}