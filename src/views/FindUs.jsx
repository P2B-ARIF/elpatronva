import React from "react";
import image from "./../assets/comida/Avocado-Burger.jpg";

const FindUs = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center'>
			<div className='w-full h-full'>
				<img src={image} alt='' className='w-full h-full' />
			</div>
			<div className='flex flex-col gap-3 items-center justify-center h-full bg-lightYellow py-10'>
				<h5 className='uppercase tracking-wider text-primary'>Location</h5>
				<h1 className='text-3xl md:text-5xl font-bold font-oswald mt-4'>
					HOW TO FIND US?
				</h1>
				<p className='mt-12 text-lg font-semibold font-oswald'>
					CALL US BOOK A TABLE & DELIVERY
				</p>

				<h1 className='text-3xl md:text-4xl font-bold text-soilColor font-oswald'>
					(734) 665-1852
				</h1>

				<h4 className='font-semibold my-5 text-lg font-oswald'>
					INFORMATION COFFEE HOUSE:
				</h4>

				<p>4517 Washington Ave. Mancester Kentucky 39495, USA</p>
				<p>basilicofood123@gmail.com</p>
				<p>Mon - Fri : 9:00am - 22:00pm, Holidays : Close</p>
			</div>
			<div>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1567.1872789744002!2d-77.506604!3d38.224415!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6c6d077f9d517%3A0x813df40f1ef48254!2sEl%20Patron!5e0!3m2!1sen!2sbd!4v1708454307047!5m2!1sen!2sbd'
					width='100%'
					height='550'
					style={{ border: 0 }}
					allowFullScreen=''
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
				></iframe>
			</div>
		</div>
	);
};

export default FindUs;
