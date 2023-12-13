"use client"
import "../globals.css"
import "./login.css"
import * as React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import TextField from '@mui/material/TextField';
import AuthButton from "../../../components/Buttons/authButton"
import {Link} from "../../../navigation"
import DividerText from "../../../components/Divider/divider"
import Google from "../../../public/images/auth/Google.svg"
import Facebook from "../../../public/images/auth/Facebook.svg"
import AuthShape from "../../../components/ThridParthAuth/thridPartyAuth"
export default function Login() {
	const handleLogin= () => {
		console.log("object");
	}
return (

	<form className="login-parent flex items-center justify-center" autoComplete="off">
		<article className="login flex items-center justify-center flex-col rounded-lg">
			<h1>Welcome to IKSIR</h1>
			<div className="input-field">
				<section className="relative">
					<TextField InputLabelProps={{className:"setColor"}}
					className="w-full mt-5 " label="Email or Username" variant="standard" />
					<EmailIcon className="icon absolute right-2"/>
				</section>
				<section className="relative"> 
					<TextField  InputLabelProps={{className:"setColor"}}
					className="w-full mt-3" label="password" variant="standard" type='password' />
					<RemoveRedEyeIcon  className="icon absolute right-2"/>
				</section>
			</div>
			<AuthButton title="Login" width="76%" height="42px" onClick={handleLogin}/>

			<div className="auth-actions">
				<Link href="/register">Forgot your password?</Link>
				<section>
					<span>Don’t have an account, </span>
					<Link href="/register" >Register now?</Link>
				</section>
			</div>
			<DividerText text="or"/>
			<AuthShape authImage={Google}  text="google"/>
			<AuthShape authImage={Facebook}  text="facebook"/>

		</article>
	</form>
)
}	


