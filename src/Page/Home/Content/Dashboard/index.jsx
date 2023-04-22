import Search from "./Svg/search.svg"
import Card from "../../../../Component/Card/index.jsx"
import Food from "./Svg/food.svg"
import Food2 from "./Svg/food2.svg"
import Food3 from "./Svg/food3.svg"


export default function Dashboard() {
	const products = [
		{
			id: 1,
			img: Food,
			title: "Ayam kentang",
			price: "$ 25.12"
		},
		{
			id: 2,
			img: Food2,
			title: "Kuah santan",
			price: "$ 25.12"
		},
		{
			id: 3,
			img: Food3,
			title: "Ikan santan",
			price: "$ 25.12"
		},
		{
			id: 4,
			img: Food2,
			title: "Kuah santan",
			price: "$ 25.12"
		},
		{
			id: 5,
			img: Food,
			title: "Ayam kentang",
			price: "$ 25.12"
		},
		{
			id: 6,
			img: Food3,
			title: "Ikan santan",
			price: "$ 25.12"
		},
		{
			id: 7,
			img: Food,
			title: "Ayam kentang",
			price: "$ 25.12"
		},
		{
			id: 8,
			img: Food2,
			title: "Kuah santan",
			price: "$ 25.12"
		},
		{
			id: 9,
			img: Food3,
			title: "Ikan santan",
			price: "$ 25.12"
		},
		{
			id: 10,
			img: Food2,
			title: "Kuah santan",
			price: "$ 25.12"
		},
		{
			id: 11,
			img: Food,
			title: "Ayam kentang",
			price: "$ 25.12"
		},
		{
			id: 12,
			img: Food3,
			title: "Ikan santan",
			price: "$ 25.12"
		},
		{
			id: 13,
			img: Food,
			title: "Ayam kentang",
			price: "$ 25.12"
		},
		{
			id: 14,
			img: Food2,
			title: "Kuah santan",
			price: "$ 25.12"
		},
		{
			id: 15,
			img: Food3,
			title: "Ikan santan",
			price: "$ 25.12"
		},
		{
			id: 16,
			img: Food2,
			title: "Kuah santan",
			price: "$ 25.12"
		},
		
	]
	return (
		<div className="flex flex-col grow ">
			<div className="w-full">
				<div className="py-2 px-4 flex items-start"><p className="text-primary">Dashboard / </p> Food</div>
				<div className="flex w-full border-grey border-y">
					<div className="py-[22px] items-center px-6 w-6/12 flex  border-grey border-r">
						<img className="mr-2.5 w-6 h-6" src={Search} alt="..." />
						<input className="w-full" type="text" placeholder="Search Menu..." />
					</div>
					<div className="w-6/12 py-4 px-6 flex justify-between whitespace-nowrap">
						<div className="px-4 py-2 text-[14px] rounded-[40px] text-primary bg-[#FFF5EE] border-[#FF5C00] border flex-center"><span>All</span></div>
						<div className="dashboard-menu"><span>Chicken</span></div>
						<div className="dashboard-menu"><span>Seafood</span></div>
						<div className="dashboard-menu"><span>Pasta</span></div>
						<div className="dashboard-menu"><span>Rice bowl</span></div>
					</div>
				</div>
			</div>
			<div className="container bg-[#f8f9fd] p-4 ">
				<div className="justify-between grid gap-4 grid-cols-4 grid-rows-4">
				{products.map((item) => <Card key={item.id} item={ item } />)}
				</div>
			</div>
		</div>
	)
}