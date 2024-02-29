import { Button, Input, Textarea } from "@chakra-ui/react";
import React from "react";
import { IoIosCall, IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import scratchImage from "../assets/scratch.png";
import Footer from "../views/Footer";
import img from "./../assets/slide1.jpg";

const Contact = () => {
	return (
		<section className='absolute top-0 z-0 w-full'>
			<div className='h-[50vh] w-full relative'>
				<img src={img} alt='' className='w-full h-full object-cover' />
				<div className='overlay-text'></div>
			</div>

			{/* <div className='container mx-auto'> */}
			<h3 className='text-4xl font-bold font-oswald text-center mt-20 text-primary'>
				Contact Us
			</h3>

			<p className='text-center my-5 text-red-700'>
				Send us a message and we&apos;ll get back to you as soon as possible.
				Looking forward to hearing rom you!
			</p>

			<img
				src={scratchImage}
				alt=''
				className='relative rotate-180 top-14 w-full h-[150px]'
			/>
			<div className='bg-primary min-h-[800px] flex items-center py-20 md:py-0'>
				<div className='container mx-auto grid grid-cols-1 md:grid-cols-2 items-center'>
					<div className='text-whiteColor p-10'>
						<h2 className='text-3xl font-oswald mb-10 text-lightYellow'>
							Let&apos;s Get In Touch
						</h2>
						<h4 className='flex items-center gap-3 mb-10'>
							<IoMdMail size={25} color='#8f0919' /> mail@elpatronva.com
						</h4>

						<div className='flex gap-5 my-5'>
							<IoLocationSharp size={25} color='#8f0919' />

							<div>
								<h4 className=''>
									Patron #1 10040 Jefferson Davis Hwy,
									<br /> Suite 118 Fredericksburg, VA 22407
								</h4>
								<h4 className='flex items-center mt-2'>
									<IoIosCall /> 540-898-6173
								</h4>
							</div>
						</div>
						<div className='flex gap-5 my-10'>
							<IoLocationSharp size={25} color='#8f0919' />

							<div>
								<h4 className=''>
									Patron #1 10040 Jefferson Davis Hwy,
									<br /> Suite 118 Fredericksburg, VA 22407
								</h4>
								<h4 className='flex items-center mt-2'>
									<IoIosCall /> 540-898-6173
								</h4>
							</div>
						</div>
						<div className='flex gap-5 my-5'>
							<IoLocationSharp size={25} color='#8f0919' />

							<div>
								<h4 className=''>
									Patron #1 10040 Jefferson Davis Hwy, <br /> Suite 118
									Fredericksburg, VA 22407
								</h4>
								<h4 className='flex items-center mt-2'>
									<IoIosCall /> 540-898-6173
								</h4>
							</div>
						</div>
					</div>
					<div className='p-10 flex flex-col gap-7'>
						<h2 className='text-3xl font-oswald mb-5 text-lightYellow'>
							Contact Form:
						</h2>
						<Input
							focusBorderColor='red.500'
							variant='filled'
							placeholder='Name'
						/>
						<Input
							focusBorderColor='red.500'
							variant='filled'
							placeholder='Email'
						/>
						<Input
							focusBorderColor='red.500'
							variant='filled'
							placeholder='Subject'
						/>
						<Textarea
							focusBorderColor='red.500'
							variant='filled'
							placeholder='Write your message'
						/>
						<Button colorScheme='red' size='md'>
							Submit
						</Button>
					</div>
				</div>
			</div>
			<img
				src={scratchImage}
				alt=''
				className='relative bottom-14 w-full h-[150px]'
			/>

			{/* </div> */}

			{/* <div className='w-full mb-10 relative'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1567.1872789744002!2d-77.506604!3d38.224415!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6c6d077f9d517%3A0x813df40f1ef48254!2sEl%20Patron!5e0!3m2!1sen!2sbd!4v1708454307047!5m2!1sen!2sbd'
					width='100%'
					height='550'
					style={{ border: 0 }}
					allowFullScreen=''
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
				></iframe>
				<div className='overlay-text'></div>
			</div> */}
			<div className='h-[30px] md:h-[150px] w-full relative'>
				<img
					src={scratchImage}
					alt=''
					className='w-full relative  rotate-180 z-50'
				/>
			</div>
			<Footer />
		</section>
	);
};

export default Contact;
