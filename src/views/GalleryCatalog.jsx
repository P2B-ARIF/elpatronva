import React from "react";
import { FaGlassCheers } from "react-icons/fa";
import { GiCakeSlice } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import foodImage from "./../assets/comida/Tacos.jpg";
import dessertsImage from "./../assets/desserts/Churros-el-patron-Artboard.jpg";
import drinksImage from "./../assets/drinks/Michelada.jpg";
import scratchImage from "./../assets/scratch.png";

const GalleryCatalog = () => {
	return (
		<div className='my-20 relative'>
			<img
				src={scratchImage}
				alt=''
				className='relative rotate-180 top-14 w-full h-[150px]'
			/>
			<div className='bg-secondary h-[900px] md:h-[500px]'></div>
			<img
				src={scratchImage}
				alt=''
				className='relative bottom-14 w-full h-[150px]'
			/>
			{/* h-[1000px] md:h-[500px] */}
			<div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[1000px] md:h-[600px] w-full gap-5 md:gap-10 absolute top-[50%] md:top-[40%] left-[50%] -translate-x-[50%] -translate-y-[50%] px-5'>
				<div className='h-[300px] md:h-full w-full relative'>
					<img
						src={foodImage}
						alt=''
						className='h-full w-full object-cover rounded-xl'
					/>
					<div className='overlayLight rounded-xl'>
						<div className='flex flex-col gap-3 mb-5 md:mb-16 items-center'>
							{/* size={120} */}
							<IoFastFoodOutline
								color='#f8e4c4'
								className='w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40'
							/>
							<h1 className='text-4xl md:text-5xl font-semibold font-oswald'>
								Food
							</h1>
						</div>
					</div>
				</div>
				<div className='h-[300px] md:h-full w-full relative'>
					<img
						src={dessertsImage}
						alt=''
						className='h-full w-full object-cover rounded-xl'
					/>
					<div className='overlayLight rounded-xl'>
						<div className='flex flex-col gap-3 mb-5 md:mb-16 items-center'>
							<GiCakeSlice
								className='w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40'
								color='#f8e4c4'
							/>
							<h1 className='text-4xl md:text-5xl font-semibold font-oswald'>
								Desserts
							</h1>
						</div>
					</div>
				</div>
				<div className='h-[300px] md:h-full w-full relative'>
					<img
						src={drinksImage}
						alt=''
						className='h-full w-full object-cover rounded-xl'
					/>
					<div className='overlayLight rounded-xl'>
						<div className='flex flex-col gap-3 mb-5 md:mb-16 items-center'>
							<FaGlassCheers
								className='w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40'
								color='#f8e4c4'
							/>
							<h1 className='text-4xl md:text-5xl font-semibold font-oswald'>
								Drinks
							</h1>
						</div>
					</div>
				</div>
				{/* <div className='h-full w-full relative'>
					<img
						src={image}
						alt=''
						className='h-full w-full object-cover rounded-xl'
					/>
					<div className='overlayLight rounded-xl'>
						<div className='flex flex-col gap-3 mb-16 items-center'>
							<MdOutlineBreakfastDining size={120} color='#f8e4c4' />
							<h1 className='text-5xl font-semibold font-oswald'>BREAKFAST</h1>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default GalleryCatalog;
