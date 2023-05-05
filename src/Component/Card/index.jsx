import food from "./Svg/food.svg"

export default function Card(props) {
	const {img, title, price} = props.item
	return (
		<form className="bg-white rounded-[16px]">
			<div className="py-3 px-2">
				<img className="w-full" src={food} alt="" />
				<div className="text-base mt-3 flex flex-col items-center">
					<p className="font-semibold">{title}</p>
					<span className="text-primary font-semibold mb-1">$ {price}</span>
				</div>
			</div>
		</form>
	)
}