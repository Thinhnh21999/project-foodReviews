

export default function Btn(props) {
	const { content, handleClickLogin, ...rest } = props;
	return (
		<button onClick={(e)=> handleClickLogin(e)} {...rest} className="p-3 bg-primary text-white rounded-[58px] w-full">{ content }</button>
	)
}