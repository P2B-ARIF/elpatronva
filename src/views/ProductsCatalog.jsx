import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

const ProductsCatalog = ({ categories, reverse }) => {
	return (
		<section className='mb-10'>
			<Swiper
				slidesPerView={1.3}
				spaceBetween={15}
				// pagination={{
				// 	clickable: true,
				// }}
				breakpoints={{
					640: {
						slidesPerView: 1.7,
						spaceBetween: 10,
					},
					768: {
						slidesPerView: 2.2,
						spaceBetween: 20,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 25,
					},
					1280: {
						slidesPerView: 4,
						spaceBetween: 25,
					},
				}}
				autoplay={{
					delay: 1500,
					// disableOnInteraction: false,
					reverseDirection: reverse,
				}}
				modules={[Autoplay]}
				className='mySwiper'
				loop={true}
			>
				{categories?.map((item, index) => (
					<SwiperSlide key={index}>
						<div className='rounded-lg overflow-hidden shadow-xl border-[1px]'>
							<div className='h-[230px] min-w-[300px] w-full'>
								<img
									src={item.imgUrl}
									alt=''
									className='w-full h-full object-cover'
								/>
							</div>
							<div className='text-left p-2'>
								<h3 className='font-semibold text-gray-800 text-base'>
									{item.name}
								</h3>
								<h5 className='text-sm font-semibold text-gray-600'>
									{item.category}
								</h5>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default ProductsCatalog;
