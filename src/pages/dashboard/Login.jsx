import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { User } from "../../context/UserAuthContext";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const { loginUser } = User();

	const navigate = useNavigate();
	const location = useLocation();

	let from = location?.state?.from?.pathname || "/dashboard";

	const handleLogin = async e => {
		e.preventDefault();
		setError("");
		await loginUser(email, password)
			.then(value => navigate(from, { replace: true }))
			.catch(err => setError(err.message));

		setEmail("");
		setPassword("");
	};

	return (
		<div className='h-screen flex items-center justify-center'>
			<main className='Container w-full mx-auto p-4 bg-white flex flex-col items-center justify-center text-gray-700'>
				<div className='w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4'>
					<h1 className='text-4xl font-semibold font-poppins '>
						Welcome back.
					</h1>
				</div>
				<form
					onSubmit={handleLogin}
					className='w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6'
				>
					<input
						value={email}
						onChange={e => setEmail(e.target.value)}
						className='mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500 font-poppins'
						type='text'
						placeholder='Email'
						required
					/>
					<input
						value={password}
						onChange={e => setPassword(e.target.value)}
						className='mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500 font-poppins'
						type='password'
						required
						placeholder='Password'
					/>

					{error && (
						<p className='text-red-500 font-poppins text-sm font-medium mb-2'>
							{error}
						</p>
					)}

					<div className='flex items-center justify-center'>
						<button
							className='w-full bg-primary text-white p-2 rounded font-semibold hover:bg-gray-900 font-poppins'
							type='submit'
						>
							Log In
						</button>
					</div>
				</form>

				{/* <div className="flex justify-center w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12">
          <p className="font-semibold text-gray-600 text-sm font-poppins">
            Every dish is a masterpiece, every customer a standing ovation.
            Infuse passion into every flavor, and your restaurant becomes a
            canvas of culinary art.
          </p>
        </div> */}
			</main>
		</div>
	);
};

export default Login;
