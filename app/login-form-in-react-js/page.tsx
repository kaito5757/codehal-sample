import { LoginForm } from "@/components/loginFormInReactJs/LoginForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Login Form in REACT.JS | Codehal",
	description: "Login form in React.js",
};

export default function Page() {
	return <LoginForm />;
}
