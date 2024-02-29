import React from "react";
import image1 from "./../assets/slide1.jpg";
import image2 from "./../assets/slide2.jpg";
import image3 from "./../assets/slide3.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import Swiper navigation styles
import "swiper/css/pagination"; // Import Swiper pagination styles
import "swiper/css/scrollbar"; // Import Swiper scrollbar styles

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Scratch from "./Scratch";
import { Link } from "react-router-dom";
import pdf from "./../assets/el-patron-menu.pdf";

const HeaderCarousel = ({ sliderImgs }) => {
	console.log(sliderImgs, "sliderImgs");
	return (
		<>
			<div className='h-screen'>
				<div className='h-[120%] overflow-hidden'>
					<Swiper
						spaceBetween={0}
						centeredSlides={true}
						autoplay={{
							delay: 3000,
							// disableOnInteraction: false,
						}}
						modules={[Autoplay]}
						className='mySwiper'
						loop={true}
					>
						{sliderImgs ? (
							sliderImgs?.map(slide => (
								<SwiperSlide key={slide} className='swiper-slide'>
									<img src={image1} alt='Slide 1' className='carousel-image' />
									<div className='overlay-text'>
										<h4 className='text-base font-shadows'>
											- Welcome to EL PATRON Restaurant -
										</h4>
										<h1 className='text-5xl md:text-7xl font-bold font-oswald w-2/3'>
											OUR PASSION IS IN OUR COFFEE
										</h1>
										<p className='w-1/2 text-sm md:text-base'>
											Harbourfront Seafood Restaurant is the perfect spot in
											Sydney to celebrate a special occasion or to simply head
											out for a bite to eat.
										</p>

										<a
											href={pdf}
											className='md:mr-10 bg-lightYellow py-2 px-10 rounded-lg text-primary font-bold border border-primary text-sm'
										>
											VIEW ALL MENU
										</a>
									</div>
								</SwiperSlide>
							))
						) : (
							<SwiperSlide className='swiper-slide'>
								<img src={image2} alt='Slide 1' className='carousel-image' />
								<div className='overlay-text'>
									<h4 className='text-base font-shadows'>
										- Welcome to EL PATRON Restaurant -
									</h4>
									<h1 className='text-5xl md:text-7xl font-bold font-oswald w-2/3'>
										OUR PASSION IS IN OUR COFFEE
									</h1>
									<p className='w-1/2 text-sm md:text-base'>
										Harbourfront Seafood Restaurant is the perfect spot in
										Sydney to celebrate a special occasion or to simply head out
										for a bite to eat.
									</p>

									<a
										href={pdf}
										className='md:mr-10 bg-lightYellow py-2 px-10 rounded-lg text-primary font-bold border border-primary text-sm'
									>
										VIEW ALL MENU
									</a>
								</div>
							</SwiperSlide>
						)}
						{/* <SwiperSlide className='swiper-slide'>
							<img src={image2} alt='Slide 1' className='carousel-image' />
							<div className='overlay-text'>
								<h4 className='text-base font-shadows'>
									- Welcome to EL PATRON Restaurant -
								</h4>
								<h1 className='text-5xl md:text-7xl font-bold font-oswald w-2/3'>
									OUR PASSION IS IN OUR COFFEE
								</h1>
								<p className='w-1/2 text-sm md:text-base'>
									Harbourfront Seafood Restaurant is the perfect spot in Sydney
									to celebrate a special occasion or to simply head out for a
									bite to eat.
								</p>

								<a
									href={pdf}
									className='md:mr-10 bg-lightYellow py-2 px-10 rounded-lg text-primary font-bold border border-primary text-sm'
								>
									VIEW ALL MENU
								</a>
							</div>
						</SwiperSlide>
						<SwiperSlide className='swiper-slide'>
							<img src={image3} alt='Slide 1' className='carousel-image' />
							<div className='overlay-text'>
								<h4 className='text-base font-shadows'>
									- Welcome to EL PATRON Restaurant -
								</h4>
								<h1 className='text-5xl md:text-7xl font-bold font-oswald w-2/3'>
									OUR PASSION IS IN OUR COFFEE
								</h1>
								<p className='w-1/2 text-sm md:text-base'>
									Harbourfront Seafood Restaurant is the perfect spot in Sydney
									to celebrate a special occasion or to simply head out for a
									bite to eat.
								</p>

								<a
									href={pdf}
									className='md:mr-10 bg-lightYellow py-2 px-10 rounded-lg text-primary font-bold border border-primary text-sm'
								>
									VIEW ALL MENU
								</a>
							</div>
						</SwiperSlide> */}
					</Swiper>

					<Scratch />
				</div>
			</div>
		</>
	);
};

export default HeaderCarousel;
