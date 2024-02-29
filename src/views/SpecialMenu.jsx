import React from "react";
import { BiSolidCoffeeBean } from "react-icons/bi";
import image from "./../assets/slide1.jpg";

const SpecialMenu = ({ categories }) => {
	console.log(categories);

	return (
		<div className='container mx-auto overflow-hidden my-20'>
			<div className='flex flex-col items-center text-center gap-5'>
				<h6 className='flex items-center gap-3 text-secondary font-semibold'>
					<BiSolidCoffeeBean />
					<span className='tracking-wider'>SPECIAL MENU</span>
					<BiSolidCoffeeBean />
				</h6>
				<h2 className='font-oswald text-4xl md:text-5xl font-bold'>
					DEFINITE EL PATRON FOOD YOU MUST TRY
				</h2>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 items-center mt-20 mx-5 md:mx-0'>
				{categories?.map(item => (
					<div key={item.name} className='flex items-center gap-5 w-full'>
						<img
							src={item.imgUrl}
							alt=''
							className='h-[80px] w-[80px] rounded-full object-cover'
						/>
						<div className='w-full'>
							<div className='flex items-center justify-between mb-1 md:mb-2'>
								<h5 className='text-lg md:text-xl lg:text-2xl font-bold font-poppins'>
									{item.name}
								</h5>
								<span className='text-2xl font-bold text-soilColor'>
									{item.price}
								</span>
							</div>
							<p className='text-sm'>{item.description}</p>
						</div>
					</div>
				))}

				{/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i =>
					i === 5 || i === 8 ? (
						<div
							key={i}
							className='rounded-xl border border-black overflow-hidden'
						>
							<h4 className='bg-black text-white text-xs p-2 px-5 mb-2 tracking-widest font-semibold'>
								NEW / TRENDING
							</h4>
							<div className='flex items-center gap-5 w-full p-3'>
								<img
									src={image}
									alt=''
									className='h-[80px] w-[80px] rounded-full object-cover'
								/>
								<div className='w-full'>
									<div className='flex items-center justify-between mb-3'>
										<h5 className='text-2xl font-bold font-oswald'>
											Cafe Americano
										</h5>
										<span className='text-2xl font-bold text-soilColor'>
											$2.95
										</span>
									</div>
									<p>Espresso shot with steamed milk.</p>
								</div>
							</div>
						</div>
					) : (
						<div key={i} className='flex items-center gap-5 w-full'>
							<img
								src={image}
								alt=''
								className='h-[80px] w-[80px] rounded-full object-cover'
							/>
							<div className='w-full'>
								<div className='flex items-center justify-between mb-3'>
									<h5 className='text-2xl font-bold font-oswald'>
										Cafe Americano
									</h5>
									<span className='text-2xl font-bold text-soilColor'>
										$2.95
									</span>
								</div>
								<p>Espresso shot with steamed milk.</p>
							</div>
						</div>
					),
				)} */}
			</div>
		</div>
	);
};

export default SpecialMenu;
