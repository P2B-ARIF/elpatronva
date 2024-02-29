import React from "react";
import Header from "./../../components/controller/Header";
import HighestQuality from "./../../components/controller/HighestQuality";
import Service from "./../../components/controller/Service";

const Controller = () => {
	return (
		<section className='mb-10'>
			<h1 className='font-poppins text-xl font-semibold text-gray-800'>
				Controller UI Style
			</h1>

			<div className='mt-5 p-5 border rounded-lg shadow-md'>
				<h1 className='text-xl font-semibold text-gray-800 font-poppins mb-1'>
					Header Hero Section
				</h1>
				<div className='flex flex-col gap-5'>
					<Header />
				</div>
			</div>

			<div className='mt-5 p-5 border rounded-lg shadow-md'>
				<h1 className='text-xl font-semibold text-gray-800 font-poppins mb-1'>
					#Service Section 2
				</h1>
				<Service />
			</div>

			<div className='mt-5 p-5 border rounded-lg shadow-md'>
				<h1 className='text-xl font-semibold text-gray-800 font-poppins mb-1'>
					#Highest Quality Section 3
				</h1>

				<div className='flex gap-5'>
					<HighestQuality />
					<HighestQuality />
					<HighestQuality />
					<HighestQuality />
					<HighestQuality />
				</div>
			</div>
		</section>
	);
};

export default Controller;
