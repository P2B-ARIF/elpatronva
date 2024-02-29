import React from "react";

import image1 from "./../assets/comida/Avocado-Burger.jpg";
import image2 from "./../assets/comida/Burrito-Banderita.jpg";
import image3 from "./../assets/comida/Chicken-Nachos.jpg";
import image4 from "./../assets/desserts/Berry-Tacos.jpg";
import image5 from "./../assets/desserts/Flan.jpg";
import image6 from "./../assets/drinks/Frozen-Mago-Margarita.jpg";

const HomeGallery = () => {
	return (
		<div>
			<div className='container mx-auto px-5 py-2 lg:pt-24 mb-20'>
				<div className='-m-1 flex flex-col md:flex-row md:-m-2'>
					<div className='flex md:w-1/2 flex-wrap'>
						<div className='w-1/2 p-1 md:p-2'>
							<img
								alt='gallery'
								className='block h-full w-full rounded-lg object-cover object-center'
								src={image1}
							/>
						</div>
						<div className='w-1/2 p-1 md:p-2'>
							<img
								alt='gallery'
								className='block h-full w-full rounded-lg object-cover object-center'
								src={image2}
							/>
						</div>
						<div className='w-full p-1 md:p-2'>
							<img
								alt='gallery'
								className='block h-full w-full rounded-lg object-cover object-center'
								src={image3}
							/>
						</div>
					</div>
					<div className='flex md:w-1/2 flex-wrap'>
						<div className='w-full p-1 md:p-2'>
							<img
								alt='gallery'
								className='block h-full w-full rounded-lg object-cover object-center'
								src={image4}
							/>
						</div>
						<div className='w-1/2 p-1 md:p-2'>
							<img
								alt='gallery'
								className='block h-full w-full rounded-lg object-cover object-center'
								src={image5}
							/>
						</div>
						<div className='w-1/2 p-1 md:p-2'>
							<img
								alt='gallery'
								className='block h-full w-full rounded-lg object-cover object-center'
								src={image6}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeGallery;
