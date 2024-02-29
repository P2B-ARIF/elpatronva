import React from "react";
import scratchImage from "./../assets/scratch.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Reviews.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const Reviews = () => {
	return (
		<div className=''>
			<div className='h-[150px] min-w-[1000px] w-full relative top-16 lg:top-14 xl:top-5'>
				<img
					src={scratchImage}
					alt=''
					className='w-full relative rotate-180 z-50'
				/>
			</div>

			<div className='bg_review flex items-center justify-center'>
				<div className='container mx-auto w-screen overflow-hidden text-center relative z-50 text-white'>
					<h5 className='text-lg font-semibold uppercase text-gray-200'>
						CUSTOMER TESTIMONIAL
					</h5>
					<h1 className='text-3xl md:text-5xl font-bold mb-10 mt-5 text-white'>
						WHAT CUSTOMERS SAY?
					</h1>
					<Swiper
						autoplay={{
							delay: 2500,
							// disableOnInteraction: false,
						}}
						loop={true}
						navigation={true}
						modules={[Navigation, Autoplay]}
						// className='mySwiper'
					>
						<SwiperSlide>
							<div className='flex flex-col gap-5'>
								<h4 className='text-lg font-bold'>Dori G</h4>
								<p className='text-base text-lightYellow mx-5 md:mx-auto w-5/6 md:w-2/3'>
									Delicious slow cooked chicken tortilla soup and carnitas.
									Awesome with kids. Delicious Margaritas.
								</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='flex flex-col gap-5'>
								<h4 className='text-lg font-bold'>Christine Provard</h4>
								<p className='text-base text-lightYellow mx-5 md:mx-auto w-5/6 md:w-2/3'>
									We came in from Cleveland right in the middle of the winter
									storm Patrick, they were ready to close due to the weather and
									when we called they said they would serve us. We had great
									food and great service. My husband said it was one of the best
									chimichamgas he has ever gotten. Thank you so much
								</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='flex flex-col gap-5'>
								<h4 className='text-lg font-bold'>M Smith</h4>
								<p className='text-base text-lightYellow mx-5 md:mx-auto w-5/6 md:w-2/3'>
									Great food, love the fajitas! Very accommodating to special
									dietary needs. Good food and good people are a great
									combination!
								</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='flex flex-col gap-5'>
								<h4 className='text-lg font-bold'>Floyd Lucas</h4>
								<p className='text-base text-lightYellow mx-5 md:mx-auto w-5/6 md:w-2/3'>
									Always great from start to finish. Full fried fish and
									Quesadillas.Staff serves well each time.Bar area,large party
									section,patio to enjoy food outside and 2 locations.my go to
									when I want food with Latin flavor!
								</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='flex flex-col gap-5'>
								<h4 className='text-lg font-bold'>Don Fortner</h4>
								<p className='text-base text-lightYellow mx-5 md:mx-auto w-5/6 md:w-2/3'>
									Quick stop during a trip. Prompt service with hot food served
									quickly.
								</p>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>

				<div className='overlayLight'></div>
			</div>
			<div className='h-[150px] min-w-[1000px] w-full relative'>
				<img
					src={scratchImage}
					alt=''
					className='w-full relative -top-[100px] z-50'
				/>
			</div>
		</div>
	);
};

export default Reviews;
