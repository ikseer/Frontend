import type { Metadata } from "next";
import LoginMain from "./login";
export const metadata: Metadata = {
	title: "Login",
	description: "Login in to Ikseer",
};

export default function Login() {
	return <LoginMain />;
}
