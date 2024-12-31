import { FaLock, FaUser } from "react-icons/fa";

export const LoginForm = () => {
	return (
		<div
			className="flex justify-center items-center min-h-screen bg-[url('/loginFormInReactJs/background.jpg')]
                    bg-no-repeat bg-cover bg-center"
		>
			<div
				className="w-[420px] bg-transparent text-white rounded-xl py-8 px-10 border-2 border-solid border-[rgba(255,255,255,0.2)]
                      backdrop-blur-[30px] shadow-[0_0_10px_rgba(0,0,0,0.2)]"
			>
				<form action="">
					<h1 className="text-4xl text-center font-[1000]">Login</h1>
					<div className="relative w-full h-14 my-8">
						<input
							className="w-full h-full bg-transparent outline-none border-2 border-solid border-[rgba(255,255,255,0.2)] rounded-[40px]
                       placeholder:text-white text-base py-5 pr-11 pl-5"
							type="text"
							placeholder="Username"
							autoComplete="new-password"
							required
						/>
						<FaUser className="absolute right-5 top-1/2 translate-y-[-50%] text-base" />
					</div>

					<div className="relative w-full h-14 my-8">
						<input
							className="w-full h-full bg-transparent outline-none border-2 border-solid border-[rgba(255,255,255,0.2)] rounded-[40px]
                       placeholder:text-white text-base py-5 pr-11 pl-5"
							type="password"
							placeholder="Password"
							autoComplete="new-password"
							required
						/>
						<FaLock className="absolute right-5 top-1/2 translate-y-[-50%] text-base" />
					</div>

					<div className="flex justify-between text-[14.5px] mt-[-15px] mb-[15px]">
						<label>
							<input type="checkbox" className="accent-white mr-1" />
							Remember me
						</label>
						<a href="/" className="text-white no-underline hover:underline">
							Forgot password?
						</a>
					</div>

					<button
						type="submit"
						className="w-full h-11 bg-white border-none outline-none rounded-[40px] shadow-[0_0_10px_rgba(0,0,0,0.3)]
                       cursor-pointer text-base text-black font-bold"
					>
						Login
					</button>

					<div className="font-[14.5px] text-center mt-5 mb-4">
						<p>
							Don't have an account?
							<a
								href="/"
								className="text-white no-underline font-semibold hover:underline pl-1"
							>
								Register
							</a>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};
