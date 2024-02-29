import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import Footer from "../views/Footer";
import OurSite from "../views/OurSite";
import scratchImage from "./../assets/scratch.png";
import scratch2 from "./../assets/scratch2.png";
import img from "./../assets/slide1.jpg";

const About = () => {
	return (
		<div className='absolute top-0 z-0 w-full'>
			<div className='h-[50vh] w-full relative'>
				<img src={img} alt='' className='w-full h-full object-cover' />
				<div className='overlay-text'></div>
			</div>
			<div className='w-full relative -top-10'>
				<img
					src={scratch2}
					alt=''
					className='w-[110%] object-cover h-[280px]'
				/>

				<div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col items-center'>
					<h1 className='text-5xl font-bold font-oswald text-primary'>
						EL PATRON FREDERICKSBURG
					</h1>
					<p className='flex items-start md:items-center py-2'>
						<FaLocationArrow className='mt-1 mr-2' />
						10040 Jefferson Davis Hwy, Fredericksburg, VA 22407
					</p>
					<p className='flex items-center'>
						<IoMdCall />
						540-898-6173
					</p>
				</div>
			</div>

			<OurSite top={50} title={"About Us"} />

			<div className='container mx-auto w-full mb-10 rounded-lg md:rounded-2xl overflow-hidden px-5'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1567.1872789744002!2d-77.506604!3d38.224415!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6c6d077f9d517%3A0x813df40f1ef48254!2sEl%20Patron!5e0!3m2!1sen!2sbd!4v1708454307047!5m2!1sen!2sbd'
					width='100%'
					height='450'
					style={{ border: 0 }}
					allowFullScreen=''
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
				></iframe>
			</div>
			<div className='h-[150px] w-full relative'>
				<img
					src={scratchImage}
					alt=''
					className='w-full relative rotate-180 z-50'
				/>
			</div>
			<Footer />
		</div>
	);
};

export default About;
