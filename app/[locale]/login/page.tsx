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

	<form className="login-parent flex item-center justify-center">
		<article className="login flex item-center justify-center flex-col">
			<h1>Welcome to IKSIR</h1>
			<section >
				<TextField label="Email or Username" variant="standard" />
					<EmailIcon />
			</section>
			<section> 
				<TextField label="password" variant="standard" type='password' />
				<RemoveRedEyeIcon />
			</section>
			<AuthButton title="Login" width="420px" height="42px" onClick={handleLogin}/>
			<p>Forgot your password?</p>
			<section>
				<span>Don’t have an account, </span>
				<Link href="/register">Register now?</Link>
			</section>
			<DividerText text="or"/>
			<AuthShape authImage={Google}  text="google"/>
			<AuthShape authImage={Facebook}  text="facebook"/>

		</article>
	</form>
)
}	


