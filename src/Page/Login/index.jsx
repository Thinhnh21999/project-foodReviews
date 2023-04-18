import BgHome from "../../Svg/bg-home.svg";
import Logo from "../../Svg/logo.svg"
import User from "../../Svg/user.svg"
import PassWord from "../../Svg/pass.svg"
import Btn from "../../Component/Btn/index.jsx"
import {handleClickLogin} from "../../Component/Btn/index.jsx"
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

export default function Login() {
	const [formValues, setFormValues] = useState({
		useName: "",
		password: "",
	})
	const [formErrors, setFormErrors] = useState({
		useNameError: "",
		passwordError: "",
	})

	const handleChangeInput = (value, key) => {
		setFormValues({
			...formValues,
			[key]: value,
		})
	}

	const handleClickLogin = (e) => {
		e.preventDefault()
		let isValid = true;
		let errors = {
			...formErrors
		}
		if (!formValues.useName) {
			errors.useNameError = "Bạn chưa đăng nhập tài khoản";
			isValid = false;
		} else {
			errors.useNameError = "";
		}
		if (!formValues.password) {
			errors.passwordError = "Bạn chưa đăng nhập password";
			isValid = false;
		} else {
			errors.passwordError = "";
		}

		setFormErrors(errors);
	}


	return (
		<div className="relative">
      <img src={BgHome} className="w-full" />
      <form className="bg-white rounded-2xl p-20 absolute text-center top-0 left-0 m-16 ">
				<img src={Logo} alt=".../" className="mb-36 inline-block"/>
				<div className="text-center mb-[135px]">
					<div className="mb-8">
						<h2 className="font-semibold text-lg mb-1">Login form</h2>
						<p className="text-base font-normal text-p max-w-md">Lorem Ipsum has been the industry's standard dummy text ever since.</p>
					</div>
					<div>
						<div className="mb-5">
							<p className="text-left text-p text-xs mb-1">Username</p>
							<div className="input">
								<img className="mr-2.5" src={ User } alt=".../" />
								<input onChange={(e)=> handleChangeInput(e.target.value, "useName")} value={formValues.useName} className="w-full" type="text" placeholder="Enter username" />
							</div>
							<p className="text-[red]">{formErrors.useNameError}</p>
						</div>
						<div className="mb-5">
							<p className="text-left text-p text-xs mb-1">PassWord</p>
							<div className="input">
								<img className="mr-2.5" src={ PassWord } alt=".../" />
								<input onChange={(e)=> handleChangeInput(e.target.value, "password")} value={formValues.password} className="w-full" type="text" placeholder="Enter password" />
							</div>
							<p className="text-[red]">{ formErrors.passwordError }</p>
						</div>
					</div>
					<p className="text-xs text-left text-primary font-bold mb-8">Forgot password?</p>
					<Btn handleClickLogin={handleClickLogin} content="Running order"></Btn>
				</div>
			<p className="text-p">End user agreement</p>
    </form>
    </div>
		
	)
}